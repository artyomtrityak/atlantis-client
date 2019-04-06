import React from "react";
import { IRegion } from "../../reducers/regions";
import { regionWidth, regionHeight } from "./utils";

interface IRoadProps {
  readonly zoom: number;
  readonly region: IRegion;
}

const HexRoad = (props: IRoadProps) => {
  const { zoom, region } = props;

  if (zoom < 0.3) {
    return null;
  }

  const centerX = (regionWidth * zoom) / 2;
  const centterY = (regionHeight * zoom) / 2;
  const roads = [];

  if (region.hasRoadN) {
    roads.push(<line key="road_n" className="hex-object--road" x1={centerX} y1={centterY} x2={centerX} y2={centterY - 45 * zoom} />);
  }

  if (region.hasRoadNW) {
    roads.push(
      <line key="road_nw" className="hex-object--road" x1={centerX} y1={centterY} x2={centerX - 37 * zoom} y2={centterY - 22 * zoom} />
    );
  }

  if (region.hasRoadNE) {
    roads.push(
      <line key="road_ne" className="hex-object--road" x1={centerX} y1={centterY} x2={centerX + 37 * zoom} y2={centterY - 22 * zoom} />
    );
  }

  if (region.hasRoadS) {
    roads.push(<line key="road_s" className="hex-object--road" x1={centerX} y1={centterY} x2={centerX} y2={centterY + 45 * zoom} />);
  }

  if (region.hasRoadSW) {
    roads.push(
      <line key="road_sw" className="hex-object--road" x1={centerX} y1={centterY} x2={centerX - 37 * zoom} y2={centterY + 22 * zoom} />
    );
  }

  if (region.hasRoadSE) {
    roads.push(
      <line key="road_se" className="hex-object--road" x1={centerX} y1={centterY} x2={centerX + 37 * zoom} y2={centterY + 22 * zoom} />
    );
  }

  return <React.Fragment>{roads}</React.Fragment>;
};

export default HexRoad;
