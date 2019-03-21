export interface IUnitEvent extends IReportItemUnitEvent {}

export type IGlobalEvent = string;

export interface IState {
  readonly unitEvents: IUnitEvent[];
  readonly globanEvents: IGlobalEvent[];
}
