import { ACTIVATE_TAB, IActions as IDetailsActions } from "../../actions/details-actions";
import { IState, ITabs } from "./details.d";
export { IState, ITabs };

export enum TABS {
  region = "region",
  unit = "unit",
  events = "events",
  battles = "battles"
}

const initialState: IState = {
  activeTab: TABS.region
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
