import React from "react";
import { connect } from "react-redux";
import ReactDataGrid from "react-data-grid";
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

const rows: any = [];
const numberOfRows = 500;
for (let i = 1; i < numberOfRows; i++) {
  rows.push({
    unit_id: i * 1000,
    faction: "#12112 Faction " + i,
    unit: "My name",
    men: "5 orc",
    silver: "$500",
    skills: "combat 3",
    orders: "MOVE S W SW"
  });
}

function onGridSort() {
  console.log("XX", arguments);
}

function onRowClick() {
  console.log("TYYY", arguments);
}

const rowGetter = (i: any) => rows[i];

const UnitsList = React.memo(props => {
  return (
    <div style={{ fontSize: 12 }}>
      <ReactDataGrid
        rowKey="id"
        onGridSort={onGridSort}
        enableCellSelect={false}
        onRowClick={onRowClick}
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
            indexes: [1]
          }
        }}
      />
    </div>
  );
});

const mapStateToProps = state => {
  return {
    a: 2
  };
};

const mapDispatchToProps = dispatch => {
  console.log(dispatch);
  return {
    onRowClick: unitId => dispatch(selectUnit(unitId))
  };
};

export default withSize(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UnitsList)
);
