import _ from "lodash";
import { IParsedRegionUnitRW, IParsedRegionUnit } from "./regions.d";
export { IParsedRegionUnit };

function parseFlag(unit: IParsedRegionUnitRW, d: IReportUnitFlag) {
  console.log("FLAG1111:", d);
  switch (d.flag) {
    case "behind":
      unit.flags.flagBehind = true;
      break;
    case "spoils_walking":
      unit.flags.spoilsWalking = true;
      break;
    // TODO: add other flags
  }
  return unit;
}

function parseUnit(regionUnit: IReportUnit) {
  console.log("I am unit:", regionUnit);
  const unit: IParsedRegionUnitRW = {
    id: regionUnit.unitId,
    name: regionUnit.unitName,
    faction: regionUnit.faction,

    // Flags defaults
    flags: {
      flagBehind: false,
      spoilsWalking: false
    },

    // Unit items
    items: []
  };

  if (regionUnit.unitDetails && Array.isArray(regionUnit.unitDetails)) {
    regionUnit.unitDetails.forEach(d => {
      switch (d.type) {
        case "UNIT_FLAG":
          parseFlag(unit, d);
          break;
      }
    });
  }

  return unit;
}

export default function parseRegionUnits(region: IRegion) {
  console.log(region.unitsAndObjects);
  const unitsAndObjectsParsed = _.chain(region.unitsAndObjects)
    .map(d => {
      if (d.type === "UNIT") {
        return parseUnit(d);
      }
    })
    .compact()
    .value();
  return { ...region, unitsAndObjectsParsed };
}
