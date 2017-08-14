import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { Router, browserHistory } from "react-router";
import ReduxPromise from "redux-promise";

import reducers from "./reducers";
import routes from "./routes";

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
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector(".react-root")
);
