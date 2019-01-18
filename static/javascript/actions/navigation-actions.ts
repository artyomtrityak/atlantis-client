import { IAction } from "./actions.d";

type IOpenMenuAction = IAction<"OPEN_GAME_MENU">;
type ICloseMenuAction = IAction<"CLOSE_GAME_MENU">;
type IShowLoaderModalAction = IAction<"SHOW_LOAD_REPORT_MODAL">;
type ICloseModalAction = IAction<"CLOSE_MODAL">;
export type IActions = IOpenMenuAction | ICloseMenuAction | IShowLoaderModalAction | ICloseModalAction;

/**
 * Navigation actions and action creators
 */

export const OPEN_GAME_MENU = "OPEN_GAME_MENU";
export const CLOSE_GAME_MENU = "CLOSE_GAME_MENU";
export const SHOW_LOAD_REPORT_MODAL = "SHOW_LOAD_REPORT_MODAL"; // TODO: make global modal loader
export const CLOSE_MODAL = "CLOSE_MODAL";

export function openGameMenu(): IOpenMenuAction {
  return { type: OPEN_GAME_MENU };
}

export function closeGameMenu(): ICloseMenuAction {
  return { type: CLOSE_GAME_MENU };
}

export function showLoadReportModal(): IShowLoaderModalAction {
  return { type: SHOW_LOAD_REPORT_MODAL };
}

export function closeModal(): ICloseModalAction {
  return { type: CLOSE_MODAL };
}
