import _ from "lodash";

// TODO: move types to d.ts

interface IParsedRegionUnitRW {
  id: number;
  name: string;
  faction: {
    factionId: number;
    factionName: string;
  };
  flagBehind: boolean;
  spoilsWalking: boolean;
}
export type IParsedRegionUnit = Readonly<IParsedRegionUnitRW>;

function parseObject(regionObject: IReportObject) {
  console.log("I am object:", regionObject);
  return regionObject;
}

function parseFlag(unit: IParsedRegionUnitRW, d: IReportUnitFlag) {
  console.log("FLAG1111:", d);
  switch (d.flag) {
    case "behind":
      unit.flagBehind = true;
      break;
    case "spoils_walking":
      unit.spoilsWalking = true;
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
    flagBehind: false,
    spoilsWalking: false
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
      if (d.type === "OBJECT") {
        return parseObject(d);
      }
      if (d.type === "UNIT") {
        return parseUnit(d);
      }
    })
    .compact()
    .value();
  return { ...region, unitsAndObjectsParsed };
}
