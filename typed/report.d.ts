interface IReportItemBase {
  type: string;
}

interface IReportItemFactionInfo extends IReportItemBase {
  type: "FACTION_INFO";
}

interface IReportItemDate extends IReportItemBase {
  type: "DATE";
}

interface IReportItemVersions extends IReportItemBase {
  type: "VERSIONS";
}

interface IReportItemFactionStatus extends IReportItemBase {
  type: "FACTION_STATUS";
}

interface IReportObject {
  objectId: number;
  objectName: string;
  objectType: string;
  objectUnits: IReportUnit[];
}

interface IReportUnit {
  unitName: string;
  unitId: number;
  faction: {
    factionId: number;
    factionName: string;
  };
  unitDetails: object[];
}

interface IRegion {
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
  readonly unitsAndObjects?: string[];
  unitsAndObjectsParsed: Array<IReportObject | IReportUnit>;
}

interface IReportItemRegions extends IReportItemBase {
  type: "REGIONS";
  regions: IRegion[];
}

type IReportItem = IReportItemRegions | IReportItemFactionInfo | IReportItemDate | IReportItemVersions | IReportItemFactionStatus;

type IReport = IReportItem[];
