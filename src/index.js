import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "index.scss";
import Application from "components/Application";
import allReducers from "reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
//STORE - Global state for redux
let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Application />
    </Provider>
  </BrowserRouter>
);
