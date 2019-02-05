import React from "react";
import { IRegion } from "../../reducers/regions";

export default function renderExits({ region }: { region: IRegion }) {
  if (!region.exits) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="card-text">Exits:</div>
      <div className="card-text ml-3">North: wasteland (13,19) in Zarka.</div>
      <div className="card-text ml-3">Northeast: wasteland (14,20) in Zarka.</div>
      <div className="card-text ml-3">Southeast: swamp (14,22) in Zarka.</div>
      <div className="card-text ml-3">South: swamp (13,23) in Zarka.</div>
      <div className="card-text ml-3">Southwest: wasteland (12,22) in Zarka.</div>
      <div className="card-text ml-3">Northwest: ocean (22,20) in Zarka Ocean.</div>
    </React.Fragment>
  );
}
