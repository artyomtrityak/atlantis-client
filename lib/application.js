"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const App = () => {
  return <div>App</div>;
};
const mapStateToProps = state => {
  return {
    test: 1
  };
};
exports.default = App;
// const mapStateToProps = (state) => {
//   return {
//     test: 1,
//   };
// };
// function mapStateToProps() {
//  //
// }
// function mapDispatchToProps() {
//  //
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(App);
