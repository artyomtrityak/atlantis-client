"use strict";

import cn from "classnames";
import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { ICombinedReducersState } from "../../reducers";
import { Icon } from "../utils";
import UnitActionsDropdown from "./unit-actions-dropdown";
import "./styles/index.scss";

interface IProps {}

const UnitActions = (props: IProps) => {
  return (
    <React.Fragment>
      <div className="btn-group dropleft unit-actions-menu">
        <button type="button" className="btn btn-secondary btn-sm dropdown-toggle">
          Actions
        </button>
      </div>
      <UnitActionsDropdown />
    </React.Fragment>
  );
};

// class UnitActions extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       expanded: false,
//       extended: false
//     };
//     this.renderAction = this.renderAction.bind(this);
//     this.renderExtendedActions = this.renderExtendedActions.bind(this);
//     this.toggleExpand = this.toggleExpand.bind(this);
//     this.onGlobalClick = this.onGlobalClick.bind(this);
//     this.extendActions = this.extendActions.bind(this);
//     this.elRef = React.createRef();
//   }

//   componentDidMount() {
//     window.addEventListener("click", this.onGlobalClick);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("click", this.onGlobalClick);
//   }

//   onGlobalClick(e) {
//     if (this.elRef.current.contains(e.target)) {
//       return;
//     }
//     this.setState({ expanded: false, extended: false });
//   }

//   toggleExpand() {
//     this.setState({ expanded: !this.state.expanded, extended: false });
//   }

//   extendActions() {
//     this.setState({ extended: !this.state.extended });
//   }

//   render() {
//     // TODO: render menu as createPortal

//     return (
//       <div className="btn-group dropleft unit-actions-menu" ref={this.elRef}>
//         <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" onClick={this.toggleExpand}>
//           Actions
//         </button>
//         <div
//           className={cn("dropdown-menu", "unit-actions-menu__menu", {
//             show: this.state.expanded,
//             "unit-actions-menu__menu--extended": this.state.extended
//           })}
//         >
//           <div className="row">
//             {this.state.extended && this.renderExtendedActions()}
//             <div className={cn({ "col-6": !this.state.extended, "col-4": this.state.extended })}>
//               <span className="dropdown-item-text">Fast Actions</span>
//               <div className="dropdown-divider" />
//               {FAST_ACTIONS.map(this.renderAction)}
//               <button className="dropdown-item dropdown-toggle" type="button" onClick={this.extendActions}>
//                 Other
//               </button>
//             </div>
//             <div className={cn({ "col-6": !this.state.extended, "col-4": this.state.extended })}>
//               <span className="dropdown-item-text">Month Actions</span>
//               <div className="dropdown-divider" />
//               {TURN_ACTIONS.map(this.renderAction)}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   renderAction(d, i) {
//     return (
//       <button key={`unit_action_${i}`} className="dropdown-item unit-actions-menu__menu-item" type="button">
//         {d.icon && <Icon {...d.icon} className="unit-actions-menu__icon" />}
//         {d.name}
//       </button>
//     );
//   }

//   renderExtendedActions() {
//     return (
//       <div className="col-4">
//         <span className="dropdown-item-text">Fast Actions (ext)</span>
//         <div className="dropdown-divider" />
//         {OTHER_FAST_ACTIONS.map(this.renderAction)}
//       </div>
//     );
//   }
// }

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

const mapStateToProps = (state: ICombinedReducersState) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnitActions);
