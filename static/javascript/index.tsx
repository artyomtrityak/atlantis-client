import "../styles/index.scss";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import App from "./application";

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// import MenuSvg from "../assets/svg/menu.svg";
// const rendered: string = `
// <svg viewBox="${MenuSvg.viewBox}">
//   <use xlink:href="#${MenuSvg.id}" />
// </svg>`;

// console.log(rendered);
