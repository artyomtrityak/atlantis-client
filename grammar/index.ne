@{%
  const factionProcessor = (d, i, reject) => {
    return {
      type: "FACTION",
      factionName: d[0].join(""),
      factionNumber: d[2]
    };
  }

  const dateProcessor = (d, i, reject) => {
    return {
      type: "DATE",
      month: d[0].join(""),
      day: d[2]
    };
  }
%}


@builtin "whitespace.ne" # `_` means arbitrary amount of whitespace
@builtin "number.ne"     # `int`, `decimal`, and `percentage` number primitives

ReportParser ->
  "Atlantis Report For:"
  _NL:+
  ReportFaction
  _NL:+
  ReportDate

ReportFaction ->
  [a-zA-Z]:+ " (" int ")" {% factionProcessor %}

ReportDate ->
  [a-zA-Z]:+ ", Year " int {% dateProcessor %}

_NL -> "\n"