import React from "react";
import { connect } from "react-redux";
import { Icon } from "../utils";
// Icons
import shieldIcon from "../../../assets/svg/shield.svg";
import moneyIcon from "../../../assets/svg/money_bag.svg";
import behindIcon from "../../../assets/svg/behind.svg";
import avoidIcon from "../../../assets/svg/avoid.svg";
import holdIcon from "../../../assets/svg/tower.svg";
import noAidIcon from "../../../assets/svg/stop.svg";
import consumeIcon from "../../../assets/svg/consume.svg";
import bridgeIcon from "../../../assets/svg/bridge.svg";

const FLAGS = [
  {
    name: "GUARD",
    title: "[Guard explanation]",
    icon: shieldIcon
  },
  {
    name: "TAX",
    title: "[Tax explanation]",
    icon: moneyIcon
  },
  {
    name: "BEHIND",
    title: "[Behind explanation]",
    icon: behindIcon
  },
  {
    name: "AVOID",
    title: "[Avoid explanation]",
    icon: avoidIcon
  },
  {
    name: "HOLD",
    title: "[Hold explanation]",
    icon: holdIcon
  },
  {
    name: "NOAID",
    title: "[NOAID explanation]",
    icon: noAidIcon
  },
  {
    name: "CONSUME",
    title: "[COMSUME explanation]",
    icon: consumeIcon
  },
  {
    name: "NOCROSS",
    title: "[NOCROSS explanation]",
    icon: bridgeIcon
  }
];

const renderFlag = (d, i) => {
  return (
    <button key={`flags_${d.name}`} type="button" className="btn btn-outline-secondary unit-flags__btn mr-2" title={d.title}>
      <Icon {...d.icon} className="unit-flags__flag-icon" />
    </button>
  );
};

const UnitActionsMenu = props => {
  return <div className="card-text">{FLAGS.map(renderFlag)}</div>;
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(React.memo(UnitActionsMenu));
