"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
require("../styles/index.scss");
// import MenuSvg from "../assets/svg/menu.svg";
const react_1 = __importDefault(require("react"));
const react_dom_1 = require("react-dom");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const reducers_1 = __importDefault(require("./reducers"));
const application_1 = __importDefault(require("./application"));
const store = redux_1.createStore(reducers_1.default);
react_dom_1.render(
  <react_redux_1.Provider store={store}>
    <application_1.default />
  </react_redux_1.Provider>,
  document.getElementById("root")
);
// const rendered: string = `
// <svg viewBox="${MenuSvg.viewBox}">
//   <use xlink:href="#${MenuSvg.id}" />
// </svg>`;
// console.log(rendered);
// function A(b: boolean) {
//   return b;
// }
// A("ddd");
