// Generated automatically by nearley, version 2.15.1
// http://github.com/Hardmath123/nearley
(function() {
  function id(x) {
    return x[0];
  }

  const factionProcessor = (d, i, reject) => {
    return {
      type: "FACTION",
      factionName: d[0].join(""),
      factionNumber: d[2]
    };
  };

  const dateProcessor = (d, i, reject) => {
    return {
      type: "DATE",
      month: d[0].join(""),
      day: d[2]
    };
  };
  var grammar = {
    Lexer: undefined,
    ParserRules: [
      { name: "_$ebnf$1", symbols: [] },
      {
        name: "_$ebnf$1",
        symbols: ["_$ebnf$1", "wschar"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "_",
        symbols: ["_$ebnf$1"],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "__$ebnf$1", symbols: ["wschar"] },
      {
        name: "__$ebnf$1",
        symbols: ["__$ebnf$1", "wschar"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "__",
        symbols: ["__$ebnf$1"],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "wschar", symbols: [/[ \t\n\v\f]/], postprocess: id },
      { name: "unsigned_int$ebnf$1", symbols: [/[0-9]/] },
      {
        name: "unsigned_int$ebnf$1",
        symbols: ["unsigned_int$ebnf$1", /[0-9]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "unsigned_int",
        symbols: ["unsigned_int$ebnf$1"],
        postprocess: function(d) {
          return parseInt(d[0].join(""));
        }
      },
      { name: "int$ebnf$1$subexpression$1", symbols: [{ literal: "-" }] },
      { name: "int$ebnf$1$subexpression$1", symbols: [{ literal: "+" }] },
      { name: "int$ebnf$1", symbols: ["int$ebnf$1$subexpression$1"], postprocess: id },
      {
        name: "int$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "int$ebnf$2", symbols: [/[0-9]/] },
      {
        name: "int$ebnf$2",
        symbols: ["int$ebnf$2", /[0-9]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "int",
        symbols: ["int$ebnf$1", "int$ebnf$2"],
        postprocess: function(d) {
          if (d[0]) {
            return parseInt(d[0][0] + d[1].join(""));
          } else {
            return parseInt(d[1].join(""));
          }
        }
      },
      { name: "unsigned_decimal$ebnf$1", symbols: [/[0-9]/] },
      {
        name: "unsigned_decimal$ebnf$1",
        symbols: ["unsigned_decimal$ebnf$1", /[0-9]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", symbols: [/[0-9]/] },
      {
        name: "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1",
        symbols: ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "unsigned_decimal$ebnf$2$subexpression$1", symbols: [{ literal: "." }, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"] },
      { name: "unsigned_decimal$ebnf$2", symbols: ["unsigned_decimal$ebnf$2$subexpression$1"], postprocess: id },
      {
        name: "unsigned_decimal$ebnf$2",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "unsigned_decimal",
        symbols: ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"],
        postprocess: function(d) {
          return parseFloat(d[0].join("") + (d[1] ? "." + d[1][1].join("") : ""));
        }
      },
      { name: "decimal$ebnf$1", symbols: [{ literal: "-" }], postprocess: id },
      {
        name: "decimal$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "decimal$ebnf$2", symbols: [/[0-9]/] },
      {
        name: "decimal$ebnf$2",
        symbols: ["decimal$ebnf$2", /[0-9]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "decimal$ebnf$3$subexpression$1$ebnf$1", symbols: [/[0-9]/] },
      {
        name: "decimal$ebnf$3$subexpression$1$ebnf$1",
        symbols: ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "decimal$ebnf$3$subexpression$1", symbols: [{ literal: "." }, "decimal$ebnf$3$subexpression$1$ebnf$1"] },
      { name: "decimal$ebnf$3", symbols: ["decimal$ebnf$3$subexpression$1"], postprocess: id },
      {
        name: "decimal$ebnf$3",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "decimal",
        symbols: ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"],
        postprocess: function(d) {
          return parseFloat((d[0] || "") + d[1].join("") + (d[2] ? "." + d[2][1].join("") : ""));
        }
      },
      {
        name: "percentage",
        symbols: ["decimal", { literal: "%" }],
        postprocess: function(d) {
          return d[0] / 100;
        }
      },
      { name: "jsonfloat$ebnf$1", symbols: [{ literal: "-" }], postprocess: id },
      {
        name: "jsonfloat$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "jsonfloat$ebnf$2", symbols: [/[0-9]/] },
      {
        name: "jsonfloat$ebnf$2",
        symbols: ["jsonfloat$ebnf$2", /[0-9]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "jsonfloat$ebnf$3$subexpression$1$ebnf$1", symbols: [/[0-9]/] },
      {
        name: "jsonfloat$ebnf$3$subexpression$1$ebnf$1",
        symbols: ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "jsonfloat$ebnf$3$subexpression$1", symbols: [{ literal: "." }, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"] },
      { name: "jsonfloat$ebnf$3", symbols: ["jsonfloat$ebnf$3$subexpression$1"], postprocess: id },
      {
        name: "jsonfloat$ebnf$3",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "jsonfloat$ebnf$4$subexpression$1$ebnf$1", symbols: [/[+-]/], postprocess: id },
      {
        name: "jsonfloat$ebnf$4$subexpression$1$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "jsonfloat$ebnf$4$subexpression$1$ebnf$2", symbols: [/[0-9]/] },
      {
        name: "jsonfloat$ebnf$4$subexpression$1$ebnf$2",
        symbols: ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "jsonfloat$ebnf$4$subexpression$1",
        symbols: [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]
      },
      { name: "jsonfloat$ebnf$4", symbols: ["jsonfloat$ebnf$4$subexpression$1"], postprocess: id },
      {
        name: "jsonfloat$ebnf$4",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "jsonfloat",
        symbols: ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"],
        postprocess: function(d) {
          return parseFloat(
            (d[0] || "") + d[1].join("") + (d[2] ? "." + d[2][1].join("") : "") + (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
          );
        }
      },
      {
        name: "ReportHeader$string$1",
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
      { name: "ReportHeader$ebnf$1", symbols: ["_NL"] },
      {
        name: "ReportHeader$ebnf$1",
        symbols: ["ReportHeader$ebnf$1", "_NL"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "ReportHeader$ebnf$2", symbols: ["_NL"] },
      {
        name: "ReportHeader$ebnf$2",
        symbols: ["ReportHeader$ebnf$2", "_NL"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "ReportHeader",
        symbols: ["ReportHeader$string$1", "ReportHeader$ebnf$1", "ReportFaction", "ReportHeader$ebnf$2", "ReportDate"]
      },
      { name: "ReportFaction$ebnf$1", symbols: [/[a-zA-Z]/] },
      {
        name: "ReportFaction$ebnf$1",
        symbols: ["ReportFaction$ebnf$1", /[a-zA-Z]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "ReportFaction$string$1",
        symbols: [{ literal: " " }, { literal: "(" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "ReportFaction",
        symbols: ["ReportFaction$ebnf$1", "ReportFaction$string$1", "int", { literal: ")" }],
        postprocess: factionProcessor
      },
      { name: "ReportDate$ebnf$1", symbols: [/[a-zA-Z]/] },
      {
        name: "ReportDate$ebnf$1",
        symbols: ["ReportDate$ebnf$1", /[a-zA-Z]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "ReportDate$string$1",
        symbols: [
          { literal: "," },
          { literal: " " },
          { literal: "Y" },
          { literal: "e" },
          { literal: "a" },
          { literal: "r" },
          { literal: " " }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "ReportDate", symbols: ["ReportDate$ebnf$1", "ReportDate$string$1", "int"], postprocess: dateProcessor },
      { name: "_NL", symbols: [{ literal: "\n" }] }
    ],
    ParserStart: "ReportHeader"
  };
  if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = grammar;
  } else {
    window.grammar = grammar;
  }
})();
