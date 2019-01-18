import { IActionWithPayload } from "./actions.d";

type ISelectTabAction = IActionWithPayload<"ACTIVATE_TAB", string>;
export type IActions = ISelectTabAction;

/**
 * Details actions and action creators
 */

export const ACTIVATE_TAB = "ACTIVATE_TAB";

export function activateTab(tabName: string): ISelectTabAction {
  return {
    type: ACTIVATE_TAB,
    payload: tabName
  };
}
