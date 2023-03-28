import { Provider } from "react-redux";
import "./App.css";
import { Products } from "@/pages/products";
import { store } from "@/store/appStore";
import { ButtonsDemo } from "./ComponentsDemo";

function App() {
  return (
    <Provider store={store}>
      <ButtonsDemo />

      <hr />

      <Products />
    </Provider>
  );
}

export default App;
