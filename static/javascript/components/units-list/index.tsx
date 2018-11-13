import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import ReactDataGrid from "react-data-grid";
import { activateTab } from "../../actions/details-actions";
import { selectUnit } from "../../actions/units-actions";
import { withSize } from "../utils";
import Toolbar from "./toolbar";

const getColumns = width => {
  const dynamicWidth = width - 50 - 70 - 60;

  return [
    {
      key: "unit_id",
      name: "Unit #",
      width: 70,
      sortable: true,
      filterable: true
    },
    {
      key: "faction",
      name: "Faction",
      width: (dynamicWidth * 25) / 100,
      sortable: true,
      filterable: true
    },
    {
      key: "unit",
      name: "Unit",
      width: (dynamicWidth * 25) / 100,
      sortable: true,
      filterable: true
    },
    {
      key: "men",
      name: "Men",
      width: (dynamicWidth * 10) / 100,
      sortable: true,
      filterable: true
    },
    {
      key: "silver",
      name: "Silver",
      width: 60,
      sortable: true,
      filterable: true
    },
    {
      key: "skills",
      name: "Skills",
      width: (dynamicWidth * 15) / 100,
      sortable: true,
      filterable: true
    },
    {
      key: "orders",
      name: "Orders",
      sortable: true,
      filterable: true
    }
  ];
};

const rows = [];
const numberOfRows = 500;
for (let i = 1; i < numberOfRows; i++) {
  rows.push({
    id: i * 1000,
    unitId: i * 1000,
    faction: "#12112 Faction " + i,
    unit: "My name",
    men: "5 orc",
    silver: "$500",
    skills: "combat 3",
    orders: "MOVE S W SW"
  });
}

function onGridSort() {
  console.log("SORT", arguments);
}

const rowGetter = i => rows[i];

const UnitsList = props => {
  const { onRowClick, selectedUnitId } = props;
  let selectedIndex;
  if (selectedUnitId) {
    selectedIndex = _.findIndex(rows, d => d.unitId === selectedUnitId);
  }

  return (
    <div style={{ fontSize: 12 }}>
      <ReactDataGrid
        rowKey="id"
        onGridSort={onGridSort}
        enableCellSelect={false}
        onRowClick={(i, d) => onRowClick(d.unitId)}
        columns={getColumns(props.width)}
        rowGetter={rowGetter}
        rowsCount={rows.length}
        minHeight={props.height}
        headerRowHeight={30}
        // onFilter={onRowClick}
        toolbar={<Toolbar />}
        rowHeight={25}
        rowSelection={{
          showCheckbox: false,
          selectBy: {
            indexes: [selectedIndex]
          }
        }}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedUnitId: state.units.selectedUnitId
  };
};

const mapDispatchToProps = dispatch => {
  console.log(dispatch);
  return {
    onRowClick: unitId => {
      dispatch(selectUnit(unitId));
      dispatch(activateTab("unit"));
    }
  };
};

export default withSize(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(React.memo(UnitsList))
);
