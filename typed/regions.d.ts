interface IRegion {
  readonly id: string;
  readonly title: string;
  readonly coordinates: {
    readonly x: number;
    readonly y: number;
    readonly z: number;
  };
  readonly type: string;
  readonly details: string[];
  readonly gate?: string;
  readonly exits?: {
    [key: string]: IRegion;
  };
  readonly unitsAndObjectsRaw?: string[];
  readonly unitsAndObjects: Array<IReportObject | IReportUnit>;
  readonly units: Array<IParsedRegionUnit>;
}

interface IParseRegionUnitItem {
  itemKey: string;
  text: string;
  amount: number;
  isRace: boolean;
  isWeapon: boolean;
  isArmor: boolean;
  isFood: boolean;
  isMount: boolean;
}

interface IParsedRegionUnitRW {
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
  items: IParseRegionUnitItem[];
  skills: IReportUnitSkill[];
  inObject?: number;
  canStudy?: string; // TOOD: parse it later
}
type IParsedRegionUnit = Readonly<IParsedRegionUnitRW>;

interface IRegions {
  readonly [key: string]: IRegion;
}

interface IReportItemRegions extends IReportItemBase {
  readonly type: "REGIONS";
  readonly regions: IRegion[];
}
