import { combineReducers } from "redux";
import navigations, { IState as INavigationState } from "./navigations";
import details, { IState as IDetailsState } from "./details";
import units, { IState as IUnitsState } from "./units";
import regions, { IState as IRegionsState } from "./regions";
import report, { IState as IReportState } from "./report";

export interface ICombinedReducersState {
  readonly details: IDetailsState;
  readonly units: IUnitsState;
  readonly navigations: INavigationState;
  readonly regions: IRegionsState;
  readonly report: IReportState;
}

export default combineReducers<ICombinedReducersState>({
  details,
  units,
  navigations,
  regions,
  report
});
