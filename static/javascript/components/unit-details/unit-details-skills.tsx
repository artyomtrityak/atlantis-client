import React from "react";
import { IUnitSkill } from "../../reducers/units";

interface IProps {
  skills: IUnitSkill[];
}

function getSkills(skills: IUnitSkill[]) {
  if (!skills.length) {
    return "none";
  }
  return skills.map(skill => skill.text).join(", ");
}

const UnitDetailsSkills = (props: IProps) => {
  return (
    <React.Fragment>
      <div className="dropdown-divider unit-details-divider" />
      <div className="card-text">
        <b>Skills</b>: {getSkills(props.skills)}.
      </div>
    </React.Fragment>
  );
};

export default UnitDetailsSkills;
