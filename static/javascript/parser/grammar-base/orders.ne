@{%
  const ordersTemplateUnitProcessor = (d) => {
    return {
      unitId: d[2],
      orders: d[4]
    };
  }

  const ordersTemplateProcessor = (d) => {
    return {
      type: "ORDERS_TEMPLATE",
      factionNumber: d[4],
      factionPassword: array2String(d[7]),
      orders: d[10]
    };
  };
%}


# ------------------------------------------------------------
# ORDERS TEMPLATE
# ------------------------------------------------------------
FACTION_ORDERS_TEMPLATE ->
  "Orders Template (Long Format):" NL_
  "#atlantis" _ INT _ "\"" TEXT "\"" NL_
  FACTION_ORDERS_TEMPLATE_REGION:+
  "#end" NL:*
  {% ordersTemplateProcessor %}


#TODO: fix FACTION_ORDERS_REGION_TEXT, make generic new line or somethng else
FACTION_ORDERS_TEMPLATE_REGION ->
  ";***" _ TEXT _ REGION_COORDINATES _ FACTION_ORDERS_REGION_TEXT [ \n;]:+ "***" NL_
  FACTION_ORDERS_TEMPLATE_UNIT:+ {% (d) => d[10] %}

FACTION_ORDERS_REGION_TEXT ->
  WORD
  | WORD __ FACTION_ORDERS_REGION_TEXT {% array2String %}
  | WORD NL ";" __ FACTION_ORDERS_REGION_TEXT {% array2String %}


FACTION_ORDERS_TEMPLATE_UNIT ->
  "unit" _ INT NL_
  FACTION_ORDERS_TEMPLATE_UNIT_DETAILS:+
  [\n]:* {% ordersTemplateUnitProcessor %}


FACTION_ORDERS_TEMPLATE_UNIT_DETAILS ->
  BLOB NL {% array2String %}