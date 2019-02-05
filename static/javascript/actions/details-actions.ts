import { ITabs } from "../reducers/details";
import { IActionWithPayload } from "./actions.d";

type ISelectTabAction = IActionWithPayload<"ACTIVATE_TAB", ITabs>;
export type IActions = ISelectTabAction;

/**
 * Details actions and action creators
 */

export const ACTIVATE_TAB = "ACTIVATE_TAB";

export function activateTab(tabName: ITabs): ISelectTabAction {
  return {
    type: ACTIVATE_TAB,
    payload: tabName
  };
}
