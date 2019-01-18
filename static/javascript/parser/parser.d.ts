export interface IReportItemBase {
  type: string;
}

export interface IReportItemFactionInfo extends IReportItemBase {
  type: "FACTION_INFO";
}

export interface IReportItemDate extends IReportItemBase {
  type: "DATE";
}

export interface IReportItemVersions extends IReportItemBase {
  type: "VERSIONS";
}

export interface IReportItemFactionStatus extends IReportItemBase {
  type: "FACTION_STATUS";
}

export interface IReportItemFactionStatus extends IReportItemBase {
  type: "FACTION_STATUS";
}

export interface IReportItemRegions extends IReportItemBase {
  type: "REGIONS";
  regions: [];
}

export type IReportItem = IReportItemRegions | IReportItemFactionInfo | IReportItemDate | IReportItemVersions | IReportItemFactionStatus;

export type IReport = Array<IReportItem>;
