/**
 * Units actions and action creators
 */

export const SELECT_UNIT = "SELECT_UNIT";

export function selectUnit(unitId) {
  return {
    type: SELECT_UNIT,
    unitId
  };
}
