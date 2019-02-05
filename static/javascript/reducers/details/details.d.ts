export declare enum TABS {
  region = "region",
  unit = "unit",
  events = "events",
  battles = "battles"
}

export type ITabs = keyof typeof TABS;

export interface IState {
  activeTab: ITabs;
}
