import { createAction, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductState } from "../models";

const initialState: ProductState = {
  selectedCategory: "",
  products: [],
  categories: [],
  page: 1,
  total: 0,
};

export const productsSlice = createSlice({
  name: "products",
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
export const fetchCategories = createAction("products/fetchCategories");
export const fetchProducts = createAction("products/fetchProducts");

export const productActions = productsSlice.actions;

export const productReducer = productsSlice.reducer;
