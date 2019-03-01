export interface IState {
  readonly selectedUnitId?: string;
  readonly units: {
    [userId: string]: IReportUnit | IReportObject;
  };
}
