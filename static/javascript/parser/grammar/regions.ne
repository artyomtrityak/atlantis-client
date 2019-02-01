@{%
  const regionExitProcessor = (d) => {
    return {
      id: `${d[8].x}_${d[8].y}_${d[8].z}`,
      title: array2String(d.slice(6)),
      coordinates: d[8],
      type: d[6],
      direction: d[2],
      isExit: true
    };
  };

  const regionProcessor = (d) => {
    const exits = d[12].reduce((result, exit) => {
      result[exit.direction.toLowerCase()] = exit;
      return result;
    }, {});

    return {
      id: `${d[2].x}_${d[2].y}_${d[2].z}`,
      title: array2String(d.slice(0, 5)),
      coordinates: d[2],
      details: d[8],
      exits: exits,
      unitsAndObjects: d[15],
      type: d[0][0],
      isExit: false
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
  _ _:? REGION_SENTENCE NL {% array2String %}


FACTION_REGION_EXIT ->
  _ _:? WORD _ ":" _ WORD _ REGION_COORDINATES _ REGION_SENTENCE NL {% regionExitProcessor  %}


FACTION_REGION_GATE ->
  "There is a Gate here (Gate " INT " of " INT ")." NL_


# TODO: different parser for * my faction
# TODO: different parser for - + buildings and other factions
FACTION_REGION_UNIT ->
  [*+\-] _ TEXT "." NL_ {% array2String %}


REGION_SENTENCE ->
  WORD [.!]
  | WORD _ REGION_SENTENCE {% array2String %}
  | WORD NL _ _ _ _:? REGION_SENTENCE {% array2String %}