import React from "react";
import { IUnit } from "../../reducers/units";

interface IProps {
  unit: IUnit;
}

const UnitTitle = (props: IProps) => {
  const {
    unit: { name, id, faction }
  } = props;
  let factionDisplayName = "";
  if (faction) {
    factionDisplayName = `, ${faction.factionName} (${faction.factionId})`;
  }

  return (
    <h5 className="card-title unit-header">
      {name} ({id}){factionDisplayName}.
    </h5>
  );
};

export default UnitTitle;
