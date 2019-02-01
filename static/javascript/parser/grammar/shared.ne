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
  "(" INT "," INT REGION_Z_LEVEL ")" {% parseRegionCoordinates  %}

REGION_Z_LEVEL ->
  ",nexus" {% (d) => ({ title: d[0], z: 0 }) %}
  | null {% (d) => ({ title: "", z: 1 }) %}

  #Underworld
  | ",underworld" {% (d) => ({ title: d[0], z: 2 }) %}
  | "," INT NL:? _ "<underworld>" {% (d) => ({ title: array2String(d), z: parseInt(String(2) + String(d[1]), 10)}) %}

  #Underdeep
  | ",underdeep" {% (d) => ({ title: d[0], z: 3 }) %}
  | "," INT NL:? _ "<underdeep>" {% (d) => ({ title: array2String(d), z: parseInt(String(3) + String(d[1]), 10)}) %}

  #Abyss
  | ",abyss" {% (d) => ({ title: d[0], z: 4 }) %}
  | "," INT NL:? _ "<abyss>" {% (d) => ({ title: array2String(d), z: parseInt(String(4) + String(d[1]), 10)}) %}