@include "../grammar-shared/index.ne"

@{%
  const unitParser = (d) => {
    console.log("U1", d);
    return d;
  }
%}



UNIT_PARSER ->
  [*+\-] _ TEXT "." {% unitParser %}