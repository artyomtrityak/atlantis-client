import nearley from "nearley";
import grammar from "./grammar";

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

// Parse something!
// parser.feed(`Atlantis Report For:
// Ho rd e (17) (War 2, Magic 3)
// November, Year 1

// Atlantis Engine Version: 4.1.0
// Standard Atlantis, Version: 4.1.0

// Faction Status:
// Tax Regions: 23 (24)
// Trade Regions: 0 (0)
// Mages: 3 (3)
// Apprentices: 0 (3)

// Your faction is evil.

// Errors during turn:
// Unit (386): TAX: Unit cannot tax.
// Unit (780): TAX: Unit cannot tax.
// Unit (1165): TAX: Unit cannot tax.
// Unit (1128): TAX: Unit cannot tax.
// Unit (1664): TAX: Unit cannot tax.
// Unit (2509): TAX: Unit cannot tax.
// Matacius (1189): TAX: Unit cannot tax.
// Unit (2732): BUY: Unit attempted to buy more than it could afford.
// Unit (2938): MOVE: Unit has insufficient movement points; remaining
//   moves queued.
// Unit (3026): MOVE: Unit has insufficient movement points; remaining
//   moves queued.
// Unit (1261): MOVE: Unit has insufficient movement points; remaining
//   moves queued.
// Unit (3056): MOVE: Unit has insufficient movement points; remaining
//   moves queued.
// Unit (3149): MOVE: Unit has insufficient movement points; remaining
//   moves queued.
// Unit (3153): MOVE: Unit has insufficient movement points; remaining
//   moves queued.
// Unit (3068): MOVE: Unit has insufficient movement points; remaining
//   moves queued.
// Unit (238): MOVE: Unit has insufficient movement points; remaining
//   moves queued.
// Unit (1212): MOVE: Unit has insufficient movement points; remaining
//   moves queued.
// Unit (1304): MOVE: Unit has insufficient movement points; remaining
//   moves queued.
// Unit (1233): MOVE: Unit has insufficient movement points; remaining
//   moves queued.
// Unit (1200): MOVE: Unit has insufficient movement points; remaining
//   moves queued.
// Pelvius (1028): STUDY: Doesn't have the pre-requisite skills to study
//   that.

// Battles during turn:
// Unit (1799) attacks Clan of Wild Men (1064) in jungle (73,23) in
//   Donndinon!

// Attackers:
// Unit (1799), nomad [NOMA].
// Unit (1904), 10 nomads [NOMA], combat 2.
// Unit (2734), nomad [NOMA].
// Unit (637), nomad [NOMA].
// Unit (1033), 100 nomads [NOMA].
// Unit (1415), nomad [NOMA], combat 1.
// Unit (1010), tribal elf [TELF], combat 1.

// Defenders:
// Clan of Wild Men (383), 8 wild men [WMAN] (Combat 3/3, Attacks 1, Hits
//   1, Tactics 0).
// Clan of Wild Men (1064), 7 wild men [WMAN] (Combat 3/3, Attacks 1,
//   Hits 1, Tactics 0).

// Round 1:
// Unit (1799) loses 6.
// Clan of Wild Men (1064) loses 7.

// Round 2:
// Unit (1799) loses 4.
// Clan of Wild Men (1064) loses 7.

// Clan of Wild Men (1064) is routed!
// Unit (1799) gets a free round of attacks.
// Clan of Wild Men (1064) loses 1.

// Total Casualties:
// Clan of Wild Men (1064) loses 15.
// Damaged units: 383, 1064.
// Unit (1799) loses 10.
// Damaged units: 1033, 1799.

// Spoils: 442 silver [SILV], wood [WOOD], chain armor [CARM], 2 cashmere
//   [CASH], 3 grain [GRAI].

// Demon (2414) attacks Unit (615) in jungle (66,24) in Sefitat!

// Attackers:
// Demon (2414), demon [DEMO] (Combat 4/4, Attacks 10, Hits 10, Tactics
//   0).

