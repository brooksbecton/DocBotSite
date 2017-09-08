import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter } from "react-router-dom";
import ReduxPromise from "redux-promise";
import "regenerator-runtime/runtime";

import reducers from "./reducers";
import App from "./components/app";
import "bootstrap-social";
import "./bundle.scss";

import { getProverbsWatcher, getProverbByIdWatcher } from "./sagas/proverbs";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [ReduxPromise, sagaMiddleware];

const enhancers = [applyMiddleware(...middlewares)];

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(reducers, composeEnhancers(...enhancers));

sagaMiddleware.run(getProverbByIdWatcher);
sagaMiddleware.run(getProverbsWatcher);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector(".react-root")
);
