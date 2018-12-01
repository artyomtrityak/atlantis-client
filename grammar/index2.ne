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
  # ATL_VERSION
  # FACTION_STATUS
  # FACTION_ERRORS
  # FACTION_BATTLES
  # FACTION_EVENTS
  {% filterEmpty %}

START ->
  "Atlantis Report For:" _NL {% noop %}


# ------------------------------------------------------------
# FACTION NAME AND POINTS
# ------------------------------------------------------------

REPORT_FACTION ->
  TEXT _ "(" INT ")" __ REPORT_FACTION_POINTS:? _NL {% factionProcessor %}

REPORT_FACTION_POINTS ->
  "(" REPORT_FACTION_WAR:? REPORT_FACTION_TRADE:? REPORT_FACTION_MAGIC:? ")" {% (d) => ({war: d[1], trade: d[2], magic: d[3]}) %}
  
REPORT_FACTION_WAR ->
  __ "War" _ INT ",":? {% (d) => d[3] %}
  
REPORT_FACTION_TRADE ->
  __ "Trade" _ INT ",":? {% (d) => d[3] %}
  
REPORT_FACTION_MAGIC ->
  __ "Magic" _ INT {% (d) => d[3] %}


# ------------------------------------------------------------
# WORLD DATE
# ------------------------------------------------------------

REPORT_DATE ->
  WORDS "," _ "Year" _ INT _NL {% dateProcessor %}


# ------------------------------------------------------------
# SERVER VERSIONS
# ------------------------------------------------------------

ATL_VERSION ->
  "Atlantis Engine Version:" _ ATL_VERSION _NL WORDS "," _ "Version:" _ ATL_VERSION _NL {% versionProcessor %}
  
ATL_VERSION ->
  INT
  | INT "." VERSION {% array2String %}

VERSION ->
  INT | INT "." VERSION


# ------------------------------------------------------------
# FACTION STAUS
# ------------------------------------------------------------
FACTION_STATUS ->
  "Faction Status:" _NL FACTION_STATUS_ELEMENTS:+ {% factionStatusProcessor %}

FACTION_STATUS_ELEMENTS ->
  FACTION_TAX
  | FACTION_TRADE
  | FACTION_MAGES
  | FACTION_MAGES_APPRENTICES
  | GOOD_EVIL

FACTION_TAX ->
  "Tax Regions:" _ INT _ "(" INT ")" _NL {% (d) => ({tax: d[2], taxMax: d[5]}) %}

FACTION_TRADE ->
  "Trade Regions:" _ INT _ "(" INT ")" _NL {% (d) => ({trade: d[2], tradeMax: d[5]}) %}

FACTION_MAGES ->
  "Mages:" _ INT _ "(" INT ")" _NL {% (d) => ({mages: d[2], magesMax: d[5]}) %}

FACTION_MAGES_APPRENTICES ->
  "Apprentices:" _ INT _ "(" INT ")" _NL {% (d) => ({apprentices: d[2], apprenticesMax: d[5]}) %}

GOOD_EVIL ->
  "Your faction is" _ WORD "." _NL {% (d) => ({ factionAlignment: d[2] }) %}


# ------------------------------------------------------------
# ERRORS
# ------------------------------------------------------------
FACTION_ERRORS ->
  "Errors during turn:" _NL FACTION_ERROR:+ {% errorsProcessor %}

FACTION_ERROR ->
  WORDS _ "(" INT "):" _ WORDS ":" _ WORDS "." _NL


# ------------------------------------------------------------
# BATTLES
# ------------------------------------------------------------
FACTION_BATTLES ->
  "Battles during turn:" _NL FACTION_BATTLE:+

FACTION_BATTLE ->
  WORDS _ "(" INT ")" _ "attacks" _ WORDS _ "(" INT ")" _ "in" _ WORDS _ "(" INT "," INT ")" _ "in" _ WORDS "!" _NL
  BATTLE_DETAILS_ROW:+

BATTLE_DETAILS_ROW ->
  SENTENCE {% (d, i, reject) => {
    if (d[0] && d[0].match(/.+attacks.+in.+\([0-9]+,[0-9]+\).+in.+!/si)) {
      return reject;
    }
    return d;
  } %}


# ------------------------------------------------------------
# EVENTS
# ------------------------------------------------------------
FACTION_EVENTS ->
  "Events during turn:" _NL


# ------------------------------------------------------------
# HELPER RULES
# ------------------------------------------------------------

_NL ->
  [\n]:+ {% noop %}

__NL ->
  [\n]:* {% noop %}

INT ->
  [0-9]:+ {% (d) => parseInt(d[0].join("")) %}

_ ->
  [ \t\n\v\f]:+ {% id %}

__ ->
  [ \t\n\v\f]:* {% id %}

WORD ->
  [/\w():;,'\-\[\]]:+ {% array2String %}

WORDS ->
  WORD {% array2String %}
  | WORD _ WORDS {% array2String %}

SENTENCE ->
  WORDS "." _NL {% array2String %}
  | WORDS "!" _NL {% array2String %}

newline ->
  "\r" "\n" {% noop %}
  | "\r" | "\n" {% noop %}

char ->
  [^\n\r] {% id %} #Everything except new line

T_WORD ->
  [^\n\r]

TEXT ->
