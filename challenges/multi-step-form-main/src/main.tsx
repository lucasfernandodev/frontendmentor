import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import "./style/colors.css";
import "./style/global.css";
import PurchaseProvider from "./Context/PurchaseContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <PurchaseProvider>
        <App />
      </PurchaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);
