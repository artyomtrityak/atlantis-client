import React from "react";
import { IRegion } from "../../reducers/regions";

export default function renderGate({ region }: { region: IRegion }) {
  if (!region.gate) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="card-text">{region.gate}</div>
      <div className="dropdown-divider" />
    </React.Fragment>
  );
}
