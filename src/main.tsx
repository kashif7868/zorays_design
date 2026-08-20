import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import App from "./App";
import { store } from "./app/store";
import ScrollToTop from "./components/common/ScrollToTop";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />

        <App />

        <ToastContainer
          position="top-right"
          autoClose={2200}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
        />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);