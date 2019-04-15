import React from "react";
import warningIcon from "../../../assets/svg/warning2.svg";
import { IRegion } from "../../reducers/regions";
import { regionWidth, regionHeight } from "./utils";

interface ILairProps {
  readonly zoom: number;
  readonly region: IRegion;
}

const HexLair = (props: ILairProps) => {
  const { zoom, region } = props;

  if (!region.hasLair) {
    return null;
  }

  if (zoom < 0.3) {
    return null;
  }

  return (
    <svg
      width={20 * zoom}
      height={20 * zoom}
      x={(regionWidth * zoom) / 2 - 25 * zoom}
      y={(regionHeight * zoom) / 2 + 15 * zoom}
      viewBox={warningIcon.viewBox}
      className="hex-object--lair"
    >
      <use href={`#${warningIcon.id}`} />
    </svg>
  );
};

export default HexLair;
