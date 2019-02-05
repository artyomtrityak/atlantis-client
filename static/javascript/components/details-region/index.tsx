import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ICombinedReducersState } from "../../reducers";
import { IRegion } from "../../reducers/regions";
import Gate from "./gate";
import Exists from "./exits";

import "./styles/index.scss";

interface IRegionDetailsProps {
  region?: IRegion;
}

function renderDetail(detail: string, i: number) {
  return (
    <div className="card-text" key={i}>
      {detail}
    </div>
  );
}

const Region = ({ region }: IRegionDetailsProps) => {
  if (!region) {
    return <div className="card-body" />;
  }

  console.log(region);

  return (
    <div className="card-body">
      <h5 className="card-title region-header">{region.title}</h5>
      <div className="dropdown-divider" />
      {region.details.map(renderDetail)}
      <div className="dropdown-divider" />
      <Gate region={region} />
      <Exists region={region} />
    </div>
  );
};

const mapStateToProps = (state: ICombinedReducersState): IRegionDetailsProps => {
  const currentLevelData = state.regions.levels[state.regions.mapLevel];
  if (!currentLevelData) {
    return {};
  }
  return {
    region: currentLevelData.regions[currentLevelData.selectedRegion]
  };
};

export default connect(mapStateToProps)(React.memo(Region));
