"use strict";

import cn from "classnames";
import React from "react";
import ReactDOM from "react-dom";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { ICombinedReducersState } from "../../reducers";
import { FAST_ACTIONS, TURN_ACTIONS } from "./actions-data";
import UnitAction from "./unit-actions-dropdown-action";

interface IProps {}

const UnitActionsDropdown = (props: IProps) => {
  return ReactDOM.createPortal(
    <div
      className={cn("dropdown-menu", "unit-actions-menu__menu", "show", {
        "unit-actions-menu__menu--extended": false
      })}
    >
      <div className="row">
        <div className={cn({ "col-6": true, "col-4": false })}>
          <span className="dropdown-item-text">Fast Actions</span>
          <div className="dropdown-divider" />
          {FAST_ACTIONS.map(d => (
            <UnitAction key={`action_${d.name}`} action={d} />
          ))}
          <button className="dropdown-item dropdown-toggle" type="button" onClick={() => {}}>
            Other
          </button>
        </div>
        <div className={cn({ "col-6": true, "col-4": false })}>
          <span className="dropdown-item-text">Month Actions</span>
          <div className="dropdown-divider" />
          {TURN_ACTIONS.map(d => (
            <UnitAction key={`action_${d.name}`} action={d} />
          ))}
        </div>
      </div>
    </div>,
    document.getElementById("dropdowns") as any
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

const mapStateToProps = (state: ICombinedReducersState) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnitActionsDropdown);
