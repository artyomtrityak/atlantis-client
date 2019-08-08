import React from "react";
import { IRegion } from "../../reducers/regions";
import { regionWidth, regionHeight } from "./utils";

interface ICityNameProps {
  readonly zoom: number;
  readonly region: IRegion;
}

const HexCityName = (props: ICityNameProps) => {
  const { zoom, region } = props;

  if (!region.hasCity) {
    return null;
  }

  if (zoom < 0.3) {
    return null;
  }

  return (
    <svg width={regionWidth} height={regionHeight} x={0} y={(regionHeight * zoom) / 2 - (12 * zoom) / 2} className="hex-object--city-name">
      <g>
        <text x="0" y={12 * zoom} width={regionWidth * zoom} fontSize={12 * zoom} fill="black">
          {region.cityName}
        </text>
      </g>
    </svg>
  );
};

export default HexCityName;
