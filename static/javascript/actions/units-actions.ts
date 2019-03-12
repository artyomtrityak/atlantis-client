import { IActionWithPayload } from "./actions.d";

type ISelectUnitAction = IActionWithPayload<"SELECT_UNIT", number>;
export type IActions = ISelectUnitAction;

/**
 * Units actions and action creators
 */

export const SELECT_UNIT = "SELECT_UNIT";

export function selectUnit(unitId: number): ISelectUnitAction {
  return {
    type: SELECT_UNIT,
    payload: unitId
  };
}
