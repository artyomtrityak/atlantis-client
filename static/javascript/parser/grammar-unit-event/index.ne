@include "../grammar-shared/index.ne"

@{%
  const eventParser = (d) => {
    return {
      unit: d[0][0],
      eventText: d[0][3]
    };
  }
%}


PARSER ->
  EVENT_PARSER {% eventParser %}


EVENT_PARSER ->
  UNIT_NAME ":" __ TEXT


