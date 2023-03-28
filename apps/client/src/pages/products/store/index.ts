import { createAction, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductState } from "../models";
import { PRODUCTS_REDUX_KEY } from "../constants";

const initialState: ProductState = {
  selectedCategory: "",
  products: [],
  categories: [],
  page: 1,
  total: 0,
};

export const productsSlice = createSlice({
  name: PRODUCTS_REDUX_KEY,
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
});

// saga actions
export const fetchCategories = createAction(
  `${PRODUCTS_REDUX_KEY}/fetchCategories`
);
export const fetchProducts = createAction(
  `${PRODUCTS_REDUX_KEY}/fetchProducts`
);

export const productActions = productsSlice.actions;

export const productReducer = productsSlice.reducer;
