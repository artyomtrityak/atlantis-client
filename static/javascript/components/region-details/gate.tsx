import React from "react";
import { IRegionDetailsProps } from "./details-region.d";

export default function renderGate({ region }: IRegionDetailsProps) {
  if (!region || !region.gate) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="card-text">{region.gate}</div>
      <div className="dropdown-divider" />
    </React.Fragment>
  );
}
