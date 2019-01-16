import React from "react";
import { connect } from "react-redux";
import cn from "classnames";
import checkIcon from "../../../assets/svg/check.svg";
import warningIcon from "../../../assets/svg/warning.svg";
import battlesIcon from "../../../assets/svg/battles.svg";
import eventsIcon from "../../../assets/svg/events.svg";
import magicIcon from "../../../assets/svg/magic_wand.svg";
import prodIcon from "../../../assets/svg/wrench_hammer.svg";
import taxIcon from "../../../assets/svg/money_bag.svg";
import factionIcon from "../../../assets/svg/emblem.svg";
import cityIcon from "../../../assets/svg/city.svg";
import gateIcon from "../../../assets/svg/gate.svg";
import unitIcon from "../../../assets/svg/troll.svg";
import crownIcon from "../../../assets/svg/crown.svg";
import { Icon } from "../utils";

const GameMenu = props => {
  const { isOpen } = props;
  return (
    <div className={cn("game-menu", { "game-menu--expanded": isOpen })}>
      <nav className="nav flex-column" style={{ marginTop: "30px" }}>
        <div className="game-menu__header">Actions</div>
        <a className="nav-link game-menu__item" href="#">
          <Icon {...checkIcon} className="game-menu__item-icon" /> Check Turn Orders
        </a>
        <div className="dropdown-divider" />
        <div className="game-menu__header">Events</div>
        <a className="nav-link game-menu__item" href="#">
          <Icon {...warningIcon} className="game-menu__item-icon" /> Errors & Warnings
        </a>
        <a className="nav-link game-menu__item" href="#">
          <Icon {...battlesIcon} className="game-menu__item-icon" /> Turn Battles
        </a>
        <a className="nav-link game-menu__item" href="#">
          <Icon {...eventsIcon} className="game-menu__item-icon" /> Turn Events
          <span className="badge badge-primary game-menu__badge">15</span>
        </a>
        <div className="dropdown-divider" />
        <div className="game-menu__header">Faction</div>
        <a className="nav-link game-menu__item" href="#">
          <Icon {...crownIcon} className="game-menu__item-icon" /> Faction Points
        </a>
        <a className="nav-link game-menu__item" href="#">
          <Icon {...magicIcon} className="game-menu__item-icon" /> Magic
        </a>
        <a className="nav-link game-menu__item" href="#">
          <Icon {...prodIcon} className="game-menu__item-icon" /> Production
        </a>
        <a className="nav-link game-menu__item" href="#">
          <Icon {...taxIcon} className="game-menu__item-icon" /> Taxes
        </a>
        <a className="nav-link game-menu__item game-menu__item--disabled" href="#">
          <Icon {...unitIcon} className="game-menu__item-icon" /> Training
        </a>
        <div className="dropdown-divider" />
        <div className="game-menu__header">World</div>
        <a className="nav-link game-menu__item" href="#">
          <Icon {...cityIcon} className="game-menu__item-icon" /> Cities
        </a>
        <a className="nav-link game-menu__item" href="#">
          <Icon {...factionIcon} className="game-menu__item-icon" /> Factions
        </a>
        <a className="nav-link game-menu__item" href="#">
          <Icon {...gateIcon} className="game-menu__item-icon" /> Gates
        </a>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(GameMenu));
