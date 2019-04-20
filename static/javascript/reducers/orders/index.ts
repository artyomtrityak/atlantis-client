import _ from "lodash";
import downloadFile from "js-file-download";
import { REPORT_LOADED, IActions as IReportActions } from "../../actions/report-actions";
import { DOWNLOAD_ORDERS, IActions as INavigationActions } from "../../actions/navigation-actions";
import generateOrders from "./generate-orders";
import { IState, IOrdersUnits, IOrders } from "./orders.d";
export { IState, IOrdersUnits, IOrders };

const initialState: IState = {
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
    units
  };
}

// -------------------
// Events Reducer
// -------------------

function ordersReducer(state: IState = initialState, action: IReportActions | INavigationActions) {
  switch (action.type) {
    case REPORT_LOADED:
      // TODO: Store password and faction name for report generation
      console.log("FACT O:", action.payload);
      state = { ...state, ...parseOrders(action.payload) };
      break;
    case DOWNLOAD_ORDERS:
      console.log("DOWNLOAD!!!", state);
      downloadFile(generateOrders(state), "order.txt"); // TODO: file name should be in different format
      break;
  }
  return state;
}

export default ordersReducer;
