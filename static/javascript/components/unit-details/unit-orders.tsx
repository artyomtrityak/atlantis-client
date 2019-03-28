import React, { useState, useRef, useEffect, useCallback } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { ICombinedReducersState } from "../../reducers";
import { IOrders } from "../../reducers/orders";
import { stateGetters } from "../utils";

interface IProps {
  orders?: IOrders;
}

const UnitDetailsOrders = (props: IProps) => {
  const [newValue, setNewValue, commitChanges] = useCommitChanges(props);
  // TODO: UI should commitChange also on Enter
  return (
    <div className="col-5">
      <textarea className="w-100per h-100per" onBlur={commitChanges} value={newValue} onChange={e => setNewValue(e.target.value)} />
    </div>
  );
};

const useCommitChanges = (props: IProps) => {
  const { orders = [] } = props;
  const [newValue, setNewValue] = useState("");

  const value = orders.join("\n");
  useEffect(
    () => {
      setNewValue(orders.join("\n"));
    },
    [value]
  );

  const commitChanges = useCallback(
    () => {
      console.log("COMMIT:", newValue);
      // TODO: push to redux
    },
    [newValue]
  );

  return [newValue, setNewValue, commitChanges];
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
