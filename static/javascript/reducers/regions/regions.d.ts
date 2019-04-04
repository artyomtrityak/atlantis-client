export interface IRegion extends IReportRegion {
  // Copy same for name convention
  readonly exits?: {
    [key: string]: IRegion;
  };

  // Reducer calculations
  readonly hasLair: boolean;
  readonly hasRoadN: boolean;
  readonly hasRoadNE: boolean;
  readonly hasRoadNW: boolean;
  readonly hasRoadS: boolean;
  readonly hasRoadSE: boolean;
  readonly hasRoadSW: boolean;
}

export interface IRegions {
  readonly [key: string]: IRegion;
}

export interface ILevel {
  readonly maxX: number;
  readonly maxY: number;
  readonly isWrap: boolean;
  readonly regions: IRegions;
  readonly level: number;
  readonly selectedRegion: string;
}

export interface IState {
  readonly levels: ReadonlyArray<ILevel>;
  readonly mapLevel: number;
  readonly zoom: number;
}
