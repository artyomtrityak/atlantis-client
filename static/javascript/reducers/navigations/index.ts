import {
  OPEN_GAME_MENU,
  CLOSE_GAME_MENU,
  SHOW_LOAD_REPORT_MODAL,
  CLOSE_MODAL,
  SHOW_LOADER,
  HIDE_LOADER,
  IActions
} from "../../actions/navigation-actions";
import { IState } from "./navigations.d";
export { IState };

const initialState: IState = {
  isGameMenuOpen: false,
  loading: false,
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

    case SHOW_LOADER:
      state = { ...state, loading: true };
      break;

    case HIDE_LOADER:
      state = { ...state, loading: false };
      break;
  }
  return state;
}

export default navigationReducer;
