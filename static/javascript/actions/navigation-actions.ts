/**
 * Navigation actions and action creators
 */

export const OPEN_GAME_MENU = "OPEN_GAME_MENU";
export const CLOSE_GAME_MENU = "CLOSE_GAME_MENU";
export const SHOW_LOAD_REPORT_MODAL = "SHOW_LOAD_REPORT_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export function openGameMenu() {
  return { type: OPEN_GAME_MENU };
}

export function closeGameMenu() {
  return { type: CLOSE_GAME_MENU };
}

export function showLoadReportModal() {
  return { type: SHOW_LOAD_REPORT_MODAL };
}

export function closeModal() {
  return { type: CLOSE_MODAL };
}
