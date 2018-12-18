import { REPORT_LOADED } from "../actions/report-actions";

const initialState = {
  levels: ["nexus", "upperworld", "underworld", "underdeep", "abyss"],
  regions: {},
  regionsUnderworld: {},
  selectedRegion: undefined
};

const parseRegions = report => {
  const reportData = report.find(d => d.type === "REGIONS");
  if (!reportData || !reportData.regions) {
    return {};
  }
  const regions = {};
  const exitRegions = {};
  let isWrap = false;
  let isTopEdge = false;
  let isBottomEdge = false;
  let maxX = 0;
  let maxY = 0;

  // TODO: do same for z (undeground)

  for (let region of reportData.regions) {
    const { x, y, z } = region.coordinates;
    regions[`${x}_${y}_${z}`] = region;

    if (x === 0) {
      isWrap = true;
    }
    if (y === 0) {
      isTopEdge = true;
    }
    if (!region.exits.south) {
      isBottomEdge = true;
    }
    if (x > maxX) {
      maxX = x;
    }
    if (y > maxY) {
      maxY = y;
    }

    for (const dir in region.exits) {
      if (!region.exits.hasOwnProperty(dir)) {
        continue;
      }
      const {
        coordinates: { x: exitX, y: exitY, z: exitZ }
      } = region.exits[dir];
      exitRegions[`${exitX}_${exitY}_${exitZ}`] = region.exits[dir];

      if (exitX === 0) {
        isWrap = true;
      }
      if (exitY === 0) {
        isTopEdge = true;
      }
      if (exitX > maxX) {
        maxX = exitX;
      }
      if (exitY > maxY) {
        maxY = exitY;
      }
    }
  }

  return {
    regions: { ...exitRegions, ...regions },
    isWrap,
    isTopEdge,
    isBottomEdge,
    maxX,
    maxY
  };
};

function regionsReducer(state = initialState, action) {
  switch (action.type) {
    case REPORT_LOADED:
      state = { ...state, ...parseRegions(action.report) };
      break;
  }
  return state;
}

export default regionsReducer;
