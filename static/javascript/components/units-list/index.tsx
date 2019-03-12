import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import ReactDataGrid from "react-data-grid";
import { ICombinedReducersState } from "../../reducers";
import { activateTab } from "../../actions/details-actions";
import { selectUnit } from "../../actions/units-actions";
import { withSize } from "../utils";
import { IUnitListsProps } from "./units-list.d";
import Toolbar from "./toolbar";

const getColumns = (width: number) => {
  const dynamicWidth = width - 50 - 70 - 60;

  return [
    {
      key: "id",
      name: "Unit ID",
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
      key: "unit_name",
      name: "Unit",
      width: (dynamicWidth * 25) / 100,
      sortable: true,
      filterable: true
    },
    {
      key: "men",
      name: "Men",
      width: 60,
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
      key: "weapons",
      name: "Weapons",
      width: 60,
      sortable: true,
      filterable: true
    },
    {
      key: "armor",
      name: "Armor",
      width: 60,
      sortable: true,
      filterable: true
    },
    {
      key: "mounts",
      name: "Mounts",
      width: 60,
      sortable: true,
      filterable: true
    }
  ];
};

function onGridSort() {
  console.log("SORT", arguments);
}

type IDataGridObject = {
  id: number;
  faction: string;
  unit_name: string;
  men: number;
  silver: string;
  weapons: number;
  armor: number;
  mounts: number;
} | null;

const UnitsList = (props: IUnitListsProps) => {
  const { onRowClick, selectedUnitId, units } = props;

  console.log("U:", units);

  const rowGetter = (i: number): IDataGridObject => {
    // TODO: create type
    if (i < 0) {
      return null;
    }
    const { id, faction, name } = units[i];
    let factionStr = "";
    if (faction) {
      factionStr = `${faction.factionName} (${faction.factionId})`;
    }

    return {
      id,
      faction: factionStr,
      unit_name: name,
      men: 5,
      silver: `$500`,
      weapons: 15,
      armor: 5,
      mounts: 11
    };
  };

  let selectedIndex;
  if (selectedUnitId) {
    selectedIndex = _.findIndex(units, d => d.id === selectedUnitId);
  }

  console.log("PROPS:", props);

  return (
    <div style={{ fontSize: 12 }}>
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
        // onFilter={onRowClick}
        toolbar={<Toolbar />}
        rowHeight={25}
        rowSelection={{
          showCheckbox: false,
          selectBy: {
            // indexes: [selectedIndex]
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
      dispatch(activateTab("UNIT"));
    }
  };
};

export default withSize(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(React.memo(UnitsList))
);
