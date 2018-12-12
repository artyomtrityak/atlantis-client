import { REPORT_LOADED } from "../actions/report-actions";

const initialState = {
  regions: []
};

function regionsReducer(state = initialState, action) {
  switch (action.type) {
    case REPORT_LOADED:
      // TODO: parse regions
      break;
  }
  return state;
}

export default regionsReducer;
