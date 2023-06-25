import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallbackRender={({ error }) => <div>{error.message}</div>}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
