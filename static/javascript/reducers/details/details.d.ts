export type ITabs = "REGION" | "UNIT" | "EVENTS" | "BATTLES";

export interface IState {
  readonly activeTab: ITabs;
}
