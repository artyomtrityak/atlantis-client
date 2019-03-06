import _ from "lodash";
import { IParsedRegionUnitRW, IParsedRegionUnit } from "./regions.d";
export { IParsedRegionUnit };

function parseWeight(unit: IParsedRegionUnitRW, d: IReportUnitWeight) {
  unit.weight = d.weight;
  return unit;
}

function parseFlag(unit: IParsedRegionUnitRW, d: IReportUnitFlag) {
  switch (d.flag) {
    case "behind":
      unit.flags.flagBehind = true;
      break;
    case "avoiding":
      unit.flags.avoiding = true;
      break;
    case "taxing":
      unit.flags.taxing = true;
      break;
    case "guard":
      unit.flags.guard = true;
      break;
    case "holding":
      unit.flags.holding = true;
      break;
    case "consuming_faction":
      unit.flags.consumingFaction = true;
      break;
    case "consuming_unit":
      unit.flags.consumingUnit = true;
      break;
    case "sharing":
      unit.flags.sharing = true;
      break;
    case "visibility_reveal_faction":
      unit.flags.visibilityRevealFaction = true;
      break;
    case "visibility_reveal_unit":
      unit.flags.visibilityRevealUnit = true;
      break;
    case "spoils_walking":
      unit.flags.spoilsWalking = true;
      break;
    case "spoils_weightless":
      unit.flags.spoilsWeightless = true;
      break;
    case "spoils_riding":
      unit.flags.spoilsRiding = true;
      break;
    case "spoils_flying":
      unit.flags.spoilsFlying = true;
      break;
    case "noaid":
      unit.flags.noaid = true;
      break;
  }
  return unit;
}

function parseUnit(regionUnit: IReportUnit) {
  console.log("I am unit:", regionUnit);
  const unit: IParsedRegionUnitRW = {
    id: regionUnit.unitId,
    name: regionUnit.unitName,
    faction: regionUnit.faction,
    weight: 0,

    // Flags defaults
    flags: {
      flagBehind: false,
      avoiding: false,
      noaid: false,
      taxing: false,
      guard: false,
      holding: false,
      consumingFaction: false,
      consumingUnit: false,
      sharing: false,
      visibilityRevealFaction: false,
      visibilityRevealUnit: false,
      spoilsWalking: false,
      spoilsWeightless: false,
      spoilsRiding: false,
      spoilsFlying: false
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
        case "WEIGHT":
          parseWeight(unit, d);
      }
    });
  }

  return unit;
}

export default function parseRegionUnits(region: IRegion) {
  console.log(region.unitsAndObjects);
  const units = _.chain(region.unitsAndObjects)
    .map(d => {
      if (d.type === "UNIT") {
        return parseUnit(d);
      }
    })
    .compact()
    .value();
  return { ...region, units };
}
