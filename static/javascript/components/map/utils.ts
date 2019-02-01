import { IHexPosition } from "./map.d";

export const regionWidth = 100;
export const regionHeight = 90;

export function calculateHexPosition({ x, y, zoom }: IHexPosition) {
  let offsetX = 0;
  if (x !== 0) {
    offsetX = (-52 * x) / 2;
  }
  if (x % 2 === 1) {
    offsetX = -26 * x;
  }

  const posX = regionWidth * x * zoom + offsetX * zoom;
  const posY = (regionHeight / 2) * y * zoom;
  return { x: posX, y: posY };
}

export function calculateMapPositions(params: IHexPosition) {
  const { zoom } = params;
  let { x, y } = params;

  x += 1;
  y += 1;

  const position = calculateHexPosition({ x, y, zoom });
  const svgWidth = position.x;
  const svgHeight = position.y;
  return { svgWidth, svgHeight };
}
