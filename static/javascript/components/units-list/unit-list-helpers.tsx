import { IUnitListsProps, IDataGridObject } from "./units-list.d";

export const getColumns = (width: number) => {
  const dynamicWidth = width - 80 * 9 - 100;

  const COLUMNS = [
    {
      field: "id",
      headerName: "Unit ID",
      sortable: true,
      filter: true,
      width: 100
    },
    {
      field: "faction",
      headerName: "Faction",
      sortable: true,
      filter: true,
      width: dynamicWidth / 3
    },
    {
      field: "unit_name",
      headerName: "Unit",
      sortable: true,
      filter: true,
      width: dynamicWidth / 3
    },
    {
      field: "men",
      headerName: "Men",
      sortable: true,
      width: 80
    },
    {
      field: "skills",
      headerName: "Skills",
      sortable: true,
      width: 80
    },
    {
      field: "silver",
      headerName: "Silver",
      sortable: true,
      width: 80
    },
    {
      field: "weapons",
      headerName: "Weapons",
      sortable: true,
      width: 80
    },
    {
      field: "armor",
      headerName: "Armor",
      sortable: true,
      width: 80
    },
    {
      field: "mounts",
      headerName: "Mounts",
      sortable: true,
      width: 80
    },
    {
      field: "items",
      headerName: "Items",
      sortable: true,
      width: 80
    },
    {
      field: "struct",
      headerName: "Struct",
      sortable: true,
      filter: true,
      width: dynamicWidth / 3
    },
    {
      field: "ownsStruct",
      headerName: "Own",
      sortable: true,
      width: 80
    }
  ];

  return COLUMNS;
};

export const useRowFactory = ({ units }: IUnitListsProps) => {
  // TODO: add useMemo if works slow
  const rowGetter = (i: number): IDataGridObject => {
    if (i < 0 || !units || !units[i]) {
      return null;
    }

    const { id, faction, name, items, inStructure, inStructureName, ownsStructure } = units[i];

    const silverCount = items.reduce((total, it) => {
      if (it.itemKey === "SILV") {
        return total + it.amount;
      }
      return total;
    }, 0);
    const menCount = items.reduce((total, it) => {
      if (it.isRace) {
        return total + it.amount;
      }
      return total;
    }, 0);
    const weaponCount = items.reduce((total, it) => {
      if (it.isWeapon) {
        return total + it.amount;
      }
      return total;
    }, 0);
    const armorCount = items.reduce((total, it) => {
      if (it.isWeapon) {
        return total + it.amount;
      }
      return total;
    }, 0);
    const mountsCount = items.reduce((total, it) => {
      if (it.isMount) {
        return total + it.amount;
      }
      return total;
    }, 0);

    return {
      id,
      faction: faction ? `${faction.factionName} (${faction.factionId})` : undefined,
      unit_name: name,
      men: menCount ? menCount : undefined,
      silver: silverCount ? silverCount : undefined,
      weapons: weaponCount ? weaponCount : undefined,
      armor: armorCount ? armorCount : undefined,
      mounts: mountsCount ? mountsCount : undefined,
      items: items.length,
      struct: inStructure ? `${inStructureName} [${inStructure}]` : "",
      ownsStruct: ownsStructure ? "yes" : ""
    };
  };
  return [rowGetter];
};

export const onGridSort = () => {
  console.log("SORT");
};
