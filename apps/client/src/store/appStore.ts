import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { productReducer } from "@/pages/products/store";
import { userReducer } from "./global/user/userStore";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    // other reducers go here
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {products: ProductState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
