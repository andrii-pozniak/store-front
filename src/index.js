import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { DataProvider } from "../src/components/Context/DataContext";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./theme";
import { store, persist } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persist}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="store-front">
          <DataProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </DataProvider>
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  </React.StrictMode>
);
