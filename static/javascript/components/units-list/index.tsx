import _ from "lodash";
import React, { useRef, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { ICombinedReducersState } from "../../reducers";
import { selectUnit } from "../../actions/units-actions";
import { withSize } from "../utils";
import { IUnitListsProps } from "./units-list.d";
import { getColumns, useRowFactory } from "./unit-list-helpers";
import "./styles/index.scss";
import { GridReadyEvent, GridApi } from "ag-grid-community";

const UnitsList = (props: IUnitListsProps) => {
  const { onRowClick, selectedUnitId } = props;
  const [onGridReady] = useAgGrid(props);
  const rowData = useRowFactory(props);

  return (
    <div className="units-list ag-theme-balham" style={{ height: props.height }}>
      <AgGridReact
        columnDefs={getColumns(props.width)}
        rowData={rowData}
        rowSelection="single"
        // onSelectionChanged={a => {
        //   console.log(a);
        // }}
        onGridReady={onGridReady}
        onRowSelected={event => {
          onRowClick(event.node.data.id);
        }}
      />
    </div>
  );
};

const useAgGrid = (props: IUnitListsProps) => {
  const gridAip = useRef<GridApi | null>(null);

  const onGridReady = (params: GridReadyEvent) => {
    console.log("GRID READY", params);
    gridAip.current = params.api;
  };

  return [onGridReady];
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
