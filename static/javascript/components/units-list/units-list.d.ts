export interface IUnitListsProps {
  selectedUnitId?: number;
  onRowClick: (unitId: number) => void;
  width: number;
  height: number;
  units: IUnit[];
  objects: IObjectStructure[]; // TODO: rename to IObjectStructure
}

export type IDataGridObject = {
  id: number;
  faction?: string;
  unit_name: string;
  men?: number;
  silver?: number;
  weapons?: number;
  armor?: number;
  mounts?: number;
  items?: number;
} | null;
