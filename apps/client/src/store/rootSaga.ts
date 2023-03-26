import { all } from "redux-saga/effects";
import { productsSaga } from "../pages/products/store/saga";

export function* rootSaga() {
  yield all([
    productsSaga(),
    // other sagas go here
  ]);
}
