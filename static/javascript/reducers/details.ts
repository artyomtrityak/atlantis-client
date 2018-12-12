import { ACTIVATE_TAB } from "../actions/details-actions";

const initialState = {
  activeTab: "region"
};

function detailsReducer(state = initialState, action) {
  switch (action.type) {
    // TOOD: move to navigation
    case ACTIVATE_TAB:
      state = { ...state, activeTab: action.tabName };
      break;
  }
  return state;
}

export default detailsReducer;
