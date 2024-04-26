import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
// import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import ConfirmContextProvider from "./store/context/ConfirmContextProvider";
import { ReactFlowContext } from "./store/context/ReactFlowContext";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider>
        <ConfirmContextProvider>
          <ReactFlowContext>
            <App />
          </ReactFlowContext>
        </ConfirmContextProvider>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);
