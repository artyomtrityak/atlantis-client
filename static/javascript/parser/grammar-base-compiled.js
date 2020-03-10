// Generated automatically by nearley, version 2.19.1
// http://github.com/Hardmath123/nearley
(function() {
  function id(x) {
    return x[0];
  }

  const noop = () => null;

  const filterEmpty = d => {
    return d.filter(val => {
      if (val == null) {
        return false;
      }
      if (Array.isArray(val) && val.length === 0) {
        return false;
      }
      return true;
    });
  };

  const array2String = d => {
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
  };

  const parseRegionCoordinates = d => {
    return {
      x: d[1],
      y: d[3],
      z: d[4].z,
      toString() {
        let title = d.slice();
        title[4] = title[4].title;
        return array2String(title);
      }
    };
  };

  const parseUnitName = d => {
    return {
      type: "UNIT_NAME",
      unitName: array2String(d[0]),
      unitId: d[3]
    };
  };

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
  };

  const versionProcessor = d => {
    return {
      type: "VERSIONS",
      atlantisVersion: d[2],
      engineName: d[4],
      engineVersion: d[7]
    };
  };

  const factionStatusProcessor = d => {
    return d[2].reduce(
      (result, val) => {
        return Object.assign({}, result, val);
      },
      { type: "FACTION_STATUS" }
    );
  };

  const attitudesProcessor = d => {
    return {
      type: "ATTITUDES",
      default: d[1],
      attitudes: d[4]
    };
  };

  const unclaimedSilverProcessor = d => {
    return {
      type: "UNCLAIMED_SILVER",
      amount: d[1]
    };
  };

  const errorsProcessor = d => {
    return {
      type: "ERRORS",
      errors: d[2][0].map(err => err[0])
    };
  };

  const battlesProcessor = d => {
    return {
      type: "BATTLES",
      battles: d[2]
    };
  };

  const battleProcessor = d => {
    const title = array2String(d.slice(0, 22));
    const details = d.slice(23); //TODO: parse details too

    const battle = {
      attackerName: array2String(d[0]),
      attackerNumber: d[3],
      defenderName: array2String(d[8]),
      defenderNumber: d[11],
      location: d[18],
      title,
      details
    };

    return battle;
  };

  const eventsProcessor = d => {
    return {
      type: "EVENTS",
      events: d[2][0].map(evt => evt[0])
    };
  };

  const skillsProcessor = d => {
    return {
      type: "SKILLS",
      skills: d[2]
    };
  };

  const itemsProcessor = d => {
    return {
      type: "ITEMS",
      items: d[2]
    };
  };

  const regionHeaderProcessor = d => {
    return {
      type: d[0],
      coordinates: d[2],
      text: array2String(d),
      hasCity: !!d[8],
      cityName: !!d[8] && array2String(d[8][3])
    };
  };

  const regionDetailsProcessor = d => {
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

  const regionProcessor = d => {
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
      cityName: d[0].cityName,
      isExit: false
    };
  };

  const regionsProcessor = d => {
    return {
      type: "REGIONS",
      regions: d[0]
    };
  };

  const ordersTemplateUnitProcessor = d => {
    return {
      unitId: d[2],
      orders: d[4]
    };
  };

  const ordersTemplateProcessor = d => {
    return {
      type: "ORDERS_TEMPLATE",
      factionNumber: d[4],
      factionPassword: array2String(d[7]),
      orders: d[10]
    };
  };
  var grammar = {
    Lexer: undefined,
    ParserRules: [
      { name: "NL", symbols: [/[\n]/], postprocess: noop },
      { name: "NL_$ebnf$1", symbols: ["NL"] },
      {
        name: "NL_$ebnf$1",
        symbols: ["NL_$ebnf$1", "NL"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "NL_", symbols: ["NL_$ebnf$1"] },
      { name: "INT$ebnf$1", symbols: [/[0-9]/] },
      {
        name: "INT$ebnf$1",
        symbols: ["INT$ebnf$1", /[0-9]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "INT", symbols: ["INT$ebnf$1"], postprocess: d => parseInt(d[0].join("")) },
      { name: "_", symbols: [/[ ]/], postprocess: id },
      { name: "__$ebnf$1", symbols: ["_"] },
      {
        name: "__$ebnf$1",
        symbols: ["__$ebnf$1", "_"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "__", symbols: ["__$ebnf$1"], postprocess: id },
      { name: "__AND_NL$ebnf$1", symbols: [/[ \n]/] },
      {
        name: "__AND_NL$ebnf$1",
        symbols: ["__AND_NL$ebnf$1", /[ \n]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "__AND_NL", symbols: ["__AND_NL$ebnf$1"], postprocess: id },
      { name: "SENTENCE", symbols: ["WORD", /[.!]/] },
      { name: "SENTENCE", symbols: ["WORD", "__", "SENTENCE"], postprocess: array2String },
      { name: "SENTENCE", symbols: ["WORD", "NL", "__", "SENTENCE"], postprocess: array2String },
      { name: "TEXT", symbols: ["WORD"] },
      { name: "TEXT", symbols: ["WORD", "__", "TEXT"], postprocess: array2String },
      { name: "TEXT", symbols: ["WORD", "NL", "__", "TEXT"], postprocess: array2String },
      { name: "WORD$ebnf$1", symbols: [/[^\n\r ]/] },
      {
        name: "WORD$ebnf$1",
        symbols: ["WORD$ebnf$1", /[^\n\r ]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "WORD", symbols: ["WORD$ebnf$1"], postprocess: array2String },
      { name: "TEXT_NO_SYMBOLS", symbols: ["WORD_NO_SYMBOLS"] },
      { name: "TEXT_NO_SYMBOLS", symbols: ["WORD_NO_SYMBOLS", "__", "TEXT_NO_SYMBOLS"], postprocess: array2String },
      { name: "TEXT_NO_SYMBOLS", symbols: ["WORD_NO_SYMBOLS", "NL", "__", "TEXT_NO_SYMBOLS"], postprocess: array2String },
      { name: "WORD_NO_SYMBOLS$ebnf$1", symbols: [/[^\n\r,.! ]/] },
      {
        name: "WORD_NO_SYMBOLS$ebnf$1",
        symbols: ["WORD_NO_SYMBOLS$ebnf$1", /[^\n\r,.! ]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "WORD_NO_SYMBOLS", symbols: ["WORD_NO_SYMBOLS$ebnf$1"], postprocess: array2String },
      { name: "BLOB$ebnf$1", symbols: [/[^\n\r]/] },
      {
        name: "BLOB$ebnf$1",
        symbols: ["BLOB$ebnf$1", /[^\n\r]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "BLOB", symbols: ["BLOB$ebnf$1"], postprocess: array2String },
      {
        name: "REGION_COORDINATES",
        symbols: [{ literal: "(" }, "INT", { literal: "," }, "INT", "REGION_Z_LEVEL", { literal: ")" }],
        postprocess: parseRegionCoordinates
      },
      { name: "LC_WORDS", symbols: ["LC_WORD"] },
      { name: "LC_WORDS", symbols: ["LC_WORD", "__", "LC_WORDS"] },
      { name: "LC_WORD$ebnf$1", symbols: [/[a-z\-]/] },
      {
        name: "LC_WORD$ebnf$1",
        symbols: ["LC_WORD$ebnf$1", /[a-z\-]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "LC_WORD", symbols: ["LC_WORD$ebnf$1"] },
      { name: "UNIT_NAME$ebnf$1", symbols: [/[^():;]/] },
      {
        name: "UNIT_NAME$ebnf$1",
        symbols: ["UNIT_NAME$ebnf$1", /[^():;]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "UNIT_NAME", symbols: ["UNIT_NAME$ebnf$1", "__", { literal: "(" }, "INT", { literal: ")" }], postprocess: parseUnitName },
      {
        name: "REGION_Z_LEVEL$string$1",
        symbols: [{ literal: "," }, { literal: "n" }, { literal: "e" }, { literal: "x" }, { literal: "u" }, { literal: "s" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "REGION_Z_LEVEL", symbols: ["REGION_Z_LEVEL$string$1"], postprocess: d => ({ title: d[0], z: 0 }) },
      { name: "REGION_Z_LEVEL", symbols: [], postprocess: d => ({ title: "", z: 1 }) },
      {
        name: "REGION_Z_LEVEL$string$2",
        symbols: [
          { literal: "," },
          { literal: "u" },
          { literal: "n" },
          { literal: "d" },
          { literal: "e" },
          { literal: "r" },
          { literal: "w" },
          { literal: "o" },
          { literal: "r" },
          { literal: "l" },
          { literal: "d" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "REGION_Z_LEVEL", symbols: ["REGION_Z_LEVEL$string$2"], postprocess: d => ({ title: d[0], z: 2 }) },
      { name: "REGION_Z_LEVEL$ebnf$1", symbols: ["NL"], postprocess: id },
      {
        name: "REGION_Z_LEVEL$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "REGION_Z_LEVEL$string$3",
        symbols: [
          { literal: "<" },
          { literal: "u" },
          { literal: "n" },
          { literal: "d" },
          { literal: "e" },
          { literal: "r" },
          { literal: "w" },
          { literal: "o" },
          { literal: "r" },
          { literal: "l" },
          { literal: "d" },
          { literal: ">" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "REGION_Z_LEVEL",
        symbols: [{ literal: "," }, "INT", "REGION_Z_LEVEL$ebnf$1", "_", "REGION_Z_LEVEL$string$3"],
        postprocess: d => ({ title: array2String(d), z: parseInt(String(2) + String(d[1]), 10) })
      },
      {
        name: "REGION_Z_LEVEL$string$4",
        symbols: [
          { literal: "," },
          { literal: "u" },
          { literal: "n" },
          { literal: "d" },
          { literal: "e" },
          { literal: "r" },
          { literal: "d" },
          { literal: "e" },
          { literal: "e" },
          { literal: "p" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "REGION_Z_LEVEL", symbols: ["REGION_Z_LEVEL$string$4"], postprocess: d => ({ title: d[0], z: 3 }) },
      { name: "REGION_Z_LEVEL$ebnf$2", symbols: ["NL"], postprocess: id },
      {
        name: "REGION_Z_LEVEL$ebnf$2",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "REGION_Z_LEVEL$string$5",
        symbols: [
          { literal: "<" },
          { literal: "u" },
          { literal: "n" },
          { literal: "d" },
          { literal: "e" },
          { literal: "r" },
          { literal: "d" },
          { literal: "e" },
          { literal: "e" },
          { literal: "p" },
          { literal: ">" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "REGION_Z_LEVEL",
        symbols: [{ literal: "," }, "INT", "REGION_Z_LEVEL$ebnf$2", "_", "REGION_Z_LEVEL$string$5"],
        postprocess: d => ({ title: array2String(d), z: parseInt(String(3) + String(d[1]), 10) })
      },
      {
        name: "REGION_Z_LEVEL$string$6",
        symbols: [{ literal: "," }, { literal: "a" }, { literal: "b" }, { literal: "y" }, { literal: "s" }, { literal: "s" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "REGION_Z_LEVEL", symbols: ["REGION_Z_LEVEL$string$6"], postprocess: d => ({ title: d[0], z: 4 }) },
      { name: "REGION_Z_LEVEL$ebnf$3", symbols: ["NL"], postprocess: id },
      {
        name: "REGION_Z_LEVEL$ebnf$3",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "REGION_Z_LEVEL$string$7",
        symbols: [
          { literal: "<" },
          { literal: "a" },
          { literal: "b" },
          { literal: "y" },
          { literal: "s" },
          { literal: "s" },
          { literal: ">" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "REGION_Z_LEVEL",
        symbols: [{ literal: "," }, "INT", "REGION_Z_LEVEL$ebnf$3", "_", "REGION_Z_LEVEL$string$7"],
        postprocess: d => ({ title: array2String(d), z: parseInt(String(4) + String(d[1]), 10) })
      },
      { name: "REPORT_FACTION$ebnf$1", symbols: ["REPORT_FACTION_STATS"], postprocess: id },
      {
        name: "REPORT_FACTION$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "REPORT_FACTION",
        symbols: ["TEXT", "_", { literal: "(" }, "INT", { literal: ")" }, "REPORT_FACTION$ebnf$1", "NL_"],
        postprocess: factionProcessor
      },
      { name: "REPORT_FACTION_STATS$ebnf$1", symbols: ["REPORT_FACTION_STATS_DETAILS"] },
      {
        name: "REPORT_FACTION_STATS$ebnf$1",
        symbols: ["REPORT_FACTION_STATS$ebnf$1", "REPORT_FACTION_STATS_DETAILS"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "REPORT_FACTION_STATS", symbols: ["_", { literal: "(" }, "REPORT_FACTION_STATS$ebnf$1", { literal: ")" }] },
      {
        name: "REPORT_FACTION_STATS_DETAILS$string$1",
        symbols: [{ literal: "W" }, { literal: "a" }, { literal: "r" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "REPORT_FACTION_STATS_DETAILS$ebnf$1", symbols: [{ literal: "," }], postprocess: id },
      {
        name: "REPORT_FACTION_STATS_DETAILS$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "REPORT_FACTION_STATS_DETAILS",
        symbols: ["REPORT_FACTION_STATS_DETAILS$string$1", "_", "INT", "REPORT_FACTION_STATS_DETAILS$ebnf$1"],
        postprocess: d => ({ war: d[2] })
      },
      { name: "REPORT_FACTION_STATS_DETAILS$ebnf$2", symbols: ["_"], postprocess: id },
      {
        name: "REPORT_FACTION_STATS_DETAILS$ebnf$2",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "REPORT_FACTION_STATS_DETAILS$string$2",
        symbols: [{ literal: "T" }, { literal: "r" }, { literal: "a" }, { literal: "d" }, { literal: "e" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "REPORT_FACTION_STATS_DETAILS$ebnf$3", symbols: [{ literal: "," }], postprocess: id },
      {
        name: "REPORT_FACTION_STATS_DETAILS$ebnf$3",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "REPORT_FACTION_STATS_DETAILS",
        symbols: [
          "REPORT_FACTION_STATS_DETAILS$ebnf$2",
          "REPORT_FACTION_STATS_DETAILS$string$2",
          "_",
          "INT",
          "REPORT_FACTION_STATS_DETAILS$ebnf$3"
        ],
        postprocess: d => ({ trade: d[3] })
      },
      { name: "REPORT_FACTION_STATS_DETAILS$ebnf$4", symbols: ["_"], postprocess: id },
      {
        name: "REPORT_FACTION_STATS_DETAILS$ebnf$4",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "REPORT_FACTION_STATS_DETAILS$string$3",
        symbols: [{ literal: "M" }, { literal: "a" }, { literal: "g" }, { literal: "i" }, { literal: "c" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "REPORT_FACTION_STATS_DETAILS",
        symbols: ["REPORT_FACTION_STATS_DETAILS$ebnf$4", "REPORT_FACTION_STATS_DETAILS$string$3", "_", "INT"],
        postprocess: d => ({ magic: d[3] })
      },
      {
        name: "REPORT_DATE$string$1",
        symbols: [{ literal: "Y" }, { literal: "e" }, { literal: "a" }, { literal: "r" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "REPORT_DATE",
        symbols: ["TEXT", { literal: "," }, "_", "REPORT_DATE$string$1", "_", "INT", "NL_"],
        postprocess: dateProcessor
      },
      {
        name: "ATL_VERSION$string$1",
        symbols: [
          { literal: "A" },
          { literal: "t" },
          { literal: "l" },
          { literal: "a" },
          { literal: "n" },
          { literal: "t" },
          { literal: "i" },
          { literal: "s" },
          { literal: " " },
          { literal: "E" },
          { literal: "n" },
          { literal: "g" },
          { literal: "i" },
          { literal: "n" },
          { literal: "e" },
          { literal: " " },
          { literal: "V" },
          { literal: "e" },
          { literal: "r" },
          { literal: "s" },
          { literal: "i" },
          { literal: "o" },
          { literal: "n" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "ATL_VERSION$string$2",
        symbols: [
          { literal: "," },
          { literal: " " },
          { literal: "V" },
          { literal: "e" },
          { literal: "r" },
          { literal: "s" },
          { literal: "i" },
          { literal: "o" },
          { literal: "n" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "ATL_VERSION",
        symbols: ["ATL_VERSION$string$1", "_", "BLOB", "NL", "BLOB", "ATL_VERSION$string$2", "_", "BLOB", "NL_"],
        postprocess: versionProcessor
      },
      { name: "VERSION", symbols: ["BLOB"], postprocess: array2String },
      {
        name: "FACTION_STATUS$string$1",
        symbols: [
          { literal: "F" },
          { literal: "a" },
          { literal: "c" },
          { literal: "t" },
          { literal: "i" },
          { literal: "o" },
          { literal: "n" },
          { literal: " " },
          { literal: "S" },
          { literal: "t" },
          { literal: "a" },
          { literal: "t" },
          { literal: "u" },
          { literal: "s" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_STATUS$ebnf$1", symbols: ["FACTION_STATUS_DETAILS"] },
      {
        name: "FACTION_STATUS$ebnf$1",
        symbols: ["FACTION_STATUS$ebnf$1", "FACTION_STATUS_DETAILS"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "FACTION_STATUS",
        symbols: ["FACTION_STATUS$string$1", "NL", "FACTION_STATUS$ebnf$1", "NL_"],
        postprocess: factionStatusProcessor
      },
      {
        name: "FACTION_STATUS_DETAILS$string$1",
        symbols: [
          { literal: "T" },
          { literal: "a" },
          { literal: "x" },
          { literal: " " },
          { literal: "R" },
          { literal: "e" },
          { literal: "g" },
          { literal: "i" },
          { literal: "o" },
          { literal: "n" },
          { literal: "s" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_STATUS_DETAILS",
        symbols: ["FACTION_STATUS_DETAILS$string$1", "_", "INT", "_", { literal: "(" }, "INT", { literal: ")" }, "NL"],
        postprocess: d => ({ tax: d[2], taxMax: d[5] })
      },
      {
        name: "FACTION_STATUS_DETAILS$string$2",
        symbols: [
          { literal: "T" },
          { literal: "r" },
          { literal: "a" },
          { literal: "d" },
          { literal: "e" },
          { literal: " " },
          { literal: "R" },
          { literal: "e" },
          { literal: "g" },
          { literal: "i" },
          { literal: "o" },
          { literal: "n" },
          { literal: "s" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_STATUS_DETAILS",
        symbols: ["FACTION_STATUS_DETAILS$string$2", "_", "INT", "_", { literal: "(" }, "INT", { literal: ")" }, "NL"],
        postprocess: d => ({ trade: d[2], tradeMax: d[5] })
      },
      {
        name: "FACTION_STATUS_DETAILS$string$3",
        symbols: [
          { literal: "Q" },
          { literal: "u" },
          { literal: "a" },
          { literal: "r" },
          { literal: "t" },
          { literal: "e" },
          { literal: "r" },
          { literal: "m" },
          { literal: "a" },
          { literal: "s" },
          { literal: "t" },
          { literal: "e" },
          { literal: "r" },
          { literal: "s" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_STATUS_DETAILS",
        symbols: ["FACTION_STATUS_DETAILS$string$3", "_", "INT", "_", { literal: "(" }, "INT", { literal: ")" }, "NL"],
        postprocess: d => ({ quartermasters: d[2], quartermastersMax: d[5] })
      },
      {
        name: "FACTION_STATUS_DETAILS$string$4",
        symbols: [{ literal: "M" }, { literal: "a" }, { literal: "g" }, { literal: "e" }, { literal: "s" }, { literal: ":" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_STATUS_DETAILS",
        symbols: ["FACTION_STATUS_DETAILS$string$4", "_", "INT", "_", { literal: "(" }, "INT", { literal: ")" }, "NL"],
        postprocess: d => ({ mages: d[2], magesMax: d[5] })
      },
      {
        name: "FACTION_STATUS_DETAILS$string$5",
        symbols: [
          { literal: "A" },
          { literal: "p" },
          { literal: "p" },
          { literal: "r" },
          { literal: "e" },
          { literal: "n" },
          { literal: "t" },
          { literal: "i" },
          { literal: "c" },
          { literal: "e" },
          { literal: "s" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_STATUS_DETAILS",
        symbols: ["FACTION_STATUS_DETAILS$string$5", "_", "INT", "_", { literal: "(" }, "INT", { literal: ")" }, "NL"],
        postprocess: d => ({ apprentices: d[2], apprenticesMax: d[5] })
      },
      {
        name: "FACTION_ORIENTATION$string$1",
        symbols: [
          { literal: "Y" },
          { literal: "o" },
          { literal: "u" },
          { literal: "r" },
          { literal: " " },
          { literal: "f" },
          { literal: "a" },
          { literal: "c" },
          { literal: "t" },
          { literal: "i" },
          { literal: "o" },
          { literal: "n" },
          { literal: " " },
          { literal: "i" },
          { literal: "s" },
          { literal: " " }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_ORIENTATION", symbols: ["FACTION_ORIENTATION$string$1", "WORD", { literal: "." }, "NL_"] },
      {
        name: "FACTION_ATTITUDES$string$1",
        symbols: [
          { literal: "D" },
          { literal: "e" },
          { literal: "c" },
          { literal: "l" },
          { literal: "a" },
          { literal: "r" },
          { literal: "e" },
          { literal: "d" },
          { literal: " " },
          { literal: "A" },
          { literal: "t" },
          { literal: "t" },
          { literal: "i" },
          { literal: "t" },
          { literal: "u" },
          { literal: "d" },
          { literal: "e" },
          { literal: "s" },
          { literal: " " },
          { literal: "(" },
          { literal: "d" },
          { literal: "e" },
          { literal: "f" },
          { literal: "a" },
          { literal: "u" },
          { literal: "l" },
          { literal: "t" },
          { literal: " " }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_ATTITUDES$string$2",
        symbols: [{ literal: ")" }, { literal: ":" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_ATTITUDES$ebnf$1", symbols: ["FACTION_ATTITUDE"] },
      {
        name: "FACTION_ATTITUDES$ebnf$1",
        symbols: ["FACTION_ATTITUDES$ebnf$1", "FACTION_ATTITUDE"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "FACTION_ATTITUDES",
        symbols: ["FACTION_ATTITUDES$string$1", "WORD", "FACTION_ATTITUDES$string$2", "NL", "FACTION_ATTITUDES$ebnf$1", "NL_"],
        postprocess: attitudesProcessor
      },
      { name: "FACTION_ATTITUDE", symbols: ["SENTENCE", "NL"], postprocess: d => d[0] },
      {
        name: "FACTION_UNCLAIMED$string$1",
        symbols: [
          { literal: "U" },
          { literal: "n" },
          { literal: "c" },
          { literal: "l" },
          { literal: "a" },
          { literal: "i" },
          { literal: "m" },
          { literal: "e" },
          { literal: "d" },
          { literal: " " },
          { literal: "s" },
          { literal: "i" },
          { literal: "l" },
          { literal: "v" },
          { literal: "e" },
          { literal: "r" },
          { literal: ":" },
          { literal: " " }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_UNCLAIMED",
        symbols: ["FACTION_UNCLAIMED$string$1", "INT", { literal: "." }, "NL_"],
        postprocess: unclaimedSilverProcessor
      },
      {
        name: "FACTION_ERRORS$string$1",
        symbols: [
          { literal: "E" },
          { literal: "r" },
          { literal: "r" },
          { literal: "o" },
          { literal: "r" },
          { literal: "s" },
          { literal: " " },
          { literal: "d" },
          { literal: "u" },
          { literal: "r" },
          { literal: "i" },
          { literal: "n" },
          { literal: "g" },
          { literal: " " },
          { literal: "t" },
          { literal: "u" },
          { literal: "r" },
          { literal: "n" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_ERRORS", symbols: ["FACTION_ERRORS$string$1", "NL", "FACTION_ERRORS_ITEMS", "NL_"], postprocess: errorsProcessor },
      { name: "FACTION_ERRORS_ITEMS$ebnf$1$subexpression$1", symbols: ["SENTENCE", "NL"] },
      { name: "FACTION_ERRORS_ITEMS$ebnf$1", symbols: ["FACTION_ERRORS_ITEMS$ebnf$1$subexpression$1"] },
      { name: "FACTION_ERRORS_ITEMS$ebnf$1$subexpression$2", symbols: ["SENTENCE", "NL"] },
      {
        name: "FACTION_ERRORS_ITEMS$ebnf$1",
        symbols: ["FACTION_ERRORS_ITEMS$ebnf$1", "FACTION_ERRORS_ITEMS$ebnf$1$subexpression$2"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "FACTION_ERRORS_ITEMS", symbols: ["FACTION_ERRORS_ITEMS$ebnf$1"] },
      {
        name: "FACTION_BATTLES$string$1",
        symbols: [
          { literal: "B" },
          { literal: "a" },
          { literal: "t" },
          { literal: "t" },
          { literal: "l" },
          { literal: "e" },
          { literal: "s" },
          { literal: " " },
          { literal: "d" },
          { literal: "u" },
          { literal: "r" },
          { literal: "i" },
          { literal: "n" },
          { literal: "g" },
          { literal: " " },
          { literal: "t" },
          { literal: "u" },
          { literal: "r" },
          { literal: "n" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_BATTLES$ebnf$1$subexpression$1", symbols: ["FACTION_BATTLE"] },
      { name: "FACTION_BATTLES$ebnf$1$subexpression$1", symbols: ["FACTION_ASSASINATION"] },
      { name: "FACTION_BATTLES$ebnf$1", symbols: ["FACTION_BATTLES$ebnf$1$subexpression$1"] },
      { name: "FACTION_BATTLES$ebnf$1$subexpression$2", symbols: ["FACTION_BATTLE"] },
      { name: "FACTION_BATTLES$ebnf$1$subexpression$2", symbols: ["FACTION_ASSASINATION"] },
      {
        name: "FACTION_BATTLES$ebnf$1",
        symbols: ["FACTION_BATTLES$ebnf$1", "FACTION_BATTLES$ebnf$1$subexpression$2"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "FACTION_BATTLES",
        symbols: ["FACTION_BATTLES$string$1", "NL", "FACTION_BATTLES$ebnf$1", "NL_"],
        postprocess: battlesProcessor
      },
      {
        name: "FACTION_BATTLE$string$1",
        symbols: [
          { literal: "a" },
          { literal: "t" },
          { literal: "t" },
          { literal: "a" },
          { literal: "c" },
          { literal: "k" },
          { literal: "s" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_BATTLE$string$2",
        symbols: [{ literal: "i" }, { literal: "n" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_BATTLE$string$3",
        symbols: [
          { literal: "A" },
          { literal: "t" },
          { literal: "t" },
          { literal: "a" },
          { literal: "c" },
          { literal: "k" },
          { literal: "e" },
          { literal: "r" },
          { literal: "s" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_BATTLE$ebnf$1", symbols: ["FACTION_BATTLE_DETAILS"] },
      {
        name: "FACTION_BATTLE$ebnf$1",
        symbols: ["FACTION_BATTLE$ebnf$1", "FACTION_BATTLE_DETAILS"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "FACTION_BATTLE$string$4",
        symbols: [
          { literal: "D" },
          { literal: "e" },
          { literal: "f" },
          { literal: "e" },
          { literal: "n" },
          { literal: "d" },
          { literal: "e" },
          { literal: "r" },
          { literal: "s" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_BATTLE$ebnf$2", symbols: ["FACTION_BATTLE_DETAILS"] },
      {
        name: "FACTION_BATTLE$ebnf$2",
        symbols: ["FACTION_BATTLE$ebnf$2", "FACTION_BATTLE_DETAILS"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "FACTION_BATTLE",
        symbols: [
          "TEXT",
          "__AND_NL",
          { literal: "(" },
          "INT",
          { literal: ")" },
          "__AND_NL",
          "FACTION_BATTLE$string$1",
          "__AND_NL",
          "TEXT",
          "__AND_NL",
          { literal: "(" },
          "INT",
          { literal: ")" },
          "__AND_NL",
          "FACTION_BATTLE$string$2",
          "__AND_NL",
          "TEXT",
          "__AND_NL",
          "REGION_COORDINATES",
          "__AND_NL",
          "TEXT",
          { literal: "!" },
          "NL_",
          "FACTION_BATTLE$string$3",
          "NL",
          "FACTION_BATTLE$ebnf$1",
          "FACTION_BATTLE$string$4",
          "NL",
          "FACTION_BATTLE$ebnf$2"
        ],
        postprocess: battleProcessor
      },
      {
        name: "FACTION_ASSASINATION$string$1",
        symbols: [{ literal: "i" }, { literal: "s" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_ASSASINATION$string$2",
        symbols: [
          { literal: "a" },
          { literal: "s" },
          { literal: "s" },
          { literal: "a" },
          { literal: "s" },
          { literal: "s" },
          { literal: "i" },
          { literal: "n" },
          { literal: "a" },
          { literal: "t" },
          { literal: "e" },
          { literal: "d" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_ASSASINATION$string$3",
        symbols: [{ literal: "i" }, { literal: "n" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_ASSASINATION",
        symbols: [
          "TEXT",
          "__AND_NL",
          { literal: "(" },
          "INT",
          { literal: ")" },
          "__AND_NL",
          "FACTION_ASSASINATION$string$1",
          "__AND_NL",
          "FACTION_ASSASINATION$string$2",
          "__AND_NL",
          "FACTION_ASSASINATION$string$3",
          "__AND_NL",
          "TEXT",
          "__AND_NL",
          "REGION_COORDINATES",
          "__AND_NL",
          "TEXT",
          { literal: "!" },
          "NL_"
        ]
      },
      { name: "FACTION_BATTLE_DETAILS", symbols: ["SENTENCE", "NL_"] },
      {
        name: "FACTION_BATTLE_DETAILS$string$1",
        symbols: [
          { literal: "T" },
          { literal: "o" },
          { literal: "t" },
          { literal: "a" },
          { literal: "l" },
          { literal: " " },
          { literal: "C" },
          { literal: "a" },
          { literal: "s" },
          { literal: "u" },
          { literal: "a" },
          { literal: "l" },
          { literal: "t" },
          { literal: "i" },
          { literal: "e" },
          { literal: "s" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_BATTLE_DETAILS", symbols: ["FACTION_BATTLE_DETAILS$string$1", "NL_"] },
      {
        name: "FACTION_BATTLE_DETAILS$string$2",
        symbols: [{ literal: "R" }, { literal: "o" }, { literal: "u" }, { literal: "n" }, { literal: "d" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_BATTLE_DETAILS", symbols: ["FACTION_BATTLE_DETAILS$string$2", "_", "INT", { literal: ":" }, "NL"] },
      {
        name: "FACTION_EVENTS$string$1",
        symbols: [
          { literal: "E" },
          { literal: "v" },
          { literal: "e" },
          { literal: "n" },
          { literal: "t" },
          { literal: "s" },
          { literal: " " },
          { literal: "d" },
          { literal: "u" },
          { literal: "r" },
          { literal: "i" },
          { literal: "n" },
          { literal: "g" },
          { literal: " " },
          { literal: "t" },
          { literal: "u" },
          { literal: "r" },
          { literal: "n" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_EVENTS", symbols: ["FACTION_EVENTS$string$1", "NL", "FACTION_EVENTS_ITEMS", "NL_"], postprocess: eventsProcessor },
      { name: "FACTION_EVENTS_ITEMS$ebnf$1$subexpression$1", symbols: ["EVENT_SENTENCE", "NL"] },
      { name: "FACTION_EVENTS_ITEMS$ebnf$1", symbols: ["FACTION_EVENTS_ITEMS$ebnf$1$subexpression$1"] },
      { name: "FACTION_EVENTS_ITEMS$ebnf$1$subexpression$2", symbols: ["EVENT_SENTENCE", "NL"] },
      {
        name: "FACTION_EVENTS_ITEMS$ebnf$1",
        symbols: ["FACTION_EVENTS_ITEMS$ebnf$1", "FACTION_EVENTS_ITEMS$ebnf$1$subexpression$2"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "FACTION_EVENTS_ITEMS", symbols: ["FACTION_EVENTS_ITEMS$ebnf$1"] },
      { name: "EVENT_SENTENCE", symbols: ["WORD"] },
      { name: "EVENT_SENTENCE$ebnf$1", symbols: ["_"], postprocess: id },
      {
        name: "EVENT_SENTENCE$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "EVENT_SENTENCE", symbols: ["WORD", "_", "EVENT_SENTENCE$ebnf$1", "EVENT_SENTENCE"], postprocess: array2String },
      { name: "EVENT_SENTENCE$ebnf$2", symbols: ["_"], postprocess: id },
      {
        name: "EVENT_SENTENCE$ebnf$2",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "EVENT_SENTENCE", symbols: ["WORD", "NL", "_", "EVENT_SENTENCE$ebnf$2", "EVENT_SENTENCE"], postprocess: array2String },
      {
        name: "FACTION_SKILLS$string$1",
        symbols: [
          { literal: "S" },
          { literal: "k" },
          { literal: "i" },
          { literal: "l" },
          { literal: "l" },
          { literal: " " },
          { literal: "r" },
          { literal: "e" },
          { literal: "p" },
          { literal: "o" },
          { literal: "r" },
          { literal: "t" },
          { literal: "s" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_SKILLS$ebnf$1", symbols: ["FACTION_SKILL"] },
      {
        name: "FACTION_SKILLS$ebnf$1",
        symbols: ["FACTION_SKILLS$ebnf$1", "FACTION_SKILL"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "FACTION_SKILLS", symbols: ["FACTION_SKILLS$string$1", "NL_", "FACTION_SKILLS$ebnf$1"], postprocess: skillsProcessor },
      { name: "FACTION_SKILL", symbols: ["TEXT", { literal: "." }, "NL", "NL"] },
      {
        name: "FACTION_ITEMS$string$1",
        symbols: [
          { literal: "I" },
          { literal: "t" },
          { literal: "e" },
          { literal: "m" },
          { literal: " " },
          { literal: "r" },
          { literal: "e" },
          { literal: "p" },
          { literal: "o" },
          { literal: "r" },
          { literal: "t" },
          { literal: "s" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_ITEMS$ebnf$1", symbols: ["FACTION_ITEM"] },
      {
        name: "FACTION_ITEMS$ebnf$1",
        symbols: ["FACTION_ITEMS$ebnf$1", "FACTION_ITEM"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "FACTION_ITEMS", symbols: ["FACTION_ITEMS$string$1", "NL", "NL", "FACTION_ITEMS$ebnf$1"] },
      { name: "FACTION_ITEM", symbols: ["FACTION_ITEM_TEXT", "NL", "NL"] },
      { name: "FACTION_ITEM_TEXT", symbols: ["TEXT"] },
      { name: "FACTION_ITEM_TEXT", symbols: [{ literal: "." }] },
      {
        name: "FACTION_OBJECTS$string$1",
        symbols: [
          { literal: "O" },
          { literal: "b" },
          { literal: "j" },
          { literal: "e" },
          { literal: "c" },
          { literal: "t" },
          { literal: " " },
          { literal: "r" },
          { literal: "e" },
          { literal: "p" },
          { literal: "o" },
          { literal: "r" },
          { literal: "t" },
          { literal: "s" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_OBJECTS$ebnf$1", symbols: ["FACTION_OBJECT"] },
      {
        name: "FACTION_OBJECTS$ebnf$1",
        symbols: ["FACTION_OBJECTS$ebnf$1", "FACTION_OBJECT"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "FACTION_OBJECTS", symbols: ["FACTION_OBJECTS$string$1", "NL_", "FACTION_OBJECTS$ebnf$1"] },
      { name: "FACTION_OBJECT", symbols: ["TEXT", { literal: "." }, "NL", "NL"] },
      { name: "FACTION_REGIONS$ebnf$1", symbols: ["FACTION_REGION"] },
      {
        name: "FACTION_REGIONS$ebnf$1",
        symbols: ["FACTION_REGIONS$ebnf$1", "FACTION_REGION"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "FACTION_REGIONS", symbols: ["FACTION_REGIONS$ebnf$1"], postprocess: regionsProcessor },
      {
        name: "FACTION_REGION$string$1",
        symbols: [
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" },
          { literal: "-" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_REGION$ebnf$1", symbols: ["REGION_WEATHER"], postprocess: id },
      {
        name: "FACTION_REGION$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "FACTION_REGION$ebnf$2", symbols: ["FACTION_REGION_DETAILS"] },
      {
        name: "FACTION_REGION$ebnf$2",
        symbols: ["FACTION_REGION$ebnf$2", "FACTION_REGION_DETAILS"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "FACTION_REGION$string$2",
        symbols: [{ literal: "E" }, { literal: "x" }, { literal: "i" }, { literal: "t" }, { literal: "s" }, { literal: ":" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_REGION$ebnf$3", symbols: ["FACTION_REGION_EXIT"] },
      {
        name: "FACTION_REGION$ebnf$3",
        symbols: ["FACTION_REGION$ebnf$3", "FACTION_REGION_EXIT"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "FACTION_REGION$ebnf$4", symbols: ["FACTION_REGION_GATE"], postprocess: id },
      {
        name: "FACTION_REGION$ebnf$4",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "FACTION_REGION$ebnf$5", symbols: [] },
      {
        name: "FACTION_REGION$ebnf$5",
        symbols: ["FACTION_REGION$ebnf$5", "FACTION_REGION_UNIT"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "FACTION_REGION",
        symbols: [
          "FACTION_REGION_HEADER",
          "FACTION_REGION$string$1",
          "NL",
          "FACTION_REGION$ebnf$1",
          "FACTION_REGION$ebnf$2",
          "NL_",
          "FACTION_REGION$string$2",
          "NL",
          "FACTION_REGION$ebnf$3",
          "NL_",
          "FACTION_REGION$ebnf$4",
          "FACTION_REGION$ebnf$5"
        ],
        postprocess: regionProcessor
      },
      {
        name: "FACTION_REGION_HEADER$string$1",
        symbols: [{ literal: "i" }, { literal: "n" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_REGION_HEADER",
        symbols: [
          "TEXT_NO_SYMBOLS",
          "_",
          "REGION_COORDINATES",
          "_",
          "FACTION_REGION_HEADER$string$1",
          "_",
          "TEXT_NO_SYMBOLS",
          { literal: "." },
          "NL"
        ],
        postprocess: d => regionHeaderProcessor(d)
      },
      {
        name: "FACTION_REGION_HEADER$string$2",
        symbols: [{ literal: "i" }, { literal: "n" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_REGION_HEADER$ebnf$1", symbols: ["FACTION_REGION_HEADER_CITY"], postprocess: id },
      {
        name: "FACTION_REGION_HEADER$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "FACTION_REGION_HEADER",
        symbols: [
          "TEXT_NO_SYMBOLS",
          "_",
          "REGION_COORDINATES",
          "_",
          "FACTION_REGION_HEADER$string$2",
          "_",
          "TEXT_NO_SYMBOLS",
          { literal: "," },
          "FACTION_REGION_HEADER$ebnf$1",
          "__AND_NL",
          "TEXT_NO_SYMBOLS",
          { literal: "," },
          "__AND_NL",
          { literal: "$" },
          "INT",
          { literal: "." },
          "NL"
        ],
        postprocess: d => regionHeaderProcessor(d)
      },
      {
        name: "FACTION_REGION_HEADER_CITY$string$1",
        symbols: [
          { literal: "c" },
          { literal: "o" },
          { literal: "n" },
          { literal: "t" },
          { literal: "a" },
          { literal: "i" },
          { literal: "n" },
          { literal: "s" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_REGION_HEADER_CITY$subexpression$1$string$1",
        symbols: [{ literal: "c" }, { literal: "i" }, { literal: "t" }, { literal: "y" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_REGION_HEADER_CITY$subexpression$1", symbols: ["FACTION_REGION_HEADER_CITY$subexpression$1$string$1"] },
      {
        name: "FACTION_REGION_HEADER_CITY$subexpression$1$string$2",
        symbols: [{ literal: "t" }, { literal: "o" }, { literal: "w" }, { literal: "n" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_REGION_HEADER_CITY$subexpression$1", symbols: ["FACTION_REGION_HEADER_CITY$subexpression$1$string$2"] },
      {
        name: "FACTION_REGION_HEADER_CITY$subexpression$1$string$3",
        symbols: [
          { literal: "v" },
          { literal: "i" },
          { literal: "l" },
          { literal: "l" },
          { literal: "a" },
          { literal: "g" },
          { literal: "e" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_REGION_HEADER_CITY$subexpression$1", symbols: ["FACTION_REGION_HEADER_CITY$subexpression$1$string$3"] },
      {
        name: "FACTION_REGION_HEADER_CITY$string$2",
        symbols: [{ literal: "]" }, { literal: "," }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_REGION_HEADER_CITY",
        symbols: [
          "_",
          "FACTION_REGION_HEADER_CITY$string$1",
          "_",
          "TEXT",
          "_",
          { literal: "[" },
          "FACTION_REGION_HEADER_CITY$subexpression$1",
          "FACTION_REGION_HEADER_CITY$string$2"
        ]
      },
      { name: "FACTION_REGION_DETAILS$ebnf$1", symbols: ["_"], postprocess: id },
      {
        name: "FACTION_REGION_DETAILS$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "FACTION_REGION_DETAILS",
        symbols: ["_", "FACTION_REGION_DETAILS$ebnf$1", "REGION_SECTION_TYPE", { literal: ":" }, "__", "REGION_SENTENCE", "NL"],
        postprocess: regionDetailsProcessor
      },
      { name: "FACTION_REGION_EXIT$ebnf$1", symbols: ["_"], postprocess: id },
      {
        name: "FACTION_REGION_EXIT$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "FACTION_REGION_EXIT",
        symbols: [
          "_",
          "FACTION_REGION_EXIT$ebnf$1",
          "WORD",
          "_",
          { literal: ":" },
          "_",
          "WORD",
          "_",
          "REGION_COORDINATES",
          "_",
          "TEXT_NO_SYMBOLS",
          { literal: "." },
          "NL"
        ],
        postprocess: d => regionExitProcessor(d, false)
      },
      { name: "FACTION_REGION_EXIT$ebnf$2", symbols: ["_"], postprocess: id },
      {
        name: "FACTION_REGION_EXIT$ebnf$2",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "FACTION_REGION_EXIT$string$1",
        symbols: [
          { literal: "c" },
          { literal: "o" },
          { literal: "n" },
          { literal: "t" },
          { literal: "a" },
          { literal: "i" },
          { literal: "n" },
          { literal: "s" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_REGION_EXIT$subexpression$1$string$1",
        symbols: [{ literal: "c" }, { literal: "i" }, { literal: "t" }, { literal: "y" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_REGION_EXIT$subexpression$1", symbols: ["FACTION_REGION_EXIT$subexpression$1$string$1"] },
      {
        name: "FACTION_REGION_EXIT$subexpression$1$string$2",
        symbols: [{ literal: "t" }, { literal: "o" }, { literal: "w" }, { literal: "n" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_REGION_EXIT$subexpression$1", symbols: ["FACTION_REGION_EXIT$subexpression$1$string$2"] },
      {
        name: "FACTION_REGION_EXIT$subexpression$1$string$3",
        symbols: [
          { literal: "v" },
          { literal: "i" },
          { literal: "l" },
          { literal: "l" },
          { literal: "a" },
          { literal: "g" },
          { literal: "e" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_REGION_EXIT$subexpression$1", symbols: ["FACTION_REGION_EXIT$subexpression$1$string$3"] },
      {
        name: "FACTION_REGION_EXIT$string$2",
        symbols: [{ literal: "]" }, { literal: "." }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_REGION_EXIT",
        symbols: [
          "_",
          "FACTION_REGION_EXIT$ebnf$2",
          "WORD",
          "_",
          { literal: ":" },
          "_",
          "WORD",
          "_",
          "REGION_COORDINATES",
          "_",
          "TEXT_NO_SYMBOLS",
          { literal: "," },
          "_",
          "FACTION_REGION_EXIT$string$1",
          "__AND_NL",
          "TEXT_NO_SYMBOLS",
          "__AND_NL",
          { literal: "[" },
          "FACTION_REGION_EXIT$subexpression$1",
          "FACTION_REGION_EXIT$string$2",
          "NL"
        ],
        postprocess: d => regionExitProcessor(d, true)
      },
      {
        name: "FACTION_REGION_GATE$string$1",
        symbols: [
          { literal: "T" },
          { literal: "h" },
          { literal: "e" },
          { literal: "r" },
          { literal: "e" },
          { literal: " " },
          { literal: "i" },
          { literal: "s" },
          { literal: " " },
          { literal: "a" },
          { literal: " " },
          { literal: "G" },
          { literal: "a" },
          { literal: "t" },
          { literal: "e" },
          { literal: " " },
          { literal: "h" },
          { literal: "e" },
          { literal: "r" },
          { literal: "e" },
          { literal: " " },
          { literal: "(" },
          { literal: "G" },
          { literal: "a" },
          { literal: "t" },
          { literal: "e" },
          { literal: " " }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_REGION_GATE$string$2",
        symbols: [{ literal: " " }, { literal: "o" }, { literal: "f" }, { literal: " " }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_REGION_GATE$string$3",
        symbols: [{ literal: ")" }, { literal: "." }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_REGION_GATE",
        symbols: ["FACTION_REGION_GATE$string$1", "INT", "FACTION_REGION_GATE$string$2", "INT", "FACTION_REGION_GATE$string$3", "NL_"],
        postprocess: array2String
      },
      { name: "FACTION_REGION_UNIT", symbols: [/[*+\-]/, "_", "TEXT", { literal: "." }, "NL_"], postprocess: array2String },
      { name: "REGION_SENTENCE", symbols: ["WORD", /[.!]/] },
      { name: "REGION_SENTENCE", symbols: ["WORD", "_", "REGION_SENTENCE"], postprocess: array2String },
      { name: "REGION_SENTENCE$ebnf$1", symbols: ["_"], postprocess: id },
      {
        name: "REGION_SENTENCE$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "REGION_SENTENCE",
        symbols: ["WORD", "NL", "_", "_", "_", "REGION_SENTENCE$ebnf$1", "REGION_SENTENCE"],
        postprocess: array2String
      },
      {
        name: "REGION_SECTION_TYPE$string$1",
        symbols: [{ literal: "W" }, { literal: "a" }, { literal: "g" }, { literal: "e" }, { literal: "s" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "REGION_SECTION_TYPE", symbols: ["REGION_SECTION_TYPE$string$1"] },
      {
        name: "REGION_SECTION_TYPE$string$2",
        symbols: [{ literal: "W" }, { literal: "a" }, { literal: "n" }, { literal: "t" }, { literal: "e" }, { literal: "d" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "REGION_SECTION_TYPE", symbols: ["REGION_SECTION_TYPE$string$2"] },
      {
        name: "REGION_SECTION_TYPE$string$3",
        symbols: [
          { literal: "F" },
          { literal: "o" },
          { literal: "r" },
          { literal: " " },
          { literal: "S" },
          { literal: "a" },
          { literal: "l" },
          { literal: "e" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "REGION_SECTION_TYPE", symbols: ["REGION_SECTION_TYPE$string$3"] },
      {
        name: "REGION_SECTION_TYPE$string$4",
        symbols: [
          { literal: "E" },
          { literal: "n" },
          { literal: "t" },
          { literal: "e" },
          { literal: "r" },
          { literal: "t" },
          { literal: "a" },
          { literal: "i" },
          { literal: "n" },
          { literal: "m" },
          { literal: "e" },
          { literal: "n" },
          { literal: "t" },
          { literal: " " },
          { literal: "a" },
          { literal: "v" },
          { literal: "a" },
          { literal: "i" },
          { literal: "l" },
          { literal: "a" },
          { literal: "b" },
          { literal: "l" },
          { literal: "e" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "REGION_SECTION_TYPE", symbols: ["REGION_SECTION_TYPE$string$4"] },
      {
        name: "REGION_SECTION_TYPE$string$5",
        symbols: [
          { literal: "P" },
          { literal: "r" },
          { literal: "o" },
          { literal: "d" },
          { literal: "u" },
          { literal: "c" },
          { literal: "t" },
          { literal: "s" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "REGION_SECTION_TYPE", symbols: ["REGION_SECTION_TYPE$string$5"] },
      { name: "REGION_WEATHER$ebnf$1", symbols: ["_"], postprocess: id },
      {
        name: "REGION_WEATHER$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "REGION_WEATHER", symbols: ["_", "REGION_WEATHER$ebnf$1", "REGION_WEATHER_SENTENCE", "_", "REGION_SENTENCE", "NL"] },
      { name: "REGION_WEATHER_SENTENCE", symbols: ["WORD", /[;]/] },
      { name: "REGION_WEATHER_SENTENCE", symbols: ["WORD", "_", "REGION_WEATHER_SENTENCE"], postprocess: array2String },
      { name: "REGION_WEATHER_SENTENCE$ebnf$1", symbols: ["_"], postprocess: id },
      {
        name: "REGION_WEATHER_SENTENCE$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "REGION_WEATHER_SENTENCE",
        symbols: ["WORD", "NL", "_", "_", "_", "REGION_WEATHER_SENTENCE$ebnf$1", "REGION_WEATHER_SENTENCE"],
        postprocess: array2String
      },
      {
        name: "FACTION_ORDERS_TEMPLATE$string$1",
        symbols: [
          { literal: "O" },
          { literal: "r" },
          { literal: "d" },
          { literal: "e" },
          { literal: "r" },
          { literal: "s" },
          { literal: " " },
          { literal: "T" },
          { literal: "e" },
          { literal: "m" },
          { literal: "p" },
          { literal: "l" },
          { literal: "a" },
          { literal: "t" },
          { literal: "e" },
          { literal: " " },
          { literal: "(" },
          { literal: "L" },
          { literal: "o" },
          { literal: "n" },
          { literal: "g" },
          { literal: " " },
          { literal: "F" },
          { literal: "o" },
          { literal: "r" },
          { literal: "m" },
          { literal: "a" },
          { literal: "t" },
          { literal: ")" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "FACTION_ORDERS_TEMPLATE$string$2",
        symbols: [
          { literal: "#" },
          { literal: "a" },
          { literal: "t" },
          { literal: "l" },
          { literal: "a" },
          { literal: "n" },
          { literal: "t" },
          { literal: "i" },
          { literal: "s" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_ORDERS_TEMPLATE$ebnf$1", symbols: ["FACTION_ORDERS_TEMPLATE_REGION"] },
      {
        name: "FACTION_ORDERS_TEMPLATE$ebnf$1",
        symbols: ["FACTION_ORDERS_TEMPLATE$ebnf$1", "FACTION_ORDERS_TEMPLATE_REGION"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "FACTION_ORDERS_TEMPLATE$string$3",
        symbols: [{ literal: "#" }, { literal: "e" }, { literal: "n" }, { literal: "d" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_ORDERS_TEMPLATE$ebnf$2", symbols: [] },
      {
        name: "FACTION_ORDERS_TEMPLATE$ebnf$2",
        symbols: ["FACTION_ORDERS_TEMPLATE$ebnf$2", "NL"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "FACTION_ORDERS_TEMPLATE",
        symbols: [
          "FACTION_ORDERS_TEMPLATE$string$1",
          "NL_",
          "FACTION_ORDERS_TEMPLATE$string$2",
          "_",
          "INT",
          "_",
          { literal: '"' },
          "TEXT",
          { literal: '"' },
          "NL_",
          "FACTION_ORDERS_TEMPLATE$ebnf$1",
          "FACTION_ORDERS_TEMPLATE$string$3",
          "FACTION_ORDERS_TEMPLATE$ebnf$2"
        ],
        postprocess: ordersTemplateProcessor
      },
      {
        name: "FACTION_ORDERS_TEMPLATE_REGION$string$1",
        symbols: [{ literal: ";" }, { literal: "*" }, { literal: "*" }, { literal: "*" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_ORDERS_TEMPLATE_REGION$ebnf$1", symbols: [/[ \n;]/] },
      {
        name: "FACTION_ORDERS_TEMPLATE_REGION$ebnf$1",
        symbols: ["FACTION_ORDERS_TEMPLATE_REGION$ebnf$1", /[ \n;]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "FACTION_ORDERS_TEMPLATE_REGION$string$2",
        symbols: [{ literal: "*" }, { literal: "*" }, { literal: "*" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_ORDERS_TEMPLATE_REGION$ebnf$2", symbols: ["FACTION_ORDERS_TEMPLATE_UNIT"] },
      {
        name: "FACTION_ORDERS_TEMPLATE_REGION$ebnf$2",
        symbols: ["FACTION_ORDERS_TEMPLATE_REGION$ebnf$2", "FACTION_ORDERS_TEMPLATE_UNIT"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "FACTION_ORDERS_TEMPLATE_REGION",
        symbols: [
          "FACTION_ORDERS_TEMPLATE_REGION$string$1",
          "_",
          "TEXT",
          "_",
          "REGION_COORDINATES",
          "_",
          "FACTION_ORDERS_REGION_TEXT",
          "FACTION_ORDERS_TEMPLATE_REGION$ebnf$1",
          "FACTION_ORDERS_TEMPLATE_REGION$string$2",
          "NL_",
          "FACTION_ORDERS_TEMPLATE_REGION$ebnf$2"
        ],
        postprocess: d => d[10]
      },
      { name: "FACTION_ORDERS_REGION_TEXT", symbols: ["WORD"] },
      { name: "FACTION_ORDERS_REGION_TEXT", symbols: ["WORD", "__", "FACTION_ORDERS_REGION_TEXT"], postprocess: array2String },
      {
        name: "FACTION_ORDERS_REGION_TEXT",
        symbols: ["WORD", "NL", { literal: ";" }, "__", "FACTION_ORDERS_REGION_TEXT"],
        postprocess: array2String
      },
      {
        name: "FACTION_ORDERS_TEMPLATE_UNIT$string$1",
        symbols: [{ literal: "u" }, { literal: "n" }, { literal: "i" }, { literal: "t" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_ORDERS_TEMPLATE_UNIT$ebnf$1", symbols: ["FACTION_ORDERS_TEMPLATE_UNIT_DETAILS"] },
      {
        name: "FACTION_ORDERS_TEMPLATE_UNIT$ebnf$1",
        symbols: ["FACTION_ORDERS_TEMPLATE_UNIT$ebnf$1", "FACTION_ORDERS_TEMPLATE_UNIT_DETAILS"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "FACTION_ORDERS_TEMPLATE_UNIT$ebnf$2", symbols: [] },
      {
        name: "FACTION_ORDERS_TEMPLATE_UNIT$ebnf$2",
        symbols: ["FACTION_ORDERS_TEMPLATE_UNIT$ebnf$2", /[\n]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "FACTION_ORDERS_TEMPLATE_UNIT",
        symbols: [
          "FACTION_ORDERS_TEMPLATE_UNIT$string$1",
          "_",
          "INT",
          "NL_",
          "FACTION_ORDERS_TEMPLATE_UNIT$ebnf$1",
          "FACTION_ORDERS_TEMPLATE_UNIT$ebnf$2"
        ],
        postprocess: ordersTemplateUnitProcessor
      },
      { name: "FACTION_ORDERS_TEMPLATE_UNIT_DETAILS", symbols: ["BLOB", "NL"], postprocess: array2String },
      { name: "REPORT_PARSER$ebnf$1", symbols: ["FACTION_ORIENTATION"], postprocess: id },
      {
        name: "REPORT_PARSER$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "REPORT_PARSER$ebnf$2", symbols: ["FACTION_ERRORS"], postprocess: id },
      {
        name: "REPORT_PARSER$ebnf$2",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "REPORT_PARSER$ebnf$3", symbols: ["FACTION_BATTLES"], postprocess: id },
      {
        name: "REPORT_PARSER$ebnf$3",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "REPORT_PARSER$ebnf$4", symbols: ["FACTION_EVENTS"], postprocess: id },
      {
        name: "REPORT_PARSER$ebnf$4",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "REPORT_PARSER$ebnf$5", symbols: ["FACTION_SKILLS"], postprocess: id },
      {
        name: "REPORT_PARSER$ebnf$5",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "REPORT_PARSER$ebnf$6", symbols: ["FACTION_ITEMS"], postprocess: id },
      {
        name: "REPORT_PARSER$ebnf$6",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "REPORT_PARSER$ebnf$7", symbols: ["FACTION_OBJECTS"], postprocess: id },
      {
        name: "REPORT_PARSER$ebnf$7",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "REPORT_PARSER$ebnf$8", symbols: ["FACTION_ATTITUDES"], postprocess: id },
      {
        name: "REPORT_PARSER$ebnf$8",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "REPORT_PARSER",
        symbols: [
          "START",
          "REPORT_FACTION",
          "REPORT_DATE",
          "ATL_VERSION",
          "FACTION_STATUS",
          "REPORT_PARSER$ebnf$1",
          "REPORT_PARSER$ebnf$2",
          "REPORT_PARSER$ebnf$3",
          "REPORT_PARSER$ebnf$4",
          "REPORT_PARSER$ebnf$5",
          "REPORT_PARSER$ebnf$6",
          "REPORT_PARSER$ebnf$7",
          "REPORT_PARSER$ebnf$8",
          "FACTION_UNCLAIMED",
          "FACTION_REGIONS",
          "FACTION_ORDERS_TEMPLATE"
        ],
        postprocess: filterEmpty
      },
      {
        name: "START$string$1",
        symbols: [
          { literal: "A" },
          { literal: "t" },
          { literal: "l" },
          { literal: "a" },
          { literal: "n" },
          { literal: "t" },
          { literal: "i" },
          { literal: "s" },
          { literal: " " },
          { literal: "R" },
          { literal: "e" },
          { literal: "p" },
          { literal: "o" },
          { literal: "r" },
          { literal: "t" },
          { literal: " " },
          { literal: "F" },
          { literal: "o" },
          { literal: "r" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "START", symbols: ["START$string$1", "NL_"], postprocess: noop }
    ],
    ParserStart: "REPORT_PARSER"
  };
  if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = grammar;
  } else {
    window.grammar = grammar;
  }
})();
