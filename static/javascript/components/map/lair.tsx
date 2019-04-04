import React from "react";
import cityIcon from "../../../assets/svg/city3.svg";
import { IRegion } from "../../reducers/regions";
import { regionWidth, regionHeight } from "./utils";

interface ILairProps {
  readonly zoom: number;
  readonly region: IRegion;
}

const HexLair = (props: ILairProps) => {
  const { zoom, region } = props;
  // TODO: check lair in regions objects

  if (zoom < 0.3) {
    return null;
  }

  return (
    <svg width={10} height={10} x={(regionWidth * zoom) / 2 - 5} y={(regionHeight * zoom) / 2 - 5} viewBox={cityIcon.viewBox}>
      <use href={`#${cityIcon.id}`} />
    </svg>
  );
};

export default HexLair;
