import React from "react";
import { IRegion } from "../../reducers/regions";

export default function renderDetails({ region }: { region: IRegion }) {
  if (region.details.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="dropdown-divider" />
      {region.details.map((detail, i) => (
        <div className="card-text atl-region__detail" key={i}>
          {detail}
        </div>
      ))}
      <div className="dropdown-divider" />
    </React.Fragment>
  );
}
