@include "../grammar-shared/index.ne"

@{%
  const unitParser = (d) => {
    console.log("U1", d);
    return d;
  }

  const objectParser = (d) => {
    console.log("O1", d);
    return d;
  }
%}

UNIT_PARSER ->
  UNIT_PARSER_ITEMS {% unitParser %}
  | [+] _ TEXT "." {% objectParser %}

UNIT_PARSER_ITEMS ->
  [*-] _ UNIT_NAME UNIT_SECTION:+ {% (d) => {
    console.log("SECTION:", d);
    return d;
  } %}

UNIT_SECTION ->
  [^,.]:+ [.,] {% array2String %}

UNIT_NAME ->
  [^,.()]:+ _ "(" INT ")" [.,] {% array2String %}

UNIT_FACTION_NAME ->
  [^,.()]:+ _ "(" INT ")" [.,] {% array2String %}