import { ACTIVATE_TAB, IActions as IDetailsActions } from "../../actions/details-actions";
import { IState, ITabs } from "./details.d";
export { IState, ITabs };

const initialState: IState = {
  activeTab: "REGION"
};

// -------------------
// Details Reducer
// -------------------

function detailsReducer(state: IState = initialState, action: IDetailsActions) {
  switch (action.type) {
    case ACTIVATE_TAB:
      state = { ...state, activeTab: action.payload };
      break;
  }
  return state;
}

export default detailsReducer;
