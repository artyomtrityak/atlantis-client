import React from "react";
import warningIcon from "../../../assets/svg/warning2.svg";
import { IRegion } from "../../reducers/regions";
import { regionWidth, regionHeight } from "./utils";

interface IHexUnitsFlagProps {
  readonly zoom: number;
  readonly region: IRegion;
}

const HexUnitsFlag = (props: IHexUnitsFlagProps) => {
  const { zoom, region } = props;

  if (!region.unitsAndObjects || !region.unitsAndObjects.length) {
    return null;
  }

  if (zoom < 0.3) {
    return null;
  }

  // TODO: make flag green if all month long orders in region are done

  return (
    <circle
      cx={(regionWidth * zoom) / 2 + 17 * zoom}
      cy={(regionHeight * zoom) / 2 + 25 * zoom}
      r={3 * zoom}
      stroke="red"
      strokeWidth="3"
      fill="red"
    />
  );
};

export default HexUnitsFlag;
