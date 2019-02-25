@{%
  const sectionObjectParser = (d) => {
    return d;
  }
%}

OBJECT_PARSER_ITEMS ->
  [+] __ TEXT "." {% sectionObjectParser %}