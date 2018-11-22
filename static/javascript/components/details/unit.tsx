import React from "react";
import { connect } from "react-redux";
import { Icon } from "../utils";
import shieldIcon from "../../../assets/svg/shield.svg";
import moneyIcon from "../../../assets/svg/money_bag.svg";
import behindIcon from "../../../assets/svg/behind.svg";
import avoidIcon from "../../../assets/svg/avoid.svg";
import holdIcon from "../../../assets/svg/tower.svg";
import noAidIcon from "../../../assets/svg/stop.svg";
import consumeIcon from "../../../assets/svg/consume.svg";
import bridgeIcon from "../../../assets/svg/bridge.svg";

const Unit = props => {
  return (
    <div className="card-body">
      <h5 className="card-title unit-header">Magic Rider (502), School of Witchcraft and Wizardry (17)</h5>
      <div className="dropdown-divider" />
      <div className="row">
        <div className="col-7">
          <div className="card-text">
            <button type="button" className="btn btn-outline-secondary unit-flags__btn" title="Guard">
              <Icon {...shieldIcon} className="unit-flags__flag-icon" />
            </button>
            <button type="button" className="btn btn-outline-secondary ml-2 unit-flags__btn unit-flags__btn--active" title="Tax">
              <Icon {...moneyIcon} className="unit-flags__flag-icon" />
            </button>
            <button type="button" className="btn btn-outline-secondary ml-2 unit-flags__btn" title="Behind">
              <Icon {...behindIcon} className="unit-flags__flag-icon" />
            </button>
            <button type="button" className="btn btn-outline-secondary ml-2 unit-flags__btn" title="Avoid">
              <Icon {...avoidIcon} className="unit-flags__flag-icon" />
            </button>
            <button type="button" className="btn btn-outline-secondary ml-2 unit-flags__btn" title="Hold">
              <Icon {...holdIcon} className="unit-flags__flag-icon" />
            </button>
            <button type="button" className="btn btn-outline-secondary ml-2 unit-flags__btn" title="No Aid">
              <Icon {...noAidIcon} className="unit-flags__flag-icon" />
            </button>
            <button type="button" className="btn btn-outline-secondary ml-2 unit-flags__btn" title="Consume Faction">
              <Icon {...consumeIcon} className="unit-flags__flag-icon" />
            </button>
            <button type="button" className="btn btn-outline-secondary ml-2 unit-flags__btn" title="No cross water">
              <Icon {...bridgeIcon} className="unit-flags__flag-icon" />
            </button>
          </div>
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
          <textarea style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(React.memo(Unit));
