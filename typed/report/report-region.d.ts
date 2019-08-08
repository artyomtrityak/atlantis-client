interface IReportRegionDetailsItem {
  type: string;
  text: string;
  details: string;
}

interface IReportRegion {
  readonly id: string;
  readonly title: string;
  readonly coordinates: {
    readonly x: number;
    readonly y: number;
    readonly z: number;
  };
  readonly type: string;
  readonly details: IReportRegionDetailsItem[];
  weather?: string;
  readonly gate?: string;
  readonly exits?: {
    [key: string]: IReportRegion;
  };
  readonly hasCity: boolean;
  readonly cityName: string;
  readonly unitsAndObjectsRaw?: string[];
  unitsAndObjects: Array<IReportObjectStructure | IReportUnit>;
}
