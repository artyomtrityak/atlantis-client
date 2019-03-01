export interface IReportUnitFlag {
  type: "FLAG";
  name: string;
}

export interface IReportUnitSkills {
  type: "SKILLS";
  skills: IReportUnitSkill[];
}

export interface IReportUnitSkill {
  skill: string;
  code: string;
  level: number;
  exp: number;
}

export type unitDetailsType = IReportUnitFlag | IReportUnitSkills;

// TODO: copy / paste from parser

export interface IReportObject {
  readonly objectId: number;
  readonly objectName: string;
  readonly objectType: string;
  readonly objectUnits: IReportUnit[];
}

export interface IReportUnit {
  readonly unitName: string;
  readonly unitId: number;
  readonly faction: {
    factionId: number;
    factionName: string;
  };
  readonly unitDetails: unitDetailsType[];
}

export interface IState {
  readonly selectedUnitId?: string;
  readonly units: {
    [userId: string]: IReportUnit | IReportObject;
  };
}
