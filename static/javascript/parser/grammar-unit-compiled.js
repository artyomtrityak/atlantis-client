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

  const sectionUnitParser = d => {
    return {
      unitName: d[2].unitName,
      unitId: d[2].unitId,
      faction: d[4],
      unitDetails: d[5]
    };
  };

  const unitSkills = d => {
    // TODO: comments!!!
    return {
      type: "SKILLS",
      skills: d[1][1]
    };
  };

  const unitSkill = d => {
    return {
      skill: array2String(d[1]),
      code: d[4],
      level: d[7],
      exp: d[10]
    };
  };

  const unitFaction = d => {
    return {
      type: "FACTION",
      factionName: array2String(d[1]),
      factionId: d[4]
    };
  };

  const unitName = d => {
    return {
      type: "UNIT_NAME",
      unitName: array2String(d[0]),
      unitId: d[3]
    };
  };

  const unitFlags = d => {
    // TODO: comments!!!
    return {
      type: "UNIT_FLAG",
      flag: d[1].name
    };
  };

  const unitItems = d => {
    // TODO: comments!!!
    return {
      type: "UNIT_ITEM",
      item: d[1]
    };
  };

  const unitWeight = d => {
    return {
      type: "WEIGHT",
      weight: d[1][2]
    };
  };

  const unitCapacity = d => {
    return {
      type: "CAPACITY",
      fly: d[1][2],
      ride: d[1][4],
      walk: d[1][6],
      swim: d[1][8]
    };
  };

  const unitCanStudy = d => {
    return {
      type: "CAN_STUDY",
      text: array2String(d)
    };
  };

  const unitCombatSpell = d => {
    return {
      type: "COMBAT_SPELL",
      spell: array2String(d[3])
    };
  };

  const commentParser = d => {
    return {
      type: "COMMENT",
      text: array2String(d)
    };
  };

  const unitUpkeep = d => {
    return {
      type: "UPKEEP",
      value: d[1][3]
    };
  };

  const sectionObjectParser = d => {
    return {
      objectName: d[1],
      objectId: d[4],
      objectType: d[9],
      objectUnits: d[11]
    };
  };

  const unitParser = d => {
    return d;
  };

  const objectParser = d => {
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
      { name: "UNIT_PARSER_ITEMS$ebnf$1", symbols: ["UNIT_FLAGS_ONGUARD"], postprocess: id },
      {
        name: "UNIT_PARSER_ITEMS$ebnf$1",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "UNIT_PARSER_ITEMS$ebnf$2", symbols: ["UNIT_FACTION_NAME"], postprocess: id },
      {
        name: "UNIT_PARSER_ITEMS$ebnf$2",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      { name: "UNIT_PARSER_ITEMS$ebnf$3", symbols: ["UNIT_SECTION"] },
      {
        name: "UNIT_PARSER_ITEMS$ebnf$3",
        symbols: ["UNIT_PARSER_ITEMS$ebnf$3", "UNIT_SECTION"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "UNIT_PARSER_ITEMS",
        symbols: [/[*-]/, "__", "UNIT_NAME", "UNIT_PARSER_ITEMS$ebnf$1", "UNIT_PARSER_ITEMS$ebnf$2", "UNIT_PARSER_ITEMS$ebnf$3"],
        postprocess: sectionUnitParser
      },
      { name: "UNIT_SECTION", symbols: ["UNIT_SECTION_ITEM"], postprocess: d => d[0] },
      { name: "UNIT_SECTION_ITEM", symbols: ["__", "UNIT_SKILLS", { literal: "." }], postprocess: unitSkills },
      { name: "UNIT_SECTION_ITEM", symbols: ["__", "UNIT_SKILLS", { literal: ";" }, "UNIT_COMMENT"], postprocess: unitSkills },
      { name: "UNIT_SECTION_ITEM", symbols: ["__", "UNIT_CAN_STUDY", { literal: "." }], postprocess: unitCanStudy },
      { name: "UNIT_SECTION_ITEM", symbols: ["__", "UNIT_CAN_STUDY", { literal: ";" }, "UNIT_COMMENT"], postprocess: unitCanStudy },
      { name: "UNIT_SECTION_ITEM", symbols: ["__", "UNIT_COMBAT_SPELL", { literal: "." }], postprocess: unitCombatSpell },
      { name: "UNIT_SECTION_ITEM", symbols: ["__", "UNIT_COMBAT_SPELL", { literal: ";" }, "UNIT_COMMENT"], postprocess: unitCombatSpell },
      { name: "UNIT_SECTION_ITEM", symbols: ["__", "UNIT_FLAGS", /[.,]/], postprocess: unitFlags },
      { name: "UNIT_SECTION_ITEM", symbols: ["__", "UNIT_FLAGS", { literal: ";" }, "UNIT_COMMENT"], postprocess: unitFlags },
      { name: "UNIT_SECTION_ITEM", symbols: ["__", "UNIT_ITEM", /[.,]/], postprocess: unitItems },
      { name: "UNIT_SECTION_ITEM", symbols: ["__", "UNIT_ITEM", { literal: ";" }, "UNIT_COMMENT"], postprocess: unitItems },
      { name: "UNIT_SECTION_ITEM", symbols: ["__", "UNIT_WEIGHT", { literal: "." }], postprocess: unitWeight },
      { name: "UNIT_SECTION_ITEM", symbols: ["__", "UNIT_WEIGHT", { literal: ";" }, "UNIT_COMMENT"], postprocess: unitWeight },
      { name: "UNIT_SECTION_ITEM", symbols: ["__", "UNIT_CAPACITY", { literal: "." }], postprocess: unitCapacity },
      { name: "UNIT_SECTION_ITEM", symbols: ["__", "UNIT_CAPACITY", { literal: ";" }, "UNIT_COMMENT"], postprocess: unitCapacity },
      { name: "UNIT_SECTION_ITEM", symbols: ["__", "UNIT_UPKEEP", { literal: "." }], postprocess: unitUpkeep },
      { name: "UNIT_SECTION_ITEM", symbols: ["__", "UNIT_UPKEEP", { literal: ";" }, "UNIT_COMMENT"], postprocess: unitUpkeep },
      { name: "UNIT_NAME$ebnf$1", symbols: [/[^,():;]/] },
      {
        name: "UNIT_NAME$ebnf$1",
        symbols: ["UNIT_NAME$ebnf$1", /[^,():;]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "UNIT_NAME",
        symbols: ["UNIT_NAME$ebnf$1", "__", { literal: "(" }, "INT", { literal: ")" }, { literal: "," }],
        postprocess: unitName
      },
      { name: "UNIT_FACTION_NAME$ebnf$1", symbols: [/[^,.():;]/] },
      {
        name: "UNIT_FACTION_NAME$ebnf$1",
        symbols: ["UNIT_FACTION_NAME$ebnf$1", /[^,.():;]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "UNIT_FACTION_NAME",
        symbols: ["__", "UNIT_FACTION_NAME$ebnf$1", "__", { literal: "(" }, "INT", { literal: ")" }, { literal: "," }],
        postprocess: unitFaction
      },
      {
        name: "UNIT_FLAGS$string$1",
        symbols: [{ literal: "t" }, { literal: "a" }, { literal: "x" }, { literal: "i" }, { literal: "n" }, { literal: "g" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "UNIT_FLAGS", symbols: ["UNIT_FLAGS$string$1"], postprocess: () => ({ type: "FLAG", name: "taxing" }) },
      {
        name: "UNIT_FLAGS$string$2",
        symbols: [
          { literal: "a" },
          { literal: "v" },
          { literal: "o" },
          { literal: "i" },
          { literal: "d" },
          { literal: "i" },
          { literal: "n" },
          { literal: "g" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "UNIT_FLAGS", symbols: ["UNIT_FLAGS$string$2"], postprocess: () => ({ type: "FLAG", name: "avoiding" }) },
      {
        name: "UNIT_FLAGS$string$3",
        symbols: [{ literal: "o" }, { literal: "n" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS$string$4",
        symbols: [{ literal: "g" }, { literal: "u" }, { literal: "a" }, { literal: "r" }, { literal: "d" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS",
        symbols: ["UNIT_FLAGS$string$3", "__", "UNIT_FLAGS$string$4"],
        postprocess: () => ({ type: "FLAG", name: "guard" })
      },
      {
        name: "UNIT_FLAGS$string$5",
        symbols: [{ literal: "b" }, { literal: "e" }, { literal: "h" }, { literal: "i" }, { literal: "n" }, { literal: "d" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "UNIT_FLAGS", symbols: ["UNIT_FLAGS$string$5"], postprocess: () => ({ type: "FLAG", name: "behind" }) },
      {
        name: "UNIT_FLAGS$string$6",
        symbols: [
          { literal: "h" },
          { literal: "o" },
          { literal: "l" },
          { literal: "d" },
          { literal: "i" },
          { literal: "n" },
          { literal: "g" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "UNIT_FLAGS", symbols: ["UNIT_FLAGS$string$6"], postprocess: () => ({ type: "FLAG", name: "holding" }) },
      {
        name: "UNIT_FLAGS$string$7",
        symbols: [
          { literal: "c" },
          { literal: "o" },
          { literal: "n" },
          { literal: "s" },
          { literal: "u" },
          { literal: "m" },
          { literal: "i" },
          { literal: "n" },
          { literal: "g" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS$string$8",
        symbols: [
          { literal: "f" },
          { literal: "a" },
          { literal: "c" },
          { literal: "t" },
          { literal: "i" },
          { literal: "o" },
          { literal: "n" },
          { literal: "'" },
          { literal: "s" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS$string$9",
        symbols: [{ literal: "f" }, { literal: "o" }, { literal: "o" }, { literal: "d" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS",
        symbols: ["UNIT_FLAGS$string$7", "__", "UNIT_FLAGS$string$8", "__", "UNIT_FLAGS$string$9"],
        postprocess: () => ({ type: "FLAG", name: "consuming_faction" })
      },
      {
        name: "UNIT_FLAGS$string$10",
        symbols: [
          { literal: "c" },
          { literal: "o" },
          { literal: "n" },
          { literal: "s" },
          { literal: "u" },
          { literal: "m" },
          { literal: "i" },
          { literal: "n" },
          { literal: "g" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS$string$11",
        symbols: [{ literal: "u" }, { literal: "n" }, { literal: "i" }, { literal: "t" }, { literal: "'" }, { literal: "s" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS$string$12",
        symbols: [{ literal: "f" }, { literal: "o" }, { literal: "o" }, { literal: "d" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS",
        symbols: ["UNIT_FLAGS$string$10", "__", "UNIT_FLAGS$string$11", "__", "UNIT_FLAGS$string$12"],
        postprocess: () => ({ type: "FLAG", name: "consuming_unit" })
      },
      {
        name: "UNIT_FLAGS$string$13",
        symbols: [
          { literal: "s" },
          { literal: "h" },
          { literal: "a" },
          { literal: "r" },
          { literal: "i" },
          { literal: "n" },
          { literal: "g" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "UNIT_FLAGS", symbols: ["UNIT_FLAGS$string$13"], postprocess: () => ({ type: "FLAG", name: "sharing" }) },
      {
        name: "UNIT_FLAGS$string$14",
        symbols: [
          { literal: "r" },
          { literal: "e" },
          { literal: "v" },
          { literal: "e" },
          { literal: "a" },
          { literal: "l" },
          { literal: "i" },
          { literal: "n" },
          { literal: "g" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS$string$15",
        symbols: [
          { literal: "f" },
          { literal: "a" },
          { literal: "c" },
          { literal: "t" },
          { literal: "i" },
          { literal: "o" },
          { literal: "n" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS",
        symbols: ["UNIT_FLAGS$string$14", "__", "UNIT_FLAGS$string$15"],
        postprocess: () => ({ type: "FLAG", name: "visibility_reveal_faction" })
      },
      {
        name: "UNIT_FLAGS$string$16",
        symbols: [
          { literal: "r" },
          { literal: "e" },
          { literal: "v" },
          { literal: "e" },
          { literal: "a" },
          { literal: "l" },
          { literal: "i" },
          { literal: "n" },
          { literal: "g" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS$string$17",
        symbols: [{ literal: "u" }, { literal: "n" }, { literal: "i" }, { literal: "t" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS",
        symbols: ["UNIT_FLAGS$string$16", "__", "UNIT_FLAGS$string$17"],
        postprocess: () => ({ type: "FLAG", name: "visibility_reveal_unit" })
      },
      {
        name: "UNIT_FLAGS$string$18",
        symbols: [
          { literal: "w" },
          { literal: "a" },
          { literal: "l" },
          { literal: "k" },
          { literal: "i" },
          { literal: "n" },
          { literal: "g" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS$string$19",
        symbols: [{ literal: "b" }, { literal: "a" }, { literal: "t" }, { literal: "t" }, { literal: "l" }, { literal: "e" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS$string$20",
        symbols: [{ literal: "s" }, { literal: "p" }, { literal: "o" }, { literal: "i" }, { literal: "l" }, { literal: "s" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS",
        symbols: ["UNIT_FLAGS$string$18", "__", "UNIT_FLAGS$string$19", "__", "UNIT_FLAGS$string$20"],
        postprocess: () => ({ type: "FLAG", name: "spoils_walking" })
      },
      {
        name: "UNIT_FLAGS$string$21",
        symbols: [
          { literal: "w" },
          { literal: "e" },
          { literal: "i" },
          { literal: "g" },
          { literal: "h" },
          { literal: "t" },
          { literal: "l" },
          { literal: "e" },
          { literal: "s" },
          { literal: "s" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS$string$22",
        symbols: [{ literal: "b" }, { literal: "a" }, { literal: "t" }, { literal: "t" }, { literal: "l" }, { literal: "e" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS$string$23",
        symbols: [{ literal: "s" }, { literal: "p" }, { literal: "o" }, { literal: "i" }, { literal: "l" }, { literal: "s" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS",
        symbols: ["UNIT_FLAGS$string$21", "__", "UNIT_FLAGS$string$22", "__", "UNIT_FLAGS$string$23"],
        postprocess: () => ({ type: "FLAG", name: "spoils_weightless" })
      },
      {
        name: "UNIT_FLAGS$string$24",
        symbols: [{ literal: "r" }, { literal: "i" }, { literal: "d" }, { literal: "i" }, { literal: "n" }, { literal: "g" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS$string$25",
        symbols: [{ literal: "b" }, { literal: "a" }, { literal: "t" }, { literal: "t" }, { literal: "l" }, { literal: "e" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS$string$26",
        symbols: [{ literal: "s" }, { literal: "p" }, { literal: "o" }, { literal: "i" }, { literal: "l" }, { literal: "s" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS",
        symbols: ["UNIT_FLAGS$string$24", "__", "UNIT_FLAGS$string$25", "__", "UNIT_FLAGS$string$26"],
        postprocess: () => ({ type: "FLAG", name: "spoils_riding" })
      },
      {
        name: "UNIT_FLAGS$string$27",
        symbols: [{ literal: "f" }, { literal: "l" }, { literal: "y" }, { literal: "i" }, { literal: "n" }, { literal: "g" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS$string$28",
        symbols: [{ literal: "b" }, { literal: "a" }, { literal: "t" }, { literal: "t" }, { literal: "l" }, { literal: "e" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS$string$29",
        symbols: [{ literal: "s" }, { literal: "p" }, { literal: "o" }, { literal: "i" }, { literal: "l" }, { literal: "s" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS",
        symbols: ["UNIT_FLAGS$string$27", "__", "UNIT_FLAGS$string$28", "__", "UNIT_FLAGS$string$29"],
        postprocess: () => ({ type: "FLAG", name: "spoils_flying" })
      },
      {
        name: "UNIT_FLAGS$string$30",
        symbols: [
          { literal: "r" },
          { literal: "e" },
          { literal: "c" },
          { literal: "e" },
          { literal: "i" },
          { literal: "v" },
          { literal: "i" },
          { literal: "n" },
          { literal: "g" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS$string$31",
        symbols: [{ literal: "n" }, { literal: "o" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS$string$32",
        symbols: [{ literal: "a" }, { literal: "i" }, { literal: "d" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS",
        symbols: ["UNIT_FLAGS$string$30", "__", "UNIT_FLAGS$string$31", "__", "UNIT_FLAGS$string$32"],
        postprocess: () => ({ type: "FLAG", name: "noaid" })
      },
      {
        name: "UNIT_FLAGS_ONGUARD$string$1",
        symbols: [{ literal: "o" }, { literal: "n" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS_ONGUARD$string$2",
        symbols: [{ literal: "g" }, { literal: "u" }, { literal: "a" }, { literal: "r" }, { literal: "d" }, { literal: "," }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_FLAGS_ONGUARD",
        symbols: ["__", "UNIT_FLAGS_ONGUARD$string$1", "__", "UNIT_FLAGS_ONGUARD$string$2"],
        postprocess: () => ({ type: "FLAG", name: "guard" })
      },
      {
        name: "UNIT_SKILLS$string$1",
        symbols: [
          { literal: "S" },
          { literal: "k" },
          { literal: "i" },
          { literal: "l" },
          { literal: "l" },
          { literal: "s" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "UNIT_SKILLS$ebnf$1", symbols: ["UNIT_SKILL"] },
      {
        name: "UNIT_SKILLS$ebnf$1",
        symbols: ["UNIT_SKILLS$ebnf$1", "UNIT_SKILL"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "UNIT_SKILLS", symbols: ["UNIT_SKILLS$string$1", "UNIT_SKILLS$ebnf$1"] },
      { name: "UNIT_SKILL$ebnf$1", symbols: [] },
      {
        name: "UNIT_SKILL$ebnf$1",
        symbols: ["UNIT_SKILL$ebnf$1", "_"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "UNIT_SKILL$string$1",
        symbols: [{ literal: "n" }, { literal: "o" }, { literal: "n" }, { literal: "e" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "UNIT_SKILL", symbols: ["UNIT_SKILL$ebnf$1", "UNIT_SKILL$string$1"] },
      { name: "UNIT_SKILL$ebnf$2", symbols: [] },
      {
        name: "UNIT_SKILL$ebnf$2",
        symbols: ["UNIT_SKILL$ebnf$2", "_"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "UNIT_SKILL$ebnf$3", symbols: [/[,]/], postprocess: id },
      {
        name: "UNIT_SKILL$ebnf$3",
        symbols: [],
        postprocess: function(d) {
          return null;
        }
      },
      {
        name: "UNIT_SKILL",
        symbols: [
          "UNIT_SKILL$ebnf$2",
          "LC_WORDS",
          "__",
          { literal: "[" },
          "WORD",
          { literal: "]" },
          "__",
          "INT",
          "__",
          { literal: "(" },
          "INT",
          { literal: ")" },
          "UNIT_SKILL$ebnf$3"
        ],
        postprocess: unitSkill
      },
      {
        name: "UNIT_CAN_STUDY$string$1",
        symbols: [{ literal: "C" }, { literal: "a" }, { literal: "n" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_CAN_STUDY$string$2",
        symbols: [{ literal: "S" }, { literal: "t" }, { literal: "u" }, { literal: "d" }, { literal: "y" }, { literal: ":" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "UNIT_CAN_STUDY$ebnf$1", symbols: [/[^.;]/] },
      {
        name: "UNIT_CAN_STUDY$ebnf$1",
        symbols: ["UNIT_CAN_STUDY$ebnf$1", /[^.;]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "UNIT_CAN_STUDY",
        symbols: ["UNIT_CAN_STUDY$string$1", "__", "UNIT_CAN_STUDY$string$2", "UNIT_CAN_STUDY$ebnf$1"],
        postprocess: array2String
      },
      {
        name: "UNIT_COMBAT_SPELL$string$1",
        symbols: [{ literal: "C" }, { literal: "o" }, { literal: "m" }, { literal: "b" }, { literal: "a" }, { literal: "t" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_COMBAT_SPELL$string$2",
        symbols: [{ literal: "s" }, { literal: "p" }, { literal: "e" }, { literal: "l" }, { literal: "l" }, { literal: ":" }],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "UNIT_COMBAT_SPELL$ebnf$1", symbols: [/[^.;]/] },
      {
        name: "UNIT_COMBAT_SPELL$ebnf$1",
        symbols: ["UNIT_COMBAT_SPELL$ebnf$1", /[^.;]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "UNIT_COMBAT_SPELL",
        symbols: ["UNIT_COMBAT_SPELL$string$1", "__", "UNIT_COMBAT_SPELL$string$2", "UNIT_COMBAT_SPELL$ebnf$1"]
      },
      {
        name: "UNIT_ITEM",
        symbols: ["INT", "__", "LC_WORDS", "__", { literal: "[" }, "WORD", { literal: "]" }],
        postprocess: array2String
      },
      { name: "UNIT_ITEM", symbols: ["LC_WORDS", "__", { literal: "[" }, "WORD", { literal: "]" }], postprocess: array2String },
      {
        name: "UNIT_WEIGHT$string$1",
        symbols: [
          { literal: "W" },
          { literal: "e" },
          { literal: "i" },
          { literal: "g" },
          { literal: "h" },
          { literal: "t" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "UNIT_WEIGHT", symbols: ["UNIT_WEIGHT$string$1", "__", "INT"] },
      {
        name: "UNIT_CAPACITY$string$1",
        symbols: [
          { literal: "C" },
          { literal: "a" },
          { literal: "p" },
          { literal: "a" },
          { literal: "c" },
          { literal: "i" },
          { literal: "t" },
          { literal: "y" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      {
        name: "UNIT_CAPACITY",
        symbols: ["UNIT_CAPACITY$string$1", "__", "INT", { literal: "/" }, "INT", { literal: "/" }, "INT", { literal: "/" }, "INT"]
      },
      {
        name: "UNIT_UPKEEP$string$1",
        symbols: [
          { literal: "U" },
          { literal: "p" },
          { literal: "k" },
          { literal: "e" },
          { literal: "e" },
          { literal: "p" },
          { literal: ":" }
        ],
        postprocess: function joiner(d) {
          return d.join("");
        }
      },
      { name: "UNIT_UPKEEP", symbols: ["UNIT_UPKEEP$string$1", "__", { literal: "$" }, "INT"] },
      { name: "UNIT_COMMENT", symbols: ["BLOB"], postprocess: d => ({ type: "COMMENT", comment: array2String(d) }) },
      { name: "OBJECT_PARSER_ITEMS$ebnf$1", symbols: [] },
      {
        name: "OBJECT_PARSER_ITEMS$ebnf$1",
        symbols: ["OBJECT_PARSER_ITEMS$ebnf$1", "OBJECT_UNIT"],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      {
        name: "OBJECT_PARSER_ITEMS",
        symbols: [
          /[+]/,
          "OBJECT_NAME",
          "__",
          { literal: "[" },
          "INT",
          { literal: "]" },
          "__",
          { literal: ":" },
          "__",
          "OBJECT_DESC",
          { literal: "." },
          "OBJECT_PARSER_ITEMS$ebnf$1"
        ],
        postprocess: sectionObjectParser
      },
      { name: "OBJECT_NAME$ebnf$1", symbols: [/[^:.\[\]]/] },
      {
        name: "OBJECT_NAME$ebnf$1",
        symbols: ["OBJECT_NAME$ebnf$1", /[^:.\[\]]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "OBJECT_NAME", symbols: ["OBJECT_NAME$ebnf$1"], postprocess: array2String },
      { name: "OBJECT_DESC$ebnf$1", symbols: [/[^.;]/] },
      {
        name: "OBJECT_DESC$ebnf$1",
        symbols: ["OBJECT_DESC$ebnf$1", /[^.;]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      },
      { name: "OBJECT_DESC", symbols: ["OBJECT_DESC$ebnf$1"], postprocess: array2String },
      { name: "OBJECT_UNIT", symbols: ["__", "UNIT_PARSER_ITEMS"] },
      { name: "PARSER", symbols: ["UNIT_PARSER_ITEMS"], postprocess: unitParser },
      { name: "PARSER", symbols: ["OBJECT_PARSER_ITEMS"], postprocess: objectParser }
    ],
    ParserStart: "PARSER"
  };
  if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = grammar;
  } else {
    window.grammar = grammar;
  }
})();
