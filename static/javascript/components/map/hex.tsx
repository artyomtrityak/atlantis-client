import React, { useRef, useEffect, useLayoutEffect } from "react";
import cn from "classnames";
import { IRegion } from "../../reducers/regions";
import { calculateHexPosition, regionWidth, regionHeight } from "./utils";
import City from "./city";

interface IHexProps {
  readonly isSelected: boolean;
  readonly zoom: number;
  readonly x: number;
  readonly y: number;
  readonly onSelect: (regionId: string) => void;
  readonly region: IRegion;
}

type IUseHexData = [React.RefObject<SVGPolygonElement>, ReturnType<typeof calculateHexPosition>, string];

const Hex = (props: IHexProps) => {
  const [elRef, position, pointsPath] = useHexData(props);
  const { isSelected, region, zoom } = props;

  if (isSelected) {
    console.log("HEX:", props.region);
  }

  // TODO: roads, ships, monster lairs, gray overlay if 0 units present

  return (
    <g transform={`translate(${position.x}, ${position.y})`} ref={elRef}>
      <polygon
        points={pointsPath}
        className={cn("hex", `hex--type-${region.type}`, {
          "hex--selected": isSelected
        })}
        onClick={() => props.onSelect(props.region.id)}
      />
      <City zoom={zoom} region={region} />
    </g>
  );
};

const useHexData = (props: IHexProps): IUseHexData => {
  const { x, y, zoom } = props;
  const elRef = useRef<SVGPolygonElement>(null);
  const prevProps = useRef(props);

  useLayoutEffect(() => {
    if (props.isSelected && !prevProps.current.isSelected && elRef.current && elRef.current.parentNode) {
      const parent = elRef.current.parentNode;
      parent.removeChild(elRef.current);
      parent.appendChild(elRef.current);
    }
  });

  useEffect(() => {
    prevProps.current = props;
  });

  // TODO: use https://www.quora.com/How-can-you-find-the-coordinates-in-a-hexagon
  const points = [
    { x: 0, y: 0.5 * regionHeight },
    { x: 0.25 * regionWidth, y: 0 },
    { x: 0.75 * regionWidth, y: 0 },
    { x: 1 * regionWidth, y: 0.5 * regionHeight },
    { x: 0.75 * regionWidth, y: 1 * regionHeight },
    { x: 0.25 * regionWidth, y: 1 * regionHeight }
  ];

  const pointsPath = points.map((d: typeof points[0]) => `${zoom * d.x},${zoom * d.y}`).join(" ");
  const position = calculateHexPosition({ x, y, zoom });

  return [elRef, position, pointsPath];
};

export default Hex;
