import _ from "lodash";

function parseObject(regionObject: IReportObject) {
  console.log("I am object:", regionObject);
  return regionObject;
}

function parseUnit(regionUnit: IReportUnit) {
  console.log("I am unit:", regionUnit);
  return regionUnit;
}

export default function parseRegionUnits(region: IRegion) {
  console.log(region.unitsAndObjects);
  const unitsAndObjects = _.chain(region.unitsAndObjects)
    .map(d => {
      if (d.type === "OBJECT") {
        return parseObject(d);
      }
      if (d.type === "UNIT") {
        return parseUnit(d);
      }
    })
    .compact()
    .value();
  return { ...region, unitsAndObjects };
}
