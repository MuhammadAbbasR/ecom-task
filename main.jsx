import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/app.jsx";
import { Provider } from "react-redux";
import { store } from "./src/stores/stores.jsx";
import "./src/index.css"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
