import { ACTIVATE_TAB } from "../actions/details-actions";

const initialState = {
  activeTab: "region"
};

function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIVATE_TAB:
      state = Object.assign({}, state, { activeTab: action.tabName });
      break;
  }
  return state;
}

export default detailsReducer;
