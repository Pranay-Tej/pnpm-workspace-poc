import { RootState } from "../../../store";

export const selectCategories = (state: RootState) => state.products.categories;
export const selectSelectedCategory = (state: RootState) =>
  state.products.selectedCategory;
export const selectProducts = (state: RootState) => state.products.products;
export const selectPage = (state: RootState) => state.products.page;
export const selectTotal = (state: RootState) => state.products.total;
