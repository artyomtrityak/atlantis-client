import React, { useState, useRef, useEffect, useCallback } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { ICombinedReducersState } from "../../reducers";
import { IOrders } from "../../reducers/orders";
import { changeUnitOrders } from "../../actions/units-actions";
import { IUnit } from "../../reducers/units";

interface IProps {
  orders?: IOrders;
  changeUnitOrders: (...args: Parameters<typeof changeUnitOrders>) => void;
  unit: IUnit;
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

const useCommitChanges = (props: IProps): [string, (val: string) => void, () => void] => {
  const { orders = [], unit } = props;
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
      props.changeUnitOrders(unit.id, newValue.split("\n"));
    },
    [newValue]
  );

  return [newValue, setNewValue, commitChanges];
};

const mapStateToProps = (state: ICombinedReducersState, ownProps: { unit: IUnit }) => {
  const orders = state.orders.units[ownProps.unit.id];
  return {
    orders
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeUnitOrders: (unitId: number, orders: string[]) => dispatch(changeUnitOrders(unitId, orders))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(UnitDetailsOrders));
