import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "../i18n.js";
import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Suspense>
        <App />
      </Suspense>
    </React.StrictMode>
  </BrowserRouter>
);
