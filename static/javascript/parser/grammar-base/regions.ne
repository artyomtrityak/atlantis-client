@{%
  const regionHeaderProcessor = (d) => {
    return {
      type: d[0],
      coordinates: d[2],
      text: array2String(d),
      hasCity: !!d[8],
      cityName: d[8]
    };
  }

  const regionDetailsProcessor = (d) => {
    return {
      type: d[2][0],
      details: d[5],
      text: array2String(d)
    };
  };

  const regionExitProcessor = (d, hasCity) => {
    return {
      id: `${d[8].x}_${d[8].y}_${d[8].z}`,
      title: array2String(d.slice(6)),
      coordinates: d[8],
      type: array2String(d[6]),
      direction: d[2],
      isExit: true,
      details: [],
      unitsAndObjectsRaw: [],
      hasCity
    };
  };

  const regionProcessor = (d) => {
    const exits = d[8].reduce((result, exit) => {
      result[exit.direction.toLowerCase()] = exit;
      return result;
    }, {});

    return {
      id: `${d[0].coordinates.x}_${d[0].coordinates.y}_${d[0].coordinates.z}`,
      title: d[0].text,
      coordinates: d[0].coordinates,
      weather: array2String(d[2]),
      details: d[4],
      exits: exits,
      gate: d[10],
      unitsAndObjectsRaw: d[11],
      type: d[0].type,
      hasCity: d[0].hasCity,
      cityName: !!d[0].hasCity && d[0].cityName[3],
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
  FACTION_REGION_HEADER
  "------------------------------------------------------------" NL
  REGION_WEATHER:?
  FACTION_REGION_DETAILS:+
  NL_
  "Exits:" NL
  FACTION_REGION_EXIT:+
  NL_
  FACTION_REGION_GATE:?
  FACTION_REGION_UNIT:*
  {% regionProcessor %}


FACTION_REGION_HEADER ->
  TEXT_NO_SYMBOLS _ REGION_COORDINATES _ "in" _ TEXT_NO_SYMBOLS "." NL {% (d) => regionHeaderProcessor(d) %}
  | TEXT_NO_SYMBOLS _ REGION_COORDINATES _ "in" _ TEXT_NO_SYMBOLS "," FACTION_REGION_HEADER_CITY:? __AND_NL TEXT_NO_SYMBOLS "," __AND_NL "$" INT "." NL {% (d) => regionHeaderProcessor(d) %}



FACTION_REGION_HEADER_CITY ->
  _ "contains" _ TEXT _ "[" ("city"|"town"|"village") "],"


FACTION_REGION_DETAILS ->
  _ _:? REGION_SECTION_TYPE ":" __ REGION_SENTENCE NL {% regionDetailsProcessor %}


FACTION_REGION_EXIT ->
  _ _:? WORD _ ":" _ WORD _ REGION_COORDINATES _ TEXT_NO_SYMBOLS "." NL {% (d) => regionExitProcessor(d, false)  %}
  | _ _:? WORD _ ":" _ WORD _ REGION_COORDINATES _ TEXT_NO_SYMBOLS ","
    _ "contains" __AND_NL TEXT_NO_SYMBOLS __AND_NL "[" ("city"|"town"|"village") "]."  NL {% (d) => regionExitProcessor(d, true)  %}


FACTION_REGION_GATE ->
  "There is a Gate here (Gate " INT " of " INT ")." NL_ {% array2String %}


FACTION_REGION_UNIT ->
  [*+\-] _ TEXT "." NL_ {% array2String %}


REGION_SENTENCE ->
  WORD [.!]
  | WORD _ REGION_SENTENCE {% array2String %}
  | WORD NL _ _ _ _:? REGION_SENTENCE {% array2String %}


REGION_SECTION_TYPE ->
  "Wages"
  | "Wanted"
  | "For Sale"
  | "Entertainment available"
  | "Products"


REGION_WEATHER ->
  _ _:? REGION_WEATHER_SENTENCE _ REGION_SENTENCE NL


REGION_WEATHER_SENTENCE ->
  WORD [;]
  | WORD _ REGION_WEATHER_SENTENCE {% array2String %}
  | WORD NL _ _ _ _:? REGION_WEATHER_SENTENCE {% array2String %}
