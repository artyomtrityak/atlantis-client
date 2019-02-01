import _ from "lodash";
import { REPORT_LOADED, IActions as IReportActions } from "../../actions/report-actions";
import { SELECT_REGION, ZOOM_IN, ZOOM_OUT, IActions as IRegionActions } from "../../actions/regions-actions";
import { IReport, IReportItemRegions } from "../../parser";
import { IState, ILevel, IRegion, IRegions } from "./regions.d";

export { IState, ILevel, IRegion, IRegions };

const initialState: IState = {
  levels: [],
  currentLevel: 1, // TODO: parse and find level where there is at least 1 region
  zoom: 0.1,
  selectedRegion: undefined
};

const parseRegion = (result: ILevel[], region: IRegion) => {
  const { x, y, z } = region.coordinates;

  if (!result[z]) {
    result[z] = { regions: {}, maxX: 0, maxY: 0, isWrap: false, level: z };
  }
  const regions = result[z].regions;
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
  return result;
};

const parseLevel = (level: ILevel) => {
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

const addShadowRegions = (level: ILevel) => {
  for (const locator in level.regions) {
    if (!level.regions.hasOwnProperty(locator)) {
      continue;
    }
    const {
      coordinates: { x, y, z }
    } = level.regions[locator];

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
      if (level.regions[`${d.x}_${d.y}_${z}`]) {
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
      level.regions[`${d.x}_${d.y}_${z}`] = {
        id: `${d.x}_${d.y}_${z}`,
        coordinates: { x: d.x, y: d.y, z },
        title: "Unknown",
        type: "unknown"
      };
    });
  }
  return level;
};

const parseRegions = (report: IReport) => {
  const reportData = report.find(d => {
    return d.type === "REGIONS";
  });

  if (!reportData || reportData.type !== "REGIONS") {
    // typescript wtf
    return [];
  }

  return _.chain(reportData.regions)
    .reduce(parseRegion, [])
    .compact()
    .map(parseLevel)
    .map(addShadowRegions)
    .map(parseLevel)
    .value();
};

// -------------------
// Regions Reducer
// -------------------

function regionsReducer(state: IState = initialState, action: IRegionActions | IReportActions): IState {
  switch (action.type) {
    case REPORT_LOADED:
      console.log("REPORT_LOADED ACTION:", action.payload, parseRegions(action.payload));
      state = { ...state, selectedRegion: undefined, zoom: 0.1, levels: parseRegions(action.payload) };
      console.log(state);
      break;

    case SELECT_REGION:
      state = { ...state, selectedRegion: action.payload };
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
