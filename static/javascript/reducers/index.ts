import { combineReducers } from "redux";
import navigations from "./navigations";
import details from "./details";
import units from "./units";

export default combineReducers({
  details,
  units,
  navigations
});
