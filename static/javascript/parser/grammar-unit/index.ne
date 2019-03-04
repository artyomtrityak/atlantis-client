@include "../grammar-shared/index.ne"
@include "./unit.ne"
@include "./object.ne"

@{%
  const unitParser = (d) => {
    return d[0];
  }

  const objectParser = (d) => {
    return d[0];
  }
%}


PARSER ->
  UNIT_PARSER_ITEMS {% unitParser %}
  | OBJECT_PARSER_ITEMS {% objectParser %}
