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
      type: "FACTION",
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
  };
%}

REPORT_PARSER ->
  START
  _NL
  REPORT_FACTION
  _NL
  REPORT_DATE
  _NL
  ATL_VERSION
  _NL
  FACTION_STATUS
  [\n]:*
  {% filterEmpty %}

START ->
  "Atlantis Report For:" {% noop %}

# ------------------------------------------------------------
# FACTION NAME AND POINTS
# ------------------------------------------------------------

REPORT_FACTION ->
  WORDS _ "(" INT ")" __ REPORT_FACTION_POINTS:? {% factionProcessor %}

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
  WORDS "," _ "Year" _ INT {% dateProcessor %}

# ------------------------------------------------------------
# SERVER VERSIONS
# ------------------------------------------------------------

ATL_VERSION ->
  "Atlantis Engine Version:" _ ATL_VERSION _NL WORDS "," _ "Version:" _ ATL_VERSION {% versionProcessor %}
  
ATL_VERSION ->
  INT
  | INT "." VERSION {% array2String %}

# ------------------------------------------------------------
# FACTION STAUS
# ------------------------------------------------------------
FACTION_STATUS ->
  "Faction Status:" _NL FACTION_STATUS_ELEMENTS:+

FACTION_STATUS_ELEMENTS ->
  FACTION_TAX
  | FACTION_TRADE
  | FACTION_MAGES
  | FACTION_MAGES_APPRENTICES

FACTION_TAX ->
  "Tax Regions:" _ INT _ "(" INT ")" __NL

FACTION_TRADE ->
  "Trade Regions:" _ INT _ "(" INT ")" __NL

FACTION_MAGES ->
  "Mages:" _ INT _ "(" INT ")" __NL

FACTION_MAGES_APPRENTICES ->
  "Apprentices:" _ INT _ "(" INT ")" __NL


# ------------------------------------------------------------
# ERRORS
# ------------------------------------------------------------


# ------------------------------------------------------------
# BATTLES
# ------------------------------------------------------------


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
  [\w]:+ {% array2String %}

WORDS ->
  WORD {% array2String %}
  | WORD " " WORDS {% array2String %}

VERSION ->
  INT | INT "." VERSION