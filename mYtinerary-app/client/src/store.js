import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const initState = {};

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
