import React from "react";
import { connect } from "react-redux";
import UnitFlags from "./unit-flags";
import UnitActionsMenu from "./unit-actions";

import "./unit-styles.scss";

const Unit = props => {
  return (
    <div className="card-body" style={{ position: "relative" }}>
      <h5 className="card-title unit-header">Magic Rider (502), School of Witchcraft and Wizardry (17)</h5>
      <UnitActionsMenu />
      <div className="dropdown-divider" />
      <div className="row">
        <div className="col-7">
          <UnitFlags />
          <div className="dropdown-divider" />
          <div className="card-text">18 silver [SILV], 3 orcs [ORC].</div>
          <div className="dropdown-divider" />
          <div className="card-text">Skills: horse training [HORS] 1 (30).</div>
          <div className="dropdown-divider" />
          <div className="card-text">Weight: 30. Capacity: 0/0/45/0.</div>
          <div className="dropdown-divider" />
          <div className="card-text">Upkeep: $30.</div>
        </div>
        <div className="col-5">
          <textarea className="w-100per h-100per" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(React.memo(Unit));
