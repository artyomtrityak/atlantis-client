@{%
  const itemsProcessor = (d) => {
    return {
      type: "ITEMS",
      items: d[2]
    };
  };
%}


FACTION_ITEMS ->
  "Item reports:" NL NL
  FACTION_ITEM:+

FACTION_ITEM ->
  FACTION_ITEM_TEXT NL NL

FACTION_ITEM_TEXT ->
  TEXT | "."