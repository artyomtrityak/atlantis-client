export type IOrders = IReportItemOrder["orders"];

export interface IOrdersUnits {
  [unitId: string]: IOrders;
}

export interface IState {
  readonly factionNumber?: number;
  readonly factionPassword?: string;
  readonly units: IOrdersUnits;
}
