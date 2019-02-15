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

  const unitParser = d => {
    console.log("U1", d);
    return d;
  };

  const objectParser = d => {
    console.log("O1", d);
    return d;
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
      { name: "UNIT_PARSER", symbols: ["UNIT_PARSER_ITEMS"], postprocess: unitParser },
      { name: "UNIT_PARSER", symbols: ["NPC_PARSER_ITEMS"], postprocess: unitParser },
      { name: "UNIT_PARSER", symbols: [/[+]/, "_", "TEXT", { literal: "." }], postprocess: objectParser },
      { name: "UNIT_PARSER_ITEMS$ebnf$1", symbols: ["UNIT_SECTION"] },
      {
        name: "UNIT_PARSER_ITEMS$ebnf$1",
        symbols: ["UNIT_PARSER_ITEMS$ebnf$1", "UNIT_SECTION"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "UNIT_PARSER_ITEMS",
        symbols: [/[*-]/, "_", "UNIT_NAME", "UNIT_FACTION_NAME", "UNIT_PARSER_ITEMS$ebnf$1"],
        postprocess: d => {
          console.log("SECTION:", d);
          return d;
        }
      },
      { name: "NPC_PARSER_ITEMS$ebnf$1", symbols: ["UNIT_SECTION"] },
      {
        name: "NPC_PARSER_ITEMS$ebnf$1",
        symbols: ["NPC_PARSER_ITEMS$ebnf$1", "UNIT_SECTION"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "NPC_PARSER_ITEMS",
        symbols: [/[-]/, "_", "UNIT_NAME", "NPC_PARSER_ITEMS$ebnf$1"],
        postprocess: d => {
          console.log("SECTION:", d);
          return d;
        }
      },
      { name: "UNIT_SECTION$ebnf$1", symbols: [/[^,.]/] },
      {
        name: "UNIT_SECTION$ebnf$1",
        symbols: ["UNIT_SECTION$ebnf$1", /[^,.]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "UNIT_SECTION", symbols: ["UNIT_SECTION$ebnf$1", /[.,]/], postprocess: array2String },
      { name: "UNIT_NAME$ebnf$1", symbols: [/[^,.()]/] },
      {
        name: "UNIT_NAME$ebnf$1",
        symbols: ["UNIT_NAME$ebnf$1", /[^,.()]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "UNIT_NAME",
        symbols: ["UNIT_NAME$ebnf$1", "_", { literal: "(" }, "INT", { literal: ")" }, /[.,]/],
        postprocess: array2String
      },
      { name: "UNIT_FACTION_NAME$ebnf$1", symbols: [/[^,.()]/] },
      {
        name: "UNIT_FACTION_NAME$ebnf$1",
        symbols: ["UNIT_FACTION_NAME$ebnf$1", /[^,.()]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "UNIT_FACTION_NAME",
        symbols: ["UNIT_FACTION_NAME$ebnf$1", "_", { literal: "(" }, "INT", { literal: ")" }, /[.,]/],
        postprocess: array2String
      }
    ],
    ParserStart: "UNIT_PARSER"
  };
  if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = grammar;
  } else {
    window.grammar = grammar;
  }
})();