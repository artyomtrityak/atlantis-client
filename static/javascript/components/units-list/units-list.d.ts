import { IUnit } from "../../reducers/units";
import { IObjectStructure } from "../../reducers/units";

export interface IUnitListsProps {
  selectedUnitId?: number;
  onRowClick: (unitId: number) => void;
  width: number;
  height: number;
  units: IUnit[];
  objects: IObjectStructure[];
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
  struct?: string;
  ownsStruct?: string;
} | null;
