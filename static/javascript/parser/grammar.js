// Generated automatically by nearley, version 2.15.1
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
      (faction.points.war = d[6].war || 0), (faction.points.trade = d[6].trade || 0);
      faction.points.magic = d[6].magic || 0;
    }
    return faction;
  };

  const dateProcessor = (d, i, reject) => {
    return {
      type: "DATE",
      month: d[0],
      day: d[5]
    };
  };

  const versionProcessor = d => {
    return {
      atlantisVersion: d[2],
      engineName: d[4],
      engineVersion: d[9]
    };
  };

  const factionStatusProcessor = d => {};
  var grammar = {
    Lexer: undefined,
    ParserRules: [
      { name: "REPORT_PARSER$ebnf$1", symbols: [] },
      {
        name: "REPORT_PARSER$ebnf$1",
        symbols: ["REPORT_PARSER$ebnf$1", /[\n]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "REPORT_PARSER",
        symbols: [
          "START",
          "_NL",
          "REPORT_FACTION",
          "_NL",
          "REPORT_DATE",
          "_NL",
          "ATL_VERSION",
          "_NL",
          "FACTION_STATUS",
          "REPORT_PARSER$ebnf$1"
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
      { name: "START", symbols: ["START$string$1"], postprocess: noop },
      { name: "REPORT_FACTION$ebnf$1", symbols: ["REPORT_FACTION_POINTS"], postprocess: id },
      {
        name: "REPORT_FACTION$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "REPORT_FACTION",
        symbols: ["WORDS", "_", { literal: "(" }, "INT", { literal: ")" }, "__", "REPORT_FACTION$ebnf$1"],
        postprocess: factionProcessor
      },
      { name: "REPORT_FACTION_POINTS$ebnf$1", symbols: ["REPORT_FACTION_WAR"], postprocess: id },
      {
        name: "REPORT_FACTION_POINTS$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "REPORT_FACTION_POINTS$ebnf$2", symbols: ["REPORT_FACTION_TRADE"], postprocess: id },
      {
        name: "REPORT_FACTION_POINTS$ebnf$2",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "REPORT_FACTION_POINTS$ebnf$3", symbols: ["REPORT_FACTION_MAGIC"], postprocess: id },
      {
        name: "REPORT_FACTION_POINTS$ebnf$3",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "REPORT_FACTION_POINTS",
        symbols: [
          { literal: "(" },
          "REPORT_FACTION_POINTS$ebnf$1",
          "REPORT_FACTION_POINTS$ebnf$2",
          "REPORT_FACTION_POINTS$ebnf$3",
          { literal: ")" }
        ],
        postprocess: d => ({ war: d[1], trade: d[2], magic: d[3] })
      },
      {
        name: "REPORT_FACTION_WAR$string$1",
        symbols: [{ literal: "W" }, { literal: "a" }, { literal: "r" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "REPORT_FACTION_WAR$ebnf$1", symbols: [{ literal: "," }], postprocess: id },
      {
        name: "REPORT_FACTION_WAR$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "REPORT_FACTION_WAR",
        symbols: ["__", "REPORT_FACTION_WAR$string$1", "_", "INT", "REPORT_FACTION_WAR$ebnf$1"],
        postprocess: d => d[3]
      },
      {
        name: "REPORT_FACTION_TRADE$string$1",
        symbols: [{ literal: "T" }, { literal: "r" }, { literal: "a" }, { literal: "d" }, { literal: "e" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "REPORT_FACTION_TRADE$ebnf$1", symbols: [{ literal: "," }], postprocess: id },
      {
        name: "REPORT_FACTION_TRADE$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "REPORT_FACTION_TRADE",
        symbols: ["__", "REPORT_FACTION_TRADE$string$1", "_", "INT", "REPORT_FACTION_TRADE$ebnf$1"],
        postprocess: d => d[3]
      },
      {
        name: "REPORT_FACTION_MAGIC$string$1",
        symbols: [{ literal: "M" }, { literal: "a" }, { literal: "g" }, { literal: "i" }, { literal: "c" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "REPORT_FACTION_MAGIC", symbols: ["__", "REPORT_FACTION_MAGIC$string$1", "_", "INT"], postprocess: d => d[3] },
      {
        name: "REPORT_DATE$string$1",
        symbols: [{ literal: "Y" }, { literal: "e" }, { literal: "a" }, { literal: "r" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "REPORT_DATE", symbols: ["WORDS", { literal: "," }, "_", "REPORT_DATE$string$1", "_", "INT"], postprocess: dateProcessor },
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
        symbols: [
          "ATL_VERSION$string$1",
          "_",
          "ATL_VERSION",
          "_NL",
          "WORDS",
          { literal: "," },
          "_",
          "ATL_VERSION$string$2",
          "_",
          "ATL_VERSION"
        ],
        postprocess: versionProcessor
      },
      { name: "ATL_VERSION", symbols: ["INT"] },
      { name: "ATL_VERSION", symbols: ["INT", { literal: "." }, "VERSION"], postprocess: array2String },
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
      { name: "FACTION_STATUS$ebnf$1", symbols: ["FACTION_STATUS_ELEMENTS"] },
      {
        name: "FACTION_STATUS$ebnf$1",
        symbols: ["FACTION_STATUS$ebnf$1", "FACTION_STATUS_ELEMENTS"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "FACTION_STATUS", symbols: ["FACTION_STATUS$string$1", "_NL", "FACTION_STATUS$ebnf$1"] },
      { name: "FACTION_STATUS_ELEMENTS", symbols: ["FACTION_TAX"] },
      { name: "FACTION_STATUS_ELEMENTS", symbols: ["FACTION_TRADE"] },
      { name: "FACTION_STATUS_ELEMENTS", symbols: ["FACTION_MAGES"] },
      { name: "FACTION_STATUS_ELEMENTS", symbols: ["FACTION_MAGES_APPRENTICES"] },
      {
        name: "FACTION_TAX$string$1",
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
      { name: "FACTION_TAX", symbols: ["FACTION_TAX$string$1", "_", "INT", "_", { literal: "(" }, "INT", { literal: ")" }, "__NL"] },
      {
        name: "FACTION_TRADE$string$1",
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
      { name: "FACTION_TRADE", symbols: ["FACTION_TRADE$string$1", "_", "INT", "_", { literal: "(" }, "INT", { literal: ")" }, "__NL"] },
      {
        name: "FACTION_MAGES$string$1",
        symbols: [{ literal: "M" }, { literal: "a" }, { literal: "g" }, { literal: "e" }, { literal: "s" }, { literal: ":" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "FACTION_MAGES", symbols: ["FACTION_MAGES$string$1", "_", "INT", "_", { literal: "(" }, "INT", { literal: ")" }, "__NL"] },
      {
        name: "FACTION_MAGES_APPRENTICES$string$1",
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
        name: "FACTION_MAGES_APPRENTICES",
        symbols: ["FACTION_MAGES_APPRENTICES$string$1", "_", "INT", "_", { literal: "(" }, "INT", { literal: ")" }, "__NL"]
      },
      { name: "_NL$ebnf$1", symbols: [/[\n]/] },
      {
        name: "_NL$ebnf$1",
        symbols: ["_NL$ebnf$1", /[\n]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "_NL", symbols: ["_NL$ebnf$1"], postprocess: noop },
      { name: "__NL$ebnf$1", symbols: [] },
      {
        name: "__NL$ebnf$1",
        symbols: ["__NL$ebnf$1", /[\n]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "__NL", symbols: ["__NL$ebnf$1"], postprocess: noop },
      { name: "INT$ebnf$1", symbols: [/[0-9]/] },
      {
        name: "INT$ebnf$1",
        symbols: ["INT$ebnf$1", /[0-9]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "INT", symbols: ["INT$ebnf$1"], postprocess: d => parseInt(d[0].join("")) },
      { name: "_$ebnf$1", symbols: [/[ \t\n\v\f]/] },
      {
        name: "_$ebnf$1",
        symbols: ["_$ebnf$1", /[ \t\n\v\f]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "_", symbols: ["_$ebnf$1"], postprocess: id },
      { name: "__$ebnf$1", symbols: [] },
      {
        name: "__$ebnf$1",
        symbols: ["__$ebnf$1", /[ \t\n\v\f]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "__", symbols: ["__$ebnf$1"], postprocess: id },
      { name: "WORD$ebnf$1", symbols: [/[\w]/] },
      {
        name: "WORD$ebnf$1",
        symbols: ["WORD$ebnf$1", /[\w]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "WORD", symbols: ["WORD$ebnf$1"], postprocess: array2String },
      { name: "WORDS", symbols: ["WORD"], postprocess: array2String },
      { name: "WORDS", symbols: ["WORD", { literal: " " }, "WORDS"], postprocess: array2String },
      { name: "VERSION", symbols: ["INT"] },
      { name: "VERSION", symbols: ["INT", { literal: "." }, "VERSION"] }
    ],
    ParserStart: "REPORT_PARSER"
  };
  if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = grammar;
  } else {
    window.grammar = grammar;
  }
})();
