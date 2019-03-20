import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

// const reducer = function(state, action) {
//   if (action.type === "HELLO_WORLD") {
//     return state.msg;
//   }
//   return state;
// };

// const store = createStore(reducer, { msg: "Hello" });

// store.subscribe(() => {
//   console.log("store changed", store.getState());
// });

// store.dispatch({ type: "HELLO_WORLD", payload: "Buddy" });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
