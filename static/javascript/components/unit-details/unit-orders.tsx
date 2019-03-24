import React, { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { ICombinedReducersState } from "../../reducers";
import { IOrders } from "../../reducers/orders";
import { stateGetters } from "../utils";

interface IProps {
  orders?: IOrders;
  isMyFaction: boolean;
}

const UnitDetailsOrders = (props: IProps) => {
  if (!props.isMyFaction) {
    return null;
  }

  const { orders = [] } = props;
  // TODO: make input uncontrolled, but push
  // it to redux on focusout and enter or make it controlled ??
  const value = orders.join("\n");
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
      orders: [],
      isMyFaction: false
    };
  }
  const orders = state.orders.units[unit.id];
  return {
    orders,
    isMyFaction: unit.faction != null && state.faction.factionId === unit.faction.factionId
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(UnitDetailsOrders));
