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
