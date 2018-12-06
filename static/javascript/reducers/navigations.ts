import { OPEN_GAME_MENU, CLOSE_GAME_MENU, SHOW_LOAD_REPORT_MODAL, CLOSE_MODAL } from "../actions/navigation-actions";

const initialState = {
  isGameMenuOpen: false,
  activeModalName: undefined
};

function navigationReducer(state = initialState, action) {
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
