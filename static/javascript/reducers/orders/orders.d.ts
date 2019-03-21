export interface IOrdersUnits {
  [unitId: string]: IReportItemOrder["orders"];
}

export interface IState {
  readonly factionNumber?: number;
  readonly factionPassword?: string;
  readonly units: IOrdersUnits;
}
