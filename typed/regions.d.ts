interface IRegion extends IReportRegion {
  // copy same for name convention
  readonly exits?: {
    [key: string]: IRegion;
  };
}

interface IRegions {
  readonly [key: string]: IRegion;
}

interface IObjectStructure extends IReportObjectStructure {} // copy same for name convention
