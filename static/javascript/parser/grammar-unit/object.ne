@{%
  const sectionObjectParser = (d) => {
    console.log("OBJ !!!! ! ! !", d);
    return {
      objectName: d[1],
      objectId: d[4],
      objectType: d[9],
      objectUnits: d[11]
    };
  }
%}

OBJECT_PARSER_ITEMS ->
  [+] OBJECT_NAME __ "[" INT "]" __ ":" __ OBJECT_DESC "." OBJECT_UNIT:* {% sectionObjectParser %}

OBJECT_NAME ->
  [^:.\[\]]:+ {% array2String %}

OBJECT_DESC ->
  [^.;]:+ {% array2String %}

OBJECT_UNIT ->
  __ UNIT_PARSER_ITEMS