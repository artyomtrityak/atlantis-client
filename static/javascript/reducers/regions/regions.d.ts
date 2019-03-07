interface ILevel {
  readonly maxX: number;
  readonly maxY: number;
  readonly isWrap: boolean;
  readonly regions: IRegions;
  readonly level: number;
  readonly selectedRegion: string;
}

export interface IState {
  readonly levels: ReadonlyArray<ILevel>;
  readonly mapLevel: number;
  readonly zoom: number;
}

export interface IParseRegionUnitItem {
  itemKey: string;
  text: string;
  amount: number;
  isRace: boolean;
}

export interface IParsedRegionUnitRW {
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
}
export type IParsedRegionUnit = Readonly<IParsedRegionUnitRW>;
