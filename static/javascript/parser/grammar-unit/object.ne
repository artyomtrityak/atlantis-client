@{%
  const sectionObjectParser = (d) => {
    return {
      type: "OBJECT",
      objectName: d[1],
      objectId: d[4],
      objectType: d[9],
      objectUnits: d[12],
      objectComment: array2String(d[10])
    };
  }
%}

OBJECT_PARSER_ITEMS ->
  [+] OBJECT_NAME __ "[" INT "]" __ ":" __ OBJECT_DESC OBJECT_COMMENT:? "." OBJECT_UNIT:* {% sectionObjectParser %}

OBJECT_NAME ->
  [^:.\[\]]:+ {% array2String %}

OBJECT_DESC ->
  [^.;]:+ {% array2String %}

OBJECT_COMMENT ->
  ";" [^.;]:+ {% array2String %}

OBJECT_UNIT ->
  __ UNIT_PARSER_ITEMS {% (d) => d[1] %}