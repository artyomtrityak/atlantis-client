import { IUnitListsProps, IDataGridObject } from "./units-list.d";

export const getColumns = (width: number) => {
  const dynamicWidth = width - 80 * 8 - 200;

  return [
    {
      key: "id",
      name: "Unit ID",
      width: 80,
      sortable: true,
      filterable: true
    },
    {
      key: "faction",
      name: "Faction",
      width: (dynamicWidth * 40) / 100,
      sortable: true,
      filterable: true
    },
    {
      key: "unit_name",
      name: "Unit",
      width: (dynamicWidth * 50) / 100,
      sortable: true,
      filterable: true
    },
    {
      key: "men",
      name: "Men",
      width: 80,
      sortable: true,
      filterable: true
    },
    {
      key: "silver",
      name: "Silver",
      width: 80,
      sortable: true,
      filterable: true
    },
    {
      key: "weapons",
      name: "Weapons",
      width: 80,
      sortable: true,
      filterable: true
    },
    {
      key: "armor",
      name: "Armor",
      width: 80,
      sortable: true,
      filterable: true
    },
    {
      key: "mounts",
      name: "Mounts",
      width: 80,
      sortable: true,
      filterable: true
    },
    {
      key: "items",
      name: "Items",
      width: 80,
      sortable: true,
      filterable: true
    },
    {
      key: "struct",
      name: "Struct",
      width: 200,
      sortable: true,
      filterable: true
    },
    {
      key: "ownsStruct",
      name: "Own",
      width: 80,
      sortable: true,
      filterable: true
    }
  ];
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
