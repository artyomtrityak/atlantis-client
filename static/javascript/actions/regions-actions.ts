/**
 * Regions actions and action creators
 */

export const SELECT_REGION = "SELECT_REGION";
export const ZOOM_IN = "ZOOM_IN";
export const ZOOM_OUT = "ZOOM_OUT";

export function selectRegion(regionId) {
  return {
    type: SELECT_REGION,
    regionId
  };
}

export function zoomIn() {
  return {
    type: ZOOM_IN
  };
}

export function zoomOut() {
  return {
    type: ZOOM_OUT
  };
}
