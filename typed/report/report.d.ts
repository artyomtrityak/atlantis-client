interface IReportItemFactionInfo {
  readonly type: "FACTION_INFO";
  readonly factionName: string;
  readonly factionNumber: number;
  readonly points: {
    war: number;
    trade: number;
    magic: number;
  };
}

interface IReportItemDate {
  readonly type: "DATE";
}

interface IReportItemVersions {
  readonly type: "VERSIONS";
}

interface IReportItemFactionStatus {
  readonly type: "FACTION_STATUS";
}

interface IReportItemRegions {
  readonly type: "REGIONS";
  readonly regions: IReportRegion[];
}

interface IReportItemEvents {
  readonly type: "EVENTS";
  readonly events: string[];
  unitsEvents: IReportItemUnitEvent[];
  globalEvents: IReportItemGlobalEvent[];
}

interface IReportItemOrdersTemplate {
  readonly type: "ORDERS_TEMPLATE";
  readonly factionNumber: number;
  readonly factionPassword: string;
  readonly orders: Array<IReportItemOrder[]>;
}

type IReportItem =
  | IReportItemRegions
  | IReportItemFactionInfo
  | IReportItemDate
  | IReportItemVersions
  | IReportItemFactionStatus
  | IReportItemEvents
  | IReportItemOrdersTemplate;

type IReport = IReportItem[];
