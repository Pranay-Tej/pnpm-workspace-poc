import { Provider } from "react-redux";
import "./App.css";
import { Products } from "@/pages/products";
import { store } from "@/store/appStore";
import { ButtonsDemo } from "./ComponentsDemo";
import { ProductsSignals } from "./pages/products-signals";

function App() {
  return (
    <Provider store={store}>
      <ButtonsDemo />

      <hr />

      {/* <Products /> */}

      <hr />

      {/* <ProductsSignals /> */}
    </Provider>
  );
}

export default App;
