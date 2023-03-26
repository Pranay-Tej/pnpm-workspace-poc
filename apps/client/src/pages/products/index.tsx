import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Filters } from "./Filters";
import { List } from "./List";
import { Pagination } from "./Pagination";
import { fetchProducts } from "./store";

export const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <h2>Redux Toolkit demo</h2>
      <Filters />
      <List />
      <Pagination />
    </>
  );
};
