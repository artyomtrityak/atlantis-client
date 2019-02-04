export interface IRegion {
  id: string;
  title: string;
  coordinates: {
    x: number;
    y: number;
    z: number;
  };
  type: string;
  exits?: {
    [key: string]: IRegion;
  };
}

export interface IRegions {
  [key: string]: IRegion;
}

interface ILevel {
  maxX: number;
  maxY: number;
  isWrap: boolean;
  regions: IRegions;
  level: number;
}

export interface IState {
  readonly levels: ReadonlyArray<ILevel>;
  readonly mapLevel: number;
  readonly zoom: number;
  readonly selectedRegion?: string;
}
