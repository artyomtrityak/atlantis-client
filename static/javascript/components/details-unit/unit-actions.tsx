import React from "react";
import { connect } from "react-redux";
import cn from "classnames";
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
import assasinateIcon from "../../../assets/svg/assasinate.svg";

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
    name: "PILLAGE",
    icon: undefined
  },
  {
    name: "SAIL",
    icon: undefined
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
  },
  {
    name: "SELL",
    icon: undefined
  }
];

const OTHER_FAST_ACTIONS = [
  {
    name: "ASSASINATE",
    icon: assasinateIcon
  },
  {
    name: "EXCHANGE",
    icon: moneyIcon
  },
  {
    name: "ENTER",
    icon: undefined
  },
  {
    name: "FORGET",
    icon: studyIcon
  },
  {
    name: "LEAVE",
    icon: undefined
  },
  {
    name: "PROMOTE",
    icon: undefined
  },
  {
    name: "REVEAL",
    icon: undefined
  },
  {
    name: "SHOW",
    icon: undefined
  },
  {
    name: "STEAL",
    icon: undefined
  }
];

class UnitActions extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      extended: false
    };
    this.renderAction = this.renderAction.bind(this);
    this.renderExtendedActions = this.renderExtendedActions.bind(this);
    this.toggleExpand = this.toggleExpand.bind(this);
    this.onGlobalClick = this.onGlobalClick.bind(this);
    this.extendActions = this.extendActions.bind(this);
    this.elRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("click", this.onGlobalClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.onGlobalClick);
  }

  onGlobalClick(e) {
    if (!this.state.expanded || this.elRef.current.contains(e.target)) {
      return;
    }
    this.setState({ expanded: false, extended: false });
  }

  toggleExpand() {
    this.setState({ expanded: !this.state.expanded, extended: false });
  }

  extendActions() {
    this.setState({ extended: !this.state.extended });
  }

  render() {
    return (
      <div className="btn-group dropleft actions-menu" ref={this.elRef}>
        <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" onClick={this.toggleExpand}>
          Actions
        </button>
        <div
          className={cn("dropdown-menu", "actions-menu__menu", {
            show: this.state.expanded,
            "actions-menu__menu--extended": this.state.extended
          })}
        >
          <div className="row">
            {this.state.extended && this.renderExtendedActions()}
            <div className={cn({ "col-6": !this.state.extended, "col-4": this.state.extended })}>
              <span className="dropdown-item-text">Fast Actions</span>
              <div className="dropdown-divider" />
              {FAST_ACTIONS.map(this.renderAction)}
              <button className="dropdown-item dropdown-toggle" type="button" onClick={this.extendActions}>
                Other
              </button>
            </div>
            <div className={cn({ "col-6": !this.state.extended, "col-4": this.state.extended })}>
              <span className="dropdown-item-text">Month Actions</span>
              <div className="dropdown-divider" />
              {TURN_ACTIONS.map(this.renderAction)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderAction(d, i) {
    return (
      <button key={`unit_action_${i}`} className="dropdown-item actions-menu__menu-item" type="button">
        {d.icon && <Icon {...d.icon} className="actions-menu__icon" />}
        {d.name}
      </button>
    );
  }

  renderExtendedActions() {
    return (
      <div className="col-4">
        <span className="dropdown-item-text">Fast Actions (ext)</span>
        <div className="dropdown-divider" />
        {OTHER_FAST_ACTIONS.map(this.renderAction)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(UnitActions);
