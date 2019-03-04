@{%
  const sectionUnitParser = (d) => {
    return {
      type: "UNIT",
      unitName: d[2].unitName,
      unitId: d[2].unitId,
      faction: d[4],
      unitDetails: d[5]
    }
  }

  const unitSkills = (d) => {
    // TODO: comments!!!
    return {
      type: "SKILLS",
      skills: d[1][1]
    };
  }

  const unitSkill = (d) => {
    return {
      skill: array2String(d[1]),
      code: d[4],
      level: d[7],
      exp: d[10]
    };
  }

  const unitFaction = (d) => {
    return {
      type: "FACTION",
      factionName: array2String(d[1]),
      factionId: d[4]
    };
  }

  const unitName = (d) => {
    return {
      type: "UNIT_NAME",
      unitName: array2String(d[0]),
      unitId: d[3]
    };
  }

  const unitFlags = (d) => {
    // TODO: comments!!!
    return {
      type: "UNIT_FLAG",
      flag: d[1].name
    };
  }

  const unitItems = (d) => {
    // TODO: comments!!!
    return {
      type: "UNIT_ITEM",
      item: d[1]
    };
  }

  const unitWeight = (d) => {
    return {
      type: "WEIGHT",
      weight: d[1][2]
    };
  }

  const unitCapacity = (d) => {
    return {
      type: "CAPACITY",
      fly: d[1][2],
      ride: d[1][4],
      walk: d[1][6],
      swim: d[1][8]
    };
  }

  const unitCanStudy = (d) => {
    return {
      type: "CAN_STUDY",
      text: array2String(d)
    };
  }

  const unitCombatSpell = (d) => {
    return {
      type: "COMBAT_SPELL",
      spell: array2String(d[3])
    };
  };

  const commentParser = (d) => {
    return {
      type: "COMMENT",
      text: array2String(d)
    }
  };
  
  const unitUpkeep = (d) => {
    return {
      type: "UPKEEP",
      value: d[1][3]
    };
  }
%}


UNIT_PARSER_ITEMS ->
  [*-] __ UNIT_NAME UNIT_FLAGS_ONGUARD:? UNIT_FACTION_NAME:? UNIT_SECTION:+ {% sectionUnitParser %}


UNIT_SECTION ->
  UNIT_SECTION_ITEM {% (d) => d[0] %}


UNIT_SECTION_ITEM ->
  __ UNIT_SKILLS "." {% unitSkills %}
  | __ UNIT_SKILLS ";" UNIT_COMMENT {% unitSkills %}

  | __ UNIT_CAN_STUDY "." {% unitCanStudy %}
  | __ UNIT_CAN_STUDY ";" UNIT_COMMENT {% unitCanStudy %}

  | __ UNIT_COMBAT_SPELL "." {% unitCombatSpell %}
  | __ UNIT_COMBAT_SPELL ";" UNIT_COMMENT {% unitCombatSpell %}
  
  | __ UNIT_FLAGS [.,] {% unitFlags %}
  | __ UNIT_FLAGS ";" UNIT_COMMENT {% unitFlags %}
  
  | __ UNIT_ITEM [.,] {% unitItems %}
  | __ UNIT_ITEM ";" UNIT_COMMENT {% unitItems %}

  | __ UNIT_WEIGHT "." {% unitWeight %}
  | __ UNIT_WEIGHT ";" UNIT_COMMENT {% unitWeight %}

  | __ UNIT_CAPACITY "." {% unitCapacity %}
  | __ UNIT_CAPACITY ";" UNIT_COMMENT {% unitCapacity %}

  | __ UNIT_UPKEEP "." {% unitUpkeep %}
  | __ UNIT_UPKEEP ";" UNIT_COMMENT {% unitUpkeep %}


UNIT_NAME ->
  [^,():;]:+ __ "(" INT ")" "," {% unitName %}


UNIT_FACTION_NAME ->
  __ [^,.():;]:+ __ "(" INT ")" "," {% unitFaction %}


UNIT_FLAGS ->
  "taxing" {% () => ({ type: "FLAG", name: "taxing" }) %}
  | "avoiding" {% () => ({ type: "FLAG", name: "avoiding" }) %}
  | "on" __ "guard" {% () => ({ type: "FLAG", name: "guard" }) %}
  | "behind" {% () => ({ type: "FLAG", name: "behind" }) %}
  | "holding" {% () => ({ type: "FLAG", name: "holding" }) %}
  | "consuming" __ "faction's" __ "food" {% () => ({ type: "FLAG", name: "consuming_faction" }) %}
  | "consuming" __ "unit's" __ "food" {% () => ({ type: "FLAG", name: "consuming_unit" }) %}
  | "sharing" {% () => ({ type: "FLAG", name: "sharing" }) %}
  | "revealing" __ "faction" {% () => ({ type: "FLAG", name: "visibility_reveal_faction" }) %}
  | "revealing" __ "unit" {% () => ({ type: "FLAG", name: "visibility_reveal_unit" }) %}
  | "walking" __ "battle" __ "spoils" {% () => ({ type: "FLAG", name: "spoils_walking" }) %}
  | "weightless" __ "battle" __ "spoils" {% () => ({ type: "FLAG", name: "spoils_weightless" }) %}
  | "riding" __ "battle" __ "spoils" {% () => ({ type: "FLAG", name: "spoils_riding" }) %}
  | "flying" __ "battle" __ "spoils" {% () => ({ type: "FLAG", name: "spoils_flying" }) %}
  | "receiving" __ "no" __ "aid" {% () => ({ type: "FLAG", name: "noaid" }) %}

UNIT_FLAGS_ONGUARD ->
  __ "on" __ "guard," {% () => ({ type: "FLAG", name: "guard" }) %}


UNIT_SKILLS ->
  "Skills:" UNIT_SKILL:+

UNIT_SKILL ->
  _:* "none"
  | _:* LC_WORDS __ "[" WORD "]" __ INT __ "(" INT ")" [,]:? {% unitSkill %}


UNIT_CAN_STUDY ->
  "Can" __ "Study:" [^.;]:+ {% array2String %}


UNIT_COMBAT_SPELL ->
  "Combat" __ "spell:" [^.;]:+


UNIT_ITEM ->
  INT __ LC_WORDS __ "[" WORD "]" {% array2String %}
  | LC_WORDS __ "[" WORD "]" {% array2String %}


UNIT_WEIGHT ->
  "Weight:" __ INT


UNIT_CAPACITY ->
  "Capacity:" __ INT "/" INT "/" INT "/" INT


UNIT_UPKEEP ->
  "Upkeep:" __ "$" INT


UNIT_COMMENT ->
  BLOB {% (d) => ({ type: "COMMENT", comment: array2String(d) }) %}
