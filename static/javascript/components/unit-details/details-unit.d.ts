import { IUnitEvent } from "../../reducers/events";
import { IUnit } from "../../reducers/units";

export interface IDetailsProps {
  unit?: IUnit;
  isMyFaction: boolean;
}

export interface IDetailsEventsProps {
  unitEvents: IUnitEvent["eventText"][];
}

export interface IDetailsEventsNativeProps {
  unit: IUnit;
}
