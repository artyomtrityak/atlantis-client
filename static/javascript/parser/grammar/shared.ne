@{%
  const noop = () => null;

  const filterEmpty = (d) => {
    return d.filter((val) => {
      if (val == null) {
        return false;
      }
      if (Array.isArray(val) && val.length === 0) {
        return false;
      }
      return true;
    });
  }

  const array2String = (d) => {
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
  }

  const parseRegionCoordinates = (d) => {
    let z = 1;
    if (d[4] === ",underworld") {
      z = 2;
    }
    if (d[4] === ",nexus") {
      z = 0;
    }
    return {
      x: d[1],
      y: d[3],
      z,
      toString() {
        return array2String(d);
      }
    };
  };
%}

NL ->
  [\n] {% noop %}

NL_ ->
  NL:+

INT ->
  [0-9]:+ {% (d) => parseInt(d[0].join("")) %}

_ ->
  [ ] {% id %}

__ ->
  _:+ {% id %}

__AND_NL ->
  [ \n]:+ {% id %}

SENTENCE ->
  WORD [.!]
  | WORD __ SENTENCE {% array2String %}
  | WORD NL __ SENTENCE {% array2String %}

TEXT ->
  WORD
  | WORD __ TEXT {% array2String %}
  | WORD NL __ TEXT {% array2String %}

WORD ->
  [^\n\r ]:+ {% array2String %}

BLOB ->
  [^\n\r]:+ {% array2String %}

REGION_COORDINATES ->
  "(" INT "," INT ",underworld":? ")" {% parseRegionCoordinates  %}