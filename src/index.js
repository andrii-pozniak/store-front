import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { DataProvider } from "../src/components/Context/DataContext";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./theme";
import { store } from "./redux/store";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="store-front">
        <DataProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </DataProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
