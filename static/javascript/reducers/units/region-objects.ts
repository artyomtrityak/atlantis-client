import _ from "lodash";
import parseRegionUnit from "./region-units";
import { IObjectStructure, IUnit } from "./units.d";

function parseObject(regionObject: IObjectStructure): [IObjectStructure, IUnit[]] {
  let units = regionObject.objectUnits.map(d => parseRegionUnit(d));
  // Add units from objects to region units list
  units = units.map((unit, i) => {
    return { ...unit, inStructure: regionObject.objectId, ownsStructure: i === 0, inStructureName: regionObject.objectName };
  });
  return [regionObject, units];
}

export default function parseRegionObject(object: IReportObjectStructure): [IObjectStructure, IUnit[]] {
  return parseObject(object);
}
