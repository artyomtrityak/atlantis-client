import { IUnitEvent } from "../../reducers/events";
import { IUnit } from "../../reducers/units";

export interface IDetailsProps {
  unit?: IUnit;
}

export interface IDetailsEventsProps {
  unitEvents: IUnitEvent["eventText"][];
}

export interface IDetailsEventsNativeProps {
  unit: IUnit;
}
