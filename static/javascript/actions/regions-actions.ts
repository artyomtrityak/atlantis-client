/**
 * Regions actions and action creators
 */

export const SELECT_REGION = "SELECT_REGION";

export function selectRegion(regionId) {
  return {
    type: SELECT_REGION,
    regionId
  };
}
