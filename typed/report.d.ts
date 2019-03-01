interface IReportItemBase {
  type: string;
}

interface IReportItemFactionInfo extends IReportItemBase {
  readonly type: "FACTION_INFO";
}

interface IReportItemDate extends IReportItemBase {
  readonly type: "DATE";
}

interface IReportItemVersions extends IReportItemBase {
  readonly type: "VERSIONS";
}

interface IReportItemFactionStatus extends IReportItemBase {
  readonly type: "FACTION_STATUS";
}

type IReportItem = IReportItemRegions | IReportItemFactionInfo | IReportItemDate | IReportItemVersions | IReportItemFactionStatus;

type IReport = IReportItem[];
