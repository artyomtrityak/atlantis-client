@{%
  const eventsProcessor = (d) => {
    return {
      type: "EVENTS",
      events: d[2][0][0].map((evt) => evt[0])
    };
  }
%}

# ------------------------------------------------------------
# FACTION EVENTS
# ------------------------------------------------------------
FACTION_EVENTS ->
  "Events during turn:"
  NL
  FACTION_EVENTS_ITEMS
  NL_


FACTION_EVENTS_ITEMS ->
  (SENTENCE NL):+