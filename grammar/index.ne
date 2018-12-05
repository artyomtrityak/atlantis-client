@{%
  const noop = () => null;

  const filterEmpty = (d) => {
    return d.filter((val) => {
      if (val == null) {
        return false;
      }
      if (Array.isArray(val) && val.length === 0) {
        return false;
      }
      return true;
    });
  }

  const array2String = (d) => {
    if (!Array.isArray(d)) {
      return d;
    }
    return d.reduce((result, val) => {
      if (Array.isArray(val)) {
        val = array2String(val);
      }
      if (val == null) {
        val = "";
      }
      result += val;
      return result;
    }, "");
  }

  function factionProcessor(d) {
    const faction = {
      type: "FACTION_INFO",
      factionName: d[0][0],
      factionNumber: d[3],
      points: {
        war: 0,
        trade: 0,
        magic: 0
      }
    };
    if (d[5] && Array.isArray(d[5][2])) {
      faction.points = d[5][2].reduce((result, val) => {
        return Object.assign(result, val);
      }, {});
    }
    return faction;
  }

  const dateProcessor = (d, i, reject) => {
    return {
      type: "DATE",
      month: d[0][0],
      year: d[5]
    };
  }

  const versionProcessor = (d) => {
    return {
      type: "VERSIONS",
      atlantisVersion: d[2],
      engineName: d[4],
      engineVersion: d[7]
    };
  };

  const factionStatusProcessor = (d) => {
    return d[2].reduce((result, val) => {
      return Object.assign({}, result, val);
    }, {type: "FACTION_STATUS"});
  };

  const errorsProcessor = (d) => {
    return {
      type: "ERRORS",
      errors: d[2][0][0].map((err) => err[0])
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
  REPORT_FACTION
  REPORT_DATE
  ATL_VERSION
  FACTION_STATUS
  FACTION_ERRORS:?
  FACTION_ORIENTATION:?
  FACTION_BATTLES:?
  FACTION_EVENTS:?
  FACTION_SKILLS:?
  FACTION_ITEMS:?
  FACTION_ATTITUDES
  FACTION_UNCLAIMED
  FACTION_REGIONS
  FACTION_ORDERS_TEMPLATE
  {% filterEmpty %}


# ------------------------------------------------------------
# HEADER INFO
# ------------------------------------------------------------
START ->
  "Atlantis Report For:" NL_ {% noop %}


REPORT_FACTION ->
  TEXT _ "(" INT ")" REPORT_FACTION_STATS:? NL_ {% factionProcessor %}


REPORT_FACTION_STATS ->
  _ "(" REPORT_FACTION_STATS_DETAILS:+ ")"


REPORT_FACTION_STATS_DETAILS ->
  "War" _ INT ",":? {% (d) => ({ war: d[2] }) %}
  | _:? "Trade" _ INT ",":? {% (d) => ({ trade: d[3] }) %}
  | _:? "Magic" _ INT {% (d) => ({ magic: d[3] }) %}


REPORT_DATE ->
  TEXT "," _ "Year" _ INT NL_ {% dateProcessor %}


ATL_VERSION ->
  "Atlantis Engine Version:" _ VERSION NL
  TEXT ", Version:" _ VERSION NL_ {% versionProcessor %}


VERSION ->
  INT | INT "." VERSION {% array2String %}


FACTION_STATUS ->
  "Faction Status:" NL
  FACTION_STATUS_DETAILS:+
  NL_
  {% factionStatusProcessor %}


FACTION_STATUS_DETAILS ->
  "Tax Regions:" _ INT _ "(" INT ")" NL {% (d) => ({ tax: d[2], taxMax: d[5] }) %}
  | "Trade Regions:" _ INT _ "(" INT ")" NL {% (d) => ({ trade: d[2], tradeMax: d[5] }) %}
  | "Mages:" _ INT _ "(" INT ")" NL {% (d) => ({ mages: d[2], magesMax: d[5] }) %}
  | "Apprentices:" _ INT _ "(" INT ")" NL {% (d) => ({ apprentices: d[2], apprenticesMax: d[5] }) %}


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
  SENTENCE_


# ------------------------------------------------------------
# FACTION ORIENTATION TMP
# ------------------------------------------------------------
FACTION_ORIENTATION ->
  "Your faction is " WORD "." NL_


# ------------------------------------------------------------
# FACTION BATTLES
# ------------------------------------------------------------
FACTION_BATTLES ->
  "Battles during turn:"
  NL
  FACTION_BATTLE:+
  NL_
  {% battlesProcessor %}
  

FACTION_BATTLE ->
  TEXT __ "(" INT ")" __ "attacks" __ TEXT __ "(" INT ")" __ "in" __ TEXT __ REGION_COORDINATES __ TEXT "!" NL_
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
  {% eventsProcessor %}


FACTION_EVENTS_ITEMS ->
  SENTENCE_


# ------------------------------------------------------------
# FACTION SKILLS AND ITEMS
# ------------------------------------------------------------
FACTION_SKILLS ->
  "Skill reports:" NL_
  FACTION_SKILL:+
  {% skillsProcessor %}


FACTION_SKILL ->
  TEXT ":" __ TEXT NL_ {% (d) => ({ skillName: d[0], description: d[3] }) %}


FACTION_ITEMS ->
  "Item reports:" NL_
  FACTION_ITEM:+
  {% itemsProcessor %}



FACTION_ITEM ->
  SENTENCE __ TEXT NL_ {% (d) => ({ itemTitle: d[0], description: d[2] }) %}


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
  FACTION_REGION_UNIT:*
  {% regionProcessor %}


FACTION_REGION_DETAILS ->
  _ _:? REGION_SENTENCE NL


FACTION_REGION_EXIT ->
  _ _:? REGION_SENTENCE NL


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
  "#end" NL_
  {% ordersTemplateProcessor %}


FACTION_ORDERS_TEMPLATE_REGION ->
  ";***" _ TEXT _ REGION_COORDINATES _ "in" _ TEXT _ "***" NL_
  FACTION_ORDERS_TEMPLATE_UNIT:+


FACTION_ORDERS_TEMPLATE_UNIT ->
  "unit" _ INT NL_
  FACTION_ORDERS_TEMPLATE_UNIT_DETAILS:+
  NL_


FACTION_ORDERS_TEMPLATE_UNIT_DETAILS ->
  BLOB NL


# ------------------------------------------------------------
# HELPER RULES
# ------------------------------------------------------------

NL ->
  [\n] {% noop %}

NL_ ->
  NL:+

INT ->
  [0-9]:+ {% (d) => parseInt(d[0].join("")) %}

_ ->
  [ ] {% id %}

__ ->
  _:+ {% id %}

SENTENCE ->
  WORD [.!]
  | WORD __ SENTENCE {% array2String %}
  | WORD NL __ SENTENCE {% array2String %}

SENTENCE_ ->
  (SENTENCE NL_):+

TEXT ->
  WORD
  | WORD __ TEXT {% array2String %}
  | WORD NL __ TEXT {% array2String %}

WORD ->
  [^\n\r ]:+ {% array2String %}

BLOB ->
  [^\n\r]:+ {% array2String %}

REGION_COORDINATES ->
  "(" INT "," INT ",underworld":? ")"