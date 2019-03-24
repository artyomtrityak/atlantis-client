export type IOrders = IReportItemOrder["orders"];

export interface IOrdersUnits {
  [unitId: string]: IOrders;
}

export interface IState {
  readonly units: IOrdersUnits;
}
