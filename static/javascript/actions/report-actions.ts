import { IActionWithPayload } from "./actions.d";

type IReportLoadedAction = IActionWithPayload<"REPORT_LOADED", IReport>;
export type IActions = IReportLoadedAction;

/**
 * Report actions and action creators
 */

export const REPORT_LOADED = "REPORT_LOADED";

export function reportLoaded(report: IReport): IReportLoadedAction {
  return {
    type: REPORT_LOADED,
    payload: report
  };
}
