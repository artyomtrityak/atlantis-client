@{%
  const errorsProcessor = (d) => {
    return {
      type: "ERRORS",
      errors: d[2][0].map((err) => err[0])
    };
  }
%}

# ------------------------------------------------------------
# FACTION ERRORS
# ------------------------------------------------------------
FACTION_ERRORS ->
  "Errors during turn:"
  NL
  FACTION_ERRORS_ITEMS
  NL_
  {% errorsProcessor %}


FACTION_ERRORS_ITEMS ->
  (SENTENCE NL):+