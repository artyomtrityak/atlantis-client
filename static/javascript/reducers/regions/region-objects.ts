import _ from "lodash";
import { IParsedRegionUnitRW, IParsedRegionUnit } from "./regions.d";
export { IParsedRegionUnit };

function parseObject(regionObject: IReportObject) {
  console.log("I am object:", regionObject);
  // TODO: call unit parser for units inside
  return regionObject;
}

export default function parseRegionUnits(region: IRegion) {
  console.log(region.unitsAndObjects);
  const objects = _.chain(region.unitsAndObjects)
    .map(d => {
      if (d.type === "OBJECT") {
        return parseObject(d);
      }
    })
    .compact()
    .value();
  return { ...region, objects };
}
