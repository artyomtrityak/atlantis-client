import React from "react";
import cityIcon from "../../../assets/svg/city3.svg";
import { IRegion } from "../../reducers/regions";
import { regionWidth, regionHeight } from "./utils";

interface ICityProps {
  readonly zoom: number;
  readonly region: IRegion;
}

const HexCity = (props: ICityProps) => {
  const { zoom, region } = props;

  if (!region.hasCity) {
    return null;
  }

  if (zoom < 0.3) {
    return null;
  }

  return (
    <svg
      width={30 * zoom}
      height={30 * zoom}
      x={(regionWidth * zoom) / 2 - 15 * zoom}
      y={(regionHeight * zoom) / 2 - 15 * zoom}
      viewBox={cityIcon.viewBox}
      className="hex-object--city"
    >
      <use href={`#${cityIcon.id}`} />
    </svg>
  );
};

export default HexCity;
