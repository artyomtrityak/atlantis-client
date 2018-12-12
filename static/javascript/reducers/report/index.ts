import { REPORT_LOADED } from "../../actions/report-actions";

const initialState = {
  report: undefined
};

function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case REPORT_LOADED:
      state = { ...state, report: action.report };
      break;
  }
  return state;
}

export default detailsReducer;
