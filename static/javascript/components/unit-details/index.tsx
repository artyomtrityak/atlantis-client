import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { ICombinedReducersState } from "../../reducers";
import UnitFlags from "./unit-flags";
import UnitActionsMenu from "./unit-actions";
import UnitTitle from "./unit-title";
import UnitDetailsItems from "./unit-details-items";
import UnitDetailsSkills from "./unit-details-skills";
import UnitDetailsEvents from "./unit-details-events";
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
          <div className="card-text">Weight: 30. Capacity: 0/0/45/0.</div>
          <div className="dropdown-divider unit-details-divider" />
          <div className="card-text">Upkeep: $30.</div>
          <UnitDetailsEvents unit={unit} />
        </div>
        <div className="col-5">
          <textarea className="w-100per h-100per" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: ICombinedReducersState) => {
  const currentLevelData = state.regions.levels[state.regions.mapLevel];
  if (!currentLevelData) {
    return {};
  }
  const region = state.units.regions[currentLevelData.selectedRegion];
  if (!region) {
    return {};
  }
  const unit = region.units.find(u => u.id === state.units.selectedUnitId);
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
