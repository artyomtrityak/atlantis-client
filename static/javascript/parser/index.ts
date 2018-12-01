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

`);

// parser.results is an array of possible parsings.
console.log(parser.results); // [[[[ "foo" ],"\n" ]]]

export default parser;
