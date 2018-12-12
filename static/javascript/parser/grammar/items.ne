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
  TEXT "." NL NL
  # SENTENCE __ TEXT NL_ {% (d) => ({ itemTitle: d[0], description: d[2] }) %}