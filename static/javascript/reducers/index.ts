import { combineReducers } from "redux";
import navigations, { IState as INavigationState } from "./navigations";
import units, { IState as IUnitsState } from "./units";
import regions, { IState as IRegionsState } from "./regions";
import report, { IState as IReportState } from "./report";
import events, { IState as IEventsState } from "./events";

export interface ICombinedReducersState {
  readonly units: IUnitsState;
  readonly navigations: INavigationState;
  readonly regions: IRegionsState;
  readonly report: IReportState;
  readonly events: IEventsState;
}

export default combineReducers<ICombinedReducersState>({
  units,
  navigations,
  regions,
  report,
  events
});
