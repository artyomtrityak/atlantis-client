import { IActionWithPayload } from "./actions.d";

type ISelectUnitAction = IActionWithPayload<"SELECT_UNIT", number>;
type IChangeUnitOrdersAction = IActionWithPayload<
  "CHANGE_UNIT_ORDERS",
  {
    unitId: number;
    orders: string[];
  }
>;
export type IActions = ISelectUnitAction | IChangeUnitOrdersAction;

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

export const CHANGE_UNIT_ORDERS = "CHANGE_UNIT_ORDERS";

export function changeUnitOrders(unitId: number, orders: string[]): IChangeUnitOrdersAction {
  return {
    type: CHANGE_UNIT_ORDERS,
    payload: {
      unitId,
      orders
    }
  };
}
