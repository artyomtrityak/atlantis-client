import { SELECT_UNIT } from "../actions/units-actions";
import { REPORT_LOADED } from "../actions/report-actions";

const initialState = {
  selectedUnitId: null
};

// -------------------
// Units Reducer
// -------------------

function unitsReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_UNIT:
      state = { ...state, selectedUnitId: action.unitId };
      break;

    case REPORT_LOADED:
      // TODO: parse units <region>__<unit_id> ??
      break;
  }
  return state;
}

export default unitsReducer;
