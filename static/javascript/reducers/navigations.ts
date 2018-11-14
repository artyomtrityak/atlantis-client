import { OPEN_GAME_MENU, CLOSE_GAME_MENU } from "../actions/navigation-actions";

const initialState = {
  isGameMenuOpen: false
};

function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_GAME_MENU:
      state = Object.assign({}, state, { isGameMenuOpen: true });
      break;
    case CLOSE_GAME_MENU:
      state = Object.assign({}, state, { isGameMenuOpen: false });
      break;
  }
  return state;
}

export default navigationReducer;
