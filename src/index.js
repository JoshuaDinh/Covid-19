import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider, applyMiddleware } from "react-redux";
import { createStore } from "redux";
import { rootReducers } from "./Reducers";
import logger from "redux-logger";

const store = createStore(rootReducers, applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
