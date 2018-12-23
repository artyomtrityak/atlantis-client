import React from "react";

const Hex = props => {
  const row = props.index % props.maxY;
  const col = parseInt(props.index / props.maxY, 10);
  const width = 100;
  const height = 90;

  const points = [
    { x: 0, y: 0.5 * height },
    { x: 0.25 * width, y: 0 },
    { x: 0.75 * width, y: 0 },
    { x: 1 * width, y: 0.5 * height },
    { x: 0.75 * width, y: 1 * height },
    { x: 0.25 * width, y: 1 * height }
  ];
  const zoom = 0.5;

  const pointsPath = points.map(d => `${zoom * d.x},${zoom * d.y}`).join(" ");
  let offsetX = 0;
  let offsetY = 0;
  if (col !== 0) {
    offsetX = (-52 * col) / 2;
  }
  if (col % 2 === 1) {
    offsetX = -26 * col;
    offsetY = 44;
  }

  return (
    <polygon
      transform={`translate(${zoom * width * col + zoom * offsetX}, ${zoom * height * row + zoom * offsetY})`}
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="0.5"
      points={pointsPath}
      className="hex"
    />
  );
};

export default React.memo(Hex);
