@include "../grammar-shared/index.ne"

@{%
  const unitParser = (d) => {
    // console.log("U1", d);
    return d;
  }

  const objectParser = (d) => {
    // console.log("O1", d);
    return d;
  }

  const unitSkills = (d) => {
    console.log("SKILLS:", d);
    return array2String(d);
  }

  const unitFaction = (d) => {
    return array2String(d);
  }

  const unitName = (d) => {
    return array2String(d);
  }

  const unitFlags = (d) => {
    return d;
  }

  const unitItems = (d) => {
    return d;
  }

  const unitWeight = (d) => {
    return d;
  }

  const unitCanStudy = (d) => {
    return d;
  }
%}

UNIT_PARSER ->
  UNIT_PARSER_ITEMS {% unitParser %}
  | [+] __ TEXT "." {% objectParser %}

UNIT_PARSER_ITEMS ->
  [*-] __ UNIT_NAME UNIT_SECTION:+ {% (d) => {
    // console.log("SECTION:", d);
    return d;
  } %}

UNIT_SECTION ->
  UNIT_SECTION_ITEM

UNIT_SECTION_ITEM ->
  __ UNIT_SKILLS "." {% unitSkills %}
  | __ UNIT_SKILLS ";" UNIT_COMMENT {% unitSkills %}

  | __ UNIT_CAN_STUDY "." {% unitCanStudy %}
  | __ UNIT_CAN_STUDY ";" UNIT_COMMENT {% unitCanStudy %}

  | __ UNIT_COMBAT_SPELL "."
  | __ UNIT_COMBAT_SPELL ";" UNIT_COMMENT

  | __ UNIT_FACTION_NAME
  
  | __ UNIT_FLAGS [.,] {% unitFlags %}
  | __ UNIT_FLAGS ";" UNIT_COMMENT {% unitFlags %}
  
  | __ UNIT_ITEM [.,] {% unitItems %}
  | __ UNIT_ITEM ";" UNIT_COMMENT {% unitItems %}

  | __ UNIT_WEIGHT {% unitWeight %}
  | __ UNIT_CAPACITY
  | __ UNIT_UPKEEP


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
  | "consuming" __ "faction's" __ "food" {% () => ({ type: "FLAG", name: "consuming", subtype: "faction" }) %}
  | "consuming" __ "unit's" __ "food" {% () => ({ type: "FLAG", name: "consuming", subtype: "unit" }) %}
  | "sharing" {% () => ({ type: "FLAG", name: "sharing" }) %}
  | "revealing" __ "faction" {% () => ({ type: "FLAG", name: "visibility", subtype: "reveal_faction" }) %}
  | "walking" __ "battle" __ "spoils" {% () => ({ type: "FLAG", name: "spoils", subtype: "walking" }) %}
  | "weightless" __ "battle" __ "spoils" {% () => ({ type: "FLAG", name: "spoils", subtype: "weightless" }) %}
  | "riding" __ "battle" __ "spoils" {% () => ({ type: "FLAG", name: "spoils", subtype: "riding" }) %}
  | "flying" __ "battle" __ "spoils" {% () => ({ type: "FLAG", name: "spoils", subtype: "flying" }) %}
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
  "Weight:" __ INT [.;]


UNIT_CAPACITY ->
  "Capacity:" __ INT "/" INT "/" INT "/" INT [.;]


UNIT_UPKEEP ->
  "Upkeep:" __ "$" INT [.;]


UNIT_COMMENT ->
  BLOB {% (d) => {
    console.log("COMMENT:", d);
    return d;
  } %}


LC_WORDS ->
  LC_WORD
  | LC_WORD __ LC_WORDS


LC_WORD ->
  [a-z\-]:+