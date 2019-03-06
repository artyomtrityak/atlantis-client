interface IRegion {
  readonly id: string;
  readonly title: string;
  readonly coordinates: {
    readonly x: number;
    readonly y: number;
    readonly z: number;
  };
  readonly type: string;
  readonly details: string[];
  readonly gate?: string;
  readonly exits?: {
    [key: string]: IRegion;
  };
  readonly unitsAndObjectsRaw?: string[];
  readonly unitsAndObjects: Array<IReportObject | IReportUnit>;
  readonly units: Array<IReportObject | IReportUnit>;
}

interface IRegions {
  readonly [key: string]: IRegion;
}

interface IReportItemRegions extends IReportItemBase {
  readonly type: "REGIONS";
  readonly regions: IRegion[];
}
