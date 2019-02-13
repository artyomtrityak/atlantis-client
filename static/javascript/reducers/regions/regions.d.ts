export interface IRegion {
  readonly id: string;
  readonly title: string;
  readonly coordinates: {
    x: number;
    y: number;
    z: number;
  };
  readonly type: string;
  readonly details: string[];
  readonly gate?: string;
  readonly exits?: {
    [key: string]: IRegion;
  };
}

export interface IRegions {
  readonly [key: string]: IRegion;
}

interface ILevel {
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
