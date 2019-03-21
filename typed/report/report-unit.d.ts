interface IReportUnitFlag {
  readonly type: "FLAG";
  readonly flag: string;
}

interface IReportUnitSkills {
  readonly type: "SKILLS";
  readonly skills: IReportUnitSkill[];
}

interface IReportUnitSkill {
  readonly skill: string;
  readonly code: string;
  readonly level: number;
  readonly exp: number;
  readonly text: string;
}

interface IReportUnitItem {
  readonly type: "ITEM";
  readonly item: {
    key: string;
    amount: number;
    text: string;
  };
}

interface IReportUnitWeight {
  readonly type: "WEIGHT";
  readonly weight: number;
}
interface IReportUnitCapacity {
  readonly type: "CAPACITY";
  readonly fly: number;
  readonly ride: number;
  readonly walk: number;
  readonly swim: number;
}

interface IReportUnitCanStudy {
  readonly type: "CAN_STUDY";
  readonly text: string;
}

interface IReportUnitCombatSpell {
  readonly type: "COMBAT_SPELL";
  readonly spell: string;
}

interface IReportUnitComment {
  readonly type: "COMMENT";
  readonly text: string;
}

interface IReportUnitUpkeep {
  readonly type: "UPKEEP";
  readonly value: number;
}

type IReportUnitDetailsType =
  | IReportUnitFlag
  | IReportUnitSkills
  | IReportUnitItem
  | IReportUnitWeight
  | IReportUnitCapacity
  | IReportUnitCanStudy
  | IReportUnitCombatSpell
  | IReportUnitComment
  | IReportUnitUpkeep;

interface IReportUnit {
  readonly type: "UNIT";
  readonly unitName: string;
  readonly unitId: number;
  readonly faction?: {
    readonly factionId: number;
    readonly factionName: string;
  };
  readonly unitDetails: IReportUnitDetailsType[];
}

interface IReportObjectStructure {
  readonly type: "OBJECT";
  readonly objectId: number;
  readonly objectName: string;
  readonly objectType: string;
  readonly objectUnits: IReportUnit[];
}
