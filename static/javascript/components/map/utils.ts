export const regionWidth = 100;
export const regionHeight = 90;

interface IHexPosition {
  x: number;
  y: number;
  zoom: number;
}

export function calculateHexPosition({ x, y, zoom }: IHexPosition) {
  let offsetX = 0;
  if (y !== 0) {
    offsetX = (-52 * y) / 2;
  }
  if (y % 2 === 1) {
    offsetX = -26 * y;
  }

  // TODO: -50 fix remove?
  const posX = regionWidth * y * zoom + offsetX * zoom;
  const posY = (regionHeight / 2) * x * zoom;
  return { x: posX, y: posY };
}

export function calculateMapPositions(params: IHexPosition) {
  const { zoom } = params;
  let { x, y } = params;
  x += 1; // because regions start with 0
  y += 1; // because regions start with 0

  const position = calculateHexPosition({ x, y, zoom });
  const svgWidth = position.x + (regionWidth * zoom) / 2 - 74 * zoom;
  const svgHeight = position.y + (regionHeight * zoom) / 2;
  return { svgWidth, svgHeight };
}
