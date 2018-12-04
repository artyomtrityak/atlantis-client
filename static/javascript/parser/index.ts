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
Unit (40): Gives 76 silver [SILV] to Unit (79).
Unit (138): Gives 68 silver [SILV] to Unit (79).
Unit (138): Gives viking [VIKI] to Unit (40).
Lulius (1133): Gives 28 silver [SILV] to Unit (82).
Unit (66): Gives 52 silver [SILV] to Unit (82).
Olceius (287): Gives 54 silver [SILV] to Unit (210).
Unit (292): Gives 21 silver [SILV] to Unit (210).
Unit (202): Gives 51 silver [SILV] to Unit (238).
Unit (231): Gives 72 silver [SILV] to Unit (227).
Candidus (198): Gives 2 silver [SILV] to Unit (256).
Unit (596): Gives 20 silver [SILV] to Unit (256).
Unit (847): Gives 211 silver [SILV] to Unit (256).
Unit (74): Gives 220 silver [SILV] to Unit (384).
Unit (74): Gives 70 silver [SILV] to Unit (378).
Unit (74): Gives 30 silver [SILV] to Unit (1071).
Unit (74): Gives 77 hill dwarves [HDWA] to Unit (261).
Unit (74): Gives 760 silver [SILV] to Unit (386).
Unit (1826): Gives 20 silver [SILV] to Funny Guard (3419).
Unit (241): Gives 74 silver [SILV] to Unit (593).
Unit (297): Gives 1000 silver [SILV] to Unit (552).
Unit (786): Gives 100 silver [SILV] to Unit (552).
Unit (552): Gives 30 silver [SILV] to Unit (360).
Unit (552): Gives 30 silver [SILV] to Unit (434).
Unit (240): Gives 30 silver [SILV] to Unit (770).
Unit (240): Gives 220 silver [SILV] to Unit (300).
Unit (240): Gives 500 silver [SILV] to Unit (591).
Unit (240): Gives 960 silver [SILV] to Unit (780).
Unit (240): Gives 960 silver [SILV] to Unit (1165).
Unit (1162): Gives 16 silver [SILV] to Unit (1294).
Unit (645): Gives 160 silver [SILV] to Unit (1294).
Unit (1021): Gives 68 silver [SILV] to Unit (1332).
Unit (635): Gives 70 silver [SILV] to Unit (1332).
Casceius (1058): Gives 56 silver [SILV] to Unit (1420).
Unit (1508): Gives 24 silver [SILV] to Unit (1420).
Unit (296): Gives 112 silver [SILV] to Unit (917).
Unit (1358): Gives 3 silver [SILV] to Unit (863).
Unit (237): Gives 228 silver [SILV] to Unit (917).
Unit (242): Gives 114 silver [SILV] to Unit (917).
Unit (363): Gives 114 silver [SILV] to Unit (917).
Unit (817): Gives 114 silver [SILV] to Unit (917).
Unit (922): Gives 114 silver [SILV] to Unit (863).
Unit (862): Gives 114 silver [SILV] to Unit (917).
Unit (863): Gives 220 silver [SILV] to Unit (1192).
Unit (863): Gives 70 silver [SILV] to Unit (1227).
Unit (863): Gives 8000 silver [SILV] to Unit (917).
Unit (84): Gives 4861 silver [SILV] to Unit (64).
Unit (291): Gives 48 silver [SILV] to Unit (1732).
Unit (185): Gives 60 silver [SILV] to Unit (1732).
Unit (289): Gives 250 silver [SILV] to Unit (1991).
Unit (289): Gives 220 silver [SILV] to Unit (2001).
Unit (289): Gives 70 silver [SILV] to Unit (889).
Unit (2007): Gives 260 silver [SILV] to Unit (1760).
Unit (356): Gives 6 silver [SILV] to Unit (1788).
Unit (171): Gives 60 silver [SILV] to Unit (1788).
Unit (633): Gives 42 silver [SILV] to Unit (1788).
Unit (608): Gives 9 silver [SILV] to Unit (1789).
Unit (768): Gives 63 silver [SILV] to Unit (1789).
Unit (739): Gives 9 silver [SILV] to Unit (1789).
Unit (1510): Gives 4940 silver [SILV] to Unit (1791).
Unit (1101): Gives 54 silver [SILV] to Unit (1792).
Unit (804): Gives 12 silver [SILV] to Unit (1792).
Unit (1272): Gives 26 silver [SILV] to Unit (1792).
Unit (1032): Gives 60 longbows [LBOW] to Unit (872).
Unit (1032): Gives 60 longbows [LBOW] to Unit (1128).
Unit (1032): Gives 300 longbows [LBOW] to Vareius (1492).
Unit (1032): Gives 60 longbows [LBOW] to Unit (1636).
Unit (903): Gives 1300 silver [SILV] to Unit (1032).
Unit (614): Gives 220 silver [SILV] to Unit (168).
Unit (614): Gives 10000 silver [SILV] to Funny Guys (2388).
Unit (614): Gives 500 silver [SILV] to Unit (1395).
Unit (614): Gives 200 silver [SILV] to Unit (1180).
Unit (2129): Gives 10000 silver [SILV] to Funny Guys (2388).
Vareius (1492): Gives 20 horses [HORS] to Unit (614).
Unit (1113): Gives 210 silver [SILV] to Unit (1793).
Unit (1316): Gives 63 silver [SILV] to Unit (1793).
Unit (2152): Gives 42 silver [SILV] to Unit (1793).
Unit (1667): Gives 4968 silver [SILV] to Unit (2262).
Etrius (1137): Receives 5 crossbows [XBOW] from Unit (2762).
Unit (2815): Gives 50 silver [SILV] to Farmer (2208).
Unit (2815): Gives 70 silver [SILV] to Farmer (2209).
Unit (2815): Gives 70 silver [SILV] to Farmer (3087).
Unit (2815): Gives 100 silver [SILV] to Hproducer (2054).
Unit (2815): Gives 4000 silver [SILV] to Hproducer (2054).
Unit (208): Gives 30000 silver [SILV] to Papurius (1242).
Unit (208): Gives 1500 silver [SILV] to Unit (1235).
Unit (208): Gives 1500 silver [SILV] to Unit (1271).
Unit (923): Gives 30000 silver [SILV] to Papurius (1242).
Unit (923): Gives 1500 silver [SILV] to Unit (1286).
Unit (923): Gives 1500 silver [SILV] to Unit (1354).
Unit (923): Gives 1500 silver [SILV] to Unit (1414).
Unit (923): Gives 1500 silver [SILV] to Unit (1416).
Unit (2841): Gives 5000 silver [SILV] to Funny  (3425).
Papurius (1242): Gives 50 swords [SWOR] to Unit (208).
Papurius (1242): Gives 146 horses [HORS] to Unit (208).
Papurius (1242): Gives 141 horses [HORS] to Unit (923).
Unit (1468): Gives 40 silver [SILV] to Horse Guy (2740).
Unit (235): Gives 300 silver [SILV] to Unit (2165).
Unit (235): Gives 500 silver [SILV] to Gratera (1349).
Unit (235): Gives 5000 silver [SILV] to Unit (890).
Unit (235): Gives 5000 silver [SILV] to Unit (1025).
Unit (235): Gives 5000 silver [SILV] to Unit (1115).
Gratera (1349): Receives 2 winged horses [WING] from Unit (3327).
Cullius (1140): Receives 2 winged horses [WING] from Unit (3327).
Unit (1433): Gives 50 horses [HORS] to Unit (235).
Unit (191): Gives 110 horses [HORS] to Unit (235).
Manius (908): Gives 400 silver [SILV] to Unit (1341).
Manius (908): Gives 400 silver [SILV] to Unit (1277).
Manius (908): Gives 200 silver [SILV] to Jallius (1186).
Manius (908): Gives 10000 silver [SILV] to Truffles (1859).
Salecia (1236): Gives 5338 silver [SILV] to Manius (908).
Unit (1055): Gives 1000 silver [SILV] to Unit (1664).
Unit (1055): Gives 2000 silver [SILV] to Unit (1724).
Unit (1055): Gives 1000 silver [SILV] to Unit (1237).
Unit (579): Gives 2000 silver [SILV] to Unit (962).
Unit (579): Gives 2 crossbows [XBOW] to Unit (962).
Unit (579): Gives 99 horses [HORS] to Unit (962).
Unit (579): Gives 44 swords [SWOR] to Unit (1051).
Unit (579): Gives 44 crossbows [XBOW] to Unit (1051).
Ortia (1082): Gives 220 silver [SILV] to Unit (215).
Ortia (1082): Gives 10000 silver [SILV] to Unit (579).
Unit (1633): Gives 2000 silver [SILV] to Unit (579).
Unit (1783): Gives 4400 silver [SILV] to Unit (579).
Unit (1851): Gives 4400 silver [SILV] to Unit (579).
Unit (1051): Gives horse [HORS] to Unit (962).
Unit (1051): Gives horse [HORS] to Unit (2509).
Cateius (1388): Receives 15 horses [HORS] from Unit (2536).
Unit (1650): Gives livestock [LIVE] to Unit (2777).
Unit (2814): Gives 2 chocolate [CHOC] to Unit (2777).
Unit (2814): Gives 4 livestock [LIVE] to Unit (2777).
Unit (2814): Gives tarot cards [TARO] to Unit (2777).
Unit (1444): Gives 50 silver [SILV] to Consolidated (2730).
Allia (1265): Gives 170 silver [SILV] to Rawhide (3028).
Allia (1265): Gives 140 silver [SILV] to Hors Teach (3088).
Unit (1822): Receives 2 winged horses [WING] from Unit (3332).
Unit (1662): Gives 27 horses [HORS] to Unit (1467).
Unit (1662): Receives 9 horses [HORS] from Unit (2503).
Gasceius (1208): Gives 220 silver [SILV] to Sonnius (1644).
Justinia (1229): Gives 45 silver [SILV] to Atratian (1240).
Justinia (1229): Gives 3 double bows [DBOW] to Cnician (1179).
Justinia (1229): Gives mithril armor [MARM] to Ilfius (1094).
Justinia (1229): Gives 3 chocolate [CHOC] to Cnician (1179).
Justinia (1229): Gives 5 figurines [FIGU] to Cnician (1179).
Justinia (1229): Gives 11 floater hides [FLOA] to Cnician (1179).
Justinia (1229): Gives herb [HERB] to Cnician (1179).
Justinia (1229): Gives 23 ironwood [IRWD] to Cnician (1179).
Justinia (1229): Gives 2 jewelry [JEWE] to Cnician (1179).
Justinia (1229): Gives 4 livestock [LIVE] to Cnician (1179).
Justinia (1229): Gives 8 mithril [MITH] to Cnician (1179).
Justinia (1229): Gives 21 rootstone [ROOT] to Cnician (1179).
Justinia (1229): Gives stone [STON] to Cnician (1179).
Justinia (1229): Gives 4 velvet [VELV] to Cnician (1179).
Justinia (1229): Gives vodka [VODK] to Cnician (1179).
Justinia (1229): Gives 2 wagons [WAGO] to Cnician (1179).
Justinia (1229): Gives 2 wood [WOOD] to Cnician (1179).
Justinia (1229): Gives 8 yew [YEW] to Cnician (1179).
Unit (1787): Gives 3500 silver [SILV] to Atratian (1240).
Ilfius (1094): Gives 500 silver [SILV] to Unit (1670).
Ilfius (1094): Gives 35000 silver [SILV] to Atratian (1240).
Ilfius (1094): Gives winged horse [WING] to Cnician (1179).
Ilfius (1094): Gives 7 double bows [DBOW] to Cnician (1179).
Ilfius (1094): Gives 3 floater hides [FLOA] to Cnician (1179).
Ilfius (1094): Gives 6 ironwood [IRWD] to Cnician (1179).
Ilfius (1094): Gives 2 mithril [MITH] to Cnician (1179).
Ilfius (1094): Gives 6 rootstone [ROOT] to Cnician (1179).
Ilfius (1094): Gives 2 yew [YEW] to Cnician (1179).
Cnician (1179): Gives 126 silver [SILV] to Atratian (1240).
Unit (278): Gives 3500 silver [SILV] to Atratian (1240).
Unit (278): Gives 2 rootstone [ROOT] to Cnician (1179).
Unit (281): Gives 3500 silver [SILV] to Atratian (1240).
Unit (281): Gives ironwood [IRWD] to Cnician (1179).
Unit (281): Gives rootstone [ROOT] to Cnician (1179).
Unit (2188): Gives 3500 silver [SILV] to Atratian (1240).
Unit (1723): Gives 10000 silver [SILV] to Jucucolius (352).
Unit (2858): Gives 2176 silver [SILV] to Unit (2280).
Trupsilius (584): Gives 120 silver [SILV] to Unit (1200).
Unit (299): Gives 75 silver [SILV] to Unit (1200).
Unit (925): Gives 11000 silver [SILV] to Unit (1200).
Unit (925): Gives 2 dye [DYE] to Unit (299).
Unit (925): Gives 2 livestock [LIVE] to Unit (299).
Unit (925): Gives wagon [WAGO] to Unit (299).
Unit (925): Gives wood [WOOD] to Unit (299).
Unit (972): Gives 6017 silver [SILV] to Unit (1200).
Unit (972): Gives figurines [FIGU] to Unit (299).
Unit (972): Gives 5 livestock [LIVE] to Unit (299).
Unit (972): Gives stone [STON] to Unit (299).
Unit (972): Gives 2 wood [WOOD] to Unit (299).
Unit (976): Gives 6046 silver [SILV] to Unit (1200).
Unit (976): Gives 2 dye [DYE] to Unit (299).
Unit (976): Gives 2 livestock [LIVE] to Unit (299).
Unit (976): Gives wood [WOOD] to Unit (299).
Unit (1982): Gives 6038 silver [SILV] to Unit (1200).
Unit (1982): Gives dye [DYE] to Unit (299).
Unit (1982): Gives 2 figurines [FIGU] to Unit (299).
Unit (1982): Gives 3 livestock [LIVE] to Unit (299).
Unit (1982): Gives tarot cards [TARO] to Unit (299).
Unit (1982): Gives wood [WOOD] to Unit (299).
Unit (2263): Gives 2500 silver [SILV] to Unit (1200).
Unit (1993): Gives 2500 silver [SILV] to Unit (1200).
Hatunius (1287): Gives rootstone [ROOT] to Unit (586).
Hatunius (1287): Gives 2 swords [SWOR] to Unit (616).
Octetius (1378): Gives 2 rootstone [ROOT] to Unit (586).
Octetius (1378): Gives 4 swords [SWOR] to Unit (616).
Marens (1385): Gives sword [SWOR] to Unit (616).
Marens (1385): Gives yew [YEW] to Unit (586).
Safurnius (1290): Gives mithril sword [MSWO] to Unit (616).
Sylius (1391): Gives mithril [MITH] to Unit (586).
Sylius (1391): Gives sword [SWOR] to Unit (616).
Sylius (1391): Gives yew [YEW] to Unit (586).
Unit (1154): Gives rootstone [ROOT] to Unit (586).
Unit (1154): Gives 10 horses [HORS] to Safurnius (1290).
Unit (1154): Gives 10 horses [HORS] to Marens (1385).
Unit (1154): Gives 10 horses [HORS] to Sylius (1391).
Unit (1154): Gives horse [HORS] to Unit (1878).
Unit (1154): Gives horse [HORS] to Unit (2279).
Unit (1154): Gives 18 horses [HORS] to Unit (2732).
Unit (1154): Gives yew [YEW] to Unit (586).
Unit (1154): Gives 100 silver [SILV] to Lipius (1149).
Unit (1154): Gives 20 silver [SILV] to Unit (1878).
Unit (1154): Gives 200 silver [SILV] to Sylius (1391).
Unit (1154): Gives 2000 silver [SILV] to Octetius (1378).
Unit (616): Gives mithril [MITH] to Unit (586).
Unit (616): Gives yew [YEW] to Unit (586).
Unit (616): Gives 500 silver [SILV] to Safurnius (1290).
Unit (616): Gives 5000 silver [SILV] to Hatunius (1287).
Unit (616): Gives 2 rootstone [ROOT] to Unit (586).
Matacius (1189): Gives 2 double bows [DBOW] to Safurnius (1290).
Matacius (1189): Gives longbow [LBOW] to Unit (1878).
Matacius (1189): Gives 5 mithril [MITH] to Unit (586).
Unit (599): Gives 99 silver [SILV] to Unit (2741).
Hotulius (1156): Gives 21 silver [SILV] to Unit (2788).
Unit (615): Gives 59 silver [SILV] to Unit (2788).
Capania (1344): Gives horse [HORS] to Paenia (1169).
Capania (1344): Gives horse [HORS] to Vermulius (1173).
Mulatius (1104): Gives 78 silver [SILV] to Unit (2743).
Unit (1100): Gives 1040 silver [SILV] to Unit (2742).
Sitenius (1038): Gives 1638 silver [SILV] to Mertus (366).
Gralus (1671): Gives 144 silver [SILV] to Mertus (366).
Unit (742): Gives 6096 silver [SILV] to Mertus (366).
Unit (661): Gives 480 silver [SILV] to Mertus (366).
Unit (871): Gives 480 silver [SILV] to Mertus (366).
Unit (2960): Gives 160 silver [SILV] to Mertus (366).
Unit (2287): Gives 8000 silver [SILV] to Mertus (366).
Unit (3019): Gives 136 silver [SILV] to Mertus (366).
Unit (1105): Gives 3200 silver [SILV] to Mertus (366).
Unit (2782): Gives 8 silver [SILV] to Mertus (366).
Unit (232): Gives 20 silver [SILV] to Jartinnus (1041).
Unit (232): Gives 14 silver [SILV] to Tirelius (1039).
Unit (232): Gives 10000 silver [SILV] to Rusoccus (1119).
Unit (232): Gives 4500 silver [SILV] to Unit (2960).
Unit (232): Gives 900 silver [SILV] to Unit (3019).
Unit (232): Gives 75 silver [SILV] to Jartinnus (1041).
Unit (232): Gives 75 silver [SILV] to Rusoccus (1119).
Unit (232): Gives 75 silver [SILV] to Frulvius (1299).
Unit (232): Gives 89289 silver [SILV] to Mertus (366).
Unit (232): Gives 20550 silver [SILV] to Unit (742).
Unit (232): Gives 30000 silver [SILV] to Unit (1105).
Unit (232): Gives 525 silver [SILV] to Acus (1239).
Unit (232): Gives 1350 silver [SILV] to Gralus (1671).
Unit (232): Gives 30480 silver [SILV] to Unit (742).
Unit (232): Gives 55280 silver [SILV] to Mertus (366).
Unit (232): Gives 80000 silver [SILV] to Unit (2287).
Unit (1803): Gives 5 horses [HORS] to Unit (3019).
Unit (1803): Gives 36950 silver [SILV] to Mertus (366).
Fuspilius (1368): Gives 80 silver [SILV] to Mertus (366).
Acus (1239): Gives 56 silver [SILV] to Mertus (366).
Mertus (366): Gives 30 silver [SILV] to Rusoccus (1119).
Mertus (366): Gives 250 silver [SILV] to Bear (592).
Mertus (366): Gives 250 silver [SILV] to Unit (1928).
Mertus (366): Gives 250 silver [SILV] to Unit (1929).
Mertus (366): Gives 250 silver [SILV] to Unit (54).
Mertus (366): Gives 250 silver [SILV] to Cougar (2489).
Mertus (366): Gives 250 silver [SILV] to Water Buffalo (2488).
Mertus (366): Gives 70 silver [SILV] to Frulvius (1299).
Mertus (366): Gives 40 silver [SILV] to Jartinnus (1041).
Caspus (1040): Gives 246 silver [SILV] to Mertus (366).
Bulius (1488): Gives double bow [DBOW] to Vanius (1491).
Bulius (1488): Gives 900 silver [SILV] to Unit (2221).
Bulius (1488): Receives 3 mithril swords [MSWO] from Unit (2222).
Festius (1107): Gives 70 silver [SILV] to Unit (1342).
Festius (1107): Gives 70 silver [SILV] to Unit (1350).
Fumilus (1184): Gives 7 silver [SILV] to Caerastius (1182).
Sidilio (1713): Gives 2 silver [SILV] to Caerastius (1182).
Caerastius (1182): Gives 70 silver [SILV] to Unit (2744).
Invedius (1717): Gives 2 silver [SILV] to Caerastius (1182).
Unit (1175): Gives 38 silver [SILV] to Caerastius (1182).
Pespor (1042): Gives 70 silver [SILV] to Poenius (1120).
Pespor (1042): Gives 1000 silver [SILV] to Unit (2247).
Pespor (1042): Gives double bow [DBOW] to Poenius (1120).
Pespor (1042): Gives double bow [DBOW] to Culiliusus (1158).
Poenius (1120): Gives 11 rootstone [ROOT] to Unit (3176).
Pespor (1042): Receives 3 mithril swords [MSWO] from Unit (2247).
Pelvius (1028): Gives mithril sword [MSWO] to Antilevus (1225).
Ammunia (1043): Gives 17 silver [SILV] to Seccirdius (1108).
Seccirdius (1108): Gives 70 silver [SILV] to Malius (1295).
Seccirdius (1108): Gives 70 silver [SILV] to Arcia (1160).
Seccirdius (1108): Gives 70 silver [SILV] to Lodemius (1183).
Ceniulus (1062): Gives 10 double bows [DBOW] to Unit (2384).
Ceniulus (1062): Gives 300 silver [SILV] to Unit (1842).
Unit (2905): Gives 2040 silver [SILV] to Unit (2876).
Unit (3037): Gives 122 silver [SILV] to Unit (1053).
Unit (3037): Gives tribesman [TMAN] to Unit (1053).
Unit (1449): Gives 30 silver [SILV] to Unit (2867).
Unit (1103): Gives 500 silver [SILV] to Unit (2926).
Unit (2050): Gives 79 silver [SILV] to Unit (2878).
Unit (3042): Gives 2 silver [SILV] to Unit (3068).
Unit (1305): Gives nomad [NOMA] to Unit (2927).
Unit (1305): Gives 20 silver [SILV] to Unit (2927).
Unit (1305): Gives nomad [NOMA] to Unit (2938).
Unit (1305): Gives 20 silver [SILV] to Unit (2938).
Unit (1305): Gives nomad [NOMA] to Unit (2955).
Unit (1305): Gives 20 silver [SILV] to Unit (2955).
Unit (1305): Gives nomad [NOMA] to Unit (2965).
Unit (1305): Gives 20 silver [SILV] to Unit (2965).
Unit (1260): Gives 8 nomads [NOMA] to Unit (3026).
Unit (1260): Gives 190 silver [SILV] to Unit (3026).
Unit (1304): Gives nomad [NOMA] to Unit (3055).
Unit (1261): Gives nomad [NOMA] to Unit (3056).
Unit (1261): Gives 20 silver [SILV] to Unit (3056).
Unit (1261): Gives nomad [NOMA] to Unit (3149).
Unit (1261): Gives 20 silver [SILV] to Unit (3149).
Unit (1261): Gives nomad [NOMA] to Unit (3153).
Unit (1261): Gives 20 silver [SILV] to Unit (3153).
Unit (1261): Gives nomad [NOMA] to Unit (3156).
Unit (3109): Gives 106 silver [SILV] to Unit (3157).
Unit (384): Collects $12 in taxes in mountain (75,7) in Nakyce.
Unit (74): Collects $125 in taxes in mountain (75,7) in Nakyce.
Unit (1071): Collects $12 in taxes in mountain (75,7) in Nakyce.
Unit (261): Collects $963 in taxes in mountain (75,7) in Nakyce.
Stractius (1181): Collects $64 in taxes in mountain (73,9) in Nakyce.
Unit (240): Collects $1206 in taxes in mountain (73,9) in Nakyce.
Unit (770): Collects $16 in taxes in mountain (73,9) in Nakyce.
Unit (591): Collects $162 in taxes in mountain (73,9) in Nakyce.
Unit (1192): Collects $10 in taxes in forest (81,9) in Surlanque.
Unit (1227): Collects $10 in taxes in forest (81,9) in Surlanque.
Unit (296): Collects $102 in taxes in forest (81,9) in Surlanque.
Unit (1358): Collects $103 in taxes in forest (81,9) in Surlanque.
Unit (237): Collects $206 in taxes in forest (81,9) in Surlanque.
Unit (242): Collects $103 in taxes in forest (81,9) in Surlanque.
Unit (363): Collects $103 in taxes in forest (81,9) in Surlanque.
Unit (817): Collects $103 in taxes in forest (81,9) in Surlanque.
Unit (917): Collects $103 in taxes in forest (81,9) in Surlanque.
Unit (922): Collects $103 in taxes in forest (81,9) in Surlanque.
Unit (862): Collects $103 in taxes in forest (81,9) in Surlanque.
Unit (863): Collects $103 in taxes in forest (81,9) in Surlanque.
Unit (289): Collects $1160 in taxes in forest (80,10) in Surlanque.
Unit (1991): Collects $16 in taxes in forest (80,10) in Surlanque.
Unit (187): Collects $313 in taxes in forest (75,15) in Uzrot.
Unit (2436): Collects $313 in taxes in forest (75,15) in Uzrot.
Unit (903): Collects $3133 in taxes in forest (75,15) in Uzrot.
Unit (614): Collects $8459 in taxes in forest (75,15) in Uzrot.
Unit (1029): Collects $1566 in taxes in forest (75,15) in Uzrot.
Unit (799): Collects $3134 in taxes in forest (75,15) in Uzrot.
Unit (2129): Collects $3134 in taxes in forest (75,15) in Uzrot.
Unit (2113): Collects $262 in taxes in plain (75,17) in Bocholt.
Unit (208): Collects $5241 in taxes in plain (75,17) in Bocholt.
Unit (382): Collects $262 in taxes in plain (75,17) in Bocholt.
Unit (1235): Collects $262 in taxes in plain (75,17) in Bocholt.
Unit (1271): Collects $262 in taxes in plain (75,17) in Bocholt.
Unit (1286): Collects $262 in taxes in plain (75,17) in Bocholt.
Unit (1354): Collects $262 in taxes in plain (75,17) in Bocholt.
Unit (1414): Collects $262 in taxes in plain (75,17) in Bocholt.
Unit (1416): Collects $262 in taxes in plain (75,17) in Bocholt.
Unit (923): Collects $5241 in taxes in plain (75,17) in Bocholt.
Unit (2841): Collects $2150 in taxes in plain (75,17) in Bocholt.
Gratera (1349): Collects $212 in taxes in plain (63,19) in Satiasam.
Unit (890): Collects $2120 in taxes in plain (63,19) in Satiasam.
Unit (1025): Collects $2120 in taxes in plain (63,19) in Satiasam.
Unit (1115): Collects $2120 in taxes in plain (63,19) in Satiasam.
Unit (235): Collects $45963 in taxes in plain (63,19) in Satiasam.
Cimonia (1157): Collects $2034 in taxes in plain (73,19) in Bocholt.
Manius (908): Collects $9170 in taxes in plain (73,19) in Bocholt.
Salecia (1236): Collects $4802 in taxes in plain (73,19) in Bocholt.
Jallius (1186): Collects $33 in taxes in plain (73,19) in Bocholt.
Unit (1185): Collects $333 in taxes in plain (73,19) in Bocholt.
Unit (1237): Collects $333 in taxes in plain (73,19) in Bocholt.
Unit (1269): Collects $333 in taxes in plain (73,19) in Bocholt.
Unit (1277): Collects $333 in taxes in plain (73,19) in Bocholt.
Unit (1341): Collects $333 in taxes in plain (73,19) in Bocholt.
Unit (1402): Collects $333 in taxes in plain (73,19) in Bocholt.
Unit (1055): Collects $20779 in taxes in plain (73,19) in Bocholt.
Unit (2171): Collects $333 in taxes in plain (73,19) in Bocholt.
Unit (2173): Collects $333 in taxes in plain (73,19) in Bocholt.
Unit (2295): Collects $333 in taxes in plain (73,19) in Bocholt.
Unit (1534): Collects $3336 in taxes in plain (73,19) in Bocholt.
Unit (888): Collects $1668 in taxes in plain (73,19) in Bocholt.
Unit (2041): Collects $3970 in taxes in plain (73,19) in Bocholt.
Ortia (1082): Collects $10775 in taxes in plain (77,19) in Morungol.
Unit (642): Collects $35 in taxes in plain (77,19) in Morungol.
Unit (1155): Collects $35 in taxes in plain (77,19) in Morungol.
Unit (1543): Collects $3533 in taxes in plain (77,19) in Morungol.
Unit (1633): Collects $3533 in taxes in plain (77,19) in Morungol.
Unit (1783): Collects $3533 in taxes in plain (77,19) in Morungol.
Unit (1851): Collects $3533 in taxes in plain (77,19) in Morungol.
Unit (1297): Collects $353 in taxes in plain (77,19) in Morungol.
Unit (1317): Collects $353 in taxes in plain (77,19) in Morungol.
Unit (2781): Collects $1060 in taxes in plain (77,19) in Morungol.
Unit (1386): Collects $3533 in taxes in plain (77,19) in Morungol.
Unit (1955): Collects $3534 in taxes in plain (77,19) in Morungol.
Unit (1355): Collects $834 in taxes in plain (72,20) in Bocholt.
Unit (1444): Collects $1856 in taxes in plain (72,20) in Bocholt.
Allia (1265): Collects $1334 in taxes in plain (74,20) in Bocholt.
Unit (2112): Collects $1900 in taxes in plain (74,20) in Bocholt.
Gasceius (1208): Collects $1080 in taxes in forest (58,22) in Nugyru.
Sonnius (1644): Collects $15 in taxes in forest (58,22) in Nugyru.
Unit (1787): Collects $28 in taxes in forest (60,22) in Nugyru.
Ilfius (1094): Collects $28963 in taxes in forest (60,22) in Nugyru.
Cnician (1179): Collects $85 in taxes in forest (60,22) in Nugyru.
Unit (278): Collects $2845 in taxes in forest (60,22) in Nugyru.
Unit (281): Collects $2846 in taxes in forest (60,22) in Nugyru.
Unit (2504): Collects $285 in taxes in forest (60,22) in Nugyru.
Unit (925): Collects $4855 in taxes in swamp (65,23) in Skelid.
Unit (972): Collects $4855 in taxes in swamp (65,23) in Skelid.
Unit (976): Collects $4855 in taxes in swamp (65,23) in Skelid.
Unit (1982): Collects $4855 in taxes in swamp (65,23) in Skelid.
Unit (1878): Collects $19 in taxes in plain (60,24) in Satiasam.
Lipius (1149): Collects $19 in taxes in plain (60,24) in Satiasam.
Hatunius (1287): Collects $1986 in taxes in plain (60,24) in Satiasam.
Octetius (1378): Collects $1986 in taxes in plain (60,24) in Satiasam.
Marens (1385): Collects $198 in taxes in plain (60,24) in Satiasam.
Safurnius (1290): Collects $198 in taxes in plain (60,24) in Satiasam.
Sylius (1391): Collects $198 in taxes in plain (60,24) in Satiasam.
Unit (1154): Collects $3975 in taxes in plain (60,24) in Satiasam.
Unit (616): Collects $4969 in taxes in plain (60,24) in Satiasam.
Mulatius (1104): Collects $5 in taxes in jungle (66,26) in Sefitat.
Unit (1100): Collects $112 in taxes in jungle (66,26) in Sefitat.
Pespor (1042): Collects $472 in taxes in mountain (69,27) in
  Phidyntia.
Poenius (1120): Collects $15 in taxes in mountain (69,27) in
  Phidyntia.
Culiliusus (1158): Collects $15 in taxes in mountain (69,27) in
  Phidyntia.
Antilevus (1225): Collects $50 in taxes in mountain (71,27) in
  Phidyntia.
Ammunia (1043): Collects $15 in taxes in jungle (68,28) in Sefitat.
Seccirdius (1108): Collects $280 in taxes in jungle (68,28) in
  Sefitat.
Arcia (1160): Collects $15 in taxes in jungle (68,28) in Sefitat.
Lodemius (1183): Collects $16 in taxes in jungle (68,28) in Sefitat.
Malius (1295): Collects $16 in taxes in jungle (68,28) in Sefitat.
Calirabor (1063): Collects $16 in taxes in jungle (68,28) in Sefitat.
Ceniulus (1062): Collects $846 in taxes in mountain (70,28) in
  Phidyntia.
Unit (2511): Collects $91 in taxes in mountain (75,35) in Gededyki.
Unit (1449): Collects $91 in taxes in mountain (75,35) in Gededyki.
Unit (2867): Collects $9 in taxes in mountain (75,35) in Gededyki.
Unit (2868): Collects $91 in taxes in mountain (75,35) in Gededyki.
Unit (2869): Collects $91 in taxes in mountain (75,35) in Gededyki.
Unit (2870): Collects $91 in taxes in mountain (75,35) in Gededyki.
Unit (1103): Collects $644 in taxes in mountain (75,35) in Gededyki.
Unit (2926): Collects $92 in taxes in mountain (75,35) in Gededyki.
Unit (3109): Collects $1852 in taxes in plain (65,67) in Ranaw.
Ocladia (1628): Collects $900 in taxes in plain (64,68) in Ranaw.
Bear (592) uses earth lore [EART] in mountain (68,26) in Phidyntia,
  contains Oroldu [city].
Unit (54) uses earth lore [EART] in mountain (68,26) in Phidyntia,
  contains Oroldu [city].
Unit (1928) uses earth lore [EART] in mountain (68,26) in Phidyntia,
  contains Oroldu [city].
Unit (1929) uses earth lore [EART] in mountain (68,26) in Phidyntia,
  contains Oroldu [city].
Cougar (2489) uses earth lore [EART] in mountain (68,26) in Phidyntia,
  contains Oroldu [city].
Water Buffalo (2488) uses earth lore [EART] in mountain (68,26) in
  Phidyntia, contains Oroldu [city].
Tirelius (1039): Casts Earth Lore, raising 108 silver.
Caspus (1040): Casts Earth Lore, raising 108 silver.
Pelvius (1028): Casts Earth Lore, raising 120 silver.
Unit (34): Buys 2 vikings [VIKI] at $56 each.
Unit (49): Buys 2 vikings [VIKI] at $56 each.
Unit (79): Buys 2 vikings [VIKI] at $56 each.
Unit (82): Buys hill dwarf [HDWA] at $56 each.
Unit (210): Buys sea elf [SELF] at $52 each.
Unit (227): Buys wood elf [WELF] at $52 each.
Unit (256): Buys 3 orcs [ORC] at $48 each.
Unit (386): Buys 10 hill dwarves [HDWA] at $56 each.
Unit (593): Buys viking [VIKI] at $52 each.
Unit (780): Buys 10 hill dwarves [HDWA] at $56 each.
Unit (1165): Buys 10 hill dwarves [HDWA] at $56 each.
Unit (1294): Buys 2 hill dwarves [HDWA] at $48 each.
Unit (1332): Buys sea elf [SELF] at $48 each.
Unit (1420): Buys viking [VIKI] at $56 each.
Unit (1732): Buys wood elf [WELF] at $48 each.
Unit (1760): Buys 3 sea elves [SELF] at $52 each.
Unit (1788): Buys tribesman [TMAN] at $52 each.
Unit (1789): Buys tribal elf [TELF] at $44 each.
Unit (1791): Buys 65 wood elves [WELF] at $56 each.
Unit (1792): Buys tribal elf [TELF] at $44 each.
Unit (1032): Buys 35 longbows [LBOW] at $157 each.
Unit (1793): Buys 4 tribal elves [TELF] at $52 each.
Unit (2262): Buys 69 wood elves [WELF] at $52 each.
Unit (2841): Buys 2 horses [HORS] at $71 each.
Manius (908): Buys 82 horses [HORS] at $84 each.
Unit (579): Buys 99 horses [HORS] at $73 each.
Unit (579): Buys 44 swords [SWOR] at $149 each.
Unit (579): Buys 46 crossbows [XBOW] at $140 each.
Unit (2280): Buys 32 tribesmen [TMAN] at $48 each.
Unit (2741): Buys tribal elf [TELF] at $52 each.
Unit (2742): Buys tribal elf [TELF] at $44 each.
Unit (2743): Buys tribal elf [TELF] at $44 each.
Rusoccus (1119): Buys horse [HORS] at $75 each.
Jartinnus (1041): Buys horse [HORS] at $75 each.
Gralus (1671): Buys 18 horses [HORS] at $75 each.
Unit (2960): Buys 20 horses [HORS] at $75 each.
Frulvius (1299): Buys horse [HORS] at $75 each.
Unit (3019): Buys 12 horses [HORS] at $75 each.
Unit (1105): Buys 400 horses [HORS] at $75 each.
Acus (1239): Buys 7 horses [HORS] at $75 each.
Mertus (366): Buys 691 horses [HORS] at $75 each.
Unit (742): Buys 137 swords [SWOR] at $150 each.
Unit (2960): Buys 20 swords [SWOR] at $150 each.
Mertus (366): Buys 691 swords [SWOR] at $150 each.
Unit (2744): Buys tribesman [TMAN] at $48 each.
Unit (2876): Buys 30 tribesmen [TMAN] at $48 each.
Unit (2878): Buys barbarian [BARB] at $52 each.
Unit (3157): Buys plainsman [PLAI] at $56 each.
Unit (27): Walks from forest (76,0) in Ranshya to forest (76,2) in
  Ranshya.
Unit (238): Walks from forest (76,6) in Ranshya to forest (77,5) in
  Ranshya.
Unit (1212): Walks from mountain (75,7) in Nakyce to forest (76,6) in
  Ranshya.
Vareius (1492): Rides from forest (75,15) in Uzrot to plain (75,17) in
  Bocholt.
Papurius (1242): Rides from plain (75,17) in Bocholt to forest (76,18)
  in Uzrot.
Unit (1433): Walks from plain (63,19) in Satiasam to plain (62,20) in
  Satiasam.
Unit (1394): Walks from plain (63,19) in Satiasam to plain (63,21) in
  Satiasam.
Unit (191): Walks from plain (63,19) in Satiasam to plain (63,21) in
  Satiasam.
Unit (1233): Rides from plain (73,19) in Bocholt to plain (73,21) in
  Bocholt.
Unit (1051): Rides from plain (77,19) in Morungol to forest (76,18) in
  Uzrot.
Unit (1467): Rides from plain (63,21) in Satiasam to plain (63,19) in
  Satiasam.
Unit (2296): Rides from plain (63,21) in Satiasam to plain (63,19) in
  Satiasam.
Atratian (1240): Rides from forest (60,22) in Nugyru to plain (61,23)
  in Satiasam.
Unit (2858): Rides from swamp (63,23) in Skelid to swamp (63,25) in
  Skelid.
Unit (1200): Rides from swamp (65,23) in Skelid to jungle (66,24) in
  Sefitat.
Unit (2741): Walks from swamp (64,24) in Skelid to swamp (65,25) in
  Skelid.
Unit (263): Rides from jungle (66,24) in Sefitat to jungle (67,25) in
  Sefitat.
Paenia (1169): Rides from jungle (67,25) in Sefitat to jungle (67,27)
  in Sefitat.
Capania (1344): Rides from jungle (67,25) in Sefitat to jungle (67,27)
  in Sefitat.
Unit (2742): Walks from jungle (66,26) in Sefitat to swamp (65,27) in
  Skelid.
Unit (2743): Walks from jungle (66,26) in Sefitat to swamp (65,27) in
  Skelid.
Rusoccus (1119): Rides from mountain (68,26) in Phidyntia to jungle
  (67,27) in Sefitat.
Unit (742): Rides from mountain (68,26) in Phidyntia to jungle (67,27)
  in Sefitat.
Unit (2287): Rides from mountain (68,26) in Phidyntia to jungle
  (67,27) in Sefitat.
Mertus (366): Rides from mountain (68,26) in Phidyntia to jungle
  (67,27) in Sefitat.
Vanius (1491): Rides from mountain (70,26) in Phidyntia to mountain
  (70,28) in Phidyntia.
Caerastius (1182): Rides from jungle (67,27) in Sefitat to jungle
  (67,29) in Sefitat.
Unit (2744): Walks from jungle (67,27) in Sefitat to jungle (67,29) in
  Sefitat.
Poenius (1120): Rides from mountain (69,27) in Phidyntia to jungle
  (68,28) in Sefitat.
Unit (1983): Rides from mountain (69,27) in Phidyntia to mountain
  (68,26) in Phidyntia.
Antilevus (1225): Rides from mountain (71,27) in Phidyntia to jungle
  (72,28) in Donndinon.
Unit (2905): Walks from swamp (61,29) in Skelid to plain (60,30) in
  Erisort.
Portiblius (1106): Walks from swamp (42,32) in Ellon to swamp (41,31)
  in Ellon.
Unit (3068): Walks from plain (62,60) in Burongha to plain (63,61) in
  Burongha.
Unit (1305): Walks from desert (69,61) in Beaubur to desert (70,60) in
  Beaubur.
Unit (2927): Walks from desert (69,61) in Beaubur to desert (69,59) in
  Beaubur.
Unit (2955): Walks from desert (69,61) in Beaubur to desert (70,62) in
  Beaubur.
Unit (2965): Walks from desert (69,61) in Beaubur to desert (70,60) in
  Beaubur.
Unit (1304): Walks from jungle (66,66) in Belver to plain (66,68) in
  Ranaw.
Unit (3109): Walks from plain (65,67) in Ranaw to plain (64,68) in
  Ranaw.
Unit (3157): Walks from plain (65,67) in Ranaw to plain (64,66) in
  Ranaw.
Unit (665): Walks from underforest (39,1,underworld) in Lotholuen to
  underforest (40,0,underworld) in Lotholuen.
Unit (1233): Rides from plain (73,21) in Bocholt to jungle (74,22) in
  Donndinon.
Unit (1305): Discovers that ocean (71,59) in Atlantis Ocean is ocean.
Papurius (1242): Rides from forest (76,18) in Uzrot to plain (77,19)
  in Morungol.
Unit (1051): Rides from forest (76,18) in Uzrot to plain (75,17) in
  Bocholt.
Unit (1200): Rides from jungle (66,24) in Sefitat to jungle (67,25) in
  Sefitat.
Unit (263): Rides from jungle (67,25) in Sefitat to mountain (68,26)
  in Phidyntia.
Paenia (1169): Rides from jungle (67,27) in Sefitat to jungle (66,28)
  in Sefitat.
Rusoccus (1119): Rides from jungle (67,27) in Sefitat to jungle
  (66,26) in Sefitat.
Poenius (1120): Rides from jungle (68,28) in Sefitat to jungle (67,27)
  in Sefitat.
Unit (1071): Teaches combat to Unit (74).
Unit (770): Teaches combat to Unit (591).
Unit (1227): Teaches combat to Unit (917).
Unit (1629): Teaches combat to Unit (64).
Unit (187): Teaches combat to Unit (799).
Unit (2436): Teaches longbow to Unit (1395).
Unit (2436): Teaches longbow to Unit (1636).
Unit (1185): Teaches crossbow to Unit (1234).
Unit (1269): Teaches crossbow to Unit (1724).
Unit (1277): Teaches combat to Unit (1534).
Unit (1297): Teaches combat to Unit (1633).
Unit (1317): Teaches crossbow to Unit (1386).
Unit (2867): Teaches combat to Unit (2869).
Unit (2926): Teaches combat to Unit (1103).
Unit (2926): Teaches combat to Unit (1449).
Unit (2926): Teaches combat to Unit (2511).
Unit (2926): Teaches combat to Unit (2868).
Unit (34): Studies combat.
Unit (21): Earns 560 silver working in forest (74,0) in Ranshya.
Aspracus (1067): Earns 60 silver entertaining in forest (74,0) in
  Ranshya.
Unit (49): Studies combat.
Cuco (32): Earns 669 silver working in forest (76,0) in Ranshya.
Gula (59): Earns 40 silver entertaining in forest (76,0) in Ranshya.
Agrelus (1089): Earns 14 silver working in forest (78,0) in Ranshya.
Unit (47): Earns 14 silver working in forest (78,0) in Ranshya.
Unit (79): Studies combat.
Unit (40): Earns 280 silver working in forest (75,1) in Ranshya.
Cocrius (582): Earns 40 silver entertaining in forest (75,1) in
  Ranshya.
Unit (957): Earns 13 silver working in forest (77,1) in Ranshya.
Unit (142): Earns 13 silver working in forest (77,1) in Ranshya.
Unit (176): Earns 52 silver working in forest (76,2) in Ranshya.
Unit (33): Earns 78 silver working in forest (76,2) in Ranshya.
Unit (75): Earns 12 silver working in forest (75,3) in Ranshya.
Unit (82): Studies combat.
Lulius (1133): Earns 14 silver working in mountain (74,4) in Nakyce.
Unit (66): Earns 28 silver working in mountain (74,4) in Nakyce.
Unit (71): Earns 14 silver working in forest (76,4) in Ranshya.
Unit (153): Earns 14 silver working in forest (76,4) in Ranshya.
Sonteia (230): Earns 39 silver working in tundra (80,4) in Drogbad.
Unit (192): Earns 13 silver working in tundra (80,4) in Drogbad.
Unit (301): Earns 160 silver working in mountain (73,5) in Nakyce.
Unit (44): Earns 880 silver entertaining in mountain (73,5) in Nakyce.
Unit (654): Earns 14 silver working in forest (77,5) in Ranshya.
Unit (46): Earns 39 silver working in tundra (79,5) in Drogbad.
Unit (193): Earns 13 silver working in tundra (79,5) in Drogbad.
Natesius (1280): Earns 20 silver entertaining in tundra (79,5) in
  Drogbad.
Deleius (1118): Earns 11 silver working in tundra (81,5) in Drogbad.
Unit (210): Studies combat.
Olceius (287): Earns 39 silver working in mountain (74,6) in Nakyce.
Unit (292): Earns 13 silver working in mountain (74,6) in Nakyce.
Unit (202): Earns 60 silver working in forest (76,6) in Ranshya.
Unit (209): Earns 11 silver working in tundra (80,6) in Drogbad.
Unit (355): Earns 110 silver working in tundra (80,6) in Drogbad.
Unit (227): Studies combat.
Unit (231): Earns 13 silver working in forest (82,6) in Surlanque.
Unit (256): Studies combat.
Candidus (198): Earns 12 silver working in mountain (73,7) in Nakyce.
Unit (596): Earns 120 silver working in mountain (73,7) in Nakyce.
Unit (847): Earns 240 silver working in mountain (73,7) in Nakyce.
Unit (384): Studies stealth.
Unit (74): Studies combat.
Unit (378): Studies observation.
Unit (386): Studies combat.
Unit (261): Earns 778 silver working in mountain (75,7) in Nakyce.
Cassia (996): Earns 14 silver working in forest (81,7) in Surlanque.
Unit (1437): Earns 14 silver working in forest (81,7) in Surlanque.
Unit (700): Earns 140 silver working in forest (81,7) in Surlanque.
Unit (306): Earns 14 silver working in forest (81,7) in Surlanque.
Unit (358): Earns 28 silver working in forest (81,7) in Surlanque.
Unit (1826): Earns 120 silver working in mountain (72,8) in Nakyce.
Unit (593): Studies combat.
Unit (241): Earns 13 silver working in forest (76,8) in Uzrot.
Unit (434): Studies combat.
Unit (360): Studies longbow.
Unit (297): Earns 1500 silver working in forest (80,8) in Surlanque.
Unit (786): Earns 150 silver working in forest (80,8) in Surlanque.
Unit (552): Earns 150 silver working in forest (80,8) in Surlanque.
Passius (72): Earns 680 silver entertaining in forest (80,8) in
  Surlanque.
Unit (233): Earns 72 silver working in forest (82,8) in Surlanque.
Unit (604): Earns 12 silver working in forest (82,8) in Surlanque.
Unit (300): Studies observation.
Unit (591): Studies combat.
Unit (780): Studies combat.
Unit (1165): Studies combat.
Stractius (1181): Earns 51 silver working in mountain (73,9) in
  Nakyce.
Unit (240): Earns 962 silver working in mountain (73,9) in Nakyce.
Unit (1294): Studies combat.
Unit (1162): Earns 12 silver working in mountain (75,9) in Nakyce.
Unit (645): Earns 120 silver working in mountain (75,9) in Nakyce.
Unit (1332): Studies combat.
Unit (1021): Earns 24 silver working in forest (77,9) in Uzrot.
Unit (635): Earns 120 silver working in forest (77,9) in Uzrot.
Unit (1420): Studies combat.
Casceius (1058): Earns 28 silver working in forest (79,9) in
  Surlanque.
Unit (1508): Earns 14 silver working in forest (79,9) in Surlanque.
Unit (1192): Studies observation.
Unit (917): Studies combat.
Unit (863): Studies combat.
Unit (705): Studies longbow.
Unit (296): Earns 110 silver working in forest (81,9) in Surlanque.
Unit (1358): Earns 111 silver working in forest (81,9) in Surlanque.
Unit (237): Earns 222 silver working in forest (81,9) in Surlanque.
Unit (242): Earns 111 silver working in forest (81,9) in Surlanque.
Unit (363): Earns 111 silver working in forest (81,9) in Surlanque.
Unit (817): Earns 111 silver working in forest (81,9) in Surlanque.
Unit (922): Earns 111 silver working in forest (81,9) in Surlanque.
Unit (862): Earns 111 silver working in forest (81,9) in Surlanque.
Unit (1898): Studies observation.
Unit (64): Studies combat.
Unit (1701): Earns 160 silver working in mountain (74,10) in Nakyce.
Unit (84): Earns 480 silver working in mountain (74,10) in Nakyce.
Unit (909): Earns 352 silver working in mountain (74,10) in Nakyce.
Unit (585): Earns 640 silver working in mountain (74,10) in Nakyce.
Unit (186): Earns 320 silver working in mountain (74,10) in Nakyce.
Unit (763): Earns 320 silver working in mountain (74,10) in Nakyce.
Unit (288): Earns 160 silver working in mountain (74,10) in Nakyce.
Unit (859): Earns 320 silver working in mountain (74,10) in Nakyce.
Unit (1004): Earns 36 silver entertaining in mountain (74,10) in
  Nakyce.
Unit (1732): Studies combat.
Unit (291): Earns 24 silver working in forest (76,10) in Uzrot.
Unit (185): Earns 180 silver working in forest (76,10) in Uzrot.
Unit (1991): Studies combat.
Unit (2001): Studies tactics.
Unit (889): Studies observation.
Unit (289): Earns 823 silver working in forest (80,10) in Surlanque.
Unit (169): Earns 14 silver working in forest (75,11) in Uzrot.
Unit (1887): Earns 14 silver working in forest (77,11) in Uzrot.
Unit (1760): Studies combat.
Unit (2007): Earns 260 silver working in forest (79,11) in Surlanque.
Unit (1034): Earns 14 silver working in forest (74,12) in Uzrot.
Unit (1022): Earns 12 silver working in forest (76,12) in Uzrot.
Unit (2072): Earns 15 silver working in plain (78,12) in Morungol.
Unit (1788): Studies combat.
Unit (356): Earns 13 silver working in swamp (73,13) in Issnina.
Unit (171): Earns 130 silver working in swamp (73,13) in Issnina.
Unit (633): Earns 26 silver working in swamp (73,13) in Issnina.
Unit (1381): Earns 13 silver working in forest (75,13) in Uzrot.
Unit (1112): Earns 13 silver working in forest (77,13) in Uzrot.
Unit (390): Earns 12 silver working in swamp (72,14) in Issnina.
Unit (764): Earns 96 silver working in swamp (72,14) in Issnina.
Unit (1167): Earns 12 silver working in swamp (72,14) in Issnina.
Unit (1056): Earns 24 silver working in swamp (72,14) in Issnina.
Unit (1789): Studies combat.
Unit (608): Earns 11 silver working in swamp (74,14) in Issnina.
Unit (768): Earns 77 silver working in swamp (74,14) in Issnina.
Unit (739): Earns 11 silver working in swamp (74,14) in Issnina.
Unit (1791): Studies combat.
Unit (924): Earns 14 silver working in forest (76,14) in Uzrot.
Unit (1291): Earns 14 silver working in forest (76,14) in Uzrot.
Unit (1510): Earns 14 silver working in forest (76,14) in Uzrot.
Unit (1264): Earns 20 silver entertaining in forest (76,14) in Uzrot.
Unit (2451): Earns 14 silver working in plain (78,14) in Morungol.
Unit (1792): Studies combat.
Unit (1101): Earns 99 silver working in swamp (73,15) in Issnina.
Unit (804): Earns 22 silver working in swamp (73,15) in Issnina.
Unit (1272): Earns 11 silver working in swamp (73,15) in Issnina.
Unit (168): Studies stealth.
Unit (903): Studies combat.
Unit (1029): Studies combat.
Unit (799): Studies combat.
Unit (1180): Studies stealth.
Unit (1395): Studies longbow.
Unit (872): Studies longbow.
Unit (1636): Studies longbow.
Unit (1128): Studies longbow.
Unit (1032): Earns 16 silver working in forest (75,15) in Uzrot.
Unit (614): Earns 4320 silver working in forest (75,15) in Uzrot.
Unit (2129): Earns 1600 silver working in forest (75,15) in Uzrot.
Unit (1054): Earns 960 silver working in forest (75,15) in Uzrot.
Unit (1797): Earns 960 silver working in forest (75,15) in Uzrot.
Unit (1127): Earns 20 silver entertaining in forest (75,15) in Uzrot.
Unit (1069): Earns 65 silver working in forest (77,15) in Uzrot.
Unit (2137): Earns 13 silver working in forest (77,15) in Uzrot.
Unit (946): Earns 13 silver working in forest (77,15) in Uzrot.
Unit (1793): Studies combat.
Unit (1113): Earns 130 silver working in swamp (72,16) in Issnina.
Unit (1316): Earns 39 silver working in swamp (72,16) in Issnina.
Unit (2152): Earns 13 silver working in swamp (72,16) in Issnina.
Unit (1250): Studies observation.
Unit (1102): Earns 144 silver working in plain (74,16) in Bocholt.
Unit (1080): Earns 32 silver working in plain (74,16) in Bocholt.
Unit (2262): Studies combat.
Unit (919): Earns 13 silver working in forest (76,16) in Uzrot.
Unit (1667): Earns 13 silver working in forest (76,16) in Uzrot.
Unit (1810): Earns 13 silver working in forest (76,16) in Uzrot.
Unit (2586): Earns 15 silver working in plain (78,16) in Morungol.
Etrius (1137): Earns 28 silver working in forest (59,17) in Nugyru.
Unit (1018): Earns 272 silver working in plain (73,17) in Bocholt.
Unit (733): Earns 80 silver working in plain (73,17) in Bocholt.
Unit (2815): Earns 1600 silver working in plain (73,17) in Bocholt.
Unit (188): Studies stealth.
Unit (2113): Studies combat.
Unit (382): Studies longbow.
Unit (1235): Studies riding.
Unit (1271): Studies combat.
Unit (1286): Studies crossbow.
Unit (1354): Studies healing.
Unit (1414): Studies herb lore.
Unit (1416): Studies crossbow.
Unit (1353): Studies observation.
Unit (1371): Studies stealth.
Unit (208): Earns 2117 silver working in plain (75,17) in Bocholt.
Unit (923): Earns 2117 silver working in plain (75,17) in Bocholt.
Unit (2841): Earns 868 silver working in plain (75,17) in Bocholt.
Unit (1141): Earns 889 silver working in plain (75,17) in Bocholt.
Unit (1798): Earns 636 silver working in plain (75,17) in Bocholt.
Agrius (1715): Earns 16 silver working in plain (77,17) in Morungol.
Cellian (1114): Earns 24 silver working in forest (58,18) in Nugyru.
Unit (748): Earns 12 silver working in forest (58,18) in Nugyru.
Unit (1888): Earns 160 silver working in plain (60,18) in Satiasam.
Unit (1035): Earns 80 silver working in plain (60,18) in Satiasam.
Unit (1134): Earns 16 silver working in plain (60,18) in Satiasam.
Unit (1530): Earns 139 silver working in plain (64,18) in Satiasam.
Unit (2721): Earns 13 silver working in plain (64,18) in Satiasam.
Unit (1285): Earns 1936 silver working in plain (64,18) in Satiasam.
Unit (1078): Earns 256 silver working in plain (72,18) in Bocholt.
Unit (1311): Earns 96 silver working in plain (72,18) in Bocholt.
Unit (1468): Earns 1600 silver working in plain (72,18) in Bocholt.
Unit (1528): Earns 160 silver working in plain (74,18) in Bocholt.
Unit (1801): Earns 64 silver working in plain (74,18) in Bocholt.
Unit (611): Earns 16 silver working in plain (74,18) in Bocholt.
Unit (1121): Earns 14 silver working in forest (76,18) in Uzrot.
Unit (1150): Earns 28 silver working in forest (76,18) in Uzrot.
Unit (1828): Earns 14 silver working in forest (76,18) in Uzrot.
Unit (2044): Earns 14 silver working in forest (76,18) in Uzrot.
Mantius (1116): Earns 12 silver working in forest (57,19) in Nugyru.
Lufanius (1309): Earns 12 silver working in forest (57,19) in Nugyru.
Unit (1061): Earns 12 silver working in forest (57,19) in Nugyru.
Cirrunia (1132): Earns 42 silver working in forest (59,19) in Nugyru.
Unit (1838): Earns 160 silver working in plain (61,19) in Satiasam.
Unit (1077): Earns 64 silver working in plain (61,19) in Satiasam.
Unit (1866): Earns 16 silver working in plain (61,19) in Satiasam.
Unit (1453): Earns 16 silver working in plain (61,19) in Satiasam.
Gratera (1349): Studies crossbow.
Unit (890): Studies crossbow.
Unit (1025): Studies crossbow.
Unit (1115): Studies crossbow.
Unit (2165): Studies observation.
Unit (1478): Studies observation.
Unit (1159): Studies stealth.
Unit (235): Earns 25506 silver working in plain (63,19) in Satiasam.
Cullius (1140): Earns 40 silver entertaining in plain (63,19) in
  Satiasam.
Unit (1356): Earns 112 silver working in plain (71,19) in Bocholt.
Unit (1144): Earns 128 silver working in plain (71,19) in Bocholt.
Jallius (1186): Studies observation.
Unit (1237): Studies stealth.
Unit (1341): Studies crossbow.
Unit (1402): Studies crossbow.
Unit (2171): Studies combat.
Unit (2173): Studies crossbow.
Unit (2295): Studies riding.
Unit (1534): Studies combat.
Unit (1664): Studies crossbow.
Unit (1724): Studies crossbow.
Unit (1234): Studies crossbow.
Cimonia (1157): Earns 805 silver working in plain (73,19) in Bocholt.
Manius (908): Earns 3633 silver working in plain (73,19) in Bocholt.
Salecia (1236): Earns 1902 silver working in plain (73,19) in Bocholt.
Unit (1055): Earns 8233 silver working in plain (73,19) in Bocholt.
Unit (888): Earns 660 silver working in plain (73,19) in Bocholt.
Unit (2041): Earns 2432 silver working in plain (73,19) in Bocholt.
Unit (2670): Earns 2433 silver working in plain (73,19) in Bocholt.
Sevellaeius (1081): Earns 20 silver entertaining in plain (73,19) in
  Bocholt.
Unit (1902): Earns 160 silver working in plain (75,19) in Bocholt.
Unit (1168): Earns 48 silver working in plain (75,19) in Bocholt.
Unit (2345): Earns 32 silver working in plain (75,19) in Bocholt.
Unit (215): Studies stealth.
Unit (642): Studies combat.
Unit (1155): Studies crossbow.
Unit (1633): Studies combat.
Unit (1386): Studies crossbow.
Unit (962): Studies crossbow.
Ortia (1082): Earns 5185 silver working in plain (77,19) in Morungol.
Unit (1543): Earns 1700 silver working in plain (77,19) in Morungol.
Unit (1783): Earns 1700 silver working in plain (77,19) in Morungol.
Unit (1851): Earns 1700 silver working in plain (77,19) in Morungol.
Unit (2781): Earns 510 silver working in plain (77,19) in Morungol.
Unit (1955): Earns 1700 silver working in plain (77,19) in Morungol.
Unit (2627): Earns 1190 silver working in plain (77,19) in Morungol.
Unit (2509): Earns 17 silver working in plain (77,19) in Morungol.
Notarcius (1267): Earns 60 silver entertaining in plain (77,19) in
  Morungol.
Unit (579): Earns 20 silver entertaining in plain (77,19) in Morungol.
Virius (1059): Earns 12 silver working in forest (58,20) in Nugyru.
Uncius (1442): Earns 12 silver working in forest (58,20) in Nugyru.
Unit (1331): Earns 12 silver working in forest (58,20) in Nugyru.
Unit (1889): Earns 160 silver working in plain (60,20) in Satiasam.
Unit (1379): Earns 80 silver working in plain (60,20) in Satiasam.
Maro (1276): Earns 20 silver entertaining in plain (62,20) in
  Satiasam.
Cateius (1388): Earns 40 silver entertaining in plain (62,20) in
  Satiasam.
Unit (1650): Earns 149 silver working in plain (64,20) in Satiasam.
Unit (2777): Earns 14 silver working in plain (64,20) in Satiasam.
Unit (2814): Earns 2216 silver working in plain (64,20) in Satiasam.
Unit (1355): Earns 500 silver working in plain (72,20) in Bocholt.
Unit (1444): Earns 1114 silver working in plain (72,20) in Bocholt.
Unit (399): Earns 20 silver entertaining in plain (72,20) in Bocholt.
Allia (1265): Earns 711 silver working in plain (74,20) in Bocholt.
Unit (2112): Earns 1013 silver working in plain (74,20) in Bocholt.
Unit (353): Earns 20 silver entertaining in plain (74,20) in Bocholt.
Unit (1241): Earns 14 silver working in forest (59,21) in Nugyru.
Unit (1822): Earns 150 silver working in plain (61,21) in Satiasam.
Unit (1948): Earns 45 silver working in plain (61,21) in Satiasam.
Unit (1549): Earns 15 silver working in plain (61,21) in Satiasam.
Unit (1662): Earns 160 silver working in plain (63,21) in Satiasam.
Unit (1033): Studies combat.
Unit (1904): Earns 160 silver working in plain (73,21) in Bocholt.
Unit (2734): Earns 16 silver working in plain (73,21) in Bocholt.
Unit (637): Earns 16 silver working in plain (73,21) in Bocholt.
Sonnius (1644): Studies combat.
Unit (2056): Studies observation.
Gasceius (1208): Earns 936 silver working in forest (58,22) in Nugyru.
Unit (1787): Studies stealth.
Unit (278): Studies longbow.
Unit (281): Studies crossbow.
Unit (2504): Studies stealth.
Unit (2188): Studies observation.
Unit (1670): Studies tactics.
Ilfius (1094): Earns 16288 silver working in forest (60,22) in Nugyru.
Cnician (1179): Earns 48 silver working in forest (60,22) in Nugyru.
Justinia (1229): Earns 60 silver entertaining in forest (60,22) in
  Nugyru.
Unit (1821): Earns 160 silver working in plain (62,22) in Satiasam.
Unit (2204): Earns 1600 silver working in plain (62,22) in Satiasam.
Unit (1943): Earns 160 silver working in plain (62,22) in Satiasam.
Rumituris (1382): Earns 154 silver working in plain (64,22) in
  Satiasam.
Unit (1415): Earns 11 silver working in jungle (74,22) in Donndinon.
Unit (1643): Earns 14 silver working in forest (59,23) in Nugyru.
Pallitis (1193): Studies observation.
Jucucolius (352): Earns 4011 silver working in plain (61,23) in
  Satiasam.
Unit (1723): Earns 318 silver working in plain (61,23) in Satiasam.
Synisnius (1142): Earns 120 silver entertaining in plain (61,23) in
  Satiasam.
Unit (2280): Studies combat.
Unit (925): Studies combat.
Unit (2263): Studies observation.
Unit (1993): Studies tactics.
Unit (972): Earns 1500 silver working in swamp (65,23) in Skelid.
Unit (976): Earns 1500 silver working in swamp (65,23) in Skelid.
Unit (1982): Earns 1500 silver working in swamp (65,23) in Skelid.
Trupsilius (584): Earns 160 silver entertaining in swamp (65,23) in
  Skelid.
Unit (299): Earns 100 silver entertaining in swamp (65,23) in Skelid.
Unit (588): Earns 320 silver entertaining in forest (56,24) in
  Mallaig.
Appunia (1195): Earns 20 silver entertaining in forest (56,24) in
  Mallaig.
Unit (1878): Studies longbow.
Lipius (1149): Studies stealth.
Hatunius (1287): Studies stealth.
Octetius (1378): Studies riding.
Marens (1385): Studies crossbow.
Safurnius (1290): Studies observation.
Sylius (1391): Studies combat.
Unit (2279): Studies observation.
Unit (1154): Earns 3190 silver working in plain (60,24) in Satiasam.
Dimius (1057): Earns 15 silver working in plain (60,24) in Satiasam.
Unit (616): Earns 3989 silver working in plain (60,24) in Satiasam.
Matacius (1189): Earns 16 silver working in plain (60,24) in Satiasam.
Unit (586): Earns 20 silver entertaining in plain (60,24) in Satiasam.
Unit (1800): Earns 1904 silver working in plain (62,24) in Satiasam.
Hollius (1314): Earns 13 silver working in swamp (64,24) in Skelid.
Unit (599): Earns 39 silver working in swamp (64,24) in Skelid.
Unit (2788): Studies observation.
Hotulius (1156): Earns 65 silver working in jungle (66,24) in Sefitat.
Unit (615): Earns 182 silver working in jungle (66,24) in Sefitat.
Unit (1010): Earns 12 silver working in jungle (74,24) in Donndinon.
Graenia (1139): Earns 23 silver working in forest (59,25) in Nugyru.
Unit (1065): Earns 11 silver working in forest (59,25) in Nugyru.
Unit (1805): Earns 587 silver working in forest (59,25) in Nugyru.
Unit (1869): Earns 297 silver working in swamp (61,25) in Skelid.
Vermulius (1173): Studies stealth.
Unit (1427): Earns 11 silver working in jungle (73,25) in Donndinon.
Unit (1989): Earns 516 silver working in forest (60,26) in Nugyru.
Unit (1249): Earns 336 silver working in swamp (62,26) in Skelid.
Alvius (1138): Earns 12 silver working in swamp (64,26) in Skelid.
Unit (2812): Earns 12 silver working in swamp (64,26) in Skelid.
Mulatius (1104): Earns 11 silver working in jungle (66,26) in Sefitat.
Unit (1100): Earns 220 silver working in jungle (66,26) in Sefitat.
Jartinnus (1041): Studies stealth.
Frulvius (1299): Studies observation.
Tirelius (1039): Studies spirit.
Caspus (1040): Studies artifact lore.
Gralus (1671): Earns 324 silver working in mountain (68,26) in
  Phidyntia.
Unit (661): Earns 540 silver working in mountain (68,26) in Phidyntia.
Unit (871): Earns 540 silver working in mountain (68,26) in Phidyntia.
Unit (2960): Earns 360 silver working in mountain (68,26) in
  Phidyntia.
Unit (3019): Earns 306 silver working in mountain (68,26) in
  Phidyntia.
Unit (1105): Earns 7200 silver working in mountain (68,26) in
  Phidyntia.
Unit (2782): Earns 18 silver working in mountain (68,26) in Phidyntia.
Unit (232): Earns 18 silver working in mountain (68,26) in Phidyntia.
Unit (1803): Earns 18 silver working in mountain (68,26) in Phidyntia.
Fuspilius (1368): Earns 180 silver working in mountain (68,26) in
  Phidyntia.
Acus (1239): Earns 126 silver working in mountain (68,26) in
  Phidyntia.
Sitenius (1038): Earns 1912 silver entertaining in mountain (68,26) in
  Phidyntia.
Bulius (1488): Earns 126 silver working in mountain (70,26) in
  Phidyntia.
Unit (1342): Studies observation.
Unit (1350): Studies stealth.
Festius (1107): Earns 540 silver entertaining in jungle (72,26) in
  Donndinon.
Unit (1049): Earns 11 silver working in jungle (74,26) in Donndinon.
Unit (2333): Earns 700 silver working in forest (59,27) in Nugyru.
Unit (1883): Earns 494 silver working in swamp (61,27) in Skelid.
Sidilio (1713): Earns 12 silver working in jungle (67,27) in Sefitat.
Invedius (1717): Earns 12 silver working in jungle (67,27) in Sefitat.
Unit (1175): Earns 228 silver working in jungle (67,27) in Sefitat.
Fumilus (1184): Earns 17 silver entertaining in jungle (67,27) in
  Sefitat.
Culiliusus (1158): Studies longbow.
Pespor (1042): Earns 384 silver working in mountain (69,27) in
  Phidyntia.
Unit (2798): Earns 280 silver working in desert (58,28) in Baifelgris.
Unit (2957): Earns 700 silver working in plain (60,28) in Erisort.
Unit (1825): Earns 462 silver working in plain (60,28) in Erisort.
Unit (708): Earns 348 silver working in swamp (62,28) in Skelid.
Arcia (1160): Studies crossbow.
Lodemius (1183): Studies observation.
Malius (1295): Studies observation.
Ammunia (1043): Earns 12 silver working in jungle (68,28) in Sefitat.
Seccirdius (1108): Earns 216 silver working in jungle (68,28) in
  Sefitat.
Calirabor (1063): Earns 12 silver working in jungle (68,28) in
  Sefitat.
Unit (1832): Studies observation.
Unit (1842): Studies tactics.
Unit (1845): Studies stealth.
Ceniulus (1062): Earns 725 silver working in mountain (70,28) in
  Phidyntia.
Unit (2384): Earns 8 silver working in mountain (70,28) in Phidyntia.
Unit (2876): Studies combat.
Unit (1053): Earns 60 silver entertaining in jungle (73,29) in
  Donndinon.
Unit (1936): Earns 20 silver entertaining in plain (52,30) in
  Serilelo.
Unit (1802): Earns 384 silver working in plain (58,30) in Erisort.
Unit (1637): Earns 11 silver working in jungle (74,30) in Donndinon.
Unit (1985): Earns 20 silver entertaining in plain (58,32) in Erisort.
Unit (783): Earns 39 silver working in mountain (74,32) in Gededyki.
Unit (3038): Earns 13 silver working in mountain (74,32) in Gededyki.
Unit (1986): Earns 20 silver entertaining in plain (61,33) in Erisort.
Cadrasius (1258): Earns 141 silver working in mountain (75,33) in
  Gededyki.
Unit (1384): Earns 90 silver working in mountain (75,33) in Gededyki.
Unit (1003): Earns 293 silver working in mountain (75,33) in Gededyki.
Unit (2439): Earns 11 silver working in mountain (75,33) in Gededyki.
Conenanus (1296): Earns 20 silver entertaining in plain (56,34) in
  Fontenaisle.
Clemurius (1198): Earns 20 silver entertaining in plain (58,34) in
  Erisort.
Unit (1136): Earns 276 silver working in mountain (72,34) in Gededyki.
Unit (2711): Earns 12 silver working in mountain (72,34) in Gededyki.
Unit (2717): Earns 12 silver working in mountain (72,34) in Gededyki.
Unit (3039): Earns 30 silver working in mountain (74,34) in Gededyki.
Unit (2722): Earns 15 silver working in mountain (74,34) in Gededyki.
Unit (1226): Earns 60 silver entertaining in mountain (74,34) in
  Gededyki.
Unit (1359): Earns 84 silver working in jungle (76,34) in Kuny.
Unit (2865): Earns 12 silver working in jungle (76,34) in Kuny.
Olcumor (1401): Earns 20 silver entertaining in plain (53,35) in
  Fontenaisle.
Stradilio (1370): Earns 120 silver working in mountain (69,35) in
  Gededyki.
Unit (3040): Earns 36 silver working in mountain (69,35) in Gededyki.
Saudeius (1524): Earns 40 silver entertaining in mountain (71,35) in
  Gededyki.
Unit (3041): Earns 20 silver entertaining in mountain (71,35) in
  Gededyki.
Unit (2727): Earns 20 silver entertaining in mountain (71,35) in
  Gededyki.
Unit (1406): Earns 120 silver working in mountain (73,35) in Gededyki.
Unit (3091): Earns 12 silver working in mountain (73,35) in Gededyki.
Unit (2715): Earns 12 silver working in mountain (73,35) in Gededyki.
Unit (2511): Studies combat.
Unit (1449): Studies combat.
Unit (2868): Studies combat.
Unit (2869): Studies combat.
Unit (1103): Studies combat.
Unit (2870): Earns 140 silver working in mountain (75,35) in Gededyki.
Unit (1572): Earns 12 silver working in jungle (77,35) in Kuny.
Unit (1298): Earns 20 silver entertaining in plain (54,36) in
  Fontenaisle.
Unit (2051): Earns 14 silver working in mountain (74,36) in Gededyki.
Unit (2835): Earns 14 silver working in mountain (74,36) in Gededyki.
Unit (1135): Earns 72 silver working in jungle (76,36) in Kuny.
Unit (2933): Earns 12 silver working in jungle (76,36) in Kuny.
Unit (2912): Earns 12 silver working in jungle (76,36) in Kuny.
Uccius (1244): Earns 15 silver working in mountain (61,37) in Scourie.
Minotrius (1201): Earns 20 silver entertaining in mountain (61,37) in
  Scourie.
Unit (2878): Studies combat.
Unit (2050): Earns 13 silver working in mountain (73,37) in Gededyki.
Unit (1623): Earns 13 silver working in swamp (75,37) in Grimbad.
Unit (2005): Earns 15 silver working in jungle (77,37) in Kuny.
Vilvius (1450): Earns 570 silver working in jungle (77,37) in Kuny.
Unit (1163): Earns 320 silver entertaining in jungle (77,37) in Kuny.
Unit (2064): Earns 140 silver working in mountain (70,38) in Gededyki.
Unit (2747): Earns 14 silver working in mountain (70,38) in Gededyki.
Unit (1809): Earns 13 silver working in mountain (74,38) in Gededyki.
Unit (1702): Earns 11 silver working in swamp (76,38) in Grimbad.
Unit (2019): Earns 11 silver working in jungle (78,38) in Kuny.
Unit (1573): Earns 11 silver working in jungle (78,38) in Kuny.
Bacanius (1044): Earns 26 silver working in jungle (59,39) in
  Reilgris.
Unit (1535): Earns 14 silver working in mountain (71,39) in Gededyki.
Unit (2053): Earns 15 silver working in mountain (73,39) in Gededyki.
Vabinius (1443): Earns 26 silver working in swamp (75,39) in Grimbad.
Unit (2067): Earns 16 silver entertaining in jungle (77,39) in Kuny.
Portia (1464): Earns 80 silver working in mountain (72,40) in
  Gededyki.
Unit (1466): Earns 112 silver working in mountain (72,40) in Gededyki.
Unit (1820): Earns 20 silver entertaining in mountain (72,40) in
  Gededyki.
Unit (2068): Earns 8 silver entertaining in swamp (76,40) in Grimbad.
Unit (1281): Earns 20 silver entertaining in plain (69,41) in Loras.
Unit (3108): Earns 20 silver entertaining in plain (69,41) in Loras.
Unit (1625): Earns 14 silver working in mountain (71,41) in Gededyki.
Unit (1484): Earns 12 silver working in mountain (73,41) in Gededyki.
Unit (2562): Earns 19 silver working in plain (64,42) in Lilois.
Unit (2561): Earns 18 silver working in plain (66,42) in Lilois.
Unit (2553): Earns 15 silver working in plain (68,42) in Loras.
Unit (1518): Earns 15 silver working in plain (70,42) in Loras.
Unit (1632): Earns 12 silver working in mountain (72,42) in Gededyki.
Unit (1994): Earns 12 silver working in jungle (59,43) in Reilgris.
Esdrifus (1570): Earns 60 silver entertaining in jungle (59,43) in
  Reilgris.
Unit (2555): Earns 14 silver working in plain (67,43) in Loras.
Unit (2552): Earns 16 silver working in plain (69,43) in Loras.
Unit (1645): Earns 15 silver working in plain (71,43) in Loras.
Unit (2871): Earns 12 silver working in mountain (73,43) in Gededyki.
Unit (2560): Earns 17 silver working in plain (66,44) in Lilois.
Unit (1527): Earns 16 silver working in plain (68,44) in Loras.
Unit (1696): Earns 36 silver working in plain (70,44) in Loras.
Unit (3015): Earns 18 silver working in plain (70,44) in Loras.
Unit (1868): Earns 15 silver working in plain (72,44) in Loras.
Unit (1646): Earns 14 silver working in plain (67,45) in Loras.
Unit (2557): Earns 15 silver working in plain (66,46) in Lilois.
Unit (2554): Earns 15 silver working in plain (68,46) in Loras.
Unit (2556): Earns 15 silver working in plain (65,47) in Lilois.
Unit (2559): Earns 16 silver working in plain (67,47) in Lilois.
Trato (1243): Earns 20 silver entertaining in plain (66,48) in Lilois.
Unit (2558): Earns 14 silver working in plain (68,48) in Murom.
Unit (1638): Earns 14 silver working in plain (65,49) in Lilois.
Unit (1246): Studies entertainment.
Unit (1109): Earns 14 silver working in plain (65,51) in Branrun.
Unit (1268): Studies entertainment.
Unit (3018): Earns 14 silver working in mountain (63,53) in Dedotyl.
Unit (1161): Earns 14 silver working in plain (65,53) in Branrun.
Unit (3016): Earns 14 silver working in plain (64,54) in Branrun.
Unit (3024): Earns 14 silver working in mountain (66,54) in Beaufor.
Unit (3020): Earns 14 silver working in plain (63,55) in Branrun.
Unit (3049): Earns 12 silver working in mountain (65,55) in Beaufor.
Unit (3036): Earns 14 silver working in plain (62,56) in Branrun.
Unit (3120): Earns 16 silver working in plain (64,56) in Branrun.
Unit (3022): Earns 15 silver working in plain (63,57) in Branrun.
Unit (1199): Earns 13 silver working in mountain (65,57) in Beaufor.
Unit (3121): Earns 18 silver working in plain (62,58) in Burongha.
Unit (2917): Earns 18 silver working in plain (62,58) in Burongha.
Unit (3122): Earns 13 silver working in mountain (64,58) in Beaufor.
Unit (3123): Earns 14 silver working in mountain (66,58) in Beaufor.
Unit (2982): Earns 14 silver working in plain (61,59) in Burongha.
Unit (3067): Earns 17 silver working in plain (63,59) in Burongha.
Unit (3042): Earns 18 silver working in plain (62,60) in Burongha.
Unit (3179): Earns 13 silver working in mountain (66,60) in Beaufor.
Unit (1958): Earns 11 silver working in desert (68,60) in Beaubur.
Unit (3066): Earns 15 silver working in plain (61,61) in Burongha.
Unit (3069): Earns 13 silver working in plain (63,61) in Burongha.
Unit (3113): Earns 14 silver working in mountain (65,61) in Beaufor.
Unit (3177): Earns 14 silver working in mountain (67,61) in Beaufor.
Unit (710): Earns 16 silver working in plain (64,62) in Ranaw.
Unit (3130): Earns 16 silver working in plain (66,62) in Ranaw.
Unit (1260): Earns 13 silver working in desert (68,62) in Beaubur.
Unit (3100): Earns 117 silver working in mountain (63,63) in Rothrila.
Unit (1806): Earns 17 silver working in plain (65,63) in Ranaw.
Unit (1914): Earns 15 silver working in plain (64,64) in Ranaw.
Unit (1079): Earns 15 silver working in plain (66,64) in Ranaw.
Unit (1867): Earns 12 silver working in jungle (68,64) in Belver.
Unit (1900): Earns 13 silver working in mountain (63,65) in Rothrila.
Unit (1896): Earns 17 silver working in plain (65,65) in Ranaw.
Unit (3055): Earns 14 silver working in jungle (66,66) in Belver.
Unit (3156): Earns 11 silver working in jungle (68,66) in Belver.
Unit (1961): Earns 14 silver working in mountain (63,67) in Rothrila.
Unit (1984): Earns 14 silver working in plain (65,67) in Ranaw.
Unit (1870): Earns 13 silver working in jungle (67,67) in Belver.
Ocladia (1628): Earns 288 silver working in plain (64,68) in Ranaw.

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
Unfriendly : SkyRaiders (14), Sol Invictus (20).
Neutral : Grey Wind (17), The Moon Brotherhood (12), Creatures (2).
Friendly : none.
Ally : SuperNerrs 001 (13), Multiple Bite Wounds (10), New Horizons
  (16), Warlords Inc (19).

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

* Aspracus (1067), Gragblod (7), revealing faction, 3 vikings [VIKI],
  30 silver [SILV]. Weight: 30. Capacity: 0/0/45/0. Skills:
  entertainment [ENTE] 1 (30).
* Unit (21), Gragblod (7), revealing faction, 40 vikings [VIKI], 160
  silver [SILV]. Weight: 400. Capacity: 0/0/600/0. Skills: combat
  [COMB] 1 (30).
* Unit (34), Gragblod (7), revealing faction, 74 silver [SILV], 2
  vikings [VIKI]. Weight: 20. Capacity: 0/0/30/0. Skills: combat
  [COMB] 1 (30).
- Lumber Guy (2999), New Horizons (16), leader [LEAD], winged horse
  [WING].


forest (76,0) in Ranshya, 239 peasants (vikings), $956.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $669).
  Wanted: none.
  For Sale: 47 vikings [VIKI] at $56, 9 leaders [LEAD] at $112.
  Entertainment available: $47.
  Products: 36 livestock [LIVE], 34 wood [WOOD], 17 furs [FUR], 10
    herbs [HERB].

Exits:
  Southeast : forest (77,1) in Ranshya.
  South : forest (76,2) in Ranshya.
  Southwest : forest (75,1) in Ranshya.

* Gula (59), Gragblod (7), revealing faction, 2 vikings [VIKI], 20
  silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills: entertainment
  [ENTE] 1 (30).
* Cuco (32), Gragblod (7), revealing faction, 47 vikings [VIKI], 3
  orcs [ORC], 169 silver [SILV]. Weight: 500. Capacity: 0/0/750/0.
  Skills: combat [COMB] 1 (30).
* Unit (49), Gragblod (7), revealing faction, 37 silver [SILV], 2
  vikings [VIKI]. Weight: 20. Capacity: 0/0/30/0. Skills: combat
  [COMB] 1 (30).


forest (78,0) in Ranshya, 302 peasants (wood elves), $1208.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $845).
  Wanted: none.
  For Sale: 60 wood elves [WELF] at $56, 12 leaders [LEAD] at $112.
  Entertainment available: $60.
  Products: 31 livestock [LIVE], 36 wood [WOOD], 17 furs [FUR], 13
    herbs [HERB].

Exits:
  Southeast : ocean (79,1) in Atlantis Ocean.
  South : forest (78,2) in Ranshya.
  Southwest : forest (77,1) in Ranshya.

* Agrelus (1089), Gragblod (7), revealing faction, tribesman [TMAN],
  40 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: none.
* Unit (47), Gragblod (7), revealing faction, 38 silver [SILV], wood
  elf [WELF]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
  (30).


forest (75,1) in Ranshya, 215 peasants (vikings), $860.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $602).
  Wanted: none.
  For Sale: 43 vikings [VIKI] at $56, 8 leaders [LEAD] at $112.
  Entertainment available: $43.
  Products: 34 grain [GRAI], 30 wood [WOOD], 17 furs [FUR], 16 herbs
    [HERB].

Exits:
  Northeast : forest (76,0) in Ranshya.
  Southeast : forest (76,2) in Ranshya.
  South : forest (75,3) in Ranshya.
  Southwest : mountain (74,2) in Nakyce.
  Northwest : forest (74,0) in Ranshya.

* Cocrius (582), Gragblod (7), revealing faction, 2 vikings [VIKI], 20
  silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills: entertainment
  [ENTE] 1 (30).
* Unit (40), Gragblod (7), revealing faction, 20 vikings [VIKI], 80
  silver [SILV]. Weight: 200. Capacity: 0/0/300/0. Skills: combat
  [COMB] 1 (30).
* Unit (79), Gragblod (7), revealing faction, 12 silver [SILV], 2
  vikings [VIKI]. Weight: 20. Capacity: 0/0/30/0. Skills: combat
  [COMB] 1 (30).


forest (77,1) in Ranshya, 334 peasants (vikings), $1002.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $868).
  Wanted: none.
  For Sale: 66 vikings [VIKI] at $52, 13 leaders [LEAD] at $104.
  Entertainment available: $50.
  Products: 37 grain [GRAI], 31 wood [WOOD], 15 furs [FUR], 14 herbs
    [HERB].

Exits:
  Northeast : forest (78,0) in Ranshya.
  Southeast : forest (78,2) in Ranshya.
  South : forest (77,3) in Ranshya.
  Southwest : forest (76,2) in Ranshya.
  Northwest : forest (76,0) in Ranshya.

* Unit (957), Gragblod (7), revealing faction, viking [VIKI], 15
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (142), Gragblod (7), revealing faction, 14 silver [SILV],
  viking [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).


forest (76,2) in Ranshya, 294 peasants (wood elves), $882.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $764).
  Wanted: none.
  For Sale: 58 wood elves [WELF] at $52, 11 leaders [LEAD] at $104.
  Entertainment available: $44.
  Products: 33 grain [GRAI], 23 wood [WOOD], 16 furs [FUR], 18 herbs
    [HERB].

Exits:
  North : forest (76,0) in Ranshya.
  Northeast : forest (77,1) in Ranshya.
  Southeast : forest (77,3) in Ranshya.
  South : forest (76,4) in Ranshya.
  Southwest : forest (75,3) in Ranshya.
  Northwest : forest (75,1) in Ranshya.

* Unit (176), Gragblod (7), revealing faction, 58 silver [SILV], 4
  wood elves [WELF]. Weight: 40. Capacity: 0/0/60/0. Skills: combat
  [COMB] 1 (30).
* Unit (27), Gragblod (7), revealing faction, 57 silver [SILV], 2
  vikings [VIKI]. Weight: 20. Capacity: 0/0/30/0. Skills: combat
  [COMB] 1 (30).

+ Shaft [1] : Shaft, contains an inner location.
  * Unit (33), Gragblod (7), revealing faction, 6 vikings [VIKI], 36
    silver [SILV]. Weight: 60. Capacity: 0/0/90/0. Skills: combat
    [COMB] 1 (30).


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


forest (76,4) in Ranshya, 240 peasants (wood elves), $960.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $672).
  Wanted: none.
  For Sale: 48 wood elves [WELF] at $56, 9 leaders [LEAD] at $112.
  Entertainment available: $48.
  Products: 37 livestock [LIVE], 35 wood [WOOD], 18 furs [FUR], 10
    herbs [HERB].

Exits:
  North : forest (76,2) in Ranshya.
  Northeast : forest (77,3) in Ranshya.
  Southeast : forest (77,5) in Ranshya.
  South : forest (76,6) in Ranshya.
  Southwest : ocean (75,5) in Atlantis Ocean.
  Northwest : forest (75,3) in Ranshya.

* Unit (71), Gragblod (7), revealing faction, receiving no aid, viking
  [VIKI], 20 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
  combat [COMB] 1 (30).
* Unit (153), Gragblod (7), revealing faction, receiving no aid, wood
  elf [WELF], 16 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).


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


forest (77,5) in Ranshya, 395 peasants (vikings), $1580.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $1106).
  Wanted: none.
  For Sale: 79 vikings [VIKI] at $56, 15 leaders [LEAD] at $112.
  Entertainment available: $79.
  Products: 30 livestock [LIVE], 37 wood [WOOD], 16 furs [FUR], 15
    herbs [HERB].

Exits:
  North : forest (77,3) in Ranshya.
  Northeast : ocean (78,4) in Atlantis Ocean.
  Southeast : tundra (78,6) in Drogbad.
  South : tundra (77,7) in Drogbad.
  Southwest : forest (76,6) in Ranshya.
  Northwest : forest (76,4) in Ranshya.

* Unit (654), Gragblod (7), revealing faction, receiving no aid, hill
  dwarf [HDWA], 72 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).
* Unit (238), Gragblod (7), revealing faction, 7 hill dwarves [HDWA],
  37 silver [SILV]. Weight: 70. Capacity: 0/0/105/0. Skills: combat
  [COMB] 1 (30).


tundra (79,5) in Drogbad, 191 peasants (vikings), $573.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $496).
  Wanted: none.
  For Sale: 38 vikings [VIKI] at $52, 7 leaders [LEAD] at $104.
  Entertainment available: $28.
  Products: 18 livestock [LIVE], 19 furs [FUR], 13 herbs [HERB].

Exits:
  North : ocean (79,3) in Atlantis Ocean.
  Northeast : tundra (80,4) in Drogbad.
  Southeast : tundra (80,6) in Drogbad.
  South : ocean (79,7) in Atlantis Ocean.
  Southwest : tundra (78,6) in Drogbad.
  Northwest : ocean (78,4) in Atlantis Ocean.

* Natesius (1280), Gragblod (7), revealing faction, receiving no aid,
  sea elf [SELF], 20 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: entertainment [ENTE] 1 (30).
* Unit (46), Gragblod (7), revealing faction, receiving no aid, 3
  vikings [VIKI], 18 silver [SILV]. Weight: 30. Capacity: 0/0/45/0.
  Skills: combat [COMB] 1 (30).
* Unit (193), Gragblod (7), revealing faction, receiving no aid, 23
  silver [SILV], viking [VIKI]. Weight: 10. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).


tundra (81,5) in Drogbad, 126 peasants (vikings), $126.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $11 (Max: $277).
  Wanted: none.
  For Sale: 25 vikings [VIKI] at $44, 5 leaders [LEAD] at $88.
  Entertainment available: $6.
  Products: 10 grain [GRAI], 13 furs [FUR], 18 herbs [HERB].

Exits:
  North : ocean (81,3) in Atlantis Ocean.
  Northeast : ocean (82,4) in Atlantis Ocean.
  Southeast : forest (82,6) in Surlanque.
  South : forest (81,7) in Surlanque.
  Southwest : tundra (80,6) in Drogbad.
  Northwest : tundra (80,4) in Drogbad.

* Deleius (1118), Gragblod (7), revealing faction, sea elf [SELF], 46
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).


mountain (74,6) in Nakyce, 367 peasants (sea elves), $1101.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $954).
  Wanted: none.
  For Sale: 73 sea elves [SELF] at $52, 14 leaders [LEAD] at $104.
  Entertainment available: $55.
  Products: 24 grain [GRAI], 33 iron [IRON], 12 stone [STON].

Exits:
  North : mountain (74,4) in Nakyce.
  Northeast : ocean (75,5) in Atlantis Ocean.
  Southeast : mountain (75,7) in Nakyce.
  South : mountain (74,8) in Nakyce.
  Southwest : mountain (73,7) in Nakyce.
  Northwest : mountain (73,5) in Nakyce, contains Robaedale [city].

* Olceius (287), Gragblod (7), revealing faction, 3 sea elves [SELF],
  9 silver [SILV]. Weight: 30. Capacity: 0/0/45/0. Skills: combat
  [COMB] 1 (30).
* Unit (292), Gragblod (7), revealing faction, sea elf [SELF], 3
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (210), Gragblod (7), revealing faction, 3 silver [SILV], sea
  elf [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
  (30).


forest (76,6) in Ranshya, 281 peasants (sea elves), $562.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $674).
  Wanted: none.
  For Sale: 56 sea elves [SELF] at $48, 11 leaders [LEAD] at $96.
  Entertainment available: $28.
  Products: 33 grain [GRAI], 26 wood [WOOD], 13 furs [FUR], 15 herbs
    [HERB].

Exits:
  North : forest (76,4) in Ranshya.
  Northeast : forest (77,5) in Ranshya.
  Southeast : tundra (77,7) in Drogbad.
  South : forest (76,8) in Uzrot.
  Southwest : mountain (75,7) in Nakyce.
  Northwest : ocean (75,5) in Atlantis Ocean.

* Unit (202), Gragblod (7), revealing faction, 5 sea elves [SELF], 10
  silver [SILV]. Weight: 50. Capacity: 0/0/75/0. Skills: combat [COMB]
  1 (30).
* Unit (1212), Gragblod (7), revealing faction, 231 silver [SILV], 10
  hill dwarves [HDWA]. Weight: 100. Capacity: 0/0/150/0. Skills:
  combat [COMB] 3 (180).


tundra (80,6) in Drogbad, 114 peasants (eskimos), $114.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $11 (Max: $250).
  Wanted: none.
  For Sale: 22 eskimos [ESKI] at $44, 4 leaders [LEAD] at $88.
  Entertainment available: $5.
  Products: 12 livestock [LIVE], 17 furs [FUR], 13 herbs [HERB].

Exits:
  North : tundra (80,4) in Drogbad.
  Northeast : tundra (81,5) in Drogbad.
  Southeast : forest (81,7) in Surlanque.
  South : forest (80,8) in Surlanque, contains Roi-nael [city].
  Southwest : ocean (79,7) in Atlantis Ocean.
  Northwest : tundra (79,5) in Drogbad.

* Unit (209), Gragblod (7), revealing faction, sea elf [SELF], 30
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (355), Gragblod (7), revealing faction, 10 vikings [VIKI], 40
  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 3 (180).


forest (82,6) in Surlanque, 303 peasants (wood elves), $909.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $787).
  Wanted: none.
  For Sale: 60 wood elves [WELF] at $52, 12 leaders [LEAD] at $104.
  Entertainment available: $45.
  Products: 29 grain [GRAI], 37 wood [WOOD], 19 furs [FUR], 14 herbs
    [HERB].

Exits:
  North : ocean (82,4) in Atlantis Ocean.
  Northeast : ocean (83,5) in Atlantis Ocean.
  Southeast : ocean (83,7) in Atlantis Ocean.
  South : forest (82,8) in Surlanque.
  Southwest : forest (81,7) in Surlanque.
  Northwest : tundra (81,5) in Drogbad.

* Unit (231), Gragblod (7), revealing faction, sea elf [SELF], 3
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (227), Gragblod (7), revealing faction, wood elf [WELF].
  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).


mountain (73,7) in Nakyce, 283 peasants (orcs), $566.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $679).
  Wanted: none.
  For Sale: 56 orcs [ORC] at $48, 11 leaders [LEAD] at $96.
  Entertainment available: $28.
  Products: 23 livestock [LIVE], 22 iron [IRON], 17 stone [STON].

Exits:
  North : mountain (73,5) in Nakyce, contains Robaedale [city].
  Northeast : mountain (74,6) in Nakyce.
  Southeast : mountain (74,8) in Nakyce.
  South : mountain (73,9) in Nakyce.
  Southwest : mountain (72,8) in Nakyce.
  Northwest : ocean (72,6) in Atlantis Ocean.

* Candidus (198), Gragblod (7), revealing faction, hill dwarf [HDWA],
  2 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
  entertainment [ENTE] 1 (30).
* Unit (596), Gragblod (7), revealing faction, 10 hill dwarves [HDWA],
  20 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 3 (180).
* Unit (847), Gragblod (7), revealing faction, 20 orcs [ORC], 40
  silver [SILV]. Weight: 200. Capacity: 0/0/300/0. Skills: combat
  [COMB] 1 (30).
* Unit (256), Gragblod (7), revealing faction, 29 silver [SILV], 3
  orcs [ORC]. Weight: 30. Capacity: 0/0/45/0. Skills: combat [COMB] 1
  (30).


mountain (75,7) in Nakyce, 278 peasants (hill dwarves), $1112.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $778).
  Wanted: none.
  For Sale: 55 hill dwarves [HDWA] at $56, 11 leaders [LEAD] at $112.
  Entertainment available: $55.
  Products: 38 grain [GRAI], 20 iron [IRON], 11 stone [STON].

Exits:
  North : ocean (75,5) in Atlantis Ocean.
  Northeast : forest (76,6) in Ranshya.
  Southeast : forest (76,8) in Uzrot.
  South : mountain (75,9) in Nakyce.
  Southwest : mountain (74,8) in Nakyce.
  Northwest : mountain (74,6) in Nakyce.

* Unit (384), Gragblod (7), revealing faction, leader [LEAD], 732
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30), tactics [TACT] 5 (450), stealth [STEA] 2 (120).
* Unit (74), Gragblod (7), revealing faction, 10 hill dwarves [HDWA],
  1532 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 2 (98).
* Unit (1071), Gragblod (7), revealing faction, 211 silver [SILV],
  leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  3 (210).
* Unit (378), Gragblod (7), revealing faction, 2 silver [SILV], leader
  [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: observation [OBSE] 4
  (330).
* Unit (261), Gragblod (7), revealing faction, 77 hill dwarves [HDWA],
  971 silver [SILV]. Weight: 770. Capacity: 0/0/1155/0. Skills: combat
  [COMB] 1 (38).
* Unit (386), Gragblod (7), revealing faction, 10 hill dwarves [HDWA].
  Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1 (30).


forest (81,7) in Surlanque, 200 peasants (wood elves), $800.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $560).
  Wanted: none.
  For Sale: 40 wood elves [WELF] at $56, 8 leaders [LEAD] at $112.
  Entertainment available: $40.
  Products: 34 grain [GRAI], 31 wood [WOOD], 10 furs [FUR], 11 herbs
    [HERB].

Exits:
  North : tundra (81,5) in Drogbad.
  Northeast : forest (82,6) in Surlanque.
  Southeast : forest (82,8) in Surlanque.
  South : forest (81,9) in Surlanque.
  Southwest : forest (80,8) in Surlanque, contains Roi-nael [city].
  Northwest : tundra (80,6) in Drogbad.

* Cassia (996), Gragblod (7), revealing faction, wood elf [WELF], 12
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: entertainment
  [ENTE] 1 (30).
* Unit (1437), Gragblod (7), revealing faction, wood elf [WELF], 12
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (700), Gragblod (7), revealing faction, 10 wood elves [WELF],
  120 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 1 (30).
* Unit (306), Gragblod (7), revealing faction, wood elf [WELF], 12
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (358), Gragblod (7), revealing faction, 83 silver [SILV], 2
  wood elves [WELF]. Weight: 20. Capacity: 0/0/30/0. Skills: combat
  [COMB] 1 (30).


mountain (72,8) in Nakyce, 343 peasants (vikings), $686.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $823).
  Wanted: none.
  For Sale: 68 vikings [VIKI] at $48, 13 leaders [LEAD] at $96.
  Entertainment available: $34.
  Products: 23 livestock [LIVE], 36 iron [IRON], 15 stone [STON].

Exits:
  North : ocean (72,6) in Atlantis Ocean.
  Northeast : mountain (73,7) in Nakyce.
  Southeast : mountain (73,9) in Nakyce.
  South : mountain (72,10) in Nakyce.
  Southwest : mountain (71,9) in Nakyce.
  Northwest : ocean (71,7) in Atlantis Ocean.

- Funny Guard (3419), on guard, New Horizons (16), behind, leader
  [LEAD].
* Unit (1826), Gragblod (7), revealing faction, 10 hill dwarves
  [HDWA], 1109 silver [SILV]. Weight: 100. Capacity: 0/0/150/0.
  Skills: combat [COMB] 3 (180).


forest (76,8) in Uzrot, 284 peasants (vikings), $852.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $738).
  Wanted: none.
  For Sale: 56 vikings [VIKI] at $52, 11 leaders [LEAD] at $104.
  Entertainment available: $42.
  Products: 39 grain [GRAI], 36 wood [WOOD], 14 furs [FUR], 10 herbs
    [HERB].

Exits:
  North : forest (76,6) in Ranshya.
  Northeast : tundra (77,7) in Drogbad.
  Southeast : forest (77,9) in Uzrot.
  South : forest (76,10) in Uzrot.
  Southwest : mountain (75,9) in Nakyce.
  Northwest : mountain (75,7) in Nakyce.

* Unit (241), Gragblod (7), revealing faction, hill dwarf [HDWA], 3
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (593), Gragblod (7), revealing faction, 2 silver [SILV], viking
  [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
  (30).


forest (80,8) in Surlanque, contains Roi-nael [city], 3253 peasants
  (wood elves), $16265.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $15 (Max: $9759).
  Wanted: 180 grain [GRAI] at $27, 134 livestock [LIVE] at $23, 62
    iron [IRON] at $62, 144 fish [FISH] at $26, 65 horses [HORS] at
    $45, 53 crossbows [XBOW] at $90, 39 pearls [PEAR] at $153, 23
    figurines [FIGU] at $141.
  For Sale: 46 wood [WOOD] at $57, 61 furs [FUR] at $47, 35 longbows
    [LBOW] at $101, 51 spices [SPIC] at $72, 23 silk [SILK] at $64,
    650 wood elves [WELF] at $60, 130 leaders [LEAD] at $120.
  Entertainment available: $813.
  Products: 38 grain [GRAI], 28 wood [WOOD], 19 furs [FUR], 10 herbs
    [HERB].

Exits:
  North : tundra (80,6) in Drogbad.
  Northeast : forest (81,7) in Surlanque.
  Southeast : forest (81,9) in Surlanque.
  South : forest (80,10) in Surlanque.
  Southwest : forest (79,9) in Surlanque.
  Northwest : ocean (79,7) in Atlantis Ocean.

- City Guard (17), on guard, 120 leaders [LEAD], 120 swords [SWOR].
* Passius (72), Gragblod (7), revealing faction, 34 wood elves [WELF],
  340 silver [SILV]. Weight: 340. Capacity: 0/0/510/0. Skills:
  entertainment [ENTE] 1 (30).
* Unit (297), Gragblod (7), revealing faction, 100 vikings [VIKI], 500
  silver [SILV]. Weight: 1000. Capacity: 0/0/1500/0. Skills: combat
  [COMB] 1 (30).
* Unit (786), Gragblod (7), revealing faction, 10 vikings [VIKI], 9
  grain [GRAI], 50 silver [SILV]. Weight: 145. Capacity: 0/0/150/0.
  Skills: combat [COMB] 1 (30).
* Unit (434), Gragblod (7), revealing faction, leader [LEAD], 15
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  2 (120).
* Unit (552), Gragblod (7), revealing faction, 2822 silver [SILV], 25
  longbows [LBOW], 10 wood elves [WELF]. Weight: 125. Capacity:
  0/0/150/0. Skills: longbow [LBOW] 1 (30).
* Unit (360), Gragblod (7), revealing faction, 45 silver [SILV],
  leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: longbow
  [LBOW] 1 (60).


forest (82,8) in Surlanque, 396 peasants (sea elves), $792.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $950).
  Wanted: none.
  For Sale: 79 sea elves [SELF] at $48, 15 leaders [LEAD] at $96.
  Entertainment available: $39.
  Products: 33 livestock [LIVE], 31 wood [WOOD], 10 furs [FUR], 13
    herbs [HERB].

Exits:
  North : forest (82,6) in Surlanque.
  Northeast : ocean (83,7) in Atlantis Ocean.
  Southeast : ocean (83,9) in Atlantis Ocean.
  South : ocean (82,10) in Atlantis Ocean.
  Southwest : forest (81,9) in Surlanque.
  Northwest : forest (81,7) in Surlanque.

* Unit (233), Gragblod (7), revealing faction, 6 sea elves [SELF],
  figurines [FIGU], 72 silver [SILV]. Weight: 61. Capacity: 0/0/90/0.
  Skills: combat [COMB] 1 (30).
* Unit (604), Gragblod (7), revealing faction, 33 silver [SILV], sea
  elf [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
  (30).


mountain (73,9) in Nakyce, 362 peasants (hill dwarves), $1448.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $1013).
  Wanted: none.
  For Sale: 72 hill dwarves [HDWA] at $56, 14 leaders [LEAD] at $112.
  Entertainment available: $72.
  Products: 28 grain [GRAI], 30 iron [IRON], 18 stone [STON].

Exits:
  North : mountain (73,7) in Nakyce.
  Northeast : mountain (74,8) in Nakyce.
  Southeast : mountain (74,10) in Nakyce, contains Cirrond [city].
  South : swamp (73,11) in Issnina.
  Southwest : mountain (72,10) in Nakyce.
  Northwest : mountain (72,8) in Nakyce.

* Stractius (1181), Gragblod (7), revealing faction, 4 orcs [ORC], 575
  silver [SILV]. Weight: 40. Capacity: 0/0/60/0. Skills: combat [COMB]
  4 (300).
* Unit (240), Gragblod (7), revealing faction, 75 hill dwarves [HDWA],
  2836 silver [SILV]. Weight: 750. Capacity: 0/0/1125/0. Skills:
  combat [COMB] 3 (180).
* Unit (300), Gragblod (7), behind, revealing faction, leader [LEAD],
  1430 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: tactics
  [TACT] 5 (450), riding [RIDI] 2 (120), observation [OBSE] 3 (210).
* Unit (770), Gragblod (7), revealing faction, leader [LEAD], 232
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  4 (390).
* Unit (591), Gragblod (7), revealing faction, 10 hill dwarves [HDWA],
  624 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 3 (180).
* Unit (780), Gragblod (7), revealing faction, 200 silver [SILV], 10
  hill dwarves [HDWA]. Weight: 100. Capacity: 0/0/150/0. Skills:
  combat [COMB] 1 (30).
* Unit (1165), Gragblod (7), revealing faction, 200 silver [SILV], 10
  hill dwarves [HDWA]. Weight: 100. Capacity: 0/0/150/0. Skills:
  combat [COMB] 1 (30).


mountain (75,9) in Nakyce, 303 peasants (hill dwarves), $606.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $727).
  Wanted: none.
  For Sale: 60 hill dwarves [HDWA] at $48, 12 leaders [LEAD] at $96.
  Entertainment available: $30.
  Products: 20 livestock [LIVE], 28 iron [IRON], 13 stone [STON].

Exits:
  North : mountain (75,7) in Nakyce.
  Northeast : forest (76,8) in Uzrot.
  Southeast : forest (76,10) in Uzrot.
  South : forest (75,11) in Uzrot.
  Southwest : mountain (74,10) in Nakyce, contains Cirrond [city].
  Northwest : mountain (74,8) in Nakyce.

* Unit (1162), Gragblod (7), revealing faction, hill dwarf [HDWA], 2
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (645), Gragblod (7), revealing faction, 10 hill dwarves [HDWA],
  20 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 1 (30).
* Unit (1294), Gragblod (7), revealing faction, 40 silver [SILV], 2
  hill dwarves [HDWA]. Weight: 20. Capacity: 0/0/30/0. Skills: combat
  [COMB] 1 (30).


forest (77,9) in Uzrot, 273 peasants (sea elves), $546.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $655).
  Wanted: none.
  For Sale: 54 sea elves [SELF] at $48, 10 leaders [LEAD] at $96.
  Entertainment available: $27.
  Products: 34 grain [GRAI], 22 wood [WOOD], 17 furs [FUR], 14 herbs
    [HERB].

Exits:
  North : tundra (77,7) in Drogbad.
  Northeast : tundra (78,8) in Drogbad.
  Southeast : ocean (78,10) in Atlantis Ocean.
  South : forest (77,11) in Uzrot.
  Southwest : forest (76,10) in Uzrot.
  Northwest : forest (76,8) in Uzrot.

* Unit (1021), Gragblod (7), revealing faction, 2 hill dwarves [HDWA],
  4 silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills: combat
  [COMB] 1 (30).
* Unit (635), Gragblod (7), revealing faction, 10 hill dwarves [HDWA],
  20 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 3 (180).
* Unit (1332), Gragblod (7), revealing faction, 70 silver [SILV], sea
  elf [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
  (30).
- Lumber (1862), New Horizons (16), avoiding, behind, leader [LEAD],
  winged horse [WING].


forest (79,9) in Surlanque, 270 peasants (vikings), $1080.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $756).
  Wanted: none.
  For Sale: 54 vikings [VIKI] at $56, 10 leaders [LEAD] at $112.
  Entertainment available: $54.
  Products: 36 grain [GRAI], 27 wood [WOOD], 15 furs [FUR], 11 herbs
    [HERB].

Exits:
  North : ocean (79,7) in Atlantis Ocean.
  Northeast : forest (80,8) in Surlanque, contains Roi-nael [city].
  Southeast : forest (80,10) in Surlanque.
  South : forest (79,11) in Surlanque.
  Southwest : ocean (78,10) in Atlantis Ocean.
  Northwest : tundra (78,8) in Drogbad.

* Casceius (1058), Gragblod (7), revealing faction, 2 vikings [VIKI],
  8 silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills: combat
  [COMB] 1 (30).
* Unit (1508), Gragblod (7), revealing faction, viking [VIKI], 4
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (1420), Gragblod (7), revealing faction, 4 silver [SILV],
  viking [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).


forest (81,9) in Surlanque, 384 peasants (vikings), $1152.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $998).
  Wanted: none.
  For Sale: 76 vikings [VIKI] at $52, 15 leaders [LEAD] at $104.
  Entertainment available: $57.
  Products: 32 grain [GRAI], 23 wood [WOOD], 14 furs [FUR], 11 herbs
    [HERB].

Exits:
  North : forest (81,7) in Surlanque.
  Northeast : forest (82,8) in Surlanque.
  Southeast : ocean (82,10) in Atlantis Ocean.
  South : ocean (81,11) in Atlantis Ocean.
  Southwest : forest (80,10) in Surlanque.
  Northwest : forest (80,8) in Surlanque, contains Roi-nael [city].

* Unit (1192), Gragblod (7), behind, revealing faction, leader [LEAD],
  1391 silver [SILV], horse [HORS]. Weight: 60. Capacity: 0/70/85/0.
  Skills: combat [COMB] 1 (30), tactics [TACT] 5 (450), observation
  [OBSE] 3 (270).
* Unit (1227), Gragblod (7), revealing faction, leader [LEAD], 3
  horses [HORS], 3 fish [FISH], vodka [VODK], cashmere [CASH], caviar
  [CAVI], 2 herbs [HERB], mink [MINK], silk [SILK], wine [WINE], 420
  silver [SILV]. Weight: 189. Capacity: 0/210/225/0. Skills: combat
  [COMB] 3 (180).
* Unit (296), Gragblod (7), revealing faction, 10 vikings [VIKI], 112
  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 3 (180).
* Unit (1358), Gragblod (7), revealing faction, 10 vikings [VIKI], 114
  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 1 (30).
* Unit (237), Gragblod (7), revealing faction, 20 vikings [VIKI], 228
  silver [SILV]. Weight: 200. Capacity: 0/0/300/0. Skills: combat
  [COMB] 3 (180).
* Unit (242), Gragblod (7), revealing faction, 10 vikings [VIKI], 114
  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 3 (180).
* Unit (363), Gragblod (7), revealing faction, 10 vikings [VIKI], 114
  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 3 (180).
* Unit (817), Gragblod (7), revealing faction, 10 vikings [VIKI], 114
  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 3 (180).
* Unit (917), Gragblod (7), revealing faction, 10 vikings [VIKI], 8813
  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 2 (90).
* Unit (922), Gragblod (7), revealing faction, 10 vikings [VIKI], 114
  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 1 (30).
* Unit (862), Gragblod (7), revealing faction, 10 vikings [VIKI], 114
  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 3 (180).
* Unit (863), Gragblod (7), revealing faction, 10 vikings [VIKI], 297
  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 3 (180).
* Unit (705), Gragblod (7), revealing faction, 216 silver [SILV],
  leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: longbow
  [LBOW] 3 (180).


mountain (74,10) in Nakyce, contains Cirrond [city], 2496 peasants
  (hill dwarves), $14976.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $7987).
  Wanted: 124 grain [GRAI] at $20, 182 livestock [LIVE] at $26, 23
    herbs [HERB] at $54, 36 plate armor [PARM] at $516, 15 figurines
    [FIGU] at $118, vodka [VODK] at $142.
  For Sale: 22 longbows [LBOW] at $95, 20 wagons [WAGO] at $172, 15
    wine [WINE] at $81, 499 hill dwarves [HDWA] at $64, 99 leaders
    [LEAD] at $128.
  Entertainment available: $748.
  Products: 33 grain [GRAI], 37 iron [IRON], 16 stone [STON].

Exits:
  North : mountain (74,8) in Nakyce.
  Northeast : mountain (75,9) in Nakyce.
  Southeast : forest (75,11) in Uzrot.
  South : forest (74,12) in Uzrot.
  Southwest : swamp (73,11) in Issnina.
  Northwest : mountain (73,9) in Nakyce.

- City Guard (20), on guard, The Guardsmen (1), 120 leaders [LEAD],
  120 swords [SWOR].
* Unit (1004), Gragblod (7), avoiding, revealing faction, 2 hill
  dwarves [HDWA], 44 silver [SILV]. Weight: 20. Capacity: 0/0/30/0.
  Skills: entertainment [ENTE] 1 (30).
- Colony (2178), New Horizons (16), avoiding, leader [LEAD], horse
  [HORS].
- Open 1 (2413), New Horizons (16), avoiding, behind, leader [LEAD], 4
  horses [HORS].
- Open 1 (2415), New Horizons (16), avoiding, behind, leader [LEAD].
- Ente (2629), New Horizons (16), avoiding, 2 leaders [LEAD].
- The Crew (2840), New Horizons (16), avoiding, behind, 13 wood elves
  [WELF], 8 figurines [FIGU], 15 grain [GRAI].
* Unit (1701), Gragblod (7), revealing faction, 10 hill dwarves
  [HDWA], 180 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
  combat [COMB] 3 (180).
- Mini Weap (2979), New Horizons (16), avoiding, behind, leader
  [LEAD].
* Unit (84), Gragblod (7), revealing faction, 30 hill dwarves [HDWA],
  180 silver [SILV]. Weight: 300. Capacity: 0/0/450/0. Skills: combat
  [COMB] 1 (30).
* Unit (909), Gragblod (7), revealing faction, 22 hill dwarves [HDWA],
  396 silver [SILV]. Weight: 220. Capacity: 0/0/330/0. Skills: combat
  [COMB] 1 (30).
- Mission (2842), New Horizons (16), avoiding, leader [LEAD].
- Mini weap (3079), New Horizons (16), avoiding, behind, leader
  [LEAD].
- Major mini (3080), New Horizons (16), avoiding, behind, leader
  [LEAD], 12 iron [IRON].
* Unit (585), Gragblod (7), revealing faction, 40 hill dwarves [HDWA],
  720 silver [SILV]. Weight: 400. Capacity: 0/0/600/0. Skills: combat
  [COMB] 1 (30).
- Mini Weap (3151), New Horizons (16), avoiding, behind, leader
  [LEAD].
* Unit (186), Gragblod (7), revealing faction, 20 hill dwarves [HDWA],
  360 silver [SILV]. Weight: 200. Capacity: 0/0/300/0. Skills: combat
  [COMB] 1 (30).
* Unit (763), Gragblod (7), revealing faction, 20 hill dwarves [HDWA],
  360 silver [SILV]. Weight: 200. Capacity: 0/0/300/0. Skills: combat
  [COMB] 1 (30).
* Unit (288), Gragblod (7), revealing faction, 10 hill dwarves [HDWA],
  180 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 1 (30).
* Unit (1629), Gragblod (7), revealing faction, 128 silver [SILV],
  leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  3 (180).
* Unit (1898), Gragblod (7), revealing faction, 88 silver [SILV],
  leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: observation
  [OBSE] 3 (210).
* Unit (859), Gragblod (7), revealing faction, 20 hill dwarves [HDWA],
  720 silver [SILV]. Weight: 200. Capacity: 0/0/300/0. Skills: combat
  [COMB] 1 (30).
- Weap guys (3070), New Horizons (16), avoiding, behind, 4 leaders
  [LEAD].
- Courier (3347), New Horizons (16), avoiding, behind, 11 high elves
  [HELF], 19 ironwood [IRWD], 33 grain [GRAI].
* Unit (64), Gragblod (7), revealing faction, 10 hill dwarves [HDWA],
  4741 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 2 (90).
- Weap Boys (3002), New Horizons (16), 2 leaders [LEAD], 58 mithril
  [MITH], 20 mithril swords [MSWO].
- Aux Weap (3429), New Horizons (16), avoiding, behind, leader [LEAD],
  3 iron [IRON].
- Har Ten (2015), New Horizons (16), avoiding, 5 leaders [LEAD].
- Har Har (2062), New Horizons (16), avoiding, behind, 16 horses
  [HORS], 10 wood elves [WELF].
- Har Har (2069), New Horizons (16), avoiding, behind, 22 horses
  [HORS], 10 wood elves [WELF].
- Columbus (3154), New Horizons (16), avoiding, behind, viking [VIKI].
- courier (1375), New Horizons (16), avoiding, behind, 9 horses
  [HORS], 8 ironwood [IRWD], leader [LEAD].
- Yew (1345), New Horizons (16), avoiding, behind, leader [LEAD], 11
  horses [HORS].
- delivery (3063), New Horizons (16), avoiding, behind, 4 winged
  horses [WING], leader [LEAD], 6 mithril [MITH].


forest (76,10) in Uzrot, 337 peasants (wood elves), $674.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $808).
  Wanted: none.
  For Sale: 67 wood elves [WELF] at $48, 13 leaders [LEAD] at $96.
  Entertainment available: $33.
  Products: 29 livestock [LIVE], 38 wood [WOOD], 16 furs [FUR], 16
    herbs [HERB].

Exits:
  North : forest (76,8) in Uzrot.
  Northeast : forest (77,9) in Uzrot.
  Southeast : forest (77,11) in Uzrot.
  South : forest (76,12) in Uzrot.
  Southwest : forest (75,11) in Uzrot.
  Northwest : mountain (75,9) in Nakyce.

* Unit (291), Gragblod (7), revealing faction, 2 hill dwarves [HDWA],
  4 silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills: combat
  [COMB] 1 (30).
* Unit (185), Gragblod (7), revealing faction, 15 hill dwarves [HDWA],
  30 silver [SILV]. Weight: 150. Capacity: 0/0/225/0. Skills: combat
  [COMB] 1 (30).
* Unit (1732), Gragblod (7), revealing faction, 40 silver [SILV], wood
  elf [WELF]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
  (30).
- Yew (1337), New Horizons (16), avoiding, behind, horse [HORS],
  leader [LEAD], winged horse [WING].


forest (80,10) in Surlanque, 294 peasants (vikings), $1176.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $823).
  Wanted: none.
  For Sale: 58 vikings [VIKI] at $56, 11 leaders [LEAD] at $112.
  Entertainment available: $58.
  Products: 23 livestock [LIVE], 37 wood [WOOD], 18 furs [FUR], 16
    herbs [HERB].

Exits:
  North : forest (80,8) in Surlanque, contains Roi-nael [city].
  Northeast : forest (81,9) in Surlanque.
  Southeast : ocean (81,11) in Atlantis Ocean.
  South : ocean (80,12) in Atlantis Ocean.
  Southwest : forest (79,11) in Surlanque.
  Northwest : forest (79,9) in Surlanque.

* Unit (289), Gragblod (7), revealing faction, 74 vikings [VIKI], 4853
  silver [SILV]. Weight: 740. Capacity: 0/0/1110/0. Skills: combat
  [COMB] 3 (180).
* Unit (1991), Gragblod (7), revealing faction, leader [LEAD], 1668
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  5 (450).
* Unit (2001), Gragblod (7), behind, revealing faction, leader [LEAD].
  Weight: 10. Capacity: 0/0/15/0. Skills: tactics [TACT] 5 (450).
* Unit (889), Gragblod (7), revealing faction, 18 silver [SILV],
  leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: observation
  [OBSE] 3 (210).


forest (75,11) in Uzrot, 260 peasants (vikings), $1040.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $728).
  Wanted: none.
  For Sale: 52 vikings [VIKI] at $56, 10 leaders [LEAD] at $112.
  Entertainment available: $52.
  Products: 35 grain [GRAI], 29 wood [WOOD], 16 furs [FUR], 14 herbs
    [HERB].

Exits:
  North : mountain (75,9) in Nakyce.
  Northeast : forest (76,10) in Uzrot.
  Southeast : forest (76,12) in Uzrot.
  South : forest (75,13) in Uzrot.
  Southwest : forest (74,12) in Uzrot.
  Northwest : mountain (74,10) in Nakyce, contains Cirrond [city].

* Unit (169), Gragblod (7), avoiding, revealing faction, 70 silver
  [SILV], viking [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills:
  combat [COMB] 1 (30).
- Har Har (2520), New Horizons (16), avoiding, behind, wood elf
  [WELF], horse [HORS], 5 yew [YEW].
- farm guys (3127), New Horizons (16), avoiding, behind, 9 high elves
  [HELF], 5 horses [HORS], 45 grain [GRAI].
- Herb (2210), New Horizons (16), avoiding, behind, 2 leaders [LEAD],
  2 horses [HORS].
- Yew (1336), New Horizons (16), avoiding, behind, 2 leaders [LEAD], 2
  horses [HORS], 6 yew [YEW].
- Courier (3240), New Horizons (16), avoiding, 28 horses [HORS],
  leader [LEAD], 5 winged horses [WING].
- Courier (3212), New Horizons (16), avoiding, 2 horses [HORS], leader
  [LEAD], 9 winged horses [WING].
- Yew guy (2029), New Horizons (16), avoiding, behind, 5 winged horses
  [WING], leader [LEAD].


forest (77,11) in Uzrot, 273 peasants (sea elves), $1092.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $764).
  Wanted: none.
  For Sale: 54 sea elves [SELF] at $56, 10 leaders [LEAD] at $112.
  Entertainment available: $54.
  Products: 31 grain [GRAI], 37 wood [WOOD], 12 furs [FUR], 13 herbs
    [HERB].

Exits:
  North : forest (77,9) in Uzrot.
  Northeast : ocean (78,10) in Atlantis Ocean.
  Southeast : plain (78,12) in Morungol.
  South : forest (77,13) in Uzrot.
  Southwest : forest (76,12) in Uzrot.
  Northwest : forest (76,10) in Uzrot.

* Unit (1887), Gragblod (7), revealing faction, sea elf [SELF], 48
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
- Wolf Pack (951), 9 wolves [WOLF].


forest (79,11) in Surlanque, 361 peasants (sea elves), $1083.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $938).
  Wanted: none.
  For Sale: 72 sea elves [SELF] at $52, 14 leaders [LEAD] at $104.
  Entertainment available: $54.
  Products: 32 livestock [LIVE], 39 wood [WOOD], 15 furs [FUR], 17
    herbs [HERB].

Exits:
  North : forest (79,9) in Surlanque.
  Northeast : forest (80,10) in Surlanque.
  Southeast : ocean (80,12) in Atlantis Ocean.
  South : plain (79,13) in Morungol.
  Southwest : plain (78,12) in Morungol.
  Northwest : ocean (78,10) in Atlantis Ocean.

* Unit (2007), Gragblod (7), revealing faction, 20 vikings [VIKI], 60
  silver [SILV]. Weight: 200. Capacity: 0/0/300/0. Skills: combat
  [COMB] 1 (30).
* Unit (1760), Gragblod (7), revealing faction, 44 silver [SILV], 3
  sea elves [SELF]. Weight: 30. Capacity: 0/0/45/0. Skills: combat
  [COMB] 1 (30).


forest (74,12) in Uzrot, 389 peasants (wood elves), $1556.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $1089).
  Wanted: none.
  For Sale: 77 wood elves [WELF] at $56, 15 leaders [LEAD] at $112.
  Entertainment available: $77.
  Products: 30 grain [GRAI], 20 wood [WOOD], 11 furs [FUR], 11 herbs
    [HERB].

Exits:
  North : mountain (74,10) in Nakyce, contains Cirrond [city].
  Northeast : forest (75,11) in Uzrot.
  Southeast : forest (75,13) in Uzrot.
  South : swamp (74,14) in Issnina.
  Southwest : swamp (73,13) in Issnina.
  Northwest : swamp (73,11) in Issnina.

- Yew (2486), on guard, New Horizons (16), behind, leader [LEAD],
  winged horse [WING].
* Unit (1034), Gragblod (7), avoiding, revealing faction, hill dwarf
  [HDWA], 54 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
  combat [COMB] 1 (30).
- funny guys (3116), New Horizons (16), avoiding, behind, wood elf
  [WELF], 2 horses [HORS].
- Farmers (3001), New Horizons (16), avoiding, behind, 5 high elves
  [HELF], 52 horses [HORS], 29 grain [GRAI].


forest (76,12) in Uzrot, 211 peasants (vikings), $422.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $506).
  Wanted: none.
  For Sale: 42 vikings [VIKI] at $48, 8 leaders [LEAD] at $96.
  Entertainment available: $21.
  Products: 20 livestock [LIVE], 29 wood [WOOD], 18 furs [FUR], 16
    herbs [HERB].

Exits:
  North : forest (76,10) in Uzrot.
  Northeast : forest (77,11) in Uzrot.
  Southeast : forest (77,13) in Uzrot.
  South : forest (76,14) in Uzrot.
  Southwest : forest (75,13) in Uzrot.
  Northwest : forest (75,11) in Uzrot.

* Unit (1022), Gragblod (7), revealing faction, hill dwarf [HDWA], 28
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).


plain (78,12) in Morungol, 517 peasants (vikings), $2585.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $15 (Max: $1551).
  Wanted: none.
  For Sale: 103 vikings [VIKI] at $60, 20 leaders [LEAD] at $120.
  Entertainment available: $129.
  Products: 65 grain [GRAI], 37 horses [HORS].

Exits:
  North : ocean (78,10) in Atlantis Ocean.
  Northeast : forest (79,11) in Surlanque.
  Southeast : plain (79,13) in Morungol.
  South : plain (78,14) in Morungol.
  Southwest : forest (77,13) in Uzrot.
  Northwest : forest (77,11) in Uzrot.

* Unit (2072), Gragblod (7), revealing faction, 64 silver [SILV], wood
  elf [WELF]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
  (30).


swamp (73,13) in Issnina, 149 peasants (tribesmen), $447.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $387).
  Wanted: none.
  For Sale: 29 tribesmen [TMAN] at $52, 5 leaders [LEAD] at $104.
  Entertainment available: $22.
  Products: 11 grain [GRAI], 10 wood [WOOD], 16 herbs [HERB].

Exits:
  North : swamp (73,11) in Issnina.
  Northeast : forest (74,12) in Uzrot.
  Southeast : swamp (74,14) in Issnina.
  South : swamp (73,15) in Issnina.
  Southwest : swamp (72,14) in Issnina.
  Northwest : swamp (72,12) in Issnina.

* Unit (356), Gragblod (7), revealing faction, tribal elf [TELF], 3
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (171), Gragblod (7), revealing faction, 10 tribesmen [TMAN], 30
  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 1 (30).
* Unit (633), Gragblod (7), revealing faction, 2 tribesmen [TMAN], 6
  silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB]
  1 (30).
* Unit (1788), Gragblod (7), revealing faction, 36 silver [SILV],
  tribesman [TMAN]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
  [COMB] 1 (30).


forest (75,13) in Uzrot, 352 peasants (vikings), $1056.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $915).
  Wanted: none.
  For Sale: 70 vikings [VIKI] at $52, 14 leaders [LEAD] at $104.
  Entertainment available: $52.
  Products: 38 livestock [LIVE], 23 wood [WOOD], 16 furs [FUR], 13
    herbs [HERB].

Exits:
  North : forest (75,11) in Uzrot.
  Northeast : forest (76,12) in Uzrot.
  Southeast : forest (76,14) in Uzrot.
  South : forest (75,15) in Uzrot, contains Quayfeeton [city].
  Southwest : swamp (74,14) in Issnina.
  Northwest : forest (74,12) in Uzrot.

* Unit (1381), Gragblod (7), revealing faction, 79 silver [SILV],
  tribal elf [TELF], sword [SWOR]. Weight: 11. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).
- Ironwood (2308), New Horizons (16), avoiding, 2 vikings [VIKI], 12
  horses [HORS], 12 ironwood [IRWD].
- Wood (2633), New Horizons (16), avoiding, behind, viking [VIKI].
- Lumber Guy (3000), New Horizons (16), leader [LEAD].


forest (77,13) in Uzrot, 333 peasants (vikings), $999.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $865).
  Wanted: none.
  For Sale: 66 vikings [VIKI] at $52, 13 leaders [LEAD] at $104.
  Entertainment available: $49.
  Products: 22 grain [GRAI], 22 wood [WOOD], 16 furs [FUR], 13 herbs
    [HERB].

Exits:
  North : forest (77,11) in Uzrot.
  Northeast : plain (78,12) in Morungol.
  Southeast : plain (78,14) in Morungol.
  South : forest (77,15) in Uzrot.
  Southwest : forest (76,14) in Uzrot.
  Northwest : forest (76,12) in Uzrot.

* Unit (1112), Gragblod (7), revealing faction, nomad [NOMA], 48
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
- Funny (3300), New Horizons (16), avoiding, behind, plainsman [PLAI],
  8 winged horses [WING], 29 wine [WINE].


swamp (72,14) in Issnina, 118 peasants (sea elves), $236.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $283).
  Wanted: none.
  For Sale: 23 sea elves [SELF] at $48, 4 leaders [LEAD] at $96.
  Entertainment available: $11.
  Products: 18 grain [GRAI], 11 wood [WOOD], 17 herbs [HERB].

Exits:
  North : swamp (72,12) in Issnina.
  Northeast : swamp (73,13) in Issnina.
  Southeast : swamp (73,15) in Issnina.
  South : swamp (72,16) in Issnina.
  Southwest : ocean (71,15) in Atlantis Ocean.
  Northwest : ocean (71,13) in Atlantis Ocean.

* Unit (390), Gragblod (7), revealing faction, tribal elf [TELF], 4
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (764), Gragblod (7), revealing faction, 8 sea elves [SELF], 32
  silver [SILV]. Weight: 80. Capacity: 0/0/120/0. Skills: combat
  [COMB] 1 (30).
* Unit (1167), Gragblod (7), revealing faction, sea elf [SELF], 4
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (1056), Gragblod (7), revealing faction, 22 silver [SILV], 2
  sea elves [SELF]. Weight: 20. Capacity: 0/0/30/0. Skills: combat
  [COMB] 1 (30).


swamp (74,14) in Issnina, 147 peasants (tribal elves), $147.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $11 (Max: $323).
  Wanted: none.
  For Sale: 29 tribal elves [TELF] at $44, 5 leaders [LEAD] at $88.
  Entertainment available: $7.
  Products: 16 grain [GRAI], 15 wood [WOOD], 17 herbs [HERB].

Exits:
  North : forest (74,12) in Uzrot.
  Northeast : forest (75,13) in Uzrot.
  Southeast : forest (75,15) in Uzrot, contains Quayfeeton [city].
  South : plain (74,16) in Bocholt.
  Southwest : swamp (73,15) in Issnina.
  Northwest : swamp (73,13) in Issnina.

* Unit (608), Gragblod (7), revealing faction, high elf [HELF], sword
  [SWOR], silver [SILV]. Weight: 11. Capacity: 0/0/15/0. Skills:
  combat [COMB] 1 (30).
* Unit (768), on guard, Gragblod (7), revealing faction, 7 tribal
  elves [TELF], 7 silver [SILV]. Weight: 70. Capacity: 0/0/105/0.
  Skills: combat [COMB] 1 (30).
* Unit (739), Gragblod (7), revealing faction, tribal elf [TELF],
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (1789), Gragblod (7), revealing faction, 17 silver [SILV],
  tribal elf [TELF]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
  [COMB] 1 (30).
- Farmer (2478), New Horizons (16), avoiding, behind, leader [LEAD],
  horse [HORS].


forest (76,14) in Uzrot, 327 peasants (wood elves), $1308.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $915).
  Wanted: none.
  For Sale: 65 wood elves [WELF] at $56, 13 leaders [LEAD] at $112.
  Entertainment available: $65.
  Products: 29 livestock [LIVE], 34 wood [WOOD], 16 furs [FUR], 17
    herbs [HERB].

Exits:
  North : forest (76,12) in Uzrot.
  Northeast : forest (77,13) in Uzrot.
  Southeast : forest (77,15) in Uzrot.
  South : forest (76,16) in Uzrot.
  Southwest : forest (75,15) in Uzrot, contains Quayfeeton [city].
  Northwest : forest (75,13) in Uzrot.

* Unit (1264), Gragblod (7), revealing faction, viking [VIKI], 70
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: entertainment
  [ENTE] 1 (30).
* Unit (924), Gragblod (7), revealing faction, wood elf [WELF], 12
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (1291), Gragblod (7), revealing faction, 39 silver [SILV], wood
  elf [WELF]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
  (30).
* Unit (1510), Gragblod (7), revealing faction, viking [VIKI], 4514
  silver [SILV], 2 horses [HORS]. Weight: 110. Capacity: 0/140/155/0.
  Skills: none.
* Unit (1791), Gragblod (7), revealing faction, 65 wood elves [WELF].
  Weight: 650. Capacity: 0/0/975/0. Skills: combat [COMB] 1 (30).


plain (78,14) in Morungol, 493 peasants (high elves), $1972.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $1380).
  Wanted: none.
  For Sale: 98 high elves [HELF] at $56, 19 leaders [LEAD] at $112.
  Entertainment available: $98.
  Products: 41 livestock [LIVE], 27 horses [HORS].

Exits:
  North : plain (78,12) in Morungol.
  Northeast : plain (79,13) in Morungol.
  Southeast : plain (79,15) in Morungol.
  South : plain (78,16) in Morungol.
  Southwest : forest (77,15) in Uzrot.
  Northwest : forest (77,13) in Uzrot.

* Unit (2451), Gragblod (7), revealing faction, receiving no aid, wood
  elf [WELF], 60 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).


swamp (73,15) in Issnina, 151 peasants (tribal elves), $151.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $11 (Max: $332).
  Wanted: none.
  For Sale: 30 tribal elves [TELF] at $44, 6 leaders [LEAD] at $88.
  Entertainment available: $7.
  Products: 18 livestock [LIVE], 18 wood [WOOD], 17 herbs [HERB].

Exits:
  North : swamp (73,13) in Issnina.
  Northeast : swamp (74,14) in Issnina.
  Southeast : plain (74,16) in Bocholt.
  South : plain (73,17) in Bocholt.
  Southwest : swamp (72,16) in Issnina.
  Northwest : swamp (72,14) in Issnina.

* Unit (1101), on guard, Gragblod (7), revealing faction, 9 high elves
  [HELF], 9 silver [SILV]. Weight: 90. Capacity: 0/0/135/0. Skills:
  combat [COMB] 1 (30).
* Unit (804), Gragblod (7), revealing faction, 2 tribal elves [TELF],
  2 silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills: combat
  [COMB] 1 (30).
* Unit (1272), Gragblod (7), revealing faction, tribal elf [TELF],
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (1792), Gragblod (7), revealing faction, 28 silver [SILV],
  tribal elf [TELF]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
  [COMB] 1 (30).


forest (75,15) in Uzrot, contains Quayfeeton [city], 3342 peasants
  (vikings), $20052.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $10694).
  Wanted: 166 grain [GRAI] at $26, 174 livestock [LIVE] at $23, 56
    horses [HORS] at $44, 61 crossbows [XBOW] at $117, 42 chain armor
    [CARM] at $122, 44 plate armor [PARM] at $468, 39 caviar [CAVI] at
    $167, 37 perfume [PERF] at $152.
  For Sale: 49 furs [FUR] at $55, 60 herbs [HERB] at $57, 35 longbows
    [LBOW] at $159, 39 figurines [FIGU] at $66, 11 wine [WINE] at $66,
    668 vikings [VIKI] at $64, 133 leaders [LEAD] at $128.
  Entertainment available: $1002.
  Products: 27 livestock [LIVE], 37 wood [WOOD], 16 furs [FUR], 15
    herbs [HERB].

Exits:
  North : forest (75,13) in Uzrot.
  Northeast : forest (76,14) in Uzrot.
  Southeast : forest (76,16) in Uzrot.
  South : plain (75,17) in Bocholt, contains Einheim [town].
  Southwest : plain (74,16) in Bocholt.
  Northwest : swamp (74,14) in Issnina.

* Unit (1127), Gragblod (7), revealing faction, plainsman [PLAI],
  sword [SWOR]. Weight: 11. Capacity: 0/0/15/0. Skills: entertainment
  [ENTE] 1 (30).
- Funny Guys (2388), New Horizons (16), avoiding, 12 vikings [VIKI].
* Unit (1032), Gragblod (7), revealing faction, horse [HORS], nomad
  [NOMA], 55 longbows [LBOW], 14876 silver [SILV]. Weight: 115.
  Capacity: 0/70/85/0. Skills: none.
* Unit (168), Gragblod (7), behind, revealing faction, leader [LEAD],
  horse [HORS], 442 silver [SILV]. Weight: 60. Capacity: 0/70/85/0.
  Skills: tactics [TACT] 5 (450), stealth [STEA] 2 (90).
* Unit (187), on guard, Gragblod (7), revealing faction, 10 leaders
  [LEAD], 504 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
  combat [COMB] 3 (237).
* Unit (2436), on guard, Gragblod (7), revealing faction, 10 longbows
  [LBOW], 1404 silver [SILV], 10 leaders [LEAD]. Weight: 110.
  Capacity: 0/0/150/0. Skills: longbow [LBOW] 3 (210), combat [COMB] 1
  (60).
* Unit (903), on guard, Gragblod (7), revealing faction, 100 vikings
  [VIKI], 8695 silver [SILV]. Weight: 1000. Capacity: 0/0/1500/0.
  Skills: combat [COMB] 2 (90).
* Unit (614), Gragblod (7), revealing faction, 270 vikings [VIKI],
  17069 silver [SILV], 42 horses [HORS]. Weight: 4800. Capacity:
  0/2940/6990/0. Skills: combat [COMB] 3 (180).
- comb guys (3092), on guard, New Horizons (16), 5 horses [HORS], 5
  leaders [LEAD].
- Com Guy (3093), New Horizons (16), avoiding, behind, horse [HORS],
  leader [LEAD].
* Unit (1029), Gragblod (7), revealing faction, 50 vikings [VIKI],
  10535 silver [SILV]. Weight: 500. Capacity: 0/0/750/0. Skills:
  combat [COMB] 1 (60).
* Unit (799), Gragblod (7), revealing faction, 100 vikings [VIKI],
  10000 silver [SILV]. Weight: 1000. Capacity: 0/0/1500/0. Skills:
  combat [COMB] 2 (150).
* Unit (1180), Gragblod (7), revealing faction, leader [LEAD], 152
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: observation
  [OBSE] 3 (240), stealth [STEA] 1 (30).
* Unit (2129), Gragblod (7), behind, revealing faction, 100 wood elves
  [WELF], 100 longbows [LBOW], 5732 silver [SILV]. Weight: 1100.
  Capacity: 0/0/1500/0. Skills: longbow [LBOW] 3 (180).
* Unit (1395), Gragblod (7), revealing faction, 20 wood elves [WELF],
  233 silver [SILV], 20 longbows [LBOW]. Weight: 220. Capacity:
  0/0/300/0. Skills: longbow [LBOW] 2 (120).
- Three Guard (3420), on guard, New Horizons (16), 3 leaders [LEAD].
- Guard (3423), New Horizons (16), avoiding, behind, leader [LEAD].
* Unit (1054), Gragblod (7), revealing faction, 740 silver [SILV], 60
  wood elves [WELF]. Weight: 600. Capacity: 0/0/900/0. Skills: none.
* Unit (872), Gragblod (7), revealing faction, 3650 silver [SILV], 60
  wood elves [WELF], 60 longbows [LBOW]. Weight: 660. Capacity:
  0/0/900/0. Skills: longbow [LBOW] 1 (30).
* Unit (1636), Gragblod (7), revealing faction, 60 wood elves [WELF],
  60 longbows [LBOW]. Weight: 660. Capacity: 0/0/900/0. Skills:
  longbow [LBOW] 1 (60).
* Unit (1128), Gragblod (7), revealing faction, 60 wood elves [WELF],
  60 longbows [LBOW]. Weight: 660. Capacity: 0/0/900/0. Skills:
  longbow [LBOW] 1 (30).
- Com guys (2076), New Horizons (16), avoiding, behind, 7 leaders
  [LEAD].
* Unit (1797), Gragblod (7), revealing faction, 960 silver [SILV], 60
  wood elves [WELF]. Weight: 600. Capacity: 0/0/900/0. Skills: none.
- Comb guys (3392), New Horizons (16), avoiding, leader [LEAD].


forest (77,15) in Uzrot, 231 peasants (vikings), $693.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $600).
  Wanted: none.
  For Sale: 46 vikings [VIKI] at $52, 9 leaders [LEAD] at $104.
  Entertainment available: $34.
  Products: 29 livestock [LIVE], 31 wood [WOOD], 12 furs [FUR], 12
    herbs [HERB].

Exits:
  North : forest (77,13) in Uzrot.
  Northeast : plain (78,14) in Morungol.
  Southeast : plain (78,16) in Morungol.
  South : plain (77,17) in Morungol.
  Southwest : forest (76,16) in Uzrot.
  Northwest : forest (76,14) in Uzrot.

* Unit (1069), Gragblod (7), avoiding, revealing faction, holding,
  receiving no aid, 4 plainsmen [PLAI], viking [VIKI], 45 silver
  [SILV]. Weight: 50. Capacity: 0/0/75/0. Skills: entertainment [ENTE]
  0 (18).
* Unit (2137), Gragblod (7), avoiding, revealing faction, holding,
  receiving no aid, viking [VIKI], 9 silver [SILV]. Weight: 10.
  Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
* Unit (946), Gragblod (7), avoiding, revealing faction, holding,
  receiving no aid, 29 silver [SILV], viking [VIKI]. Weight: 10.
  Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).


swamp (72,16) in Issnina, 134 peasants (tribal elves), $402.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $348).
  Wanted: none.
  For Sale: 26 tribal elves [TELF] at $52, 5 leaders [LEAD] at $104.
  Entertainment available: $20.
  Products: 19 livestock [LIVE], 19 wood [WOOD], 12 herbs [HERB].

Exits:
  North : swamp (72,14) in Issnina.
  Northeast : swamp (73,15) in Issnina.
  Southeast : plain (73,17) in Bocholt.
  South : plain (72,18) in Bocholt.
  Southwest : ocean (71,17) in Atlantis Ocean.
  Northwest : ocean (71,15) in Atlantis Ocean.

* Unit (1113), Gragblod (7), revealing faction, 10 high elves [HELF],
  30 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 1 (60).
* Unit (1316), Gragblod (7), revealing faction, 3 tribal elves [TELF],
  9 silver [SILV]. Weight: 30. Capacity: 0/0/45/0. Skills: combat
  [COMB] 1 (30).
* Unit (2152), Gragblod (7), revealing faction, tribal elf [TELF], 3
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (1793), Gragblod (7), revealing faction, 27 silver [SILV], 4
  tribal elves [TELF]. Weight: 40. Capacity: 0/0/60/0. Skills: combat
  [COMB] 1 (30).


plain (74,16) in Bocholt, 776 peasants (high elves), $4656.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $2483).
  Wanted: none.
  For Sale: 155 high elves [HELF] at $64, 31 leaders [LEAD] at $128.
  Entertainment available: $232.
  Products: 68 livestock [LIVE], 33 horses [HORS].

Exits:
  North : swamp (74,14) in Issnina.
  Northeast : forest (75,15) in Uzrot, contains Quayfeeton [city].
  Southeast : plain (75,17) in Bocholt, contains Einheim [town].
  South : plain (74,18) in Bocholt.
  Southwest : plain (73,17) in Bocholt.
  Northwest : swamp (73,15) in Issnina.

* Unit (1250), Gragblod (7), revealing faction, 3858 silver [SILV],
  leader [LEAD], sword [SWOR]. Weight: 11. Capacity: 0/0/15/0. Skills:
  observation [OBSE] 4 (330).
- Horse (2055), on guard, New Horizons (16), 2 leaders [LEAD], 8
  winged horses [WING].
- Funny (3322), New Horizons (16), avoiding, behind, 4 plainsmen
  [PLAI].
- Courier (3348), New Horizons (16), avoiding, behind, leader [LEAD].

+ Shaft [1] : Shaft, contains an inner location.
  * Unit (1102), on guard, Gragblod (7), revealing faction, 9 high
    elves [HELF], 648 silver [SILV]. Weight: 90. Capacity: 0/0/135/0.
    Skills: combat [COMB] 2 (90).
  * Unit (1080), Gragblod (7), revealing faction, 2 high elves [HELF],
    144 silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills: combat
    [COMB] 1 (30).


forest (76,16) in Uzrot, 345 peasants (wood elves), $1035.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $897).
  Wanted: none.
  For Sale: 69 wood elves [WELF] at $52, 13 leaders [LEAD] at $104.
  Entertainment available: $51.
  Products: 32 livestock [LIVE], 33 wood [WOOD], 15 furs [FUR], 17
    herbs [HERB].

Exits:
  North : forest (76,14) in Uzrot.
  Northeast : forest (77,15) in Uzrot.
  Southeast : plain (77,17) in Morungol.
  South : forest (76,18) in Uzrot.
  Southwest : plain (75,17) in Bocholt, contains Einheim [town].
  Northwest : forest (75,15) in Uzrot, contains Quayfeeton [city].

* Unit (919), Gragblod (7), revealing faction, 2525 silver [SILV],
  wood elf [WELF], sword [SWOR]. Weight: 11. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).
* Unit (1667), Gragblod (7), revealing faction, 6736 silver [SILV],
  viking [VIKI], 2 horses [HORS]. Weight: 110. Capacity: 0/140/155/0.
  Skills: none.
- Yew (3283), New Horizons (16), avoiding, behind, 19 horses [HORS], 2
  leaders [LEAD], 7 yew [YEW].
- Funny Guard (3224), on guard, New Horizons (16), leader [LEAD],
  horse [HORS].
- Ironwood (2731), New Horizons (16), avoiding, behind, 3 vikings
  [VIKI], 81 horses [HORS], 9 ironwood [IRWD].
* Unit (1810), Gragblod (7), revealing faction, plainsman [PLAI],
  17986 silver [SILV], horse [HORS]. Weight: 60. Capacity: 0/70/85/0.
  Skills: none.
* Unit (2262), Gragblod (7), revealing faction, 69 wood elves [WELF].
  Weight: 690. Capacity: 0/0/1035/0. Skills: combat [COMB] 1 (30).
- Courier (2083), New Horizons (16), avoiding, behind, 5 yew [YEW], 9
  ironwood [IRWD], 8 horses [HORS], leader [LEAD], 9 winged horses
  [WING].
- Structures (2993), New Horizons (16), avoiding, 3 wood elves [WELF],
  18 wood [WOOD], 4 horses [HORS].
- Rawhide (3351), New Horizons (16), avoiding, behind, 7 nomads
  [NOMA], 7 winged horses [WING].


plain (78,16) in Morungol, 674 peasants (vikings), $3370.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $15 (Max: $2022).
  Wanted: none.
  For Sale: 134 vikings [VIKI] at $60, 26 leaders [LEAD] at $120.
  Entertainment available: $168.
  Products: 64 livestock [LIVE], 22 horses [HORS].

Exits:
  North : plain (78,14) in Morungol.
  Northeast : plain (79,15) in Morungol.
  Southeast : ocean (79,17) in Atlantis Ocean.
  South : ocean (78,18) in Atlantis Ocean.
  Southwest : plain (77,17) in Morungol.
  Northwest : forest (77,15) in Uzrot.

* Unit (2586), Gragblod (7), revealing faction, wood elf [WELF], 71
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).


forest (59,17) in Nugyru, 248 peasants (vikings), $992.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $694).
  Wanted: none.
  For Sale: 49 vikings [VIKI] at $56, 9 leaders [LEAD] at $112.
  Entertainment available: $49.
  Products: 20 grain [GRAI], 41 wood [WOOD], 19 furs [FUR], 16 herbs
    [HERB].

Exits:
  North : ocean (59,15) in Atlantis Ocean.
  Northeast : ocean (60,16) in Atlantis Ocean.
  Southeast : plain (60,18) in Satiasam.
  South : forest (59,19) in Nugyru.
  Southwest : forest (58,18) in Nugyru.
  Northwest : ocean (58,16) in Atlantis Ocean.

* Etrius (1137), Gragblod (7), revealing faction, holding, receiving
  no aid, 2 vikings [VIKI], 262 silver [SILV], 19 crossbows [XBOW].
  Weight: 39. Capacity: 0/0/30/0. Skills: combat [COMB] 1 (30).
- Izluks (1995), viking [VIKI].
- Unit (1934), on guard, Warlords Inc (19), viking [VIKI], horse
  [HORS].
- Unit (1933), Warlords Inc (19), viking [VIKI], horse [HORS].
- Unit (2650), Warlords Inc (19), 2 leaders [LEAD], 10 wood [WOOD].
- Unit (2762), Warlords Inc (19), 3 leaders [LEAD], 137 wood [WOOD], 3
  horses [HORS], 9 crossbows [XBOW].
- Unit (2850), Warlords Inc (19), leader [LEAD].
- Unit (3097), Warlords Inc (19), 10 vikings [VIKI], 30 wood [WOOD].
- Unit (3098), Warlords Inc (19), leader [LEAD].
- Unit (3145), Warlords Inc (19), 3 leaders [LEAD].
- Unit (3253), Warlords Inc (19), leader [LEAD].
- Unit (3254), Warlords Inc (19), 7 vikings [VIKI].
- Unit (3255), Warlords Inc (19), 5 leaders [LEAD].
- Unit (3256), Warlords Inc (19), leader [LEAD], crossbow [XBOW].
- Unit (3257), Warlords Inc (19), 4 leaders [LEAD].
- Unit (3259), Warlords Inc (19), behind, 4 leaders [LEAD], 4
  crossbows [XBOW].
- Unit (3260), Warlords Inc (19), leader [LEAD].
- Unit (3288), Warlords Inc (19), 3 leaders [LEAD].
- Unit (3271), Warlords Inc (19), 27 horses [HORS], 2 high elves
  [HELF].
- Unit (2409), Warlords Inc (19), behind, leader [LEAD].

+ Building [1] : Timber Yard.

+ Building [2] : Timber Yard.

+ Building [3] : Timber Yard.
  - Unit (3252), Warlords Inc (19), 3 leaders [LEAD].


plain (73,17) in Bocholt, 916 peasants (high elves), $5496.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $2931).
  Wanted: none.
  For Sale: 183 high elves [HELF] at $64, 36 leaders [LEAD] at $128.
  Entertainment available: $274.
  Products: 68 grain [GRAI], 38 horses [HORS].

Exits:
  North : swamp (73,15) in Issnina.
  Northeast : plain (74,16) in Bocholt.
  Southeast : plain (74,18) in Bocholt.
  South : plain (73,19) in Bocholt, contains Ineault'y [city].
  Southwest : plain (72,18) in Bocholt.
  Northwest : swamp (72,16) in Issnina.

* Unit (1018), on guard, Gragblod (7), revealing faction, 17 high
  elves [HELF], 1918 silver [SILV]. Weight: 170. Capacity: 0/0/255/0.
  Skills: combat [COMB] 2 (90).
- Farmer (2209), New Horizons (16), avoiding, behind, leader [LEAD],
  30 horses [HORS].
* Unit (733), Gragblod (7), revealing faction, 590 silver [SILV], 5
  high elves [HELF]. Weight: 50. Capacity: 0/0/75/0. Skills: combat
  [COMB] 1 (30).
- Farmer (3087), New Horizons (16), avoiding, behind, horse [HORS],
  leader [LEAD].
* Unit (2815), on guard, Gragblod (7), revealing faction, 2956 silver
  [SILV], 100 vikings [VIKI]. Weight: 1000. Capacity: 0/0/1500/0.
  Skills: combat [COMB] 1 (30).
- Hproducer (2054), New Horizons (16), avoiding, 10 nomads [NOMA], 30
  horses [HORS].
- Farmer (2208), New Horizons (16), avoiding, behind, leader [LEAD],
  horse [HORS].
- Farmers (2739), New Horizons (16), avoiding, behind, 19 high elves
  [HELF], 57 grain [GRAI].
- Farmers (2148), New Horizons (16), avoiding, behind, 9 high elves
  [HELF].
- Courier (3424), New Horizons (16), avoiding, behind, 14 horses
  [HORS], leader [LEAD], 26 ironwood [IRWD], 23 grain [GRAI].
- farmers (3393), New Horizons (16), avoiding, behind, 10 high elves
  [HELF].


plain (75,17) in Bocholt, contains Einheim [town], 1841 peasants
  (plainsmen), $14728.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $18 (Max: $6627).
  Wanted: 141 grain [GRAI] at $21, 133 livestock [LIVE] at $26, 11
    furs [FUR] at $42.
  For Sale: 2 horses [HORS] at $72, 368 plainsmen [PLAI] at $72, 73
    leaders [LEAD] at $144.
  Entertainment available: $736.
  Products: 50 livestock [LIVE], 39 horses [HORS].

Exits:
  North : forest (75,15) in Uzrot, contains Quayfeeton [city].
  Northeast : forest (76,16) in Uzrot.
  Southeast : forest (76,18) in Uzrot.
  South : plain (75,19) in Bocholt.
  Southwest : plain (74,18) in Bocholt.
  Northwest : plain (74,16) in Bocholt.

* Unit (188), Gragblod (7), behind, revealing faction, leader [LEAD],
  2368 silver [SILV], horse [HORS]. Weight: 60. Capacity: 0/70/85/0.
  Skills: tactics [TACT] 5 (450), stealth [STEA] 2 (90).
* Unit (2113), on guard, Gragblod (7), revealing faction, 1948 silver
  [SILV], 10 leaders [LEAD], sword [SWOR]. Weight: 101. Capacity:
  0/0/150/0. Skills: combat [COMB] 4 (360), longbow [LBOW] 2 (120).
* Unit (208), on guard, Gragblod (7), revealing faction, 6347 silver
  [SILV], 200 vikings [VIKI], 200 horses [HORS], 50 swords [SWOR].
  Weight: 12050. Capacity: 0/14000/17000/0. Skills: combat [COMB] 3
  (180).
* Unit (382), on guard, Gragblod (7), revealing faction, 1610 silver
  [SILV], 10 leaders [LEAD]. Weight: 100. Capacity: 0/0/150/0. Skills:
  combat [COMB] 3 (180), longbow [LBOW] 2 (150).
* Unit (1235), on guard, Gragblod (7), revealing faction, 10 leaders
  [LEAD], 1605 silver [SILV]. Weight: 100. Capacity: 0/0/150/0.
  Skills: combat [COMB] 4 (300), longbow [LBOW] 2 (120), riding [RIDI]
  1 (30).
* Unit (1271), on guard, Gragblod (7), revealing faction, 10 leaders
  [LEAD], 1505 silver [SILV]. Weight: 100. Capacity: 0/0/150/0.
  Skills: combat [COMB] 4 (360), longbow [LBOW] 2 (120).
* Unit (1286), on guard, Gragblod (7), revealing faction, 10 leaders
  [LEAD], 1605 silver [SILV]. Weight: 100. Capacity: 0/0/150/0.
  Skills: combat [COMB] 4 (300), longbow [LBOW] 2 (120), crossbow
  [XBOW] 1 (30).
* Unit (1354), on guard, Gragblod (7), revealing faction, 10 leaders
  [LEAD], 1505 silver [SILV]. Weight: 100. Capacity: 0/0/150/0.
  Skills: combat [COMB] 4 (330), longbow [LBOW] 2 (120), healing
  [HEAL] 1 (30).
* Unit (1414), on guard, Gragblod (7), revealing faction, 10 leaders
  [LEAD], 1505 silver [SILV]. Weight: 100. Capacity: 0/0/150/0.
  Skills: combat [COMB] 4 (330), longbow [LBOW] 2 (120), herb lore
  [HERB] 1 (30).
* Unit (1416), on guard, Gragblod (7), revealing faction, 10 leaders
  [LEAD], 1506 silver [SILV]. Weight: 100. Capacity: 0/0/150/0.
  Skills: combat [COMB] 4 (330), longbow [LBOW] 2 (120), crossbow
  [XBOW] 1 (30).
* Unit (923), on guard, Gragblod (7), revealing faction, 6660 silver
  [SILV], 200 vikings [VIKI], 200 horses [HORS]. Weight: 12000.
  Capacity: 0/14000/17000/0. Skills: combat [COMB] 3 (180).
* Unit (1353), Gragblod (7), revealing faction, 1216 silver [SILV],
  leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: observation
  [OBSE] 3 (270).
* Unit (1371), Gragblod (7), revealing faction, 1216 silver [SILV],
  leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: stealth
  [STEA] 3 (270).
* Unit (2841), Gragblod (7), revealing faction, 7485 silver [SILV], 82
  vikings [VIKI], 3 swords [SWOR], 2 horses [HORS]. Weight: 923.
  Capacity: 0/140/1370/0. Skills: combat [COMB] 3 (180).
- Funny  (3425), New Horizons (16), avoiding, behind, horse [HORS],
  leader [LEAD].
* Unit (1141), Gragblod (7), revealing faction, 1746 silver [SILV], 84
  nomads [NOMA]. Weight: 840. Capacity: 0/0/1260/0. Skills: none.
* Unit (1798), Gragblod (7), revealing faction, 636 silver [SILV], 60
  wood elves [WELF]. Weight: 600. Capacity: 0/0/900/0. Skills: none.
- Sales guy (3133), New Horizons (16), avoiding, behind, high elf
  [HELF], 8 plainsmen [PLAI].
- funny guy (3086), New Horizons (16), 3 horses [HORS], leader [LEAD].
* Vareius (1492), Gragblod (7), avoiding, revealing faction, nomad
  [NOMA], 8866 silver [SILV], 60 horses [HORS], 300 longbows [LBOW].
  Weight: 3310. Capacity: 0/4200/4215/0. Skills: entertainment [ENTE]
  1 (30).
* Unit (1051), Gragblod (7), revealing faction, 10288 silver [SILV],
  105 horses [HORS], viking [VIKI], 44 swords [SWOR], 44 crossbows
  [XBOW]. Weight: 5348. Capacity: 0/7350/7365/0. Skills: none.


plain (77,17) in Morungol, 532 peasants (nomads), $3192.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $1702).
  Wanted: none.
  For Sale: 106 nomads [NOMA] at $64, 21 leaders [LEAD] at $128.
  Entertainment available: $159.
  Products: 52 livestock [LIVE], 29 horses [HORS].

Exits:
  North : forest (77,15) in Uzrot.
  Northeast : plain (78,16) in Morungol.
  Southeast : ocean (78,18) in Atlantis Ocean.
  South : plain (77,19) in Morungol, contains Mustlor [city].
  Southwest : forest (76,18) in Uzrot.
  Northwest : forest (76,16) in Uzrot.

* Agrius (1715), Gragblod (7), revealing faction, holding, viking
  [VIKI], 1112 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
  combat [COMB] 1 (44).
- Horse (1976), New Horizons (16), 2 leaders [LEAD], 2 horses [HORS],
  9 winged horses [WING].
- Funny Guardsmen (2924), on guard, New Horizons (16), leader [LEAD].
- Winging (2862), on guard, New Horizons (16), behind, leader [LEAD].
- Funny  (3426), New Horizons (16), avoiding, leader [LEAD].
- Funny (3278), New Horizons (16), avoiding, behind, plainsman [PLAI].


forest (58,18) in Nugyru, 353 peasants (vikings), $706.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $847).
  Wanted: none.
  For Sale: 70 vikings [VIKI] at $48, 14 leaders [LEAD] at $96.
  Entertainment available: $35.
  Products: 31 livestock [LIVE], 25 wood [WOOD], 19 furs [FUR], 13
    herbs [HERB].

Exits:
  North : ocean (58,16) in Atlantis Ocean.
  Northeast : forest (59,17) in Nugyru.
  Southeast : forest (59,19) in Nugyru.
  South : forest (58,20) in Nugyru.
  Southwest : forest (57,19) in Nugyru.
  Northwest : ocean (57,17) in Atlantis Ocean.

* Cellian (1114), Gragblod (7), revealing faction, holding, receiving
  no aid, 2 vikings [VIKI], 48 silver [SILV]. Weight: 20. Capacity:
  0/0/30/0. Skills: combat [COMB] 1 (30).
- Izluks (1373), viking [VIKI].
* Unit (748), Gragblod (7), revealing faction, holding, receiving no
  aid, 60 silver [SILV], viking [VIKI]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


plain (60,18) in Satiasam, 549 peasants (sea elves), $3294.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $1756).
  Wanted: none.
  For Sale: 109 sea elves [SELF] at $64, 21 leaders [LEAD] at $128.
  Entertainment available: $164.
  Products: 76 grain [GRAI], 37 horses [HORS].

Exits:
  North : ocean (60,16) in Atlantis Ocean.
  Northeast : ocean (61,17) in Atlantis Ocean.
  Southeast : plain (61,19) in Satiasam.
  South : plain (60,20) in Satiasam.
  Southwest : forest (59,19) in Nugyru.
  Northwest : forest (59,17) in Nugyru.

* Unit (1888), Gragblod (7), revealing faction, 10 sea elves [SELF],
  660 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 2 (90).
* Unit (1035), Gragblod (7), revealing faction, 5 sea elves [SELF],
  330 silver [SILV]. Weight: 50. Capacity: 0/0/75/0. Skills: combat
  [COMB] 1 (30).
* Unit (1134), Gragblod (7), revealing faction, 76 silver [SILV], sea
  elf [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
  (30).
- Unit (3166), Warlords Inc (19), avoiding, 2 horses [HORS], 2 high
  elves [HELF].
- Unit (3333), Warlords Inc (19), leader [LEAD], horse [HORS].


plain (64,18) in Satiasam, 696 peasants (vikings), $3480.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $15 (Max: $2088).
  Wanted: none.
  For Sale: 139 vikings [VIKI] at $60, 27 leaders [LEAD] at $120.
  Entertainment available: $174.
  Products: 41 grain [GRAI], 31 horses [HORS].

Exits:
  North : ocean (64,16) in Atlantis Ocean.
  Northeast : ocean (65,17) in Atlantis Ocean.
  Southeast : ocean (65,19) in Atlantis Ocean.
  South : plain (64,20) in Satiasam.
  Southwest : plain (63,19) in Satiasam, contains Dun-krag [city].
  Northwest : ocean (63,17) in Atlantis Ocean.

* Unit (1530), Gragblod (7), revealing faction, 10 nomads [NOMA], 440
  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 1 (30).
* Unit (2721), Gragblod (7), revealing faction, nomad [NOMA], 35
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: none.
* Unit (1285), Gragblod (7), revealing faction, 8487 silver [SILV],
  139 vikings [VIKI]. Weight: 1390. Capacity: 0/0/2085/0. Skills:
  combat [COMB] 1 (30).
- Grey Scout (2944), Grey Wind (17), avoiding, behind, viking [VIKI].


plain (72,18) in Bocholt, 718 peasants (sea elves), $4308.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $2297).
  Wanted: none.
  For Sale: 143 sea elves [SELF] at $64, 28 leaders [LEAD] at $128.
  Entertainment available: $215.
  Products: 74 livestock [LIVE], 29 horses [HORS].

Exits:
  North : swamp (72,16) in Issnina.
  Northeast : plain (73,17) in Bocholt.
  Southeast : plain (73,19) in Bocholt, contains Ineault'y [city].
  South : plain (72,20) in Bocholt.
  Southwest : plain (71,19) in Bocholt.
  Northwest : ocean (71,17) in Atlantis Ocean.

* Unit (1078), Gragblod (7), revealing faction, 16 sea elves [SELF],
  1510 silver [SILV]. Weight: 160. Capacity: 0/0/240/0. Skills: combat
  [COMB] 2 (90).
* Unit (1311), Gragblod (7), revealing faction, 6 sea elves [SELF],
  499 silver [SILV]. Weight: 60. Capacity: 0/0/90/0. Skills: combat
  [COMB] 1 (30).
* Unit (1468), on guard, Gragblod (7), revealing faction, 7746 silver
  [SILV], 100 vikings [VIKI]. Weight: 1000. Capacity: 0/0/1500/0.
  Skills: combat [COMB] 1 (30).
- Horse Guy (2740), on guard, New Horizons (16), 2 leaders [LEAD], 9
  winged horses [WING].


plain (74,18) in Bocholt, 420 peasants (nomads), $2520.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $1344).
  Wanted: none.
  For Sale: 84 nomads [NOMA] at $64, 16 leaders [LEAD] at $128.
  Entertainment available: $126.
  Products: 42 grain [GRAI], 28 horses [HORS].

Exits:
  North : plain (74,16) in Bocholt.
  Northeast : plain (75,17) in Bocholt, contains Einheim [town].
  Southeast : plain (75,19) in Bocholt.
  South : plain (74,20) in Bocholt.
  Southwest : plain (73,19) in Bocholt, contains Ineault'y [city].
  Northwest : plain (73,17) in Bocholt.

* Unit (1528), on guard, Gragblod (7), revealing faction, 10 nomads
  [NOMA], 420 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
  combat [COMB] 2 (90).
* Unit (1801), Gragblod (7), revealing faction, 291 silver [SILV], 4
  nomads [NOMA]. Weight: 40. Capacity: 0/0/60/0. Skills: combat [COMB]
  1 (30).
* Unit (611), Gragblod (7), revealing faction, 6135 silver [SILV],
  nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills: none.


forest (76,18) in Uzrot, 279 peasants (wood elves), $1116.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $781).
  Wanted: none.
  For Sale: 55 wood elves [WELF] at $56, 11 leaders [LEAD] at $112.
  Entertainment available: $55.
  Products: 39 livestock [LIVE], 27 wood [WOOD], 18 furs [FUR], 12
    herbs [HERB].

Exits:
  North : forest (76,16) in Uzrot.
  Northeast : plain (77,17) in Morungol.
  Southeast : plain (77,19) in Morungol, contains Mustlor [city].
  South : ocean (76,20) in Atlantis Ocean.
  Southwest : plain (75,19) in Bocholt.
  Northwest : plain (75,17) in Bocholt, contains Einheim [town].

* Unit (1121), Gragblod (7), revealing faction, wood elf [WELF], 36
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (1150), Gragblod (7), revealing faction, 2 sea elves [SELF], 73
  silver [SILV], sword [SWOR]. Weight: 21. Capacity: 0/0/30/0. Skills:
  combat [COMB] 1 (44).
- yew (3083), on guard, New Horizons (16), horse [HORS], leader
  [LEAD].
- yew (3084), New Horizons (16), avoiding, behind, leader [LEAD].
- yew (3085), on guard, New Horizons (16), leader [LEAD].
* Unit (1828), Gragblod (7), revealing faction, wood elf [WELF], 36
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (2044), Gragblod (7), revealing faction, 49 silver [SILV], wood
  elf [WELF]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
  (30).
- Yew (3280), New Horizons (16), avoiding, behind, leader [LEAD].
- Eainfeld (1367), New Horizons (16), avoiding, behind, 10 wood elves
  [WELF].
- Courier (2482), New Horizons (16), avoiding, leader [LEAD], winged
  horse [WING].
- foresters (2225), New Horizons (16), avoiding, behind, 4 wood elves
  [WELF].
- Courier (3238), New Horizons (16), avoiding, behind, 15 horses
  [HORS], high elf [HELF], 7 winged horses [WING], 10 livestock
  [LIVE].


forest (57,19) in Nugyru, 365 peasants (sea elves), $730.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $876).
  Wanted: none.
  For Sale: 73 sea elves [SELF] at $48, 14 leaders [LEAD] at $96.
  Entertainment available: $36.
  Products: 22 livestock [LIVE], 22 wood [WOOD], 18 furs [FUR], 14
    herbs [HERB].

Exits:
  North : ocean (57,17) in Atlantis Ocean.
  Northeast : forest (58,18) in Nugyru.
  Southeast : forest (58,20) in Nugyru.
  South : ocean (57,21) in Atlantis Ocean.
  Southwest : ocean (56,20) in Atlantis Ocean.
  Northwest : ocean (56,18) in Atlantis Ocean.

- Izluks (1429), sea elf [SELF].
* Mantius (1116), Gragblod (7), avoiding, revealing faction, holding,
  receiving no aid, viking [VIKI], 24 silver [SILV]. Weight: 10.
  Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
* Lufanius (1309), Gragblod (7), avoiding, revealing faction, holding,
  receiving no aid, sea elf [SELF], 24 silver [SILV]. Weight: 10.
  Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
* Unit (1061), Gragblod (7), avoiding, revealing faction, holding,
  receiving no aid, 64 silver [SILV], sea elf [SELF]. Weight: 10.
  Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
- Unit (2410), Warlords Inc (19), leader [LEAD], horse [HORS].


forest (59,19) in Nugyru, 270 peasants (vikings), $1080.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $756).
  Wanted: none.
  For Sale: 54 vikings [VIKI] at $56, 10 leaders [LEAD] at $112.
  Entertainment available: $54.
  Products: 30 grain [GRAI], 47 wood [WOOD], 18 furs [FUR], 12 herbs
    [HERB].

Exits:
  North : forest (59,17) in Nugyru.
  Northeast : plain (60,18) in Satiasam.
  Southeast : plain (60,20) in Satiasam.
  South : forest (59,21) in Nugyru.
  Southwest : forest (58,20) in Nugyru.
  Northwest : forest (58,18) in Nugyru.

* Cirrunia (1132), Gragblod (7), revealing faction, holding, 3 vikings
  [VIKI], 368 silver [SILV]. Weight: 30. Capacity: 0/0/45/0. Skills:
  combat [COMB] 1 (30).
- Izluks (1092), viking [VIKI].
- Unit (2494), Warlords Inc (19), avoiding, 4 vikings [VIKI].
- Unit (2535), on guard, Warlords Inc (19), leader [LEAD], 5 wood
  [WOOD].
- Unit (2651), Warlords Inc (19), avoiding, 2 leaders [LEAD].
- Unit (2653), Warlords Inc (19), leader [LEAD], 5 wood [WOOD].
- Unit (2654), Warlords Inc (19), leader [LEAD].
- Unit (2655), Warlords Inc (19), leader [LEAD].
- Unit (2656), Warlords Inc (19), leader [LEAD].
- Unit (2657), Warlords Inc (19), leader [LEAD].
- Unit (2658), Warlords Inc (19), leader [LEAD].
- Unit (2770), Warlords Inc (19), avoiding, 2 leaders [LEAD].
- Unit (2771), Warlords Inc (19), avoiding, 2 leaders [LEAD], 55
  ironwood [IRWD].
- Unit (2773), Warlords Inc (19), 4 leaders [LEAD].
- Unit (3099), on guard, Warlords Inc (19), leader [LEAD].
- Unit (3101), on guard, Warlords Inc (19), 2 leaders [LEAD], 5
  ironwood [IRWD].
- Unit (3178), Warlords Inc (19), 2 horses [HORS], leader [LEAD].
- Unit (3262), Warlords Inc (19), leader [LEAD].
- Unit (3263), Warlords Inc (19), 10 leaders [LEAD], 24 crossbows
  [XBOW].
- Unit (3172), Warlords Inc (19), 10 nomads [NOMA], 10 horses [HORS].
- Unit (3258), Warlords Inc (19), leader [LEAD].

+ Building [1] : Timber Yard.
  - Unit (2324), Warlords Inc (19), avoiding, 3 wood elves [WELF],
    viking [VIKI], 12 wood [WOOD].

+ Building [2] : Timber Yard.
  - Unit (1714), Warlords Inc (19), avoiding, 4 vikings [VIKI], 12
    wood [WOOD].

+ Building [3] : Timber Yard.

+ Building [4] : Timber Yard.

+ Building [5] : Timber Yard, needs 5.
  - Unit (3261), Warlords Inc (19), 5 vikings [VIKI].


plain (61,19) in Satiasam, 743 peasants (sea elves), $4458.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $2377).
  Wanted: none.
  For Sale: 148 sea elves [SELF] at $64, 29 leaders [LEAD] at $128.
  Entertainment available: $222.
  Products: 44 grain [GRAI], 32 horses [HORS].

Exits:
  North : ocean (61,17) in Atlantis Ocean.
  Northeast : ocean (62,18) in Atlantis Ocean.
  Southeast : plain (62,20) in Satiasam, contains Oufodale [city].
  South : plain (61,21) in Satiasam.
  Southwest : plain (60,20) in Satiasam.
  Northwest : plain (60,18) in Satiasam.

* Unit (1838), on guard, Gragblod (7), revealing faction, 10 sea elves
  [SELF], 601 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
  combat [COMB] 2 (90).
* Unit (1077), Gragblod (7), revealing faction, 4 sea elves [SELF],
  242 silver [SILV]. Weight: 40. Capacity: 0/0/60/0. Skills: combat
  [COMB] 1 (30).
* Unit (1866), Gragblod (7), revealing faction, sea elf [SELF], 60
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (1453), Gragblod (7), revealing faction, sea elf [SELF], 55
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).


plain (63,19) in Satiasam, contains Dun-krag [city], 7505 peasants
  (nomads), $52535.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $17 (Max: $25517).
  Wanted: 188 grain [GRAI] at $20, 144 livestock [LIVE] at $27, 74
    iron [IRON] at $62, 95 wood [WOOD] at $48, 132 fish [FISH] at $27,
    50 swords [SWOR] at $117, 87 chain armor [CARM] at $110, 64 plate
    armor [PARM] at $446, 91 truffles [TRUF] at $173, 86 perfume
    [PERF] at $173.
  For Sale: 60 mink [MINK] at $84, 60 cotton [COTT] at $87, 1501
    nomads [NOMA] at $68, 300 leaders [LEAD] at $136.
  Entertainment available: $2626.
  Products: 63 livestock [LIVE], 26 horses [HORS].

Exits:
  North : ocean (63,17) in Atlantis Ocean.
  Northeast : plain (64,18) in Satiasam.
  Southeast : plain (64,20) in Satiasam.
  South : plain (63,21) in Satiasam.
  Southwest : plain (62,20) in Satiasam, contains Oufodale [city].
  Northwest : ocean (62,18) in Atlantis Ocean.

* Cullius (1140), Gragblod (7), revealing faction, 2 nomads [NOMA], 4
  winged horses [WING], 20 silver [SILV]. Weight: 220. Capacity:
  280/280/310/0. Skills: entertainment [ENTE] 1 (30).
- Izluks (1412), Multiple Bite Wounds (10), avoiding, behind, sea elf
  [SELF].
* Gratera (1349), on guard, Gragblod (7), revealing faction, 10
  leaders [LEAD], 422 silver [SILV], 2 winged horses [WING]. Weight:
  200. Capacity: 140/140/290/0. Skills: combat [COMB] 4 (360),
  observation [OBSE] 5 (450), crossbow [XBOW] 2 (150).
* Unit (890), on guard, Gragblod (7), revealing faction, 100 leaders
  [LEAD], sword [SWOR], 4120 silver [SILV]. Weight: 1001. Capacity:
  0/0/1500/0. Skills: combat [COMB] 5 (450), crossbow [XBOW] 3 (180).
* Unit (1025), on guard, Gragblod (7), revealing faction, 100 leaders
  [LEAD], 2 swords [SWOR], 4120 silver [SILV]. Weight: 1002. Capacity:
  0/0/1500/0. Skills: combat [COMB] 5 (450), crossbow [XBOW] 3 (180).
* Unit (1115), on guard, Gragblod (7), revealing faction, 100 leaders
  [LEAD], 4217 silver [SILV], 2 swords [SWOR]. Weight: 1002. Capacity:
  0/0/1500/0. Skills: combat [COMB] 5 (450), crossbow [XBOW] 3 (240).
* Unit (235), Gragblod (7), revealing faction, 2168 vikings [VIKI],
  84952 silver [SILV], 7 swords [SWOR], 160 horses [HORS]. Weight:
  29687. Capacity: 0/11200/43720/0. Skills: combat [COMB] 3 (180).
* Unit (2165), Gragblod (7), behind, revealing faction, leader [LEAD],
  1330 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: tactics
  [TACT] 5 (450), observation [OBSE] 1 (60).
* Unit (1478), Gragblod (7), behind, revealing faction, 4014 silver
  [SILV], leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills:
  observation [OBSE] 4 (360).
* Unit (1159), Gragblod (7), revealing faction, 3084 silver [SILV],
  leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: observation
  [OBSE] 1 (60), stealth [STEA] 3 (270).
- Unit (3327), Warlords Inc (19), leader [LEAD], horse [HORS], 11
  winged horses [WING].
* Unit (1467), Gragblod (7), revealing faction, 337 silver [SILV],
  nomad [NOMA], 27 horses [HORS]. Weight: 1360. Capacity:
  0/1890/1905/0. Skills: none.
* Unit (2296), Gragblod (7), revealing faction, tribesman [TMAN],
  horse [HORS], 170 silver [SILV]. Weight: 60. Capacity: 0/70/85/0.
  Skills: none.


plain (71,19) in Bocholt, 449 peasants (vikings), $2694.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $1436).
  Wanted: none.
  For Sale: 89 vikings [VIKI] at $64, 17 leaders [LEAD] at $128.
  Entertainment available: $134.
  Products: 45 livestock [LIVE], 20 horses [HORS].

Exits:
  North : ocean (71,17) in Atlantis Ocean.
  Northeast : plain (72,18) in Bocholt.
  Southeast : plain (72,20) in Bocholt.
  South : ocean (71,21) in Atlantis Ocean.
  Southwest : ocean (70,20) in Atlantis Ocean.
  Northwest : ocean (70,18) in Atlantis Ocean.

* Unit (1356), Gragblod (7), revealing faction, 7 sea elves [SELF],
  752 silver [SILV]. Weight: 70. Capacity: 0/0/105/0. Skills: combat
  [COMB] 2 (90).
* Unit (1144), Gragblod (7), revealing faction, 8 vikings [VIKI], 536
  silver [SILV]. Weight: 80. Capacity: 0/0/120/0. Skills: combat
  [COMB] 1 (86).
- Funny Guards (3180), on guard, New Horizons (16), behind, 6 horses
  [HORS], leader [LEAD].
- Rain (3359), New Horizons (16), avoiding, behind, leader [LEAD].
- Ranchers (3353), New Horizons (16), avoiding, behind, 10 nomads
  [NOMA], 20 livestock [LIVE].


plain (73,19) in Bocholt, contains Ineault'y [city], 5421 peasants
  (nomads), $48789.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $19 (Max: $20599).
  Wanted: 144 grain [GRAI] at $21, 176 livestock [LIVE] at $27, 80
    swords [SWOR] at $114, 81 chain armor [CARM] at $99, 55 plate
    armor [PARM] at $554, 69 wagons [WAGO] at $159, 52 truffles [TRUF]
    at $137, 50 velvet [VELV] at $137.
  For Sale: 82 horses [HORS] at $84, 50 figurines [FIGU] at $90, 91
    dye [DYE] at $89, 1084 nomads [NOMA] at $76, 216 leaders [LEAD] at
    $152.
  Entertainment available: $2439.
  Products: 49 livestock [LIVE], 33 horses [HORS].

Exits:
  North : plain (73,17) in Bocholt.
  Northeast : plain (74,18) in Bocholt.
  Southeast : plain (74,20) in Bocholt.
  South : plain (73,21) in Bocholt.
  Southwest : plain (72,20) in Bocholt.
  Northwest : plain (72,18) in Bocholt.

* Sevellaeius (1081), Gragblod (7), avoiding, revealing faction,
  holding, receiving no aid, nomad [NOMA], stone [STON], longbow
  [LBOW]. Weight: 61. Capacity: 0/0/15/0. Skills: entertainment [ENTE]
  1 (30).
- Izsitejs (1111), SuperNerrs 001 (13), avoiding, behind, viking
  [VIKI], horse [HORS].
* Cimonia (1157), Gragblod (7), revealing faction, 61 high elves
  [HELF], 61 horses [HORS], 3763 silver [SILV]. Weight: 3660.
  Capacity: 0/4270/5185/0. Skills: combat [COMB] 2 (90).
* Manius (908), on guard, Gragblod (7), revealing faction, 275 sea
  elves [SELF], 13064 silver [SILV], 251 horses [HORS]. Weight: 15300.
  Capacity: 0/17570/21695/0. Skills: combat [COMB] 2 (90).
* Salecia (1236), Gragblod (7), revealing faction, 144 nomads [NOMA],
  144 horses [HORS], 5264 silver [SILV]. Weight: 8640. Capacity:
  0/10080/12240/0. Skills: combat [COMB] 2 (90).
* Jallius (1186), Gragblod (7), behind, revealing faction, 214 silver
  [SILV], leader [LEAD], horse [HORS]. Weight: 60. Capacity:
  0/70/85/0. Skills: combat [COMB] 1 (60), tactics [TACT] 5 (450),
  observation [OBSE] 3 (270).
- Truffles (1859), on guard, New Horizons (16), tribal elf [TELF],
  nomad [NOMA], 180 horses [HORS].
* Unit (1185), Gragblod (7), revealing faction, 10 leaders [LEAD], 376
  silver [SILV], 10 horses [HORS]. Weight: 600. Capacity: 0/700/850/0.
  Skills: combat [COMB] 3 (240), crossbow [XBOW] 3 (210).
* Unit (1237), Gragblod (7), revealing faction, 10 leaders [LEAD], 876
  silver [SILV], 10 horses [HORS]. Weight: 600. Capacity: 0/700/850/0.
  Skills: combat [COMB] 3 (210), longbow [LBOW] 4 (300), crossbow
  [XBOW] 3 (180), stealth [STEA] 2 (120).
* Unit (1269), Gragblod (7), revealing faction, 10 leaders [LEAD], 376
  silver [SILV], 10 horses [HORS]. Weight: 600. Capacity: 0/700/850/0.
  Skills: combat [COMB] 3 (210), crossbow [XBOW] 5 (450).
* Unit (1277), Gragblod (7), revealing faction, 10 leaders [LEAD], 877
  silver [SILV], 10 horses [HORS]. Weight: 600. Capacity: 0/700/850/0.
  Skills: combat [COMB] 3 (210), observation [OBSE] 5 (450), crossbow
  [XBOW] 3 (240).
* Unit (1341), Gragblod (7), revealing faction, 10 leaders [LEAD], 777
  silver [SILV], 10 horses [HORS]. Weight: 600. Capacity: 0/700/850/0.
  Skills: combat [COMB] 3 (210), stealth [STEA] 5 (450), crossbow
  [XBOW] 3 (270).
* Unit (1402), Gragblod (7), revealing faction, 10 leaders [LEAD], 278
  silver [SILV], 10 horses [HORS]. Weight: 600. Capacity: 0/700/850/0.
  Skills: combat [COMB] 3 (210), riding [RIDI] 5 (450), crossbow
  [XBOW] 3 (270).
- Ranch (2212), New Horizons (16), avoiding, behind, 2 leaders [LEAD],
  11 horses [HORS].
- Ranch (2213), New Horizons (16), avoiding, behind, leader [LEAD].
- Reilly (2214), New Horizons (16), avoiding, behind, leader [LEAD].
- Comb 9 (2179), New Horizons (16), behind, 90 leaders [LEAD], 62
  winged horses [WING].
- HorsSte (2220), leader [LEAD], winged horse [WING].
- Magnificent 7 (2312), New Horizons (16), behind, 17 leaders [LEAD].
- Rawhide (2313), New Horizons (16), avoiding, behind, 17 nomads
  [NOMA], 49 livestock [LIVE].
- Aux (2314), New Horizons (16), behind, leader [LEAD].
- 2 wise guys (2391), New Horizons (16), behind, 2 leaders [LEAD].
- Wise Guy (2396), New Horizons (16), avoiding, behind, leader [LEAD].
- Reilly (2398), New Horizons (16), avoiding, behind, leader [LEAD].
- 2 Ridi Guys (2476), New Horizons (16), avoiding, 2 leaders [LEAD].
- Carp Guy (2477), New Horizons (16), behind, leader [LEAD].
- Herb Guy (2480), New Horizons (16), avoiding, behind, leader [LEAD],
  double bow [DBOW].
- stealthy guys (2481), 3 leaders [LEAD].
- Hunt Guy (2483), New Horizons (16), avoiding, behind, 3 leaders
  [LEAD].
- Fish Guy (2484), New Horizons (16), avoiding, behind, 3 leaders
  [LEAD], horse [HORS].
- Ridi Guy (2485), New Horizons (16), avoiding, behind, leader [LEAD],
  5 winged horses [WING].
* Unit (1055), Gragblod (7), revealing faction, 41973 silver [SILV],
  623 vikings [VIKI], 623 horses [HORS], chain armor [CARM], 4 swords
  [SWOR]. Weight: 37385. Capacity: 0/43610/52955/0. Skills: combat
  [COMB] 3 (180).
- Weap (1839), New Horizons (16), avoiding, behind, leader [LEAD],
  horse [HORS], 5 double bows [DBOW].
- Mini (1860), New Horizons (16), avoiding, behind, leader [LEAD],
  horse [HORS].
- Ridi 5 (2519), New Horizons (16), avoiding, behind, 5 leaders
  [LEAD].
- Reilly crew (2521), 2 leaders [LEAD].
- Stealthy guy (2522), leader [LEAD].
- Lumber Guy (2523), New Horizons (16), avoiding, behind, leader
  [LEAD].
* Unit (2171), Gragblod (7), revealing faction, 10 leaders [LEAD], 333
  silver [SILV], 10 horses [HORS]. Weight: 600. Capacity: 0/700/850/0.
  Skills: combat [COMB] 5 (450), crossbow [XBOW] 3 (180).
* Unit (2173), Gragblod (7), revealing faction, 10 leaders [LEAD], 333
  silver [SILV], 10 horses [HORS]. Weight: 600. Capacity: 0/700/850/0.
  Skills: combat [COMB] 5 (450), crossbow [XBOW] 3 (210).
* Unit (2295), Gragblod (7), revealing faction, 10 leaders [LEAD], 334
  silver [SILV], 10 horses [HORS]. Weight: 600. Capacity: 0/700/850/0.
  Skills: combat [COMB] 4 (360), crossbow [XBOW] 3 (180), riding
  [RIDI] 2 (120).
- Mini (2630), New Horizons (16), avoiding, behind, 4 leaders [LEAD].
- Stealthy Guys (2631), New Horizons (16), avoiding, behind, 2 leaders
  [LEAD].
- Advanced Horse (2632), New Horizons (16), avoiding, behind, leader
  [LEAD].
- Weap boys (2634), New Horizons (16), avoiding, behind, 2 leaders
  [LEAD], 10 double bows [DBOW].
- Ridi Guy (2745), New Horizons (16), avoiding, behind, leader [LEAD],
  winged horse [WING].
- Ridi Guy (2746), New Horizons (16), avoiding, behind, leader [LEAD],
  winged horse [WING].
- Mini Guys (3003), New Horizons (16), avoiding, behind, 4 leaders
  [LEAD].
- Carpenters (3004), New Horizons (16), avoiding, behind, 5 leaders
  [LEAD], 85 ironwood [IRWD].
- Yew Guys (3005), New Horizons (16), avoiding, behind, 5 leaders
  [LEAD].
* Unit (1534), Gragblod (7), revealing faction, 100 leaders [LEAD],
  2804 silver [SILV], 100 crossbows [XBOW], 42 horses [HORS]. Weight:
  3200. Capacity: 0/2940/4440/0. Skills: combat [COMB] 2 (150),
  crossbow [XBOW] 3 (240).
- Stealth Guys (2987), 2 leaders [LEAD].
- Tact 5 (3027), New Horizons (16), avoiding, behind, 5 leaders
  [LEAD].
- 5% Stea (3029), 4 leaders [LEAD].
- 5% Lumb (3030), New Horizons (16), avoiding, behind, leader [LEAD].
* Unit (888), Gragblod (7), revealing faction, 50 vikings [VIKI], 50
  horses [HORS], 3682 silver [SILV]. Weight: 3000. Capacity:
  0/3500/4250/0. Skills: combat [COMB] 3 (180).
- Hors Guys (3159), New Horizons (16), avoiding, behind, 10 leaders
  [LEAD].
- XBteacher (3241), New Horizons (16), avoiding, behind, leader
  [LEAD], double bow [DBOW].
- LBteacher (3242), New Horizons (16), avoiding, behind, leader
  [LEAD], double bow [DBOW], 8 winged horses [WING].
- Lbow guy (3243), New Horizons (16), behind, 6 leaders [LEAD], 4
  double bows [DBOW], 8 winged horses [WING].
- Xbow guy (3244), New Horizons (16), avoiding, behind, 6 leaders
  [LEAD], double bow [DBOW].
* Unit (2041), Gragblod (7), revealing faction, 9234 silver [SILV],
  184 nomads [NOMA], 119 crossbows [XBOW]. Weight: 1959. Capacity:
  0/0/2760/0. Skills: crossbow [XBOW] 3 (180).
- Globe theatre (3006), New Horizons (16), avoiding, behind, 30 wood
  elves [WELF], 2 horses [HORS].
- Xguy (3200), New Horizons (16), behind, leader [LEAD].
* Unit (2670), Gragblod (7), revealing faction, 184 nomads [NOMA],
  1284 silver [SILV]. Weight: 1840. Capacity: 0/0/2760/0. Skills:
  crossbow [XBOW] 3 (180).
- com guys (3275), New Horizons (16), 10 leaders [LEAD], 14 winged
  horses [WING].
- Yew (3279), New Horizons (16), avoiding, behind, 5 horses [HORS],
  leader [LEAD].
- SteTeacher (3308), New Horizons (16), avoiding, behind, leader
  [LEAD].
- SteTeacher (3309), 2 leaders [LEAD].
* Unit (1664), Gragblod (7), revealing faction, 60 nomads [NOMA].
  Weight: 600. Capacity: 0/0/900/0. Skills: crossbow [XBOW] 3 (180).
* Unit (1724), Gragblod (7), revealing faction, 100 nomads [NOMA], 34
  silver [SILV]. Weight: 1000. Capacity: 0/0/1500/0. Skills: crossbow
  [XBOW] 3 (180).
- Funny (3350), New Horizons (16), avoiding, behind, leader [LEAD],
  horse [HORS].
- Weap guys (3354), New Horizons (16), avoiding, behind, leader
  [LEAD].
- comb guy (3355), New Horizons (16), avoiding, behind, leader [LEAD].
- Weap guys (3427), New Horizons (16), avoiding, behind, 15 leaders
  [LEAD], 8 horses [HORS].
- Aux Weap (3428), New Horizons (16), avoiding, behind, 3 leaders
  [LEAD].
- Courier (3349), New Horizons (16), avoiding, leader [LEAD].
- Funny (3319), New Horizons (16), avoiding, behind, horse [HORS],
  plainsman [PLAI].
- Rawhide (1387), New Horizons (16), avoiding, behind, 8 horses
  [HORS], 10 nomads [NOMA].
- mini teacher (1411), New Horizons (16), avoiding, behind, leader
  [LEAD].
- Xguy (1413), New Horizons (16), behind, 7 leaders [LEAD], double bow
  [DBOW].
- Lguy (1457), New Horizons (16), avoiding, behind, 7 leaders [LEAD],
  double bow [DBOW], 11 winged horses [WING].
- mini teacher (1473), New Horizons (16), avoiding, behind, 5 leaders
  [LEAD].
- Funny (3318), New Horizons (16), avoiding, behind, plainsman [PLAI].
* Unit (1234), Gragblod (7), revealing faction, 37 silver [SILV], 100
  nomads [NOMA]. Weight: 1000. Capacity: 0/0/1500/0. Skills: crossbow
  [XBOW] 1 (60).
- Funny (3289), New Horizons (16), avoiding, behind, plainsman [PLAI].
- Lumber Guys (2998), New Horizons (16), avoiding, behind, 2 leaders
  [LEAD], 2 horses [HORS], 4 winged horses [WING].
- Taxeer (1747), New Horizons (16), leader [LEAD], 2 horses [HORS].
- Funny (3299), New Horizons (16), avoiding, behind, plainsman [PLAI],
  9 horses [HORS].
- Rawhide (2228), New Horizons (16), avoiding, behind, 8 horses
  [HORS], 10 nomads [NOMA].
- Rawhide (2229), New Horizons (16), avoiding, behind, 8 horses
  [HORS], 10 nomads [NOMA].
- Courier (3245), New Horizons (16), avoiding, behind, leader [LEAD],
  winged horse [WING], 30 horses [HORS].
- womgers (2180), New Horizons (16), 2 winged horses [WING], leader
  [LEAD].
- courier (1481), New Horizons (16), avoiding, behind, leader [LEAD].
- delivery (3148), New Horizons (16), avoiding, behind, leader [LEAD],
  103 truffles [TRUF], horse [HORS].
- Whatever (3395), New Horizons (16), avoiding, 50 figurines [FIGU],
  leader [LEAD].
- Lguy (3396), New Horizons (16), behind, leader [LEAD].
- Xguy (3421), New Horizons (16), behind, leader [LEAD].
- Lguy (3422), New Horizons (16), avoiding, behind, leader [LEAD].
- Xguy (3430), New Horizons (16), avoiding, behind, leader [LEAD].
- Consolidated (2730), New Horizons (16), avoiding, 3 horses [HORS],
  leader [LEAD].
- Courier (3431), New Horizons (16), avoiding, behind, 11 livestock
  [LIVE], 7 winged horses [WING], leader [LEAD].
- OK Coral (2851), New Horizons (16), avoiding, behind, horse [HORS],
  leader [LEAD], 8 winged horses [WING].
- Drover (3310), New Horizons (16), 8 horses [HORS], leader [LEAD], 7
  yew [YEW], 9 ironwood [IRWD].


plain (75,19) in Bocholt, 475 peasants (nomads), $2850.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $1520).
  Wanted: none.
  For Sale: 95 nomads [NOMA] at $64, 19 leaders [LEAD] at $128.
  Entertainment available: $142.
  Products: 40 livestock [LIVE], 39 horses [HORS].

Exits:
  North : plain (75,17) in Bocholt, contains Einheim [town].
  Northeast : forest (76,18) in Uzrot.
  Southeast : ocean (76,20) in Atlantis Ocean.
  South : ocean (75,21) in Atlantis Ocean.
  Southwest : plain (74,20) in Bocholt.
  Northwest : plain (74,18) in Bocholt.

* Unit (1902), Gragblod (7), revealing faction, 10 vikings [VIKI],
  chain armor [CARM], 660 silver [SILV]. Weight: 101. Capacity:
  0/0/150/0. Skills: combat [COMB] 2 (120).
* Unit (1168), Gragblod (7), revealing faction, stone [STON], 3 nomads
  [NOMA], 198 silver [SILV]. Weight: 80. Capacity: 0/0/45/0. Skills:
  combat [COMB] 1 (60).
* Unit (2345), Gragblod (7), revealing faction, 293 silver [SILV], 2
  nomads [NOMA]. Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB]
  1 (30).
- Wing (3155), New Horizons (16), avoiding, behind, 2 leaders [LEAD],
  8 winged horses [WING].
- Funny guard (3360), on guard, New Horizons (16), leader [LEAD].
- Rawhide (3053), New Horizons (16), avoiding, behind, 13 nomads
  [NOMA], 39 livestock [LIVE].
- Funny (3320), New Horizons (16), avoiding, behind, plainsman [PLAI],
  winged horse [WING].


plain (77,19) in Morungol, contains Mustlor [city], 4830 peasants
  (vikings), $33810.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $17 (Max: $16422).
  Wanted: 172 grain [GRAI] at $21, 102 livestock [LIVE] at $20, 57
    furs [FUR] at $60, 114 fish [FISH] at $18, 69 wine [WINE] at $138,
    62 vodka [VODK] at $130.
  For Sale: 99 horses [HORS] at $74, 44 swords [SWOR] at $151, 46
    crossbows [XBOW] at $142, 69 dye [DYE] at $71, 88 wool [WOOL] at
    $60, 966 vikings [VIKI] at $68, 193 leaders [LEAD] at $136.
  Entertainment available: $1690.
  Products: 77 livestock [LIVE], 38 horses [HORS].

Exits:
  North : plain (77,17) in Morungol.
  Northeast : ocean (78,18) in Atlantis Ocean.
  Southeast : ocean (78,20) in Atlantis Ocean.
  South : ocean (77,21) in Atlantis Ocean.
  Southwest : ocean (76,20) in Atlantis Ocean.
  Northwest : forest (76,18) in Uzrot.

* Notarcius (1267), Gragblod (7), avoiding, revealing faction, 3
  vikings [VIKI], 3 horses [HORS], 73 silver [SILV]. Weight: 180.
  Capacity: 0/210/255/0. Skills: entertainment [ENTE] 1 (30).
* Unit (579), Gragblod (7), avoiding, revealing faction, holding,
  receiving no aid, nomad [NOMA], 25062 silver [SILV], 99 horses
  [HORS], 44 swords [SWOR], 46 crossbows [XBOW]. Weight: 5050.
  Capacity: 0/6930/6945/0. Skills: entertainment [ENTE] 1 (30).
* Ortia (1082), Gragblod (7), revealing faction, 305 vikings [VIKI],
  305 horses [HORS], 305 swords [SWOR], 17653 silver [SILV]. Weight:
  18605. Capacity: 0/21350/25925/0. Skills: combat [COMB] 3 (180).
* Unit (215), Gragblod (7), behind, revealing faction, 598 silver
  [SILV], leader [LEAD], horse [HORS]. Weight: 60. Capacity:
  0/70/85/0. Skills: tactics [TACT] 5 (450), stealth [STEA] 2 (90).
* Unit (642), Gragblod (7), revealing faction, 2383 silver [SILV],
  leader [LEAD], horse [HORS]. Weight: 60. Capacity: 0/70/85/0.
  Skills: combat [COMB] 4 (360).
* Unit (1155), Gragblod (7), behind, revealing faction, leader [LEAD],
  300 silver [SILV], horse [HORS], crossbow [XBOW]. Weight: 61.
  Capacity: 0/70/85/0. Skills: tactics [TACT] 1 (30), crossbow [XBOW]
  4 (330).
* Unit (1543), on guard, Gragblod (7), revealing faction, 100 vikings
  [VIKI], 100 horses [HORS], 16005 silver [SILV], 100 swords [SWOR].
  Weight: 6100. Capacity: 0/7000/8500/0. Skills: combat [COMB] 3
  (180).
* Unit (1633), Gragblod (7), revealing faction, 100 horses [HORS], 100
  vikings [VIKI], 100 swords [SWOR], 4228 silver [SILV]. Weight: 6100.
  Capacity: 0/7000/8500/0. Skills: combat [COMB] 2 (150).
* Unit (1783), Gragblod (7), revealing faction, 100 horses [HORS], 100
  vikings [VIKI], 7205 silver [SILV], 100 swords [SWOR]. Weight: 6100.
  Capacity: 0/7000/8500/0. Skills: combat [COMB] 1 (30).
* Unit (1851), Gragblod (7), revealing faction, 100 vikings [VIKI],
  100 horses [HORS], 7217 silver [SILV], 100 swords [SWOR]. Weight:
  6100. Capacity: 0/7000/8500/0. Skills: combat [COMB] 1 (30).
* Unit (1297), Gragblod (7), revealing faction, 10 leaders [LEAD],
  1739 silver [SILV], 10 horses [HORS], 10 swords [SWOR]. Weight: 610.
  Capacity: 0/700/850/0. Skills: combat [COMB] 3 (180).
* Unit (1317), Gragblod (7), behind, revealing faction, 10 leaders
  [LEAD], 1736 silver [SILV], 10 horses [HORS], 10 crossbows [XBOW].
  Weight: 610. Capacity: 0/700/850/0. Skills: crossbow [XBOW] 3 (180).
* Unit (2781), Gragblod (7), revealing faction, 30 vikings [VIKI],
  14233 silver [SILV], 30 horses [HORS], 30 swords [SWOR]. Weight:
  1830. Capacity: 0/2100/2550/0. Skills: combat [COMB] 1 (30).
- comb starter (3160), New Horizons (16), avoiding, 2 horses [HORS], 2
  leaders [LEAD].
- Comb Guys (3135), New Horizons (16), avoiding, behind, 10 leaders
  [LEAD], horse [HORS].
- Comb Guys (3136), New Horizons (16), avoiding, behind, 2 leaders
  [LEAD], 2 horses [HORS].
* Unit (1386), Gragblod (7), revealing faction, 100 nomads [NOMA], 100
  crossbows [XBOW], 100 horses [HORS], 23421 silver [SILV]. Weight:
  6100. Capacity: 0/7000/8500/0. Skills: crossbow [XBOW] 2 (150).
- Com Guy (3090), New Horizons (16), avoiding, behind, 2 horses
  [HORS], leader [LEAD].
* Unit (1955), Gragblod (7), behind, revealing faction, 16218 silver
  [SILV], 100 nomads [NOMA], 100 crossbows [XBOW], 100 horses [HORS].
  Weight: 6100. Capacity: 0/7000/8500/0. Skills: crossbow [XBOW] 3
  (180).
- Com Guy (3089), New Horizons (16), avoiding, behind, leader [LEAD],
  21 horses [HORS].
* Unit (2627), Gragblod (7), avoiding, revealing faction, 3273 silver
  [SILV], 70 nomads [NOMA], 70 crossbows [XBOW], 70 horses [HORS].
  Weight: 4270. Capacity: 0/4900/5950/0. Skills: none.
* Unit (2509), Gragblod (7), avoiding, revealing faction, 36 silver
  [SILV], viking [VIKI], horse [HORS]. Weight: 60. Capacity:
  0/70/85/0. Skills: none.
* Unit (962), Gragblod (7), avoiding, revealing faction, 100 nomads
  [NOMA], 100 crossbows [XBOW], 449 silver [SILV], 100 horses [HORS].
  Weight: 6100. Capacity: 0/7000/8500/0. Skills: crossbow [XBOW] 2
  (90).
- Winging (2877), New Horizons (16), avoiding, leader [LEAD], 11
  horses [HORS].
- Structures (3052), New Horizons (16), avoiding, 5 wood elves [WELF].
* Papurius (1242), Gragblod (7), revealing faction, nomad [NOMA], 55
  horses [HORS], 60082 silver [SILV]. Weight: 2760. Capacity:
  0/3850/3865/0. Skills: entertainment [ENTE] 1 (30).


forest (58,20) in Nugyru, 373 peasants (sea elves), $746.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $895).
  Wanted: none.
  For Sale: 74 sea elves [SELF] at $48, 14 leaders [LEAD] at $96.
  Entertainment available: $37.
  Products: 23 livestock [LIVE], 36 wood [WOOD], 16 furs [FUR], 18
    herbs [HERB].

Exits:
  North : forest (58,18) in Nugyru.
  Northeast : forest (59,19) in Nugyru.
  Southeast : forest (59,21) in Nugyru.
  South : forest (58,22) in Nugyru.
  Southwest : ocean (57,21) in Atlantis Ocean.
  Northwest : forest (57,19) in Nugyru.

* Virius (1059), Gragblod (7), revealing faction, holding, tribal elf
  [TELF], 24 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
  combat [COMB] 1 (30).
* Uncius (1442), Gragblod (7), revealing faction, holding, sea elf
  [SELF], 24 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
  combat [COMB] 1 (30).
- Sargs (1090), plainsman [PLAI].
* Unit (1331), Gragblod (7), revealing faction, holding, 71 silver
  [SILV], sea elf [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
  combat [COMB] 1 (30).


plain (60,20) in Satiasam, 603 peasants (plainsmen), $3618.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $1929).
  Wanted: none.
  For Sale: 120 plainsmen [PLAI] at $64, 24 leaders [LEAD] at $128.
  Entertainment available: $180.
  Products: 71 livestock [LIVE], 36 horses [HORS].

Exits:
  North : plain (60,18) in Satiasam.
  Northeast : plain (61,19) in Satiasam.
  Southeast : plain (61,21) in Satiasam.
  South : forest (60,22) in Nugyru, contains Soroldel [city].
  Southwest : forest (59,21) in Nugyru.
  Northwest : forest (59,19) in Nugyru.

* Unit (1889), Gragblod (7), revealing faction, 10 sea elves [SELF],
  734 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 2 (90).
- Unit (1935), Warlords Inc (19), avoiding, viking [VIKI], horse
  [HORS].
- Unit (2660), Warlords Inc (19), 20 leaders [LEAD], 10 horses [HORS].
* Unit (1379), Gragblod (7), revealing faction, 407 silver [SILV], 5
  plainsmen [PLAI]. Weight: 50. Capacity: 0/0/75/0. Skills: combat
  [COMB] 1 (30).
- Unit (3164), Warlords Inc (19), behind, leader [LEAD].
- Unit (3146), Warlords Inc (19), 10 leaders [LEAD].
- Unit (3186), Warlords Inc (19), 2 horses [HORS], leader [LEAD].
- Unit (3264), Warlords Inc (19), behind, 10 leaders [LEAD], 27 horses
  [HORS].
- Unit (2403), Warlords Inc (19), leader [LEAD].
- Unit (3325), Warlords Inc (19), leader [LEAD].
- Unit (2496), Warlords Inc (19), 2 leaders [LEAD], 10 horses [HORS].
- Unit (2174), Warlords Inc (19), leader [LEAD].
- Unit (2244), Warlords Inc (19), leader [LEAD].
- Unit (3174), Warlords Inc (19), 2 horses [HORS], leader [LEAD].


plain (62,20) in Satiasam, contains Oufodale [city], 2995 peasants
  (sea elves), $20965.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $17 (Max: $10183).
  Wanted: 180 grain [GRAI] at $24, 192 livestock [LIVE] at $23, 176
    fish [FISH] at $26, 31 crossbows [XBOW] at $104, 32 longbows
    [LBOW] at $104, 20 chain armor [CARM] at $107, 16 wagons [WAGO] at
    $170, 16 vodka [VODK] at $149, 2 dye [DYE] at $124.
  For Sale: 15 chocolate [CHOC] at $81, 599 sea elves [SELF] at $68,
    119 leaders [LEAD] at $136.
  Entertainment available: $1048.
  Products: 74 livestock [LIVE], 36 horses [HORS].

Exits:
  North : ocean (62,18) in Atlantis Ocean.
  Northeast : plain (63,19) in Satiasam, contains Dun-krag [city].
  Southeast : plain (63,21) in Satiasam.
  South : plain (62,22) in Satiasam.
  Southwest : plain (61,21) in Satiasam.
  Northwest : plain (61,19) in Satiasam.

- Izluks (1270), Multiple Bite Wounds (10), avoiding, sea elf [SELF].
* Maro (1276), Gragblod (7), revealing faction, high elf [HELF], 207
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: entertainment
  [ENTE] 1 (30).
* Cateius (1388), Gragblod (7), revealing faction, 2 sea elves [SELF],
  474 silver [SILV], 15 horses [HORS]. Weight: 770. Capacity:
  0/1050/1080/0. Skills: entertainment [ENTE] 1 (30).
- Castulo (1617), Warlords Inc (19), behind, 7 leaders [LEAD], 7
  horses [HORS].
- Dortania (1618), on guard, Warlords Inc (19), 284 sea elves [SELF],
  25 high elves [HELF], 25 nomads [NOMA], tribesman [TMAN].
- Unit (1209), Warlords Inc (19), leader [LEAD], horse [HORS].
- Unit (2405), Warlords Inc (19), leader [LEAD], horse [HORS].
- Unit (2406), Warlords Inc (19), leader [LEAD], horse [HORS].
- Unit (2407), Warlords Inc (19), leader [LEAD], horse [HORS].
- Unit (2408), Warlords Inc (19), leader [LEAD], horse [HORS].
- Unit (2498), Warlords Inc (19), 2 leaders [LEAD], 2 horses [HORS],
  11 livestock [LIVE].
- Unit (2499), Warlords Inc (19), leader [LEAD], horse [HORS].
- Unit (2500), Warlords Inc (19), leader [LEAD], horse [HORS].
- Unit (2501), Warlords Inc (19), leader [LEAD], horse [HORS].
- Unit (2502), Warlords Inc (19), 2 leaders [LEAD], horse [HORS].
- Unit (2536), Warlords Inc (19), 10 leaders [LEAD], 129 horses
  [HORS].
- Unit (2538), Warlords Inc (19), 10 leaders [LEAD], 10 horses [HORS].
- Unit (2539), Warlords Inc (19), leader [LEAD], horse [HORS].
- Unit (2659), Warlords Inc (19), 41 leaders [LEAD], 8 mithril swords
  [MSWO].
- Unit (2661), Warlords Inc (19), leader [LEAD], horse [HORS].
- Unit (2775), Warlords Inc (19), leader [LEAD], horse [HORS].
- Unit (3102), Warlords Inc (19), 10 leaders [LEAD].
- Unit (3150), Warlords Inc (19), 50 leaders [LEAD].
- Unit (3165), Warlords Inc (19), 5 leaders [LEAD], 5 horses [HORS].
- Unit (3266), Warlords Inc (19), 15 leaders [LEAD], 18 horses [HORS].
- Unit (3312), Warlords Inc (19), 3 leaders [LEAD], 3 horses [HORS].
- Unit (3313), Warlords Inc (19), leader [LEAD].
- Unit (3334), Warlords Inc (19), 10 leaders [LEAD], 10 mithril swords
  [MSWO].
- Unit (3335), Warlords Inc (19), 10 leaders [LEAD].
- Unit (3336), Warlords Inc (19), 10 leaders [LEAD].
- Unit (3443), Warlords Inc (19), 50 leaders [LEAD].
- Unit (3445), Warlords Inc (19), 5 leaders [LEAD].
- Unit (3329), Warlords Inc (19), leader [LEAD], 14 horses [HORS].
- Unit (1716), Warlords Inc (19), 4 leaders [LEAD], 4 horses [HORS].
- Unit (2543), Warlords Inc (19), 9 nomads [NOMA], 6 livestock [LIVE].
- Unit (3188), Warlords Inc (19), 4 horses [HORS], 2 leaders [LEAD].
* Unit (1433), Gragblod (7), revealing faction, nomad [NOMA]. Weight:
  10. Capacity: 0/0/15/0. Skills: combat [COMB] 2 (90).


plain (64,20) in Satiasam, 793 peasants (vikings), $3965.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $15 (Max: $2379).
  Wanted: none.
  For Sale: 158 vikings [VIKI] at $60, 31 leaders [LEAD] at $120.
  Entertainment available: $198.
  Products: 49 grain [GRAI], 26 horses [HORS].

Exits:
  North : plain (64,18) in Satiasam.
  Northeast : ocean (65,19) in Atlantis Ocean.
  Southeast : ocean (65,21) in Atlantis Ocean.
  South : plain (64,22) in Satiasam.
  Southwest : plain (63,21) in Satiasam.
  Northwest : plain (63,19) in Satiasam, contains Dun-krag [city].

* Unit (1650), Gragblod (7), revealing faction, 10 nomads [NOMA], 805
  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 1 (30).
* Unit (2777), Gragblod (7), revealing faction, nomad [NOMA], 47
  silver [SILV], figurines [FIGU], 3 fish [FISH], 2 tarot cards
  [TARO], 3 wood [WOOD], 5 livestock [LIVE], 2 chocolate [CHOC].
  Weight: 291. Capacity: 0/0/265/0. Skills: none.
* Unit (2814), Gragblod (7), revealing faction, 9655 silver [SILV],
  148 vikings [VIKI]. Weight: 1480. Capacity: 0/0/2220/0. Skills:
  combat [COMB] 1 (60).


plain (72,20) in Bocholt, 538 peasants (vikings), $2690.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $15 (Max: $1614).
  Wanted: none.
  For Sale: 107 vikings [VIKI] at $60, 21 leaders [LEAD] at $120.
  Entertainment available: $134.
  Products: 79 grain [GRAI], 23 horses [HORS].

Exits:
  North : plain (72,18) in Bocholt.
  Northeast : plain (73,19) in Bocholt, contains Ineault'y [city].
  Southeast : plain (73,21) in Bocholt.
  South : ocean (72,22) in Atlantis Ocean.
  Southwest : ocean (71,21) in Atlantis Ocean.
  Northwest : plain (71,19) in Bocholt.

* Unit (1355), Gragblod (7), revealing faction, 45 vikings [VIKI],
  8500 silver [SILV]. Weight: 450. Capacity: 0/0/675/0. Skills: combat
  [COMB] 3 (180).
* Unit (399), Gragblod (7), revealing faction, nomad [NOMA], 140
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: entertainment
  [ENTE] 1 (30).
* Unit (1444), on guard, Gragblod (7), revealing faction, 100 vikings
  [VIKI], 18822 silver [SILV]. Weight: 1000. Capacity: 0/0/1500/0.
  Skills: combat [COMB] 2 (90).


plain (74,20) in Bocholt, 548 peasants (vikings), $3288.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $1753).
  Wanted: none.
  For Sale: 109 vikings [VIKI] at $64, 21 leaders [LEAD] at $128.
  Entertainment available: $164.
  Products: 69 livestock [LIVE], 39 horses [HORS].

Exits:
  North : plain (74,18) in Bocholt.
  Northeast : plain (75,19) in Bocholt.
  Southeast : ocean (75,21) in Atlantis Ocean.
  South : jungle (74,22) in Donndinon.
  Southwest : plain (73,21) in Bocholt.
  Northwest : plain (73,19) in Bocholt, contains Ineault'y [city].

* Allia (1265), Gragblod (7), revealing faction, 66 nomads [NOMA],
  herb [HERB], 11780 silver [SILV]. Weight: 660. Capacity: 0/0/990/0.
  Skills: combat [COMB] 2 (90).
* Unit (353), Gragblod (7), revealing faction, nomad [NOMA], 140
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: entertainment
  [ENTE] 1 (30).
* Unit (2112), on guard, Gragblod (7), revealing faction, 13394 silver
  [SILV], 94 vikings [VIKI]. Weight: 940. Capacity: 0/0/1410/0.
  Skills: combat [COMB] 1 (60).
- Rawhide (3028), New Horizons (16), avoiding, behind, 17 nomads
  [NOMA], 51 livestock [LIVE].
- Hors Teach (3088), on guard, New Horizons (16), 2 leaders [LEAD], 7
  winged horses [WING].
- scout (1748), New Horizons (16), viking [VIKI], 26 horses [HORS], 8
  winged horses [WING], 14 dye [DYE].
- Mini (3082), New Horizons (16), avoiding, hill dwarf [HDWA], winged
  horse [WING].


forest (59,21) in Nugyru, 373 peasants (wood elves), $1492.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $1044).
  Wanted: none.
  For Sale: 74 wood elves [WELF] at $56, 14 leaders [LEAD] at $112.
  Entertainment available: $74.
  Products: 23 grain [GRAI], 30 wood [WOOD], 11 furs [FUR], 12 herbs
    [HERB].

Exits:
  North : forest (59,19) in Nugyru.
  Northeast : plain (60,20) in Satiasam.
  Southeast : forest (60,22) in Nugyru, contains Soroldel [city].
  South : forest (59,23) in Nugyru.
  Southwest : forest (58,22) in Nugyru.
  Northwest : forest (58,20) in Nugyru.

- Unit (2537), Warlords Inc (19), 2 leaders [LEAD], 4 horses [HORS],
  24 yew [YEW].
- Unit (2541), Warlords Inc (19), leader [LEAD], 3 horses [HORS].
- Unit (3105), Warlords Inc (19), 3 leaders [LEAD], 45 ironwood
  [IRWD].
- Unit (3107), Warlords Inc (19), 7 wood elves [WELF], 63 wood [WOOD].
- Unit (3192), Warlords Inc (19), leader [LEAD].
- Unit (3193), Warlords Inc (19), 10 leaders [LEAD].
- Unit (3185), on guard, Warlords Inc (19), 2 horses [HORS], leader
  [LEAD].
- Unit (3268), Warlords Inc (19), 10 leaders [LEAD], 9 crossbows
  [XBOW].
- Unit (3269), Warlords Inc (19), leader [LEAD].
- Unit (3314), Warlords Inc (19), 3 wood elves [WELF], 63 ironwood
  [IRWD].
- Unit (2402), Warlords Inc (19), behind, leader [LEAD], horse [HORS],
  5 yew [YEW].
- Unit (3446), Warlords Inc (19), behind, leader [LEAD].
- Unit (1725), Warlords Inc (19), behind, 75 wood [WOOD], 9 leaders
  [LEAD].
* Unit (1241), Gragblod (7), revealing faction, 436 silver [SILV],
  wood elf [WELF]. Weight: 10. Capacity: 0/0/15/0. Skills: none.
- Unit (3103), Warlords Inc (19), leader [LEAD], 3 horses [HORS].

+ Lair [1] : Lair, closed to player units.


plain (61,21) in Satiasam, 720 peasants (high elves), $3600.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $15 (Max: $2160).
  Wanted: none.
  For Sale: 144 high elves [HELF] at $60, 28 leaders [LEAD] at $120.
  Entertainment available: $180.
  Products: 62 grain [GRAI], 33 horses [HORS].

Exits:
  North : plain (61,19) in Satiasam.
  Northeast : plain (62,20) in Satiasam, contains Oufodale [city].
  Southeast : plain (62,22) in Satiasam.
  South : plain (61,23) in Satiasam, contains Sul'em'uq [village].
  Southwest : forest (60,22) in Nugyru, contains Soroldel [city].
  Northwest : plain (60,20) in Satiasam.

* Unit (1822), on guard, Gragblod (7), revealing faction, 10 sea elves
  [SELF], 501 silver [SILV], 6 winged horses [WING]. Weight: 400.
  Capacity: 420/420/570/0. Skills: combat [COMB] 2 (90).
* Unit (1948), Gragblod (7), revealing faction, 3 high elves [HELF],
  151 silver [SILV]. Weight: 30. Capacity: 0/0/45/0. Skills: combat
  [COMB] 1 (30).
* Unit (1549), Gragblod (7), revealing faction, 103 silver [SILV],
  high elf [HELF]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
  [COMB] 1 (30).
- Unit (3332), on guard, Warlords Inc (19), leader [LEAD], horse
  [HORS], 5 winged horses [WING].
- Unit (3328), Warlords Inc (19), leader [LEAD], 6 horses [HORS].
- Unit (2542), Warlords Inc (19), 9 nomads [NOMA], 30 horses [HORS].
- Unit (2243), Warlords Inc (19), 36 nomads [NOMA].
- Unit (2411), Warlords Inc (19), leader [LEAD].
- Unit (3110), Warlords Inc (19), leader [LEAD].
- Unit (3173), Warlords Inc (19), leader [LEAD].
- Unit (3194), Warlords Inc (19), 10 nomads [NOMA].
- Unit (3272), Warlords Inc (19), 3 leaders [LEAD].
- Unit (3315), Warlords Inc (19), 10 leaders [LEAD].
- Unit (3471), Warlords Inc (19), 9 leaders [LEAD].
- Unit (3472), Warlords Inc (19), leader [LEAD].
- Unit (2495), Warlords Inc (19), leader [LEAD], horse [HORS].
- Unit (3330), Warlords Inc (19), leader [LEAD], horse [HORS].


plain (63,21) in Satiasam, 859 peasants (high elves), $5154.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $2748).
  Wanted: none.
  For Sale: 171 high elves [HELF] at $64, 34 leaders [LEAD] at $128.
  Entertainment available: $257.
  Products: 52 grain [GRAI], 34 horses [HORS].

Exits:
  North : plain (63,19) in Satiasam, contains Dun-krag [city].
  Northeast : plain (64,20) in Satiasam.
  Southeast : plain (64,22) in Satiasam.
  South : swamp (63,23) in Skelid.
  Southwest : plain (62,22) in Satiasam.
  Northwest : plain (62,20) in Satiasam, contains Oufodale [city].

* Unit (1662), Gragblod (7), revealing faction, 10 nomads [NOMA], 698
  silver [SILV], 9 horses [HORS]. Weight: 550. Capacity: 0/630/780/0.
  Skills: combat [COMB] 2 (90).
- Unit (2172), Warlords Inc (19), leader [LEAD], horse [HORS].
- Unit (2239), on guard, Warlords Inc (19), 32 high elves [HELF].
- Unit (2240), Warlords Inc (19), leader [LEAD], 30 horses [HORS].
- Unit (2326), Warlords Inc (19), leader [LEAD], 2 horses [HORS], 5
  winged horses [WING].
- Unit (2503), Warlords Inc (19), 9 high elves [HELF], 52 horses
  [HORS].
- Unit (2540), Warlords Inc (19), 9 high elves [HELF], 243 grain
  [GRAI].
- Unit (2662), Warlords Inc (19), 2 leaders [LEAD].
- Unit (3167), Warlords Inc (19), 10 leaders [LEAD].
- Unit (3168), Warlords Inc (19), 10 leaders [LEAD].
- Unit (3169), Warlords Inc (19), 10 leaders [LEAD].
- Unit (3187), Warlords Inc (19), 2 horses [HORS], 2 leaders [LEAD].
- Unit (3270), Warlords Inc (19), 10 high elves [HELF], 18 horses
  [HORS].
- Unit (2497), Warlords Inc (19), 2 leaders [LEAD], 2 horses [HORS].
- Unit (3473), Warlords Inc (19), 10 high elves [HELF].
* Unit (1394), Gragblod (7), revealing faction, nomad [NOMA], 182
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: none.
* Unit (191), Gragblod (7), revealing faction, nomad [NOMA], 339
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: none.
- Unit (3331), Warlords Inc (19), leader [LEAD], 11 horses [HORS].
- Unit (3453), Warlords Inc (19), 20 horses [HORS], 20 tribesmen
  [TMAN].
- Unit (2849), Warlords Inc (19), 8 leaders [LEAD], 19 horses [HORS],
  30 crossbows [XBOW].


plain (73,21) in Bocholt, 747 peasants (nomads), $4482.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $2390).
  Wanted: none.
  For Sale: 149 nomads [NOMA] at $64, 29 leaders [LEAD] at $128.
  Entertainment available: $224.
  Products: 72 grain [GRAI], 21 horses [HORS].

Exits:
  North : plain (73,19) in Bocholt, contains Ineault'y [city].
  Northeast : plain (74,20) in Bocholt.
  Southeast : jungle (74,22) in Donndinon.
  South : jungle (73,23) in Donndinon.
  Southwest : ocean (72,22) in Atlantis Ocean.
  Northwest : plain (72,20) in Bocholt.

* Unit (1904), Gragblod (7), revealing faction, 10 nomads [NOMA], 3043
  silver [SILV], grain [GRAI]. Weight: 105. Capacity: 0/0/150/0.
  Skills: combat [COMB] 2 (90).
* Unit (2734), Gragblod (7), revealing faction, 10160 silver [SILV],
  nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills: none.
* Unit (637), Gragblod (7), revealing faction, 6432 silver [SILV],
  nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills: none.
* Unit (1033), Gragblod (7), revealing faction, 2563 silver [SILV], 91
  nomads [NOMA], wood [WOOD], chain armor [CARM], 2 cashmere [CASH], 2
  grain [GRAI]. Weight: 936. Capacity: 0/0/1365/0. Skills: combat
  [COMB] 1 (30).


forest (58,22) in Nugyru, 365 peasants (vikings), $1095.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $949).
  Wanted: none.
  For Sale: 73 vikings [VIKI] at $52, 14 leaders [LEAD] at $104.
  Entertainment available: $54.
  Products: 31 grain [GRAI], 28 wood [WOOD], 16 furs [FUR], 10 herbs
    [HERB].

Exits:
  North : forest (58,20) in Nugyru.
  Northeast : forest (59,21) in Nugyru.
  Southeast : forest (59,23) in Nugyru.
  South : ocean (58,24) in Atlantis Ocean.
  Southwest : ocean (57,23) in Atlantis Ocean.
  Northwest : ocean (57,21) in Atlantis Ocean.

* Gasceius (1208), Gragblod (7), revealing faction, 77 vikings [VIKI],
  21505 silver [SILV], 3 rootstone [ROOT], double bow [DBOW]. Weight:
  921. Capacity: 0/0/1155/0. Skills: combat [COMB] 3 (180).
* Sonnius (1644), Gragblod (7), behind, revealing faction, 3164 silver
  [SILV], leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills:
  combat [COMB] 4 (420), tactics [TACT] 5 (450).
- Izluks (1996), Multiple Bite Wounds (10), avoiding, viking [VIKI].
* Unit (2056), Gragblod (7), revealing faction, 4060 silver [SILV],
  leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: observation
  [OBSE] 4 (360).


forest (60,22) in Nugyru, contains Soroldel [city], 5842 peasants
  (wood elves), $35052.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $18694).
  Wanted: 158 grain [GRAI] at $27, 160 livestock [LIVE] at $26, 74
    stone [STON] at $57, 51 swords [SWOR] at $126, 86 plate armor
    [PARM] at $554, 22 mithril [MITH] at $173, 21 ironwood [IRWD] at
    $170, 33 winged horses [WING] at $155, 20 mithril armor [MARM] at
    $911, 86 caviar [CAVI] at $131, 89 dye [DYE] at $132.
  For Sale: 96 furs [FUR] at $58, 64 wagons [WAGO] at $152, 94
    cashmere [CASH] at $83, 71 wool [WOOL] at $74, 1168 wood elves
    [WELF] at $64, 233 leaders [LEAD] at $128.
  Entertainment available: $1752.
  Products: 38 grain [GRAI], 32 wood [WOOD], 17 furs [FUR], 19 herbs
    [HERB].

Exits:
  North : plain (60,20) in Satiasam.
  Northeast : plain (61,21) in Satiasam.
  Southeast : plain (61,23) in Satiasam, contains Sul'em'uq [village].
  South : plain (60,24) in Satiasam, contains Mikedale [town].
  Southwest : forest (59,23) in Nugyru.
  Northwest : forest (59,21) in Nugyru.

* Justinia (1229), Gragblod (7), revealing faction, 3 wood elves
  [WELF], 30 silver [SILV]. Weight: 30. Capacity: 0/0/45/0. Skills:
  entertainment [ENTE] 1 (30).
- Izluks (1502), Multiple Bite Wounds (10), avoiding, behind, nomad
  [NOMA].
* Unit (1787), on guard, Gragblod (7), revealing faction, leader
  [LEAD], 955 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
  combat [COMB] 5 (450), stealth [STEA] 3 (180).
* Ilfius (1094), Gragblod (7), revealing faction, 1018 high elves
  [HELF], 43733 silver [SILV], 8 mithril swords [MSWO], 6 mithril
  armor [MARM]. Weight: 10194. Capacity: 0/0/15270/0. Skills: combat
  [COMB] 2 (90).
* Cnician (1179), Gragblod (7), revealing faction, 3 tribesmen [TMAN],
  31 rootstone [ROOT], 10 double bows [DBOW], 3 chocolate [CHOC], 5
  figurines [FIGU], 14 floater hides [FLOA], herb [HERB], 30 ironwood
  [IRWD], 2 jewelry [JEWE], 4 livestock [LIVE], 10 mithril [MITH],
  stone [STON], 4 velvet [VELV], vodka [VODK], 2 wagons [WAGO], 2 wood
  [WOOD], 10 yew [YEW], winged horse [WING], 103 silver [SILV].
  Weight: 2511. Capacity: 70/70/315/0. Skills: combat [COMB] 2 (90).
* Unit (278), Gragblod (7), revealing faction, 100 leaders [LEAD],
  1834 silver [SILV], 89 horses [HORS]. Weight: 5450. Capacity:
  0/6230/7730/0. Skills: combat [COMB] 5 (450), longbow [LBOW] 3
  (210).
* Unit (281), Gragblod (7), revealing faction, 100 leaders [LEAD],
  1910 silver [SILV], 89 horses [HORS], mithril armor [MARM]. Weight:
  5451. Capacity: 0/6230/7730/0. Skills: combat [COMB] 5 (450),
  crossbow [XBOW] 2 (120).
* Unit (2504), Gragblod (7), revealing faction, 90 silver [SILV], 10
  leaders [LEAD], winged horse [WING]. Weight: 150. Capacity:
  70/70/220/0. Skills: combat [COMB] 3 (180), longbow [LBOW] 3 (240),
  stealth [STEA] 1 (30).
* Unit (2188), Gragblod (7), revealing faction, 600 silver [SILV],
  leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: observation
  [OBSE] 4 (330).
* Unit (1670), Gragblod (7), revealing faction, 376 silver [SILV],
  leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: tactics
  [TACT] 3 (270).
- Unit (3326), Warlords Inc (19), 2 leaders [LEAD], horse [HORS], 21
  yew [YEW].
- Unit (2776), Warlords Inc (19), 2 leaders [LEAD], 20 horses [HORS].
- Unit (2063), Warlords Inc (19), behind, 2 tribal elves [TELF], 2
  horses [HORS].


plain (62,22) in Satiasam, 718 peasants (high elves), $4308.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $2297).
  Wanted: none.
  For Sale: 143 high elves [HELF] at $64, 28 leaders [LEAD] at $128.
  Entertainment available: $215.
  Products: 59 grain [GRAI], 30 horses [HORS].

Exits:
  North : plain (62,20) in Satiasam, contains Oufodale [city].
  Northeast : plain (63,21) in Satiasam.
  Southeast : swamp (63,23) in Skelid.
  South : plain (62,24) in Satiasam.
  Southwest : plain (61,23) in Satiasam, contains Sul'em'uq [village].
  Northwest : plain (61,21) in Satiasam.

* Unit (1821), Gragblod (7), revealing faction, 10 sea elves [SELF],
  sword [SWOR], 600 silver [SILV]. Weight: 101. Capacity: 0/0/150/0.
  Skills: combat [COMB] 2 (90).
* Unit (2204), on guard, Gragblod (7), revealing faction, 100 high
  elves [HELF], 6000 silver [SILV]. Weight: 1000. Capacity:
  0/0/1500/0. Skills: combat [COMB] 1 (30).
* Unit (1943), Gragblod (7), revealing faction, 788 silver [SILV], 10
  high elves [HELF]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 1 (30).
- Grey Scout (2943), Grey Wind (17), avoiding, behind, viking [VIKI].


plain (64,22) in Satiasam, 693 peasants (nomads), $2772.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $1940).
  Wanted: none.
  For Sale: 138 nomads [NOMA] at $56, 27 leaders [LEAD] at $112.
  Entertainment available: $138.
  Products: 79 livestock [LIVE], 37 horses [HORS].

Exits:
  North : plain (64,20) in Satiasam.
  Northeast : ocean (65,21) in Atlantis Ocean.
  Southeast : swamp (65,23) in Skelid, contains W'tiaenth [city].
  South : swamp (64,24) in Skelid.
  Southwest : swamp (63,23) in Skelid.
  Northwest : plain (63,21) in Satiasam.

* Rumituris (1382), Gragblod (7), revealing faction, tribesman [TMAN],
  384 silver [SILV], 10 sea elves [SELF]. Weight: 110. Capacity:
  0/0/165/0. Skills: combat [COMB] 1 (60).
- Unit (3447), Warlords Inc (19), 67 nomads [NOMA].
- Unit (3448), Warlords Inc (19), 5 leaders [LEAD].
- Unit (3449), Warlords Inc (19), 5 leaders [LEAD].
- Unit (3104), Warlords Inc (19), 2 leaders [LEAD], 2 horses [HORS].

+ Ruin [1] : Ruin, closed to player units.


jungle (74,22) in Donndinon, 126 peasants (sea elves), $126.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $11 (Max: $277).
  Wanted: none.
  For Sale: 25 sea elves [SELF] at $44, 5 leaders [LEAD] at $88.
  Entertainment available: $6.
  Products: 23 livestock [LIVE], 11 wood [WOOD], 38 herbs [HERB].

Exits:
  North : plain (74,20) in Bocholt.
  Northeast : ocean (75,21) in Atlantis Ocean.
  Southeast : ocean (75,23) in Atlantis Ocean.
  South : jungle (74,24) in Donndinon.
  Southwest : jungle (73,23) in Donndinon.
  Northwest : plain (73,21) in Bocholt.

* Unit (1415), Gragblod (7), revealing faction, 52 silver [SILV],
  nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (1233), Gragblod (7), avoiding, revealing faction, holding,
  receiving no aid, 130391 silver [SILV], 5 horses [HORS], nomad
  [NOMA]. Weight: 260. Capacity: 0/350/365/0. Skills: stealth [STEA] 1
  (30).


forest (59,23) in Nugyru, 330 peasants (wood elves), $1320.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $924).
  Wanted: none.
  For Sale: 66 wood elves [WELF] at $56, 13 leaders [LEAD] at $112.
  Entertainment available: $66.
  Products: 30 livestock [LIVE], 31 wood [WOOD], 15 furs [FUR], 17
    herbs [HERB].

Exits:
  North : forest (59,21) in Nugyru.
  Northeast : forest (60,22) in Nugyru, contains Soroldel [city].
  Southeast : plain (60,24) in Satiasam, contains Mikedale [town].
  South : forest (59,25) in Nugyru.
  Southwest : ocean (58,24) in Atlantis Ocean.
  Northwest : forest (58,22) in Nugyru.

* Unit (1643), Gragblod (7), revealing faction, 119 silver [SILV],
  viking [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).

+ Lair [1] : Lair, closed to player units.


plain (61,23) in Satiasam, contains Sul'em'uq [village], 1356 peasants
  (nomads), $8136.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $4339).
  Wanted: 144 grain [GRAI] at $18, 87 livestock [LIVE] at $24, 11
    stone [STON] at $50.
  For Sale: 271 nomads [NOMA] at $64, 54 leaders [LEAD] at $128.
  Entertainment available: $406.
  Products: 50 grain [GRAI], 34 horses [HORS].

Exits:
  North : plain (61,21) in Satiasam.
  Northeast : plain (62,22) in Satiasam.
  Southeast : plain (62,24) in Satiasam.
  South : swamp (61,25) in Skelid.
  Southwest : plain (60,24) in Satiasam, contains Mikedale [town].
  Northwest : forest (60,22) in Nugyru, contains Soroldel [city].

* Synisnius (1142), Gragblod (7), behind, revealing faction, holding,
  6 nomads [NOMA], 602 silver [SILV]. Weight: 60. Capacity: 0/0/90/0.
  Skills: entertainment [ENTE] 1 (30).
- Sargs (1247), Multiple Bite Wounds (10), behind, tribal elf [TELF].
* Jucucolius (352), on guard, Gragblod (7), revealing faction, 379 sea
  elves [SELF], 131529 silver [SILV], 23 swords [SWOR]. Weight: 3813.
  Capacity: 0/0/5685/0. Skills: combat [COMB] 2 (90).
* Pallitis (1193), Gragblod (7), revealing faction, leader [LEAD],
  2816 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
  [COMB] 1 (60), tactics [TACT] 5 (450), observation [OBSE] 4 (360).
* Unit (1723), Gragblod (7), revealing faction, 30 vikings [VIKI],
  2350 silver [SILV], 30 swords [SWOR]. Weight: 330. Capacity:
  0/0/450/0. Skills: combat [COMB] 3 (180).
* Atratian (1240), Gragblod (7), behind, revealing faction, nomad
  [NOMA], 2 horses [HORS], 102859 silver [SILV]. Weight: 110.
  Capacity: 0/140/155/0. Skills: entertainment [ENTE] 1 (30).


swamp (63,23) in Skelid, 164 peasants (tribesmen), $328.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $393).
  Wanted: none.
  For Sale: 32 tribesmen [TMAN] at $48, 6 leaders [LEAD] at $96.
  Entertainment available: $16.
  Products: 10 grain [GRAI], 10 wood [WOOD], 17 herbs [HERB].

Exits:
  North : plain (63,21) in Satiasam.
  Northeast : plain (64,22) in Satiasam.
  Southeast : swamp (64,24) in Skelid.
  South : swamp (63,25) in Skelid.
  Southwest : plain (62,24) in Satiasam.
  Northwest : plain (62,22) in Satiasam.

* Unit (2280), Gragblod (7), revealing faction, 32 tribesmen [TMAN].
  Weight: 320. Capacity: 0/0/480/0. Skills: combat [COMB] 1 (30).


swamp (65,23) in Skelid, contains W'tiaenth [city], 3884 peasants
  (tribesmen), $19420.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $15 (Max: $11652).
  Wanted: 110 grain [GRAI] at $27, 190 livestock [LIVE] at $18, 170
    fish [FISH] at $29, 83 swords [SWOR] at $123, 55 chain armor
    [CARM] at $92, 76 wagons [WAGO] at $204, 76 figurines [FIGU] at
    $165, 56 chocolate [CHOC] at $141.
  For Sale: 61 wood [WOOD] at $54, 64 herbs [HERB] at $59, 79 velvet
    [VELV] at $66, 75 mink [MINK] at $70, 776 tribesmen [TMAN] at $60,
    155 leaders [LEAD] at $120.
  Entertainment available: $971.
  Products: 11 grain [GRAI], 18 wood [WOOD], 16 herbs [HERB].

Exits:
  North : ocean (65,21) in Atlantis Ocean.
  Northeast : ocean (66,22) in Atlantis Ocean.
  Southeast : jungle (66,24) in Sefitat.
  South : swamp (65,25) in Skelid.
  Southwest : swamp (64,24) in Skelid.
  Northwest : plain (64,22) in Satiasam.

- Izluks (1374), Multiple Bite Wounds (10), tribesman [TMAN].
* Trupsilius (584), Gragblod (7), revealing faction, holding, 8
  tribesmen [TMAN], 80 silver [SILV]. Weight: 80. Capacity: 0/0/120/0.
  Skills: entertainment [ENTE] 1 (30).
* Unit (299), Gragblod (7), revealing faction, holding, 5 tribesmen
  [TMAN], 5 dye [DYE], 12 livestock [LIVE], wagon [WAGO], 5 wood
  [WOOD], 3 figurines [FIGU], stone [STON], tarot cards [TARO], 50
  silver [SILV]. Weight: 804. Capacity: 0/0/675/0. Skills:
  entertainment [ENTE] 1 (30).
* Unit (925), on guard, Gragblod (7), revealing faction, 4420 silver
  [SILV], 100 leaders [LEAD], 4 floater hides [FLOA], sword [SWOR].
  Weight: 1005. Capacity: 0/0/1500/0. Skills: combat [COMB] 4 (390).
* Unit (972), on guard, Gragblod (7), revealing faction, 100 tribesmen
  [TMAN], sword [SWOR], 5355 silver [SILV]. Weight: 1001. Capacity:
  0/0/1500/0. Skills: combat [COMB] 1 (30).
* Unit (976), on guard, Gragblod (7), revealing faction, 100 tribesmen
  [TMAN], 4 floater hides [FLOA], 5355 silver [SILV]. Weight: 1004.
  Capacity: 0/0/1500/0. Skills: combat [COMB] 1 (30).
* Unit (1982), Gragblod (7), revealing faction, 100 tribesmen [TMAN],
  2 floater hides [FLOA], 5355 silver [SILV]. Weight: 1002. Capacity:
  0/0/1500/0. Skills: combat [COMB] 1 (30).
* Unit (2263), Gragblod (7), revealing faction, leader [LEAD], 2146
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: observation
  [OBSE] 4 (330).
* Unit (1993), Gragblod (7), revealing faction, leader [LEAD], 1397
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: tactics
  [TACT] 3 (270).
- Workers (3142), Grey Wind (17), avoiding, behind, tribesman [TMAN].
- Unit (3171), Warlords Inc (19), 3 horses [HORS], 2 nomads [NOMA].


forest (56,24) in Mallaig, contains Sorthandon [city], 2934 peasants
  (vikings), $17604.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $9388).
  Wanted: 158 grain [GRAI] at $24, 162 livestock [LIVE] at $29, 188
    fish [FISH] at $18, 56 chain armor [CARM] at $96, 45 plate armor
    [PARM] at $486, 32 jewelry [JEWE] at $162, 16 cashmere [CASH] at
    $149.
  For Sale: 35 wood [WOOD] at $56, 34 furs [FUR] at $45, 38 herbs
    [HERB] at $56, 23 truffles [TRUF] at $72, 9 mink [MINK] at $68,
    586 vikings [VIKI] at $64, 117 leaders [LEAD] at $128.
  Entertainment available: $880.
  Products: 28 grain [GRAI], 36 wood [WOOD], 15 furs [FUR], 15 herbs
    [HERB].

Exits:
  North : ocean (56,22) in Atlantis Ocean.
  Northeast : ocean (57,23) in Atlantis Ocean.
  Southeast : ocean (57,25) in Atlantis Ocean.
  South : desert (56,26) in Baifelgris.
  Southwest : forest (55,25) in Mallaig.
  Northwest : forest (55,23) in Mallaig.

- City Guard (48), on guard, 120 leaders [LEAD], 120 swords [SWOR].
- Izluks (1658), viking [VIKI], mink [MINK].
* Unit (588), Gragblod (7), behind, revealing faction, holding, 3344
  silver [SILV], 16 vikings [VIKI]. Weight: 160. Capacity: 0/0/240/0.
  Skills: entertainment [ENTE] 1 (30).
* Appunia (1195), Gragblod (7), behind, revealing faction, holding,
  sea elf [SELF], 186 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: entertainment [ENTE] 1 (30).


plain (60,24) in Satiasam, contains Mikedale [town], 2258 peasants
  (nomads), $13548.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $7225).
  Wanted: 134 grain [GRAI] at $24, 161 livestock [LIVE] at $21, 17
    iron [IRON] at $60, 17 wood [WOOD] at $48, 16 stone [STON] at $60,
    11 furs [FUR] at $54, caviar [CAVI] at $161.
  For Sale: 25 horses [HORS] at $65, 8 plate armor [PARM] at $466, 451
    nomads [NOMA] at $64, 90 leaders [LEAD] at $128.
  Entertainment available: $677.
  Products: 53 livestock [LIVE], 26 horses [HORS].

Exits:
  North : forest (60,22) in Nugyru, contains Soroldel [city].
  Northeast : plain (61,23) in Satiasam, contains Sul'em'uq [village].
  Southeast : swamp (61,25) in Skelid.
  South : forest (60,26) in Nugyru.
  Southwest : forest (59,25) in Nugyru.
  Northwest : forest (59,23) in Nugyru.

- Sargs (1248), Multiple Bite Wounds (10), nomad [NOMA].
* Unit (1878), on guard, Gragblod (7), revealing faction, leader
  [LEAD], 19 horses [HORS], longbow [LBOW]. Weight: 961. Capacity:
  0/1330/1345/0. Skills: combat [COMB] 5 (450), longbow [LBOW] 3
  (240).
* Lipius (1149), Gragblod (7), behind, revealing faction, leader
  [LEAD], horse [HORS], sword [SWOR], 44 silver [SILV]. Weight: 61.
  Capacity: 0/70/85/0. Skills: combat [COMB] 1 (30), tactics [TACT] 5
  (450), observation [OBSE] 5 (450), stealth [STEA] 1 (30).
* Hatunius (1287), Gragblod (7), revealing faction, 100 leaders
  [LEAD], winged horse [WING]. Weight: 1050. Capacity: 70/70/1570/0.
  Skills: combat [COMB] 3 (210), riding [RIDI] 4 (330), longbow [LBOW]
  5 (450), stealth [STEA] 1 (60).
* Octetius (1378), Gragblod (7), revealing faction, 100 leaders
  [LEAD], 986 silver [SILV]. Weight: 1000. Capacity: 0/0/1500/0.
  Skills: combat [COMB] 3 (180), crossbow [XBOW] 3 (180), stealth
  [STEA] 3 (210), riding [RIDI] 4 (360).
* Marens (1385), Gragblod (7), revealing faction, 10 leaders [LEAD],
  360 silver [SILV], 10 horses [HORS]. Weight: 600. Capacity:
  0/700/850/0. Skills: combat [COMB] 5 (450), crossbow [XBOW] 1 (60).
* Safurnius (1290), Gragblod (7), revealing faction, 10 leaders
  [LEAD], 414 silver [SILV], 10 horses [HORS], 2 double bows [DBOW].
  Weight: 602. Capacity: 0/700/850/0. Skills: combat [COMB] 1 (30),
  longbow [LBOW] 5 (450), crossbow [XBOW] 1 (30), observation [OBSE] 1
  (60).
* Sylius (1391), Gragblod (7), revealing faction, 10 leaders [LEAD],
  10 horses [HORS], 98 silver [SILV]. Weight: 600. Capacity:
  0/700/850/0. Skills: combat [COMB] 2 (150), stealth [STEA] 5 (450).
* Unit (1154), Gragblod (7), revealing faction, 200 nomads [NOMA],
  8477 silver [SILV], 200 horses [HORS], 4 swords [SWOR], 88 plate
  armor [PARM]. Weight: 12268. Capacity: 0/14000/17000/0. Skills:
  combat [COMB] 2 (90).
* Dimius (1057), on guard, Gragblod (7), revealing faction, tribal elf
  [TELF], 30 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
  combat [COMB] 2 (90).
* Unit (616), Gragblod (7), revealing faction, 250 vikings [VIKI], 250
  horses [HORS], 7767 silver [SILV], 8 swords [SWOR], mithril sword
  [MSWO]. Weight: 15009. Capacity: 0/17500/21250/0. Skills: combat
  [COMB] 3 (180).
* Unit (2279), Gragblod (7), revealing faction, leader [LEAD], 351
  silver [SILV], horse [HORS]. Weight: 60. Capacity: 0/70/85/0.
  Skills: observation [OBSE] 4 (300).
* Matacius (1189), Gragblod (7), revealing faction, plainsman [PLAI],
  33 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: longbow
  [LBOW] 2 (90).
* Unit (586), Gragblod (7), behind, revealing faction, nomad [NOMA],
  21 silver [SILV], 6 rootstone [ROOT], 4 yew [YEW], 7 mithril [MITH].
  Weight: 400. Capacity: 0/0/15/0. Skills: entertainment [ENTE] 1
  (30).


plain (62,24) in Satiasam, 597 peasants (plainsmen), $3582.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $1910).
  Wanted: none.
  For Sale: 119 plainsmen [PLAI] at $64, 23 leaders [LEAD] at $128.
  Entertainment available: $179.
  Products: 76 grain [GRAI], 36 horses [HORS].

Exits:
  North : plain (62,22) in Satiasam.
  Northeast : swamp (63,23) in Skelid.
  Southeast : swamp (63,25) in Skelid.
  South : swamp (62,26) in Skelid.
  Southwest : swamp (61,25) in Skelid.
  Northwest : plain (61,23) in Satiasam, contains Sul'em'uq [village].

* Unit (1800), on guard, Gragblod (7), revealing faction, 119
  plainsmen [PLAI], 714 silver [SILV]. Weight: 1190. Capacity:
  0/0/1785/0. Skills: combat [COMB] 1 (30).


swamp (64,24) in Skelid, 143 peasants (tribal elves), $429.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $371).
  Wanted: none.
  For Sale: 28 tribal elves [TELF] at $52, 5 leaders [LEAD] at $104.
  Entertainment available: $21.
  Products: 10 grain [GRAI], 15 wood [WOOD], 18 herbs [HERB].

Exits:
  North : plain (64,22) in Satiasam.
  Northeast : swamp (65,23) in Skelid, contains W'tiaenth [city].
  Southeast : swamp (65,25) in Skelid.
  South : swamp (64,26) in Skelid.
  Southwest : swamp (63,25) in Skelid.
  Northwest : swamp (63,23) in Skelid.

* Hollius (1314), Gragblod (7), avoiding, revealing faction, receiving
  no aid, tribesman [TMAN], 36 silver [SILV]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).
* Unit (599), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 3 tribal elves [TELF], 9 silver [SILV]. Weight: 30. Capacity:
  0/0/45/0. Skills: combat [COMB] 1 (30).


jungle (66,24) in Sefitat, 107 peasants (tribesmen), $321.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $278).
  Wanted: none.
  For Sale: 21 tribesmen [TMAN] at $52, 4 leaders [LEAD] at $104.
  Entertainment available: $16.
  Products: 21 grain [GRAI], 10 wood [WOOD], 33 herbs [HERB].

Exits:
  North : ocean (66,22) in Atlantis Ocean.
  Northeast : jungle (67,23) in Sefitat.
  Southeast : jungle (67,25) in Sefitat.
  South : jungle (66,26) in Sefitat.
  Southwest : swamp (65,25) in Skelid.
  Northwest : swamp (65,23) in Skelid, contains W'tiaenth [city].

* Hotulius (1156), Gragblod (7), revealing faction, 5 tribal elves
  [TELF], floater hide [FLOA], 15 silver [SILV]. Weight: 51. Capacity:
  0/0/75/0. Skills: combat [COMB] 1 (30).
* Unit (615), on guard, Gragblod (7), revealing faction, 14 tribesmen
  [TMAN], 42 silver [SILV]. Weight: 140. Capacity: 0/0/210/0. Skills:
  combat [COMB] 1 (30).
* Unit (2788), Gragblod (7), avoiding, revealing faction, 389 silver
  [SILV], leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills:
  observation [OBSE] 4 (360).
- Malus (1083), Warlords Inc (19), high elf [HELF], 10 horses [HORS].


jungle (74,24) in Donndinon, 193 peasants (tribal elves), $386.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $463).
  Wanted: none.
  For Sale: 38 tribal elves [TELF] at $48, 7 leaders [LEAD] at $96.
  Entertainment available: $19.
  Products: 38 grain [GRAI], 16 wood [WOOD], 21 herbs [HERB].

Exits:
  North : jungle (74,22) in Donndinon.
  Northeast : ocean (75,23) in Atlantis Ocean.
  Southeast : ocean (75,25) in Atlantis Ocean.
  South : jungle (74,26) in Donndinon.
  Southwest : jungle (73,25) in Donndinon.
  Northwest : jungle (73,23) in Donndinon.

* Unit (1010), Gragblod (7), revealing faction, 68 silver [SILV],
  tribal elf [TELF]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
  [COMB] 1 (30).


forest (59,25) in Nugyru, 259 peasants (vikings), $518.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $621).
  Wanted: none.
  For Sale: 51 vikings [VIKI] at $48, 10 leaders [LEAD] at $96.
  Entertainment available: $25.
  Products: 28 grain [GRAI], 31 wood [WOOD], 11 furs [FUR], 18 herbs
    [HERB].

Exits:
  North : forest (59,23) in Nugyru.
  Northeast : plain (60,24) in Satiasam, contains Mikedale [town].
  Southeast : forest (60,26) in Nugyru.
  South : forest (59,27) in Nugyru.
  Southwest : ocean (58,26) in Atlantis Ocean.
  Northwest : ocean (58,24) in Atlantis Ocean.

* Graenia (1139), Gragblod (7), revealing faction, holding, receiving
  no aid, 2 vikings [VIKI], 54 silver [SILV]. Weight: 20. Capacity:
  0/0/30/0. Skills: combat [COMB] 1 (30).
* Unit (1065), Gragblod (7), behind, revealing faction, nomad [NOMA],
  36027 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
  entertainment [ENTE] 1 (30).
* Unit (1805), Gragblod (7), behind, revealing faction, 1143 silver
  [SILV], 50 vikings [VIKI], rootstone [ROOT]. Weight: 550. Capacity:
  0/0/750/0. Skills: combat [COMB] 1 (30).


swamp (61,25) in Skelid, 137 peasants (tribesmen), $137.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $11 (Max: $301).
  Wanted: none.
  For Sale: 27 tribesmen [TMAN] at $44, 5 leaders [LEAD] at $88.
  Entertainment available: $6.
  Products: 14 grain [GRAI], 13 wood [WOOD], 19 herbs [HERB].

Exits:
  North : plain (61,23) in Satiasam, contains Sul'em'uq [village].
  Northeast : plain (62,24) in Satiasam.
  Southeast : swamp (62,26) in Skelid.
  South : swamp (61,27) in Skelid.
  Southwest : forest (60,26) in Nugyru.
  Northwest : plain (60,24) in Satiasam, contains Mikedale [town].

* Unit (1869), on guard, Gragblod (7), revealing faction, 27 tribesmen
  [TMAN], 162 silver [SILV]. Weight: 270. Capacity: 0/0/405/0. Skills:
  combat [COMB] 1 (30).


swamp (63,25) in Skelid, 127 peasants (tribal elves), $127.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $11 (Max: $279).
  Wanted: none.
  For Sale: 25 tribal elves [TELF] at $44, 5 leaders [LEAD] at $88.
  Entertainment available: $6.
  Products: 16 grain [GRAI], 12 wood [WOOD], 12 herbs [HERB].

Exits:
  North : swamp (63,23) in Skelid.
  Northeast : swamp (64,24) in Skelid.
  Southeast : swamp (64,26) in Skelid.
  South : swamp (63,27) in Skelid.
  Southwest : swamp (62,26) in Skelid.
  Northwest : plain (62,24) in Satiasam.

* Unit (2858), Gragblod (7), revealing faction, 29472 silver [SILV],
  horse [HORS], high elf [HELF]. Weight: 60. Capacity: 0/70/85/0.
  Skills: stealth [STEA] 1 (30).


swamp (65,25) in Skelid, 135 peasants (tribesmen), $270.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $324).
  Wanted: none.
  For Sale: 27 tribesmen [TMAN] at $48, 5 leaders [LEAD] at $96.
  Entertainment available: $13.
  Products: 13 grain [GRAI], 18 wood [WOOD], 19 herbs [HERB].

Exits:
  North : swamp (65,23) in Skelid, contains W'tiaenth [city].
  Northeast : jungle (66,24) in Sefitat.
  Southeast : jungle (66,26) in Sefitat.
  South : swamp (65,27) in Skelid.
  Southwest : swamp (64,26) in Skelid.
  Northwest : swamp (64,24) in Skelid.

* Unit (2741), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 37 silver [SILV], tribal elf [TELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: none.


jungle (67,25) in Sefitat, 176 peasants (tribal elves), $176.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $11 (Max: $387).
  Wanted: none.
  For Sale: 35 tribal elves [TELF] at $44, 7 leaders [LEAD] at $88.
  Entertainment available: $8.
  Products: 31 livestock [LIVE], 13 wood [WOOD], 32 herbs [HERB].

Exits:
  North : jungle (67,23) in Sefitat.
  Northeast : ocean (68,24) in Atlantis Ocean.
  Southeast : mountain (68,26) in Phidyntia, contains Oroldu [city].
  South : jungle (67,27) in Sefitat.
  Southwest : jungle (66,26) in Sefitat.
  Northwest : jungle (66,24) in Sefitat.

* Vermulius (1173), on guard, Gragblod (7), revealing faction, leader
  [LEAD], 2533 silver [SILV], mithril sword [MSWO], horse [HORS].
  Weight: 61. Capacity: 0/70/85/0. Skills: observation [OBSE] 5 (450),
  combat [COMB] 5 (450), riding [RIDI] 4 (390), stealth [STEA] 2
  (150).
* Unit (1200), Gragblod (7), revealing faction, nomad [NOMA], 94282
  silver [SILV], 2 horses [HORS]. Weight: 110. Capacity: 0/140/155/0.
  Skills: entertainment [ENTE] 1 (30).


jungle (73,25) in Donndinon, 193 peasants (tribal elves), $193.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $11 (Max: $424).
  Wanted: none.
  For Sale: 38 tribal elves [TELF] at $44, 7 leaders [LEAD] at $88.
  Entertainment available: $9.
  Products: 20 grain [GRAI], 17 wood [WOOD], 33 herbs [HERB].

Exits:
  North : jungle (73,23) in Donndinon.
  Northeast : jungle (74,24) in Donndinon.
  Southeast : jungle (74,26) in Donndinon.
  South : jungle (73,27) in Donndinon.
  Southwest : jungle (72,26) in Donndinon, contains Thor-a-thol
    [city].
  Northwest : jungle (72,24) in Donndinon.

* Unit (1427), Gragblod (7), revealing faction, holding, receiving no
  aid, tribal elf [TELF], 23 silver [SILV]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


forest (60,26) in Nugyru, 293 peasants (wood elves), $586.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $703).
  Wanted: none.
  For Sale: 58 wood elves [WELF] at $48, 11 leaders [LEAD] at $96.
  Entertainment available: $29.
  Products: 35 livestock [LIVE], 26 wood [WOOD], 17 furs [FUR], 19
    herbs [HERB].

Exits:
  North : plain (60,24) in Satiasam, contains Mikedale [town].
  Northeast : swamp (61,25) in Skelid.
  Southeast : swamp (61,27) in Skelid.
  South : plain (60,28) in Erisort.
  Southwest : forest (59,27) in Nugyru.
  Northwest : forest (59,25) in Nugyru.

* Unit (1989), on guard, Gragblod (7), behind, revealing faction, 43
  vikings [VIKI], 946 silver [SILV]. Weight: 430. Capacity: 0/0/645/0.
  Skills: combat [COMB] 1 (30).
- Grey Scout (2942), Grey Wind (17), avoiding, behind, viking [VIKI].


swamp (62,26) in Skelid, 143 peasants (tribal elves), $286.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $343).
  Wanted: none.
  For Sale: 28 tribal elves [TELF] at $48, 5 leaders [LEAD] at $96.
  Entertainment available: $14.
  Products: 14 grain [GRAI], 11 wood [WOOD], 14 herbs [HERB].

Exits:
  North : plain (62,24) in Satiasam.
  Northeast : swamp (63,25) in Skelid.
  Southeast : swamp (63,27) in Skelid.
  South : swamp (62,28) in Skelid.
  Southwest : swamp (61,27) in Skelid.
  Northwest : swamp (61,25) in Skelid.

* Unit (1249), on guard, Gragblod (7), revealing faction, 208 silver
  [SILV], 28 tribal elves [TELF]. Weight: 280. Capacity: 0/0/420/0.
  Skills: combat [COMB] 1 (30).


swamp (64,26) in Skelid, 121 peasants (tribesmen), $242.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $290).
  Wanted: none.
  For Sale: 24 tribesmen [TMAN] at $48, 4 leaders [LEAD] at $96.
  Entertainment available: $12.
  Products: 16 grain [GRAI], 18 wood [WOOD], 11 herbs [HERB].

Exits:
  North : swamp (64,24) in Skelid.
  Northeast : swamp (65,25) in Skelid.
  Southeast : swamp (65,27) in Skelid.
  South : ocean (64,28) in Atlantis Ocean.
  Southwest : swamp (63,27) in Skelid.
  Northwest : swamp (63,25) in Skelid.

- Izluks (1274), Multiple Bite Wounds (10), avoiding, behind,
  tribesman [TMAN].
* Alvius (1138), Gragblod (7), avoiding, revealing faction, receiving
  no aid, sea elf [SELF], 24 silver [SILV]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).
* Unit (2812), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 24 silver [SILV], tribesman [TMAN]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


jungle (66,26) in Sefitat, 117 peasants (tribal elves), $117.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $11 (Max: $257).
  Wanted: none.
  For Sale: 23 tribal elves [TELF] at $44, 4 leaders [LEAD] at $88.
  Entertainment available: $5.
  Products: 28 livestock [LIVE], 14 wood [WOOD], 38 herbs [HERB].

Exits:
  North : jungle (66,24) in Sefitat.
  Northeast : jungle (67,25) in Sefitat.
  Southeast : jungle (67,27) in Sefitat.
  South : jungle (66,28) in Sefitat.
  Southwest : swamp (65,27) in Skelid.
  Northwest : swamp (65,25) in Skelid.

* Mulatius (1104), on guard, Gragblod (7), revealing faction,
  receiving no aid, tribesman [TMAN], stone [STON], 6 silver [SILV].
  Weight: 60. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
- Izluks (1357), Multiple Bite Wounds (10), tribal elf [TELF].
* Unit (1100), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 20 tribal elves [TELF], 132 silver [SILV]. Weight: 200.
  Capacity: 0/0/300/0. Skills: combat [COMB] 1 (30).
* Rusoccus (1119), Gragblod (7), behind, revealing faction, leader
  [LEAD], 10010 silver [SILV], horse [HORS]. Weight: 60. Capacity:
  0/70/85/0. Skills: observation [OBSE] 5 (450), stealth [STEA] 5
  (450), tactics [TACT] 5 (450), armorer [ARMO] 4 (300).


mountain (68,26) in Phidyntia, contains Oroldu [city], 5208 peasants
  (vikings), $41664.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $18 (Max: $93744).
  Wanted: none.
  For Sale: unlimited iron [IRON] at $75, unlimited wood [WOOD] at
    $75, unlimited stone [STON] at $75, unlimited furs [FUR] at $75,
    unlimited herbs [HERB] at $75, unlimited horses [HORS] at $75,
    unlimited swords [SWOR] at $150, unlimited crossbows [XBOW] at
    $150, unlimited longbows [LBOW] at $150, unlimited chain armor
    [CARM] at $150, unlimited plate armor [PARM] at $625, unlimited
    wagons [WAGO] at $250, unlimited vikings [VIKI] at $68, unlimited
    leaders [LEAD] at $136.
  Entertainment available: $2083.
  Products: 40 grain [GRAI], 31 iron [IRON], 14 stone [STON].

Exits:
  North : ocean (68,24) in Atlantis Ocean.
  Northeast : ocean (69,25) in Atlantis Ocean.
  Southeast : mountain (69,27) in Phidyntia.
  South : jungle (68,28) in Sefitat.
  Southwest : jungle (67,27) in Sefitat.
  Northwest : jungle (67,25) in Sefitat.

- City Guard (52), on guard, The Guardsmen (1), 120 leaders [LEAD],
  120 swords [SWOR].
* Sitenius (1038), Gragblod (7), behind, revealing faction, 112
  vikings [VIKI], 792 silver [SILV]. Weight: 1120. Capacity:
  0/0/1680/0. Skills: entertainment [ENTE] 1 (30).
* Jartinnus (1041), Gragblod (7), avoiding, behind, revealing faction,
  holding, leader [LEAD], horse [HORS]. Weight: 60. Capacity:
  0/70/85/0. Skills: combat [COMB] 5 (450), observation [OBSE] 2 (90),
  lumberjack [LUMB] 1 (60), sailing [SAIL] 1 (30), building [BUIL] 5
  (450), stealth [STEA] 3 (210), shipbuilding [SHIP] 5 (450).
- Oroldu stradnieks (1188), Multiple Bite Wounds (10), 81 vikings
  [VIKI].
* Gralus (1671), Gragblod (7), behind, revealing faction, 18 tribal
  elves [TELF], 18 longbows [LBOW], 18 horses [HORS], 144 silver
  [SILV]. Weight: 1098. Capacity: 0/1260/1530/0. Skills: longbow
  [LBOW] 3 (180).
- Grey Ambassador (1840), Grey Wind (17), avoiding, behind, leader
  [LEAD].
- Thor (1861), New Horizons (16), avoiding, behind, 9 leaders [LEAD].
- Harpers (1863), Grey Wind (17), avoiding, behind, 5 vikings [VIKI].
- Workers (2080), Grey Wind (17), avoiding, behind, 120 vikings
  [VIKI].
- Scout (2223), Sol Invictus (20), avoiding, behind, 6 vikings [VIKI].
- Thor (2217), New Horizons (16), avoiding, behind, leader [LEAD].
- Armo Guy (2526), New Horizons (16), avoiding, behind, leader [LEAD].
* Unit (661), Gragblod (7), behind, revealing faction, 30 vikings
  [VIKI], 30 crossbows [XBOW], 30 horses [HORS], 240 silver [SILV].
  Weight: 1830. Capacity: 0/2100/2550/0. Skills: crossbow [XBOW] 2
  (90).
* Unit (871), Gragblod (7), behind, revealing faction, 30 tribal elves
  [TELF], 30 longbows [LBOW], 30 horses [HORS], 240 silver [SILV].
  Weight: 1830. Capacity: 0/2100/2550/0. Skills: longbow [LBOW] 3
  (180).
* Unit (2960), Gragblod (7), revealing faction, 20 vikings [VIKI], 20
  horses [HORS], 20 swords [SWOR], 160 silver [SILV]. Weight: 1220.
  Capacity: 0/1400/1700/0. Skills: combat [COMB] 1 (30).
* Frulvius (1299), Gragblod (7), avoiding, behind, revealing faction,
  leader [LEAD], sword [SWOR], horse [HORS]. Weight: 61. Capacity:
  0/70/85/0. Skills: tactics [TACT] 5 (450), combat [COMB] 1 (60),
  observation [OBSE] 4 (360).
* Unit (3019), Gragblod (7), behind, revealing faction, 17 sea elves
  [SELF], 17 longbows [LBOW], 17 horses [HORS], 136 silver [SILV].
  Weight: 1037. Capacity: 0/1190/1445/0. Skills: longbow [LBOW] 1
  (30).
- Armo (3246), New Horizons (16), avoiding, behind, 3 leaders [LEAD].
- Unit (3111), Warlords Inc (19), behind, viking [VIKI].
* Unit (1105), Gragblod (7), behind, revealing faction, 400 nomads
  [NOMA], 400 crossbows [XBOW], 400 horses [HORS], 3200 silver [SILV].
  Weight: 24400. Capacity: 0/28000/34000/0. Skills: crossbow [XBOW] 1
  (30).
- Asmore (3311), New Horizons (16), avoiding, behind, 2 leaders
  [LEAD].
* Unit (2782), Gragblod (7), avoiding, behind, revealing faction,
  receiving no aid, nomad [NOMA], horse [HORS], 8 silver [SILV].
  Weight: 60. Capacity: 0/70/85/0. Skills: stealth [STEA] 1 (30).
- Armo (3432), New Horizons (16), avoiding, behind, leader [LEAD].
- Armo (3433), New Horizons (16), avoiding, behind, leader [LEAD].
- Armo (3434), New Horizons (16), avoiding, behind, leader [LEAD].
* Unit (232), Gragblod (7), revealing faction, 824 silver [SILV], 5
  horses [HORS], nomad [NOMA]. Weight: 260. Capacity: 0/350/365/0.
  Skills: none.
* Unit (1803), Gragblod (7), revealing faction, tribesman [TMAN], 8
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: none.
* Unit (1983), Gragblod (7), revealing faction, holding, viking
  [VIKI], 1237 silver [SILV], horse [HORS]. Weight: 60. Capacity:
  0/70/85/0. Skills: combat [COMB] 1 (30).
* Unit (263), Gragblod (7), avoiding, behind, revealing faction,
  325470 silver [SILV], 42 horses [HORS], nomad [NOMA], sword [SWOR].
  Weight: 2111. Capacity: 0/2940/2955/0. Skills: none.

+ Gragblod Tower [1] : Tower.
  * Fuspilius (1368), Gragblod (7), revealing faction, 10 vikings
    [VIKI], 2 iron [IRON], ivory [IVOR], 3 mithril [MITH], 2 rootstone
    [ROOT], 80 silver [SILV]. Weight: 241. Capacity: 0/0/150/0.
    Skills: building [BUIL] 1 (30).
  * Acus (1239), Gragblod (7), behind, revealing faction, 7 tribal
    elves [TELF], 7 longbows [LBOW], 7 horses [HORS], 56 silver
    [SILV]. Weight: 427. Capacity: 0/490/595/0. Skills: longbow [LBOW]
    3 (180).
  - Bear (592), New Horizons (16), leader [LEAD].
  - Unit (54), Warlords Inc (19), behind, leader [LEAD].
  - Unit (1928), Warlords Inc (19), behind, leader [LEAD].
  - Unit (1929), Warlords Inc (19), behind, leader [LEAD].
  - Cougar (2489), New Horizons (16), behind, leader [LEAD].
  - Water Buffalo (2488), New Horizons (16), behind, leader [LEAD].
  * Tirelius (1039), Gragblod (7), behind, revealing faction, leader
    [LEAD], horse [HORS], balrog [BALR], 108 silver [SILV]. Weight:
    310. Capacity: 300/370/385/0. Skills: pattern [PATT] 4 (330),
    earth lore [EART] 3 (210), spirit [SPIR] 4 (300), force [FORC] 4
    (300), fire [FIRE] 2 (90), bird lore [BIRD] 2 (90), demon lore
    [DEMO] 3 (180), summon imps [SUIM] 3 (180), summon demon [SUDE] 3
    (180), summon balrog [SUBA] 3 (180). Combat spell: fire [FIRE].
    Can Study: fire [FIRE], earthquake [EQUA], force shield [FSHI],
    energy shield [ESHI], spirit shield [SSHI], magical healing
    [MHEA], gate lore [GATE], farsight [FARS], mind reading [MIND],
    weather lore [WEAT], earth lore [EART], wolf lore [WOLF], bird
    lore [BIRD], necromancy [NECR], demon lore [DEMO], banish demons
    [BDEM], illusion [ILLU], artifact lore [ARTI].
  * Caspus (1040), Gragblod (7), behind, revealing faction, leader
    [LEAD], 108 silver [SILV], horse [HORS]. Weight: 60. Capacity:
    0/70/85/0. Skills: spirit [SPIR] 4 (300), pattern [PATT] 4 (360),
    earth lore [EART] 3 (210), force [FORC] 4 (330), fire [FIRE] 3
    (180), bird lore [BIRD] 2 (90), force shield [FSHI] 3 (180),
    artifact lore [ARTI] 1 (30). Combat spell: fire [FIRE]. Can Study:
    fire [FIRE], earthquake [EQUA], force shield [FSHI], energy shield
    [ESHI], spirit shield [SSHI], magical healing [MHEA], gate lore
    [GATE], farsight [FARS], mind reading [MIND], weather lore [WEAT],
    earth lore [EART], wolf lore [WOLF], bird lore [BIRD], necromancy
    [NECR], demon lore [DEMO], illusion [ILLU], artifact lore [ARTI],
    enchant swords [ESWO], enchant armor [EARM].


mountain (70,26) in Phidyntia, 365 peasants (orcs), $1460.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $1022).
  Wanted: none.
  For Sale: 73 orcs [ORC] at $56, 14 leaders [LEAD] at $112.
  Entertainment available: $73.
  Products: 46 grain [GRAI], 41 iron [IRON], 10 stone [STON].

Exits:
  North : ocean (70,24) in Atlantis Ocean.
  Northeast : ocean (71,25) in Atlantis Ocean.
  Southeast : mountain (71,27) in Phidyntia.
  South : mountain (70,28) in Phidyntia.
  Southwest : mountain (69,27) in Phidyntia.
  Northwest : ocean (69,25) in Atlantis Ocean.

* Bulius (1488), Gragblod (7), revealing faction, 9 vikings [VIKI], 55
  silver [SILV], 9 mithril swords [MSWO], 3 swords [SWOR]. Weight:
  102. Capacity: 0/0/135/0. Skills: combat [COMB] 3 (180).
- Unit (2245), Warlords Inc (19), avoiding, behind, 3 leaders [LEAD],
  61 stone [STON].
- Unit (3175), Warlords Inc (19), avoiding, leader [LEAD].
- Unit (3195), Warlords Inc (19), avoiding, behind, 2 leaders [LEAD],
  33 iron [IRON], 18 swords [SWOR].
- Unit (1931), Warlords Inc (19), behind, leader [LEAD].
- Unit (2060), Warlords Inc (19), avoiding, behind, leader [LEAD].
- Unit (1930), Warlords Inc (19), behind, leader [LEAD], sword [SWOR].
- Unit (2221), Warlords Inc (19), avoiding, behind, 2 leaders [LEAD],
  6 mithril [MITH].
- Unit (2222), Warlords Inc (19), avoiding, 2 leaders [LEAD], 15
  mithril [MITH], 6 mithril swords [MSWO].
- Unit (2664), Warlords Inc (19), avoiding, behind, leader [LEAD].
- Unit (3273), Warlords Inc (19), avoiding, behind, leader [LEAD], 3
  iron [IRON].
- Unit (2092), Warlords Inc (19), behind, tribesman [TMAN], 2 swords
  [SWOR], 5 horses [HORS].
- Unit (3189), Warlords Inc (19), 2 horses [HORS], leader [LEAD], 2
  swords [SWOR].
- Unit (3450), Warlords Inc (19), avoiding, behind, 10 leaders [LEAD].
- Unit (3451), Warlords Inc (19), leader [LEAD].
- Unit (3452), Warlords Inc (19), 20 orcs [ORC], 3 swords [SWOR], 9
  mithril swords [MSWO].
- Unit (2544), Warlords Inc (19), behind, horse [HORS], viking [VIKI].

+ Lair [1] : Lair, closed to player units.

+ Building [2] : Mine.
  - Unit (3474), Warlords Inc (19), avoiding, behind, 4 leaders
    [LEAD].

+ Building [3] : Farm.
  - Unit (3475), Warlords Inc (19), behind, 4 tribesmen [TMAN].


jungle (72,26) in Donndinon, contains Thor-a-thol [city], 4546
  peasants (sea elves), $27276.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $14547).
  Wanted: 194 grain [GRAI] at $18, 114 livestock [LIVE] at $27, 148
    fish [FISH] at $24, 73 plate armor [PARM] at $531, 61 spices
    [SPIC] at $137, 84 dye [DYE] at $151.
  For Sale: 77 herbs [HERB] at $59, 76 truffles [TRUF] at $80, 89
    vodka [VODK] at $92, 909 sea elves [SELF] at $64, 181 leaders
    [LEAD] at $128.
  Entertainment available: $1363.
  Products: 34 livestock [LIVE], 11 wood [WOOD], 20 herbs [HERB].

Exits:
  North : jungle (72,24) in Donndinon.
  Northeast : jungle (73,25) in Donndinon.
  Southeast : jungle (73,27) in Donndinon.
  South : jungle (72,28) in Donndinon.
  Southwest : mountain (71,27) in Phidyntia.
  Northwest : ocean (71,25) in Atlantis Ocean.

* Festius (1107), Gragblod (7), revealing faction, 27 sea elves
  [SELF], 4191 silver [SILV], 50 swords [SWOR]. Weight: 320. Capacity:
  0/0/405/0. Skills: entertainment [ENTE] 1 (30).
* Unit (1342), Gragblod (7), avoiding, revealing faction, holding,
  leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: stealth
  [STEA] 5 (450), observation [OBSE] 2 (120).
* Unit (1350), Gragblod (7), avoiding, revealing faction, holding,
  leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: observation
  [OBSE] 5 (450), stealth [STEA] 2 (120).
- Builder (2397), New Horizons (16), avoiding, behind, 4 horses
  [HORS], 3 leaders [LEAD].
- Weap (2636), New Horizons (16), avoiding, behind, leader [LEAD], 2
  horses [HORS].
- Quarry (2637), New Horizons (16), avoiding, behind, horse [HORS],
  leader [LEAD], winged horse [WING].
- Obse (2749), New Horizons (16), avoiding, behind, leader [LEAD],
  winged horse [WING].
- Stea (2750), New Horizons (16), avoiding, behind, leader [LEAD],
  winged horse [WING].
- Weap (2753), New Horizons (16), avoiding, behind, leader [LEAD],
  horse [HORS].
- Weap (2754), New Horizons (16), avoiding, behind, leader [LEAD],
  horse [HORS].
- Quarry (2755), New Horizons (16), avoiding, behind, 2 leaders
  [LEAD].
- Funny guys (2487), New Horizons (16), avoiding, 9 wood elves [WELF],
  27 horses [HORS].
- Reilly (3009), New Horizons (16), avoiding, leader [LEAD].
- Reilly (3010), New Horizons (16), avoiding, leader [LEAD], horse
  [HORS].
- Reilly (3011), New Horizons (16), avoiding, leader [LEAD], 3 horses
  [HORS].
- Indigo (3285), New Horizons (16), avoiding, behind, 38 horses
  [HORS], leader [LEAD].
- More Booze (3239), New Horizons (16), avoiding, behind, leader
  [LEAD], 2 horses [HORS].
- Courier (2395), New Horizons (16), avoiding, leader [LEAD], horse
  [HORS].
- Truffle Passoff (3008), New Horizons (16), avoiding, behind, leader
  [LEAD].


jungle (74,26) in Donndinon, 180 peasants (sea elves), $180.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $11 (Max: $396).
  Wanted: none.
  For Sale: 36 sea elves [SELF] at $44, 7 leaders [LEAD] at $88.
  Entertainment available: $9.
  Products: 26 grain [GRAI], 16 wood [WOOD], 34 herbs [HERB].

Exits:
  North : jungle (74,24) in Donndinon.
  Northeast : ocean (75,25) in Atlantis Ocean.
  Southeast : ocean (75,27) in Atlantis Ocean.
  South : jungle (74,28) in Donndinon.
  Southwest : jungle (73,27) in Donndinon.
  Northwest : jungle (73,25) in Donndinon.

* Unit (1049), Gragblod (7), revealing faction, holding, receiving no
  aid, 31 silver [SILV], tribal elf [TELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


forest (59,27) in Nugyru, 355 peasants (wood elves), $1420.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $994).
  Wanted: none.
  For Sale: 71 wood elves [WELF] at $56, 14 leaders [LEAD] at $112.
  Entertainment available: $71.
  Products: 36 livestock [LIVE], 33 wood [WOOD], 11 furs [FUR], 14
    herbs [HERB].

Exits:
  North : forest (59,25) in Nugyru.
  Northeast : forest (60,26) in Nugyru.
  Southeast : plain (60,28) in Erisort.
  South : plain (59,29) in Erisort.
  Southwest : desert (58,28) in Baifelgris.
  Northwest : ocean (58,26) in Atlantis Ocean.

* Unit (2333), Gragblod (7), behind, revealing faction, 1688 silver
  [SILV], 50 vikings [VIKI]. Weight: 500. Capacity: 0/0/750/0. Skills:
  combat [COMB] 1 (30).


swamp (61,27) in Skelid, 194 peasants (tribal elves), $582.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $504).
  Wanted: none.
  For Sale: 38 tribal elves [TELF] at $52, 7 leaders [LEAD] at $104.
  Entertainment available: $29.
  Products: 17 livestock [LIVE], 10 wood [WOOD], 17 herbs [HERB].

Exits:
  North : swamp (61,25) in Skelid.
  Northeast : swamp (62,26) in Skelid.
  Southeast : swamp (62,28) in Skelid.
  South : swamp (61,29) in Skelid.
  Southwest : plain (60,28) in Erisort.
  Northwest : forest (60,26) in Nugyru.

* Unit (1883), on guard, Gragblod (7), revealing faction, 38 tribal
  elves [TELF], 570 silver [SILV]. Weight: 380. Capacity: 0/0/570/0.
  Skills: combat [COMB] 1 (30).


swamp (65,27) in Skelid, 118 peasants (tribal elves), $354.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $306).
  Wanted: none.
  For Sale: 23 tribal elves [TELF] at $52, 4 leaders [LEAD] at $104.
  Entertainment available: $17.
  Products: 18 livestock [LIVE], 13 wood [WOOD], 19 herbs [HERB].

Exits:
  North : swamp (65,25) in Skelid.
  Northeast : jungle (66,26) in Sefitat.
  Southeast : jungle (66,28) in Sefitat.
  South : ocean (65,29) in Atlantis Ocean.
  Southwest : ocean (64,28) in Atlantis Ocean.
  Northwest : swamp (64,26) in Skelid.

* Unit (2742), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 986 silver [SILV], tribal elf [TELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: none.
* Unit (2743), Gragblod (7), revealing faction, receiving no aid, 24
  silver [SILV], tribal elf [TELF]. Weight: 10. Capacity: 0/0/15/0.
  Skills: none.


jungle (67,27) in Sefitat, 177 peasants (tribesmen), $354.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $424).
  Wanted: none.
  For Sale: 35 tribesmen [TMAN] at $48, 7 leaders [LEAD] at $96.
  Entertainment available: $17.
  Products: 30 livestock [LIVE], 11 wood [WOOD], 35 herbs [HERB].

Exits:
  North : jungle (67,25) in Sefitat.
  Northeast : mountain (68,26) in Phidyntia, contains Oroldu [city].
  Southeast : jungle (68,28) in Sefitat.
  South : jungle (67,29) in Sefitat.
  Southwest : jungle (66,28) in Sefitat.
  Northwest : jungle (66,26) in Sefitat.

* Fumilus (1184), Gragblod (7), behind, revealing faction, tribal elf
  [TELF], 7 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
  entertainment [ENTE] 1 (30).
* Sidilio (1713), on guard, Gragblod (7), revealing faction, tribesman
  [TMAN], 2 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
  combat [COMB] 1 (30).
* Invedius (1717), Gragblod (7), revealing faction, sea elf [SELF], 2
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: none.
* Unit (1175), Gragblod (7), revealing faction, 19 tribesmen [TMAN],
  38 silver [SILV]. Weight: 190. Capacity: 0/0/285/0. Skills: combat
  [COMB] 1 (30).
- Unit (2059), Warlords Inc (19), behind, leader [LEAD], sword [SWOR],
  horse [HORS].
- Unit (1729), Warlords Inc (19), behind, 7 tribesmen [TMAN].
- Unit (1932), Warlords Inc (19), avoiding, behind, viking [VIKI].
- Unit (3476), Warlords Inc (19), behind, 3 leaders [LEAD].
* Capania (1344), Gragblod (7), revealing faction, tribal elf [TELF],
  1376 silver [SILV], 8 horses [HORS]. Weight: 410. Capacity:
  0/560/575/0. Skills: combat [COMB] 1 (30).
- Unit (2404), Warlords Inc (19), leader [LEAD], 19 horses [HORS].
* Unit (742), Gragblod (7), revealing faction, 381 vikings [VIKI],
  mithril armor [MARM], 400 horses [HORS], 394 swords [SWOR], 6
  mithril swords [MSWO], 26670 silver [SILV]. Weight: 24211. Capacity:
  0/28000/33715/0. Skills: combat [COMB] 1 (30).
* Unit (2287), Gragblod (7), behind, revealing faction, 1000 crossbows
  [XBOW], 1000 vikings [VIKI], 1000 horses [HORS], 70000 silver
  [SILV]. Weight: 61000. Capacity: 0/70000/85000/0. Skills: crossbow
  [XBOW] 1 (42).
* Mertus (366), Gragblod (7), revealing faction, 691 vikings [VIKI],
  mithril armor [MARM], 48370 silver [SILV], 691 horses [HORS], 691
  swords [SWOR]. Weight: 42152. Capacity: 0/48370/58735/0. Skills:
  combat [COMB] 3 (180).
* Poenius (1120), Gragblod (7), behind, revealing faction, leader
  [LEAD], 629 silver [SILV], horse [HORS], double bow [DBOW]. Weight:
  61. Capacity: 0/70/85/0. Skills: combat [COMB] 5 (450), observation
  [OBSE] 5 (450), stealth [STEA] 5 (450), crossbow [XBOW] 3 (240).
- Unit (2412), Warlords Inc (19), 2 leaders [LEAD], 12 winged horses
  [WING].

+ Lair [1] : Lair, closed to player units.


mountain (69,27) in Phidyntia, 252 peasants (vikings), $504.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $604).
  Wanted: none.
  For Sale: 50 vikings [VIKI] at $48, 10 leaders [LEAD] at $96.
  Entertainment available: $25.
  Products: 22 grain [GRAI], 26 iron [IRON], 15 stone [STON].

Exits:
  North : ocean (69,25) in Atlantis Ocean.
  Northeast : mountain (70,26) in Phidyntia.
  Southeast : mountain (70,28) in Phidyntia.
  South : ocean (69,29) in Atlantis Ocean.
  Southwest : jungle (68,28) in Sefitat.
  Northwest : mountain (68,26) in Phidyntia, contains Oroldu [city].

* Pespor (1042), on guard, Gragblod (7), revealing faction, 32 vikings
  [VIKI], 828 silver [SILV], 29 mithril swords [MSWO], 6 swords
  [SWOR], 32 horses [HORS]. Weight: 1955. Capacity: 0/2240/2720/0.
  Skills: combat [COMB] 3 (180).
* Culiliusus (1158), Gragblod (7), behind, revealing faction, leader
  [LEAD], 30 silver [SILV], double bow [DBOW]. Weight: 11. Capacity:
  0/0/15/0. Skills: combat [COMB] 4 (300), tactics [TACT] 5 (450),
  stealth [STEA] 1 (30), riding [RIDI] 5 (450), longbow [LBOW] 4
  (360).
- Unit (2246), Warlords Inc (19), avoiding, behind, 2 leaders [LEAD],
  8 stone [STON], 6 mithril [MITH].
- Unit (2247), Warlords Inc (19), avoiding, behind, leader [LEAD], 2
  swords [SWOR], 9 mithril swords [MSWO], 6 mithril [MITH].
- Unit (3176), Warlords Inc (19), 4 leaders [LEAD], 11 rootstone
  [ROOT], 12 iron [IRON].
- Unit (2061), Warlords Inc (19), avoiding, behind, leader [LEAD].
- Unit (3190), Warlords Inc (19), 5 horses [HORS], 3 leaders [LEAD].
- Unit (3191), Warlords Inc (19), leader [LEAD].
- Unit (3337), Warlords Inc (19), 9 leaders [LEAD], 33 iron [IRON], 27
  swords [SWOR].
- Unit (3454), Warlords Inc (19), avoiding, behind, leader [LEAD].
- Unit (3455), Warlords Inc (19), avoiding, behind, leader [LEAD].
- Unit (3170), Warlords Inc (19), nomad [NOMA], 20 horses [HORS].
- Unit (3477), Warlords Inc (19), 4 horses [HORS], 10 leaders [LEAD].


mountain (71,27) in Phidyntia, 377 peasants (sea elves), $1885.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $15 (Max: $1131).
  Wanted: none.
  For Sale: 75 sea elves [SELF] at $60, 15 leaders [LEAD] at $120.
  Entertainment available: $94.
  Products: 31 grain [GRAI], 32 iron [IRON], 16 stone [STON].

Exits:
  North : ocean (71,25) in Atlantis Ocean.
  Northeast : jungle (72,26) in Donndinon, contains Thor-a-thol
    [city].
  Southeast : jungle (72,28) in Donndinon.
  South : ocean (71,29) in Atlantis Ocean.
  Southwest : mountain (70,28) in Phidyntia.
  Northwest : mountain (70,26) in Phidyntia.

* Pelvius (1028), Gragblod (7), behind, revealing faction, leader
  [LEAD], eagle [EAGL], 3 dragons [DRAG], 2142 silver [SILV], mithril
  sword [MSWO], 9 swords [SWOR]. Weight: 780. Capacity: 915/915/930/0.
  Skills: pattern [PATT] 4 (330), spirit [SPIR] 2 (90), gate lore
  [GATE] 2 (90), force [FORC] 2 (90), earth lore [EART] 4 (300), fire
  [FIRE] 2 (90), bird lore [BIRD] 4 (300), demon lore [DEMO] 1 (30),
  dragon lore [DRAG] 4 (300), banish demons [BDEM] 1 (30). Combat
  spell: fire [FIRE]. Can Study: earthquake [EQUA], force shield
  [FSHI], energy shield [ESHI], spirit shield [SSHI], magical healing
  [MHEA], farsight [FARS], mind reading [MIND], weather lore [WEAT],
  wolf lore [WOLF], necromancy [NECR], demon lore [DEMO], summon imps
  [SUIM], illusion [ILLU], artifact lore [ARTI].

+ Cave [1] : Cave, closed to player units.


desert (58,28) in Baifelgris, 132 peasants (desert dwarves), $132.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $11 (Max: $290).
  Wanted: none.
  For Sale: 26 desert dwarves [DDWA] at $44, 5 leaders [LEAD] at $88.
  Entertainment available: $6.
  Products: 16 livestock [LIVE], 19 iron [IRON], 10 stone [STON].

Exits:
  North : ocean (58,26) in Atlantis Ocean.
  Northeast : forest (59,27) in Nugyru.
  Southeast : plain (59,29) in Erisort.
  South : plain (58,30) in Erisort.
  Southwest : desert (57,29) in Baifelgris.
  Northwest : desert (57,27) in Baifelgris.

- Izluks (1245), sea elf [SELF].
* Unit (2798), Gragblod (7), revealing faction, 26 vikings [VIKI], 196
  silver [SILV]. Weight: 260. Capacity: 0/0/390/0. Skills: combat
  [COMB] 1 (30).


plain (60,28) in Erisort, 415 peasants (nomads), $1660.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $1162).
  Wanted: none.
  For Sale: 83 nomads [NOMA] at $56, 16 leaders [LEAD] at $112.
  Entertainment available: $83.
  Products: 57 grain [GRAI], 20 horses [HORS].

Exits:
  North : forest (60,26) in Nugyru.
  Northeast : swamp (61,27) in Skelid.
  Southeast : swamp (61,29) in Skelid.
  South : plain (60,30) in Erisort.
  Southwest : plain (59,29) in Erisort.
  Northwest : forest (59,27) in Nugyru.

* Unit (2957), on guard, Gragblod (7), revealing faction, 5898 silver
  [SILV], 50 vikings [VIKI]. Weight: 500. Capacity: 0/0/750/0. Skills:
  combat [COMB] 1 (30).
* Unit (1825), Gragblod (7), revealing faction, 33 nomads [NOMA], 132
  silver [SILV]. Weight: 330. Capacity: 0/0/495/0. Skills: combat
  [COMB] 1 (30).


swamp (62,28) in Skelid, 147 peasants (tribesmen), $294.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $352).
  Wanted: none.
  For Sale: 29 tribesmen [TMAN] at $48, 5 leaders [LEAD] at $96.
  Entertainment available: $14.
  Products: 16 grain [GRAI], 14 wood [WOOD], 15 herbs [HERB].

Exits:
  North : swamp (62,26) in Skelid.
  Northeast : swamp (63,27) in Skelid.
  Southeast : ocean (63,29) in Atlantis Ocean.
  South : ocean (62,30) in Atlantis Ocean.
  Southwest : swamp (61,29) in Skelid.
  Northwest : swamp (61,27) in Skelid.

* Unit (708), on guard, Gragblod (7), revealing faction, 29 tribesmen
  [TMAN], 232 silver [SILV]. Weight: 290. Capacity: 0/0/435/0. Skills:
  combat [COMB] 1 (30).


jungle (66,28) in Sefitat, 173 peasants (sea elves), $173.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $11 (Max: $380).
  Wanted: none.
  For Sale: 34 sea elves [SELF] at $44, 6 leaders [LEAD] at $88.
  Entertainment available: $8.
  Products: 39 grain [GRAI], 19 wood [WOOD], 27 herbs [HERB].

Exits:
  North : jungle (66,26) in Sefitat.
  Northeast : jungle (67,27) in Sefitat.
  Southeast : jungle (67,29) in Sefitat.
  South : ocean (66,30) in Atlantis Ocean.
  Southwest : ocean (65,29) in Atlantis Ocean.
  Northwest : swamp (65,27) in Skelid.

- Balrog (2859), balrog [BALR].
* Paenia (1169), Gragblod (7), behind, revealing faction, leader
  [LEAD], 1901 silver [SILV], mithril sword [MSWO], horse [HORS].
  Weight: 61. Capacity: 0/70/85/0. Skills: combat [COMB] 5 (450),
  observation [OBSE] 5 (450), tactics [TACT] 3 (180), riding [RIDI] 4
  (330).


jungle (68,28) in Sefitat, 179 peasants (tribal elves), $358.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $429).
  Wanted: none.
  For Sale: 35 tribal elves [TELF] at $48, 7 leaders [LEAD] at $96.
  Entertainment available: $17.
  Products: 20 livestock [LIVE], 16 wood [WOOD], 23 herbs [HERB].

Exits:
  North : mountain (68,26) in Phidyntia, contains Oroldu [city].
  Northeast : mountain (69,27) in Phidyntia.
  Southeast : ocean (69,29) in Atlantis Ocean.
  South : ocean (68,30) in Atlantis Ocean.
  Southwest : jungle (67,29) in Sefitat.
  Northwest : jungle (67,27) in Sefitat.

* Ammunia (1043), on guard, Gragblod (7), revealing faction, viking
  [VIKI], 17 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
  combat [COMB] 2 (90).
* Seccirdius (1108), Gragblod (7), revealing faction, 18 tribal elves
  [TELF], 1180 silver [SILV]. Weight: 180. Capacity: 0/0/270/0.
  Skills: combat [COMB] 2 (90).
* Arcia (1160), on guard, Gragblod (7), behind, revealing faction,
  leader [LEAD], 491 silver [SILV], mithril sword [MSWO]. Weight: 11.
  Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30), observation [OBSE]
  5 (450), stealth [STEA] 5 (450), riding [RIDI] 5 (450), crossbow
  [XBOW] 3 (210).
* Lodemius (1183), Gragblod (7), behind, revealing faction, leader
  [LEAD], 188 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
  combat [COMB] 5 (450), tactics [TACT] 5 (450), stealth [STEA] 5
  (450), observation [OBSE] 3 (240).
* Malius (1295), Gragblod (7), revealing faction, leader [LEAD], 397
  silver [SILV], horse [HORS], mithril sword [MSWO]. Weight: 61.
  Capacity: 0/70/85/0. Skills: combat [COMB] 5 (450), stealth [STEA] 5
  (450), riding [RIDI] 5 (450), observation [OBSE] 2 (90).
* Calirabor (1063), on guard, Gragblod (7), revealing faction, tribal
  elf [TELF], 176 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: combat [COMB] 2 (90).


mountain (70,28) in Phidyntia, 282 peasants (vikings), $846.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $13 (Max: $733).
  Wanted: none.
  For Sale: 56 vikings [VIKI] at $52, 11 leaders [LEAD] at $104.
  Entertainment available: $42.
  Products: 25 livestock [LIVE], 29 iron [IRON], 12 stone [STON].

Exits:
  North : mountain (70,26) in Phidyntia.
  Northeast : mountain (71,27) in Phidyntia.
  Southeast : ocean (71,29) in Atlantis Ocean.
  South : ocean (70,30) in Atlantis Ocean.
  Southwest : ocean (69,29) in Atlantis Ocean.
  Northwest : mountain (69,27) in Phidyntia.

* Ceniulus (1062), Gragblod (7), revealing faction, 100 vikings
  [VIKI], 100 horses [HORS], 5977 silver [SILV], 12 mithril swords
  [MSWO], 2 swords [SWOR], 2 mithril armor [MARM]. Weight: 6016.
  Capacity: 0/7000/8500/0. Skills: combat [COMB] 3 (180).
* Unit (2384), Gragblod (7), revealing faction, 17 rootstone [ROOT],
  viking [VIKI], horse [HORS], 10 double bows [DBOW]. Weight: 920.
  Capacity: 0/70/85/0. Skills: none.
* Unit (1832), Gragblod (7), revealing faction, holding, 256 silver
  [SILV], leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills:
  observation [OBSE] 1 (60).
* Unit (1842), Gragblod (7), revealing faction, holding, 256 silver
  [SILV], leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills:
  tactics [TACT] 1 (60).
* Unit (1845), Gragblod (7), revealing faction, holding, 256 silver
  [SILV], leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills:
  stealth [STEA] 1 (60).
* Vanius (1491), Gragblod (7), avoiding, revealing faction, nomad
  [NOMA], 60 horses [HORS], 528 silver [SILV], double bow [DBOW].
  Weight: 3011. Capacity: 0/4200/4215/0. Skills: stealth [STEA] 1
  (30).


jungle (72,28) in Donndinon, 129 peasants (tribesmen), $258.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $309).
  Wanted: none.
  For Sale: 25 tribesmen [TMAN] at $48, 5 leaders [LEAD] at $96.
  Entertainment available: $12.
  Products: 30 livestock [LIVE], 16 wood [WOOD], 31 herbs [HERB].

Exits:
  North : jungle (72,26) in Donndinon, contains Thor-a-thol [city].
  Northeast : jungle (73,27) in Donndinon.
  Southeast : jungle (73,29) in Donndinon, contains Alabrin-lum
    [city].
  South : ocean (72,30) in Atlantis Ocean.
  Southwest : ocean (71,29) in Atlantis Ocean.
  Northwest : mountain (71,27) in Phidyntia.

* Antilevus (1225), Gragblod (7), behind, revealing faction, leader
  [LEAD], 273 silver [SILV], horse [HORS], sword [SWOR], mithril sword
  [MSWO]. Weight: 62. Capacity: 0/70/85/0. Skills: combat [COMB] 1
  (30), observation [OBSE] 5 (450), tactics [TACT] 5 (450), stealth
  [STEA] 2 (90), riding [RIDI] 5 (450).


swamp (61,29) in Skelid, 154 peasants (tribesmen), $308.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $369).
  Wanted: none.
  For Sale: 30 tribesmen [TMAN] at $48, 6 leaders [LEAD] at $96.
  Entertainment available: $15.
  Products: 14 grain [GRAI], 11 wood [WOOD], 12 herbs [HERB].

Exits:
  North : swamp (61,27) in Skelid.
  Northeast : swamp (62,28) in Skelid.
  Southeast : ocean (62,30) in Atlantis Ocean.
  South : plain (61,31) in Erisort.
  Southwest : plain (60,30) in Erisort.
  Northwest : plain (60,28) in Erisort.

- Izluks (1323), on guard, nomad [NOMA].
* Unit (2876), Gragblod (7), behind, revealing faction, holding,
  receiving no aid, 30 tribesmen [TMAN]. Weight: 300. Capacity:
  0/0/450/0. Skills: combat [COMB] 1 (30).


jungle (67,29) in Sefitat, 144 peasants (sea elves), $288.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $12 (Max: $345).
  Wanted: none.
  For Sale: 28 sea elves [SELF] at $48, 5 leaders [LEAD] at $96.
  Entertainment available: $14.
  Products: 31 grain [GRAI], 18 wood [WOOD], 21 herbs [HERB].

Exits:
  North : jungle (67,27) in Sefitat.
  Northeast : jungle (68,28) in Sefitat.
  Southeast : ocean (68,30) in Atlantis Ocean.
  South : ocean (67,31) in Atlantis Ocean.
  Southwest : ocean (66,30) in Atlantis Ocean.
  Northwest : jungle (66,28) in Sefitat.

* Caerastius (1182), Gragblod (7), revealing faction, holding, leader
  [LEAD], mithril sword [MSWO], horse [HORS], 690 silver [SILV].
  Weight: 61. Capacity: 0/70/85/0. Skills: combat [COMB] 3 (180),
  observation [OBSE] 5 (450), stealth [STEA] 5 (450), riding [RIDI] 4
  (390).
* Unit (2744), Gragblod (7), revealing faction, holding, 12 silver
  [SILV], tribesman [TMAN]. Weight: 10. Capacity: 0/0/15/0. Skills:
  none.


jungle (73,29) in Donndinon, contains Alabrin-lum [city], 3337
  peasants (tribesmen), $13348.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $9343).
  Wanted: 194 grain [GRAI] at $26, 112 livestock [LIVE] at $23, 164
    fish [FISH] at $26, 52 plate armor [PARM] at $423, 59 pearls
    [PEAR] at $164, 51 figurines [FIGU] at $168.
  For Sale: 40 herbs [HERB] at $53, 51 chain armor [CARM] at $100, 53
    jewelry [JEWE] at $84, 28 mink [MINK] at $86, 667 tribesmen [TMAN]
    at $56, 133 leaders [LEAD] at $112.
  Entertainment available: $667.
  Products: 25 livestock [LIVE], 11 wood [WOOD], 21 herbs [HERB].

Exits:
  North : jungle (73,27) in Donndinon.
  Northeast : jungle (74,28) in Donndinon.
  Southeast : jungle (74,30) in Donndinon.
  South : mountain (73,31) in Gededyki.
  Southwest : ocean (72,30) in Atlantis Ocean.
  Northwest : jungle (72,28) in Donndinon.

- City Guard (63), on guard, 120 leaders [LEAD], 120 swords [SWOR].
- Izluks (1824), Multiple Bite Wounds (10), avoiding, tribesman
  [TMAN].
* Unit (1053), Gragblod (7), revealing faction, 3 tribesmen [TMAN],
  340 silver [SILV]. Weight: 30. Capacity: 0/0/45/0. Skills:
  entertainment [ENTE] 1 (30).
- Grey Scout (2945), Grey Wind (17), avoiding, behind, viking [VIKI].


plain (52,30) in Serilelo, contains Iaierd's [city], 3674 peasants
  (high elves), $25718.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $17 (Max: $12491).
  Wanted: 158 grain [GRAI] at $23, 126 livestock [LIVE] at $18, 108
    fish [FISH] at $26, 64 longbows [LBOW] at $99, 49 figurines [FIGU]
    at $146, 37 mink [MINK] at $144.
  For Sale: 26 jewelry [JEWE] at $87, 11 tarot cards [TARO] at $76,
    734 high elves [HELF] at $68, 146 leaders [LEAD] at $136.
  Entertainment available: $1285.
  Products: 76 grain [GRAI], 36 horses [HORS].

Exits:
  North : ocean (52,28) in Atlantis Ocean.
  Northeast : plain (53,29) in Serilelo.
  Southeast : plain (53,31) in Serilelo.
  South : ocean (52,32) in Atlantis Ocean.
  Southwest : ocean (51,31) in Atlantis Ocean.
  Northwest : ocean (51,29) in Atlantis Ocean.

* Unit (1936), Gragblod (7), behind, revealing faction, holding, 247
  silver [SILV], viking [VIKI]. Weight: 10. Capacity: 0/0/15/0.
  Skills: entertainment [ENTE] 1 (30).
- Sargi (982), on guard, 100 high elves [HELF].
- Unit (984), leader [LEAD].


plain (58,30) in Erisort, 718 peasants (high elves), $4308.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $16 (Max: $2297).
  Wanted: none.
  For Sale: 143 high elves [HELF] at $64, 28 leaders [LEAD] at $128.
  Entertainment available: $215.
  Products: 60 livestock [LIVE], 33 horses [HORS].

Exits:
  North : desert (58,28) in Baifelgris.
  Northeast : plain (59,29) in Erisort.
  Southeast : plain (59,31) in Erisort.
  South : plain (58,32) in Erisort, contains Awych [city].
  Southwest : desert (57,31) in Baifelgris.
  Northwest : desert (57,29) in Baifelgris.

* Unit (1802), Gragblod (7), revealing faction, 24 vikings [VIKI], 144
  silver [SILV]. Weight: 240. Capacity: 0/0/360/0. Skills: combat
  [COMB] 1 (30).


plain (60,30) in Erisort, 687 peasants (plainsmen), $2748.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $14 (Max: $1923).
  Wanted: none.
  For Sale: 137 plainsmen [PLAI] at $56, 27 leaders [LEAD] at $112.
  Entertainment available: $137.
  Products: 44 livestock [LIVE], 31 horses [HORS].

Exits:
  North : plain (60,28) in Erisort.
  Northeast : swamp (61,29) in Skelid.
  Southeast : plain (61,31) in Erisort.
  South : plain (60,32) in Erisort.
  Southwest : plain (59,31) in Erisort.
  Northwest : plain (59,29) in Erisort.

- Izluks (1278), on guard, nomad [NOMA].
* Unit (2905), Gragblod (7), revealing faction, 45431 silver [SILV],
  nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills: stealth [STEA]
  1 (30).


jungle (74,30) in Donndinon, 128 peasants (tribesmen), $128.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $11 (Max: $281).
  Wanted: none.
  For Sale: 25 tribesmen [TMAN] at $44, 5 leaders [LEAD] at $88.
  Entertainment available: $6.
  Products: 28 livestock [LIVE], 15 wood [WOOD], 35 herbs [HERB].

Exits:
  North : jungle (74,28) in Donndinon.
  Northeast : ocean (75,29) in Atlantis Ocean.
  Southeast : ocean (75,31) in Atlantis Ocean.
  South : mountain (74,32) in Gededyki.
  Southwest : mountain (73,31) in Gededyki.
  Northwest : jungle (73,29) in Donndinon, contains Alabrin-lum
    [city].

* Unit (1637), Gragblod (7), avoiding, revealing faction, 41 silver
  [SILV], tribesman [TMAN]. Weight: 10. Capacity: 0/0/15/0. Skills:
  combat [COMB] 1 (30).


swamp (41,31) in Ellon, 125 peasants (tribal elves), $250.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $12 (Max: $300).
  Wanted: none.
  For Sale: 25 tribal elves [TELF] at $48, 5 leaders [LEAD] at $96.
  Entertainment available: $12.
  Products: 15 grain [GRAI], 19 wood [WOOD], 17 herbs [HERB].

Exits:
  North : ocean (41,29) in Atlantis Ocean.
  Northeast : swamp (42,30) in Ellon.
  Southeast : swamp (42,32) in Ellon, contains Grangrad [city].
  South : ocean (41,33) in Atlantis Ocean.
  Southwest : plain (40,32) in Emlther.
  Northwest : ocean (40,30) in Atlantis Ocean.

* Portiblius (1106), Gragblod (7), avoiding, behind, revealing
  faction, holding, receiving no aid, tribesman [TMAN], 61 silver
  [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
  (30).


plain (58,32) in Erisort, contains Awych [city], 7014 peasants
  (nomads), $56112.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $18 (Max: $25250).
  Wanted: 148 grain [GRAI] at $27, 108 livestock [LIVE] at $26, 87
    wood [WOOD] at $41, 99 wagons [WAGO] at $167, 50 vodka [VODK] at
    $155, 95 cashmere [CASH] at $155.
  For Sale: 53 horses [HORS] at $71, 85 truffles [TRUF] at $68, 58
    cotton [COTT] at $61, 1402 nomads [NOMA] at $72, 280 leaders
    [LEAD] at $144.
  Entertainment available: $2805.
  Products: 41 livestock [LIVE], 36 horses [HORS].

Exits:
  North : plain (58,30) in Erisort.
  Northeast : plain (59,31) in Erisort.
  Southeast : plain (59,33) in Erisort.
  South : plain (58,34) in Erisort, contains Dunhowestad [town].
  Southwest : desert (57,33) in Baifelgris.
  Northwest : desert (57,31) in Baifelgris.

- Izluks (1641), on guard, nomad [NOMA].
* Unit (1985), Gragblod (7), behind, revealing faction, holding, nomad
  [NOMA], 258 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
  entertainment [ENTE] 1 (30).
- Sargi (2070), on guard, 864 nomads [NOMA], 53 horses [HORS], 46
  swords [SWOR].
- Unit (1975), high elf [HELF].
- TUVC (1324), 280 leaders [LEAD], 530 horses [HORS], 10 swords
  [SWOR].
- Arba Noma (1095), on guard, 100 nomads [NOMA], 101 horses [HORS], 43
  swords [SWOR], 7 mithril [MITH], 3 winged horses [WING], 10 floater
  hides [FLOA], ironwood [IRWD], 3 roses [ROSE], 4 iron [IRON],
  chocolate [CHOC], mink [MINK], 102 crossbows [XBOW], 2 wine [WINE],
  velvet [VELV], cashmere [CASH], mithril armor [MARM].
- ARBA (1203), on guard, 160 leaders [LEAD], 67 swords [SWOR], 23
  mithril [MITH], 5 floater hides [FLOA], wool [WOOL], 162 crossbows
  [XBOW], longbow [LBOW], 3 wood [WOOD], mink [MINK], stone [STON],
  128 horses [HORS], 7 winged horses [WING], 3 double bows [DBOW].
- TUVC skolotaji (2065), on guard, 6 horses [HORS], 6 leaders [LEAD],
  7 swords [SWOR], mithril [MITH], 2 plate armor [PARM], 3 winged
  horses [WING], 2 chain armor [CARM].
- TUVC (1682), 87 horses [HORS], 60 leaders [LEAD], 2 longbows [LBOW],
  7 mithril [MITH], floater hide [FLOA], 2 figurines [FIGU], 2 wool
  [WOOL], caviar [CAVI], 61 plate armor [PARM], 73 swords [SWOR],
  roses [ROSE], 6 mithril swords [MSWO], 3 mithril armor [MARM],
  winged horse [WING].


mountain (74,32) in Gededyki, 344 peasants (vikings), $1032.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $13 (Max: $894).
  Wanted: none.
  For Sale: 68 vikings [VIKI] at $52, 13 leaders [LEAD] at $104.
  Entertainment available: $51.
  Products: 37 livestock [LIVE], 29 iron [IRON], 11 stone [STON].

Exits:
  North : jungle (74,30) in Donndinon.
  Northeast : ocean (75,31) in Atlantis Ocean.
  Southeast : mountain (75,33) in Gededyki.
  South : mountain (74,34) in Gededyki, contains Tinynt [city].
  Southwest : mountain (73,33) in Gededyki.
  Northwest : mountain (73,31) in Gededyki.

* Unit (783), Gragblod (7), avoiding, revealing faction, 3 vikings
  [VIKI], 99 silver [SILV]. Weight: 30. Capacity: 0/0/45/0. Skills:
  combat [COMB] 1 (30).
* Unit (3038), Gragblod (7), avoiding, revealing faction, 32 silver
  [SILV], viking [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills:
  combat [COMB] 1 (30).


plain (61,33) in Erisort, contains Mundmar [city], 5153 peasants
  (plainsmen), $41224.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $18 (Max: $18550).
  Wanted: 168 grain [GRAI] at $24, 130 livestock [LIVE] at $23, 62
    longbows [LBOW] at $126, 60 plate armor [PARM] at $453, 55 wagons
    [WAGO] at $165, 82 spices [SPIC] at $167, 97 cotton [COTT] at
    $140.
  For Sale: 55 horses [HORS] at $50, 82 crossbows [XBOW] at $131, 53
    roses [ROSE] at $76, 54 velvet [VELV] at $74, 1030 plainsmen
    [PLAI] at $72, 206 leaders [LEAD] at $144.
  Entertainment available: $2061.
  Products: 61 grain [GRAI], 27 horses [HORS].

Exits:
  North : plain (61,31) in Erisort.
  Northeast : mountain (62,32) in Scourie.
  Southeast : mountain (62,34) in Scourie.
  South : mountain (61,35) in Scourie.
  Southwest : plain (60,34) in Erisort.
  Northwest : plain (60,32) in Erisort.

- Sargi (1228), on guard, 99 plainsmen [PLAI], 9 nomads [NOMA], 4 yew
  [YEW], 7 rootstone [ROOT], horse [HORS], cashmere [CASH], 8 ironwood
  [IRWD], mithril sword [MSWO].
- TUVC (1469), 150 leaders [LEAD], floater hide [FLOA], 11 yew [YEW],
  3 ironwood [IRWD], 50 swords [SWOR], 150 horses [HORS], 5 mithril
  swords [MSWO], 7 chain armor [CARM], plate armor [PARM], mithril
  armor [MARM].
- TUVC skolotaji (1493), on guard, 15 leaders [LEAD], 16 winged horses
  [WING], 15 mithril swords [MSWO], 6 mithril armor [MARM].
- Unit (1558), plainsman [PLAI].
- ARBA (1117), 954 leaders [LEAD], 359 horses [HORS], 944 crossbows
  [XBOW], mink [MINK], 2 rootstone [ROOT], 8 yew [YEW], 11 double bows
  [DBOW].
- Arba Noma (1829), 354 nomads [NOMA], 232 horses [HORS], 356
  crossbows [XBOW], 6 rootstone [ROOT], 22 yew [YEW], 4 ironwood
  [IRWD], 4 mithril [MITH].
* Unit (1986), Gragblod (7), behind, revealing faction, holding,
  plainsman [PLAI], 258 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: entertainment [ENTE] 1 (30).


mountain (75,33) in Gededyki, 206 peasants (orcs), $618.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $13 (Max: $535).
  Wanted: none.
  For Sale: 41 orcs [ORC] at $52, 8 leaders [LEAD] at $104.
  Entertainment available: $30.
  Products: 20 livestock [LIVE], 39 iron [IRON], 15 stone [STON].

Exits:
  North : ocean (75,31) in Atlantis Ocean.
  Northeast : ocean (76,32) in Atlantis Ocean.
  Southeast : jungle (76,34) in Kuny.
  South : mountain (75,35) in Gededyki.
  Southwest : mountain (74,34) in Gededyki, contains Tinynt [city].
  Northwest : mountain (74,32) in Gededyki.

* Cadrasius (1258), Gragblod (7), revealing faction, 14 tribesmen
  [TMAN], 13 silver [SILV]. Weight: 140. Capacity: 0/0/210/0. Skills:
  combat [COMB] 1 (30).
* Unit (1384), Gragblod (7), revealing faction, 9 vikings [VIKI], 2
  silver [SILV]. Weight: 90. Capacity: 0/0/135/0. Skills: combat
  [COMB] 1 (30).
* Unit (1003), Gragblod (7), revealing faction, 29 orcs [ORC], 36
  silver [SILV]. Weight: 290. Capacity: 0/0/435/0. Skills: combat
  [COMB] 1 (30).
* Unit (2439), Gragblod (7), revealing faction, 10 silver [SILV], orc
  [ORC]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).


plain (56,34) in Fontenaisle, contains Yqauton [city], 6723 peasants
  (high elves), $60507.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $19 (Max: $25547).
  Wanted: 188 grain [GRAI] at $20, 156 livestock [LIVE] at $20, 93
    stone [STON] at $41, 97 swords [SWOR] at $95, 74 wagons [WAGO] at
    $155, 75 ivory [IVOR] at $170, 72 tarot cards [TARO] at $174.
  For Sale: 58 chain armor [CARM] at $94, 95 plate armor [PARM] at
    $441, 63 figurines [FIGU] at $60, 70 wool [WOOL] at $69, 1344 high
    elves [HELF] at $76, 268 leaders [LEAD] at $152.
  Entertainment available: $3025.
  Products: 71 livestock [LIVE], 26 horses [HORS].

Exits:
  North : desert (56,32) in Baifelgris.
  Northeast : desert (57,33) in Baifelgris.
  Southeast : plain (57,35) in Erisort.
  South : plain (56,36) in Fontenaisle.
  Southwest : plain (55,35) in Fontenaisle.
  Northwest : plain (55,33) in Fontenaisle.

- Sargi (1164), on guard, 10 high elves [HELF].
* Conenanus (1296), Gragblod (7), behind, revealing faction, holding,
  high elf [HELF], 258 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: entertainment [ENTE] 1 (30).
- Sargi (1634), on guard, 300 high elves [HELF], 85 swords [SWOR], 3
  horses [HORS], 58 chain armor [CARM].


plain (58,34) in Erisort, contains Dunhowestad [town], 1952 peasants
  (high elves), $13664.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $17 (Max: $6636).
  Wanted: 137 grain [GRAI] at $18, 136 livestock [LIVE] at $23, 15
    stone [STON] at $47, 99 fish [FISH] at $20, 9 chain armor [CARM]
    at $123.
  For Sale: 3 horses [HORS] at $80, 390 high elves [HELF] at $68, 78
    leaders [LEAD] at $136.
  Entertainment available: $683.
  Products: 76 livestock [LIVE], 26 horses [HORS].

Exits:
  North : plain (58,32) in Erisort, contains Awych [city].
  Northeast : plain (59,33) in Erisort.
  Southeast : ocean (59,35) in Atlantis Ocean.
  South : ocean (58,36) in Atlantis Ocean.
  Southwest : plain (57,35) in Erisort.
  Northwest : desert (57,33) in Baifelgris.

* Clemurius (1198), Gragblod (7), behind, revealing faction, holding,
  311 silver [SILV], nomad [NOMA], horse [HORS]. Weight: 60. Capacity:
  0/70/85/0. Skills: entertainment [ENTE] 1 (30).
- Vadonis (1720), leader [LEAD], sword [SWOR], horse [HORS].
- JASA (2073), 2 leaders [LEAD], 32 horses [HORS].
- Unit (1831), nomad [NOMA].


mountain (72,34) in Gededyki, 311 peasants (vikings), $622.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $12 (Max: $746).
  Wanted: none.
  For Sale: 62 vikings [VIKI] at $48, 12 leaders [LEAD] at $96.
  Entertainment available: $31.
  Products: 35 livestock [LIVE], 23 iron [IRON], 14 stone [STON].

Exits:
  North : ocean (72,32) in Atlantis Ocean.
  Northeast : mountain (73,33) in Gededyki.
  Southeast : mountain (73,35) in Gededyki.
  South : mountain (72,36) in Gededyki.
  Southwest : mountain (71,35) in Gededyki, contains Lei-neac [city].
  Northwest : ocean (71,33) in Atlantis Ocean.

* Unit (1136), Gragblod (7), revealing faction, 23 vikings [VIKI], 414
  silver [SILV]. Weight: 230. Capacity: 0/0/345/0. Skills: combat
  [COMB] 1 (53).
* Unit (2711), Gragblod (7), revealing faction, viking [VIKI], 18
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (2717), Gragblod (7), revealing faction, 24 silver [SILV],
  viking [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).


mountain (74,34) in Gededyki, contains Tinynt [city], 6644 peasants
  (orcs), $33220.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $15 (Max: $19932).
  Wanted: 152 grain [GRAI] at $27, 112 livestock [LIVE] at $21, 76
    longbows [LBOW] at $126, 51 pearls [PEAR] at $143, 74 jewelry
    [JEWE] at $135.
  For Sale: 75 iron [IRON] at $48, 78 stone [STON] at $45, 78 plate
    armor [PARM] at $482, 66 chocolate [CHOC] at $60, 75 vodka [VODK]
    at $68, 1328 orcs [ORC] at $60, 265 leaders [LEAD] at $120.
  Entertainment available: $1661.
  Products: 30 grain [GRAI], 34 iron [IRON], 18 stone [STON].

Exits:
  North : mountain (74,32) in Gededyki.
  Northeast : mountain (75,33) in Gededyki.
  Southeast : mountain (75,35) in Gededyki.
  South : mountain (74,36) in Gededyki.
  Southwest : mountain (73,35) in Gededyki.
  Northwest : mountain (73,33) in Gededyki.

- City Guard (76), on guard, 120 leaders [LEAD], 120 swords [SWOR].
* Unit (1226), Gragblod (7), revealing faction, 3 orcs [ORC], 210
  silver [SILV]. Weight: 30. Capacity: 0/0/45/0. Skills: entertainment
  [ENTE] 1 (30).
- Unit (1328), Multiple Bite Wounds (10), avoiding, orc [ORC].
* Unit (3039), Gragblod (7), revealing faction, 2 orcs [ORC], 90
  silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB]
  1 (30).
* Unit (2722), Gragblod (7), revealing faction, 43 silver [SILV], orc
  [ORC]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).


jungle (76,34) in Kuny, 169 peasants (wood elves), $338.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $12 (Max: $405).
  Wanted: none.
  For Sale: 33 wood elves [WELF] at $48, 6 leaders [LEAD] at $96.
  Entertainment available: $16.
  Products: 33 grain [GRAI], 17 wood [WOOD], 21 herbs [HERB].

Exits:
  North : ocean (76,32) in Atlantis Ocean.
  Northeast : ocean (77,33) in Atlantis Ocean.
  Southeast : jungle (77,35) in Kuny.
  South : jungle (76,36) in Kuny.
  Southwest : mountain (75,35) in Gededyki.
  Northwest : mountain (75,33) in Gededyki.

* Unit (1359), Gragblod (7), revealing faction, 7 wood elves [WELF],
  168 silver [SILV]. Weight: 70. Capacity: 0/0/105/0. Skills: combat
  [COMB] 1 (30).
* Unit (2865), Gragblod (7), revealing faction, 23 silver [SILV], wood
  elf [WELF]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
  (30).


plain (53,35) in Fontenaisle, contains Brimfinanfel [city], 4651
  peasants (vikings), $37208.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $18 (Max: $16743).
  Wanted: 198 grain [GRAI] at $26, 106 livestock [LIVE] at $27, 65
    stone [STON] at $50, 102 fish [FISH] at $18, 91 chain armor [CARM]
    at $119, 85 plate armor [PARM] at $464, 85 vodka [VODK] at $152,
    68 roses [ROSE] at $173.
  For Sale: 84 swords [SWOR] at $115, 77 wagons [WAGO] at $175, 66
    ivory [IVOR] at $60, 57 jewelry [JEWE] at $65, 930 vikings [VIKI]
    at $72, 186 leaders [LEAD] at $144.
  Entertainment available: $1860.
  Products: 79 livestock [LIVE], 27 horses [HORS].

Exits:
  North : ocean (53,33) in Atlantis Ocean.
  Northeast : plain (54,34) in Fontenaisle.
  Southeast : plain (54,36) in Fontenaisle, contains Sneyleeberg
    [city].
  South : jungle (53,37) in Emys'a.
  Southwest : ocean (52,36) in Atlantis Ocean.
  Northwest : plain (52,34) in Fontenaisle.

* Olcumor (1401), Gragblod (7), behind, revealing faction, holding,
  viking [VIKI], 226 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: entertainment [ENTE] 1 (30).
- Izluks (2105), plainsman [PLAI].
- Sargi (2106), on guard, 100 plainsmen [PLAI], 490 swords [SWOR], 390
  vikings [VIKI].
- TUVC (2564), 100 swords [SWOR], 100 leaders [LEAD].
- Verotajs (1352), leader [LEAD].


mountain (69,35) in Gededyki, 250 peasants (barbarians), $500.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $12 (Max: $600).
  Wanted: none.
  For Sale: 50 barbarians [BARB] at $48, 10 leaders [LEAD] at $96.
  Entertainment available: $25.
  Products: 22 grain [GRAI], 25 iron [IRON], 13 stone [STON].

Exits:
  North : ocean (69,33) in Atlantis Ocean.
  Northeast : ocean (70,34) in Atlantis Ocean.
  Southeast : mountain (70,36) in Gededyki.
  South : ocean (69,37) in Atlantis Ocean.
  Southwest : ocean (68,36) in Atlantis Ocean.
  Northwest : ocean (68,34) in Atlantis Ocean.

* Stradilio (1370), Gragblod (7), avoiding, revealing faction,
  receiving no aid, 10 vikings [VIKI], 220 silver [SILV]. Weight: 100.
  Capacity: 0/0/150/0. Skills: combat [COMB] 2 (150).
* Unit (3040), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 89 silver [SILV], 3 barbarians [BARB]. Weight: 30. Capacity:
  0/0/45/0. Skills: combat [COMB] 1 (30).


mountain (71,35) in Gededyki, contains Lei-neac [city], 6403 peasants
  (vikings), $44821.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $17 (Max: $21770).
  Wanted: 154 grain [GRAI] at $23, 130 livestock [LIVE] at $27, 152
    fish [FISH] at $21, 79 swords [SWOR] at $113, 55 crossbows [XBOW]
    at $116, 90 caviar [CAVI] at $159, 55 vodka [VODK] at $168.
  For Sale: 75 iron [IRON] at $48, 83 spices [SPIC] at $84, 54 silk
    [SILK] at $61, 1280 vikings [VIKI] at $68, 256 leaders [LEAD] at
    $136.
  Entertainment available: $2241.
  Products: 35 grain [GRAI], 30 iron [IRON], 16 stone [STON].

Exits:
  North : ocean (71,33) in Atlantis Ocean.
  Northeast : mountain (72,34) in Gededyki.
  Southeast : mountain (72,36) in Gededyki.
  South : mountain (71,37) in Gededyki.
  Southwest : mountain (70,36) in Gededyki.
  Northwest : ocean (70,34) in Atlantis Ocean.

- City Guard (80), on guard, 120 leaders [LEAD], 120 swords [SWOR].
* Saudeius (1524), Gragblod (7), avoiding, revealing faction, 2
  vikings [VIKI], 140 silver [SILV]. Weight: 20. Capacity: 0/0/30/0.
  Skills: entertainment [ENTE] 1 (30).
* Unit (3041), Gragblod (7), avoiding, revealing faction, viking
  [VIKI], 87 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
  entertainment [ENTE] 1 (30).
- Izluks (1472), high elf [HELF], horse [HORS].
* Unit (2727), Gragblod (7), avoiding, revealing faction, 83 silver
  [SILV], viking [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills:
  entertainment [ENTE] 1 (30).


mountain (73,35) in Gededyki, 360 peasants (hill dwarves), $720.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $12 (Max: $864).
  Wanted: none.
  For Sale: 72 hill dwarves [HDWA] at $48, 14 leaders [LEAD] at $96.
  Entertainment available: $36.
  Products: 20 grain [GRAI], 29 iron [IRON], 12 stone [STON].

Exits:
  North : mountain (73,33) in Gededyki.
  Northeast : mountain (74,34) in Gededyki, contains Tinynt [city].
  Southeast : mountain (74,36) in Gededyki.
  South : mountain (73,37) in Gededyki.
  Southwest : mountain (72,36) in Gededyki.
  Northwest : mountain (72,34) in Gededyki.

* Unit (1406), Gragblod (7), revealing faction, 10 hill dwarves
  [HDWA], 200 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
  combat [COMB] 2 (120).
* Unit (3091), Gragblod (7), revealing faction, hill dwarf [HDWA], 20
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (2715), Gragblod (7), revealing faction, 37 silver [SILV], hill
  dwarf [HDWA]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).


mountain (75,35) in Gededyki, 300 peasants (barbarians), $1200.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $840).
  Wanted: none.
  For Sale: 60 barbarians [BARB] at $56, 12 leaders [LEAD] at $112.
  Entertainment available: $60.
  Products: 34 grain [GRAI], 37 iron [IRON], 17 stone [STON].

Exits:
  North : mountain (75,33) in Gededyki.
  Northeast : jungle (76,34) in Kuny.
  Southeast : jungle (76,36) in Kuny.
  South : swamp (75,37) in Grimbad.
  Southwest : mountain (74,36) in Gededyki.
  Northwest : mountain (74,34) in Gededyki, contains Tinynt [city].

* Unit (2511), Gragblod (7), revealing faction, 766 silver [SILV], 10
  barbarians [BARB]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 2 (90).
* Unit (1449), Gragblod (7), revealing faction, 620 silver [SILV], 10
  barbarians [BARB]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 2 (90).
* Unit (2867), Gragblod (7), revealing faction, leader [LEAD], 147
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  4 (390).
* Unit (2868), Gragblod (7), revealing faction, 1270 silver [SILV], 10
  barbarians [BARB]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 2 (90).
* Unit (2869), Gragblod (7), revealing faction, 1272 silver [SILV], 10
  barbarians [BARB]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 2 (90).
* Unit (2870), Gragblod (7), revealing faction, 1512 silver [SILV], 10
  barbarians [BARB]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 1 (30).
* Unit (1103), Gragblod (7), revealing faction, 5 barbarians [BARB],
  33 hill dwarves [HDWA], 32 vikings [VIKI], 2216 silver [SILV].
  Weight: 700. Capacity: 0/0/1050/0. Skills: combat [COMB] 2 (117).
* Unit (2926), Gragblod (7), revealing faction, 10 leaders [LEAD], 392
  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
  [COMB] 4 (330).


jungle (77,35) in Kuny, 122 peasants (tribal elves), $244.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $12 (Max: $292).
  Wanted: none.
  For Sale: 24 tribal elves [TELF] at $48, 4 leaders [LEAD] at $96.
  Entertainment available: $12.
  Products: 38 livestock [LIVE], 13 wood [WOOD], 34 herbs [HERB].

Exits:
  North : ocean (77,33) in Atlantis Ocean.
  Northeast : ocean (78,34) in Atlantis Ocean.
  Southeast : jungle (78,36) in Kuny.
  South : jungle (77,37) in Kuny, contains Burdotn [city].
  Southwest : jungle (76,36) in Kuny.
  Northwest : jungle (76,34) in Kuny.

* Unit (1572), Gragblod (7), revealing faction, tribal elf [TELF], 40
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).


plain (54,36) in Fontenaisle, contains Sneyleeberg [city], 4846
  peasants (plainsmen), $33922.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $17 (Max: $16476).
  Wanted: 152 grain [GRAI] at $21, 184 livestock [LIVE] at $26, 94
    wood [WOOD] at $51, 72 longbows [LBOW] at $101, 70 wagons [WAGO]
    at $185, 96 tarot cards [TARO] at $173, 54 perfume [PERF] at $140.
  For Sale: 76 horses [HORS] at $55, 67 crossbows [XBOW] at $94, 99
    pearls [PEAR] at $70, 76 spices [SPIC] at $74, 969 plainsmen
    [PLAI] at $68, 193 leaders [LEAD] at $136.
  Entertainment available: $1696.
  Products: 68 livestock [LIVE], 35 horses [HORS].

Exits:
  North : plain (54,34) in Fontenaisle.
  Northeast : plain (55,35) in Fontenaisle.
  Southeast : jungle (55,37) in Emys'a.
  South : jungle (54,38) in Emys'a.
  Southwest : jungle (53,37) in Emys'a.
  Northwest : plain (53,35) in Fontenaisle, contains Brimfinanfel
    [city].

- Izlukss (1231), 3 plainsmen [PLAI].
- Sargi (1827), on guard, 700 plainsmen [PLAI], 2 horses [HORS], 43
  yew [YEW], 29 floater hides [FLOA], 32 swords [SWOR].
* Unit (1298), Gragblod (7), behind, revealing faction, holding,
  viking [VIKI], 197 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: entertainment [ENTE] 1 (30).
- ARBA (2565), 288 horses [HORS], 284 leaders [LEAD], 14 yew [YEW], 17
  floater hides [FLOA], 284 crossbows [XBOW].
- Verotajs (1428), leader [LEAD].


mountain (74,36) in Gededyki, 340 peasants (barbarians), $1360.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $952).
  Wanted: none.
  For Sale: 68 barbarians [BARB] at $56, 13 leaders [LEAD] at $112.
  Entertainment available: $68.
  Products: 32 livestock [LIVE], 36 iron [IRON], 15 stone [STON].

Exits:
  North : mountain (74,34) in Gededyki, contains Tinynt [city].
  Northeast : mountain (75,35) in Gededyki.
  Southeast : swamp (75,37) in Grimbad.
  South : mountain (74,38) in Gededyki.
  Southwest : mountain (73,37) in Gededyki.
  Northwest : mountain (73,35) in Gededyki.

* Unit (2051), Gragblod (7), avoiding, revealing faction, receiving no
  aid, barbarian [BARB], 36 silver [SILV]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).
* Unit (2835), Gragblod (7), avoiding, revealing faction, receiving no
  aid, barbarian [BARB], 32 silver [SILV]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


jungle (76,36) in Kuny, 132 peasants (tribal elves), $264.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $12 (Max: $316).
  Wanted: none.
  For Sale: 26 tribal elves [TELF] at $48, 5 leaders [LEAD] at $96.
  Entertainment available: $13.
  Products: 36 grain [GRAI], 19 wood [WOOD], 21 herbs [HERB].

Exits:
  North : jungle (76,34) in Kuny.
  Northeast : jungle (77,35) in Kuny.
  Southeast : jungle (77,37) in Kuny, contains Burdotn [city].
  South : swamp (76,38) in Grimbad.
  Southwest : swamp (75,37) in Grimbad.
  Northwest : mountain (75,35) in Gededyki.

* Unit (1135), Gragblod (7), revealing faction, 6 tribal elves [TELF],
  108 silver [SILV]. Weight: 60. Capacity: 0/0/90/0. Skills: combat
  [COMB] 1 (30).
* Unit (2933), Gragblod (7), revealing faction, tribal elf [TELF], 18
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Unit (2912), Gragblod (7), revealing faction, 17 silver [SILV],
  tribal elf [TELF]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
  [COMB] 1 (30).


mountain (61,37) in Scourie, contains Osray [city], 3776 peasants
  (orcs), $18880.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $15 (Max: $11328).
  Wanted: 138 grain [GRAI] at $21, 106 livestock [LIVE] at $23, 82
    wood [WOOD] at $54, 70 herbs [HERB] at $50, 55 horses [HORS] at
    $41, 62 swords [SWOR] at $95, 56 longbows [LBOW] at $99, 51
    truffles [TRUF] at $173, 56 wool [WOOL] at $159.
  For Sale: 82 stone [STON] at $59, 65 chain armor [CARM] at $119, 54
    plate armor [PARM] at $474, 62 jewelry [JEWE] at $82, 39 vodka
    [VODK] at $70, 755 orcs [ORC] at $60, 151 leaders [LEAD] at $120.
  Entertainment available: $944.
  Products: 25 grain [GRAI], 34 iron [IRON], 16 stone [STON].

Exits:
  North : mountain (61,35) in Scourie.
  Northeast : mountain (62,36) in Scourie.
  Southeast : mountain (62,38) in Scourie.
  South : desert (61,39) in Condorath.
  Southwest : mountain (60,38) in Scourie.
  Northwest : mountain (60,36) in Scourie.

- Sargs (1207), on guard, 619 orcs [ORC], wood [WOOD], wagon [WAGO], 9
  yew [YEW], roses [ROSE], 3 stone [STON], 3 horses [HORS], 2 perfume
  [PERF], 7 ironwood [IRWD], 16 swords [SWOR], 308 plate armor [PARM],
  311 chain armor [CARM].
* Minotrius (1201), Gragblod (7), behind, revealing faction, holding,
  plainsman [PLAI], 253 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: entertainment [ENTE] 1 (30).
- Vadoni (1901), 2 leaders [LEAD].
* Uccius (1244), Gragblod (7), behind, revealing faction, holding,
  tribesman [TMAN], 12 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).


mountain (73,37) in Gededyki, 377 peasants (barbarians), $1131.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $13 (Max: $980).
  Wanted: none.
  For Sale: 75 barbarians [BARB] at $52, 15 leaders [LEAD] at $104.
  Entertainment available: $56.
  Products: 21 grain [GRAI], 38 iron [IRON], 13 stone [STON].

Exits:
  North : mountain (73,35) in Gededyki.
  Northeast : mountain (74,36) in Gededyki.
  Southeast : mountain (74,38) in Gededyki.
  South : mountain (73,39) in Gededyki, contains Quiage [city].
  Southwest : mountain (72,38) in Gededyki.
  Northwest : mountain (72,36) in Gededyki.


+ Shaft [1] : Shaft, contains an inner location.
  * Unit (2050), Gragblod (7), avoiding, revealing faction, receiving
    no aid, hill dwarf [HDWA], 3 silver [SILV]. Weight: 10. Capacity:
    0/0/15/0. Skills: combat [COMB] 1 (30).
  * Unit (2878), Gragblod (7), avoiding, revealing faction, receiving
    no aid, 7 silver [SILV], barbarian [BARB]. Weight: 10. Capacity:
    0/0/15/0. Skills: combat [COMB] 1 (30).


swamp (75,37) in Grimbad, 162 peasants (tribal elves), $486.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $13 (Max: $421).
  Wanted: none.
  For Sale: 32 tribal elves [TELF] at $52, 6 leaders [LEAD] at $104.
  Entertainment available: $24.
  Products: 14 livestock [LIVE], 15 wood [WOOD], 10 herbs [HERB].

Exits:
  North : mountain (75,35) in Gededyki.
  Northeast : jungle (76,36) in Kuny.
  Southeast : swamp (76,38) in Grimbad.
  South : swamp (75,39) in Grimbad.
  Southwest : mountain (74,38) in Gededyki.
  Northwest : mountain (74,36) in Gededyki.

* Unit (1623), Gragblod (7), revealing faction, tribal elf [TELF], 63
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).


jungle (77,37) in Kuny, contains Burdotn [city], 5480 peasants (tribal
  elves), $27400.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $15 (Max: $16440).
  Wanted: 148 grain [GRAI] at $26, 104 livestock [LIVE] at $24, 77
    plate armor [PARM] at $381, 94 truffles [TRUF] at $132, 61
    cashmere [CASH] at $164.
  For Sale: 62 ivory [IVOR] at $60, 74 pearls [PEAR] at $85, 1096
    tribal elves [TELF] at $60, 219 leaders [LEAD] at $120.
  Entertainment available: $1370.
  Products: 30 livestock [LIVE], 11 wood [WOOD], 35 herbs [HERB].

Exits:
  North : jungle (77,35) in Kuny.
  Northeast : jungle (78,36) in Kuny.
  Southeast : jungle (78,38) in Kuny.
  South : jungle (77,39) in Kuny.
  Southwest : swamp (76,38) in Grimbad.
  Northwest : jungle (76,36) in Kuny.

- City Guard (85), on guard, 120 leaders [LEAD], 120 swords [SWOR].
* Unit (2005), Gragblod (7), revealing faction, tribal elf [TELF], 55
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).
* Vilvius (1450), Gragblod (7), revealing faction, 38 orcs [ORC], 2090
  silver [SILV]. Weight: 380. Capacity: 0/0/570/0. Skills: combat
  [COMB] 1 (60).
* Unit (1163), Gragblod (7), revealing faction, 16 tribal elves
  [TELF], 1360 silver [SILV]. Weight: 160. Capacity: 0/0/240/0.
  Skills: entertainment [ENTE] 1 (30).
- Izluks (1997), Multiple Bite Wounds (10), avoiding, tribal elf
  [TELF], horse [HORS].


mountain (70,38) in Gededyki, 215 peasants (orcs), $860.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $602).
  Wanted: none.
  For Sale: 43 orcs [ORC] at $56, 8 leaders [LEAD] at $112.
  Entertainment available: $43.
  Products: 38 livestock [LIVE], 26 iron [IRON], 15 stone [STON].

Exits:
  North : mountain (70,36) in Gededyki.
  Northeast : mountain (71,37) in Gededyki.
  Southeast : mountain (71,39) in Gededyki.
  South : ocean (70,40) in Atlantis Ocean.
  Southwest : ocean (69,39) in Atlantis Ocean.
  Northwest : ocean (69,37) in Atlantis Ocean.

* Unit (2064), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 10 orcs [ORC], 400 silver [SILV]. Weight: 100. Capacity:
  0/0/150/0. Skills: combat [COMB] 2 (90).
* Unit (2747), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 40 silver [SILV], orc [ORC]. Weight: 10. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).


mountain (74,38) in Gededyki, 225 peasants (hill dwarves), $675.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $13 (Max: $585).
  Wanted: none.
  For Sale: 45 hill dwarves [HDWA] at $52, 9 leaders [LEAD] at $104.
  Entertainment available: $33.
  Products: 39 grain [GRAI], 39 iron [IRON], 16 stone [STON].

Exits:
  North : mountain (74,36) in Gededyki.
  Northeast : swamp (75,37) in Grimbad.
  Southeast : swamp (75,39) in Grimbad.
  South : swamp (74,40) in Grimbad.
  Southwest : mountain (73,39) in Gededyki, contains Quiage [city].
  Northwest : mountain (73,37) in Gededyki.

* Unit (1809), Gragblod (7), avoiding, revealing faction, receiving no
  aid, tribesman [TMAN], 73 silver [SILV]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


swamp (76,38) in Grimbad, 182 peasants (tribesmen), $182.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $11 (Max: $400).
  Wanted: none.
  For Sale: 36 tribesmen [TMAN] at $44, 7 leaders [LEAD] at $88.
  Entertainment available: $9.
  Products: 19 grain [GRAI], 13 wood [WOOD], 14 herbs [HERB].

Exits:
  North : jungle (76,36) in Kuny.
  Northeast : jungle (77,37) in Kuny, contains Burdotn [city].
  Southeast : jungle (77,39) in Kuny.
  South : swamp (76,40) in Grimbad.
  Southwest : swamp (75,39) in Grimbad.
  Northwest : swamp (75,37) in Grimbad.

* Unit (1702), Gragblod (7), revealing faction, tribesman [TMAN], 31
  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
  1 (30).


jungle (78,38) in Kuny, 179 peasants (tribal elves), $179.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $11 (Max: $393).
  Wanted: none.
  For Sale: 35 tribal elves [TELF] at $44, 7 leaders [LEAD] at $88.
  Entertainment available: $8.
  Products: 33 grain [GRAI], 14 wood [WOOD], 21 herbs [HERB].

Exits:
  North : jungle (78,36) in Kuny.
  Northeast : jungle (79,37) in Kuny.
  Southeast : ocean (79,39) in Atlantis Ocean.
  South : ocean (78,40) in Atlantis Ocean.
  Southwest : jungle (77,39) in Kuny.
  Northwest : jungle (77,37) in Kuny, contains Burdotn [city].

* Unit (2019), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 46 silver [SILV], tribal elf [TELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).
* Unit (1573), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 18 silver [SILV], sea elf [SELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


jungle (59,39) in Reilgris, contains Rakhat [town], 2007 peasants
  (tribal elves), $6021.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $13 (Max: $5218).
  Wanted: 162 grain [GRAI] at $23, 172 livestock [LIVE] at $26, 106
    fish [FISH] at $21, 27 chain armor [CARM] at $126, 21 plate armor
    [PARM] at $438, velvet [VELV] at $144.
  For Sale: 24 wood [WOOD] at $59, 19 herbs [HERB] at $55, 2 swords
    [SWOR] at $97, 401 tribal elves [TELF] at $52, 80 leaders [LEAD]
    at $104.
  Entertainment available: $301.
  Products: 39 livestock [LIVE], 13 wood [WOOD], 36 herbs [HERB].

Exits:
  North : ocean (59,37) in Atlantis Ocean.
  Northeast : mountain (60,38) in Scourie.
  Southeast : desert (60,40) in Condorath.
  South : jungle (59,41) in Reilgris.
  Southwest : jungle (58,40) in Reilgris.
  Northwest : ocean (58,38) in Atlantis Ocean.

- City Guard (93), on guard, 80 leaders [LEAD], 80 swords [SWOR].
- Izluks (1403), 2 tribal elves [TELF].
* Bacanius (1044), Gragblod (7), behind, revealing faction, holding,
  viking [VIKI], 165 silver [SILV], tribal elf [TELF]. Weight: 20.
  Capacity: 0/0/30/0. Skills: combat [COMB] 0 (15).


mountain (71,39) in Gededyki, 343 peasants (vikings), $1372.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $960).
  Wanted: none.
  For Sale: 68 vikings [VIKI] at $56, 13 leaders [LEAD] at $112.
  Entertainment available: $68.
  Products: 23 livestock [LIVE], 38 iron [IRON], 15 stone [STON].

Exits:
  North : mountain (71,37) in Gededyki.
  Northeast : mountain (72,38) in Gededyki.
  Southeast : mountain (72,40) in Gededyki, contains Nugm [town].
  South : mountain (71,41) in Gededyki.
  Southwest : ocean (70,40) in Atlantis Ocean.
  Northwest : mountain (70,38) in Gededyki.

* Unit (1535), Gragblod (7), avoiding, revealing faction, receiving no
  aid, viking [VIKI], 92 silver [SILV]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


mountain (73,39) in Gededyki, contains Quiage [city], 6162 peasants
  (hill dwarves), $30810.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $15 (Max: $18486).
  Wanted: 140 grain [GRAI] at $20, 112 livestock [LIVE] at $27, 92
    wood [WOOD] at $59, 52 herbs [HERB] at $56, 72 swords [SWOR] at
    $114, 95 longbows [LBOW] at $101, 87 chain armor [CARM] at $128,
    92 pearls [PEAR] at $149, 65 figurines [FIGU] at $173.
  For Sale: 66 iron [IRON] at $56, 96 truffles [TRUF] at $73, 67
    cashmere [CASH] at $86, 1232 hill dwarves [HDWA] at $60, 246
    leaders [LEAD] at $120.
  Entertainment available: $1540.
  Products: 20 livestock [LIVE], 22 iron [IRON], 17 stone [STON].

Exits:
  North : mountain (73,37) in Gededyki.
  Northeast : mountain (74,38) in Gededyki.
  Southeast : swamp (74,40) in Grimbad.
  South : mountain (73,41) in Gededyki.
  Southwest : mountain (72,40) in Gededyki, contains Nugm [town].
  Northwest : mountain (72,38) in Gededyki.

- City Guard (94), on guard, 120 leaders [LEAD], 120 swords [SWOR].
* Unit (2053), Gragblod (7), avoiding, revealing faction, orc [ORC],
  105 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
  [COMB] 1 (30).


swamp (75,39) in Grimbad, 111 peasants (tribal elves), $333.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $13 (Max: $288).
  Wanted: none.
  For Sale: 22 tribal elves [TELF] at $52, 4 leaders [LEAD] at $104.
  Entertainment available: $16.
  Products: 16 livestock [LIVE], 13 wood [WOOD], 19 herbs [HERB].

Exits:
  North : swamp (75,37) in Grimbad.
  Northeast : swamp (76,38) in Grimbad.
  Southeast : swamp (76,40) in Grimbad.
  South : swamp (75,41) in Grimbad.
  Southwest : swamp (74,40) in Grimbad.
  Northwest : mountain (74,38) in Gededyki.

* Vabinius (1443), Gragblod (7), avoiding, revealing faction,
  receiving no aid, 2 tribesmen [TMAN], 122 silver [SILV]. Weight: 20.
  Capacity: 0/0/30/0. Skills: combat [COMB] 1 (30).


jungle (77,39) in Kuny, 167 peasants (tribal elves), $334.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $12 (Max: $400).
  Wanted: none.
  For Sale: 33 tribal elves [TELF] at $48, 6 leaders [LEAD] at $96.
  Entertainment available: $16.
  Products: 35 grain [GRAI], 11 wood [WOOD], 32 herbs [HERB].

Exits:
  North : jungle (77,37) in Kuny, contains Burdotn [city].
  Northeast : jungle (78,38) in Kuny.
  Southeast : ocean (78,40) in Atlantis Ocean.
  South : ocean (77,41) in Atlantis Ocean.
  Southwest : swamp (76,40) in Grimbad.
  Northwest : swamp (76,38) in Grimbad.

* Unit (2067), Gragblod (7), avoiding, revealing faction, receiving no
  aid, tribesman [TMAN], 120 silver [SILV]. Weight: 10. Capacity:
  0/0/15/0. Skills: entertainment [ENTE] 1 (30).


mountain (72,40) in Gededyki, contains Nugm [town], 1509 peasants
  (hill dwarves), $9054.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $16 (Max: $4828).
  Wanted: 155 grain [GRAI] at $23, 101 livestock [LIVE] at $23, 13
    horses [HORS] at $54, 11 crossbows [XBOW] at $108.
  For Sale: 301 hill dwarves [HDWA] at $64, 60 leaders [LEAD] at $128.
  Entertainment available: $452.
  Products: 26 grain [GRAI], 22 iron [IRON], 11 stone [STON].

Exits:
  North : mountain (72,38) in Gededyki.
  Northeast : mountain (73,39) in Gededyki, contains Quiage [city].
  Southeast : mountain (73,41) in Gededyki.
  South : mountain (72,42) in Gededyki.
  Southwest : mountain (71,41) in Gededyki.
  Northwest : mountain (71,39) in Gededyki.

- City Guard (98), on guard, 80 leaders [LEAD], 80 swords [SWOR].
* Portia (1464), Gragblod (7), avoiding, revealing faction, 5
  barbarians [BARB], 300 silver [SILV]. Weight: 50. Capacity:
  0/0/75/0. Skills: combat [COMB] 1 (30).
* Unit (1820), Gragblod (7), avoiding, revealing faction, hill dwarf
  [HDWA], 96 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
  entertainment [ENTE] 1 (30).
* Unit (1466), Gragblod (7), avoiding, revealing faction, 7 hill
  dwarves [HDWA], 431 silver [SILV]. Weight: 70. Capacity: 0/0/105/0.
  Skills: combat [COMB] 1 (30).


swamp (76,40) in Grimbad, 160 peasants (tribesmen), $160.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $11 (Max: $352).
  Wanted: none.
  For Sale: 32 tribesmen [TMAN] at $44, 6 leaders [LEAD] at $88.
  Entertainment available: $8.
  Products: 19 grain [GRAI], 14 wood [WOOD], 14 herbs [HERB].

Exits:
  North : swamp (76,38) in Grimbad.
  Northeast : jungle (77,39) in Kuny.
  Southeast : ocean (77,41) in Atlantis Ocean.
  South : ocean (76,42) in Atlantis Ocean.
  Southwest : swamp (75,41) in Grimbad.
  Northwest : swamp (75,39) in Grimbad.

* Unit (2068), Gragblod (7), avoiding, revealing faction, receiving no
  aid, tribesman [TMAN], 15 silver [SILV]. Weight: 10. Capacity:
  0/0/15/0. Skills: entertainment [ENTE] 1 (30).


plain (69,41) in Loras, contains Busst [city], 5951 peasants
  (vikings), $41657.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $17 (Max: $20233).
  Wanted: 142 grain [GRAI] at $26, 104 livestock [LIVE] at $18, 84
    stone [STON] at $45, 176 fish [FISH] at $18, 75 plate armor [PARM]
    at $438, 79 pearls [PEAR] at $141, 77 dye [DYE] at $155.
  For Sale: 89 horses [HORS] at $48, 78 wine [WINE] at $68, 60
    cashmere [CASH] at $79, 1190 vikings [VIKI] at $68, 238 leaders
    [LEAD] at $136.
  Entertainment available: $2082.
  Products: 42 livestock [LIVE], 37 horses [HORS].

Exits:
  North : ocean (69,39) in Atlantis Ocean.
  Northeast : ocean (70,40) in Atlantis Ocean.
  Southeast : plain (70,42) in Loras.
  South : plain (69,43) in Loras.
  Southwest : plain (68,42) in Loras.
  Northwest : ocean (68,40) in Atlantis Ocean.

- City Guard (101), on guard, 120 leaders [LEAD], 120 swords [SWOR].
* Unit (1281), Gragblod (7), avoiding, revealing faction, viking
  [VIKI], 107 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
  entertainment [ENTE] 1 (30).
* Unit (3108), Gragblod (7), avoiding, revealing faction, 99 silver
  [SILV], viking [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills:
  entertainment [ENTE] 1 (30).


mountain (71,41) in Gededyki, 247 peasants (sea elves), $988.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $691).
  Wanted: none.
  For Sale: 49 sea elves [SELF] at $56, 9 leaders [LEAD] at $112.
  Entertainment available: $49.
  Products: 22 grain [GRAI], 21 iron [IRON], 19 stone [STON].

Exits:
  North : mountain (71,39) in Gededyki.
  Northeast : mountain (72,40) in Gededyki, contains Nugm [town].
  Southeast : mountain (72,42) in Gededyki.
  South : plain (71,43) in Loras.
  Southwest : plain (70,42) in Loras.
  Northwest : ocean (70,40) in Atlantis Ocean.

* Unit (1625), Gragblod (7), avoiding, revealing faction, receiving no
  aid, sea elf [SELF], 80 silver [SILV]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


mountain (73,41) in Gededyki, 319 peasants (vikings), $638.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $12 (Max: $765).
  Wanted: none.
  For Sale: 63 vikings [VIKI] at $48, 12 leaders [LEAD] at $96.
  Entertainment available: $31.
  Products: 32 livestock [LIVE], 20 iron [IRON], 17 stone [STON].

Exits:
  North : mountain (73,39) in Gededyki, contains Quiage [city].
  Northeast : swamp (74,40) in Grimbad.
  Southeast : ocean (74,42) in Atlantis Ocean.
  South : mountain (73,43) in Gededyki.
  Southwest : mountain (72,42) in Gededyki.
  Northwest : mountain (72,40) in Gededyki, contains Nugm [town].

* Unit (1484), Gragblod (7), avoiding, behind, revealing faction,
  receiving no aid, 42 silver [SILV], viking [VIKI]. Weight: 10.
  Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).


plain (64,42) in Lilois, contains Cochtai [city], 5327 peasants
  (plainsmen), $47943.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $19 (Max: $20242).
  Wanted: 152 grain [GRAI] at $21, 198 livestock [LIVE] at $24, 184
    fish [FISH] at $26, 56 herbs [HERB] at $42, 86 swords [SWOR] at
    $90, 93 chain armor [CARM] at $128, 99 perfume [PERF] at $141, 86
    dye [DYE] at $174.
  For Sale: 75 horses [HORS] at $58, 71 roses [ROSE] at $69, 94 cotton
    [COTT] at $84, 1065 plainsmen [PLAI] at $76, 213 leaders [LEAD] at
    $152.
  Entertainment available: $2397.
  Products: 72 livestock [LIVE], 29 horses [HORS].

Exits:
  North : ocean (64,40) in Atlantis Ocean.
  Northeast : plain (65,41) in Lilois.
  Southeast : ocean (65,43) in Atlantis Ocean.
  South : ocean (64,44) in Atlantis Ocean.
  Southwest : ocean (63,43) in Atlantis Ocean.
  Northwest : ocean (63,41) in Atlantis Ocean.

- City Guard (104), on guard, 120 leaders [LEAD], 120 swords [SWOR].
* Unit (2562), Gragblod (7), avoiding, revealing faction, 147 silver
  [SILV], sea elf [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
  combat [COMB] 1 (30).


plain (66,42) in Lilois, contains Lotholmar [city], 7009 peasants
  (nomads), $56072.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $18 (Max: $25232).
  Wanted: 136 grain [GRAI] at $27, 170 livestock [LIVE] at $21, 85
    iron [IRON] at $57, 160 fish [FISH] at $21, 84 swords [SWOR] at
    $126, 62 crossbows [XBOW] at $113, 63 longbows [LBOW] at $105, 62
    chain armor [CARM] at $111, 56 plate armor [PARM] at $431, 80
    pearls [PEAR] at $140, 59 wine [WINE] at $150.
  For Sale: 60 wagons [WAGO] at $164, 82 jewelry [JEWE] at $81, 62
    wool [WOOL] at $62, 1401 nomads [NOMA] at $72, 280 leaders [LEAD]
    at $144.
  Entertainment available: $2803.
  Products: 46 livestock [LIVE], 39 horses [HORS].

Exits:
  North : plain (66,40) in Lilois.
  Northeast : ocean (67,41) in Atlantis Ocean.
  Southeast : plain (67,43) in Loras.
  South : plain (66,44) in Lilois, contains Tar-dor [city].
  Southwest : ocean (65,43) in Atlantis Ocean.
  Northwest : plain (65,41) in Lilois.

- City Guard (105), on guard, 120 leaders [LEAD], 120 swords [SWOR].
* Unit (2561), Gragblod (7), avoiding, revealing faction, sea elf
  [SELF], 112 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
  combat [COMB] 1 (30).


plain (68,42) in Loras, 612 peasants (sea elves), $3060.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $15 (Max: $1836).
  Wanted: none.
  For Sale: 122 sea elves [SELF] at $60, 24 leaders [LEAD] at $120.
  Entertainment available: $153.
  Products: 50 grain [GRAI], 32 horses [HORS].

Exits:
  North : ocean (68,40) in Atlantis Ocean.
  Northeast : plain (69,41) in Loras, contains Busst [city].
  Southeast : plain (69,43) in Loras.
  South : plain (68,44) in Loras.
  Southwest : plain (67,43) in Loras.
  Northwest : ocean (67,41) in Atlantis Ocean.

* Unit (2553), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 105 silver [SILV], sea elf [SELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


plain (70,42) in Loras, 778 peasants (high elves), $3890.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $15 (Max: $2334).
  Wanted: none.
  For Sale: 155 high elves [HELF] at $60, 31 leaders [LEAD] at $120.
  Entertainment available: $194.
  Products: 41 livestock [LIVE], 21 horses [HORS].

Exits:
  North : ocean (70,40) in Atlantis Ocean.
  Northeast : mountain (71,41) in Gededyki.
  Southeast : plain (71,43) in Loras.
  South : plain (70,44) in Loras, contains Tinien'nt [city].
  Southwest : plain (69,43) in Loras.
  Northwest : plain (69,41) in Loras, contains Busst [city].

* Unit (1518), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 115 silver [SILV], high elf [HELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


mountain (72,42) in Gededyki, 207 peasants (hill dwarves), $414.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $12 (Max: $496).
  Wanted: none.
  For Sale: 41 hill dwarves [HDWA] at $48, 8 leaders [LEAD] at $96.
  Entertainment available: $20.
  Products: 21 livestock [LIVE], 37 iron [IRON], 12 stone [STON].

Exits:
  North : mountain (72,40) in Gededyki, contains Nugm [town].
  Northeast : mountain (73,41) in Gededyki.
  Southeast : mountain (73,43) in Gededyki.
  South : plain (72,44) in Loras.
  Southwest : plain (71,43) in Loras.
  Northwest : mountain (71,41) in Gededyki.

* Unit (1632), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 48 silver [SILV], sea elf [SELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


jungle (59,43) in Reilgris, contains Mundholm [village], 962 peasants
  (tribesmen), $1924.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $12 (Max: $2308).
  Wanted: 118 grain [GRAI] at $18, 118 livestock [LIVE] at $20.
  For Sale: 192 tribesmen [TMAN] at $48, 38 leaders [LEAD] at $96.
  Entertainment available: $96.
  Products: 28 grain [GRAI], 19 wood [WOOD], 23 herbs [HERB].

Exits:
  North : jungle (59,41) in Reilgris.
  Northeast : desert (60,42) in Condorath.
  Southeast : desert (60,44) in Condorath.
  South : desert (59,45) in Condorath.
  Southwest : jungle (58,44) in Reilgris.
  Northwest : jungle (58,42) in Reilgris.

- City Guard (109), on guard, 40 leaders [LEAD], 40 swords [SWOR].
* Esdrifus (1570), Gragblod (7), behind, revealing faction, holding, 3
  tribesmen [TMAN], 474 silver [SILV]. Weight: 30. Capacity: 0/0/45/0.
  Skills: entertainment [ENTE] 1 (30).
* Unit (1994), Gragblod (7), behind, revealing faction, holding,
  desert dwarf [DDWA], 29 silver [SILV]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).
- Izluks (1190), tribesman [TMAN].


plain (67,43) in Loras, 658 peasants (nomads), $2632.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $1842).
  Wanted: none.
  For Sale: 131 nomads [NOMA] at $56, 26 leaders [LEAD] at $112.
  Entertainment available: $131.
  Products: 55 livestock [LIVE], 30 horses [HORS].

Exits:
  North : ocean (67,41) in Atlantis Ocean.
  Northeast : plain (68,42) in Loras.
  Southeast : plain (68,44) in Loras.
  South : plain (67,45) in Loras.
  Southwest : plain (66,44) in Lilois, contains Tar-dor [city].
  Northwest : plain (66,42) in Lilois, contains Lotholmar [city].

* Unit (2555), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 76 silver [SILV], sea elf [SELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


plain (69,43) in Loras, 653 peasants (high elves), $3918.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $16 (Max: $2089).
  Wanted: none.
  For Sale: 130 high elves [HELF] at $64, 26 leaders [LEAD] at $128.
  Entertainment available: $195.
  Products: 69 livestock [LIVE], 22 horses [HORS].

Exits:
  North : plain (69,41) in Loras, contains Busst [city].
  Northeast : plain (70,42) in Loras.
  Southeast : plain (70,44) in Loras, contains Tinien'nt [city].
  South : plain (69,45) in Loras.
  Southwest : plain (68,44) in Loras.
  Northwest : plain (68,42) in Loras.

* Unit (2552), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 106 silver [SILV], sea elf [SELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


plain (71,43) in Loras, 714 peasants (vikings), $3570.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $15 (Max: $2142).
  Wanted: none.
  For Sale: 142 vikings [VIKI] at $60, 28 leaders [LEAD] at $120.
  Entertainment available: $178.
  Products: 58 livestock [LIVE], 38 horses [HORS].

Exits:
  North : mountain (71,41) in Gededyki.
  Northeast : mountain (72,42) in Gededyki.
  Southeast : plain (72,44) in Loras.
  South : ocean (71,45) in Atlantis Ocean.
  Southwest : plain (70,44) in Loras, contains Tinien'nt [city].
  Northwest : plain (70,42) in Loras.

* Unit (1645), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 105 silver [SILV], sea elf [SELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


mountain (73,43) in Gededyki, 322 peasants (sea elves), $644.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $12 (Max: $772).
  Wanted: none.
  For Sale: 64 sea elves [SELF] at $48, 12 leaders [LEAD] at $96.
  Entertainment available: $32.
  Products: 37 livestock [LIVE], 21 iron [IRON], 16 stone [STON].

Exits:
  North : mountain (73,41) in Gededyki.
  Northeast : ocean (74,42) in Atlantis Ocean.
  Southeast : ocean (74,44) in Atlantis Ocean.
  South : ocean (73,45) in Atlantis Ocean.
  Southwest : plain (72,44) in Loras.
  Northwest : mountain (72,42) in Gededyki.

* Unit (2871), Gragblod (7), avoiding, behind, revealing faction,
  receiving no aid, 48 silver [SILV], sea elf [SELF]. Weight: 10.
  Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
- Mini (2389), New Horizons (16), avoiding, behind, leader [LEAD], 2
  winged horses [WING].


plain (66,44) in Lilois, contains Tar-dor [city], 4683 peasants
  (plainsmen), $32781.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $17 (Max: $15922).
  Wanted: 182 grain [GRAI] at $21, 104 livestock [LIVE] at $27, 152
    fish [FISH] at $27, 54 longbows [LBOW] at $105, 61 chain armor
    [CARM] at $90, 77 tarot cards [TARO] at $143, 74 chocolate [CHOC]
    at $134.
  For Sale: 59 plate armor [PARM] at $390, 49 mink [MINK] at $63, 63
    cashmere [CASH] at $66, 936 plainsmen [PLAI] at $68, 187 leaders
    [LEAD] at $136.
  Entertainment available: $1639.
  Products: 63 livestock [LIVE], 27 horses [HORS].

Exits:
  North : plain (66,42) in Lilois, contains Lotholmar [city].
  Northeast : plain (67,43) in Loras.
  Southeast : plain (67,45) in Loras.
  South : plain (66,46) in Lilois.
  Southwest : plain (65,45) in Lilois.
  Northwest : ocean (65,43) in Atlantis Ocean.

- City Guard (113), on guard, 120 leaders [LEAD], 120 swords [SWOR].
* Unit (2560), Gragblod (7), avoiding, revealing faction, 118 silver
  [SILV], sea elf [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
  combat [COMB] 1 (30).
- Izluks (2009), high elf [HELF].


plain (68,44) in Loras, 674 peasants (high elves), $4044.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $16 (Max: $2156).
  Wanted: none.
  For Sale: 134 high elves [HELF] at $64, 26 leaders [LEAD] at $128.
  Entertainment available: $202.
  Products: 49 grain [GRAI], 36 horses [HORS].

Exits:
  North : plain (68,42) in Loras.
  Northeast : plain (69,43) in Loras.
  Southeast : plain (69,45) in Loras.
  South : plain (68,46) in Loras.
  Southwest : plain (67,45) in Loras.
  Northwest : plain (67,43) in Loras.

* Unit (1527), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 110 silver [SILV], plainsman [PLAI]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


plain (70,44) in Loras, contains Tinien'nt [city], 6457 peasants
  (vikings), $51656.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $18 (Max: $23245).
  Wanted: 164 grain [GRAI] at $20, 128 livestock [LIVE] at $23, 122
    fish [FISH] at $21, 67 swords [SWOR] at $116, 86 chain armor
    [CARM] at $90, 54 wagons [WAGO] at $174, 65 spices [SPIC] at $158,
    73 cotton [COTT] at $144.
  For Sale: 59 horses [HORS] at $53, 92 crossbows [XBOW] at $109, 85
    longbows [LBOW] at $102, 66 figurines [FIGU] at $84, 61 wool
    [WOOL] at $82, 1291 vikings [VIKI] at $72, 258 leaders [LEAD] at
    $144.
  Entertainment available: $2582.
  Products: 48 livestock [LIVE], 29 horses [HORS].

Exits:
  North : plain (70,42) in Loras.
  Northeast : plain (71,43) in Loras.
  Southeast : ocean (71,45) in Atlantis Ocean.
  South : ocean (70,46) in Atlantis Ocean.
  Southwest : plain (69,45) in Loras.
  Northwest : plain (69,43) in Loras.

- City Guard (114), on guard, 120 leaders [LEAD], 120 swords [SWOR].
* Unit (1696), Gragblod (7), avoiding, revealing faction, 2 sea elves
  [SELF], 192 silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills:
  combat [COMB] 1 (30).
* Unit (3015), Gragblod (7), avoiding, revealing faction, 115 silver
  [SILV], viking [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills:
  combat [COMB] 1 (30).


plain (72,44) in Loras, 679 peasants (nomads), $3395.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $15 (Max: $2037).
  Wanted: none.
  For Sale: 135 nomads [NOMA] at $60, 27 leaders [LEAD] at $120.
  Entertainment available: $169.
  Products: 59 grain [GRAI], 21 horses [HORS].

Exits:
  North : mountain (72,42) in Gededyki.
  Northeast : mountain (73,43) in Gededyki.
  Southeast : ocean (73,45) in Atlantis Ocean.
  South : ocean (72,46) in Atlantis Ocean.
  Southwest : ocean (71,45) in Atlantis Ocean.
  Northwest : plain (71,43) in Loras.

* Unit (1868), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 115 silver [SILV], sea elf [SELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


plain (67,45) in Loras, 674 peasants (plainsmen), $2696.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $1887).
  Wanted: none.
  For Sale: 134 plainsmen [PLAI] at $56, 26 leaders [LEAD] at $112.
  Entertainment available: $134.
  Products: 52 livestock [LIVE], 37 horses [HORS].

Exits:
  North : plain (67,43) in Loras.
  Northeast : plain (68,44) in Loras.
  Southeast : plain (68,46) in Loras.
  South : plain (67,47) in Lilois.
  Southwest : plain (66,46) in Lilois.
  Northwest : plain (66,44) in Lilois, contains Tar-dor [city].

* Unit (1646), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 94 silver [SILV], plainsman [PLAI]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


plain (66,46) in Lilois, 785 peasants (high elves), $3925.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $15 (Max: $2355).
  Wanted: none.
  For Sale: 157 high elves [HELF] at $60, 31 leaders [LEAD] at $120.
  Entertainment available: $196.
  Products: 40 livestock [LIVE], 32 horses [HORS].

Exits:
  North : plain (66,44) in Lilois, contains Tar-dor [city].
  Northeast : plain (67,45) in Loras.
  Southeast : plain (67,47) in Lilois.
  South : plain (66,48) in Lilois, contains Asyust [city].
  Southwest : plain (65,47) in Lilois.
  Northwest : plain (65,45) in Lilois.

* Unit (2557), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 75 silver [SILV], sea elf [SELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


plain (68,46) in Loras, 609 peasants (vikings), $3045.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $15 (Max: $1827).
  Wanted: none.
  For Sale: 121 vikings [VIKI] at $60, 24 leaders [LEAD] at $120.
  Entertainment available: $152.
  Products: 51 grain [GRAI], 26 horses [HORS].

Exits:
  North : plain (68,44) in Loras.
  Northeast : plain (69,45) in Loras.
  Southeast : ocean (69,47) in Atlantis Ocean.
  South : plain (68,48) in Murom.
  Southwest : plain (67,47) in Lilois.
  Northwest : plain (67,45) in Loras.

* Unit (2554), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 75 silver [SILV], sea elf [SELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


plain (65,47) in Lilois, 608 peasants (plainsmen), $3040.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $15 (Max: $1824).
  Wanted: none.
  For Sale: 121 plainsmen [PLAI] at $60, 24 leaders [LEAD] at $120.
  Entertainment available: $152.
  Products: 52 grain [GRAI], 33 horses [HORS].

Exits:
  North : plain (65,45) in Lilois.
  Northeast : plain (66,46) in Lilois.
  Southeast : plain (66,48) in Lilois, contains Asyust [city].
  South : plain (65,49) in Lilois.
  Southwest : ocean (64,48) in Atlantis Ocean.
  Northwest : ocean (64,46) in Atlantis Ocean.

* Unit (2556), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 75 silver [SILV], sea elf [SELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


plain (67,47) in Lilois, 523 peasants (sea elves), $3138.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $16 (Max: $1673).
  Wanted: none.
  For Sale: 104 sea elves [SELF] at $64, 20 leaders [LEAD] at $128.
  Entertainment available: $156.
  Products: 73 livestock [LIVE], 39 horses [HORS].

Exits:
  North : plain (67,45) in Loras.
  Northeast : plain (68,46) in Loras.
  Southeast : plain (68,48) in Murom.
  South : ocean (67,49) in Atlantis Ocean.
  Southwest : plain (66,48) in Lilois, contains Asyust [city].
  Northwest : plain (66,46) in Lilois.

* Unit (2559), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 88 silver [SILV], sea elf [SELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


plain (66,48) in Lilois, contains Asyust [city], 6015 peasants
  (vikings), $54135.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $19 (Max: $22857).
  Wanted: 102 grain [GRAI] at $27, 126 livestock [LIVE] at $18, 144
    fish [FISH] at $24, 67 plate armor [PARM] at $416, 90 wagons
    [WAGO] at $167, 70 pearls [PEAR] at $131, 61 caviar [CAVI] at
    $171.
  For Sale: 86 horses [HORS] at $46, 50 wine [WINE] at $72, 72 velvet
    [VELV] at $63, 1203 vikings [VIKI] at $76, 240 leaders [LEAD] at
    $152.
  Entertainment available: $2706.
  Products: 61 livestock [LIVE], 33 horses [HORS].

Exits:
  North : plain (66,46) in Lilois.
  Northeast : plain (67,47) in Lilois.
  Southeast : ocean (67,49) in Atlantis Ocean.
  South : plain (66,50) in Lilois, contains Sluen [town].
  Southwest : plain (65,49) in Lilois.
  Northwest : plain (65,47) in Lilois.

- City Guard (124), on guard, 120 leaders [LEAD], 120 swords [SWOR].
* Trato (1243), Gragblod (7), avoiding, behind, revealing faction,
  holding, plainsman [PLAI], 149 silver [SILV]. Weight: 10. Capacity:
  0/0/15/0. Skills: entertainment [ENTE] 1 (30).
- Izluks (1470), barbarian [BARB].


plain (68,48) in Murom, 483 peasants (nomads), $1932.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $1352).
  Wanted: none.
  For Sale: 96 nomads [NOMA] at $56, 19 leaders [LEAD] at $112.
  Entertainment available: $96.
  Products: 45 livestock [LIVE], 39 horses [HORS].

Exits:
  North : plain (68,46) in Loras.
  Northeast : ocean (69,47) in Atlantis Ocean.
  Southeast : ocean (69,49) in Atlantis Ocean.
  South : ocean (68,50) in Atlantis Ocean.
  Southwest : ocean (67,49) in Atlantis Ocean.
  Northwest : plain (67,47) in Lilois.

* Unit (2558), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 62 silver [SILV], sea elf [SELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


plain (65,49) in Lilois, 496 peasants (nomads), $1984.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $1388).
  Wanted: none.
  For Sale: 99 nomads [NOMA] at $56, 19 leaders [LEAD] at $112.
  Entertainment available: $99.
  Products: 57 grain [GRAI], 30 horses [HORS].

Exits:
  North : plain (65,47) in Lilois.
  Northeast : plain (66,48) in Lilois, contains Asyust [city].
  Southeast : plain (66,50) in Lilois, contains Sluen [town].
  South : plain (65,51) in Branrun.
  Southwest : plain (64,50) in Lilois.
  Northwest : ocean (64,48) in Atlantis Ocean.

* Unit (1638), Gragblod (7), avoiding, revealing faction, receiving no
  aid, plainsman [PLAI], 52 silver [SILV]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


plain (66,50) in Lilois, contains Sluen [town], 2136 peasants (sea
  elves), $17088.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $18 (Max: $7689).
  Wanted: 124 grain [GRAI] at $23, 95 livestock [LIVE] at $21, 173
    fish [FISH] at $24, 18 swords [SWOR] at $122, 10 wagons [WAGO] at
    $167.
  For Sale: 427 sea elves [SELF] at $72, 85 leaders [LEAD] at $144.
  Entertainment available: $854.
  Products: 46 grain [GRAI], 35 horses [HORS].

Exits:
  North : plain (66,48) in Lilois, contains Asyust [city].
  Northeast : ocean (67,49) in Atlantis Ocean.
  Southeast : ocean (67,51) in Atlantis Ocean.
  South : plain (66,52) in Branrun, contains Whoezeaburg [town].
  Southwest : plain (65,51) in Branrun.
  Northwest : plain (65,49) in Lilois.

- City Guard (126), on guard, 80 leaders [LEAD], 80 swords [SWOR].
* Unit (1246), Gragblod (7), avoiding, revealing faction, 86 silver
  [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills:
  entertainment [ENTE] 1 (30).


plain (65,51) in Branrun, 624 peasants (high elves), $2496.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $1747).
  Wanted: none.
  For Sale: 124 high elves [HELF] at $56, 24 leaders [LEAD] at $112.
  Entertainment available: $124.
  Products: 77 livestock [LIVE], 20 horses [HORS].

Exits:
  North : plain (65,49) in Lilois.
  Northeast : plain (66,50) in Lilois, contains Sluen [town].
  Southeast : plain (66,52) in Branrun, contains Whoezeaburg [town].
  South : plain (65,53) in Branrun.
  Southwest : ocean (64,52) in Atlantis Ocean.
  Northwest : plain (64,50) in Lilois.

* Unit (1109), Gragblod (7), avoiding, revealing faction, receiving no
  aid, nomad [NOMA], 48 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: none.


plain (66,52) in Branrun, contains Whoezeaburg [town], 1993 peasants
  (sea elves), $13951.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $17 (Max: $6776).
  Wanted: 112 grain [GRAI] at $23, 100 livestock [LIVE] at $20, 110
    fish [FISH] at $24, 19 longbows [LBOW] at $129, 9 chain armor
    [CARM] at $104.
  For Sale: 6 plate armor [PARM] at $492, 398 sea elves [SELF] at $68,
    79 leaders [LEAD] at $136.
  Entertainment available: $697.
  Products: 66 livestock [LIVE], 22 horses [HORS].

Exits:
  North : plain (66,50) in Lilois, contains Sluen [town].
  Northeast : ocean (67,51) in Atlantis Ocean.
  Southeast : ocean (67,53) in Atlantis Ocean.
  South : mountain (66,54) in Beaufor.
  Southwest : plain (65,53) in Branrun.
  Northwest : plain (65,51) in Branrun.

- City Guard (130), on guard, 80 leaders [LEAD], 80 swords [SWOR].
* Unit (1268), Gragblod (7), avoiding, revealing faction, 67 silver
  [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills:
  entertainment [ENTE] 1 (30).


mountain (63,53) in Dedotyl, 321 peasants (barbarians), $1284.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $898).
  Wanted: none.
  For Sale: 64 barbarians [BARB] at $56, 12 leaders [LEAD] at $112.
  Entertainment available: $64.
  Products: 33 grain [GRAI], 22 iron [IRON], 19 stone [STON].

Exits:
  North : ocean (63,51) in Atlantis Ocean.
  Northeast : ocean (64,52) in Atlantis Ocean.
  Southeast : plain (64,54) in Branrun.
  South : plain (63,55) in Branrun.
  Southwest : mountain (62,54) in Dedotyl.
  Northwest : ocean (62,52) in Atlantis Ocean.

* Unit (3018), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 40 silver [SILV], viking [VIKI]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


plain (65,53) in Branrun, 450 peasants (nomads), $1800.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $1260).
  Wanted: none.
  For Sale: 90 nomads [NOMA] at $56, 18 leaders [LEAD] at $112.
  Entertainment available: $90.
  Products: 43 livestock [LIVE], 30 horses [HORS].

Exits:
  North : plain (65,51) in Branrun.
  Northeast : plain (66,52) in Branrun, contains Whoezeaburg [town].
  Southeast : mountain (66,54) in Beaufor.
  South : mountain (65,55) in Beaufor.
  Southwest : plain (64,54) in Branrun.
  Northwest : ocean (64,52) in Atlantis Ocean.

* Unit (1161), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 48 silver [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0.
  Skills: none.


plain (64,54) in Branrun, 401 peasants (vikings), $1604.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $1122).
  Wanted: none.
  For Sale: 80 vikings [VIKI] at $56, 16 leaders [LEAD] at $112.
  Entertainment available: $80.
  Products: 42 grain [GRAI], 34 horses [HORS].

Exits:
  North : ocean (64,52) in Atlantis Ocean.
  Northeast : plain (65,53) in Branrun.
  Southeast : mountain (65,55) in Beaufor.
  South : plain (64,56) in Branrun.
  Southwest : plain (63,55) in Branrun.
  Northwest : mountain (63,53) in Dedotyl.

* Unit (3016), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 54 silver [SILV], viking [VIKI]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


mountain (66,54) in Beaufor, 248 peasants (orcs), $992.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $694).
  Wanted: none.
  For Sale: 49 orcs [ORC] at $56, 9 leaders [LEAD] at $112.
  Entertainment available: $49.
  Products: 36 grain [GRAI], 26 iron [IRON], 11 stone [STON].

Exits:
  North : plain (66,52) in Branrun, contains Whoezeaburg [town].
  Northeast : ocean (67,53) in Atlantis Ocean.
  Southeast : ocean (67,55) in Atlantis Ocean.
  South : mountain (66,56) in Beaufor.
  Southwest : mountain (65,55) in Beaufor.
  Northwest : plain (65,53) in Branrun.

* Unit (3024), Gragblod (7), avoiding, behind, revealing faction,
  receiving no aid, orc [ORC], 36 silver [SILV]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


plain (63,55) in Branrun, 575 peasants (nomads), $2300.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $1610).
  Wanted: none.
  For Sale: 115 nomads [NOMA] at $56, 23 leaders [LEAD] at $112.
  Entertainment available: $115.
  Products: 50 grain [GRAI], 30 horses [HORS].

Exits:
  North : mountain (63,53) in Dedotyl.
  Northeast : plain (64,54) in Branrun.
  Southeast : plain (64,56) in Branrun.
  South : plain (63,57) in Branrun.
  Southwest : plain (62,56) in Branrun.
  Northwest : mountain (62,54) in Dedotyl.

* Unit (3020), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 40 silver [SILV], viking [VIKI]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


mountain (65,55) in Beaufor, 265 peasants (hill dwarves), $530.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $12 (Max: $636).
  Wanted: none.
  For Sale: 53 hill dwarves [HDWA] at $48, 10 leaders [LEAD] at $96.
  Entertainment available: $26.
  Products: 20 grain [GRAI], 26 iron [IRON], 15 stone [STON].

Exits:
  North : plain (65,53) in Branrun.
  Northeast : mountain (66,54) in Beaufor.
  Southeast : mountain (66,56) in Beaufor.
  South : mountain (65,57) in Beaufor.
  Southwest : plain (64,56) in Branrun.
  Northwest : plain (64,54) in Branrun.

* Unit (3049), Gragblod (7), avoiding, behind, revealing faction,
  receiving no aid, orc [ORC], 22 silver [SILV]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


plain (62,56) in Branrun, 741 peasants (sea elves), $2964.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $2074).
  Wanted: none.
  For Sale: 148 sea elves [SELF] at $56, 29 leaders [LEAD] at $112.
  Entertainment available: $148.
  Products: 51 grain [GRAI], 34 horses [HORS].

Exits:
  North : mountain (62,54) in Dedotyl.
  Northeast : plain (63,55) in Branrun.
  Southeast : plain (63,57) in Branrun.
  South : plain (62,58) in Burongha, contains Belvoltan [town].
  Southwest : ocean (61,57) in Atlantis Ocean.
  Northwest : ocean (61,55) in Atlantis Ocean.

* Unit (3036), Gragblod (7), avoiding, revealing faction, receiving no
  aid, nomad [NOMA], 16 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).


plain (64,56) in Branrun, 458 peasants (nomads), $2748.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $16 (Max: $1465).
  Wanted: none.
  For Sale: 91 nomads [NOMA] at $64, 18 leaders [LEAD] at $128.
  Entertainment available: $137.
  Products: 72 livestock [LIVE], 32 horses [HORS].

Exits:
  North : plain (64,54) in Branrun.
  Northeast : mountain (65,55) in Beaufor.
  Southeast : mountain (65,57) in Beaufor.
  South : mountain (64,58) in Beaufor.
  Southwest : plain (63,57) in Branrun.
  Northwest : plain (63,55) in Branrun.

* Unit (3120), Gragblod (7), avoiding, revealing faction, receiving no
  aid, nomad [NOMA], 60 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).


plain (63,57) in Branrun, 563 peasants (plainsmen), $2815.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $15 (Max: $1689).
  Wanted: none.
  For Sale: 112 plainsmen [PLAI] at $60, 22 leaders [LEAD] at $120.
  Entertainment available: $140.
  Products: 79 grain [GRAI], 39 horses [HORS].

Exits:
  North : plain (63,55) in Branrun.
  Northeast : plain (64,56) in Branrun.
  Southeast : mountain (64,58) in Beaufor.
  South : plain (63,59) in Burongha, contains Tas'bur [city].
  Southwest : plain (62,58) in Burongha, contains Belvoltan [town].
  Northwest : plain (62,56) in Branrun.

* Unit (3022), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 49 silver [SILV], viking [VIKI]. Weight: 10. Capacity:
  0/0/15/0. Skills: combat [COMB] 1 (30).


mountain (65,57) in Beaufor, 334 peasants (vikings), $1002.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $13 (Max: $868).
  Wanted: none.
  For Sale: 66 vikings [VIKI] at $52, 13 leaders [LEAD] at $104.
  Entertainment available: $50.
  Products: 21 livestock [LIVE], 34 iron [IRON], 19 stone [STON].

Exits:
  North : mountain (65,55) in Beaufor.
  Northeast : mountain (66,56) in Beaufor.
  Southeast : mountain (66,58) in Beaufor.
  South : ocean (65,59) in Atlantis Ocean.
  Southwest : mountain (64,58) in Beaufor.
  Northwest : plain (64,56) in Branrun.

* Unit (1199), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 36 silver [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0.
  Skills: none.


plain (62,58) in Burongha, contains Belvoltan [town], 2499 peasants
  (high elves), $19992.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $18 (Max: $8996).
  Wanted: 110 grain [GRAI] at $20, 174 livestock [LIVE] at $18, 101
    fish [FISH] at $23, 24 swords [SWOR] at $113, 16 wagons [WAGO] at
    $203.
  For Sale: 16 crossbows [XBOW] at $91, 499 high elves [HELF] at $72,
    99 leaders [LEAD] at $144.
  Entertainment available: $999.
  Products: 63 grain [GRAI], 38 horses [HORS].

Exits:
  North : plain (62,56) in Branrun.
  Northeast : plain (63,57) in Branrun.
  Southeast : plain (63,59) in Burongha, contains Tas'bur [city].
  South : plain (62,60) in Burongha, contains Narga-tor [town].
  Southwest : plain (61,59) in Burongha.
  Northwest : ocean (61,57) in Atlantis Ocean.

* Unit (3121), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 82 silver [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).
- Unit (2002), high elf [HELF].
* Unit (2917), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 51 silver [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).


mountain (64,58) in Beaufor, 294 peasants (hill dwarves), $882.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $13 (Max: $764).
  Wanted: none.
  For Sale: 58 hill dwarves [HDWA] at $52, 11 leaders [LEAD] at $104.
  Entertainment available: $44.
  Products: 20 grain [GRAI], 31 iron [IRON], 12 stone [STON].

Exits:
  North : plain (64,56) in Branrun.
  Northeast : mountain (65,57) in Beaufor.
  Southeast : ocean (65,59) in Atlantis Ocean.
  South : ocean (64,60) in Atlantis Ocean.
  Southwest : plain (63,59) in Burongha, contains Tas'bur [city].
  Northwest : plain (63,57) in Branrun.

* Unit (3122), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 37 silver [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).


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


plain (61,59) in Burongha, 704 peasants (nomads), $2816.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $1971).
  Wanted: none.
  For Sale: 140 nomads [NOMA] at $56, 28 leaders [LEAD] at $112.
  Entertainment available: $140.
  Products: 58 livestock [LIVE], 33 horses [HORS].

Exits:
  North : ocean (61,57) in Atlantis Ocean.
  Northeast : plain (62,58) in Burongha, contains Belvoltan [town].
  Southeast : plain (62,60) in Burongha, contains Narga-tor [town].
  South : plain (61,61) in Burongha.
  Southwest : ocean (60,60) in Atlantis Ocean.
  Northwest : ocean (60,58) in Atlantis Ocean.

* Unit (2982), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 24 silver [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).


plain (63,59) in Burongha, contains Tas'bur [city], 4587 peasants
  (nomads), $32109.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $17 (Max: $15595).
  Wanted: 132 grain [GRAI] at $23, 108 livestock [LIVE] at $23, 61
    iron [IRON] at $47, 180 fish [FISH] at $24, 71 swords [SWOR] at
    $122, 76 chain armor [CARM] at $113, 69 wagons [WAGO] at $197, 59
    wine [WINE] at $159, 91 vodka [VODK] at $171.
  For Sale: 79 horses [HORS] at $54, 86 perfume [PERF] at $76, 53
    cotton [COTT] at $85, 917 nomads [NOMA] at $68, 183 leaders [LEAD]
    at $136.
  Entertainment available: $1605.
  Products: 54 grain [GRAI], 27 horses [HORS].

Exits:
  North : plain (63,57) in Branrun.
  Northeast : mountain (64,58) in Beaufor.
  Southeast : ocean (64,60) in Atlantis Ocean.
  South : plain (63,61) in Burongha.
  Southwest : plain (62,60) in Burongha, contains Narga-tor [town].
  Northwest : plain (62,58) in Burongha, contains Belvoltan [town].

- City Guard (139), on guard, 120 leaders [LEAD], 120 swords [SWOR].
* Unit (3067), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 79 silver [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).
- Unit (2101), high elf [HELF].


desert (69,59) in Beaubur, 118 peasants (vikings), $118.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $11 (Max: $259).
  Wanted: none.
  For Sale: 23 vikings [VIKI] at $44, 4 leaders [LEAD] at $88.
  Entertainment available: $5.
  Products: 16 livestock [LIVE], 12 iron [IRON], 16 stone [STON].

Exits:
  North : ocean (69,57) in Atlantis Ocean.
  Northeast : desert (70,58) in Beaubur.
  Southeast : desert (70,60) in Beaubur.
  South : desert (69,61) in Beaubur.
  Southwest : desert (68,60) in Beaubur.
  Northwest : ocean (68,58) in Atlantis Ocean.

* Unit (2927), Gragblod (7), avoiding, revealing faction, receiving no
  aid, nomad [NOMA], 10 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: none.

+ Ruin [1] : Ruin, closed to player units.
  - Sandlings (621), 9 sandlings [SAND].


plain (62,60) in Burongha, contains Narga-tor [town], 1837 peasants
  (high elves), $14696.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $18 (Max: $6613).
  Wanted: 123 grain [GRAI] at $27, 134 livestock [LIVE] at $18, 16
    stone [STON] at $54.
  For Sale: 367 high elves [HELF] at $72, 73 leaders [LEAD] at $144.
  Entertainment available: $734.
  Products: 76 grain [GRAI], 34 horses [HORS].

Exits:
  North : plain (62,58) in Burongha, contains Belvoltan [town].
  Northeast : plain (63,59) in Burongha, contains Tas'bur [city].
  Southeast : plain (63,61) in Burongha.
  South : plain (62,62) in Burongha.
  Southwest : plain (61,61) in Burongha.
  Northwest : plain (61,59) in Burongha.

- TUVC (1979), 46 leaders [LEAD], 48 swords [SWOR].
- Sargi (2010), on guard, viking [VIKI], 132 nomads [NOMA], 218 high
  elves [HELF], velvet [VELV], 38 swords [SWOR], 2 chain armor [CARM].
- Verotajs (2107), leader [LEAD].
* Unit (3042), Gragblod (7), avoiding, revealing faction, receiving no
  aid, nomad [NOMA], 8 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).


mountain (66,60) in Beaufor, 361 peasants (hill dwarves), $1083.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $13 (Max: $938).
  Wanted: none.
  For Sale: 72 hill dwarves [HDWA] at $52, 14 leaders [LEAD] at $104.
  Entertainment available: $54.
  Products: 38 grain [GRAI], 21 iron [IRON], 16 stone [STON].

Exits:
  North : mountain (66,58) in Beaufor.
  Northeast : mountain (67,59) in Beaufor.
  Southeast : mountain (67,61) in Beaufor.
  South : plain (66,62) in Ranaw.
  Southwest : mountain (65,61) in Beaufor.
  Northwest : ocean (65,59) in Atlantis Ocean.

* Unit (3179), Gragblod (7), avoiding, behind, revealing faction,
  receiving no aid, 44 silver [SILV], hill dwarf [HDWA]. Weight: 10.
  Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).


desert (68,60) in Beaubur, 184 peasants (desert dwarves), $184.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $11 (Max: $404).
  Wanted: none.
  For Sale: 36 desert dwarves [DDWA] at $44, 7 leaders [LEAD] at $88.
  Entertainment available: $9.
  Products: 10 livestock [LIVE], 16 iron [IRON], 11 stone [STON].

Exits:
  North : ocean (68,58) in Atlantis Ocean.
  Northeast : desert (69,59) in Beaubur.
  Southeast : desert (69,61) in Beaubur.
  South : desert (68,62) in Beaubur.
  Southwest : mountain (67,61) in Beaufor.
  Northwest : mountain (67,59) in Beaufor.

* Unit (1958), Gragblod (7), avoiding, behind, revealing faction,
  receiving no aid, horse [HORS], viking [VIKI], 7 silver [SILV].
  Weight: 60. Capacity: 0/70/85/0. Skills: none.


desert (70,60) in Beaubur, 162 peasants (nomads), $324.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $12 (Max: $388).
  Wanted: none.
  For Sale: 32 nomads [NOMA] at $48, 6 leaders [LEAD] at $96.
  Entertainment available: $16.
  Products: 18 grain [GRAI], 13 iron [IRON], 18 stone [STON].

Exits:
  North : desert (70,58) in Beaubur.
  Northeast : ocean (71,59) in Atlantis Ocean.
  Southeast : mountain (71,61) in Seress'a.
  South : desert (70,62) in Beaubur.
  Southwest : desert (69,61) in Beaubur.
  Northwest : desert (69,59) in Beaubur.

* Unit (1305), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 560 silver [SILV], 6 nomads [NOMA]. Weight: 60. Capacity:
  0/0/90/0. Skills: none.
* Unit (2965), Gragblod (7), avoiding, revealing faction, receiving no
  aid, nomad [NOMA], 10 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: none.

+ Lair [1] : Lair, closed to player units.
  - Sphinx (622), sphinx [SPHI].


plain (61,61) in Burongha, 656 peasants (nomads), $3280.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $15 (Max: $1968).
  Wanted: none.
  For Sale: 131 nomads [NOMA] at $60, 26 leaders [LEAD] at $120.
  Entertainment available: $164.
  Products: 41 grain [GRAI], 21 horses [HORS].

Exits:
  North : plain (61,59) in Burongha.
  Northeast : plain (62,60) in Burongha, contains Narga-tor [town].
  Southeast : plain (62,62) in Burongha.
  South : ocean (61,63) in Atlantis Ocean.
  Southwest : ocean (60,62) in Atlantis Ocean.
  Northwest : ocean (60,60) in Atlantis Ocean.

* Unit (3066), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 49 silver [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).


plain (63,61) in Burongha, 749 peasants (high elves), $2996.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $2097).
  Wanted: none.
  For Sale: 149 high elves [HELF] at $56, 29 leaders [LEAD] at $112.
  Entertainment available: $149.
  Products: 57 livestock [LIVE], 32 horses [HORS].

Exits:
  North : plain (63,59) in Burongha, contains Tas'bur [city].
  Northeast : ocean (64,60) in Atlantis Ocean.
  Southeast : plain (64,62) in Ranaw.
  South : mountain (63,63) in Rothrila.
  Southwest : plain (62,62) in Burongha.
  Northwest : plain (62,60) in Burongha, contains Narga-tor [town].

* Unit (3069), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 29 silver [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).
* Unit (3068), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 34 silver [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).


mountain (65,61) in Beaufor, 311 peasants (sea elves), $1244.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $870).
  Wanted: none.
  For Sale: 62 sea elves [SELF] at $56, 12 leaders [LEAD] at $112.
  Entertainment available: $62.
  Products: 28 grain [GRAI], 30 iron [IRON], 16 stone [STON].

Exits:
  North : ocean (65,59) in Atlantis Ocean.
  Northeast : mountain (66,60) in Beaufor.
  Southeast : plain (66,62) in Ranaw.
  South : plain (65,63) in Ranaw, contains Trabddel [city].
  Southwest : plain (64,62) in Ranaw.
  Northwest : ocean (64,60) in Atlantis Ocean.

* Unit (3113), Gragblod (7), avoiding, behind, revealing faction,
  receiving no aid, 38 silver [SILV], hill dwarf [HDWA]. Weight: 10.
  Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).


mountain (67,61) in Beaufor, 367 peasants (hill dwarves), $1468.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $14 (Max: $1027).
  Wanted: none.
  For Sale: 73 hill dwarves [HDWA] at $56, 14 leaders [LEAD] at $112.
  Entertainment available: $73.
  Products: 36 livestock [LIVE], 32 iron [IRON], 11 stone [STON].

Exits:
  North : mountain (67,59) in Beaufor.
  Northeast : desert (68,60) in Beaubur.
  Southeast : desert (68,62) in Beaubur.
  South : jungle (67,63) in Belver.
  Southwest : plain (66,62) in Ranaw.
  Northwest : mountain (66,60) in Beaufor.

* Unit (3177), Gragblod (7), avoiding, behind, revealing faction,
  receiving no aid, 38 silver [SILV], hill dwarf [HDWA]. Weight: 10.
  Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).


desert (69,61) in Beaubur, 179 peasants (desert dwarves), $179.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $11 (Max: $393).
  Wanted: none.
  For Sale: 35 desert dwarves [DDWA] at $44, 7 leaders [LEAD] at $88.
  Entertainment available: $8.
  Products: 13 livestock [LIVE], 15 iron [IRON], 12 stone [STON].

Exits:
  North : desert (69,59) in Beaubur.
  Northeast : desert (70,60) in Beaubur.
  Southeast : desert (70,62) in Beaubur.
  South : jungle (69,63) in Belver.
  Southwest : desert (68,62) in Beaubur.
  Northwest : desert (68,60) in Beaubur.

* Unit (2938), Gragblod (7), avoiding, revealing faction, receiving no
  aid, nomad [NOMA], 10 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: none.


plain (64,62) in Ranaw, 551 peasants (vikings), $3306.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $16 (Max: $1763).
  Wanted: none.
  For Sale: 110 vikings [VIKI] at $64, 22 leaders [LEAD] at $128.
  Entertainment available: $165.
  Products: 50 livestock [LIVE], 22 horses [HORS].

Exits:
  North : ocean (64,60) in Atlantis Ocean.
  Northeast : mountain (65,61) in Beaufor.
  Southeast : plain (65,63) in Ranaw, contains Trabddel [city].
  South : plain (64,64) in Ranaw.
  Southwest : mountain (63,63) in Rothrila.
  Northwest : plain (63,61) in Burongha.

- Taxers (2546), on guard, 21 sea elves [SELF], 99 nomads [NOMA], 9
  vodka [VODK], 100 vikings [VIKI].
- Unit (3199), leader [LEAD].
* Unit (710), Gragblod (7), avoiding, revealing faction, receiving no
  aid, nomad [NOMA], 24 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: combat [COMB] 1 (30).


plain (66,62) in Ranaw, 658 peasants (high elves), $3948.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $16 (Max: $2105).
  Wanted: none.
  For Sale: 131 high elves [HELF] at $64, 26 leaders [LEAD] at $128.
  Entertainment available: $197.
  Products: 66 livestock [LIVE], 37 horses [HORS].

Exits:
  North : mountain (66,60) in Beaufor.
  Northeast : mountain (67,61) in Beaufor.
  Southeast : jungle (67,63) in Belver.
  South : plain (66,64) in Ranaw.
  Southwest : plain (65,63) in Ranaw, contains Trabddel [city].
  Northwest : mountain (65,61) in Beaufor.

* Unit (3130), Gragblod (7), avoiding, behind, revealing faction,
  receiving no aid, 52 silver [SILV], hill dwarf [HDWA]. Weight: 10.
  Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).


desert (68,62) in Beaubur, 187 peasants (nomads), $561.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $13 (Max: $486).
  Wanted: none.
  For Sale: 37 nomads [NOMA] at $52, 7 leaders [LEAD] at $104.
  Entertainment available: $28.
  Products: 10 livestock [LIVE], 17 iron [IRON], 15 stone [STON].

Exits:
  North : desert (68,60) in Beaubur.
  Northeast : desert (69,61) in Beaubur.
  Southeast : jungle (69,63) in Belver.
  South : jungle (68,64) in Belver.
  Southwest : jungle (67,63) in Belver.
  Northwest : mountain (67,61) in Beaufor.

- Grizzly Bears (369), 2 grizzly bears [GRIZ].
* Unit (1260), Gragblod (7), avoiding, revealing faction, receiving no
  aid, nomad [NOMA], 3 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: none.
* Unit (3026), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 8 nomads [NOMA], 110 silver [SILV]. Weight: 80. Capacity:
  0/0/120/0. Skills: none.


desert (70,62) in Beaubur, 162 peasants (nomads), $486.
------------------------------------------------------------
  The weather was clear last month; it will be monsoon season next
    month.
  Wages: $13 (Max: $421).
  Wanted: none.
  For Sale: 32 nomads [NOMA] at $52, 6 leaders [LEAD] at $104.
  Entertainment available: $24.
  Products: 14 livestock [LIVE], 11 iron [IRON], 14 stone [STON].

Exits:
  North : desert (70,60) in Beaubur.
  Northeast : mountain (71,61) in Seress'a.
  Southeast : mountain (71,63) in Seress'a.
  South : jungle (70,64) in Belver, contains Yriaberg [city].
  Southwest : jungle (69,63) in Belver.
  Northwest : desert (69,61) in Beaubur.

* Unit (2955), Gragblod (7), avoiding, revealing faction, receiving no
  aid, nomad [NOMA], 10 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: none.
- Grey Scout (2238), Grey Wind (17), avoiding, behind, hill dwarf
  [HDWA].


mountain (63,63) in Rothrila, 271 peasants (barbarians), $813.
------------------------------------------------------------
  It was winter last month; it will be winter next month.
  Wages: $13 (Max: $704).
  Wanted: none.
  For Sale: 54 barbarians [BARB] at $52, 10 leaders [LEAD] at $104.
  Entertainment available: $40.
  Products: 39 livestock [LIVE], 35 iron [IRON], 16 stone [STON].

Exits:
  North : plain (63,61) in Burongha.
  Northeast : plain (64,62) in Ranaw.
  Southeast : plain (64,64) in Ranaw.
  South : mountain (63,65) in Rothrila.
  Southwest : ocean (62,64) in Atlantis Ocean.
  Northwest : plain (62,62) in Burongha.

* Unit (3100), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 185 silver [SILV], 9 nomads [NOMA]. Weight: 90. Capacity:
  0/0/135/0. Skills: combat [COMB] 1 (30).


plain (65,63) in Ranaw, contains Trabddel [city], 2960 peasants (high
  elves), $20720.
------------------------------------------------------------
  It was winter last month; it will be winter next month.
  Wages: $17 (Max: $10064).
  Wanted: 110 grain [GRAI] at $29, 184 livestock [LIVE] at $21, 26
    herbs [HERB] at $47, 31 swords [SWOR] at $105, 28 plate armor
    [PARM] at $491, 15 ivory [IVOR] at $159, 4 mink [MINK] at $138.
  For Sale: 12 caviar [CAVI] at $69, 592 high elves [HELF] at $68, 118
    leaders [LEAD] at $136.
  Entertainment available: $1036.
  Products: 62 grain [GRAI], 25 horses [HORS].

Exits:
  North : mountain (65,61) in Beaufor.
  Northeast : plain (66,62) in Ranaw.
  Southeast : plain (66,64) in Ranaw.
  South : plain (65,65) in Ranaw, contains Turfold [city].
  Southwest : plain (64,64) in Ranaw.
  Northwest : plain (64,62) in Ranaw.

- City Guard (150), on guard, 120 leaders [LEAD], 120 swords [SWOR].
* Unit (1806), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 31 silver [SILV], high elf [HELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: none.


plain (64,64) in Ranaw, 688 peasants (nomads), $4128.
------------------------------------------------------------
  It was winter last month; it will be winter next month.
  Wages: $16 (Max: $2201).
  Wanted: none.
  For Sale: 137 nomads [NOMA] at $64, 27 leaders [LEAD] at $128.
  Entertainment available: $206.
  Products: 44 grain [GRAI], 37 horses [HORS].

Exits:
  North : plain (64,62) in Ranaw.
  Northeast : plain (65,63) in Ranaw, contains Trabddel [city].
  Southeast : plain (65,65) in Ranaw, contains Turfold [city].
  South : plain (64,66) in Ranaw.
  Southwest : mountain (63,65) in Rothrila.
  Northwest : mountain (63,63) in Rothrila.

* Unit (1914), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 35 silver [SILV], high elf [HELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: none.


plain (66,64) in Ranaw, 700 peasants (nomads), $3500.
------------------------------------------------------------
  It was winter last month; it will be winter next month.
  Wages: $15 (Max: $2100).
  Wanted: none.
  For Sale: 140 nomads [NOMA] at $60, 28 leaders [LEAD] at $120.
  Entertainment available: $175.
  Products: 73 livestock [LIVE], 38 horses [HORS].

Exits:
  North : plain (66,62) in Ranaw.
  Northeast : jungle (67,63) in Belver.
  Southeast : jungle (67,65) in Belver.
  South : jungle (66,66) in Belver, contains Throzmunt [city].
  Southwest : plain (65,65) in Ranaw, contains Turfold [city].
  Northwest : plain (65,63) in Ranaw, contains Trabddel [city].

* Unit (1079), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 40 silver [SILV], high elf [HELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: none.


jungle (68,64) in Belver, 156 peasants (wood elves), $312.
------------------------------------------------------------
  It was winter last month; it will be winter next month.
  Wages: $12 (Max: $374).
  Wanted: none.
  For Sale: 31 wood elves [WELF] at $48, 6 leaders [LEAD] at $96.
  Entertainment available: $15.
  Products: 39 grain [GRAI], 14 wood [WOOD], 24 herbs [HERB].

Exits:
  North : desert (68,62) in Beaubur.
  Northeast : jungle (69,63) in Belver.
  Southeast : jungle (69,65) in Belver.
  South : jungle (68,66) in Belver.
  Southwest : jungle (67,65) in Belver.
  Northwest : jungle (67,63) in Belver.

* Unit (1867), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 12 silver [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0.
  Skills: none.


mountain (63,65) in Rothrila, 239 peasants (sea elves), $717.
------------------------------------------------------------
  It was winter last month; it will be winter next month.
  Wages: $13 (Max: $621).
  Wanted: none.
  For Sale: 47 sea elves [SELF] at $52, 9 leaders [LEAD] at $104.
  Entertainment available: $35.
  Products: 36 livestock [LIVE], 29 iron [IRON], 17 stone [STON].

Exits:
  North : mountain (63,63) in Rothrila.
  Northeast : plain (64,64) in Ranaw.
  Southeast : plain (64,66) in Ranaw.
  South : mountain (63,67) in Rothrila.
  Southwest : mountain (62,66) in Rothrila.
  Northwest : ocean (62,64) in Atlantis Ocean.

* Unit (1900), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 33 silver [SILV], high elf [HELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: none.


plain (65,65) in Ranaw, contains Turfold [city], 5805 peasants
  (plainsmen), $40635.
------------------------------------------------------------
  It was winter last month; it will be winter next month.
  Wages: $17 (Max: $19737).
  Wanted: 182 grain [GRAI] at $24, 178 livestock [LIVE] at $23, 63
    furs [FUR] at $53, 72 swords [SWOR] at $104, 74 longbows [LBOW] at
    $89, 89 roses [ROSE] at $164, 57 mink [MINK] at $149.
  For Sale: 59 horses [HORS] at $45, 99 tarot cards [TARO] at $82, 97
    truffles [TRUF] at $82, 1161 plainsmen [PLAI] at $68, 232 leaders
    [LEAD] at $136.
  Entertainment available: $2031.
  Products: 68 grain [GRAI], 39 horses [HORS].

Exits:
  North : plain (65,63) in Ranaw, contains Trabddel [city].
  Northeast : plain (66,64) in Ranaw.
  Southeast : jungle (66,66) in Belver, contains Throzmunt [city].
  South : plain (65,67) in Ranaw.
  Southwest : plain (64,66) in Ranaw.
  Northwest : plain (64,64) in Ranaw.

- City Guard (155), on guard, 120 leaders [LEAD], 120 swords [SWOR].
* Unit (1896), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 48 silver [SILV], high elf [HELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: none.
- Grey Scout (1923), Grey Wind (17), avoiding, behind, barbarian
  [BARB].


plain (64,66) in Ranaw, 503 peasants (high elves), $2515.
------------------------------------------------------------
  It was winter last month; it will be winter next month.
  Wages: $15 (Max: $1509).
  Wanted: none.
  For Sale: 100 high elves [HELF] at $60, 20 leaders [LEAD] at $120.
  Entertainment available: $125.
  Products: 74 grain [GRAI], 34 horses [HORS].

Exits:
  North : plain (64,64) in Ranaw.
  Northeast : plain (65,65) in Ranaw, contains Turfold [city].
  Southeast : plain (65,67) in Ranaw.
  South : plain (64,68) in Ranaw.
  Southwest : mountain (63,67) in Rothrila.
  Northwest : mountain (63,65) in Rothrila.

* Unit (3157), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 40 silver [SILV], plainsman [PLAI]. Weight: 10. Capacity:
  0/0/15/0. Skills: none.


jungle (66,66) in Belver, contains Throzmunt [city], 4545 peasants
  (tribal elves), $18180.
------------------------------------------------------------
  It was winter last month; it will be winter next month.
  Wages: $14 (Max: $12726).
  Wanted: 196 grain [GRAI] at $21, 118 livestock [LIVE] at $21, 75
    stone [STON] at $53, 89 swords [SWOR] at $114, 55 longbows [LBOW]
    at $120, 83 plate armor [PARM] at $441, 83 spices [SPIC] at $167,
    59 silk [SILK] at $162.
  For Sale: 82 wagons [WAGO] at $155, 50 figurines [FIGU] at $83, 84
    caviar [CAVI] at $81, 909 tribal elves [TELF] at $56, 181 leaders
    [LEAD] at $112.
  Entertainment available: $909.
  Products: 32 grain [GRAI], 15 wood [WOOD], 24 herbs [HERB].

Exits:
  North : plain (66,64) in Ranaw.
  Northeast : jungle (67,65) in Belver.
  Southeast : jungle (67,67) in Belver.
  South : plain (66,68) in Ranaw.
  Southwest : plain (65,67) in Ranaw.
  Northwest : plain (65,65) in Ranaw, contains Turfold [city].

- City Guard (157), on guard, 120 leaders [LEAD], 120 swords [SWOR].
* Unit (3055), Gragblod (7), avoiding, revealing faction, receiving no
  aid, nomad [NOMA], 4 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: none.


jungle (68,66) in Belver, 191 peasants (tribesmen), $191.
------------------------------------------------------------
  It was winter last month; it will be winter next month.
  Wages: $11 (Max: $420).
  Wanted: none.
  For Sale: 38 tribesmen [TMAN] at $44, 7 leaders [LEAD] at $88.
  Entertainment available: $9.
  Products: 29 livestock [LIVE], 15 wood [WOOD], 29 herbs [HERB].

Exits:
  North : jungle (68,64) in Belver.
  Northeast : jungle (69,65) in Belver.
  Southeast : jungle (69,67) in Belver.
  South : jungle (68,68) in Belver.
  Southwest : jungle (67,67) in Belver.
  Northwest : jungle (67,65) in Belver.

* Unit (1261), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 80 silver [SILV], 5 nomads [NOMA]. Weight: 50. Capacity:
  0/0/75/0. Skills: none.
* Unit (3056), Gragblod (7), avoiding, revealing faction, receiving no
  aid, nomad [NOMA], 10 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: none.
* Unit (3149), Gragblod (7), avoiding, revealing faction, receiving no
  aid, nomad [NOMA], 10 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: none.
* Unit (3153), Gragblod (7), avoiding, revealing faction, receiving no
  aid, nomad [NOMA], 10 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: none.
* Unit (3156), Gragblod (7), avoiding, revealing faction, receiving no
  aid, nomad [NOMA], silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
  Skills: none.


mountain (63,67) in Rothrila, 272 peasants (vikings), $1088.
------------------------------------------------------------
  It was winter last month; it will be winter next month.
  Wages: $14 (Max: $761).
  Wanted: none.
  For Sale: 54 vikings [VIKI] at $56, 10 leaders [LEAD] at $112.
  Entertainment available: $54.
  Products: 33 livestock [LIVE], 29 iron [IRON], 13 stone [STON].

Exits:
  North : mountain (63,65) in Rothrila.
  Northeast : plain (64,66) in Ranaw.
  Southeast : plain (64,68) in Ranaw.
  South : mountain (63,69) in Rothrila.
  Southwest : ocean (62,68) in Atlantis Ocean.
  Northwest : mountain (62,66) in Rothrila.

* Unit (1961), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 34 silver [SILV], high elf [HELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: none.


plain (65,67) in Ranaw, 463 peasants (plainsmen), $1852.
------------------------------------------------------------
  It was winter last month; it will be winter next month.
  Wages: $14 (Max: $1296).
  Wanted: none.
  For Sale: 92 plainsmen [PLAI] at $56, 18 leaders [LEAD] at $112.
  Entertainment available: $92.
  Products: 68 grain [GRAI], 32 horses [HORS].

Exits:
  North : plain (65,65) in Ranaw, contains Turfold [city].
  Northeast : jungle (66,66) in Belver, contains Throzmunt [city].
  Southeast : plain (66,68) in Ranaw.
  South : ocean (65,69) in Atlantis Ocean.
  Southwest : plain (64,68) in Ranaw.
  Northwest : plain (64,66) in Ranaw.

* Unit (1984), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 34 silver [SILV], high elf [HELF]. Weight: 10. Capacity:
  0/0/15/0. Skills: none.


jungle (67,67) in Belver, 146 peasants (wood elves), $438.
------------------------------------------------------------
  It was winter last month; it will be winter next month.
  Wages: $13 (Max: $379).
  Wanted: none.
  For Sale: 29 wood elves [WELF] at $52, 5 leaders [LEAD] at $104.
  Entertainment available: $21.
  Products: 36 grain [GRAI], 11 wood [WOOD], 23 herbs [HERB].

Exits:
  North : jungle (67,65) in Belver.
  Northeast : jungle (68,66) in Belver.
  Southeast : jungle (68,68) in Belver.
  South : jungle (67,69) in Belver.
  Southwest : plain (66,68) in Ranaw.
  Northwest : jungle (66,66) in Belver, contains Throzmunt [city].

* Unit (1870), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 13 silver [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0.
  Skills: none.


plain (64,68) in Ranaw, 715 peasants (sea elves), $4290.
------------------------------------------------------------
  It was winter last month; it will be winter next month.
  Wages: $16 (Max: $2288).
  Wanted: none.
  For Sale: 143 sea elves [SELF] at $64, 28 leaders [LEAD] at $128.
  Entertainment available: $214.
  Products: 56 livestock [LIVE], 20 horses [HORS].

Exits:
  North : plain (64,66) in Ranaw.
  Northeast : plain (65,67) in Ranaw.
  Southeast : ocean (65,69) in Atlantis Ocean.
  South : plain (64,70) in Ranaw.
  Southwest : mountain (63,69) in Rothrila.
  Northwest : mountain (63,67) in Rothrila.

* Ocladia (1628), Gragblod (7), avoiding, revealing faction, receiving
  no aid, 18 barbarians [BARB], 3684 silver [SILV], 18 horses [HORS].
  Weight: 1080. Capacity: 0/1260/1530/0. Skills: combat [COMB] 2 (90).
* Unit (3109), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 50 nomads [NOMA], 3126 silver [SILV]. Weight: 500. Capacity:
  0/0/750/0. Skills: combat [COMB] 1 (30).


plain (66,68) in Ranaw, 420 peasants (high elves), $2520.
------------------------------------------------------------
  It was winter last month; it will be winter next month.
  Wages: $16 (Max: $1344).
  Wanted: none.
  For Sale: 84 high elves [HELF] at $64, 16 leaders [LEAD] at $128.
  Entertainment available: $126.
  Products: 42 grain [GRAI], 36 horses [HORS].

Exits:
  North : jungle (66,66) in Belver, contains Throzmunt [city].
  Northeast : jungle (67,67) in Belver.
  Southeast : jungle (67,69) in Belver.
  South : jungle (66,70) in Belver.
  Southwest : ocean (65,69) in Atlantis Ocean.
  Northwest : plain (65,67) in Ranaw.

* Unit (1304), Gragblod (7), avoiding, revealing faction, receiving no
  aid, 750 silver [SILV], 9 nomads [NOMA]. Weight: 90. Capacity:
  0/0/135/0. Skills: none.


underforest (40,0,underworld) in Lotholuen, 99 peasants (under
  dwarves), $99.
------------------------------------------------------------
  The weather was clear last month; it will be clear next month.
  Wages: $11 (Max: $217).
  Wanted: none.
  For Sale: 19 under dwarves [UDWA] at $44, 3 leaders [LEAD] at $88.
  Entertainment available: $4.
  Products: 12 livestock [LIVE], 19 wood [WOOD], 18 stone [STON], 11
    iron [IRON].

Exits:
  Southeast : underforest (41,1,underworld) in Ethilsoruen.
  South : underforest (40,2,underworld) in Lotholuen.
  Southwest : underforest (39,1,underworld) in Lotholuen.

* Unit (665), Gragblod (7), revealing faction, 163 silver [SILV], high
  elf [HELF]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
  (30).



Orders Template (Long Format):

#atlantis 7 "kaltsa"

;*** forest (74,0) in Ranshya ***

unit 1067
;Aspracus (1067), revealing faction, 3 vikings [VIKI], 30 silver
;  [SILV]. Weight: 30. Capacity: 0/0/45/0. Skills: entertainment [ENTE]
;  1 (30).
@entertain

unit 21
;Unit (21), revealing faction, 40 vikings [VIKI], 160 silver [SILV].
;  Weight: 400. Capacity: 0/0/600/0. Skills: combat [COMB] 1 (30).
@work

unit 34
;Unit (34), revealing faction, 74 silver [SILV], 2 vikings [VIKI].
;  Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB] 1 (30).
@work

;*** forest (76,0) in Ranshya ***

unit 59
;Gula (59), revealing faction, 2 vikings [VIKI], 20 silver [SILV].
;  Weight: 20. Capacity: 0/0/30/0. Skills: entertainment [ENTE] 1 (30).
@entertain

unit 32
;Cuco (32), revealing faction, 47 vikings [VIKI], 3 orcs [ORC], 169
;  silver [SILV]. Weight: 500. Capacity: 0/0/750/0. Skills: combat
;  [COMB] 1 (30).
@work

unit 49
;Unit (49), revealing faction, 37 silver [SILV], 2 vikings [VIKI].
;  Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB] 1 (30).
move s
TURN
@work
ENDTURN

;*** forest (78,0) in Ranshya ***

unit 1089
;Agrelus (1089), revealing faction, tribesman [TMAN], 40 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: none.
@work

unit 47
;Unit (47), revealing faction, 38 silver [SILV], wood elf [WELF].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** forest (75,1) in Ranshya ***

unit 582
;Cocrius (582), revealing faction, 2 vikings [VIKI], 20 silver [SILV].
;  Weight: 20. Capacity: 0/0/30/0. Skills: entertainment [ENTE] 1 (30).
@entertain

unit 40
;Unit (40), revealing faction, 20 vikings [VIKI], 80 silver [SILV].
;  Weight: 200. Capacity: 0/0/300/0. Skills: combat [COMB] 1 (30).
@work

unit 79
;Unit (79), revealing faction, 12 silver [SILV], 2 vikings [VIKI].
;  Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB] 1 (30).
@work

;*** forest (77,1) in Ranshya ***

unit 957
;Unit (957), revealing faction, viking [VIKI], 15 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 142
;Unit (142), revealing faction, 14 silver [SILV], viking [VIKI].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** forest (76,2) in Ranshya ***

unit 176
;Unit (176), revealing faction, 58 silver [SILV], 4 wood elves [WELF].
;  Weight: 40. Capacity: 0/0/60/0. Skills: combat [COMB] 1 (30).
@work

unit 27
;Unit (27), revealing faction, 57 silver [SILV], 2 vikings [VIKI].
;  Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB] 1 (30).
@work

unit 33
;Unit (33), revealing faction, 6 vikings [VIKI], 36 silver [SILV].
;  Weight: 60. Capacity: 0/0/90/0. Skills: combat [COMB] 1 (30).
@work

;*** forest (75,3) in Ranshya ***

unit 75
;Unit (75), revealing faction, 62 silver [SILV], viking [VIKI]. Weight:
;  10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** mountain (74,4) in Nakyce ***

unit 1133
;Lulius (1133), revealing faction, tribesman [TMAN], 4 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 66
;Unit (66), revealing faction, 2 hill dwarves [HDWA], 8 silver [SILV].
;  Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB] 1 (30).
@work

unit 82
;Unit (82), revealing faction, 4 silver [SILV], hill dwarf [HDWA].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** forest (76,4) in Ranshya ***

unit 71
;Unit (71), revealing faction, receiving no aid, viking [VIKI], 20
;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
;  1 (30).
@work

unit 153
;Unit (153), revealing faction, receiving no aid, wood elf [WELF], 16
;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
;  1 (30).
@work

;*** tundra (80,4) in Drogbad ***

unit 230
;Sonteia (230), revealing faction, 3 sea elves [SELF], 63 silver
;  [SILV]. Weight: 30. Capacity: 0/0/45/0. Skills: combat [COMB] 1
;  (30).
@work

unit 192
;Unit (192), revealing faction, sea elf [SELF], 18 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** mountain (73,5) in Nakyce, contains Robaedale [city] ***

unit 44
;Unit (44), revealing faction, 44 hill dwarves [HDWA], 440 silver
;  [SILV]. Weight: 440. Capacity: 0/0/660/0. Skills: entertainment
;  [ENTE] 1 (30).
@entertain

unit 301
;Unit (301), revealing faction, 10 hill dwarves [HDWA], 60 silver
;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1
;  (30).
@work

;*** forest (77,5) in Ranshya ***

unit 654
;Unit (654), revealing faction, receiving no aid, hill dwarf [HDWA], 72
;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
;  1 (30).
@work

unit 238
;Unit (238), revealing faction, 7 hill dwarves [HDWA], 37 silver
;  [SILV]. Weight: 70. Capacity: 0/0/105/0. Skills: combat [COMB] 1
;  (30).
MOVE N
TURN
@work
ENDTURN

;*** tundra (79,5) in Drogbad ***

unit 1280
;Natesius (1280), revealing faction, receiving no aid, sea elf [SELF],
;  20 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  entertainment [ENTE] 1 (30).
@entertain

unit 46
;Unit (46), revealing faction, receiving no aid, 3 vikings [VIKI], 18
;  silver [SILV]. Weight: 30. Capacity: 0/0/45/0. Skills: combat [COMB]
;  1 (30).
@work

unit 193
;Unit (193), revealing faction, receiving no aid, 23 silver [SILV],
;  viking [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
;  1 (30).
@work

;*** tundra (81,5) in Drogbad ***

unit 1118
;Deleius (1118), revealing faction, sea elf [SELF], 46 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** mountain (74,6) in Nakyce ***

unit 287
;Olceius (287), revealing faction, 3 sea elves [SELF], 9 silver [SILV].
;  Weight: 30. Capacity: 0/0/45/0. Skills: combat [COMB] 1 (30).
@work

unit 292
;Unit (292), revealing faction, sea elf [SELF], 3 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 210
;Unit (210), revealing faction, 3 silver [SILV], sea elf [SELF].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** forest (76,6) in Ranshya ***

unit 202
;Unit (202), revealing faction, 5 sea elves [SELF], 10 silver [SILV].
;  Weight: 50. Capacity: 0/0/75/0. Skills: combat [COMB] 1 (30).
@work

unit 1212
;Unit (1212), revealing faction, 231 silver [SILV], 10 hill dwarves
;  [HDWA]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 3
;  (180).
MOVE SE
TURN
@work
ENDTURN

;*** tundra (80,6) in Drogbad ***

unit 209
;Unit (209), revealing faction, sea elf [SELF], 30 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 355
;Unit (355), revealing faction, 10 vikings [VIKI], 40 silver [SILV].
;  Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 3 (180).
@work

;*** forest (82,6) in Surlanque ***

unit 231
;Unit (231), revealing faction, sea elf [SELF], 3 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 227
;Unit (227), revealing faction, wood elf [WELF]. Weight: 10. Capacity:
;  0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** mountain (73,7) in Nakyce ***

unit 198
;Candidus (198), revealing faction, hill dwarf [HDWA], 2 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: entertainment [ENTE] 1 (30).
@work

unit 596
;Unit (596), revealing faction, 10 hill dwarves [HDWA], 20 silver
;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 3
;  (180).
@work

unit 847
;Unit (847), revealing faction, 20 orcs [ORC], 40 silver [SILV].
;  Weight: 200. Capacity: 0/0/300/0. Skills: combat [COMB] 1 (30).
@work

unit 256
;Unit (256), revealing faction, 29 silver [SILV], 3 orcs [ORC]. Weight:
;  30. Capacity: 0/0/45/0. Skills: combat [COMB] 1 (30).
@work

;*** mountain (75,7) in Nakyce ***

unit 384
;Unit (384), revealing faction, leader [LEAD], 732 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30),
;  tactics [TACT] 5 (450), stealth [STEA] 2 (120).
@tax
@study stea

unit 74
;Unit (74), revealing faction, 10 hill dwarves [HDWA], 1532 silver
;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 2
;  (98).
@study comb
@give 384 220 silv
@give 378 70 silv
@give 1071 30 silv

unit 1071
;Unit (1071), revealing faction, 211 silver [SILV], leader [LEAD].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 3 (210).
@teach 74
@tax

unit 378
;Unit (378), revealing faction, 2 silver [SILV], leader [LEAD]. Weight:
;  10. Capacity: 0/0/15/0. Skills: observation [OBSE] 4 (330).
@STUDY OBSE

unit 261
;Unit (261), revealing faction, 77 hill dwarves [HDWA], 971 silver
;  [SILV]. Weight: 770. Capacity: 0/0/1155/0. Skills: combat [COMB] 1
;  (38).
@work
@tax

unit 386
;Unit (386), revealing faction, 10 hill dwarves [HDWA]. Weight: 100.
;  Capacity: 0/0/150/0. Skills: combat [COMB] 1 (30).
@tax
@work

;*** forest (81,7) in Surlanque ***

unit 996
;Cassia (996), revealing faction, wood elf [WELF], 12 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: entertainment [ENTE] 1 (30).
@work

unit 1437
;Unit (1437), revealing faction, wood elf [WELF], 12 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 700
;Unit (700), revealing faction, 10 wood elves [WELF], 120 silver
;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1
;  (30).
@work

unit 306
;Unit (306), revealing faction, wood elf [WELF], 12 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 358
;Unit (358), revealing faction, 83 silver [SILV], 2 wood elves [WELF].
;  Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB] 1 (30).
@work

;*** mountain (72,8) in Nakyce ***

unit 1826
;Unit (1826), revealing faction, 10 hill dwarves [HDWA], 1109 silver
;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 3
;  (180).
@work
@give 3419 20 silv

;*** forest (76,8) in Uzrot ***

unit 241
;Unit (241), revealing faction, hill dwarf [HDWA], 3 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 593
;Unit (593), revealing faction, 2 silver [SILV], viking [VIKI]. Weight:
;  10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** forest (80,8) in Surlanque, contains Roi-nael [city] ***

unit 72
;Passius (72), revealing faction, 34 wood elves [WELF], 340 silver
;  [SILV]. Weight: 340. Capacity: 0/0/510/0. Skills: entertainment
;  [ENTE] 1 (30).
@entertain
@give 552 all silv

unit 297
;Unit (297), revealing faction, 100 vikings [VIKI], 500 silver [SILV].
;  Weight: 1000. Capacity: 0/0/1500/0. Skills: combat [COMB] 1 (30).
@work
@give 552 all silv

unit 786
;Unit (786), revealing faction, 10 vikings [VIKI], 9 grain [GRAI], 50
;  silver [SILV]. Weight: 145. Capacity: 0/0/150/0. Skills: combat
;  [COMB] 1 (30).
@work
@give 552 all silv

unit 434
;Unit (434), revealing faction, leader [LEAD], 15 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 2 (120).
@study comb

unit 552
;Unit (552), revealing faction, 2822 silver [SILV], 25 longbows [LBOW],
;  10 wood elves [WELF]. Weight: 125. Capacity: 0/0/150/0. Skills:
;  longbow [LBOW] 1 (30).
@work
@give 360 30 silv
@give 434 30 silv

unit 360
;Unit (360), revealing faction, 45 silver [SILV], leader [LEAD].
;  Weight: 10. Capacity: 0/0/15/0. Skills: longbow [LBOW] 1 (60).
@study lbow

;*** forest (82,8) in Surlanque ***

unit 233
;Unit (233), revealing faction, 6 sea elves [SELF], figurines [FIGU],
;  72 silver [SILV]. Weight: 61. Capacity: 0/0/90/0. Skills: combat
;  [COMB] 1 (30).
@work

unit 604
;Unit (604), revealing faction, 33 silver [SILV], sea elf [SELF].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** mountain (73,9) in Nakyce ***

unit 1181
;Stractius (1181), revealing faction, 4 orcs [ORC], 575 silver [SILV].
;  Weight: 40. Capacity: 0/0/60/0. Skills: combat [COMB] 4 (300).
@tax
@work

unit 240
;Unit (240), revealing faction, 75 hill dwarves [HDWA], 2836 silver
;  [SILV]. Weight: 750. Capacity: 0/0/1125/0. Skills: combat [COMB] 3
;  (180).
@tax
@give 770 30 silv
@give 300 220 silv
@work

unit 300
;Unit (300), behind, revealing faction, leader [LEAD], 1430 silver
;  [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: tactics [TACT] 5
;  (450), riding [RIDI] 2 (120), observation [OBSE] 3 (210).
@study obse

unit 770
;Unit (770), revealing faction, leader [LEAD], 232 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 4 (390).
@tax
@teach 591

unit 591
;Unit (591), revealing faction, 10 hill dwarves [HDWA], 624 silver
;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 3
;  (180).
@study comb
@tax

unit 780
;Unit (780), revealing faction, 200 silver [SILV], 10 hill dwarves
;  [HDWA]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1
;  (30).
move sw nw
tax
TURN
@work
ENDTURN

unit 1165
;Unit (1165), revealing faction, 200 silver [SILV], 10 hill dwarves
;  [HDWA]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1
;  (30).
tax
move sw
TURN
@work
ENDTURN

;*** mountain (75,9) in Nakyce ***

unit 1162
;Unit (1162), revealing faction, hill dwarf [HDWA], 2 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 645
;Unit (645), revealing faction, 10 hill dwarves [HDWA], 20 silver
;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1
;  (30).
@work

unit 1294
;Unit (1294), revealing faction, 40 silver [SILV], 2 hill dwarves
;  [HDWA]. Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB] 1
;  (30).
@work

;*** forest (77,9) in Uzrot ***

unit 1021
;Unit (1021), revealing faction, 2 hill dwarves [HDWA], 4 silver
;  [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB] 1
;  (30).
@work

unit 635
;Unit (635), revealing faction, 10 hill dwarves [HDWA], 20 silver
;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 3
;  (180).
@work

unit 1332
;Unit (1332), revealing faction, 70 silver [SILV], sea elf [SELF].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
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

;*** forest (81,9) in Surlanque ***

unit 1192
;Unit (1192), behind, revealing faction, leader [LEAD], 1391 silver
;  [SILV], horse [HORS]. Weight: 60. Capacity: 0/70/85/0. Skills:
;  combat [COMB] 1 (30), tactics [TACT] 5 (450), observation [OBSE] 3
;  (270).
@tax
@study obse

unit 1227
;Unit (1227), revealing faction, leader [LEAD], 3 horses [HORS], 3 fish
;  [FISH], vodka [VODK], cashmere [CASH], caviar [CAVI], 2 herbs
;  [HERB], mink [MINK], silk [SILK], wine [WINE], 420 silver [SILV].
;  Weight: 189. Capacity: 0/210/225/0. Skills: combat [COMB] 3 (180).
@teach 917
@tax

unit 296
;Unit (296), revealing faction, 10 vikings [VIKI], 112 silver [SILV].
;  Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 3 (180).
@tax
@work
@give 917 all silv

unit 1358
;Unit (1358), revealing faction, 10 vikings [VIKI], 114 silver [SILV].
;  Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1 (30).
@work
@tax
@give 863 all silv

unit 237
;Unit (237), revealing faction, 20 vikings [VIKI], 228 silver [SILV].
;  Weight: 200. Capacity: 0/0/300/0. Skills: combat [COMB] 3 (180).
@tax
@work
@give 917 all silv

unit 242
;Unit (242), revealing faction, 10 vikings [VIKI], 114 silver [SILV].
;  Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 3 (180).
@tax
@work
@give 917 all silv

unit 363
;Unit (363), revealing faction, 10 vikings [VIKI], 114 silver [SILV].
;  Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 3 (180).
@tax
@work
@give 917 all silv

unit 817
;Unit (817), revealing faction, 10 vikings [VIKI], 114 silver [SILV].
;  Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 3 (180).
@tax
@work
@give 917 all silv

unit 917
;Unit (917), revealing faction, 10 vikings [VIKI], 8813 silver [SILV].
;  Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 2 (90).
@tax
@give 1192 220 silv
@give 1227 70 silv

unit 922
;Unit (922), revealing faction, 10 vikings [VIKI], 114 silver [SILV].
;  Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1 (30).
@work
@tax
@give 863 all silv

unit 862
;Unit (862), revealing faction, 10 vikings [VIKI], 114 silver [SILV].
;  Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 3 (180).
@tax
@work
@give 917 all silv

unit 863
;Unit (863), revealing faction, 10 vikings [VIKI], 297 silver [SILV].
;  Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 3 (180).
@tax
@work

unit 705
;Unit (705), revealing faction, 216 silver [SILV], leader [LEAD].
;  Weight: 10. Capacity: 0/0/15/0. Skills: longbow [LBOW] 3 (180).
@study lbow

;*** mountain (74,10) in Nakyce, contains Cirrond [city] ***

unit 1004
;Unit (1004), avoiding, revealing faction, 2 hill dwarves [HDWA], 44
;  silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills: entertainment
;  [ENTE] 1 (30).
@entertain

unit 1701
;Unit (1701), revealing faction, 10 hill dwarves [HDWA], 180 silver
;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 3
;  (180).
@work

unit 84
;Unit (84), revealing faction, 30 hill dwarves [HDWA], 180 silver
;  [SILV]. Weight: 300. Capacity: 0/0/450/0. Skills: combat [COMB] 1
;  (30).
@work

unit 909
;Unit (909), revealing faction, 22 hill dwarves [HDWA], 396 silver
;  [SILV]. Weight: 220. Capacity: 0/0/330/0. Skills: combat [COMB] 1
;  (30).
@work

unit 585
;Unit (585), revealing faction, 40 hill dwarves [HDWA], 720 silver
;  [SILV]. Weight: 400. Capacity: 0/0/600/0. Skills: combat [COMB] 1
;  (30).
@work

unit 186
;Unit (186), revealing faction, 20 hill dwarves [HDWA], 360 silver
;  [SILV]. Weight: 200. Capacity: 0/0/300/0. Skills: combat [COMB] 1
;  (30).
@work

unit 763
;Unit (763), revealing faction, 20 hill dwarves [HDWA], 360 silver
;  [SILV]. Weight: 200. Capacity: 0/0/300/0. Skills: combat [COMB] 1
;  (30).
@work

unit 288
;Unit (288), revealing faction, 10 hill dwarves [HDWA], 180 silver
;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1
;  (30).
@work

unit 1629
;Unit (1629), revealing faction, 128 silver [SILV], leader [LEAD].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 3 (180).
@teach 64

unit 1898
;Unit (1898), revealing faction, 88 silver [SILV], leader [LEAD].
;  Weight: 10. Capacity: 0/0/15/0. Skills: observation [OBSE] 3 (210).
@study obse

unit 859
;Unit (859), revealing faction, 20 hill dwarves [HDWA], 720 silver
;  [SILV]. Weight: 200. Capacity: 0/0/300/0. Skills: combat [COMB] 1
;  (30).
@work

unit 64
;Unit (64), revealing faction, 10 hill dwarves [HDWA], 4741 silver
;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 2
;  (90).
@study comb

;*** forest (76,10) in Uzrot ***

unit 291
;Unit (291), revealing faction, 2 hill dwarves [HDWA], 4 silver [SILV].
;  Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB] 1 (30).
@work

unit 185
;Unit (185), revealing faction, 15 hill dwarves [HDWA], 30 silver
;  [SILV]. Weight: 150. Capacity: 0/0/225/0. Skills: combat [COMB] 1
;  (30).
@work

unit 1732
;Unit (1732), revealing faction, 40 silver [SILV], wood elf [WELF].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** forest (80,10) in Surlanque ***

unit 289
;Unit (289), revealing faction, 74 vikings [VIKI], 4853 silver [SILV].
;  Weight: 740. Capacity: 0/0/1110/0. Skills: combat [COMB] 3 (180).
@tax
@work
@give 1991 250 silv
@give 2001 220 silv
@give 889 70 silv

unit 1991
;Unit (1991), revealing faction, leader [LEAD], 1668 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 5 (450).
@tax
@study lbow

unit 2001
;Unit (2001), behind, revealing faction, leader [LEAD]. Weight: 10.
;  Capacity: 0/0/15/0. Skills: tactics [TACT] 5 (450).
@study stea

unit 889
;Unit (889), revealing faction, 18 silver [SILV], leader [LEAD].
;  Weight: 10. Capacity: 0/0/15/0. Skills: observation [OBSE] 3 (210).
@study obse

;*** forest (75,11) in Uzrot ***

unit 169
;Unit (169), avoiding, revealing faction, 70 silver [SILV], viking
;  [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
;  (30).
@work

;*** forest (77,11) in Uzrot ***

unit 1887
;Unit (1887), revealing faction, sea elf [SELF], 48 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** forest (79,11) in Surlanque ***

unit 2007
;Unit (2007), revealing faction, 20 vikings [VIKI], 60 silver [SILV].
;  Weight: 200. Capacity: 0/0/300/0. Skills: combat [COMB] 1 (30).
@work

unit 1760
;Unit (1760), revealing faction, 44 silver [SILV], 3 sea elves [SELF].
;  Weight: 30. Capacity: 0/0/45/0. Skills: combat [COMB] 1 (30).
@work

;*** forest (74,12) in Uzrot ***

unit 1034
;Unit (1034), avoiding, revealing faction, hill dwarf [HDWA], 54 silver
;  [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
;  (30).
@work

;*** forest (76,12) in Uzrot ***

unit 1022
;Unit (1022), revealing faction, hill dwarf [HDWA], 28 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** plain (78,12) in Morungol ***

unit 2072
;Unit (2072), revealing faction, 64 silver [SILV], wood elf [WELF].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** swamp (73,13) in Issnina ***

unit 356
;Unit (356), revealing faction, tribal elf [TELF], 3 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 171
;Unit (171), revealing faction, 10 tribesmen [TMAN], 30 silver [SILV].
;  Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1 (30).
@work

unit 633
;Unit (633), revealing faction, 2 tribesmen [TMAN], 6 silver [SILV].
;  Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB] 1 (30).
@work

unit 1788
;Unit (1788), revealing faction, 36 silver [SILV], tribesman [TMAN].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** forest (75,13) in Uzrot ***

unit 1381
;Unit (1381), revealing faction, 79 silver [SILV], tribal elf [TELF],
;  sword [SWOR]. Weight: 11. Capacity: 0/0/15/0. Skills: combat [COMB]
;  1 (30).
@work

;*** forest (77,13) in Uzrot ***

unit 1112
;Unit (1112), revealing faction, nomad [NOMA], 48 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** swamp (72,14) in Issnina ***

unit 390
;Unit (390), revealing faction, tribal elf [TELF], 4 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 764
;Unit (764), revealing faction, 8 sea elves [SELF], 32 silver [SILV].
;  Weight: 80. Capacity: 0/0/120/0. Skills: combat [COMB] 1 (30).
@work

unit 1167
;Unit (1167), revealing faction, sea elf [SELF], 4 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 1056
;Unit (1056), revealing faction, 22 silver [SILV], 2 sea elves [SELF].
;  Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB] 1 (30).
@work

;*** swamp (74,14) in Issnina ***

unit 608
;Unit (608), revealing faction, high elf [HELF], sword [SWOR], silver
;  [SILV]. Weight: 11. Capacity: 0/0/15/0. Skills: combat [COMB] 1
;  (30).
@work

unit 768
;Unit (768), on guard, revealing faction, 7 tribal elves [TELF], 7
;  silver [SILV]. Weight: 70. Capacity: 0/0/105/0. Skills: combat
;  [COMB] 1 (30).
@work
@guard 1

unit 739
;Unit (739), revealing faction, tribal elf [TELF], silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 1789
;Unit (1789), revealing faction, 17 silver [SILV], tribal elf [TELF].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** forest (76,14) in Uzrot ***

unit 1264
;Unit (1264), revealing faction, viking [VIKI], 70 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: entertainment [ENTE] 1 (30).
@entertain

unit 924
;Unit (924), revealing faction, wood elf [WELF], 12 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 1291
;Unit (1291), revealing faction, 39 silver [SILV], wood elf [WELF].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 1510
;Unit (1510), revealing faction, viking [VIKI], 4514 silver [SILV], 2
;  horses [HORS]. Weight: 110. Capacity: 0/140/155/0. Skills: none.
@work

unit 1791
;Unit (1791), revealing faction, 65 wood elves [WELF]. Weight: 650.
;  Capacity: 0/0/975/0. Skills: combat [COMB] 1 (30).
@work

;*** plain (78,14) in Morungol ***

unit 2451
;Unit (2451), revealing faction, receiving no aid, wood elf [WELF], 60
;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
;  1 (30).
@work

;*** swamp (73,15) in Issnina ***

unit 1101
;Unit (1101), on guard, revealing faction, 9 high elves [HELF], 9
;  silver [SILV]. Weight: 90. Capacity: 0/0/135/0. Skills: combat
;  [COMB] 1 (30).
@work
@guard 1

unit 804
;Unit (804), revealing faction, 2 tribal elves [TELF], 2 silver [SILV].
;  Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB] 1 (30).
@work

unit 1272
;Unit (1272), revealing faction, tribal elf [TELF], silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 1792
;Unit (1792), revealing faction, 28 silver [SILV], tribal elf [TELF].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** forest (75,15) in Uzrot, contains Quayfeeton [city] ***

unit 1127
;Unit (1127), revealing faction, plainsman [PLAI], sword [SWOR].
;  Weight: 11. Capacity: 0/0/15/0. Skills: entertainment [ENTE] 1 (30).
@entertain

unit 1032
;Unit (1032), revealing faction, horse [HORS], nomad [NOMA], 55
;  longbows [LBOW], 14876 silver [SILV]. Weight: 115. Capacity:
;  0/70/85/0. Skills: none.
@work
@buy all lbow

unit 168
;Unit (168), behind, revealing faction, leader [LEAD], horse [HORS],
;  442 silver [SILV]. Weight: 60. Capacity: 0/70/85/0. Skills: tactics
;  [TACT] 5 (450), stealth [STEA] 2 (90).
@study stea

unit 187
;Unit (187), on guard, revealing faction, 10 leaders [LEAD], 504 silver
;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 3
;  (237).
@guard 1
@tax
@teach 799

unit 2436
;Unit (2436), on guard, revealing faction, 10 longbows [LBOW], 1404
;  silver [SILV], 10 leaders [LEAD]. Weight: 110. Capacity: 0/0/150/0.
;  Skills: longbow [LBOW] 3 (210), combat [COMB] 1 (60).
@tax
@guard 1
@teach 1395 1636

unit 903
;Unit (903), on guard, revealing faction, 100 vikings [VIKI], 8695
;  silver [SILV]. Weight: 1000. Capacity: 0/0/1500/0. Skills: combat
;  [COMB] 2 (90).
@tax
@study comb
@guard 1
@give 1032 1300 silv

unit 614
;Unit (614), revealing faction, 270 vikings [VIKI], 17069 silver
;  [SILV], 42 horses [HORS]. Weight: 4800. Capacity: 0/2940/6990/0.
;  Skills: combat [COMB] 3 (180).
@tax
@work
@give 168 220 silv

unit 1029
;Unit (1029), revealing faction, 50 vikings [VIKI], 10535 silver
;  [SILV]. Weight: 500. Capacity: 0/0/750/0. Skills: combat [COMB] 1
;  (60).
@tax
@study comb

unit 799
;Unit (799), revealing faction, 100 vikings [VIKI], 10000 silver
;  [SILV]. Weight: 1000. Capacity: 0/0/1500/0. Skills: combat [COMB] 2
;  (150).
@tax
@study comb

unit 1180
;Unit (1180), revealing faction, leader [LEAD], 152 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: observation [OBSE] 3 (240),
;  stealth [STEA] 1 (30).
@study stea

unit 2129
;Unit (2129), behind, revealing faction, 100 wood elves [WELF], 100
;  longbows [LBOW], 5732 silver [SILV]. Weight: 1100. Capacity:
;  0/0/1500/0. Skills: longbow [LBOW] 3 (180).
@tax
@work

unit 1395
;Unit (1395), revealing faction, 20 wood elves [WELF], 233 silver
;  [SILV], 20 longbows [LBOW]. Weight: 220. Capacity: 0/0/300/0.
;  Skills: longbow [LBOW] 2 (120).
@study lbow

unit 1054
;Unit (1054), revealing faction, 740 silver [SILV], 60 wood elves
;  [WELF]. Weight: 600. Capacity: 0/0/900/0. Skills: none.
@work

unit 872
;Unit (872), revealing faction, 3650 silver [SILV], 60 wood elves
;  [WELF], 60 longbows [LBOW]. Weight: 660. Capacity: 0/0/900/0.
;  Skills: longbow [LBOW] 1 (30).
@study lbow

unit 1636
;Unit (1636), revealing faction, 60 wood elves [WELF], 60 longbows
;  [LBOW]. Weight: 660. Capacity: 0/0/900/0. Skills: longbow [LBOW] 1
;  (60).
@study lbow

unit 1128
;Unit (1128), revealing faction, 60 wood elves [WELF], 60 longbows
;  [LBOW]. Weight: 660. Capacity: 0/0/900/0. Skills: longbow [LBOW] 1
;  (30).
@study lbow
@tax

unit 1797
;Unit (1797), revealing faction, 960 silver [SILV], 60 wood elves
;  [WELF]. Weight: 600. Capacity: 0/0/900/0. Skills: none.
@work

;*** forest (77,15) in Uzrot ***

unit 1069
;Unit (1069), avoiding, revealing faction, holding, receiving no aid, 4
;  plainsmen [PLAI], viking [VIKI], 45 silver [SILV]. Weight: 50.
;  Capacity: 0/0/75/0. Skills: entertainment [ENTE] 0 (18).
@work

unit 2137
;Unit (2137), avoiding, revealing faction, holding, receiving no aid,
;  viking [VIKI], 9 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
;  Skills: combat [COMB] 1 (30).
@work

unit 946
;Unit (946), avoiding, revealing faction, holding, receiving no aid, 29
;  silver [SILV], viking [VIKI]. Weight: 10. Capacity: 0/0/15/0.
;  Skills: combat [COMB] 1 (30).
@work

;*** swamp (72,16) in Issnina ***

unit 1113
;Unit (1113), revealing faction, 10 high elves [HELF], 30 silver
;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1
;  (60).
@work

unit 1316
;Unit (1316), revealing faction, 3 tribal elves [TELF], 9 silver
;  [SILV]. Weight: 30. Capacity: 0/0/45/0. Skills: combat [COMB] 1
;  (30).
@work

unit 2152
;Unit (2152), revealing faction, tribal elf [TELF], 3 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 1793
;Unit (1793), revealing faction, 27 silver [SILV], 4 tribal elves
;  [TELF]. Weight: 40. Capacity: 0/0/60/0. Skills: combat [COMB] 1
;  (30).
@work

;*** plain (74,16) in Bocholt ***

unit 1250
;Unit (1250), revealing faction, 3858 silver [SILV], leader [LEAD],
;  sword [SWOR]. Weight: 11. Capacity: 0/0/15/0. Skills: observation
;  [OBSE] 4 (330).
@study obse

unit 1102
;Unit (1102), on guard, revealing faction, 9 high elves [HELF], 648
;  silver [SILV]. Weight: 90. Capacity: 0/0/135/0. Skills: combat
;  [COMB] 2 (90).
@work
@guard 1

unit 1080
;Unit (1080), revealing faction, 2 high elves [HELF], 144 silver
;  [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB] 1
;  (30).
@work

;*** forest (76,16) in Uzrot ***

unit 919
;Unit (919), revealing faction, 2525 silver [SILV], wood elf [WELF],
;  sword [SWOR]. Weight: 11. Capacity: 0/0/15/0. Skills: combat [COMB]
;  1 (30).
@work

unit 1667
;Unit (1667), revealing faction, 6736 silver [SILV], viking [VIKI], 2
;  horses [HORS]. Weight: 110. Capacity: 0/140/155/0. Skills: none.
@work

unit 1810
;Unit (1810), revealing faction, plainsman [PLAI], 17986 silver [SILV],
;  horse [HORS]. Weight: 60. Capacity: 0/70/85/0. Skills: none.
@work

unit 2262
;Unit (2262), revealing faction, 69 wood elves [WELF]. Weight: 690.
;  Capacity: 0/0/1035/0. Skills: combat [COMB] 1 (30).
@work

;*** plain (78,16) in Morungol ***

unit 2586
;Unit (2586), revealing faction, wood elf [WELF], 71 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** forest (59,17) in Nugyru ***

unit 1137
;Etrius (1137), revealing faction, holding, receiving no aid, 2 vikings
;  [VIKI], 262 silver [SILV], 19 crossbows [XBOW]. Weight: 39.
;  Capacity: 0/0/30/0. Skills: combat [COMB] 1 (30).
@work

;*** plain (73,17) in Bocholt ***

unit 1018
;Unit (1018), on guard, revealing faction, 17 high elves [HELF], 1918
;  silver [SILV]. Weight: 170. Capacity: 0/0/255/0. Skills: combat
;  [COMB] 2 (90).
@work
@guard 1

unit 733
;Unit (733), revealing faction, 590 silver [SILV], 5 high elves [HELF].
;  Weight: 50. Capacity: 0/0/75/0. Skills: combat [COMB] 1 (30).
@work

unit 2815
;Unit (2815), on guard, revealing faction, 2956 silver [SILV], 100
;  vikings [VIKI]. Weight: 1000. Capacity: 0/0/1500/0. Skills: combat
;  [COMB] 1 (30).
@work
@guard 1
@give 2208 50 silv
@give 2209 70 silv
@give 3087 70 silv
@give 2054 100 silv

;*** plain (75,17) in Bocholt, contains Einheim [town] ***

unit 188
;Unit (188), behind, revealing faction, leader [LEAD], 2368 silver
;  [SILV], horse [HORS]. Weight: 60. Capacity: 0/70/85/0. Skills:
;  tactics [TACT] 5 (450), stealth [STEA] 2 (90).
@study stea

unit 2113
;Unit (2113), on guard, revealing faction, 1948 silver [SILV], 10
;  leaders [LEAD], sword [SWOR]. Weight: 101. Capacity: 0/0/150/0.
;  Skills: combat [COMB] 4 (360), longbow [LBOW] 2 (120).
@tax
@guard 1
@study comb

unit 208
;Unit (208), on guard, revealing faction, 6347 silver [SILV], 200
;  vikings [VIKI], 200 horses [HORS], 50 swords [SWOR]. Weight: 12050.
;  Capacity: 0/14000/17000/0. Skills: combat [COMB] 3 (180).
@tax
@guard 1
@work

unit 382
;Unit (382), on guard, revealing faction, 1610 silver [SILV], 10
;  leaders [LEAD]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
;  [COMB] 3 (180), longbow [LBOW] 2 (150).
@tax
@guard 1
@study lbow

unit 1235
;Unit (1235), on guard, revealing faction, 10 leaders [LEAD], 1605
;  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
;  [COMB] 4 (300), longbow [LBOW] 2 (120), riding [RIDI] 1 (30).
@tax
@guard 1
@study ridi

unit 1271
;Unit (1271), on guard, revealing faction, 10 leaders [LEAD], 1505
;  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
;  [COMB] 4 (360), longbow [LBOW] 2 (120).
@tax
@guard 1
@study comb

unit 1286
;Unit (1286), on guard, revealing faction, 10 leaders [LEAD], 1605
;  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
;  [COMB] 4 (300), longbow [LBOW] 2 (120), crossbow [XBOW] 1 (30).
@tax
@guard 1
@study xbow

unit 1354
;Unit (1354), on guard, revealing faction, 10 leaders [LEAD], 1505
;  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
;  [COMB] 4 (330), longbow [LBOW] 2 (120), healing [HEAL] 1 (30).
@tax
@guard 1
@study heal

unit 1414
;Unit (1414), on guard, revealing faction, 10 leaders [LEAD], 1505
;  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
;  [COMB] 4 (330), longbow [LBOW] 2 (120), herb lore [HERB] 1 (30).
@tax
@guard 1
@study herb

unit 1416
;Unit (1416), on guard, revealing faction, 10 leaders [LEAD], 1506
;  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
;  [COMB] 4 (330), longbow [LBOW] 2 (120), crossbow [XBOW] 1 (30).
@tax
@guard 1
@study xbow

unit 923
;Unit (923), on guard, revealing faction, 6660 silver [SILV], 200
;  vikings [VIKI], 200 horses [HORS]. Weight: 12000. Capacity:
;  0/14000/17000/0. Skills: combat [COMB] 3 (180).
@tax
@guard 1
@work

unit 1353
;Unit (1353), revealing faction, 1216 silver [SILV], leader [LEAD].
;  Weight: 10. Capacity: 0/0/15/0. Skills: observation [OBSE] 3 (270).
@study obse

unit 1371
;Unit (1371), revealing faction, 1216 silver [SILV], leader [LEAD].
;  Weight: 10. Capacity: 0/0/15/0. Skills: stealth [STEA] 3 (270).
@study stea

unit 2841
;Unit (2841), revealing faction, 7485 silver [SILV], 82 vikings [VIKI],
;  3 swords [SWOR], 2 horses [HORS]. Weight: 923. Capacity:
;  0/140/1370/0. Skills: combat [COMB] 3 (180).
@tax
@work
@buy all hors

unit 1141
;Unit (1141), revealing faction, 1746 silver [SILV], 84 nomads [NOMA].
;  Weight: 840. Capacity: 0/0/1260/0. Skills: none.
@work

unit 1798
;Unit (1798), revealing faction, 636 silver [SILV], 60 wood elves
;  [WELF]. Weight: 600. Capacity: 0/0/900/0. Skills: none.
@work

unit 1492
;Vareius (1492), avoiding, revealing faction, nomad [NOMA], 8866 silver
;  [SILV], 60 horses [HORS], 300 longbows [LBOW]. Weight: 3310.
;  Capacity: 0/4200/4215/0. Skills: entertainment [ENTE] 1 (30).
move n
@TURN
move s
ENDTURN
@TURN
move n
ENDTURN

unit 1051
;Unit (1051), revealing faction, 10288 silver [SILV], 105 horses
;  [HORS], viking [VIKI], 44 swords [SWOR], 44 crossbows [XBOW].
;  Weight: 5348. Capacity: 0/7350/7365/0. Skills: none.
move sw sw
@TURN
move ne ne
ENDTURN
@TURN
move se se
ENDTURN
@TURN
move nw nw
ENDTURN
@TURN
move sw sw
ENDTURN

;*** plain (77,17) in Morungol ***

unit 1715
;Agrius (1715), revealing faction, holding, viking [VIKI], 1112 silver
;  [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
;  (44).
@work

;*** forest (58,18) in Nugyru ***

unit 1114
;Cellian (1114), revealing faction, holding, receiving no aid, 2
;  vikings [VIKI], 48 silver [SILV]. Weight: 20. Capacity: 0/0/30/0.
;  Skills: combat [COMB] 1 (30).
@work

unit 748
;Unit (748), revealing faction, holding, receiving no aid, 60 silver
;  [SILV], viking [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (60,18) in Satiasam ***

unit 1888
;Unit (1888), revealing faction, 10 sea elves [SELF], 660 silver
;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 2
;  (90).
@work

unit 1035
;Unit (1035), revealing faction, 5 sea elves [SELF], 330 silver [SILV].
;  Weight: 50. Capacity: 0/0/75/0. Skills: combat [COMB] 1 (30).
@work

unit 1134
;Unit (1134), revealing faction, 76 silver [SILV], sea elf [SELF].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** plain (64,18) in Satiasam ***

unit 1530
;Unit (1530), revealing faction, 10 nomads [NOMA], 440 silver [SILV].
;  Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1 (30).
@work

unit 2721
;Unit (2721), revealing faction, nomad [NOMA], 35 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: none.
@work

unit 1285
;Unit (1285), revealing faction, 8487 silver [SILV], 139 vikings
;  [VIKI]. Weight: 1390. Capacity: 0/0/2085/0. Skills: combat [COMB] 1
;  (30).
@work

;*** plain (72,18) in Bocholt ***

unit 1078
;Unit (1078), revealing faction, 16 sea elves [SELF], 1510 silver
;  [SILV]. Weight: 160. Capacity: 0/0/240/0. Skills: combat [COMB] 2
;  (90).
@work

unit 1311
;Unit (1311), revealing faction, 6 sea elves [SELF], 499 silver [SILV].
;  Weight: 60. Capacity: 0/0/90/0. Skills: combat [COMB] 1 (30).
@work

unit 1468
;Unit (1468), on guard, revealing faction, 7746 silver [SILV], 100
;  vikings [VIKI]. Weight: 1000. Capacity: 0/0/1500/0. Skills: combat
;  [COMB] 1 (30).
@guard 1
@work
@give 2740 40 silv

;*** plain (74,18) in Bocholt ***

unit 1528
;Unit (1528), on guard, revealing faction, 10 nomads [NOMA], 420 silver
;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 2
;  (90).
@work
@guard 1

unit 1801
;Unit (1801), revealing faction, 291 silver [SILV], 4 nomads [NOMA].
;  Weight: 40. Capacity: 0/0/60/0. Skills: combat [COMB] 1 (30).
@work

unit 611
;Unit (611), revealing faction, 6135 silver [SILV], nomad [NOMA].
;  Weight: 10. Capacity: 0/0/15/0. Skills: none.
@work

;*** forest (76,18) in Uzrot ***

unit 1121
;Unit (1121), revealing faction, wood elf [WELF], 36 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 1150
;Unit (1150), revealing faction, 2 sea elves [SELF], 73 silver [SILV],
;  sword [SWOR]. Weight: 21. Capacity: 0/0/30/0. Skills: combat [COMB]
;  1 (44).
@work

unit 1828
;Unit (1828), revealing faction, wood elf [WELF], 36 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 2044
;Unit (2044), revealing faction, 49 silver [SILV], wood elf [WELF].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** forest (57,19) in Nugyru ***

unit 1116
;Mantius (1116), avoiding, revealing faction, holding, receiving no
;  aid, viking [VIKI], 24 silver [SILV]. Weight: 10. Capacity:
;  0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 1309
;Lufanius (1309), avoiding, revealing faction, holding, receiving no
;  aid, sea elf [SELF], 24 silver [SILV]. Weight: 10. Capacity:
;  0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 1061
;Unit (1061), avoiding, revealing faction, holding, receiving no aid,
;  64 silver [SILV], sea elf [SELF]. Weight: 10. Capacity: 0/0/15/0.
;  Skills: combat [COMB] 1 (30).
@work

;*** forest (59,19) in Nugyru ***

unit 1132
;Cirrunia (1132), revealing faction, holding, 3 vikings [VIKI], 368
;  silver [SILV]. Weight: 30. Capacity: 0/0/45/0. Skills: combat [COMB]
;  1 (30).
@work

;*** plain (61,19) in Satiasam ***

unit 1838
;Unit (1838), on guard, revealing faction, 10 sea elves [SELF], 601
;  silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
;  [COMB] 2 (90).
@work
@guard 1

unit 1077
;Unit (1077), revealing faction, 4 sea elves [SELF], 242 silver [SILV].
;  Weight: 40. Capacity: 0/0/60/0. Skills: combat [COMB] 1 (30).
@work

unit 1866
;Unit (1866), revealing faction, sea elf [SELF], 60 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 1453
;Unit (1453), revealing faction, sea elf [SELF], 55 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** plain (63,19) in Satiasam, contains Dun-krag [city] ***

unit 1140
;Cullius (1140), revealing faction, 2 nomads [NOMA], 4 winged horses
;  [WING], 20 silver [SILV]. Weight: 220. Capacity: 280/280/310/0.
;  Skills: entertainment [ENTE] 1 (30).
@entertain

unit 1349
;Gratera (1349), on guard, revealing faction, 10 leaders [LEAD], 422
;  silver [SILV], 2 winged horses [WING]. Weight: 200. Capacity:
;  140/140/290/0. Skills: combat [COMB] 4 (360), observation [OBSE] 5
;  (450), crossbow [XBOW] 2 (150).
@tax
@guard 1
@study xbow

unit 890
;Unit (890), on guard, revealing faction, 100 leaders [LEAD], sword
;  [SWOR], 4120 silver [SILV]. Weight: 1001. Capacity: 0/0/1500/0.
;  Skills: combat [COMB] 5 (450), crossbow [XBOW] 3 (180).
@tax
@guard 1
@study xbow

unit 1025
;Unit (1025), on guard, revealing faction, 100 leaders [LEAD], 2 swords
;  [SWOR], 4120 silver [SILV]. Weight: 1002. Capacity: 0/0/1500/0.
;  Skills: combat [COMB] 5 (450), crossbow [XBOW] 3 (180).
@tax
@guard 1
@study xbow

unit 1115
;Unit (1115), on guard, revealing faction, 100 leaders [LEAD], 4217
;  silver [SILV], 2 swords [SWOR]. Weight: 1002. Capacity: 0/0/1500/0.
;  Skills: combat [COMB] 5 (450), crossbow [XBOW] 3 (240).
@tax
@guard 1
@study xbow

unit 235
;Unit (235), revealing faction, 2168 vikings [VIKI], 84952 silver
;  [SILV], 7 swords [SWOR], 160 horses [HORS]. Weight: 29687. Capacity:
;  0/11200/43720/0. Skills: combat [COMB] 3 (180).
@tax
@work
@give 2165 300 silv

unit 2165
;Unit (2165), behind, revealing faction, leader [LEAD], 1330 silver
;  [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: tactics [TACT] 5
;  (450), observation [OBSE] 1 (60).
@study obse

unit 1478
;Unit (1478), behind, revealing faction, 4014 silver [SILV], leader
;  [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: observation [OBSE] 4
;  (360).
@study obse

unit 1159
;Unit (1159), revealing faction, 3084 silver [SILV], leader [LEAD].
;  Weight: 10. Capacity: 0/0/15/0. Skills: observation [OBSE] 1 (60),
;  stealth [STEA] 3 (270).
@study stea

unit 1467
;Unit (1467), revealing faction, 337 silver [SILV], nomad [NOMA], 27
;  horses [HORS]. Weight: 1360. Capacity: 0/1890/1905/0. Skills: none.
move s
@TURN
move se
ENDTURN
@TURN
move nw
ENDTURN
@TURN
move n
ENDTURN
@TURN
move s
ENDTURN

unit 2296
;Unit (2296), revealing faction, tribesman [TMAN], horse [HORS], 170
;  silver [SILV]. Weight: 60. Capacity: 0/70/85/0. Skills: none.

;*** plain (71,19) in Bocholt ***

unit 1356
;Unit (1356), revealing faction, 7 sea elves [SELF], 752 silver [SILV].
;  Weight: 70. Capacity: 0/0/105/0. Skills: combat [COMB] 2 (90).
@work

unit 1144
;Unit (1144), revealing faction, 8 vikings [VIKI], 536 silver [SILV].
;  Weight: 80. Capacity: 0/0/120/0. Skills: combat [COMB] 1 (86).
@work

;*** plain (73,19) in Bocholt, contains Ineault'y [city] ***

unit 1081
;Sevellaeius (1081), avoiding, revealing faction, holding, receiving no
;  aid, nomad [NOMA], stone [STON], longbow [LBOW]. Weight: 61.
;  Capacity: 0/0/15/0. Skills: entertainment [ENTE] 1 (30).
@entertain

unit 1157
;Cimonia (1157), revealing faction, 61 high elves [HELF], 61 horses
;  [HORS], 3763 silver [SILV]. Weight: 3660. Capacity: 0/4270/5185/0.
;  Skills: combat [COMB] 2 (90).
@work
@tax

unit 908
;Manius (908), on guard, revealing faction, 275 sea elves [SELF], 13064
;  silver [SILV], 251 horses [HORS]. Weight: 15300. Capacity:
;  0/17570/21695/0. Skills: combat [COMB] 2 (90).
@tax
@work
@give 1341 400 silv
@give 1277 400 silv
@give 1186 200 silv
@buy all hors
@guard 1
@give 1859 10000 silv

unit 1236
;Salecia (1236), revealing faction, 144 nomads [NOMA], 144 horses
;  [HORS], 5264 silver [SILV]. Weight: 8640. Capacity: 0/10080/12240/0.
;  Skills: combat [COMB] 2 (90).
@tax
@work
@give 908 all silv

unit 1186
;Jallius (1186), behind, revealing faction, 214 silver [SILV], leader
;  [LEAD], horse [HORS]. Weight: 60. Capacity: 0/70/85/0. Skills:
;  combat [COMB] 1 (60), tactics [TACT] 5 (450), observation [OBSE] 3
;  (270).
@study obse
@tax

unit 1185
;Unit (1185), revealing faction, 10 leaders [LEAD], 376 silver [SILV],
;  10 horses [HORS]. Weight: 600. Capacity: 0/700/850/0. Skills: combat
;  [COMB] 3 (240), crossbow [XBOW] 3 (210).
@tax
@teach 1234

unit 1237
;Unit (1237), revealing faction, 10 leaders [LEAD], 876 silver [SILV],
;  10 horses [HORS]. Weight: 600. Capacity: 0/700/850/0. Skills: combat
;  [COMB] 3 (210), longbow [LBOW] 4 (300), crossbow [XBOW] 3 (180),
;  stealth [STEA] 2 (120).
@study stea
@tax

unit 1269
;Unit (1269), revealing faction, 10 leaders [LEAD], 376 silver [SILV],
;  10 horses [HORS]. Weight: 600. Capacity: 0/700/850/0. Skills: combat
;  [COMB] 3 (210), crossbow [XBOW] 5 (450).
@teach 1724
@tax

unit 1277
;Unit (1277), revealing faction, 10 leaders [LEAD], 877 silver [SILV],
;  10 horses [HORS]. Weight: 600. Capacity: 0/700/850/0. Skills: combat
;  [COMB] 3 (210), observation [OBSE] 5 (450), crossbow [XBOW] 3 (240).
@tax
@teach 1534

unit 1341
;Unit (1341), revealing faction, 10 leaders [LEAD], 777 silver [SILV],
;  10 horses [HORS]. Weight: 600. Capacity: 0/700/850/0. Skills: combat
;  [COMB] 3 (210), stealth [STEA] 5 (450), crossbow [XBOW] 3 (270).
@tax
@study xbow

unit 1402
;Unit (1402), revealing faction, 10 leaders [LEAD], 278 silver [SILV],
;  10 horses [HORS]. Weight: 600. Capacity: 0/700/850/0. Skills: combat
;  [COMB] 3 (210), riding [RIDI] 5 (450), crossbow [XBOW] 3 (270).
@tax
@study xbow

unit 1055
;Unit (1055), revealing faction, 41973 silver [SILV], 623 vikings
;  [VIKI], 623 horses [HORS], chain armor [CARM], 4 swords [SWOR].
;  Weight: 37385. Capacity: 0/43610/52955/0. Skills: combat [COMB] 3
;  (180).
@work
@tax

unit 2171
;Unit (2171), revealing faction, 10 leaders [LEAD], 333 silver [SILV],
;  10 horses [HORS]. Weight: 600. Capacity: 0/700/850/0. Skills: combat
;  [COMB] 5 (450), crossbow [XBOW] 3 (180).
@tax
@study comb

unit 2173
;Unit (2173), revealing faction, 10 leaders [LEAD], 333 silver [SILV],
;  10 horses [HORS]. Weight: 600. Capacity: 0/700/850/0. Skills: combat
;  [COMB] 5 (450), crossbow [XBOW] 3 (210).
@study xbow
@tax

unit 2295
;Unit (2295), revealing faction, 10 leaders [LEAD], 334 silver [SILV],
;  10 horses [HORS]. Weight: 600. Capacity: 0/700/850/0. Skills: combat
;  [COMB] 4 (360), crossbow [XBOW] 3 (180), riding [RIDI] 2 (120).
@study ridi
@tax

unit 1534
;Unit (1534), revealing faction, 100 leaders [LEAD], 2804 silver
;  [SILV], 100 crossbows [XBOW], 42 horses [HORS]. Weight: 3200.
;  Capacity: 0/2940/4440/0. Skills: combat [COMB] 2 (150), crossbow
;  [XBOW] 3 (240).
@tax
@study comb

unit 888
;Unit (888), revealing faction, 50 vikings [VIKI], 50 horses [HORS],
;  3682 silver [SILV]. Weight: 3000. Capacity: 0/3500/4250/0. Skills:
;  combat [COMB] 3 (180).
@tax
@work

unit 2041
;Unit (2041), revealing faction, 9234 silver [SILV], 184 nomads [NOMA],
;  119 crossbows [XBOW]. Weight: 1959. Capacity: 0/0/2760/0. Skills:
;  crossbow [XBOW] 3 (180).
@tax
@work

unit 2670
;Unit (2670), revealing faction, 184 nomads [NOMA], 1284 silver [SILV].
;  Weight: 1840. Capacity: 0/0/2760/0. Skills: crossbow [XBOW] 3 (180).
@work

unit 1664
;Unit (1664), revealing faction, 60 nomads [NOMA]. Weight: 600.
;  Capacity: 0/0/900/0. Skills: crossbow [XBOW] 3 (180).
@tax

unit 1724
;Unit (1724), revealing faction, 100 nomads [NOMA], 34 silver [SILV].
;  Weight: 1000. Capacity: 0/0/1500/0. Skills: crossbow [XBOW] 3 (180).
@study xbow

unit 1234
;Unit (1234), revealing faction, 37 silver [SILV], 100 nomads [NOMA].
;  Weight: 1000. Capacity: 0/0/1500/0. Skills: crossbow [XBOW] 1 (60).
@study xbow

;*** plain (75,19) in Bocholt ***

unit 1902
;Unit (1902), revealing faction, 10 vikings [VIKI], chain armor [CARM],
;  660 silver [SILV]. Weight: 101. Capacity: 0/0/150/0. Skills: combat
;  [COMB] 2 (120).
@work

unit 1168
;Unit (1168), revealing faction, stone [STON], 3 nomads [NOMA], 198
;  silver [SILV]. Weight: 80. Capacity: 0/0/45/0. Skills: combat [COMB]
;  1 (60).
@work

unit 2345
;Unit (2345), revealing faction, 293 silver [SILV], 2 nomads [NOMA].
;  Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB] 1 (30).
@work

;*** plain (77,19) in Morungol, contains Mustlor [city] ***

unit 1267
;Notarcius (1267), avoiding, revealing faction, 3 vikings [VIKI], 3
;  horses [HORS], 73 silver [SILV]. Weight: 180. Capacity: 0/210/255/0.
;  Skills: entertainment [ENTE] 1 (30).
@entertain

unit 579
;Unit (579), avoiding, revealing faction, holding, receiving no aid,
;  nomad [NOMA], 25062 silver [SILV], 99 horses [HORS], 44 swords
;  [SWOR], 46 crossbows [XBOW]. Weight: 5050. Capacity: 0/6930/6945/0.
;  Skills: entertainment [ENTE] 1 (30).
@entertain
@buy all xbow
@buy all swor
@buy all hors

unit 1082
;Ortia (1082), revealing faction, 305 vikings [VIKI], 305 horses
;  [HORS], 305 swords [SWOR], 17653 silver [SILV]. Weight: 18605.
;  Capacity: 0/21350/25925/0. Skills: combat [COMB] 3 (180).
@work
@give 215 220 silv
@tax
@give 579 10000 silv

unit 215
;Unit (215), behind, revealing faction, 598 silver [SILV], leader
;  [LEAD], horse [HORS]. Weight: 60. Capacity: 0/70/85/0. Skills:
;  tactics [TACT] 5 (450), stealth [STEA] 2 (90).
@study stea

unit 642
;Unit (642), revealing faction, 2383 silver [SILV], leader [LEAD],
;  horse [HORS]. Weight: 60. Capacity: 0/70/85/0. Skills: combat [COMB]
;  4 (360).
@tax
@study comb

unit 1155
;Unit (1155), behind, revealing faction, leader [LEAD], 300 silver
;  [SILV], horse [HORS], crossbow [XBOW]. Weight: 61. Capacity:
;  0/70/85/0. Skills: tactics [TACT] 1 (30), crossbow [XBOW] 4 (330).
@tax
@study xbow

unit 1543
;Unit (1543), on guard, revealing faction, 100 vikings [VIKI], 100
;  horses [HORS], 16005 silver [SILV], 100 swords [SWOR]. Weight: 6100.
;  Capacity: 0/7000/8500/0. Skills: combat [COMB] 3 (180).
@tax
@work
@guard 1

unit 1633
;Unit (1633), revealing faction, 100 horses [HORS], 100 vikings [VIKI],
;  100 swords [SWOR], 4228 silver [SILV]. Weight: 6100. Capacity:
;  0/7000/8500/0. Skills: combat [COMB] 2 (150).
@tax
@study comb
@give 579 2000 silv

unit 1783
;Unit (1783), revealing faction, 100 horses [HORS], 100 vikings [VIKI],
;  7205 silver [SILV], 100 swords [SWOR]. Weight: 6100. Capacity:
;  0/7000/8500/0. Skills: combat [COMB] 1 (30).
@tax
@work
@give 579 4400 silv

unit 1851
;Unit (1851), revealing faction, 100 vikings [VIKI], 100 horses [HORS],
;  7217 silver [SILV], 100 swords [SWOR]. Weight: 6100. Capacity:
;  0/7000/8500/0. Skills: combat [COMB] 1 (30).
@tax
@work
@give 579 4400 silv

unit 1297
;Unit (1297), revealing faction, 10 leaders [LEAD], 1739 silver [SILV],
;  10 horses [HORS], 10 swords [SWOR]. Weight: 610. Capacity:
;  0/700/850/0. Skills: combat [COMB] 3 (180).
@teach 1633
@tax

unit 1317
;Unit (1317), behind, revealing faction, 10 leaders [LEAD], 1736 silver
;  [SILV], 10 horses [HORS], 10 crossbows [XBOW]. Weight: 610.
;  Capacity: 0/700/850/0. Skills: crossbow [XBOW] 3 (180).
@teach 1386
@tax

unit 2781
;Unit (2781), revealing faction, 30 vikings [VIKI], 14233 silver
;  [SILV], 30 horses [HORS], 30 swords [SWOR]. Weight: 1830. Capacity:
;  0/2100/2550/0. Skills: combat [COMB] 1 (30).
@tax
@work

unit 1386
;Unit (1386), revealing faction, 100 nomads [NOMA], 100 crossbows
;  [XBOW], 100 horses [HORS], 23421 silver [SILV]. Weight: 6100.
;  Capacity: 0/7000/8500/0. Skills: crossbow [XBOW] 2 (150).
@tax
@study xbow

unit 1955
;Unit (1955), behind, revealing faction, 16218 silver [SILV], 100
;  nomads [NOMA], 100 crossbows [XBOW], 100 horses [HORS]. Weight:
;  6100. Capacity: 0/7000/8500/0. Skills: crossbow [XBOW] 3 (180).
@work
@tax

unit 2627
;Unit (2627), avoiding, revealing faction, 3273 silver [SILV], 70
;  nomads [NOMA], 70 crossbows [XBOW], 70 horses [HORS]. Weight: 4270.
;  Capacity: 0/4900/5950/0. Skills: none.
@work

unit 2509
;Unit (2509), avoiding, revealing faction, 36 silver [SILV], viking
;  [VIKI], horse [HORS]. Weight: 60. Capacity: 0/70/85/0. Skills: none.
@work
@tax

unit 962
;Unit (962), avoiding, revealing faction, 100 nomads [NOMA], 100
;  crossbows [XBOW], 449 silver [SILV], 100 horses [HORS]. Weight:
;  6100. Capacity: 0/7000/8500/0. Skills: crossbow [XBOW] 2 (90).
@study xbow

unit 1242
;Papurius (1242), revealing faction, nomad [NOMA], 55 horses [HORS],
;  60082 silver [SILV]. Weight: 2760. Capacity: 0/3850/3865/0. Skills:
;  entertainment [ENTE] 1 (30).
move nw nw
@TURN
move se se
ENDTURN
@TURN
move nw nw
ENDTURN

;*** forest (58,20) in Nugyru ***

unit 1059
;Virius (1059), revealing faction, holding, tribal elf [TELF], 24
;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
;  1 (30).
@work

unit 1442
;Uncius (1442), revealing faction, holding, sea elf [SELF], 24 silver
;  [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
;  (30).
@work

unit 1331
;Unit (1331), revealing faction, holding, 71 silver [SILV], sea elf
;  [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
;  (30).
@work

;*** plain (60,20) in Satiasam ***

unit 1889
;Unit (1889), revealing faction, 10 sea elves [SELF], 734 silver
;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 2
;  (90).
@work

unit 1379
;Unit (1379), revealing faction, 407 silver [SILV], 5 plainsmen [PLAI].
;  Weight: 50. Capacity: 0/0/75/0. Skills: combat [COMB] 1 (30).
@work

;*** plain (62,20) in Satiasam, contains Oufodale [city] ***

unit 1276
;Maro (1276), revealing faction, high elf [HELF], 207 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: entertainment [ENTE] 1 (30).
@entertain

unit 1388
;Cateius (1388), revealing faction, 2 sea elves [SELF], 474 silver
;  [SILV], 15 horses [HORS]. Weight: 770. Capacity: 0/1050/1080/0.
;  Skills: entertainment [ENTE] 1 (30).
@entertain

unit 1433
;Unit (1433), revealing faction, nomad [NOMA]. Weight: 10. Capacity:
;  0/0/15/0. Skills: combat [COMB] 2 (90).
move ne
@TURN
move sw
give 235 all hors
ENDTURN
@TURN
move ne
ENDTURN

;*** plain (64,20) in Satiasam ***

unit 1650
;Unit (1650), revealing faction, 10 nomads [NOMA], 805 silver [SILV].
;  Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1 (30).
@work

unit 2777
;Unit (2777), revealing faction, nomad [NOMA], 47 silver [SILV],
;  figurines [FIGU], 3 fish [FISH], 2 tarot cards [TARO], 3 wood
;  [WOOD], 5 livestock [LIVE], 2 chocolate [CHOC]. Weight: 291.
;  Capacity: 0/0/265/0. Skills: none.
@work

unit 2814
;Unit (2814), revealing faction, 9655 silver [SILV], 148 vikings
;  [VIKI]. Weight: 1480. Capacity: 0/0/2220/0. Skills: combat [COMB] 1
;  (60).
@work

;*** plain (72,20) in Bocholt ***

unit 1355
;Unit (1355), revealing faction, 45 vikings [VIKI], 8500 silver [SILV].
;  Weight: 450. Capacity: 0/0/675/0. Skills: combat [COMB] 3 (180).
@tax
@work

unit 399
;Unit (399), revealing faction, nomad [NOMA], 140 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: entertainment [ENTE] 1 (30).
@entertain

unit 1444
;Unit (1444), on guard, revealing faction, 100 vikings [VIKI], 18822
;  silver [SILV]. Weight: 1000. Capacity: 0/0/1500/0. Skills: combat
;  [COMB] 2 (90).
@tax
@work
@guard 1
@give 2730 50 silv

;*** plain (74,20) in Bocholt ***

unit 1265
;Allia (1265), revealing faction, 66 nomads [NOMA], herb [HERB], 11780
;  silver [SILV]. Weight: 660. Capacity: 0/0/990/0. Skills: combat
;  [COMB] 2 (90).
@tax
@work
@give 3028 170 silv
@give 3088 140 silv

unit 353
;Unit (353), revealing faction, nomad [NOMA], 140 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: entertainment [ENTE] 1 (30).
@entertain

unit 2112
;Unit (2112), on guard, revealing faction, 13394 silver [SILV], 94
;  vikings [VIKI]. Weight: 940. Capacity: 0/0/1410/0. Skills: combat
;  [COMB] 1 (60).
@work
@tax
@guard 1

;*** forest (59,21) in Nugyru ***

unit 1241
;Unit (1241), revealing faction, 436 silver [SILV], wood elf [WELF].
;  Weight: 10. Capacity: 0/0/15/0. Skills: none.
@work

;*** plain (61,21) in Satiasam ***

unit 1822
;Unit (1822), on guard, revealing faction, 10 sea elves [SELF], 501
;  silver [SILV], 6 winged horses [WING]. Weight: 400. Capacity:
;  420/420/570/0. Skills: combat [COMB] 2 (90).
@work
@guard 1

unit 1948
;Unit (1948), revealing faction, 3 high elves [HELF], 151 silver
;  [SILV]. Weight: 30. Capacity: 0/0/45/0. Skills: combat [COMB] 1
;  (30).
@work

unit 1549
;Unit (1549), revealing faction, 103 silver [SILV], high elf [HELF].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** plain (63,21) in Satiasam ***

unit 1662
;Unit (1662), revealing faction, 10 nomads [NOMA], 698 silver [SILV], 9
;  horses [HORS]. Weight: 550. Capacity: 0/630/780/0. Skills: combat
;  [COMB] 2 (90).
@work

unit 1394
;Unit (1394), revealing faction, nomad [NOMA], 182 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: none.
move n
@TURN
move s
give 235 all hors
ENDTURN
@TURN
move n
ENDTURN

unit 191
;Unit (191), revealing faction, nomad [NOMA], 339 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: none.
move se
@TURN
move nw
ENDTURN
@TURN
move n
ENDTURN
@TURN
move s
ENDTURN
@TURN
move se
ENDTURN

;*** plain (73,21) in Bocholt ***

unit 1904
;Unit (1904), revealing faction, 10 nomads [NOMA], 3043 silver [SILV],
;  grain [GRAI]. Weight: 105. Capacity: 0/0/150/0. Skills: combat
;  [COMB] 2 (90).
@work

unit 2734
;Unit (2734), revealing faction, 10160 silver [SILV], nomad [NOMA].
;  Weight: 10. Capacity: 0/0/15/0. Skills: none.
@work

unit 637
;Unit (637), revealing faction, 6432 silver [SILV], nomad [NOMA].
;  Weight: 10. Capacity: 0/0/15/0. Skills: none.
@work

unit 1033
;Unit (1033), revealing faction, 2563 silver [SILV], 91 nomads [NOMA],
;  wood [WOOD], chain armor [CARM], 2 cashmere [CASH], 2 grain [GRAI].
;  Weight: 936. Capacity: 0/0/1365/0. Skills: combat [COMB] 1 (30).
@work

;*** forest (58,22) in Nugyru ***

unit 1208
;Gasceius (1208), revealing faction, 77 vikings [VIKI], 21505 silver
;  [SILV], 3 rootstone [ROOT], double bow [DBOW]. Weight: 921.
;  Capacity: 0/0/1155/0. Skills: combat [COMB] 3 (180).
@tax
@give 1644 220 silv
@work

unit 1644
;Sonnius (1644), behind, revealing faction, 3164 silver [SILV], leader
;  [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 4
;  (420), tactics [TACT] 5 (450).
@tax
@study comb

unit 2056
;Unit (2056), revealing faction, 4060 silver [SILV], leader [LEAD].
;  Weight: 10. Capacity: 0/0/15/0. Skills: observation [OBSE] 4 (360).
@study obse

;*** forest (60,22) in Nugyru, contains Soroldel [city] ***

unit 1229
;Justinia (1229), revealing faction, 3 wood elves [WELF], 30 silver
;  [SILV]. Weight: 30. Capacity: 0/0/45/0. Skills: entertainment [ENTE]
;  1 (30).
@entertain

unit 1787
;Unit (1787), on guard, revealing faction, leader [LEAD], 955 silver
;  [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 5
;  (450), stealth [STEA] 3 (180).
@tax
@guard 1
@study stea

unit 1094
;Ilfius (1094), revealing faction, 1018 high elves [HELF], 43733 silver
;  [SILV], 8 mithril swords [MSWO], 6 mithril armor [MARM]. Weight:
;  10194. Capacity: 0/0/15270/0. Skills: combat [COMB] 2 (90).
@tax
@work

unit 1179
;Cnician (1179), revealing faction, 3 tribesmen [TMAN], 31 rootstone
;  [ROOT], 10 double bows [DBOW], 3 chocolate [CHOC], 5 figurines
;  [FIGU], 14 floater hides [FLOA], herb [HERB], 30 ironwood [IRWD], 2
;  jewelry [JEWE], 4 livestock [LIVE], 10 mithril [MITH], stone [STON],
;  4 velvet [VELV], vodka [VODK], 2 wagons [WAGO], 2 wood [WOOD], 10
;  yew [YEW], winged horse [WING], 103 silver [SILV]. Weight: 2511.
;  Capacity: 70/70/315/0. Skills: combat [COMB] 2 (90).
@tax
@work

unit 278
;Unit (278), revealing faction, 100 leaders [LEAD], 1834 silver [SILV],
;  89 horses [HORS]. Weight: 5450. Capacity: 0/6230/7730/0. Skills:
;  combat [COMB] 5 (450), longbow [LBOW] 3 (210).
@tax
@study lbow

unit 281
;Unit (281), revealing faction, 100 leaders [LEAD], 1910 silver [SILV],
;  89 horses [HORS], mithril armor [MARM]. Weight: 5451. Capacity:
;  0/6230/7730/0. Skills: combat [COMB] 5 (450), crossbow [XBOW] 2
;  (120).
@tax
@study xbow

unit 2504
;Unit (2504), revealing faction, 90 silver [SILV], 10 leaders [LEAD],
;  winged horse [WING]. Weight: 150. Capacity: 70/70/220/0. Skills:
;  combat [COMB] 3 (180), longbow [LBOW] 3 (240), stealth [STEA] 1
;  (30).
@tax
@study stea

unit 2188
;Unit (2188), revealing faction, 600 silver [SILV], leader [LEAD].
;  Weight: 10. Capacity: 0/0/15/0. Skills: observation [OBSE] 4 (330).
@study obse

unit 1670
;Unit (1670), revealing faction, 376 silver [SILV], leader [LEAD].
;  Weight: 10. Capacity: 0/0/15/0. Skills: tactics [TACT] 3 (270).
@study tact

;*** plain (62,22) in Satiasam ***

unit 1821
;Unit (1821), revealing faction, 10 sea elves [SELF], sword [SWOR], 600
;  silver [SILV]. Weight: 101. Capacity: 0/0/150/0. Skills: combat
;  [COMB] 2 (90).
@work

unit 2204
;Unit (2204), on guard, revealing faction, 100 high elves [HELF], 6000
;  silver [SILV]. Weight: 1000. Capacity: 0/0/1500/0. Skills: combat
;  [COMB] 1 (30).
@work
@guard 1

unit 1943
;Unit (1943), revealing faction, 788 silver [SILV], 10 high elves
;  [HELF]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1
;  (30).
@work

;*** plain (64,22) in Satiasam ***

unit 1382
;Rumituris (1382), revealing faction, tribesman [TMAN], 384 silver
;  [SILV], 10 sea elves [SELF]. Weight: 110. Capacity: 0/0/165/0.
;  Skills: combat [COMB] 1 (60).
@work

;*** jungle (74,22) in Donndinon ***

unit 1415
;Unit (1415), revealing faction, 52 silver [SILV], nomad [NOMA].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 1233
;Unit (1233), avoiding, revealing faction, holding, receiving no aid,
;  130391 silver [SILV], 5 horses [HORS], nomad [NOMA]. Weight: 260.
;  Capacity: 0/350/365/0. Skills: stealth [STEA] 1 (30).
MOVE S SW SW SW SW NW NW

;*** forest (59,23) in Nugyru ***

unit 1643
;Unit (1643), revealing faction, 119 silver [SILV], viking [VIKI].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** plain (61,23) in Satiasam, contains Sul'em'uq [village] ***

unit 1142
;Synisnius (1142), behind, revealing faction, holding, 6 nomads [NOMA],
;  602 silver [SILV]. Weight: 60. Capacity: 0/0/90/0. Skills:
;  entertainment [ENTE] 1 (30).
@entertain

unit 352
;Jucucolius (352), on guard, revealing faction, 379 sea elves [SELF],
;  131529 silver [SILV], 23 swords [SWOR]. Weight: 3813. Capacity:
;  0/0/5685/0. Skills: combat [COMB] 2 (90).
@work
@give 1240 11000 silv

unit 1193
;Pallitis (1193), revealing faction, leader [LEAD], 2816 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (60),
;  tactics [TACT] 5 (450), observation [OBSE] 4 (360).
@study obse

unit 1723
;Unit (1723), revealing faction, 30 vikings [VIKI], 2350 silver [SILV],
;  30 swords [SWOR]. Weight: 330. Capacity: 0/0/450/0. Skills: combat
;  [COMB] 3 (180).
@work

unit 1240
;Atratian (1240), behind, revealing faction, nomad [NOMA], 2 horses
;  [HORS], 102859 silver [SILV]. Weight: 110. Capacity: 0/140/155/0.
;  Skills: entertainment [ENTE] 1 (30).
move ne ne se se
TURN
move se se se
ENDTURN

;*** swamp (63,23) in Skelid ***

unit 2280
;Unit (2280), revealing faction, 32 tribesmen [TMAN]. Weight: 320.
;  Capacity: 0/0/480/0. Skills: combat [COMB] 1 (30).
@work

;*** swamp (65,23) in Skelid, contains W'tiaenth [city] ***

unit 584
;Trupsilius (584), revealing faction, holding, 8 tribesmen [TMAN], 80
;  silver [SILV]. Weight: 80. Capacity: 0/0/120/0. Skills:
;  entertainment [ENTE] 1 (30).
@entertain

unit 299
;Unit (299), revealing faction, holding, 5 tribesmen [TMAN], 5 dye
;  [DYE], 12 livestock [LIVE], wagon [WAGO], 5 wood [WOOD], 3 figurines
;  [FIGU], stone [STON], tarot cards [TARO], 50 silver [SILV]. Weight:
;  804. Capacity: 0/0/675/0. Skills: entertainment [ENTE] 1 (30).
@entertain

unit 925
;Unit (925), on guard, revealing faction, 4420 silver [SILV], 100
;  leaders [LEAD], 4 floater hides [FLOA], sword [SWOR]. Weight: 1005.
;  Capacity: 0/0/1500/0. Skills: combat [COMB] 4 (390).
@guard 1
@study comb
@tax

unit 972
;Unit (972), on guard, revealing faction, 100 tribesmen [TMAN], sword
;  [SWOR], 5355 silver [SILV]. Weight: 1001. Capacity: 0/0/1500/0.
;  Skills: combat [COMB] 1 (30).
@guard 1
@tax
@work

unit 976
;Unit (976), on guard, revealing faction, 100 tribesmen [TMAN], 4
;  floater hides [FLOA], 5355 silver [SILV]. Weight: 1004. Capacity:
;  0/0/1500/0. Skills: combat [COMB] 1 (30).
@guard 1
@tax
@work

unit 1982
;Unit (1982), revealing faction, 100 tribesmen [TMAN], 2 floater hides
;  [FLOA], 5355 silver [SILV]. Weight: 1002. Capacity: 0/0/1500/0.
;  Skills: combat [COMB] 1 (30).
@tax
@work

unit 2263
;Unit (2263), revealing faction, leader [LEAD], 2146 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: observation [OBSE] 4 (330).
@study obse

unit 1993
;Unit (1993), revealing faction, leader [LEAD], 1397 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: tactics [TACT] 3 (270).
@study tact

;*** forest (56,24) in Mallaig, contains Sorthandon [city] ***

unit 588
;Unit (588), behind, revealing faction, holding, 3344 silver [SILV], 16
;  vikings [VIKI]. Weight: 160. Capacity: 0/0/240/0. Skills:
;  entertainment [ENTE] 1 (30).
@entertain

unit 1195
;Appunia (1195), behind, revealing faction, holding, sea elf [SELF],
;  186 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  entertainment [ENTE] 1 (30).
@entertain

;*** plain (60,24) in Satiasam, contains Mikedale [town] ***

unit 1878
;Unit (1878), on guard, revealing faction, leader [LEAD], 19 horses
;  [HORS], longbow [LBOW]. Weight: 961. Capacity: 0/1330/1345/0.
;  Skills: combat [COMB] 5 (450), longbow [LBOW] 3 (240).
@tax
@guard 1
@study lbow

unit 1149
;Lipius (1149), behind, revealing faction, leader [LEAD], horse [HORS],
;  sword [SWOR], 44 silver [SILV]. Weight: 61. Capacity: 0/70/85/0.
;  Skills: combat [COMB] 1 (30), tactics [TACT] 5 (450), observation
;  [OBSE] 5 (450), stealth [STEA] 1 (30).
@tax
@study stea

unit 1287
;Hatunius (1287), revealing faction, 100 leaders [LEAD], winged horse
;  [WING]. Weight: 1050. Capacity: 70/70/1570/0. Skills: combat [COMB]
;  3 (210), riding [RIDI] 4 (330), longbow [LBOW] 5 (450), stealth
;  [STEA] 1 (60).
@tax
@study stea

unit 1378
;Octetius (1378), revealing faction, 100 leaders [LEAD], 986 silver
;  [SILV]. Weight: 1000. Capacity: 0/0/1500/0. Skills: combat [COMB] 3
;  (180), crossbow [XBOW] 3 (180), stealth [STEA] 3 (210), riding
;  [RIDI] 4 (360).
@tax
@study ridi

unit 1385
;Marens (1385), revealing faction, 10 leaders [LEAD], 360 silver
;  [SILV], 10 horses [HORS]. Weight: 600. Capacity: 0/700/850/0.
;  Skills: combat [COMB] 5 (450), crossbow [XBOW] 1 (60).
@tax
@study xbow

unit 1290
;Safurnius (1290), revealing faction, 10 leaders [LEAD], 414 silver
;  [SILV], 10 horses [HORS], 2 double bows [DBOW]. Weight: 602.
;  Capacity: 0/700/850/0. Skills: combat [COMB] 1 (30), longbow [LBOW]
;  5 (450), crossbow [XBOW] 1 (30), observation [OBSE] 1 (60).
@tax
@study obse

unit 1391
;Sylius (1391), revealing faction, 10 leaders [LEAD], 10 horses [HORS],
;  98 silver [SILV]. Weight: 600. Capacity: 0/700/850/0. Skills: combat
;  [COMB] 2 (150), stealth [STEA] 5 (450).
@tax
@study comb

unit 1154
;Unit (1154), revealing faction, 200 nomads [NOMA], 8477 silver [SILV],
;  200 horses [HORS], 4 swords [SWOR], 88 plate armor [PARM]. Weight:
;  12268. Capacity: 0/14000/17000/0. Skills: combat [COMB] 2 (90).
@work
@tax

unit 1057
;Dimius (1057), on guard, revealing faction, tribal elf [TELF], 30
;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
;  2 (90).
@work

unit 616
;Unit (616), revealing faction, 250 vikings [VIKI], 250 horses [HORS],
;  7767 silver [SILV], 8 swords [SWOR], mithril sword [MSWO]. Weight:
;  15009. Capacity: 0/17500/21250/0. Skills: combat [COMB] 3 (180).
@tax
@work

unit 2279
;Unit (2279), revealing faction, leader [LEAD], 351 silver [SILV],
;  horse [HORS]. Weight: 60. Capacity: 0/70/85/0. Skills: observation
;  [OBSE] 4 (300).
@study obse

unit 1189
;Matacius (1189), revealing faction, plainsman [PLAI], 33 silver
;  [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: longbow [LBOW] 2
;  (90).
@tax
@work

unit 586
;Unit (586), behind, revealing faction, nomad [NOMA], 21 silver [SILV],
;  6 rootstone [ROOT], 4 yew [YEW], 7 mithril [MITH]. Weight: 400.
;  Capacity: 0/0/15/0. Skills: entertainment [ENTE] 1 (30).
@entertain

;*** plain (62,24) in Satiasam ***

unit 1800
;Unit (1800), on guard, revealing faction, 119 plainsmen [PLAI], 714
;  silver [SILV]. Weight: 1190. Capacity: 0/0/1785/0. Skills: combat
;  [COMB] 1 (30).
@work
@guard 1

;*** swamp (64,24) in Skelid ***

unit 1314
;Hollius (1314), avoiding, revealing faction, receiving no aid,
;  tribesman [TMAN], 36 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
;  Skills: combat [COMB] 1 (30).
@work

unit 599
;Unit (599), avoiding, revealing faction, receiving no aid, 3 tribal
;  elves [TELF], 9 silver [SILV]. Weight: 30. Capacity: 0/0/45/0.
;  Skills: combat [COMB] 1 (30).
@work

;*** jungle (66,24) in Sefitat ***

unit 1156
;Hotulius (1156), revealing faction, 5 tribal elves [TELF], floater
;  hide [FLOA], 15 silver [SILV]. Weight: 51. Capacity: 0/0/75/0.
;  Skills: combat [COMB] 1 (30).
@work
@give 2788 all silv

unit 615
;Unit (615), on guard, revealing faction, 14 tribesmen [TMAN], 42
;  silver [SILV]. Weight: 140. Capacity: 0/0/210/0. Skills: combat
;  [COMB] 1 (30).
@work
@guard 1
@give 2788 all silv

unit 2788
;Unit (2788), avoiding, revealing faction, 389 silver [SILV], leader
;  [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: observation [OBSE] 4
;  (360).
@study obse

;*** jungle (74,24) in Donndinon ***

unit 1010
;Unit (1010), revealing faction, 68 silver [SILV], tribal elf [TELF].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** forest (59,25) in Nugyru ***

unit 1139
;Graenia (1139), revealing faction, holding, receiving no aid, 2
;  vikings [VIKI], 54 silver [SILV]. Weight: 20. Capacity: 0/0/30/0.
;  Skills: combat [COMB] 1 (30).
@work

unit 1065
;Unit (1065), behind, revealing faction, nomad [NOMA], 36027 silver
;  [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: entertainment [ENTE]
;  1 (30).
@work

unit 1805
;Unit (1805), behind, revealing faction, 1143 silver [SILV], 50 vikings
;  [VIKI], rootstone [ROOT]. Weight: 550. Capacity: 0/0/750/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** swamp (61,25) in Skelid ***

unit 1869
;Unit (1869), on guard, revealing faction, 27 tribesmen [TMAN], 162
;  silver [SILV]. Weight: 270. Capacity: 0/0/405/0. Skills: combat
;  [COMB] 1 (30).
@work
@guard 1

;*** swamp (63,25) in Skelid ***

unit 2858
;Unit (2858), revealing faction, 29472 silver [SILV], horse [HORS],
;  high elf [HELF]. Weight: 60. Capacity: 0/70/85/0. Skills: stealth
;  [STEA] 1 (30).

;*** swamp (65,25) in Skelid ***

unit 2741
;Unit (2741), avoiding, revealing faction, receiving no aid, 37 silver
;  [SILV], tribal elf [TELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  none.

;*** jungle (67,25) in Sefitat ***

unit 1173
;Vermulius (1173), on guard, revealing faction, leader [LEAD], 2533
;  silver [SILV], mithril sword [MSWO], horse [HORS]. Weight: 61.
;  Capacity: 0/70/85/0. Skills: observation [OBSE] 5 (450), combat
;  [COMB] 5 (450), riding [RIDI] 4 (390), stealth [STEA] 2 (150).
@study stea
@guard 1

unit 1200
;Unit (1200), revealing faction, nomad [NOMA], 94282 silver [SILV], 2
;  horses [HORS]. Weight: 110. Capacity: 0/140/155/0. Skills:
;  entertainment [ENTE] 1 (30).
MOVE SE

;*** jungle (73,25) in Donndinon ***

unit 1427
;Unit (1427), revealing faction, holding, receiving no aid, tribal elf
;  [TELF], 23 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** forest (60,26) in Nugyru ***

unit 1989
;Unit (1989), on guard, behind, revealing faction, 43 vikings [VIKI],
;  946 silver [SILV]. Weight: 430. Capacity: 0/0/645/0. Skills: combat
;  [COMB] 1 (30).
@work
@guard 1

;*** swamp (62,26) in Skelid ***

unit 1249
;Unit (1249), on guard, revealing faction, 208 silver [SILV], 28 tribal
;  elves [TELF]. Weight: 280. Capacity: 0/0/420/0. Skills: combat
;  [COMB] 1 (30).
@work
@guard 1

;*** swamp (64,26) in Skelid ***

unit 1138
;Alvius (1138), avoiding, revealing faction, receiving no aid, sea elf
;  [SELF], 24 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

unit 2812
;Unit (2812), avoiding, revealing faction, receiving no aid, 24 silver
;  [SILV], tribesman [TMAN]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** jungle (66,26) in Sefitat ***

unit 1104
;Mulatius (1104), on guard, revealing faction, receiving no aid,
;  tribesman [TMAN], stone [STON], 6 silver [SILV]. Weight: 60.
;  Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@guard 1
@work
@tax

unit 1100
;Unit (1100), avoiding, revealing faction, receiving no aid, 20 tribal
;  elves [TELF], 132 silver [SILV]. Weight: 200. Capacity: 0/0/300/0.
;  Skills: combat [COMB] 1 (30).
@work
@tax

unit 1119
;Rusoccus (1119), behind, revealing faction, leader [LEAD], 10010
;  silver [SILV], horse [HORS]. Weight: 60. Capacity: 0/70/85/0.
;  Skills: observation [OBSE] 5 (450), stealth [STEA] 5 (450), tactics
;  [TACT] 5 (450), armorer [ARMO] 4 (300).

;*** mountain (68,26) in Phidyntia, contains Oroldu [city] ***

unit 1038
;Sitenius (1038), behind, revealing faction, 112 vikings [VIKI], 792
;  silver [SILV]. Weight: 1120. Capacity: 0/0/1680/0. Skills:
;  entertainment [ENTE] 1 (30).
@entertain

unit 1041
;Jartinnus (1041), avoiding, behind, revealing faction, holding, leader
;  [LEAD], horse [HORS]. Weight: 60. Capacity: 0/70/85/0. Skills:
;  combat [COMB] 5 (450), observation [OBSE] 2 (90), lumberjack [LUMB]
;  1 (60), sailing [SAIL] 1 (30), building [BUIL] 5 (450), stealth
;  [STEA] 3 (210), shipbuilding [SHIP] 5 (450).
@study stea

unit 1671
;Gralus (1671), behind, revealing faction, 18 tribal elves [TELF], 18
;  longbows [LBOW], 18 horses [HORS], 144 silver [SILV]. Weight: 1098.
;  Capacity: 0/1260/1530/0. Skills: longbow [LBOW] 3 (180).
@work

unit 661
;Unit (661), behind, revealing faction, 30 vikings [VIKI], 30 crossbows
;  [XBOW], 30 horses [HORS], 240 silver [SILV]. Weight: 1830. Capacity:
;  0/2100/2550/0. Skills: crossbow [XBOW] 2 (90).
@work

unit 871
;Unit (871), behind, revealing faction, 30 tribal elves [TELF], 30
;  longbows [LBOW], 30 horses [HORS], 240 silver [SILV]. Weight: 1830.
;  Capacity: 0/2100/2550/0. Skills: longbow [LBOW] 3 (180).
@work

unit 2960
;Unit (2960), revealing faction, 20 vikings [VIKI], 20 horses [HORS],
;  20 swords [SWOR], 160 silver [SILV]. Weight: 1220. Capacity:
;  0/1400/1700/0. Skills: combat [COMB] 1 (30).
@work

unit 1299
;Frulvius (1299), avoiding, behind, revealing faction, leader [LEAD],
;  sword [SWOR], horse [HORS]. Weight: 61. Capacity: 0/70/85/0. Skills:
;  tactics [TACT] 5 (450), combat [COMB] 1 (60), observation [OBSE] 4
;  (360).
@study obse

unit 3019
;Unit (3019), behind, revealing faction, 17 sea elves [SELF], 17
;  longbows [LBOW], 17 horses [HORS], 136 silver [SILV]. Weight: 1037.
;  Capacity: 0/1190/1445/0. Skills: longbow [LBOW] 1 (30).
@work

unit 1105
;Unit (1105), behind, revealing faction, 400 nomads [NOMA], 400
;  crossbows [XBOW], 400 horses [HORS], 3200 silver [SILV]. Weight:
;  24400. Capacity: 0/28000/34000/0. Skills: crossbow [XBOW] 1 (30).
@work

unit 2782
;Unit (2782), avoiding, behind, revealing faction, receiving no aid,
;  nomad [NOMA], horse [HORS], 8 silver [SILV]. Weight: 60. Capacity:
;  0/70/85/0. Skills: stealth [STEA] 1 (30).
@work

unit 232
;Unit (232), revealing faction, 824 silver [SILV], 5 horses [HORS],
;  nomad [NOMA]. Weight: 260. Capacity: 0/350/365/0. Skills: none.
@work

unit 1803
;Unit (1803), revealing faction, tribesman [TMAN], 8 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: none.
@work

unit 1983
;Unit (1983), revealing faction, holding, viking [VIKI], 1237 silver
;  [SILV], horse [HORS]. Weight: 60. Capacity: 0/70/85/0. Skills:
;  combat [COMB] 1 (30).
move se
@TURN
move se
ENDTURN
@TURN
move nw
ENDTURN
@TURN
move nw
ENDTURN
@TURN
move se
ENDTURN

unit 263
;Unit (263), avoiding, behind, revealing faction, 325470 silver [SILV],
;  42 horses [HORS], nomad [NOMA], sword [SWOR]. Weight: 2111.
;  Capacity: 0/2940/2955/0. Skills: none.

unit 1368
;Fuspilius (1368), revealing faction, 10 vikings [VIKI], 2 iron [IRON],
;  ivory [IVOR], 3 mithril [MITH], 2 rootstone [ROOT], 80 silver
;  [SILV]. Weight: 241. Capacity: 0/0/150/0. Skills: building [BUIL] 1
;  (30).
@work

unit 1239
;Acus (1239), behind, revealing faction, 7 tribal elves [TELF], 7
;  longbows [LBOW], 7 horses [HORS], 56 silver [SILV]. Weight: 427.
;  Capacity: 0/490/595/0. Skills: longbow [LBOW] 3 (180).
@work

unit 1039
;Tirelius (1039), behind, revealing faction, leader [LEAD], horse
;  [HORS], balrog [BALR], 108 silver [SILV]. Weight: 310. Capacity:
;  300/370/385/0. Skills: pattern [PATT] 4 (330), earth lore [EART] 3
;  (210), spirit [SPIR] 4 (300), force [FORC] 4 (300), fire [FIRE] 2
;  (90), bird lore [BIRD] 2 (90), demon lore [DEMO] 3 (180), summon
;  imps [SUIM] 3 (180), summon demon [SUDE] 3 (180), summon balrog
;  [SUBA] 3 (180). Combat spell: fire [FIRE]. Can Study: fire [FIRE],
;  earthquake [EQUA], force shield [FSHI], energy shield [ESHI], spirit
;  shield [SSHI], magical healing [MHEA], gate lore [GATE], farsight
;  [FARS], mind reading [MIND], weather lore [WEAT], earth lore [EART],
;  wolf lore [WOLF], bird lore [BIRD], necromancy [NECR], demon lore
;  [DEMO], banish demons [BDEM], illusion [ILLU], artifact lore [ARTI].
@combat "fire"
@enter 1
@cast eart
study suim
TURN
study suim
ENDTURN
TURN
study suim
ENDTURN
TURN
study suim
ENDTURN
TURN
study sude
ENDTURN
TURN
study sude
ENDTURN
TURN
study sude
ENDTURN
TURN
study sude
ENDTURN
TURN
study suba
ENDTURN
TURN
study suba
ENDTURN
TURN
study suba
ENDTURN
TURN
study suba
ENDTURN
TURN
@study patt
@CAST Summon_Balrog
ENDTURN

unit 1040
;Caspus (1040), behind, revealing faction, leader [LEAD], 108 silver
;  [SILV], horse [HORS]. Weight: 60. Capacity: 0/70/85/0. Skills:
;  spirit [SPIR] 4 (300), pattern [PATT] 4 (360), earth lore [EART] 3
;  (210), force [FORC] 4 (330), fire [FIRE] 3 (180), bird lore [BIRD] 2
;  (90), force shield [FSHI] 3 (180), artifact lore [ARTI] 1 (30).
;  Combat spell: fire [FIRE]. Can Study: fire [FIRE], earthquake
;  [EQUA], force shield [FSHI], energy shield [ESHI], spirit shield
;  [SSHI], magical healing [MHEA], gate lore [GATE], farsight [FARS],
;  mind reading [MIND], weather lore [WEAT], earth lore [EART], wolf
;  lore [WOLF], bird lore [BIRD], necromancy [NECR], demon lore [DEMO],
;  illusion [ILLU], artifact lore [ARTI], enchant swords [ESWO],
;  enchant armor [EARM].
@cast eart
@combat "fire"
@enter 1
@study arti

;*** mountain (70,26) in Phidyntia ***

unit 1488
;Bulius (1488), revealing faction, 9 vikings [VIKI], 55 silver [SILV],
;  9 mithril swords [MSWO], 3 swords [SWOR]. Weight: 102. Capacity:
;  0/0/135/0. Skills: combat [COMB] 3 (180).
@work

;*** jungle (72,26) in Donndinon, contains Thor-a-thol [city] ***

unit 1107
;Festius (1107), revealing faction, 27 sea elves [SELF], 4191 silver
;  [SILV], 50 swords [SWOR]. Weight: 320. Capacity: 0/0/405/0. Skills:
;  entertainment [ENTE] 1 (30).
@entertain
@give 1342 70 silv
@give 1350 70 silv

unit 1342
;Unit (1342), avoiding, revealing faction, holding, leader [LEAD].
;  Weight: 10. Capacity: 0/0/15/0. Skills: stealth [STEA] 5 (450),
;  observation [OBSE] 2 (120).
@study obse

unit 1350
;Unit (1350), avoiding, revealing faction, holding, leader [LEAD].
;  Weight: 10. Capacity: 0/0/15/0. Skills: observation [OBSE] 5 (450),
;  stealth [STEA] 2 (120).
@study stea

;*** jungle (74,26) in Donndinon ***

unit 1049
;Unit (1049), revealing faction, holding, receiving no aid, 31 silver
;  [SILV], tribal elf [TELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** forest (59,27) in Nugyru ***

unit 2333
;Unit (2333), behind, revealing faction, 1688 silver [SILV], 50 vikings
;  [VIKI]. Weight: 500. Capacity: 0/0/750/0. Skills: combat [COMB] 1
;  (30).
@work

;*** swamp (61,27) in Skelid ***

unit 1883
;Unit (1883), on guard, revealing faction, 38 tribal elves [TELF], 570
;  silver [SILV]. Weight: 380. Capacity: 0/0/570/0. Skills: combat
;  [COMB] 1 (30).
@work
@guard 1

;*** swamp (65,27) in Skelid ***

unit 2742
;Unit (2742), avoiding, revealing faction, receiving no aid, 986 silver
;  [SILV], tribal elf [TELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  none.

unit 2743
;Unit (2743), revealing faction, receiving no aid, 24 silver [SILV],
;  tribal elf [TELF]. Weight: 10. Capacity: 0/0/15/0. Skills: none.

;*** jungle (67,27) in Sefitat ***

unit 1184
;Fumilus (1184), behind, revealing faction, tribal elf [TELF], 7 silver
;  [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: entertainment [ENTE]
;  1 (30).
@entertain
@give 1182 all silv

unit 1713
;Sidilio (1713), on guard, revealing faction, tribesman [TMAN], 2
;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
;  1 (30).
@work
@guard 1
@give 1182 all silv

unit 1717
;Invedius (1717), revealing faction, sea elf [SELF], 2 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: none.
@work
@give 1182 all silv

unit 1175
;Unit (1175), revealing faction, 19 tribesmen [TMAN], 38 silver [SILV].
;  Weight: 190. Capacity: 0/0/285/0. Skills: combat [COMB] 1 (30).
@work
@give 1182 all silv

unit 1344
;Capania (1344), revealing faction, tribal elf [TELF], 1376 silver
;  [SILV], 8 horses [HORS]. Weight: 410. Capacity: 0/560/575/0. Skills:
;  combat [COMB] 1 (30).
move se
@TURN
move ne
ENDTURN
@TURN
move nw
ENDTURN
@TURN
move nw
ENDTURN
@TURN
move s
ENDTURN
@TURN
move se
ENDTURN

unit 742
;Unit (742), revealing faction, 381 vikings [VIKI], mithril armor
;  [MARM], 400 horses [HORS], 394 swords [SWOR], 6 mithril swords
;  [MSWO], 26670 silver [SILV]. Weight: 24211. Capacity:
;  0/28000/33715/0. Skills: combat [COMB] 1 (30).

unit 2287
;Unit (2287), behind, revealing faction, 1000 crossbows [XBOW], 1000
;  vikings [VIKI], 1000 horses [HORS], 70000 silver [SILV]. Weight:
;  61000. Capacity: 0/70000/85000/0. Skills: crossbow [XBOW] 1 (42).

unit 366
;Mertus (366), revealing faction, 691 vikings [VIKI], mithril armor
;  [MARM], 48370 silver [SILV], 691 horses [HORS], 691 swords [SWOR].
;  Weight: 42152. Capacity: 0/48370/58735/0. Skills: combat [COMB] 3
;  (180).
@give 1119 30 silv
@give 592 250 silv
@give 1928 250 silv
@give 1929 250 silv
@give 54 250 silv
@give 2489 250 silv
@give 2488 250 silv
@give 1299 70 silv
@give 1041 40 silv

unit 1120
;Poenius (1120), behind, revealing faction, leader [LEAD], 629 silver
;  [SILV], horse [HORS], double bow [DBOW]. Weight: 61. Capacity:
;  0/70/85/0. Skills: combat [COMB] 5 (450), observation [OBSE] 5
;  (450), stealth [STEA] 5 (450), crossbow [XBOW] 3 (240).
@tax
@guard 1

;*** mountain (69,27) in Phidyntia ***

unit 1042
;Pespor (1042), on guard, revealing faction, 32 vikings [VIKI], 828
;  silver [SILV], 29 mithril swords [MSWO], 6 swords [SWOR], 32 horses
;  [HORS]. Weight: 1955. Capacity: 0/2240/2720/0. Skills: combat [COMB]
;  3 (180).
@tax
@guard 1
@work
@give 1120 70 silv

unit 1158
;Culiliusus (1158), behind, revealing faction, leader [LEAD], 30 silver
;  [SILV], double bow [DBOW]. Weight: 11. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 4 (300), tactics [TACT] 5 (450), stealth [STEA] 1
;  (30), riding [RIDI] 5 (450), longbow [LBOW] 4 (360).
@tax
@study lbow

;*** mountain (71,27) in Phidyntia ***

unit 1028
;Pelvius (1028), behind, revealing faction, leader [LEAD], eagle
;  [EAGL], 3 dragons [DRAG], 2142 silver [SILV], mithril sword [MSWO],
;  9 swords [SWOR]. Weight: 780. Capacity: 915/915/930/0. Skills:
;  pattern [PATT] 4 (330), spirit [SPIR] 2 (90), gate lore [GATE] 2
;  (90), force [FORC] 2 (90), earth lore [EART] 4 (300), fire [FIRE] 2
;  (90), bird lore [BIRD] 4 (300), demon lore [DEMO] 1 (30), dragon
;  lore [DRAG] 4 (300), banish demons [BDEM] 1 (30). Combat spell: fire
;  [FIRE]. Can Study: earthquake [EQUA], force shield [FSHI], energy
;  shield [ESHI], spirit shield [SSHI], magical healing [MHEA],
;  farsight [FARS], mind reading [MIND], weather lore [WEAT], wolf lore
;  [WOLF], necromancy [NECR], demon lore [DEMO], summon imps [SUIM],
;  illusion [ILLU], artifact lore [ARTI].
@find all
@declare default neutral
@combat "fire"
@cast eart

;*** desert (58,28) in Baifelgris ***

unit 2798
;Unit (2798), revealing faction, 26 vikings [VIKI], 196 silver [SILV].
;  Weight: 260. Capacity: 0/0/390/0. Skills: combat [COMB] 1 (30).
@work

;*** plain (60,28) in Erisort ***

unit 2957
;Unit (2957), on guard, revealing faction, 5898 silver [SILV], 50
;  vikings [VIKI]. Weight: 500. Capacity: 0/0/750/0. Skills: combat
;  [COMB] 1 (30).
@work
@guard 1

unit 1825
;Unit (1825), revealing faction, 33 nomads [NOMA], 132 silver [SILV].
;  Weight: 330. Capacity: 0/0/495/0. Skills: combat [COMB] 1 (30).
@work

;*** swamp (62,28) in Skelid ***

unit 708
;Unit (708), on guard, revealing faction, 29 tribesmen [TMAN], 232
;  silver [SILV]. Weight: 290. Capacity: 0/0/435/0. Skills: combat
;  [COMB] 1 (30).
@work
@guard 1

;*** jungle (66,28) in Sefitat ***

unit 1169
;Paenia (1169), behind, revealing faction, leader [LEAD], 1901 silver
;  [SILV], mithril sword [MSWO], horse [HORS]. Weight: 61. Capacity:
;  0/70/85/0. Skills: combat [COMB] 5 (450), observation [OBSE] 5
;  (450), tactics [TACT] 3 (180), riding [RIDI] 4 (330).

;*** jungle (68,28) in Sefitat ***

unit 1043
;Ammunia (1043), on guard, revealing faction, viking [VIKI], 17 silver
;  [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 2
;  (90).
@tax
@guard 1
@work
@give 1108 all silv

unit 1108
;Seccirdius (1108), revealing faction, 18 tribal elves [TELF], 1180
;  silver [SILV]. Weight: 180. Capacity: 0/0/270/0. Skills: combat
;  [COMB] 2 (90).
@tax
@work
@give 1295 70 silv
@give 1160 70 silv
@give 1183 70 silv

unit 1160
;Arcia (1160), on guard, behind, revealing faction, leader [LEAD], 491
;  silver [SILV], mithril sword [MSWO]. Weight: 11. Capacity: 0/0/15/0.
;  Skills: combat [COMB] 1 (30), observation [OBSE] 5 (450), stealth
;  [STEA] 5 (450), riding [RIDI] 5 (450), crossbow [XBOW] 3 (210).
@tax
@guard 1
@study xbow

unit 1183
;Lodemius (1183), behind, revealing faction, leader [LEAD], 188 silver
;  [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 5
;  (450), tactics [TACT] 5 (450), stealth [STEA] 5 (450), observation
;  [OBSE] 3 (240).
@tax
@study obse

unit 1295
;Malius (1295), revealing faction, leader [LEAD], 397 silver [SILV],
;  horse [HORS], mithril sword [MSWO]. Weight: 61. Capacity: 0/70/85/0.
;  Skills: combat [COMB] 5 (450), stealth [STEA] 5 (450), riding [RIDI]
;  5 (450), observation [OBSE] 2 (90).
@tax
@study obse

unit 1063
;Calirabor (1063), on guard, revealing faction, tribal elf [TELF], 176
;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
;  2 (90).
@work
@guard 1
@tax

;*** mountain (70,28) in Phidyntia ***

unit 1062
;Ceniulus (1062), revealing faction, 100 vikings [VIKI], 100 horses
;  [HORS], 5977 silver [SILV], 12 mithril swords [MSWO], 2 swords
;  [SWOR], 2 mithril armor [MARM]. Weight: 6016. Capacity:
;  0/7000/8500/0. Skills: combat [COMB] 3 (180).
@tax
@work

unit 2384
;Unit (2384), revealing faction, 17 rootstone [ROOT], viking [VIKI],
;  horse [HORS], 10 double bows [DBOW]. Weight: 920. Capacity:
;  0/70/85/0. Skills: none.
@work

unit 1832
;Unit (1832), revealing faction, holding, 256 silver [SILV], leader
;  [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: observation [OBSE] 1
;  (60).
@study obse

unit 1842
;Unit (1842), revealing faction, holding, 256 silver [SILV], leader
;  [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: tactics [TACT] 1
;  (60).
@study tact

unit 1845
;Unit (1845), revealing faction, holding, 256 silver [SILV], leader
;  [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: stealth [STEA] 1
;  (60).
@study stea

unit 1491
;Vanius (1491), avoiding, revealing faction, nomad [NOMA], 60 horses
;  [HORS], 528 silver [SILV], double bow [DBOW]. Weight: 3011.
;  Capacity: 0/4200/4215/0. Skills: stealth [STEA] 1 (30).
move nw
@TURN
move nw
ENDTURN
@TURN
move se
ENDTURN
@TURN
move ne
ENDTURN
@TURN
move s
ENDTURN
@TURN
move nw
ENDTURN

;*** jungle (72,28) in Donndinon ***

unit 1225
;Antilevus (1225), behind, revealing faction, leader [LEAD], 273 silver
;  [SILV], horse [HORS], sword [SWOR], mithril sword [MSWO]. Weight:
;  62. Capacity: 0/70/85/0. Skills: combat [COMB] 1 (30), observation
;  [OBSE] 5 (450), tactics [TACT] 5 (450), stealth [STEA] 2 (90),
;  riding [RIDI] 5 (450).
@tax

;*** swamp (61,29) in Skelid ***

unit 2876
;Unit (2876), behind, revealing faction, holding, receiving no aid, 30
;  tribesmen [TMAN]. Weight: 300. Capacity: 0/0/450/0. Skills: combat
;  [COMB] 1 (30).
@work
@guard 1
behind 0
noaid 0
hold 0

;*** jungle (67,29) in Sefitat ***

unit 1182
;Caerastius (1182), revealing faction, holding, leader [LEAD], mithril
;  sword [MSWO], horse [HORS], 690 silver [SILV]. Weight: 61. Capacity:
;  0/70/85/0. Skills: combat [COMB] 3 (180), observation [OBSE] 5
;  (450), stealth [STEA] 5 (450), riding [RIDI] 4 (390).
@guard 1

unit 2744
;Unit (2744), revealing faction, holding, 12 silver [SILV], tribesman
;  [TMAN]. Weight: 10. Capacity: 0/0/15/0. Skills: none.

;*** jungle (73,29) in Donndinon, contains Alabrin-lum [city] ***

unit 1053
;Unit (1053), revealing faction, 3 tribesmen [TMAN], 340 silver [SILV].
;  Weight: 30. Capacity: 0/0/45/0. Skills: entertainment [ENTE] 1 (30).
@entertain

;*** plain (52,30) in Serilelo, contains Iaierd's [city] ***

unit 1936
;Unit (1936), behind, revealing faction, holding, 247 silver [SILV],
;  viking [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills: entertainment
;  [ENTE] 1 (30).
@entertain

;*** plain (58,30) in Erisort ***

unit 1802
;Unit (1802), revealing faction, 24 vikings [VIKI], 144 silver [SILV].
;  Weight: 240. Capacity: 0/0/360/0. Skills: combat [COMB] 1 (30).
@work

;*** plain (60,30) in Erisort ***

unit 2905
;Unit (2905), revealing faction, 45431 silver [SILV], nomad [NOMA].
;  Weight: 10. Capacity: 0/0/15/0. Skills: stealth [STEA] 1 (30).

;*** jungle (74,30) in Donndinon ***

unit 1637
;Unit (1637), avoiding, revealing faction, 41 silver [SILV], tribesman
;  [TMAN]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
;  (30).
@work

;*** swamp (41,31) in Ellon ***

unit 1106
;Portiblius (1106), avoiding, behind, revealing faction, holding,
;  receiving no aid, tribesman [TMAN], 61 silver [SILV]. Weight: 10.
;  Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).

;*** plain (58,32) in Erisort, contains Awych [city] ***

unit 1985
;Unit (1985), behind, revealing faction, holding, nomad [NOMA], 258
;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: entertainment
;  [ENTE] 1 (30).
@entertain

;*** mountain (74,32) in Gededyki ***

unit 783
;Unit (783), avoiding, revealing faction, 3 vikings [VIKI], 99 silver
;  [SILV]. Weight: 30. Capacity: 0/0/45/0. Skills: combat [COMB] 1
;  (30).
@work

unit 3038
;Unit (3038), avoiding, revealing faction, 32 silver [SILV], viking
;  [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
;  (30).
@work

;*** plain (61,33) in Erisort, contains Mundmar [city] ***

unit 1986
;Unit (1986), behind, revealing faction, holding, plainsman [PLAI], 258
;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: entertainment
;  [ENTE] 1 (30).
@entertain

;*** mountain (75,33) in Gededyki ***

unit 1258
;Cadrasius (1258), revealing faction, 14 tribesmen [TMAN], 13 silver
;  [SILV]. Weight: 140. Capacity: 0/0/210/0. Skills: combat [COMB] 1
;  (30).
@work

unit 1384
;Unit (1384), revealing faction, 9 vikings [VIKI], 2 silver [SILV].
;  Weight: 90. Capacity: 0/0/135/0. Skills: combat [COMB] 1 (30).
@work

unit 1003
;Unit (1003), revealing faction, 29 orcs [ORC], 36 silver [SILV].
;  Weight: 290. Capacity: 0/0/435/0. Skills: combat [COMB] 1 (30).
@work

unit 2439
;Unit (2439), revealing faction, 10 silver [SILV], orc [ORC]. Weight:
;  10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** plain (56,34) in Fontenaisle, contains Yqauton [city] ***

unit 1296
;Conenanus (1296), behind, revealing faction, holding, high elf [HELF],
;  258 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  entertainment [ENTE] 1 (30).
@entertain

;*** plain (58,34) in Erisort, contains Dunhowestad [town] ***

unit 1198
;Clemurius (1198), behind, revealing faction, holding, 311 silver
;  [SILV], nomad [NOMA], horse [HORS]. Weight: 60. Capacity: 0/70/85/0.
;  Skills: entertainment [ENTE] 1 (30).
@entertain

;*** mountain (72,34) in Gededyki ***

unit 1136
;Unit (1136), revealing faction, 23 vikings [VIKI], 414 silver [SILV].
;  Weight: 230. Capacity: 0/0/345/0. Skills: combat [COMB] 1 (53).
@work

unit 2711
;Unit (2711), revealing faction, viking [VIKI], 18 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 2717
;Unit (2717), revealing faction, 24 silver [SILV], viking [VIKI].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** mountain (74,34) in Gededyki, contains Tinynt [city] ***

unit 1226
;Unit (1226), revealing faction, 3 orcs [ORC], 210 silver [SILV].
;  Weight: 30. Capacity: 0/0/45/0. Skills: entertainment [ENTE] 1 (30).
@entertain

unit 3039
;Unit (3039), revealing faction, 2 orcs [ORC], 90 silver [SILV].
;  Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB] 1 (30).
@work

unit 2722
;Unit (2722), revealing faction, 43 silver [SILV], orc [ORC]. Weight:
;  10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** jungle (76,34) in Kuny ***

unit 1359
;Unit (1359), revealing faction, 7 wood elves [WELF], 168 silver
;  [SILV]. Weight: 70. Capacity: 0/0/105/0. Skills: combat [COMB] 1
;  (30).
@work

unit 2865
;Unit (2865), revealing faction, 23 silver [SILV], wood elf [WELF].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** plain (53,35) in Fontenaisle, contains Brimfinanfel [city] ***

unit 1401
;Olcumor (1401), behind, revealing faction, holding, viking [VIKI], 226
;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: entertainment
;  [ENTE] 1 (30).
@entertain

;*** mountain (69,35) in Gededyki ***

unit 1370
;Stradilio (1370), avoiding, revealing faction, receiving no aid, 10
;  vikings [VIKI], 220 silver [SILV]. Weight: 100. Capacity: 0/0/150/0.
;  Skills: combat [COMB] 2 (150).
@work

unit 3040
;Unit (3040), avoiding, revealing faction, receiving no aid, 89 silver
;  [SILV], 3 barbarians [BARB]. Weight: 30. Capacity: 0/0/45/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** mountain (71,35) in Gededyki, contains Lei-neac [city] ***

unit 1524
;Saudeius (1524), avoiding, revealing faction, 2 vikings [VIKI], 140
;  silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills: entertainment
;  [ENTE] 1 (30).
@entertain

unit 3041
;Unit (3041), avoiding, revealing faction, viking [VIKI], 87 silver
;  [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: entertainment [ENTE]
;  1 (30).
@entertain

unit 2727
;Unit (2727), avoiding, revealing faction, 83 silver [SILV], viking
;  [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills: entertainment [ENTE]
;  1 (30).
@entertain

;*** mountain (73,35) in Gededyki ***

unit 1406
;Unit (1406), revealing faction, 10 hill dwarves [HDWA], 200 silver
;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 2
;  (120).
@work

unit 3091
;Unit (3091), revealing faction, hill dwarf [HDWA], 20 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 2715
;Unit (2715), revealing faction, 37 silver [SILV], hill dwarf [HDWA].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** mountain (75,35) in Gededyki ***

unit 2511
;Unit (2511), revealing faction, 766 silver [SILV], 10 barbarians
;  [BARB]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 2
;  (90).
@tax
@study comb

unit 1449
;Unit (1449), revealing faction, 620 silver [SILV], 10 barbarians
;  [BARB]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 2
;  (90).
@tax
@study comb
@give 2867 30 silv

unit 2867
;Unit (2867), revealing faction, leader [LEAD], 147 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 4 (390).
@tax
@teach 2869

unit 2868
;Unit (2868), revealing faction, 1270 silver [SILV], 10 barbarians
;  [BARB]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 2
;  (90).
@tax
@study comb

unit 2869
;Unit (2869), revealing faction, 1272 silver [SILV], 10 barbarians
;  [BARB]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 2
;  (90).
@tax
@study comb

unit 2870
;Unit (2870), revealing faction, 1512 silver [SILV], 10 barbarians
;  [BARB]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1
;  (30).
@tax
@work

unit 1103
;Unit (1103), revealing faction, 5 barbarians [BARB], 33 hill dwarves
;  [HDWA], 32 vikings [VIKI], 2216 silver [SILV]. Weight: 700.
;  Capacity: 0/0/1050/0. Skills: combat [COMB] 2 (117).
@tax
@study comb

unit 2926
;Unit (2926), revealing faction, 10 leaders [LEAD], 392 silver [SILV].
;  Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 4 (330).
@teach 1103 1449 2511 2868
@tax

;*** jungle (77,35) in Kuny ***

unit 1572
;Unit (1572), revealing faction, tribal elf [TELF], 40 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** plain (54,36) in Fontenaisle, contains Sneyleeberg [city] ***

unit 1298
;Unit (1298), behind, revealing faction, holding, viking [VIKI], 197
;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: entertainment
;  [ENTE] 1 (30).
@entertain

;*** mountain (74,36) in Gededyki ***

unit 2051
;Unit (2051), avoiding, revealing faction, receiving no aid, barbarian
;  [BARB], 36 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

unit 2835
;Unit (2835), avoiding, revealing faction, receiving no aid, barbarian
;  [BARB], 32 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** jungle (76,36) in Kuny ***

unit 1135
;Unit (1135), revealing faction, 6 tribal elves [TELF], 108 silver
;  [SILV]. Weight: 60. Capacity: 0/0/90/0. Skills: combat [COMB] 1
;  (30).
@work

unit 2933
;Unit (2933), revealing faction, tribal elf [TELF], 18 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 2912
;Unit (2912), revealing faction, 17 silver [SILV], tribal elf [TELF].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** mountain (61,37) in Scourie, contains Osray [city] ***

unit 1201
;Minotrius (1201), behind, revealing faction, holding, plainsman
;  [PLAI], 253 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  entertainment [ENTE] 1 (30).
@entertain

unit 1244
;Uccius (1244), behind, revealing faction, holding, tribesman [TMAN],
;  12 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
;  [COMB] 1 (30).
@work

;*** mountain (73,37) in Gededyki ***

unit 2050
;Unit (2050), avoiding, revealing faction, receiving no aid, hill dwarf
;  [HDWA], 3 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

unit 2878
;Unit (2878), avoiding, revealing faction, receiving no aid, 7 silver
;  [SILV], barbarian [BARB]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** swamp (75,37) in Grimbad ***

unit 1623
;Unit (1623), revealing faction, tribal elf [TELF], 63 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** jungle (77,37) in Kuny, contains Burdotn [city] ***

unit 2005
;Unit (2005), revealing faction, tribal elf [TELF], 55 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

unit 1450
;Vilvius (1450), revealing faction, 38 orcs [ORC], 2090 silver [SILV].
;  Weight: 380. Capacity: 0/0/570/0. Skills: combat [COMB] 1 (60).
@work

unit 1163
;Unit (1163), revealing faction, 16 tribal elves [TELF], 1360 silver
;  [SILV]. Weight: 160. Capacity: 0/0/240/0. Skills: entertainment
;  [ENTE] 1 (30).
@entertain

;*** mountain (70,38) in Gededyki ***

unit 2064
;Unit (2064), avoiding, revealing faction, receiving no aid, 10 orcs
;  [ORC], 400 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
;  combat [COMB] 2 (90).
@work

unit 2747
;Unit (2747), avoiding, revealing faction, receiving no aid, 40 silver
;  [SILV], orc [ORC]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
;  [COMB] 1 (30).
@work

;*** mountain (74,38) in Gededyki ***

unit 1809
;Unit (1809), avoiding, revealing faction, receiving no aid, tribesman
;  [TMAN], 73 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** swamp (76,38) in Grimbad ***

unit 1702
;Unit (1702), revealing faction, tribesman [TMAN], 31 silver [SILV].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
@work

;*** jungle (78,38) in Kuny ***

unit 2019
;Unit (2019), avoiding, revealing faction, receiving no aid, 46 silver
;  [SILV], tribal elf [TELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

unit 1573
;Unit (1573), avoiding, revealing faction, receiving no aid, 18 silver
;  [SILV], sea elf [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** jungle (59,39) in Reilgris, contains Rakhat [town] ***

unit 1044
;Bacanius (1044), behind, revealing faction, holding, viking [VIKI],
;  165 silver [SILV], tribal elf [TELF]. Weight: 20. Capacity:
;  0/0/30/0. Skills: combat [COMB] 0 (15).
@work

;*** mountain (71,39) in Gededyki ***

unit 1535
;Unit (1535), avoiding, revealing faction, receiving no aid, viking
;  [VIKI], 92 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** mountain (73,39) in Gededyki, contains Quiage [city] ***

unit 2053
;Unit (2053), avoiding, revealing faction, orc [ORC], 105 silver
;  [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
;  (30).
@work

;*** swamp (75,39) in Grimbad ***

unit 1443
;Vabinius (1443), avoiding, revealing faction, receiving no aid, 2
;  tribesmen [TMAN], 122 silver [SILV]. Weight: 20. Capacity: 0/0/30/0.
;  Skills: combat [COMB] 1 (30).
@work

;*** jungle (77,39) in Kuny ***

unit 2067
;Unit (2067), avoiding, revealing faction, receiving no aid, tribesman
;  [TMAN], 120 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  entertainment [ENTE] 1 (30).
@entertain

;*** mountain (72,40) in Gededyki, contains Nugm [town] ***

unit 1464
;Portia (1464), avoiding, revealing faction, 5 barbarians [BARB], 300
;  silver [SILV]. Weight: 50. Capacity: 0/0/75/0. Skills: combat [COMB]
;  1 (30).
@work

unit 1820
;Unit (1820), avoiding, revealing faction, hill dwarf [HDWA], 96 silver
;  [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: entertainment [ENTE]
;  1 (30).
@entertain

unit 1466
;Unit (1466), avoiding, revealing faction, 7 hill dwarves [HDWA], 431
;  silver [SILV]. Weight: 70. Capacity: 0/0/105/0. Skills: combat
;  [COMB] 1 (30).
@work

;*** swamp (76,40) in Grimbad ***

unit 2068
;Unit (2068), avoiding, revealing faction, receiving no aid, tribesman
;  [TMAN], 15 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  entertainment [ENTE] 1 (30).
@entertain

;*** plain (69,41) in Loras, contains Busst [city] ***

unit 1281
;Unit (1281), avoiding, revealing faction, viking [VIKI], 107 silver
;  [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: entertainment [ENTE]
;  1 (30).
@entertain

unit 3108
;Unit (3108), avoiding, revealing faction, 99 silver [SILV], viking
;  [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills: entertainment [ENTE]
;  1 (30).
@entertain

;*** mountain (71,41) in Gededyki ***

unit 1625
;Unit (1625), avoiding, revealing faction, receiving no aid, sea elf
;  [SELF], 80 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** mountain (73,41) in Gededyki ***

unit 1484
;Unit (1484), avoiding, behind, revealing faction, receiving no aid, 42
;  silver [SILV], viking [VIKI]. Weight: 10. Capacity: 0/0/15/0.
;  Skills: combat [COMB] 1 (30).
@work

;*** plain (64,42) in Lilois, contains Cochtai [city] ***

unit 2562
;Unit (2562), avoiding, revealing faction, 147 silver [SILV], sea elf
;  [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
;  (30).
@work

;*** plain (66,42) in Lilois, contains Lotholmar [city] ***

unit 2561
;Unit (2561), avoiding, revealing faction, sea elf [SELF], 112 silver
;  [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
;  (30).
@work

;*** plain (68,42) in Loras ***

unit 2553
;Unit (2553), avoiding, revealing faction, receiving no aid, 105 silver
;  [SILV], sea elf [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (70,42) in Loras ***

unit 1518
;Unit (1518), avoiding, revealing faction, receiving no aid, 115 silver
;  [SILV], high elf [HELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** mountain (72,42) in Gededyki ***

unit 1632
;Unit (1632), avoiding, revealing faction, receiving no aid, 48 silver
;  [SILV], sea elf [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** jungle (59,43) in Reilgris, contains Mundholm [village] ***

unit 1570
;Esdrifus (1570), behind, revealing faction, holding, 3 tribesmen
;  [TMAN], 474 silver [SILV]. Weight: 30. Capacity: 0/0/45/0. Skills:
;  entertainment [ENTE] 1 (30).
@entertain

unit 1994
;Unit (1994), behind, revealing faction, holding, desert dwarf [DDWA],
;  29 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
;  [COMB] 1 (30).
@work

;*** plain (67,43) in Loras ***

unit 2555
;Unit (2555), avoiding, revealing faction, receiving no aid, 76 silver
;  [SILV], sea elf [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (69,43) in Loras ***

unit 2552
;Unit (2552), avoiding, revealing faction, receiving no aid, 106 silver
;  [SILV], sea elf [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (71,43) in Loras ***

unit 1645
;Unit (1645), avoiding, revealing faction, receiving no aid, 105 silver
;  [SILV], sea elf [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** mountain (73,43) in Gededyki ***

unit 2871
;Unit (2871), avoiding, behind, revealing faction, receiving no aid, 48
;  silver [SILV], sea elf [SELF]. Weight: 10. Capacity: 0/0/15/0.
;  Skills: combat [COMB] 1 (30).
@work

;*** plain (66,44) in Lilois, contains Tar-dor [city] ***

unit 2560
;Unit (2560), avoiding, revealing faction, 118 silver [SILV], sea elf
;  [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
;  (30).
@work

;*** plain (68,44) in Loras ***

unit 1527
;Unit (1527), avoiding, revealing faction, receiving no aid, 110 silver
;  [SILV], plainsman [PLAI]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (70,44) in Loras, contains Tinien'nt [city] ***

unit 1696
;Unit (1696), avoiding, revealing faction, 2 sea elves [SELF], 192
;  silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills: combat [COMB]
;  1 (30).
@work

unit 3015
;Unit (3015), avoiding, revealing faction, 115 silver [SILV], viking
;  [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
;  (30).
@work

;*** plain (72,44) in Loras ***

unit 1868
;Unit (1868), avoiding, revealing faction, receiving no aid, 115 silver
;  [SILV], sea elf [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (67,45) in Loras ***

unit 1646
;Unit (1646), avoiding, revealing faction, receiving no aid, 94 silver
;  [SILV], plainsman [PLAI]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (66,46) in Lilois ***

unit 2557
;Unit (2557), avoiding, revealing faction, receiving no aid, 75 silver
;  [SILV], sea elf [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (68,46) in Loras ***

unit 2554
;Unit (2554), avoiding, revealing faction, receiving no aid, 75 silver
;  [SILV], sea elf [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (65,47) in Lilois ***

unit 2556
;Unit (2556), avoiding, revealing faction, receiving no aid, 75 silver
;  [SILV], sea elf [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (67,47) in Lilois ***

unit 2559
;Unit (2559), avoiding, revealing faction, receiving no aid, 88 silver
;  [SILV], sea elf [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (66,48) in Lilois, contains Asyust [city] ***

unit 1243
;Trato (1243), avoiding, behind, revealing faction, holding, plainsman
;  [PLAI], 149 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  entertainment [ENTE] 1 (30).
@entertain

;*** plain (68,48) in Murom ***

unit 2558
;Unit (2558), avoiding, revealing faction, receiving no aid, 62 silver
;  [SILV], sea elf [SELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (65,49) in Lilois ***

unit 1638
;Unit (1638), avoiding, revealing faction, receiving no aid, plainsman
;  [PLAI], 52 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (66,50) in Lilois, contains Sluen [town] ***

unit 1246
;Unit (1246), avoiding, revealing faction, 86 silver [SILV], nomad
;  [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills: entertainment [ENTE]
;  1 (30).
@entertain

;*** plain (65,51) in Branrun ***

unit 1109
;Unit (1109), avoiding, revealing faction, receiving no aid, nomad
;  [NOMA], 48 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  none.
@work

;*** plain (66,52) in Branrun, contains Whoezeaburg [town] ***

unit 1268
;Unit (1268), avoiding, revealing faction, 67 silver [SILV], nomad
;  [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills: entertainment [ENTE]
;  1 (30).
@entertain

;*** mountain (63,53) in Dedotyl ***

unit 3018
;Unit (3018), avoiding, revealing faction, receiving no aid, 40 silver
;  [SILV], viking [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (65,53) in Branrun ***

unit 1161
;Unit (1161), avoiding, revealing faction, receiving no aid, 48 silver
;  [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills: none.
@work

;*** plain (64,54) in Branrun ***

unit 3016
;Unit (3016), avoiding, revealing faction, receiving no aid, 54 silver
;  [SILV], viking [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** mountain (66,54) in Beaufor ***

unit 3024
;Unit (3024), avoiding, behind, revealing faction, receiving no aid,
;  orc [ORC], 36 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (63,55) in Branrun ***

unit 3020
;Unit (3020), avoiding, revealing faction, receiving no aid, 40 silver
;  [SILV], viking [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** mountain (65,55) in Beaufor ***

unit 3049
;Unit (3049), avoiding, behind, revealing faction, receiving no aid,
;  orc [ORC], 22 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (62,56) in Branrun ***

unit 3036
;Unit (3036), avoiding, revealing faction, receiving no aid, nomad
;  [NOMA], 16 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (64,56) in Branrun ***

unit 3120
;Unit (3120), avoiding, revealing faction, receiving no aid, nomad
;  [NOMA], 60 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (63,57) in Branrun ***

unit 3022
;Unit (3022), avoiding, revealing faction, receiving no aid, 49 silver
;  [SILV], viking [VIKI]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** mountain (65,57) in Beaufor ***

unit 1199
;Unit (1199), avoiding, revealing faction, receiving no aid, 36 silver
;  [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills: none.
@work

;*** plain (62,58) in Burongha, contains Belvoltan [town] ***

unit 3121
;Unit (3121), avoiding, revealing faction, receiving no aid, 82 silver
;  [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
;  [COMB] 1 (30).
@work

unit 2917
;Unit (2917), avoiding, revealing faction, receiving no aid, 51 silver
;  [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
;  [COMB] 1 (30).
@work

;*** mountain (64,58) in Beaufor ***

unit 3122
;Unit (3122), avoiding, revealing faction, receiving no aid, 37 silver
;  [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
;  [COMB] 1 (30).
@work

;*** mountain (66,58) in Beaufor ***

unit 3123
;Unit (3123), avoiding, revealing faction, receiving no aid, nomad
;  [NOMA], 32 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (61,59) in Burongha ***

unit 2982
;Unit (2982), avoiding, revealing faction, receiving no aid, 24 silver
;  [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
;  [COMB] 1 (30).
@work

;*** plain (63,59) in Burongha, contains Tas'bur [city] ***

unit 3067
;Unit (3067), avoiding, revealing faction, receiving no aid, 79 silver
;  [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
;  [COMB] 1 (30).
@work

;*** desert (69,59) in Beaubur ***

unit 2927
;Unit (2927), avoiding, revealing faction, receiving no aid, nomad
;  [NOMA], 10 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  none.
@work

;*** plain (62,60) in Burongha, contains Narga-tor [town] ***

unit 3042
;Unit (3042), avoiding, revealing faction, receiving no aid, nomad
;  [NOMA], 8 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** mountain (66,60) in Beaufor ***

unit 3179
;Unit (3179), avoiding, behind, revealing faction, receiving no aid, 44
;  silver [SILV], hill dwarf [HDWA]. Weight: 10. Capacity: 0/0/15/0.
;  Skills: combat [COMB] 1 (30).
@work

;*** desert (68,60) in Beaubur ***

unit 1958
;Unit (1958), avoiding, behind, revealing faction, receiving no aid,
;  horse [HORS], viking [VIKI], 7 silver [SILV]. Weight: 60. Capacity:
;  0/70/85/0. Skills: none.
@work

;*** desert (70,60) in Beaubur ***

unit 1305
;Unit (1305), avoiding, revealing faction, receiving no aid, 560 silver
;  [SILV], 6 nomads [NOMA]. Weight: 60. Capacity: 0/0/90/0. Skills:
;  none.

unit 2965
;Unit (2965), avoiding, revealing faction, receiving no aid, nomad
;  [NOMA], 10 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  none.
@work

;*** plain (61,61) in Burongha ***

unit 3066
;Unit (3066), avoiding, revealing faction, receiving no aid, 49 silver
;  [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
;  [COMB] 1 (30).
@work

;*** plain (63,61) in Burongha ***

unit 3069
;Unit (3069), avoiding, revealing faction, receiving no aid, 29 silver
;  [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
;  [COMB] 1 (30).
@work

unit 3068
;Unit (3068), avoiding, revealing faction, receiving no aid, 34 silver
;  [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
;  [COMB] 1 (30).
MOVE S S SW

;*** mountain (65,61) in Beaufor ***

unit 3113
;Unit (3113), avoiding, behind, revealing faction, receiving no aid, 38
;  silver [SILV], hill dwarf [HDWA]. Weight: 10. Capacity: 0/0/15/0.
;  Skills: combat [COMB] 1 (30).
@work

;*** mountain (67,61) in Beaufor ***

unit 3177
;Unit (3177), avoiding, behind, revealing faction, receiving no aid, 38
;  silver [SILV], hill dwarf [HDWA]. Weight: 10. Capacity: 0/0/15/0.
;  Skills: combat [COMB] 1 (30).
@work

;*** desert (69,61) in Beaubur ***

unit 2938
;Unit (2938), avoiding, revealing faction, receiving no aid, nomad
;  [NOMA], 10 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  none.
MOVE S
TURN
@work
ENDTURN

;*** plain (64,62) in Ranaw ***

unit 710
;Unit (710), avoiding, revealing faction, receiving no aid, nomad
;  [NOMA], 24 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (66,62) in Ranaw ***

unit 3130
;Unit (3130), avoiding, behind, revealing faction, receiving no aid, 52
;  silver [SILV], hill dwarf [HDWA]. Weight: 10. Capacity: 0/0/15/0.
;  Skills: combat [COMB] 1 (30).
@work

;*** desert (68,62) in Beaubur ***

unit 1260
;Unit (1260), avoiding, revealing faction, receiving no aid, nomad
;  [NOMA], 3 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  none.
@work

unit 3026
;Unit (3026), avoiding, revealing faction, receiving no aid, 8 nomads
;  [NOMA], 110 silver [SILV]. Weight: 80. Capacity: 0/0/120/0. Skills:
;  none.
MOVE SE
TURN
@work
ENDTURN

;*** desert (70,62) in Beaubur ***

unit 2955
;Unit (2955), avoiding, revealing faction, receiving no aid, nomad
;  [NOMA], 10 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  none.
@work

;*** mountain (63,63) in Rothrila ***

unit 3100
;Unit (3100), avoiding, revealing faction, receiving no aid, 185 silver
;  [SILV], 9 nomads [NOMA]. Weight: 90. Capacity: 0/0/135/0. Skills:
;  combat [COMB] 1 (30).
@work

;*** plain (65,63) in Ranaw, contains Trabddel [city] ***

unit 1806
;Unit (1806), avoiding, revealing faction, receiving no aid, 31 silver
;  [SILV], high elf [HELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  none.
@work

;*** plain (64,64) in Ranaw ***

unit 1914
;Unit (1914), avoiding, revealing faction, receiving no aid, 35 silver
;  [SILV], high elf [HELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  none.
@work

;*** plain (66,64) in Ranaw ***

unit 1079
;Unit (1079), avoiding, revealing faction, receiving no aid, 40 silver
;  [SILV], high elf [HELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  none.
@work

;*** jungle (68,64) in Belver ***

unit 1867
;Unit (1867), avoiding, revealing faction, receiving no aid, 12 silver
;  [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills: none.
@work

;*** mountain (63,65) in Rothrila ***

unit 1900
;Unit (1900), avoiding, revealing faction, receiving no aid, 33 silver
;  [SILV], high elf [HELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  none.
@work

;*** plain (65,65) in Ranaw, contains Turfold [city] ***

unit 1896
;Unit (1896), avoiding, revealing faction, receiving no aid, 48 silver
;  [SILV], high elf [HELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  none.
@work

;*** plain (64,66) in Ranaw ***

unit 3157
;Unit (3157), avoiding, revealing faction, receiving no aid, 40 silver
;  [SILV], plainsman [PLAI]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  none.
@work

;*** jungle (66,66) in Belver, contains Throzmunt [city] ***

unit 3055
;Unit (3055), avoiding, revealing faction, receiving no aid, nomad
;  [NOMA], 4 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  none.
@work

;*** jungle (68,66) in Belver ***

unit 1261
;Unit (1261), avoiding, revealing faction, receiving no aid, 80 silver
;  [SILV], 5 nomads [NOMA]. Weight: 50. Capacity: 0/0/75/0. Skills:
;  none.
MOVE SE SE

unit 3056
;Unit (3056), avoiding, revealing faction, receiving no aid, nomad
;  [NOMA], 10 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  none.
MOVE NE
TURN
@work
ENDTURN

unit 3149
;Unit (3149), avoiding, revealing faction, receiving no aid, nomad
;  [NOMA], 10 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  none.
MOVE SE
TURN
@work
ENDTURN

unit 3153
;Unit (3153), avoiding, revealing faction, receiving no aid, nomad
;  [NOMA], 10 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  none.
MOVE S
TURN
@work
ENDTURN

unit 3156
;Unit (3156), avoiding, revealing faction, receiving no aid, nomad
;  [NOMA], silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: none.
@work

;*** mountain (63,67) in Rothrila ***

unit 1961
;Unit (1961), avoiding, revealing faction, receiving no aid, 34 silver
;  [SILV], high elf [HELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  none.
@work

;*** plain (65,67) in Ranaw ***

unit 1984
;Unit (1984), avoiding, revealing faction, receiving no aid, 34 silver
;  [SILV], high elf [HELF]. Weight: 10. Capacity: 0/0/15/0. Skills:
;  none.
@work

;*** jungle (67,67) in Belver ***

unit 1870
;Unit (1870), avoiding, revealing faction, receiving no aid, 13 silver
;  [SILV], nomad [NOMA]. Weight: 10. Capacity: 0/0/15/0. Skills: none.
@work

;*** plain (64,68) in Ranaw ***

unit 1628
;Ocladia (1628), avoiding, revealing faction, receiving no aid, 18
;  barbarians [BARB], 3684 silver [SILV], 18 horses [HORS]. Weight:
;  1080. Capacity: 0/1260/1530/0. Skills: combat [COMB] 2 (90).
@tax

unit 3109
;Unit (3109), avoiding, revealing faction, receiving no aid, 50 nomads
;  [NOMA], 3126 silver [SILV]. Weight: 500. Capacity: 0/0/750/0.
;  Skills: combat [COMB] 1 (30).

;*** plain (66,68) in Ranaw ***

unit 1304
;Unit (1304), avoiding, revealing faction, receiving no aid, 750 silver
;  [SILV], 9 nomads [NOMA]. Weight: 90. Capacity: 0/0/135/0. Skills:
;  none.
MOVE SE

;*** underforest (40,0,underworld) in Lotholuen ***

unit 665
;Unit (665), revealing faction, 163 silver [SILV], high elf [HELF].
;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).

#end


`);

// parser.results is an array of possible parsings.
console.log(parser.results); // [[[[ "foo" ],"\n" ]]]

export default parser;
