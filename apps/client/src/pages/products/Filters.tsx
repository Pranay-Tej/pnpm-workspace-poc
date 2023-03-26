import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, productActions } from "./store";
import { selectCategories, selectSelectedCategory } from "./store/selectors";

export const Filters = () => {
  const categories = useSelector(selectCategories);
  const selectedCategory = useSelector(selectSelectedCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div>
      <select
        value={selectedCategory}
        onChange={(e) => {
          dispatch(productActions.setPage(1));
          dispatch(productActions.setSelectedCategory(e.target.value));
        }}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
