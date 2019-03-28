@{%
  const battlesProcessor = (d) => {
    return {
      type: "BATTLES",
      battles: d[2]
    };
  }

  const battleProcessor = (d) => {
    const title = array2String(d.slice(0, 22));
    const details = d.slice(23); //TODO: parse details too

    const battle = {
      attackerName: array2String(d[0]),
      attackerNumber: d[3],
      defenderName: array2String(d[8]),
      defenderNumber: d[11],
      location: d[18],
      title,
      details
    };

    return battle;
  };
%}

# ------------------------------------------------------------
# FACTION BATTLES
# ------------------------------------------------------------
FACTION_BATTLES ->
  "Battles during turn:"
  NL
  (FACTION_BATTLE | FACTION_ASSASINATION):+
  NL_
  {% battlesProcessor %}
  

#TODO: change it
FACTION_BATTLE ->
  TEXT __AND_NL "(" INT ")" __AND_NL "attacks" __AND_NL TEXT __AND_NL "(" INT ")" __AND_NL "in" __AND_NL TEXT __AND_NL REGION_COORDINATES __AND_NL TEXT "!" NL_
  "Attackers:" NL
  FACTION_BATTLE_DETAILS:+
  "Defenders:" NL
  FACTION_BATTLE_DETAILS:+
  {% battleProcessor %}


FACTION_ASSASINATION ->
  TEXT __AND_NL "(" INT ")" __AND_NL "is" __AND_NL "assassinated" __AND_NL "in" __AND_NL TEXT __AND_NL REGION_COORDINATES __AND_NL TEXT "!" NL_


FACTION_BATTLE_DETAILS ->
  SENTENCE NL_
  | "Total Casualties:" NL_
  | "Round" _ INT ":" NL