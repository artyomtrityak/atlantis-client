import _ from "lodash";
import { REPORT_LOADED, IActions as IReportActions } from "../../actions/report-actions";
import { SELECT_REGION, ZOOM_IN, ZOOM_OUT, LEVEL_DOWN, LEVEL_UP, IActions as IRegionActions } from "../../actions/regions-actions";
import { parseRegionUnits } from "./region-units";
import { parseRegionObjects } from "./region-objects";
import { IState, ILevel } from "./regions.d";
export { IState };

const initialState: IState = {
  levels: [],
  mapLevel: 0,
  zoom: 0.1
};

function parseRegion(result: ILevel[], region: IRegion) {
  const { x, y, z } = region.coordinates;

  if (!result[z]) {
    result[z] = { regions: {}, maxX: 0, maxY: 0, isWrap: false, level: z, selectedRegion: `${x}_${y}_${z}` };
  }

  const regions = { ...result[z].regions };
  regions[`${x}_${y}_${z}`] = region;

  // Exits
  for (const dir in region.exits) {
    if (!region.exits.hasOwnProperty(dir)) {
      continue;
    }
    const {
      coordinates: { x: exitX, y: exitY }
    } = region.exits[dir];
    if (!regions[`${exitX}_${exitY}_${z}`] || regions[`${exitX}_${exitY}_${z}`].type === "unknown") {
      regions[`${exitX}_${exitY}_${z}`] = region.exits[dir];
    }
  }
  result[z] = { ...result[z], regions };
  return result;
}

function parseLevel(level: ILevel) {
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
  level = { ...level, maxX, maxY, isWrap };
  // TODO: add isTop/BottonEdge check
  return level;
}

function addShadowRegions(level: ILevel) {
  const regions = { ...level.regions };
  for (const locator in level.regions) {
    if (!level.regions.hasOwnProperty(locator)) {
      continue;
    }
    const {
      coordinates: { x, y, z }
    } = regions[locator];

    // Shadow regions
    [
      { x: x + 1, y: y - 1 },
      { x: x + 1, y: y + 1 },
      { x, y: y - 2 },
      { x, y: y + 2 },
      { x: x - 1, y: y - 1 },
      { x: x - 1, y: y + 1 }
    ].forEach(d => {
      // If region exist
      if (regions[`${d.x}_${d.y}_${z}`]) {
        return;
      }

      // If region off boundry
      if (d.y < 0) {
        return;
      }

      // If wrapped
      if (level.isWrap && x === level.maxX && x < d.x) {
        return;
      }
      regions[`${d.x}_${d.y}_${z}`] = {
        id: `${d.x}_${d.y}_${z}`,
        coordinates: { x: d.x, y: d.y, z },
        title: "Unknown",
        type: "unknown",
        details: [],
        unitsAndObjects: [],
        units: []
      };
    });
  }
  return { ...level, regions };
}

function parseRegions(report: IReport) {
  const reportData = report.find(d => {
    return d.type === "REGIONS";
  });

  if (!reportData || reportData.type !== "REGIONS") {
    // typescript wtf
    return [];
  }

  return _.chain(reportData.regions)
    .map(parseRegionUnits)
    .map(parseRegionObjects)
    .reduce(parseRegion, [])
    .compact()
    .map(parseLevel)
    .map(addShadowRegions)
    .map(parseLevel)
    .value();
}

function selectRegion(state: IState, regionId: string) {
  const levels = state.levels.map((level, index) => {
    if (index !== state.mapLevel) {
      return level;
    }
    return { ...level, selectedRegion: regionId };
  });
  return { ...state, levels };
}

// -------------------
// Regions Reducer
// -------------------

function regionsReducer(state: IState = initialState, action: IRegionActions | IReportActions): IState {
  switch (action.type) {
    case REPORT_LOADED:
      state = { ...state, mapLevel: 0, zoom: 0.1, levels: parseRegions(action.payload) };
      break;

    case SELECT_REGION:
      state = selectRegion(state, action.payload);
      break;

    case LEVEL_DOWN:
      if (state.levels.length === state.mapLevel + 1) {
        return state;
      }
      state = { ...state, mapLevel: state.mapLevel + 1 };
      break;

    case LEVEL_UP:
      if (state.mapLevel === 0) {
        return state;
      }
      state = { ...state, mapLevel: state.mapLevel - 1 };
      break;

    case ZOOM_IN:
      if (state.zoom === 1) {
        // max
        return state;
      }
      state = { ...state, zoom: state.zoom + 0.1 };
      break;

    case ZOOM_OUT:
      if (state.zoom === 0.1) {
        // min
        return state;
      }
      state = { ...state, zoom: state.zoom - 0.1 };
      break;
  }
  return state;
}

export default regionsReducer;
