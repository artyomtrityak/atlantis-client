export interface IStateRegionUnits {
  [regionId: string]: {
    units: IUnit[];
    objects: IObjectStructure[];
  };
}

export interface IState {
  readonly selectedUnitId?: number;
  readonly regions: IStateRegionUnits;
}
