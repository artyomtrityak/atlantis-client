import React from "react";
import { connect } from "react-redux";
import { Icon } from "../utils";
import attackIcon from "../../../assets/svg/battles.svg";
import moneyIcon from "../../../assets/svg/money_bag.svg";
import castIcon from "../../../assets/svg/magic_wand.svg";
import formIcon from "../../../assets/svg/troll.svg";
import entertainIcon from "../../../assets/svg/lute.svg";
import studyIcon from "../../../assets/svg/study.svg";
import teachIcon from "../../../assets/svg/behind.svg";
import advanceIcon from "../../../assets/svg/sword.svg";
import produceIcon from "../../../assets/svg/wrench_hammer.svg";

const TURN_ACTIONS = [
  {
    name: "ADVANCE",
    icon: advanceIcon
  },
  {
    name: "ENTERTAIN",
    icon: entertainIcon
  },
  {
    name: "MOVE",
    icon: undefined
  },
  {
    name: "PRODUCE",
    icon: produceIcon
  },
  {
    name: "STUDY",
    icon: studyIcon
  },
  {
    name: "TAX",
    icon: moneyIcon
  },
  {
    name: "TEACH",
    icon: teachIcon
  },
  {
    name: "WORK",
    icon: undefined
  }
];

const FAST_ACTIONS = [
  {
    name: "ATTACK",
    icon: attackIcon
  },
  {
    name: "BUY",
    icon: moneyIcon
  },
  {
    name: "CAST",
    icon: castIcon
  },
  {
    name: "COMBAT",
    icon: castIcon
  },
  {
    name: "FORM",
    icon: formIcon
  },
  {
    name: "GIVE",
    icon: undefined
  },
  {
    name: "NAME",
    icon: formIcon
  }
];

const renderAction = (d, i) => {
  return (
    <button key={`unit_action_${i}`} className="dropdown-item actions-menu__menu-item" type="button">
      {d.icon && <Icon {...d.icon} className="actions-menu__icon" />}
      {d.name}
    </button>
  );
};

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
            {FAST_ACTIONS.map(renderAction)}
            <button className="dropdown-item dropdown-toggle" type="button">
              Other
            </button>
          </div>
          <div className="col-6">
            <span className="dropdown-item-text">Month Actions</span>
            <div className="dropdown-divider" />
            {TURN_ACTIONS.map(renderAction)}
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
