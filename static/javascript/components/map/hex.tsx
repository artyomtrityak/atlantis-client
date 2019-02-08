import React, { useRef, useEffect } from "react";
import cn from "classnames";
import { calculateHexPosition, regionWidth, regionHeight } from "./utils";
import { IHexProps, IPoint } from "./map.d";

const Hex = (props: IHexProps) => {
  const elRef = useRef<SVGPolygonElement>(null);
  const prevProps = useRef(props);

  useEffect(() => {
    if (props.isSelected && !prevProps.current.isSelected && elRef.current && elRef.current.parentNode) {
      const parent = elRef.current.parentNode;
      parent.removeChild(elRef.current);
      parent.appendChild(elRef.current);
    }
  });

  useEffect(() => {
    prevProps.current = props;
  });

  const { x, y, zoom, isSelected, region } = props;

  // TODO: use https://www.quora.com/How-can-you-find-the-coordinates-in-a-hexagon
  const points = [
    { x: 0, y: 0.5 * regionHeight },
    { x: 0.25 * regionWidth, y: 0 },
    { x: 0.75 * regionWidth, y: 0 },
    { x: 1 * regionWidth, y: 0.5 * regionHeight },
    { x: 0.75 * regionWidth, y: 1 * regionHeight },
    { x: 0.25 * regionWidth, y: 1 * regionHeight }
  ];

  const pointsPath = points.map((d: IPoint) => `${zoom * d.x},${zoom * d.y}`).join(" ");
  const position = calculateHexPosition({ x, y, zoom });

  return (
    <polygon
      ref={elRef}
      transform={`translate(${position.x}, ${position.y})`}
      points={pointsPath}
      className={cn("hex", `hex--type-${region.type}`, {
        "hex--selected": isSelected
      })}
      onClick={() => props.onSelect(props.region.id)}
    />
  );
};

export default Hex;
