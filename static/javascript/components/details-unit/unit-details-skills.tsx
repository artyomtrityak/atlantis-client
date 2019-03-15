import React from "react";
import { connect } from "react-redux";
import cn from "classnames";
import { Icon } from "../utils";

interface IProps {
  skills: IUnitSkill[];
}

function getSkills(skills: IUnitSkill[]) {
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
