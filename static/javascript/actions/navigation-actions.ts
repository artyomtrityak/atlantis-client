/**
 * Navigation actions and action creators
 */

export const OPEN_GAME_MENU = "OPEN_GAME_MENU";
export const CLOSE_GAME_MENU = "CLOSE_GAME_MENU";

export function openGameMenu() {
  return { type: OPEN_GAME_MENU };
}

export function closeGameMenu() {
  return { type: CLOSE_GAME_MENU };
}
