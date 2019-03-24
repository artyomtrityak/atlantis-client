export type IOrders = IReportItemOrder["orders"];

export interface IOrdersUnits {
  [unitId: string]: IOrders;
}

export interface IState {
  readonly factionName?: string;
  readonly factionId?: number;
  readonly factionPassword?: string;
  readonly factionPoints?: {
    war: number;
    trade: number;
    magic: number;
  };
}
