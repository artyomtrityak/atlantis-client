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

  const factionProcessor = (d, i, reject) => {
    const faction = {
      type: "FACTION_INFO",
      factionName: d[0],
      factionNumber: d[3],
      points: {
        war: 0,
        trade: 0,
        magic: 0
      }
    };

    if (d[6]) {
      faction.points.war = d[6].war || 0,
      faction.points.trade = d[6].trade || 0
      faction.points.magic = d[6].magic || 0
    }
    return faction;
  }

  const dateProcessor = (d, i, reject) => {
    return {
      type: "DATE",
      month: d[0],
      day: d[5]
    };
  }

  const versionProcessor = (d) => {
    return {
      atlantisVersion: d[2],
      engineName: d[4],
      engineVersion: d[9]
    };
  };

  const factionStatusProcessor = (d) => {
    if (!Array.isArray(d[2])) {
      return null;
    }

    return d[2].reduce((result, val) => {
      if (val == null) {
        return result;
      }
      return Object.assign({}, result, val[0]);
    }, {type: "FACTION_STATUS"});
  };

  const errorsProcessor = (d) => {
    if (!Array.isArray(d[2])) {
      return null;
    }
    return {
      type: "ERRORS",
      errors: d[2]
    };
  }
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

#TODO: REPORT_FACTION_STATS:?
REPORT_FACTION ->
  TEXT REPORT_FACTION_STATS NL_

REPORT_FACTION_STATS ->
  _ "(" INT ")" _ "(" TEXT ")"

REPORT_DATE ->
  TEXT "," _ "Year" _ INT NL_

ATL_VERSION ->
  "Atlantis Engine Version:" _ VERSION NL
  TEXT ", Version:" _ VERSION NL_

VERSION ->
  INT | INT "." VERSION

FACTION_STATUS ->
  "Faction Status:" NL
  FACTION_STATUS_DETAILS:+
  NL_

FACTION_STATUS_DETAILS ->
  "Tax Regions:" _ INT _ "(" INT ")" NL
  | "Trade Regions:" _ INT _ "(" INT ")" NL
  | "Mages:" _ INT _ "(" INT ")" NL
  | "Apprentices:" _ INT _ "(" INT ")" NL


# ------------------------------------------------------------
# FACTION ERRORS
# ------------------------------------------------------------
FACTION_ERRORS ->
  "Errors during turn:"
  NL
  FACTION_ERRORS_ITEMS
  NL_

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
  

FACTION_BATTLE ->
  TEXT __ "(" INT ")" __ "attacks" __ TEXT __ "(" INT ")" __ "in" __ TEXT __ REGION_COORDINATES __ TEXT "!" NL_
  "Attackers:" NL
  FACTION_BATTLE_DETAILS:+
  "Defenders:" NL
  FACTION_BATTLE_DETAILS:+


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
  SENTENCE_


# ------------------------------------------------------------
# FACTION SKILLS AND ITEMS
# ------------------------------------------------------------
FACTION_SKILLS ->
  "Skill reports:" NL_
  FACTION_SKILL:+


FACTION_SKILL ->
  TEXT ":" __ TEXT NL_


FACTION_ITEMS ->
  "Item reports:" NL_
  FACTION_ITEM:+


FACTION_ITEM ->
  TEXT NL_


# ------------------------------------------------------------
# ATTITUDE RULES
# ------------------------------------------------------------
FACTION_ATTITUDES ->
  "Declared Attitudes (default " WORD "):" NL
  FACTION_ATTITUDE:+
  NL_


FACTION_ATTITUDE ->
  SENTENCE NL


# ------------------------------------------------------------
# UNCLAIMED SILVER RULES
# ------------------------------------------------------------
FACTION_UNCLAIMED ->
  "Unclaimed silver: " INT "." NL_


# ------------------------------------------------------------
# REGIONS RULES
# ------------------------------------------------------------
FACTION_REGIONS ->
  FACTION_REGION:+


FACTION_REGION ->
  TEXT _ REGION_COORDINATES _ SENTENCE NL
  "------------------------------------------------------------" NL
  FACTION_REGION_DETAILS:+
  NL_
  "Exits:" NL
  FACTION_REGION_EXIT:+
  NL_
  FACTION_REGION_UNIT:*


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