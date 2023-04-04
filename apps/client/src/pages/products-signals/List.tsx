import { products } from "./store";

export const List = () => {
  return (
    <div>
      {products.value.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};
