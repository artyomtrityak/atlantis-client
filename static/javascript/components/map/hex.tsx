import React from "react";

const Hex = props => {
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
  // TODO: pass zoom from reducer
  const zoom = 0.5;
  const pointsPath = points.map(d => `${zoom * d.x},${zoom * d.y}`).join(" ");

  let offsetX = 0;
  if (props.col !== 0) {
    offsetX = (-52 * props.col) / 2;
  }
  if (props.col % 2 === 1) {
    offsetX = -26 * props.col;
  }

  const moveY = (height / 2) * props.row * zoom;
  const moveX = width * props.col * zoom + offsetX * zoom;

  return (
    <polygon
      transform={`translate(${moveX}, ${moveY})`}
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="0.5"
      points={pointsPath}
      className="hex"
      title={`${props.col},${props.row}`}
    />
  );
};

export default React.memo(Hex);
