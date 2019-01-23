import { IAction } from "./actions.d";

type IOpenMenuAction = IAction<"OPEN_GAME_MENU">;
type ICloseMenuAction = IAction<"CLOSE_GAME_MENU">;
type IShowLoaderModalAction = IAction<"SHOW_LOAD_REPORT_MODAL">;
type ICloseModalAction = IAction<"CLOSE_MODAL">;
type IShowLoaderAction = IAction<"SHOW_LOADER">;
type IHideLoaderAction = IAction<"HIDE_LOADER">;
export type IActions =
  | IOpenMenuAction
  | ICloseMenuAction
  | IShowLoaderModalAction
  | ICloseModalAction
  | IShowLoaderAction
  | IHideLoaderAction;

/**
 * Navigation actions and action creators
 */

export const OPEN_GAME_MENU = "OPEN_GAME_MENU";
export const CLOSE_GAME_MENU = "CLOSE_GAME_MENU";
export const SHOW_LOAD_REPORT_MODAL = "SHOW_LOAD_REPORT_MODAL"; // TODO: make global modal loader
export const CLOSE_MODAL = "CLOSE_MODAL";
export const SHOW_LOADER = "SHOW_LOADER";
export const HIDE_LOADER = "HIDE_LOADER";

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

export function showLoader(): IShowLoaderAction {
  return { type: SHOW_LOADER };
}

export function hideLoader(): IHideLoaderAction {
  return { type: HIDE_LOADER };
}
