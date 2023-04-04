import { useEffect } from "react";
import { fetchCategories } from "./store";
import { categories, page, selectedCategory } from "./store";
import { batch } from "@preact/signals-react";

export const Filters = () => {
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <select
        value={selectedCategory.value}
        onChange={(e) => {
          batch(() => {
            // write as a single update, trigger a single api call
            page.value = 1;
            selectedCategory.value = e.target.value;
          });
        }}
      >
        <option value="">All</option>
        {categories.value.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
