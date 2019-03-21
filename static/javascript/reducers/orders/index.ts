import _ from "lodash";
import { REPORT_LOADED, IActions as IReportActions } from "../../actions/report-actions";
import { IState, IOrdersUnits } from "./orders.d";
export { IState };

const initialState: IState = {
  factionNumber: undefined,
  factionPassword: undefined,
  units: {}
};

function parseOrders(report: IReport) {
  const reportOrdersData = report.find(d => {
    return d.type === "ORDERS_TEMPLATE";
  }) as IReportItemOrdersTemplate;

  const units = _.chain(reportOrdersData.orders)
    .flatten()
    .reduce((result: IOrdersUnits, unit) => {
      result[unit.unitId] = unit.orders.filter(ord => ord[0] !== ";");
      return result;
    }, {})
    .value();

  return {
    factionNumber: reportOrdersData.factionNumber,
    factionPassword: reportOrdersData.factionPassword,
    units
  };
}

// -------------------
// Events Reducer
// -------------------

function ordersReducer(state: IState = initialState, action: IReportActions) {
  switch (action.type) {
    case REPORT_LOADED:
      state = { ...state, ...parseOrders(action.payload) };
      break;
  }
  return state;
}

export default ordersReducer;