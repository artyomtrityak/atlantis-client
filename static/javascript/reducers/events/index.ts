import _ from "lodash";
import { REPORT_LOADED, IActions as IReportActions } from "../../actions/report-actions";
import { IState, IUnitEvent } from "./events.d";
export { IState, IUnitEvent };

const initialState: IState = {
  globanEvents: [],
  unitEvents: []
};

function parseEvents(report: IReport) {
  const reportEventsData = report.find(d => {
    return d.type === "EVENTS";
  }) as IReportItemEvents;

  return { globanEvents: [...reportEventsData.globalEvents], unitEvents: [...reportEventsData.unitsEvents] };
}

// -------------------
// Events Reducer
// -------------------

function eventsReducer(state: IState = initialState, action: IReportActions) {
  switch (action.type) {
    case REPORT_LOADED:
      state = { ...state, ...parseEvents(action.payload) };
      break;
  }
  return state;
}

export default eventsReducer;
