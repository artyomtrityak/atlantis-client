import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import cn from "classnames";
import { ICombinedReducersState } from "../../reducers";
import { Icon } from "../utils";
// Icons
import shieldIcon from "../../../assets/svg/shield.svg";
import moneyIcon from "../../../assets/svg/money_bag.svg";
import behindIcon from "../../../assets/svg/behind.svg";
import avoidIcon from "../../../assets/svg/avoid.svg";
import holdIcon from "../../../assets/svg/tower.svg";
import noAidIcon from "../../../assets/svg/stop.svg";
import sharedIcon from "../../../assets/svg/share.svg";
import consumeIcon from "../../../assets/svg/consume.svg";
import bridgeIcon from "../../../assets/svg/bridge.svg";

interface IProps {
  flags: IUnitFlags;
}

interface IFlagIcon {
  id: keyof IUnitFlags;
  command: string; // TODO: keyof SOME_GLOBAL_COMMANDS_TYPE
  title: string;
  icon: any;
}

const FLAGS: IFlagIcon[] = [
  {
    id: "guard",
    command: "GUARD",
    title: "[Guard explanation]",
    icon: shieldIcon
  },
  {
    id: "taxing",
    command: "TAX",
    title: "[Tax explanation]",
    icon: moneyIcon
  },
  {
    id: "behind",
    command: "BEHIND",
    title: "[Behind explanation]",
    icon: behindIcon
  },
  {
    id: "avoiding",
    command: "AVOID",
    title: "[Avoid explanation]",
    icon: avoidIcon
  },
  {
    id: "holding",
    command: "HOLD",
    title: "[Hold explanation]",
    icon: holdIcon
  },
  {
    id: "noaid",
    command: "NOAID",
    title: "[NOAID explanation]",
    icon: noAidIcon
  },
  {
    id: "sharing",
    command: "SHARE",
    title: "[SHARE explanation]",
    icon: sharedIcon
  }
  // {
  //   id: "crossing", // ???
  //   command: "NOCROSS",
  //   title: "[NOCROSS explanation]",
  //   icon: bridgeIcon
  // }
  // {
  //   id: "CONSUME",
  //   title: "[COMSUME explanation]",
  //   icon: consumeIcon
  // }, // TODO: custom
  // {
  //   id: "SPOILS",
  //   title: "[SPOILS explanation]",
  //   icon: ??
  // }, // TODO: custom
  // {
  //   id: "VISIBILITY",
  //   title: "[VISIBILITY explanation]",
  //   icon: ??
  // }, // TODO: custom
];

function SpoilsFlag(flags: IUnitFlags) {
  return (
    <button
      type="button"
      className={cn("btn btn-light unit-flags__btn dropdown-toggle", {
        active: flags.spoilsFlying || flags.spoilsRiding || flags.spoilsWalking || flags.spoilsWeightless
      })}
    >
      <Icon {...noAidIcon.icon} className="unit-flags__flag-icon" />
      Walking
    </button>
  );
}

const UnitActionsMenu = (props: IProps) => {
  return (
    <div className="card-text">
      <div className="btn-group btn-group-sm unit-flags" role="group" aria-label="Basic example">
        {FLAGS.map(d => (
          <button
            key={`flags_${d.id}`}
            type="button"
            className={cn("btn btn-light unit-flags__btn", {
              active: props.flags[d.id] === true
            })}
          >
            <Icon {...d.icon} className="unit-flags__flag-icon" />
          </button>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: ICombinedReducersState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(UnitActionsMenu));
