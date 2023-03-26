import axios, { AxiosResponse } from "axios";
import { debounce, put, select, takeLatest } from "redux-saga/effects";
import { fetchCategories, fetchProducts, productActions } from ".";
import { PER_PAGE } from "../constants";
import { ProductResponse } from "../models";
import { selectPage, selectSelectedCategory } from "./selectors";

function* fetchCategoriesSaga() {
  try {
    const categoriesResponse: AxiosResponse<string[]> = yield axios.get(
      "https://dummyjson.com/products/categories"
    );
    yield put(productActions.setCategories(categoriesResponse.data));
  } catch (error) {
    console.error(error);
  }
}

function* fetchProductsSaga() {
  try {
    let requestUrl = "https://dummyjson.com/products";

    const selectedCategory: string = yield select(selectSelectedCategory);
    if (selectedCategory) {
      requestUrl += `/category/${selectedCategory}`;
    }

    const page: number = yield select(selectPage);
    requestUrl += `?limit=${PER_PAGE}&skip=${(page - 1) * PER_PAGE}`;

    const productsResponse: AxiosResponse<ProductResponse> = yield axios.get(
      requestUrl
    );
    yield put(productActions.setProducts(productsResponse.data.products));
    yield put(productActions.setTotal(productsResponse.data.total));
  } catch (error) {
    console.error(error);
  }
}

function* handleProductsParamsChange() {
  yield debounce(
    150,
    [productActions.setPage.type, productActions.setSelectedCategory.type],
    fetchProductsSaga
  );
}

export function* productsSaga() {
  yield takeLatest(fetchCategories.type, fetchCategoriesSaga);
  yield takeLatest(fetchProducts.type, fetchProductsSaga);
  //   yield takeLatest(
  //     [productActions.setPage.type, productActions.setSelectedCategory.type],
  //     fetchProductsSaga
  //   );
  yield handleProductsParamsChange();
}
