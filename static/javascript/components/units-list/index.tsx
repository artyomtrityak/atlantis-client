import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import ReactDataGrid from "react-data-grid";
import { ICombinedReducersState } from "../../reducers";
import { selectUnit } from "../../actions/units-actions";
import { withSize } from "../utils";
import { IUnitListsProps, IDataGridObject } from "./units-list.d";
import Toolbar from "./toolbar";
import { useRowFactory, getColumns, onGridSort } from "./unit-list-helpers";
import "./styles/index.scss";

const UnitsList = (props: IUnitListsProps) => {
  const { onRowClick, selectedUnitId, units } = props;
  const [rowGetter] = useRowFactory(props);

  let selectedIndex;
  if (selectedUnitId) {
    selectedIndex = _.findIndex(units, d => d.id === selectedUnitId);
  }

  return (
    <div className="units-list">
      <ReactDataGrid
        rowKey="id"
        onGridSort={onGridSort}
        enableCellSelect={false}
        onRowClick={(i: number, d: IDataGridObject) => d && onRowClick(d.id)}
        columns={getColumns(props.width)}
        rowGetter={(i: number) => rowGetter(i)}
        rowsCount={units.length}
        minHeight={props.height}
        headerRowHeight={30}
        toolbar={<Toolbar />}
        rowHeight={25}
        rowSelection={{
          showCheckbox: false,
          selectBy: {
            indexes: _.compact([selectedIndex])
          }
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
