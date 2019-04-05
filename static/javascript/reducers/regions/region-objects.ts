import { IRegion } from "./regions.d";

const LAIRS = [
  "Crypt, closed to player units",
  "Ruin, closed to player units",
  "Demon Pit, closed to player units",
  "Magician's Tower, closed to player units",
  "Dark Mage Tower, closed to player units"
];

export const hasLair = (region: IRegion): boolean => {
  const lair = region.unitsAndObjects.find(d => {
    if (d.type === "OBJECT" && LAIRS.includes(d.objectType)) {
      return true;
    }
    return false;
  });
  return !!lair;
};
