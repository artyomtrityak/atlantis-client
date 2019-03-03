import _ from "lodash";
import { SELECT_UNIT, IActions as IUnitsActions } from "../../actions/units-actions";
import { REPORT_LOADED, IActions as IReportActions } from "../../actions/report-actions";
import { IState } from "./units.d";
export { IState };

const initialState: IState = {
  selectedUnitId: undefined,
  units: {}
};

// -------------------
// Units Reducer
// -------------------

function unitsReducer(state: IState = initialState, action: IUnitsActions | IReportActions) {
  switch (action.type) {
    case SELECT_UNIT:
      state = { ...state, selectedUnitId: action.payload };
      break;

    case REPORT_LOADED:
      // TODO: parse units <region>__<unit_id> ??
      // console.log("UNITS REPORT:", action);
      break;
  }
  return state;
}

export default unitsReducer;
