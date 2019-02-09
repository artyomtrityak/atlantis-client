import React from "react";
import { IRegionDetailsProps } from "./details-region.d";

export default function renderExits({ region }: IRegionDetailsProps) {
  if (!region || !region.exits) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="card-text">Exits:</div>
      {Object.keys(region.exits).map(dir => {
        if (!region.exits || !region.exits[dir]) {
          return null;
        }
        return (
          <div key={dir} className="card-text ml-3 atl-region__exit">
            {dir}: {region.exits[dir].title}
          </div>
        );
      })}
    </React.Fragment>
  );
}
