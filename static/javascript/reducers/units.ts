import { SELECT_UNIT } from "../actions/units-actions";

const initialState = {
  selectedUnitId: null
};

function unitsReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_UNIT:
      state = Object.assign({}, state, { selectedUnitId: action.unitId });
      break;
  }
  return state;
}

export default unitsReducer;
