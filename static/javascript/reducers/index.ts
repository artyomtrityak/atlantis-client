import { combineReducers } from "redux";
import navigations from "./navigations";
import details from "./details";
import units from "./units";
import regions from "./regions";

export default combineReducers({
  details,
  units,
  navigations,
  regions
});
