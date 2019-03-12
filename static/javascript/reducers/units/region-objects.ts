import _ from "lodash";
import parseRegionUnit from "./region-units";

function parseObject(regionObject: IObjectStructure): [IObjectStructure, IUnit[]] {
  let units = regionObject.objectUnits.map(d => parseRegionUnit(d));
  // Add units from objects to region units list
  units = units.map(unit => {
    return { ...unit, inObject: regionObject.objectId };
    // region.units.push(unit as IParsedRegionUnit);
  });
  return [regionObject, units];
}

export default function parseRegionObject(object: IReportObjectStructure): [IObjectStructure, IUnit[]] {
  return parseObject(object);
}
