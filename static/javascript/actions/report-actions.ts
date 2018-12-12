/**
 * Report actions and action creators
 */

export const REPORT_LOADED = "REPORT_LOADED";

export function reportLoaded(report) {
  return {
    type: REPORT_LOADED,
    report
  };
}
