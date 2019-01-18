import { OPEN_GAME_MENU, CLOSE_GAME_MENU, SHOW_LOAD_REPORT_MODAL, CLOSE_MODAL, IActions } from "../../actions/navigation-actions";
import { IState } from "./navigations.d";
export { IState };

const initialState: IState = {
  isGameMenuOpen: false,
  activeModalName: undefined
};

// -------------------
// Navigation Reducer
// -------------------

function navigationReducer(state: IState = initialState, action: IActions) {
  switch (action.type) {
    case OPEN_GAME_MENU:
      state = { ...state, isGameMenuOpen: true };
      break;

    case CLOSE_GAME_MENU:
      state = { ...state, isGameMenuOpen: false };
      break;

    case CLOSE_MODAL:
      state = { ...state, activeModalName: undefined };
      break;

    case SHOW_LOAD_REPORT_MODAL:
      state = { ...state, activeModalName: "LOAD_REPORT" };
      break;
  }
  return state;
}

export default navigationReducer;
