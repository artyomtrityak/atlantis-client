import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { ICombinedReducersState } from "../../reducers";
import UnitFlags from "./unit-flags";
import UnitActionsMenu from "./unit-actions";
import UnitDetailsItems from "./unit-details-items";
import { IDetailsProps } from "./details-unit.d";

import "./styles/index.scss";

const Unit = (props: IDetailsProps) => {
  const { unit } = props;
  console.log(unit);
  if (!unit) {
    return null;
  }

  // TODO: sometimes no faction
  return (
    <div className="card-body detais-unit">
      <div className="dropdown-divider" />
      <h5 className="card-title unit-header">
        {unit.name} ({unit.id}
        ), {unit.faction.factionName} ({unit.faction.factionId})
      </h5>
      <UnitActionsMenu />
      <div className="dropdown-divider" />
      <div className="row">
        <div className="col-7">
          <UnitFlags />
          <UnitDetailsItems items={unit.items} />
          <div className="dropdown-divider unit-details-divider" />
          <div className="card-text">Skills: horse training [HORS] 1 (30).</div>
          <div className="dropdown-divider unit-details-divider" />
          <div className="card-text">Weight: 30. Capacity: 0/0/45/0.</div>
          <div className="dropdown-divider unit-details-divider" />
          <div className="card-text">Upkeep: $30.</div>
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
  const region = state.units.regions[currentLevelData.selectedRegion];
  if (!currentLevelData || !region) {
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
