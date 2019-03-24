import _ from "lodash";
import { REPORT_LOADED, IActions as IReportActions } from "../../actions/report-actions";
import { IState } from "./faction.d";
export { IState };

const initialState: IState = {
  factionName: undefined,
  factionId: undefined,
  factionPassword: undefined,
  factionPoints: undefined
};

function parseFaction(report: IReport) {
  const reportFactionData = report.find(d => {
    return d.type === "FACTION_INFO";
  }) as IReportItemFactionInfo;

  const reportOrdersData = report.find(d => {
    return d.type === "FACTION_INFO";
  }) as IReportItemOrdersTemplate;

  return {
    factionId: reportFactionData.factionNumber,
    factionName: reportFactionData.factionName,
    factionPoints: reportFactionData.points,
    factionPassword: reportOrdersData.factionPassword
  };
}

// -------------------
// Events Reducer
// -------------------

function factionReducer(state: IState = initialState, action: IReportActions) {
  switch (action.type) {
    case REPORT_LOADED:
      state = { ...state, ...parseFaction(action.payload) };
      break;
  }
  return state;
}

export default factionReducer;
