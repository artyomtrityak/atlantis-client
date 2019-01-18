import { REPORT_LOADED, IActions as IReportActions } from "../../actions/report-actions";
import { IState } from "./report.d";
export { IState };

const initialState: IState = {
  report: []
};

function detailsReducer(state: IState = initialState, action: IReportActions) {
  switch (action.type) {
    case REPORT_LOADED:
      state = { ...state, report: action.payload };
      break;
  }
  return state;
}

export default detailsReducer;