// Defenders:
// Hotulius (1156), 5 tribal elves [TELF], combat 1.
// Unit (615), 14 tribesmen [TMAN], combat 1.
// Unit (2788), leader [LEAD].
// Unit (263), behind, 42 horses [HORS], nomad [NOMA], sword [SWOR].
// Vermulius (1173), leader [LEAD], mithril sword [MSWO], combat 5,
//   riding 4.
// Paenia (1169), behind, leader [LEAD], mithril sword [MSWO], tactics 3,
//   combat 5, riding 4.
// Capania (1344), tribal elf [TELF], 10 horses [HORS], combat 1.
// Unit (925), 100 leaders [LEAD], sword [SWOR], combat 4.
// Unit (972), 100 tribesmen [TMAN], sword [SWOR], combat 1.
// Unit (976), 100 tribesmen [TMAN], combat 1.
// Unit (1982), 100 tribesmen [TMAN], combat 1.
// Unit (2263), leader [LEAD].
// Unit (1993), leader [LEAD], tactics 3.
// Unit (1200), nomad [NOMA], 2 horses [HORS].

// Unit (615) gets a free round of attacks.
// Demon (2414) loses 1.

// Demon (2414) is destroyed!
// Total Casualties:
// Demon (2414) loses 1.
// Damaged units: 2414.
// Unit (615) loses 0.

// Spoils: 563 silver [SILV], 11 floater hides [FLOA].

// Festius (1107) attacks City Guard (53) in jungle (72,26) in Donndinon!

// Attackers:
// Festius (1107), 27 sea elves [SELF].
// Pelvius (1028), behind, leader [LEAD], eagle [EAGL] (Combat 2/2,
//   Attacks 1, Hits 1, Tactics 2), 3 dragons [DRAG] (Combat 6/6, Attacks
//   50, Hits 50, Tactics 4), 2 mithril swords [MSWO].
// Antilevus (1225), behind, leader [LEAD], horse [HORS], tactics 5,
//   combat 1, riding 5.

// Defenders:
// City Guard (53), 120 leaders [LEAD], 120 swords [SWOR], combat 3.

// Festius (1107) gets a free round of attacks.
// Dragon controlled by Pelvius (1028) breathes Fire, killing 22.
// Dragon controlled by Pelvius (1028) breathes Fire, killing 17.
// Pelvius (1028) shoots a Fireball, killing 7.
// Dragon controlled by Pelvius (1028) breathes Fire, killing 21.
// City Guard (53) loses 105.

// City Guard (53) is routed!
// Festius (1107) gets a free round of attacks.
// Dragon controlled by Pelvius (1028) breathes Fire, killing 15.
// City Guard (53) loses 15.

// Total Casualties:
// City Guard (53) loses 120.
// Damaged units: 53.
// Festius (1107) loses 0.

// Spoils: 3000 silver [SILV], 60 swords [SWOR].

// Giant Birds (367) attacks Unit (1992) in mountain (72,36) in Gededyki!

// Attackers:
// Giant Birds (367), roc [ROC] (Combat 4/4, Attacks 15, Hits 15, Tactics
//   4).

// Defenders:
// Unit (1992), barbarian [BARB], combat 1.

// Giant Birds (367) gets a free round of attacks.
// Unit (1992) loses 1.

// Unit (1992) is destroyed!
// Total Casualties:
// Unit (1992) loses 1.
// Damaged units: 1992.
// Giant Birds (367) loses 0.

// Spoils: 25 silver [SILV].

// Events during turn:

// `);

