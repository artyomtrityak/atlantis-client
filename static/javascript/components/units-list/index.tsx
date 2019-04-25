import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { ICombinedReducersState } from "../../reducers";
import { selectUnit } from "../../actions/units-actions";
import { withSize } from "../utils";
import { IUnitListsProps } from "./units-list.d";
import { getColumns } from "./unit-list-helpers";
import "./styles/index.scss";

const UnitsList = (props: IUnitListsProps) => {
  const { onRowClick, selectedUnitId, units } = props;
  // const [rowGetter] = useRowFactory(props);

  return (
    <div className="units-list ag-theme-balham" style={{ height: props.height }}>
      <AgGridReact
        columnDefs={getColumns(props.width)}
        rowData={[]}
        rowSelection="single"
        onSelectionChanged={a => {
          console.log(a);
        }}
        onGridReady={params => {
          const gridApi = params.api;
          console.log(params, gridApi);
        }}
        onRowSelected={event => {
          console.log(event.node.data);
        }}
      />
    </div>
  );
};

const mapStateToProps = (state: ICombinedReducersState) => {
  const currentLevelData = state.regions.levels[state.regions.mapLevel];
  if (!currentLevelData || !currentLevelData.selectedRegion || !state.units.regions[currentLevelData.selectedRegion]) {
    return {
      selectedUnitId: undefined,
      units: [],
      objects: []
    };
  }

  return {
    selectedUnitId: state.units.selectedUnitId,
    units: state.units.regions[currentLevelData.selectedRegion].units,
    objects: state.units.regions[currentLevelData.selectedRegion].objects
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onRowClick: (unitId: number) => {
      dispatch(selectUnit(unitId));
    }
  };
};

export default withSize(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(React.memo(UnitsList))
);
