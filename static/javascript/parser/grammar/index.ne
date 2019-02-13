@include "../grammar-shared/index.ne"
@include "./general.ne"
@include "./errors.ne"
@include "./battles.ne"
@include "./events.ne"
@include "./skills.ne"
@include "./items.ne"
@include "./objects.ne"
@include "./regions.ne"
@include "./orders.ne"


REPORT_PARSER ->
  START
  REPORT_FACTION
  REPORT_DATE
  ATL_VERSION
  FACTION_STATUS
  FACTION_ORIENTATION:?
  FACTION_ERRORS:?
  FACTION_BATTLES:?
  FACTION_EVENTS:?
  FACTION_SKILLS:?
  FACTION_ITEMS:?
  FACTION_OBJECTS:?
  FACTION_ATTITUDES:?
  FACTION_UNCLAIMED
  FACTION_REGIONS
  FACTION_ORDERS_TEMPLATE
  {% filterEmpty %}

START ->
  "Atlantis Report For:" NL_ {% noop %}







