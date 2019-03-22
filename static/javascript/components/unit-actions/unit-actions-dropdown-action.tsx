"use strict";

import cn from "classnames";
import React from "react";
import ReactDOM from "react-dom";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { ICombinedReducersState } from "../../reducers";
import { Icon } from "../utils";
import { FAST_ACTIONS, TURN_ACTIONS } from "./actions-data";

interface IProps {
  action: typeof FAST_ACTIONS[0] & typeof TURN_ACTIONS[0];
}

const UnitAction = (props: IProps) => {
  const { action } = props;
  return (
    <button className="dropdown-item unit-actions-menu__menu-item" type="button">
      {action.icon && <Icon {...action.icon} className="unit-actions-menu__icon" />}
      {action.name}
    </button>
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
)(UnitAction);
