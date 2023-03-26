import { useSelector } from "react-redux";
import { selectProducts } from "./store/selectors";

export const List = () => {
  const products = useSelector(selectProducts);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};
