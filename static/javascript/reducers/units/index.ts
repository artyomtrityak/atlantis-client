import _ from "lodash";
import { SELECT_UNIT, IActions as IUnitsActions } from "../../actions/units-actions";
import { REPORT_LOADED, IActions as IReportActions } from "../../actions/report-actions";
import parseRegionUnit from "./region-units";
import parseRegionObject from "./region-objects";
import { IState, IStateRegionUnits } from "./units.d";
export { IState };

const initialState: IState = {
  selectedUnitId: undefined,
  regions: {}
};

function parseObjectsAndUnits(report: IReport) {
  const reportRegionsData = report.find(d => {
    return d.type === "REGIONS";
  }) as IReportItemRegions;

  if (!reportRegionsData) {
    return {};
  }

  const regions = reportRegionsData.regions.reduce((result: IStateRegionUnits, region) => {
    result[region.id] = {
      units: [],
      objects: []
    };
    for (let i = 0; i < region.unitsAndObjects.length; i++) {
      switch (region.unitsAndObjects[i].type) {
        case "UNIT":
          const unit = parseRegionUnit(region.unitsAndObjects[i] as IReportUnit);
          result[region.id].units.push(unit);
          break;
        case "OBJECT":
          const [object, units] = parseRegionObject(region.unitsAndObjects[i] as IReportObjectStructure);
          result[region.id].units = [...result[region.id].units, ...units];
          result[region.id].objects.push(object);
          break;
      }
    }
    return result;
  }, {});

  console.log("RERERE:", regions);
  return regions;
}

// -------------------
// Units Reducer
// -------------------

function unitsReducer(state: IState = initialState, action: IUnitsActions | IReportActions) {
  switch (action.type) {
    case SELECT_UNIT:
      state = { ...state, selectedUnitId: action.payload };
      break;

    case REPORT_LOADED:
      state = { ...state, regions: parseObjectsAndUnits(action.payload) };
      break;
  }
  return state;
}

export default unitsReducer;
