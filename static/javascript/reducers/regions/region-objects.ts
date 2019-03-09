import _ from "lodash";
import { parseRegionUnit } from "./region-units";

function parseObject(regionObject: IReportObject, region: IRegion) {
  const units = regionObject.objectUnits.map(d => parseRegionUnit(d));
  // Add units from objects to region units list
  units.forEach(unit => {
    unit = { ...unit, inObject: regionObject.objectId };
    region.units.push(unit as IParsedRegionUnit);
  });
  return regionObject;
}

export function parseRegionObjects(region: IRegion) {
  const objects = _.chain(region.unitsAndObjects)
    .map(d => {
      if (d.type === "OBJECT") {
        return parseObject(d, region);
      }
    })
    .compact()
    .value();
  return { ...region, objects };
}
