import React from "react";
import { connect } from "react-redux";
import { Icon } from "../utils";
import rightArrowIcon from "../../../assets/svg/right-arrow.svg";
import downArrowIcon from "../../../assets/svg/down-arrow.svg";

const Battles = props => {
  return (
    <div className="card-body" style={{ fontSize: "12px" }}>
      <h5 className="card-title" style={{ fontSize: "16px", marginBottom: "0", position: "relative" }}>
        Pirates (260) attacks Muggle (382) in wasteland (4,20) in Stilye!
        <Icon {...downArrowIcon} style={{ width: 16, height: 16, position: "absolute", right: 2, top: 2 }} />
      </h5>
      <div className="">
        <div className="dropdown-divider" />
        <div className="card-text">
          <div>Attackers:</div>
          <div>Pirates (260), 14 pirates [PIRA] (Combat 3/3, Attacks 1, Hits 1, Tactics 1).</div>

          <div>Defenders:</div>
          <div>Muggle (382), School of Witchcraft and Wizardry (17), behind, orc [ORC].</div>
        </div>
        <div className="dropdown-divider" />
        <div className="card-text">
          Pirates (260) gets a free round of attacks.
          <br />
          Muggle (382) loses 1.
        </div>
        <div className="dropdown-divider" />
        <div className="card-text">
          Round 1:
          <br />
          Pirates (260) loses 0.
          <br />
          Muggle (382) loses 0.
        </div>
        <div className="dropdown-divider" />
        <div className="card-text">
          Round 2:
          <br />
          Pirates (260) loses 0.
          <br />
          Muggle (382) loses 0.
        </div>
      </div>
      <div className="dropdown-divider" />
      <h5 className="card-title" style={{ fontSize: "16px", marginBottom: "0", position: "relative" }}>
        Pirates (260) attacks Muggle (382) in wasteland (4,20) in Stilye!
        <Icon {...rightArrowIcon} style={{ width: 16, height: 16, position: "absolute", right: 2, top: 2 }} />
      </h5>
      <div className="dropdown-divider" />
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(React.memo(Battles));
