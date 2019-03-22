import React, { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { ICombinedReducersState } from "../../reducers";
import { IOrders } from "../../reducers/orders";
import { stateGetters } from "../utils";

interface IProps {
  orders: IOrders;
}

const UnitDetailsOrders = (props: IProps) => {
  // TODO: make input uncontrolled, but push
  // it to redux on focusout and enter or make it controlled ??
  const value = props.orders.join("\n");
  return (
    <div className="col-5">
      <textarea className="w-100per h-100per" defaultValue={value} />
    </div>
  );
};

const mapStateToProps = (state: ICombinedReducersState) => {
  const unit = stateGetters.getSelectedUnit(state);
  if (!unit) {
    return {
      orders: []
    };
  }
  const orders = state.orders.units[unit.id];
  return {
    orders
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(UnitDetailsOrders));