parser.feed(`Atlantis Report For:
Gragblod (7) (War 2, Magic 3)
May, Year 8

Atlantis Engine Version: 4.1.0
Standard Atlantis, Version: 4.1.0

Faction Status:
Tax Regions: 23 (24)
Trade Regions: 0 (0)
Mages: 3 (3)

Errors during turn:
Unit (386): TAX: Unit cannot tax.
Unit (780): TAX: Unit cannot tax.
Unit (1165): TAX: Unit cannot tax.
Unit (1128): TAX: Unit cannot tax.
Unit (1664): TAX: Unit cannot tax.
Unit (2509): TAX: Unit cannot tax.
Matacius (1189): TAX: Unit cannot tax.
Unit (2732): BUY: Unit attempted to buy more than it could afford.
Unit (2938): MOVE: Unit has insufficient movement points; remaining
  moves queued.
Unit (3026): MOVE: Unit has insufficient movement points; remaining
  moves queued.
Unit (1261): MOVE: Unit has insufficient movement points; remaining
  moves queued.
Unit (3056): MOVE: Unit has insufficient movement points; remaining
  moves queued.
Unit (3149): MOVE: Unit has insufficient movement points; remaining
  moves queued.
Unit (3153): MOVE: Unit has insufficient movement points; remaining
  moves queued.
Unit (3068): MOVE: Unit has insufficient movement points; remaining
  moves queued.
Unit (238): MOVE: Unit has insufficient movement points; remaining
  moves queued.
Unit (1212): MOVE: Unit has insufficient movement points; remaining
  moves queued.
Unit (1304): MOVE: Unit has insufficient movement points; remaining
  moves queued.
Unit (1233): MOVE: Unit has insufficient movement points; remaining
  moves queued.
Unit (1200): MOVE: Unit has insufficient movement points; remaining
  moves queued.
Pelvius (1028): STUDY: Doesn't have the pre-requisite skills to study
  that.

Battles during turn:
Unit (1799) attacks Clan of Wild Men (1064) in jungle (73,23) in
  Donndinon!

Attackers:
Unit (1799), nomad [NOMA].
Unit (1904), 10 nomads [NOMA], combat 2.
Unit (2734), nomad [NOMA].
Unit (637), nomad [NOMA].
Unit (1033), 100 nomads [NOMA].
Unit (1415), nomad [NOMA], combat 1.
Unit (1010), tribal elf [TELF], combat 1.

Defenders:
Clan of Wild Men (383), 8 wild men [WMAN] (Combat 3/3, Attacks 1, Hits
  1, Tactics 0).
Clan of Wild Men (1064), 7 wild men [WMAN] (Combat 3/3, Attacks 1,
  Hits 1, Tactics 0).

Round 1:
Unit (1799) loses 6.
Clan of Wild Men (1064) loses 7.

Round 2:
Unit (1799) loses 4.
Clan of Wild Men (1064) loses 7.

Clan of Wild Men (1064) is routed!
Unit (1799) gets a free round of attacks.
Clan of Wild Men (1064) loses 1.

Total Casualties:
Clan of Wild Men (1064) loses 15.
Damaged units: 383, 1064.
Unit (1799) loses 10.
Damaged units: 1033, 1799.

Spoils: 442 silver [SILV], wood [WOOD], chain armor [CARM], 2 cashmere
  [CASH], 3 grain [GRAI].

Demon (2414) attacks Unit (615) in jungle (66,24) in Sefitat!

Attackers:
Demon (2414), demon [DEMO] (Combat 4/4, Attacks 10, Hits 10, Tactics
  0).

Defenders:
Hotulius (1156), 5 tribal elves [TELF], combat 1.
Unit (615), 14 tribesmen [TMAN], combat 1.
Unit (2788), leader [LEAD].
Unit (263), behind, 42 horses [HORS], nomad [NOMA], sword [SWOR].
Vermulius (1173), leader [LEAD], mithril sword [MSWO], combat 5,
  riding 4.
Paenia (1169), behind, leader [LEAD], mithril sword [MSWO], tactics 3,
  combat 5, riding 4.
Capania (1344), tribal elf [TELF], 10 horses [HORS], combat 1.
Unit (925), 100 leaders [LEAD], sword [SWOR], combat 4.
Unit (972), 100 tribesmen [TMAN], sword [SWOR], combat 1.
Unit (976), 100 tribesmen [TMAN], combat 1.
Unit (1982), 100 tribesmen [TMAN], combat 1.
Unit (2263), leader [LEAD].
Unit (1993), leader [LEAD], tactics 3.
Unit (1200), nomad [NOMA], 2 horses [HORS].

Unit (615) gets a free round of attacks.
Demon (2414) loses 1.

Demon (2414) is destroyed!
Total Casualties:
Demon (2414) loses 1.
Damaged units: 2414.
Unit (615) loses 0.

Spoils: 563 silver [SILV], 11 floater hides [FLOA].

Festius (1107) attacks City Guard (53) in jungle (72,26) in Donndinon!

Attackers:
Festius (1107), 27 sea elves [SELF].
Pelvius (1028), behind, leader [LEAD], eagle [EAGL] (Combat 2/2,
  Attacks 1, Hits 1, Tactics 2), 3 dragons [DRAG] (Combat 6/6, Attacks
  50, Hits 50, Tactics 4), 2 mithril swords [MSWO].
Antilevus (1225), behind, leader [LEAD], horse [HORS], tactics 5,
  combat 1, riding 5.

Defenders:
City Guard (53), 120 leaders [LEAD], 120 swords [SWOR], combat 3.

Festius (1107) gets a free round of attacks.
Dragon controlled by Pelvius (1028) breathes Fire, killing 22.
Dragon controlled by Pelvius (1028) breathes Fire, killing 17.
Pelvius (1028) shoots a Fireball, killing 7.
Dragon controlled by Pelvius (1028) breathes Fire, killing 21.
City Guard (53) loses 105.

City Guard (53) is routed!
Festius (1107) gets a free round of attacks.
Dragon controlled by Pelvius (1028) breathes Fire, killing 15.
City Guard (53) loses 15.

Total Casualties:
City Guard (53) loses 120.
Damaged units: 53.
Festius (1107) loses 0.

Spoils: 3000 silver [SILV], 60 swords [SWOR].

Giant Birds (367) attacks Unit (1992) in mountain (72,36) in Gededyki!

Attackers:
Giant Birds (367), roc [ROC] (Combat 4/4, Attacks 15, Hits 15, Tactics
  4).

Defenders:
Unit (1992), barbarian [BARB], combat 1.

Giant Birds (367) gets a free round of attacks.
Unit (1992) loses 1.

Unit (1992) is destroyed!
Total Casualties:
Unit (1992) loses 1.
Damaged units: 1992.
Giant Birds (367) loses 0.

Spoils: 25 silver [SILV].

Events during turn:
Times reward of 50 silver.
Tirelius (1039): Combat spell set to fire.
Caspus (1040): Combat spell set to fire.
Pelvius (1028): Combat spell set to fire.
The address of The Guardsmen (1) is NoAddress.
The address of Creatures (2) is NoAddress.
The address of Gragblod (7) is gragblod.atlantis@gmail.com.
The address of Multiple Bite Wounds (10) is beigtais@gmail.com.
The address of The Moon Brotherhood (12) is atlantis@garydjones.name.
The address of SuperNerrs 001 (13) is nerrs@com.lmt.lv.
The address of SkyRaiders (14) is Loudeo@ngs.ru.
The address of New Horizons (16) is coolbreezea3@gmail.com.
The address of Grey Wind (17) is atlantis@janka.net.
The address of Warlords Inc (19) is bobcato28@gmail.com.
The address of Sol Invictus (20) is david.of.m00@googlemail.com.
The address of The Testress Slaves (21) is Loria@Phantasia.org.
Aspracus (1067): Gives 30 silver [SILV] to Unit (34).
Unit (21): Gives 152 silver [SILV] to Unit (34).
Unit (23): Gives 44 silver [SILV] to Unit (34).
Unit (23): Gives 2 vikings [VIKI] to Unit (21).
Gula (59): Gives 20 silver [SILV] to Unit (49).
Cuco (32): Gives 169 silver [SILV] to Unit (49).
Cocrius (582): Gives 20 silver [SILV] to Unit (79).

Skill reports:

healing [HEAL] 1: A unit with this skill is able to heal units hurt in
  battle. This skill costs 10 silver per month of study.

herb lore [HERB] 1: This skill deals with all aspects of herb
  production. A unit with this skill may PRODUCE herbs. This skill
  costs 10 silver per month of study.

artifact lore [ARTI] 1: Artifact Lore is one of the most advanced
  forms of magic; in general, creation of an artifact requires both
  Artifact Lore, and the appropriate skill for the item being created.
  A mage with knowledge of the Artifact Lore skill will detect the use
  of Artifact Lore by any other mage in the region. This skill
  requires force [FORC] 1, pattern [PATT] 1, and spirit [SPIR] 1 to
  begin to study. This skill costs 100 silver per month of study.

Item reports:

herb [HERB], weight 0. Units with herb lore [HERB] 1 may PRODUCE this
  item at a rate of 1 per man-month.

Declared Attitudes (default Neutral):
Hostile : none.
Unfriendly : none.
Neutral : none.
Friendly : none.
Ally : none.

Unclaimed silver: 183.

forest (74,0) in Ranshya, 346 peasants (vikings), $1384.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $968).
  Wanted: none.
  For Sale: 69 vikings [VIKI] at $56, 13 leaders [LEAD] at $112.
  Entertainment available: $69.
  Products: 24 grain [GRAI], 26 wood [WOOD], 10 furs [FUR], 17 herbs
    [HERB].

Exits:
  Southeast : forest (75,1) in Ranshya.
  South : mountain (74,2) in Nakyce.
  Southwest : ocean (73,1) in Atlantis Ocean.

* Unit (176), Gragblod (7), revealing faction, 58 silver [SILV], 4
  wood elves [WELF]. Weight: 40. Capacity: 0/0/60/0. Skills: combat
  [COMB] 1 (30).
* Unit (176), Gragblod (7), revealing faction, 58 silver [SILV], 4
  wood elves [WELF]. Weight: 40. Capacity: 0/0/60/0. Skills: combat
  [COMB] 1 (30).

+ Shaft [1] : Shaft, contains an inner location.
  * Unit (33), Gragblod (7), revealing faction, 6 vikings [VIKI], 36
    silver [SILV]. Weight: 60. Capacity: 0/0/90/0. Skills: combat
    [COMB] 1 (30).


forest (74,0) in Ranshya, 346 peasants (vikings), $1384.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $968).
  Wanted: none.
  For Sale: 69 vikings [VIKI] at $56, 13 leaders [LEAD] at $112.
  Entertainment available: $69.
  Products: 24 grain [GRAI], 26 wood [WOOD], 10 furs [FUR], 17 herbs
    [HERB].

Exits:
  Southeast : forest (75,1) in Ranshya.
  South : mountain (74,2) in Nakyce.
  Southwest : ocean (73,1) in Atlantis Ocean.


forest (75,3) in Ranshya, 330 peasants (vikings), $660.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $792).
  Wanted: none.
  For Sale: 66 vikings [VIKI] at $48, 13 leaders [LEAD] at $96.
  Entertainment available: $33.
  Products: 32 grain [GRAI], 25 wood [WOOD], 13 furs [FUR], 16 herbs
    [HERB].

Exits:
  North : forest (75,1) in Ranshya.
  Northeast : forest (76,2) in Ranshya.
  Southeast : forest (76,4) in Ranshya.
  South : ocean (75,5) in Atlantis Ocean.
  Southwest : mountain (74,4) in Nakyce.
  Northwest : mountain (74,2) in Nakyce.

* Unit (75), Gragblod (7), revealing faction, 62 silver [SILV], viking
  [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
  (30).


mountain (74,4) in Nakyce, 359 peasants (hill dwarves), $1436.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $1005).
  Wanted: none.
  For Sale: 71 hill dwarves [HDWA] at $56, 14 leaders [LEAD] at $112.
  Entertainment available: $71.
  Products: 27 grain [GRAI], 32 iron [IRON], 13 stone [STON].

Exits:
  North : mountain (74,2) in Nakyce.
  Northeast : forest (75,3) in Ranshya.
  Southeast : ocean (75,5) in Atlantis Ocean.
  South : mountain (74,6) in Nakyce.
  Southwest : mountain (73,5) in Nakyce, contains Robaedale [city].
  Northwest : ocean (73,3) in Atlantis Ocean.

* Lulius (1133), Gragblod (7), revealing faction, tribesman [TMAN], 4
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (66), Gragblod (7), revealing faction, 2 hill dwarves [HDWA], 8
  silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB]
  1 (30).
- Unit (2728), New Horizons (16), leader [LEAD], horse [HORS].
- Open 1 (2421), on guard, New Horizons (16), leader [LEAD].
- Mini (3081), New Horizons (16), avoiding, 2 hill dwarves [HDWA], 11
  winged horses [WING], 6 mithril [MITH].
- Farmers (2822), New Horizons (16), avoiding, behind, 2 high elves
  [HELF], 4 grain [GRAI].
* Unit (82), Gragblod (7), revealing faction, 4 silver [SILV], hill
  dwarf [HDWA]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
- Odd Farmer (2016), New Horizons (16), avoiding, behind, high elf
  [HELF], winged horse [WING].


tundra (80,4) in Drogbad, 158 peasants (sea elves), $474.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $410).
  Wanted: none.
  For Sale: 31 sea elves [SELF] at $52, 6 leaders [LEAD] at $104.
  Entertainment available: $23.
  Products: 18 livestock [LIVE], 10 furs [FUR], 13 herbs [HERB].

Exits:
  North : ocean (80,2) in Atlantis Ocean.
  Northeast : ocean (81,3) in Atlantis Ocean.
  Southeast : tundra (81,5) in Drogbad.
  South : tundra (80,6) in Drogbad.
  Southwest : tundra (79,5) in Drogbad.
  Northwest : ocean (79,3) in Atlantis Ocean.

* Sonteia (230), Gragblod (7), revealing faction, 3 sea elves [SELF],
  63 silver [SILV]. Weight: 30. Capacity: 0/0/45/0. Skills: combat
  [COMB] 1 (30).
* Unit (192), Gragblod (7), revealing faction, sea elf [SELF], 18
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).


mountain (66,58) in Beaufor, 210 peasants (hill dwarves), $840.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $588).
  Wanted: none.
  For Sale: 42 hill dwarves [HDWA] at $56, 8 leaders [LEAD] at $112.
  Entertainment available: $42.
  Products: 32 livestock [LIVE], 27 iron [IRON], 15 stone [STON].

Exits:
  North : mountain (66,56) in Beaufor.
  Northeast : ocean (67,57) in Atlantis Ocean.
  Southeast : mountain (67,59) in Beaufor.
  South : mountain (66,60) in Beaufor.
  Southwest : ocean (65,59) in Atlantis Ocean.
  Northwest : mountain (65,57) in Beaufor.

* Unit (3123), Gragblod (7), avoiding, revealing faction, receiving no
  aid, nomad [NOMA], 32 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).


mountain (73,5) in Nakyce, contains Robaedale [city], 6474 peasants
  (hill dwarves), $38844.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $20716).
  Wanted: 108 grain [GRAI] at $20, 198 livestock [LIVE] at $24, 160
    fish [FISH] at $27, 61 longbows [LBOW] at $95, 54 chain armor
    [CARM] at $128, 85 wagons [WAGO] at $183, 90 chocolate [CHOC] at
    $131, 75 silk [SILK] at $153.
  For Sale: 56 wine [WINE] at $84, 67 spices [SPIC] at $75, 1294 hill
    dwarves [HDWA] at $64, 258 leaders [LEAD] at $128.
  Entertainment available: $1942.
  Products: 26 grain [GRAI], 21 iron [IRON], 14 stone [STON].

Exits:
  North : ocean (73,3) in Atlantis Ocean.
  Northeast : mountain (74,4) in Nakyce.
  Southeast : mountain (74,6) in Nakyce.
  South : mountain (73,7) in Nakyce.
  Southwest : ocean (72,6) in Atlantis Ocean.
  Northwest : ocean (72,4) in Atlantis Ocean.

- City Guard (11), on guard, 120 leaders [LEAD], 120 swords [SWOR].
* Unit (44), Gragblod (7), revealing faction, 44 hill dwarves [HDWA],
  440 silver [SILV]. Weight: 440. Capacity: 0/0/660/0. Skills:
  entertainment [ENTE] 1 (30).
* Unit (301), Gragblod (7), revealing faction, 10 hill dwarves [HDWA],
  60 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 1 (30).
- Unit (2337), New Horizons (16), avoiding, 6 leaders [LEAD], 12
  winged horses [WING].


Orders Template (Long Format):

#atlantis 7 "xxxxdddpass"

;*** forest (74,0) in Ranshya ***

unit 613
;Blackrock Ranchers Trainee (613), avoiding, behind, revealing faction,
;  holding, consuming faction's food, 5 orcs [ORC]. Weight: 50.
;  Capacity: 0/0/75/0. Upkeep: $50. Skills: ranching [RANC] 1 (30).
@CONSUME FACTION
@BEHIND 1
@HOLD 1
@NOAID 0
@AVOID 1

unit 1021
;Unit (1021), revealing faction, 2 hill dwarves [HDWA], 4 silver
;  [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB] 1
;  (30).
@work

;*** underforest (2,42) in Aberdovey ***

unit 1739
;eye (1739), avoiding, behind, revealing faction, holding, nomad
;  [NOMA], 52 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  observation [OBSE] 2 (90).
@;;[o]
@work

;*** forest (79,9) in Surlanque ***

unit 1058
;Casceius (1058), revealing faction, 2 vikings [VIKI], 8 silver [SILV].
;  Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB] 1 (30).
@work

unit 1508
;Unit (1508), revealing faction, viking [VIKI], 4 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 1420
;Unit (1420), revealing faction, 4 silver [SILV], viking [VIKI].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** forest (81,9,underworld) in Surlanque ***

unit 1192
;Unit (1192), behind, revealing faction, leader [LEAD], 1391 silver
;  [SILV], horse [HORS]. Weight: 60. Capacity: 0/70/85/0. Skills:
;  combat [COMB] 1 (30), tactics [TACT] 5 (450), observation [OBSE] 3
;  (270).
@tax
@study obse

unit 2128
;Unit (2128), avoiding, behind, holding, 4 horses [HORS], wood elf
;  [WELF]. Weight: 210. Capacity: 0/280/295/0. Skills: stealth [STEA] 2
;  (90).
@;;..SellSPIC-4
move 2 IN N
@TURN
move N N
ENDTURN
@TURN
move S S
buy 66 SPIC
ENDTURN
@TURN
move S 1 IN
ENDTURN
@TURN
move SW SW
ENDTURN
@TURN
move SW SW
ENDTURN
@TURN
give 2628 all SPIC
move NE NE
ENDTURN
@TURN
move NE NE
ENDTURN
@TURN
move 2 IN N
ENDTURN

unit 2473
;Guard (2473), on guard, revealing faction, holding, darkman [DMAN], 38
;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
;  1 (30).
@work

#end
`);

// parser.results is an array of possible parsings.
console.log(parser.results); // [[[[ "foo" ],"\n" ]]]

export default parser;
