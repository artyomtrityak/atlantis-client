import _ from "lodash";
import { RACES, WEAPONS, ARMORS, FOOD, MOUNTS } from "../../config";

function parseCanStudy(unit: IUnit, d: IReportUnitCanStudy) {
  unit.canStudy = d.text;
  return unit;
}

function parseSkills(unit: IUnit, d: IReportUnitSkills) {
  unit.skills = [...d.skills];
  return unit;
}

function parseCapacity(unit: IUnit, d: IReportUnitCapacity) {
  unit.capacity = {
    walk: d.walk,
    ride: d.ride,
    fly: d.fly,
    swim: d.swim
  };
  return unit;
}

function parseItem(unit: IUnit, d: IReportUnitItem) {
  unit.items.push({
    itemKey: d.item.key,
    text: d.item.text,
    amount: d.item.amount,
    isRace: RACES.includes(d.item.key),
    isWeapon: WEAPONS.includes(d.item.key),
    isArmor: ARMORS.includes(d.item.key),
    isMount: MOUNTS.includes(d.item.key),
    isFood: FOOD.includes(d.item.key)
  });
  return unit;
}

function parseCombatSpell(unit: IUnit, d: IReportUnitCombatSpell) {
  unit.combatSpell = d.spell;
  return unit;
}

function parseWeight(unit: IUnit, d: IReportUnitWeight) {
  unit.weight = d.weight;
  return unit;
}

function parseUpkeep(unit: IUnit, d: IReportUnitUpkeep) {
  unit.upkeep = d.value;
  return unit;
}

function parseFlag(unit: IUnit, d: IReportUnitFlag) {
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
  // console.log("I am unit:", regionUnit);
  const unit: IUnit = {
    id: regionUnit.unitId,
    name: regionUnit.unitName,
    faction: regionUnit.faction,
    weight: 0,
    upkeep: 0,
    combatSpell: undefined,
    canStudy: undefined,
    items: [],
    capacity: {
      walk: 0,
      ride: 0,
      fly: 0,
      swim: 0
    },
    skills: [],
    // TODO: comment

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
    }
  };

  if (regionUnit.unitDetails && Array.isArray(regionUnit.unitDetails)) {
    regionUnit.unitDetails.forEach(d => {
      switch (d.type) {
        case "FLAG":
          parseFlag(unit, d);
          break;
        case "WEIGHT":
          parseWeight(unit, d);
          break;
        case "UPKEEP":
          parseUpkeep(unit, d);
          break;
        case "COMBAT_SPELL":
          parseCombatSpell(unit, d);
          break;
        case "ITEM":
          parseItem(unit, d);
          break;
        case "CAPACITY":
          parseCapacity(unit, d);
          break;
        case "SKILLS":
          parseSkills(unit, d);
          break;
        case "CAN_STUDY":
          parseCanStudy(unit, d);
          break;
      }
    });
  }

  return unit;
}

export default function parseRegionUnit(unit: IReportUnit) {
  return parseUnit(unit);
}
