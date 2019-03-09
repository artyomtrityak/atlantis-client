import getRaces from "./races";
import getArmors from "./armors";
import getMounts from "./mounts";
import getWeapons from "./weapons";
import getFood from "./food";

const RACES = getRaces();
const ARMORS = getArmors();
const MOUNTS = getMounts();
const WEAPONS = getWeapons();
const FOOD = getFood();

export { RACES, ARMORS, MOUNTS, WEAPONS, FOOD };
