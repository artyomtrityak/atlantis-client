import { ACTIVATE_TAB, IActions as IDetailsActions } from "../../actions/details-actions";
import { IState } from "./details.d";
export { IState };

const initialState: IState = {
  activeTab: "region"
};

// -------------------
// Details Reducer
// -------------------

function detailsReducer(state: IState = initialState, action: IDetailsActions) {
  switch (action.type) {
    // TOOD: move to navigation
    case ACTIVATE_TAB:
      state = { ...state, activeTab: action.payload };
      break;
  }
  return state;
}

export default detailsReducer;
