type IReportItemGlobalEvent = string;

interface IReportItemUnitEvent {
  unit: {
    unitId: number;
    unitName: string;
  };
  eventText: string;
}
