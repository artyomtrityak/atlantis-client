@include "../grammar-shared/index.ne"

@{%
  const unitParser = (d) => {
    return d;
  }

  const objectParser = (d) => {
    return d;
  }

  const sectionParser = (d) => {
    return {
      unitName: d[2].unitName,
      unitId: d[2].unitId,
      unitDetails: d[3]
    }
  }

  const unitSkills = (d) => {
    return {
      type: "SKILLS",
      skills: array2String(d)
    };
  }

  const unitFaction = (d) => {
    return {
      type: "FACTION",
      factionName: array2String(d[0]),
      factionId: d[3]
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
    return {
      type: "UNIT_FLAG",
      flag: d[1].name
    };
  }

  const unitItems = (d) => {
    return {
      type: "UNIT_ITEM",
      item: d[1]
    };
  }

  const unitWeight = (d) => {
    return {
      type: "WEIGHT",
      weight: d[2]
    };
  }

  const unitCapacity = (d) => {
    return {
      type: "CAPACITY",
      walk: d[2],
      ride: d[4],
      fly: d[6],
      swim: d[8]
    };
  }

  const unitUpkeep = (d) => {
    return {
      type: "UPKEEP",
      upkeep: d[3]
    };
  }

  const unitCanStudy = (d) => {
    return d;
  }
%}


UNIT_PARSER ->
  UNIT_PARSER_ITEMS {% unitParser %}
  | [+] __ TEXT "." {% objectParser %}


UNIT_PARSER_ITEMS ->
  [*-] __ UNIT_NAME UNIT_SECTION:+ {% sectionParser %}


UNIT_SECTION ->
  UNIT_SECTION_ITEM {% (d) => d[0] %}


UNIT_SECTION_ITEM ->
  __ UNIT_SKILLS "." {% unitSkills %}
  | __ UNIT_SKILLS ";" UNIT_COMMENT {% unitSkills %}

  | __ UNIT_CAN_STUDY "." {% unitCanStudy %}
  | __ UNIT_CAN_STUDY ";" UNIT_COMMENT {% unitCanStudy %}

  | __ UNIT_COMBAT_SPELL "."
  | __ UNIT_COMBAT_SPELL ";" UNIT_COMMENT

  | __ UNIT_FACTION_NAME {% (d) => d[1] %}
  
  | __ UNIT_FLAGS [.,] {% unitFlags %}
  | __ UNIT_FLAGS ";" UNIT_COMMENT {% unitFlags %}
  
  | __ UNIT_ITEM [.,] {% unitItems %}
  | __ UNIT_ITEM ";" UNIT_COMMENT {% unitItems %}

  | __ UNIT_WEIGHT {% (d) => d[1] %}
  | __ UNIT_CAPACITY {% (d) => d[1] %}
  | __ UNIT_UPKEEP {% (d) => d[1] %}


UNIT_NAME ->
  [^,():;]:+ __ "(" INT ")" "," {% unitName %}


UNIT_FACTION_NAME ->
  [^,.():;]:+ __ "(" INT ")" "," {% unitFaction %}


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


UNIT_SKILLS ->
  "Skills:" [^.;]:+ {% array2String %}


UNIT_CAN_STUDY ->
  "Can" __ "Study:" [^.;]:+ {% array2String %}


UNIT_COMBAT_SPELL ->
  "Combat" __ "spell:" [^.;]:+


UNIT_ITEM ->
  INT __ LC_WORDS __ "[" WORD "]" {% array2String %}
  | LC_WORDS __ "[" WORD "]" {% array2String %}


UNIT_WEIGHT ->
  "Weight:" __ INT [.;] {% unitWeight %}


UNIT_CAPACITY ->
  "Capacity:" __ INT "/" INT "/" INT "/" INT [.;] {% unitCapacity %}


UNIT_UPKEEP ->
  "Upkeep:" __ "$" INT [.;] {% unitUpkeep %}


UNIT_COMMENT ->
  BLOB {% (d) => {
    return d;
  } %}


LC_WORDS ->
  LC_WORD
  | LC_WORD __ LC_WORDS


LC_WORD ->
  [a-z\-]:+