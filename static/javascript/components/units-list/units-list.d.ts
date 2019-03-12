export interface IUnitListsProps {
  selectedUnitId?: number;
  onRowClick: (unitId: number) => void;
  width: number;
  height: number;
  units: IUnit[];
  objects: IObjectStructure[]; // TODO: rename to IObjectStructure
}
