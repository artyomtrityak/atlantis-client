@{%
  const regionProcessor = (d) => {
    return {
      title: array2String(d.slice(0, 5)),
      coordinates: d[2],
      description: d[8],
      exits: d[12],
      unitsAndObjects: d[14]
    };
  };

  const regionsProcessor = (d) => {
    return {
      type: "REGIONS",
      regions: d[0]
    };
  };
%}


# ------------------------------------------------------------
# REGIONS RULES
# ------------------------------------------------------------
FACTION_REGIONS ->
  FACTION_REGION:+ {% regionsProcessor %}


FACTION_REGION ->
  TEXT _ REGION_COORDINATES _ SENTENCE NL
  "------------------------------------------------------------" NL
  FACTION_REGION_DETAILS:+
  NL_
  "Exits:" NL
  FACTION_REGION_EXIT:+
  NL_
  FACTION_REGION_GATE:?
  FACTION_REGION_UNIT:*
  {% regionProcessor %}


FACTION_REGION_DETAILS ->
  _ _:? REGION_SENTENCE NL


FACTION_REGION_EXIT ->
  _ _:? REGION_SENTENCE NL


FACTION_REGION_GATE ->
  "There is a Gate here (Gate " INT " of " INT ")." NL_


FACTION_REGION_UNIT ->
  [*+\-] _ TEXT "." NL_


REGION_SENTENCE ->
  WORD [.!]
  | WORD _ REGION_SENTENCE {% array2String %}
  | WORD NL _ _ _ _:? REGION_SENTENCE {% array2String %}