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
            <button className="dropdown-item actions-menu__menu-item" type="button" title="[attack title]">
              <Icon {...attackIcon} className="actions-menu__icon" />
              ATTACK
            </button>
            <button className="dropdown-item actions-menu__menu-item" type="button">
              <Icon {...moneyIcon} className="actions-menu__icon" />
              BUY
            </button>
            <button className="dropdown-item actions-menu__menu-item" type="button">
              <Icon {...castIcon} className="actions-menu__icon" />
              CAST
            </button>
            <button className="dropdown-item actions-menu__menu-item" type="button">
              <Icon {...castIcon} className="actions-menu__icon" />
              COMBAT
            </button>
            <button className="dropdown-item actions-menu__menu-item" type="button">
              <Icon {...formIcon} className="actions-menu__icon" />
              FORM
            </button>
            <button className="dropdown-item actions-menu__menu-item" type="button">
              GIVE
            </button>
            <button className="dropdown-item actions-menu__menu-item" type="button">
              <Icon {...formIcon} className="actions-menu__icon" />
              NAME
            </button>
            <button className="dropdown-item dropdown-toggle" type="button">
              Other
            </button>
          </div>
          <div className="col-6">
            <span className="dropdown-item-text">Month Actions</span>
            <div className="dropdown-divider" />
            <button className="dropdown-item actions-menu__menu-item" type="button">
              <Icon {...advanceIcon} className="actions-menu__icon" />
              ADVANCE
            </button>
            <button className="dropdown-item actions-menu__menu-item" type="button">
              <Icon {...entertainIcon} className="actions-menu__icon" />
              ENTERTAIN
            </button>
            <button className="dropdown-item actions-menu__menu-item" type="button">
              MOVE
            </button>
            <button className="dropdown-item actions-menu__menu-item" type="button">
              <Icon {...produceIcon} className="actions-menu__icon" />
              PRODUCE
            </button>
            <button className="dropdown-item actions-menu__menu-item" type="button">
              <Icon {...studyIcon} className="actions-menu__icon" />
              STUDY
            </button>
            <button className="dropdown-item actions-menu__menu-item" type="button">
              <Icon {...moneyIcon} className="actions-menu__icon" />
              TAX
            </button>
            <button className="dropdown-item actions-menu__menu-item" type="button">
              <Icon {...teachIcon} className="actions-menu__icon" />
              TEACH
            </button>
            <button className="dropdown-item actions-menu__menu-item" type="button">
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
