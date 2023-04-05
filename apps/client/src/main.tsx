import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@sb/css-variables/variables.css";
import "@sb/css-utils/utils.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
