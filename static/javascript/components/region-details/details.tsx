import React from "react";
import { IRegionDetailsProps } from "./details-region.d";

export default function renderDetails({ region }: IRegionDetailsProps) {
  if (!region || region.details.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="dropdown-divider" />
      {region.weather}
      {region.details.map((detail, i) => (
        <div className="card-text atl-region__detail" key={`detail_${i}`}>
          <b>{detail.type}</b>: {detail.details}
        </div>
      ))}
      <div className="dropdown-divider" />
    </React.Fragment>
  );
}
