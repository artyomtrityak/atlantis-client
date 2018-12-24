import _ from "lodash";
import { REPORT_LOADED } from "../actions/report-actions";

const initialState = {
  levels: [],
  currentLevel: 0,
  zoom: 1,
  selectedRegion: undefined
};

const parseRegion = (result, region) => {
  if (!result[region.coordinates.z]) {
    result[region.coordinates.z] = { regions: {}, maxX: 0, maxY: 0 };
  }
  const { x, y } = region.coordinates;
  result[region.coordinates.z].regions[`${x}_${y}`] = region;

  // Exits
  for (const dir in region.exits) {
    if (!region.exits.hasOwnProperty(dir)) {
      continue;
    }
    const {
      coordinates: { x: exitX, y: exitY }
    } = region.exits[dir];
    if (!result[region.coordinates.z].regions[`${exitX}_${exitY}`]) {
      result[region.coordinates.z].regions[`${exitX}_${exitY}`] = region.exits[dir];
    }
  }
  return result;
};

const parseLevel = level => {
  let maxX = 0;
  let maxY = 0;
  let isWrap = false;
  for (const locator in level.regions) {
    if (!level.regions.hasOwnProperty(locator)) {
      continue;
    }
    if (level.regions[locator].coordinates.x > maxX) {
      maxX = level.regions[locator].coordinates.x;
    }
    if (level.regions[locator].coordinates.y > maxY) {
      maxY = level.regions[locator].coordinates.y;
    }
    if (level.regions[locator].coordinates.x === 0) {
      isWrap = true;
    }
  }
  level.maxX = maxX;
  level.maxY = maxY;
  level.isWrap = isWrap;
  // TODO: add isTop/BottonEdge check
  return level;
};

const parseRegions = report => {
  const reportData = report.find(d => d.type === "REGIONS");
  if (!reportData || !reportData.regions) {
    return [];
  }
  return _.chain(reportData.regions)
    .reduce(parseRegion, [])
    .compact()
    .map(parseLevel)
    .value();
};

function regionsReducer(state = initialState, action) {
  switch (action.type) {
    case REPORT_LOADED:
      state = { ...state, levels: parseRegions(action.report) };
      console.log(state);
      break;
  }
  return state;
}

export default regionsReducer;
