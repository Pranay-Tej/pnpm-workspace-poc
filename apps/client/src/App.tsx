import { Provider } from "react-redux";
import "./App.css";
import { ButtonsDemo } from "./ComponentsDemo";
import { Products } from "./pages/products";
import { store } from "./store";

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
