@include "./shared.ne"
@include "./header.ne"

@{%
  const errorsProcessor = (d) => {
    return {
      type: "ERRORS",
      errors: d[2][0].map((err) => err[0])
    };
  }

  const eventsProcessor = (d) => {
    return {
      type: "EVENTS",
      events: d[2][0][0].map((evt) => evt[0])
    };
  }

  const battlesProcessor = (d) => {
    return {
      type: "BATTLES",
      battles: d[2]
    };
  }

  const battleProcessor = (d) => {
    const title = array2String(d.slice(0, 22));
    const details = d.slice(23); //TODO: parse details too

    const battle = {
      attackerName: array2String(d[0]),
      attackerNumber: d[3],
      defenderName: array2String(d[8]),
      defenderNumber: d[11],
      location: {
        x: d[18][1],
        y: d[18][3],
        z: d[18][4]
      },
      title,
      details
    };

    return battle;
  };

  const skillsProcessor = (d) => {
    return {
      type: "SKILLS",
      skills: d[2]
    };
  };

  const itemsProcessor = (d) => {
    return {
      type: "ITEMS",
      items: d[2]
    };
  };

  const attitudesProcessor = (d) => {
    return {
      type: "ATTITUDES",
      default: d[1],
      attitudes: d[4]
    };
  };

  const unclaimedSilverProcessor = (d) => {
    return {
      type: "UNCLAIMED_SILVER",
      amount: d[1]
    };
  };

  const regionProcessor = (d) => {
    return {
      title: array2String(d.slice(0, 5)),
      coordinates: {
        x: d[2][1],
        y: d[2][3],
        z: d[2][4]
      },
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

  const ordersTemplateProcessor = (d) => {
    return {
      type: "ORDERS_TEMPLATE",
      factionNumber: d[4],
      factionPassword: array2String(d[7]),
      orders: d[10]
    };
  };
%}

REPORT_PARSER ->
  START
  # HEADER START
  REPORT_FACTION
  REPORT_DATE
  ATL_VERSION
  FACTION_STATUS
  FACTION_ORIENTATION:?
  # -HEADER END
  FACTION_ERRORS:?
  FACTION_BATTLES:?
  FACTION_EVENTS:?
  FACTION_SKILLS:?
  FACTION_ITEMS:?
  FACTION_OBJECTS:?
  FACTION_ATTITUDES:?
  FACTION_UNCLAIMED
  FACTION_REGIONS
  FACTION_ORDERS_TEMPLATE
  {% filterEmpty %}


# ------------------------------------------------------------
# HEADER INFO
# ------------------------------------------------------------
START ->
  "Atlantis Report For:" NL_ {% noop %}


# ------------------------------------------------------------
# FACTION ERRORS
# ------------------------------------------------------------
FACTION_ERRORS ->
  "Errors during turn:"
  NL
  FACTION_ERRORS_ITEMS
  NL_
  {% errorsProcessor %}


FACTION_ERRORS_ITEMS ->
  (SENTENCE NL):+


# ------------------------------------------------------------
# FACTION BATTLES
# ------------------------------------------------------------
FACTION_BATTLES ->
  "Battles during turn:"
  NL
  FACTION_BATTLE:+
  NL_
  {% battlesProcessor %}
  

#TODO: change it
FACTION_BATTLE ->
  TEXT __AND_NL "(" INT ")" __AND_NL "attacks" __AND_NL TEXT __AND_NL "(" INT ")" __AND_NL "in" __AND_NL TEXT __AND_NL REGION_COORDINATES __AND_NL TEXT "!" NL_
  "Attackers:" NL
  FACTION_BATTLE_DETAILS:+
  "Defenders:" NL
  FACTION_BATTLE_DETAILS:+
  {% battleProcessor %}


FACTION_BATTLE_DETAILS ->
  SENTENCE NL_
  | "Total Casualties:" NL_
  | "Round" _ INT ":" NL


# ------------------------------------------------------------
# FACTION EVENTS
# ------------------------------------------------------------
FACTION_EVENTS ->
  "Events during turn:"
  NL
  FACTION_EVENTS_ITEMS
  NL_


FACTION_EVENTS_ITEMS ->
  (SENTENCE NL):+


# ------------------------------------------------------------
# FACTION SKILLS, ITEMS AND OBJECTS
# ------------------------------------------------------------
FACTION_SKILLS ->
  "Skill reports:" NL_
  FACTION_SKILL:+
  {% skillsProcessor %}


FACTION_SKILL ->
  TEXT "." NL NL
  #TEXT ":" __ TEXT NL_ {% (d) => ({ skillName: d[0], description: d[3] }) %}


FACTION_ITEMS ->
  "Item reports:" NL NL
  FACTION_ITEM:+



FACTION_ITEM ->
  TEXT "." NL NL
  # SENTENCE __ TEXT NL_ {% (d) => ({ itemTitle: d[0], description: d[2] }) %}


FACTION_OBJECTS ->
  "Object reports:" NL_
  FACTION_OBJECT:+


FACTION_OBJECT ->
  TEXT "." NL NL


# ------------------------------------------------------------
# ATTITUDE RULES
# ------------------------------------------------------------
FACTION_ATTITUDES ->
  "Declared Attitudes (default " WORD "):" NL
  FACTION_ATTITUDE:+
  NL_
  {% attitudesProcessor %}


FACTION_ATTITUDE ->
  SENTENCE NL {% (d) => d[0] %}


# ------------------------------------------------------------
# UNCLAIMED SILVER RULES
# ------------------------------------------------------------
FACTION_UNCLAIMED ->
  "Unclaimed silver: " INT "." NL_ {% unclaimedSilverProcessor %}


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


# ------------------------------------------------------------
# ORDERS TEMPLATE
# ------------------------------------------------------------
FACTION_ORDERS_TEMPLATE ->
  "Orders Template (Long Format):" NL_
  "#atlantis" _ INT _ "\"" TEXT "\"" NL_
  FACTION_ORDERS_TEMPLATE_REGION:+
  "#end" NL:*
  {% ordersTemplateProcessor %}


#TODO: fix FACTION_ORDERS_REGION_TEXT, make generic new line or somethng else
FACTION_ORDERS_TEMPLATE_REGION ->
  ";***" _ TEXT _ REGION_COORDINATES _ FACTION_ORDERS_REGION_TEXT [ \n;]:+ "***" NL_
  FACTION_ORDERS_TEMPLATE_UNIT:+

FACTION_ORDERS_REGION_TEXT ->
  WORD
  | WORD __ FACTION_ORDERS_REGION_TEXT {% array2String %}
  | WORD NL ";" __ FACTION_ORDERS_REGION_TEXT {% array2String %}


FACTION_ORDERS_TEMPLATE_UNIT ->
  "unit" _ INT NL_
  FACTION_ORDERS_TEMPLATE_UNIT_DETAILS:+
  [\n]:*


FACTION_ORDERS_TEMPLATE_UNIT_DETAILS ->
  BLOB NL

