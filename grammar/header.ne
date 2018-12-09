@{%
  function factionProcessor(d) {
    const faction = {
      type: "FACTION_INFO",
      factionName: array2String(d[0]),
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
%}


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


FACTION_ORIENTATION ->
  "Your faction is " WORD "." NL_