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

const UnitActionsMenu = props => {
  return (
    <div className="btn-group dropleft actions-menu">
      <button type="button" className="btn btn-secondary btn-sm dropdown-toggle">
        Actions
      </button>
      <div className="dropdown-menu actions-menu__menu show">
        <div className="row">
          <div className="col-6">
            <span className="dropdown-item-text">Fast Actions</span>
            <div className="dropdown-divider" />
            <button className="dropdown-item" type="button" title="[attack title]">
              ATTACK
            </button>
            <button className="dropdown-item" type="button">
              BUY
            </button>
            <button className="dropdown-item" type="button">
              CAST
            </button>
            <button className="dropdown-item" type="button">
              COMBAT
            </button>
            <button className="dropdown-item" type="button">
              FORM
            </button>
            <button className="dropdown-item" type="button">
              GIVE
            </button>
            <button className="dropdown-item" type="button">
              NAME
            </button>
            <button className="dropdown-item dropdown-toggle" type="button">
              Other
            </button>
          </div>
          <div className="col-6">
            <span className="dropdown-item-text">Month Actions</span>
            <div className="dropdown-divider" />
            <button className="dropdown-item" type="button">
              ADVANCE
            </button>
            <button className="dropdown-item" type="button">
              ENTERTAIN
            </button>
            <button className="dropdown-item" type="button">
              MOVE
            </button>
            <button className="dropdown-item" type="button">
              STUDY
            </button>
            <button className="dropdown-item" type="button">
              TAX
            </button>
            <button className="dropdown-item" type="button">
              TEACH
            </button>
            <button className="dropdown-item" type="button">
              WORK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(React.memo(UnitActionsMenu));
