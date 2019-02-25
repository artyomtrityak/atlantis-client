@include "../grammar-shared/index.ne"
@include "./unit.ne"
@include "./object.ne"

@{%
  const unitParser = (d) => {
    return d;
  }

  const objectParser = (d) => {
    return d;
  }
%}


PARSER ->
  UNIT_PARSER_ITEMS {% unitParser %}
  | OBJECT_PARSER_ITEMS {% objectParser %}
