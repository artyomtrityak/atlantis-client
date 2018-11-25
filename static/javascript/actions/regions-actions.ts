/**
 * Regions actions and action creators
 */

export const ACTIVATE_TAB = "ACTIVATE_TAB";

export function activateTab(tabName) {
  return {
    type: ACTIVATE_TAB,
    tabName
  };
}
