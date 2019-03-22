import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { ICombinedReducersState } from "../../reducers";
import { stateGetters } from "../utils";
import UnitFlags from "./unit-flags";
import UnitActionsMenu from "./unit-actions";
import UnitTitle from "./unit-title";
import UnitDetailsItems from "./unit-details-items";
import UnitDetailsSkills from "./unit-details-skills";
import UnitDetailsEvents from "./unit-details-events";
import UnitOrders from "./unit-orders";
import { IDetailsProps } from "./details-unit.d";

import "./styles/index.scss";

const Unit = (props: IDetailsProps) => {
  const { unit } = props;
  console.log(unit);
  if (!unit) {
    return null;
  }

  return (
    <div className="card-body unit-details">
      <UnitTitle unit={unit} />
      <UnitActionsMenu />
      <div className="dropdown-divider unit-details-divider" />
      <div className="row">
        <div className="col-7">
          <UnitFlags flags={unit.flags} />
          <UnitDetailsItems items={unit.items} />
          <UnitDetailsSkills skills={unit.skills} />
          <div className="dropdown-divider unit-details-divider" />
          <div className="card-text">
            <b>Weight</b>: {unit.weight}. Capacity: 0/0/45/0.
          </div>
          <div className="dropdown-divider unit-details-divider" />
          <div className="card-text">
            <b>Upkeep</b>: ${unit.upkeep}.
          </div>
          <UnitDetailsEvents unit={unit} />
        </div>
        <UnitOrders />
      </div>
    </div>
  );
};

const mapStateToProps = (state: ICombinedReducersState) => {
  const unit = stateGetters.getSelectedUnit(state);
  if (!unit) {
    return {};
  }
  return {
    unit
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Unit));
