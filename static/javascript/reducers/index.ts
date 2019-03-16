import { combineReducers } from "redux";
import navigations, { IState as INavigationState } from "./navigations";
import units, { IState as IUnitsState } from "./units";
import regions, { IState as IRegionsState } from "./regions";
import report, { IState as IReportState } from "./report";

export interface ICombinedReducersState {
  readonly units: IUnitsState;
  readonly navigations: INavigationState;
  readonly regions: IRegionsState;
  readonly report: IReportState;
}

export default combineReducers<ICombinedReducersState>({
  units,
  navigations,
  regions,
  report
});
