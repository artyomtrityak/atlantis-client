import { IActionWithPayload, IAction } from "./actions.d";

type ISelectRegionAction = IActionWithPayload<"SELECT_REGION", string>;
type IZoomInAction = IAction<"ZOOM_IN">;
type IZoomOutAction = IAction<"ZOOM_OUT">;
type ILevelUpAction = IAction<"LEVEL_UP">;
type ILevelDownAction = IAction<"LEVEL_DOWN">;

export type IActions = ISelectRegionAction | IZoomInAction | IZoomOutAction | ILevelUpAction | ILevelDownAction;

/**
 * Regions actions and action creators
 */

export const SELECT_REGION = "SELECT_REGION";
export const ZOOM_IN = "ZOOM_IN";
export const ZOOM_OUT = "ZOOM_OUT";
export const LEVEL_UP = "LEVEL_UP";
export const LEVEL_DOWN = "LEVEL_DOWN";

export function selectRegion(regionId: string): ISelectRegionAction {
  return {
    type: SELECT_REGION,
    payload: regionId
  };
}

export function zoomIn(): IZoomInAction {
  return {
    type: ZOOM_IN
  };
}

export function zoomOut(): IZoomOutAction {
  return {
    type: ZOOM_OUT
  };
}

export function levelUp(): ILevelUpAction {
  return {
    type: LEVEL_UP
  };
}

export function levelDown(): ILevelDownAction {
  return {
    type: LEVEL_DOWN
  };
}
