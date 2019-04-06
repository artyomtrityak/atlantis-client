import { IRegion } from "./regions.d";

const LAIRS = [
  "Crypt, closed to player units",
  "Ruin, closed to player units",
  "Demon Pit, closed to player units",
  "Magician's Tower, closed to player units",
  "Dark Mage Tower, closed to player units"
];

const SHAFTS = ["Shaft, contains an inner location"];

const ROADS = ["Road S", "Road SE", "Road SW", "Road N", "Road NE", "Road NW"];

const SHIPS = ["Longboat", "Galleon", "Armored Galleon"];

export const getObjects = (region: IRegion): typeof flags => {
  const flags = {
    hasLair: false,
    hasRoadS: false,
    hasRoadSW: false,
    hasRoadSE: false,
    hasRoadN: false,
    hasRoadNE: false,
    hasRoadNW: false
  };

  region.unitsAndObjects.forEach(d => {
    if (d.type !== "OBJECT") {
      return;
    }

    // Lairs
    if (LAIRS.includes(d.objectType)) {
      flags.hasLair = true;
    }

    // Roads
    if (d.objectType === "Road S") {
      flags.hasRoadS = true;
    }

    if (d.objectType === "Road SW") {
      flags.hasRoadSW = true;
    }

    if (d.objectType === "Road SE") {
      flags.hasRoadSE = true;
    }

    if (d.objectType === "Road N") {
      flags.hasRoadN = true;
    }

    if (d.objectType === "Road NE") {
      flags.hasRoadNE = true;
    }

    if (d.objectType === "Road NW") {
      flags.hasRoadNW = true;
    }

    // Ships

    console.log(d.objectType);
  });
  return flags;
};
