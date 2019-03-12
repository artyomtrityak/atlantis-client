interface IUnitItem {
  itemKey: string;
  text: string;
  amount: number;
  isRace: boolean;
  isWeapon: boolean;
  isArmor: boolean;
  isFood: boolean;
  isMount: boolean;
}

interface IUnitSkill extends IReportUnitSkill {} // copy same for name convention

interface IUnit {
  id: number;
  name: string;
  weight: number;
  upkeep: number;
  combatSpell?: string;
  faction: {
    factionId: number;
    factionName: string;
  };
  capacity: {
    walk: number;
    ride: number;
    fly: number;
    swim: number;
  };
  flags: {
    noaid: boolean;
    flagBehind: boolean;
    spoilsWalking: boolean;
    spoilsWeightless: boolean;
    spoilsRiding: boolean;
    spoilsFlying: boolean;
    avoiding: boolean;
    taxing: boolean;
    guard: boolean;
    holding: boolean;
    consumingFaction: boolean;
    consumingUnit: boolean;
    sharing: boolean;
    visibilityRevealFaction: boolean;
    visibilityRevealUnit: boolean;
  };
  items: IUnitItem[];
  skills: IUnitSkill[];
  inObject?: number;
  canStudy?: string; // TODO: parse it later
}
