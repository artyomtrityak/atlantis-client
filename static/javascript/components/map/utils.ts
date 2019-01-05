export const regionWidth = 100;
export const regionHeight = 90;

export function calculateHexPosition({ col, row, zoom }) {
  let offsetX = 0;
  if (col !== 0) {
    offsetX = (-52 * col) / 2;
  }
  if (col % 2 === 1) {
    offsetX = -26 * col;
  }

  const x = regionWidth * col * zoom + offsetX * zoom;
  const y = (regionHeight / 2) * row * zoom;
  return { x, y };
}

export function calculateMapPositions(params) {
  const { zoom } = params;
  let { maxX, maxY } = params;
  maxX += 1; // because regions start with 0
  maxY += 1; // because regions start with 0

  let { x, y } = calculateHexPosition({ col: maxX, row: maxY, zoom });
  x += (regionWidth * zoom) / 2;
  y += (regionHeight * zoom) / 2;
  return { svgWidth: x, svgHeight: y, regionsCount: maxX * maxY };
}
