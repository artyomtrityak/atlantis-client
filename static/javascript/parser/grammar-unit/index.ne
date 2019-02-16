@include "../grammar-shared/index.ne"

@{%
  const unitParser = (d) => {
    // console.log("U1", d);
    return d;
  }

  const objectParser = (d) => {
    // console.log("O1", d);
    return d;
  }

  const unitSkills = (d) => {
    return array2String(d);
  }

  const unitFaction = (d) => {
    return array2String(d);
  }

  const unitName = (d) => {
    return array2String(d);
  }

  const unitFlags = (d) => {
    return array2String(d);
  }
%}

UNIT_PARSER ->
  UNIT_PARSER_ITEMS {% unitParser %}
  | [+] _ TEXT "." {% objectParser %}

UNIT_PARSER_ITEMS ->
  [*-] _ UNIT_NAME UNIT_SECTION:+ {% (d) => {
    // console.log("SECTION:", d);
    return d;
  } %}

UNIT_SECTION ->
  UNIT_SECTION_ITEM [.,] {% array2String %}

UNIT_SECTION_ITEM ->
  _ UNIT_SKILLS {% unitSkills %}
  | _ UNIT_FACTION_NAME
  | _ UNIT_FLAGS {% unitFlags %}
  | [^,.]:+ {% array2String %}


UNIT_NAME ->
  [^,.()]:+ _ "(" INT ")" "," {% unitName %}


UNIT_FACTION_NAME ->
  [^,.()]:+ _ "(" INT ")" "," {% unitFaction %}


UNIT_FLAGS ->
  "avoiding" {% () => ({ type: "FLAG", name: "avoiding" }) %}
  | "behind" {% () => ({ type: "FLAG", name: "behind" }) %}
  | "holding" {% () => ({ type: "FLAG", name: "holding" }) %}
  | "consuming faction's food" {% () => ({ type: "FLAG", name: "consuming", subtype: "faction" }) %}
  | "sharing" {% () => ({ type: "FLAG", name: "sharing" }) %}
  | "walking battle spoils" {% () => ({ type: "FLAG", name: "spoils", subtype: "walking" }) %}


UNIT_SKILLS ->
  "Skills:" _ [^,.]:+ "." {% array2String %}