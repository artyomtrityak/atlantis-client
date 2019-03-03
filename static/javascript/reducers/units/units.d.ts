export interface IState {
  readonly selectedUnitId?: string;
  readonly units: {
    [unitId: number]: IReportUnit | IReportObject;
  };
}
