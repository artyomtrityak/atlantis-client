@{%
  const skillsProcessor = (d) => {
    return {
      type: "SKILLS",
      skills: d[2]
    };
  };
%}

FACTION_SKILLS ->
  "Skill reports:" NL_
  FACTION_SKILL:+
  {% skillsProcessor %}


FACTION_SKILL ->
  TEXT "." NL NL
  #TEXT ":" __ TEXT NL_ {% (d) => ({ skillName: d[0], description: d[3] }) %}