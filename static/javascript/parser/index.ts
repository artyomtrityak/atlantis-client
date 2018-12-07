import nearley from "nearley";
import { diff } from "deep-diff";
import grammar from "./grammar";

// Create a Parser object from our grammar.
// const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
// parser.feed(`Atlantis Report For:
// Grey Wind (17) (War 2, Magic 3)
// May, Year 8

// Atlantis Engine Version: 4.1.0
// Standard Atlantis, Version: 4.1.0

// Faction Status:
// Tax Regions: 24 (24)
// Trade Regions: 0 (0)
// Mages: 3 (3)

// Errors during turn:
// Grey Scout (1779): MOVE: Unit has insufficient movement points;
//   remaining moves queued.
// Grey Scout (2529): MOVE: Unit has insufficient movement points;
//   remaining moves queued.
// Grey Scout (2087): MOVE: Unit has insufficient movement points;
//   remaining moves queued.
// Grey Scout (2086): MOVE: Unit has insufficient movement points;
//   remaining moves queued.
// Grey Scout (2319): MOVE: Unit has insufficient movement points;
//   remaining moves queued.
// Grey Scout (3435): MOVE: Unit has insufficient movement points;
//   remaining moves queued.
// Grey Ambassador (1978): STUDY: Not enough funds.

// Events during turn:
// Harpers (1863): Gives 150 silver [SILV] to Grey Ambassador (1840).
// Workers (2167): Gives 51 silver [SILV] to Harpers (1607).
// Footmen (1630): Gives 150 silver [SILV] to Knight Commander (2843).
// Footmen (1630): Gives 152 silver [SILV] to Lady Isola (18).
// Footmen (1642): Gives 50 silver [SILV] to Seneschal (2318).
// Workers (2169): Gives 10 silver [SILV] to Master Archer (2948).
// Workers (2169): Gives 100 silver [SILV] to Harpers (2261).
// Workers (2169): Gives 610 silver [SILV] to Grey Scout (3435).
// Harpers (3302): Gives 300 silver [SILV] to Grey Scout (3435).
// Harpers (3307): Gives 300 silver [SILV] to Grey Scout (3435).
// Footmen (2844): Gives 60 silver [SILV] to Grey Scout (3435).
// Footmen (2845): Gives 60 silver [SILV] to Grey Scout (3435).
// Master Archer (2948): Gives 901 silver [SILV] to Grey Scout (3435).
// Grey Ambassador (1977): Gives longbow [LBOW] to Master Archer (2948).
// Grey Ambassador (1977): Gives 4 longbows [LBOW] to Archers (2947).
// Grey Ambassador (1977): Gives 4 longbows [LBOW] to Archers (3362).
// Grey Ambassador (1977): Gives horse [HORS] to Grey Scout (3435).
// Footmen (2168): Gives 70 silver [SILV] to Footmen (2265).
// Footmen (2168): Gives 470 silver [SILV] to Grey Scout (2266).
// Footmen (3094): Gives 126 silver [SILV] to Knight (3444).
// Footmen (3265): Gives 540 silver [SILV] to Grey Scout (3456).
// Footmen (1677): Gives 56 silver [SILV] to Grey Scout (3456).
// Footmen (1677): Gives 214 silver [SILV] to Grey Scout (3456).
// Grey Scout (1676): Gives 53 silver [SILV] to Grey Scout (3456).
// Grey Scout (1676): Gives horse [HORS] to Grey Scout (3456).
// Workers (3014): Gives 10 silver [SILV] to Grey Scout (2267).
// Workers (1841): Gives 10 vikings [VIKI] to Footmen (3457).
// Workers (1841): Gives 440 silver [SILV] to Footmen (3457).
// Harpers (1864): Gives 100 silver [SILV] to Grey Ambassador (2088).
// Harpers (1864): Gives 100 silver [SILV] to Footmen (3457).
// Harpers (1864): Gives 50 silver [SILV] to Grey Scout (2218).
// Harpers (3162): Gives 500 silver [SILV] to Footmen (3457).
// Lord Eristan (1217): Gives 100 silver [SILV] to Grey Ambassador
//   (2088).
// Workers (2089): Gives 131 silver [SILV] to Grey Scout (3439).
// Footmen (3095): Gives 175 silver [SILV] to Grey Scout (1689).
// Footmen (3286): Gives 280 silver [SILV] to Grey Scout (1689).
// Footmen (3287): Gives 10 silver [SILV] to Grey Scout (1689).
// Footmen (3287): Gives 271 silver [SILV] to Grey Scout (1689).
// Knight (3376): Gives 18 silver [SILV] to Grey Scout (1689).
// Knight (3377): Gives 18 silver [SILV] to Grey Scout (1689).
// Knight (3378): Gives 18 silver [SILV] to Grey Scout (1689).
// Knight (3379): Gives 18 silver [SILV] to Grey Scout (1689).
// Knight (3380): Gives 18 silver [SILV] to Grey Scout (1689).
// Knight (3381): Gives 18 silver [SILV] to Grey Scout (1689).
// Knight (3382): Gives 19 silver [SILV] to Grey Scout (1689).
// Grey Scout (1689): Gives longbow [LBOW] to Master Archer (3383).
// Grey Scout (1689): Gives longbow [LBOW] to Master Archer (3384).
// Grey Scout (1689): Gives longbow [LBOW] to Master Archer (3385).
// Grey Scout (1689): Gives longbow [LBOW] to Master Archer (3386).
// Knight (2320): Gives 62 silver [SILV] to Knight (3458).
// Footmen (2761): Gives 72 silver [SILV] to Knight (3458).
// Footmen (2761): Gives 134 silver [SILV] to Knight (3459).
// Footmen (2761): Gives 134 silver [SILV] to Knight (3460).
// Footmen (2761): Gives 379 silver [SILV] to Grey Scout (3249).
// Footmen (1704): Gives 335 silver [SILV] to Grey Scout (3249).
// Footmen (1705): Gives 335 silver [SILV] to Grey Scout (3249).
// Grey Scout (3249): Gives horse [HORS] to Knight (2311).
// Grey Scout (3249): Gives sword [SWOR] to Knight (2311).
// Grey Scout (3249): Gives horse [HORS] to Knight (2320).
// Grey Scout (3249): Gives horse [HORS] to Knight (2336).
// Grey Scout (3249): Gives sword [SWOR] to Knight (2336).
// Grey Scout (3249): Gives horse [HORS] to Knight (2377).
// Grey Scout (3249): Gives sword [SWOR] to Knight (2377).
// Grey Scout (3249): Gives horse [HORS] to Knight (2392).
// Grey Scout (3249): Gives sword [SWOR] to Knight (2392).
// Grey Scout (3249): Gives sword [SWOR] to Knight (3458).
// Grey Scout (3249): Gives sword [SWOR] to Knight (3460).
// Grey Scout (3249): Gives 3 swords [SWOR] to Footmen (1704).
// Grey Scout (3249): Gives sword [SWOR] to Knight (3459).
// Grey Scout (3249): Gives 3 swords [SWOR] to Footmen (1705).
// Grey Scout (3249): Gives 10 swords [SWOR] to Footmen (2761).
// Grey Scout (3249): Gives horse [HORS] to Knight (3458).
// Grey Scout (3249): Gives horse [HORS] to Knight (3459).
// Grey Scout (3249): Gives horse [HORS] to Knight (3460).
// Footmen (3163): Gives 540 silver [SILV] to Footmen (3144).
// Footmen (3033): Gives 142 silver [SILV] to Knight (3464).
// Footmen (3033): Gives 142 silver [SILV] to Knight (3465).
// Footmen (3033): Gives 256 silver [SILV] to Footmen (3387).
// Grey Ambassador (1865): Gives 180 silver [SILV] to Grey Scout (1926).
// Footmen (2236): Gives 10 silver [SILV] to Master Archer (3388).
// Footmen (2236): Gives 10 silver [SILV] to Master Archer (3389).
// Footmen (2236): Gives 322 silver [SILV] to Grey Scout (1926).
// Footmen (1706): Gives 124 silver [SILV] to Grey Scout (1926).
// Grey Scout (1926): Gives sword [SWOR] to Knight (2321).
// Grey Scout (1926): Gives horse [HORS] to Knight (2321).
// Grey Scout (1926): Gives horse [HORS] to Knight Commander (2847).
// Grey Scout (1926): Gives sword [SWOR] to Knight Commander (2847).
// Grey Scout (1926): Gives horse [HORS] to Grey Ambassador (1865).
// Grey Scout (1926): Gives sword [SWOR] to Grey Ambassador (1865).
// Grey Scout (1926): Gives 10 swords [SWOR] to Footmen (1706).
// Grey Scout (1926): Gives sword [SWOR] to Footmen (2236).
// Footmen (3034): Gives 142 silver [SILV] to Knight (3466).
// Footmen (3034): Gives 142 silver [SILV] to Knight (3468).
// Footmen (3440): Gives 760 silver [SILV] to Footmen (3469).
// Footmen (1709): Gives 248 silver [SILV] to Knight (2952).
// Grey Scout (1924): Gives 51 silver [SILV] to Footmen (3441).
// Workers (2648): Gives 60 silver [SILV] to Harpers (1710).
// Grey Scout (1781): Gives 72 silver [SILV] to Workers (3470).
// Grey Scout (2944): Collects $50 in taxes in plain (64,22) in Satiasam.
// Grey Scout (2945): Collects $50 in taxes in jungle (73,27) in
//   Donndinon.
// Knight (2317): Collects $27 in taxes in mountain (93,27) in Lingen.
// Footmen (2399): Collects $271 in taxes in mountain (93,27) in Lingen.
// Knight (2638): Collects $27 in taxes in mountain (93,27) in Lingen.
// Knight (2639): Collects $27 in taxes in mountain (93,27) in Lingen.
// Knight (2640): Collects $27 in taxes in mountain (93,27) in Lingen.
// Knight (2641): Collects $27 in taxes in mountain (93,27) in Lingen.
// Knight (2642): Collects $27 in taxes in mountain (93,27) in Lingen.
// Knight (2643): Collects $27 in taxes in mountain (93,27) in Lingen.
// Knight (3222): Collects $27 in taxes in mountain (93,27) in Lingen.
// Knight (3267): Collects $27 in taxes in mountain (93,27) in Lingen.
// Knight (3301): Collects $27 in taxes in mountain (93,27) in Lingen.
// Footmen (1630): Collects $272 in taxes in mountain (93,27) in Lingen.
// Footmen (1642): Collects $272 in taxes in mountain (93,27) in Lingen.
// Lady Isola (18): Collects $27 in taxes in mountain (93,27) in Lingen.
// Seneschal (2318): Collects $27 in taxes in mountain (93,27) in Lingen.
// Knight Commander (2843): Collects $28 in taxes in mountain (93,27) in
//   Lingen.
// Footmen (2168): Collects $500 in taxes in forest (89,31) in Kawapo.
// Footmen (3094): Collects $250 in taxes in forest (91,31) in Kawapo.
// Footmen (3363): Collects $250 in taxes in forest (91,31) in Kawapo.
// Footmen (3265): Collects $250 in taxes in forest (90,32) in Kawapo.
// Footmen (1677): Collects $250 in taxes in forest (90,32) in Kawapo.
// Grey Scout (2084): Collects $50 in taxes in swamp (1,41) in Brandor.
// Footmen (2401): Collects $50 in taxes in swamp (0,44) in Brandor.
// Grey Scout (2319): Collects $50 in taxes in desert (93,59) in Setihe.
// Grey Scout (1779): Collects $50 in taxes in desert (6,70) in Sayqua.
// Grey Scout (2529): Collects $50 in taxes in forest (3,73) in U'osad.
// Grey Scout (2087): Collects $50 in taxes in forest (11,77) in Cadel.
// Master Harper (2233): Collects $44 in taxes in forest (5,79) in
//   Crerakroth.
// Footmen (3317): Collects $889 in taxes in forest (5,79) in Crerakroth.
// Footmen (3437): Collects $889 in taxes in forest (5,79) in Crerakroth.
// Footmen (2533): Collects $138 in taxes in forest (67,79) in Monfor.
// Footmen (3366): Collects $138 in taxes in forest (67,79) in Monfor.
// Master Archer (3367): Collects $13 in taxes in forest (67,79) in
//   Monfor.
// Master Archer (3368): Collects $13 in taxes in forest (67,79) in
//   Monfor.
// Master Archer (3369): Collects $14 in taxes in forest (67,79) in
//   Monfor.
// Master Archer (3370): Collects $14 in taxes in forest (67,79) in
//   Monfor.
// Master Archer (3371): Collects $14 in taxes in forest (67,79) in
//   Monfor.
// Archers (3372): Collects $140 in taxes in forest (67,79) in Monfor.
// Archers (3373): Collects $140 in taxes in forest (67,79) in Monfor.
// Knight (3438): Collects $14 in taxes in forest (67,79) in Monfor.
// Grey Ambassador (1978): Collects $45 in taxes in plain (6,82) in
//   Condorund.
// Footmen (3365): Collects $908 in taxes in plain (6,82) in Condorund.
// Footmen (2309): Collects $909 in taxes in plain (6,82) in Condorund.
// Knight (3032): Collects $22 in taxes in mountain (68,82) in Inber.
// Footmen (3095): Collects $227 in taxes in mountain (68,82) in Inber.
// Footmen (3286): Collects $228 in taxes in mountain (68,82) in Inber.
// Footmen (3287): Collects $228 in taxes in mountain (68,82) in Inber.
// Knight (3374): Collects $22 in taxes in mountain (68,82) in Inber.
// Knight (3375): Collects $22 in taxes in mountain (68,82) in Inber.
// Knight (3376): Collects $23 in taxes in mountain (68,82) in Inber.
// Knight (3377): Collects $23 in taxes in mountain (68,82) in Inber.
// Knight (3378): Collects $23 in taxes in mountain (68,82) in Inber.
// Knight (3379): Collects $23 in taxes in mountain (68,82) in Inber.
// Knight (3380): Collects $23 in taxes in mountain (68,82) in Inber.
// Knight (3381): Collects $23 in taxes in mountain (68,82) in Inber.
// Knight (3382): Collects $23 in taxes in mountain (68,82) in Inber.
// Master Archer (3383): Collects $23 in taxes in mountain (68,82) in
//   Inber.
// Master Archer (3384): Collects $23 in taxes in mountain (68,82) in
//   Inber.
// Master Archer (3385): Collects $23 in taxes in mountain (68,82) in
//   Inber.
// Master Archer (3386): Collects $23 in taxes in mountain (68,82) in
//   Inber.
// Knight (2320): Collects $27 in taxes in mountain (67,83) in Baibur.
// Footmen (2761): Collects $270 in taxes in mountain (67,83) in Baibur.
// Footmen (1704): Collects $270 in taxes in mountain (67,83) in Baibur.
// Footmen (1705): Collects $270 in taxes in mountain (67,83) in Baibur.
// Knight (2311): Collects $27 in taxes in mountain (67,83) in Baibur.
// Knight (2336): Collects $27 in taxes in mountain (67,83) in Baibur.
// Knight (2377): Collects $27 in taxes in mountain (67,83) in Baibur.
// Knight (2392): Collects $27 in taxes in mountain (67,83) in Baibur.
// Knight (2953): Collects $50 in taxes in mountain (69,83) in Inber.
// Footmen (3163): Collects $500 in taxes in mountain (69,83) in Inber.
// Grey Scout (1925): Collects $50 in taxes in mountain (66,84) in
//   Baibur.
// Footmen (3033): Collects $500 in taxes in mountain (66,84) in Baibur.
// Grey Ambassador (1865): Collects $32 in taxes in mountain (68,84) in
//   Inber.
// Footmen (2236): Collects $322 in taxes in mountain (68,84) in Inber.
// Knight (2321): Collects $32 in taxes in mountain (68,84) in Inber.
// Knight Commander (2847): Collects $32 in taxes in mountain (68,84) in
//   Inber.
// Footmen (1706): Collects $324 in taxes in mountain (68,84) in Inber.
// Knight (2237): Collects $50 in taxes in mountain (69,85) in Inber.
// Footmen (3034): Collects $500 in taxes in mountain (69,85) in Inber.
// Footmen (3440): Collects $500 in taxes in mountain (69,85) in Inber.
// Footmen (1707): Collects $500 in taxes in mountain (69,85) in Inber.
// Knight (2952): Collects $19 in taxes in mountain (68,86) in Inber.
// Footmen (3096): Collects $195 in taxes in mountain (68,86) in Inber.
// Footmen (3390): Collects $196 in taxes in mountain (68,86) in Inber.
// Footmen (1709): Collects $196 in taxes in mountain (68,86) in Inber.
// Knight (2422): Collects $19 in taxes in mountain (68,86) in Inber.
// Knight (2441): Collects $19 in taxes in mountain (68,86) in Inber.
// Knight (2464): Collects $20 in taxes in mountain (68,86) in Inber.
// Knight (2617): Collects $20 in taxes in mountain (68,86) in Inber.
// Knight (2663): Collects $20 in taxes in mountain (68,86) in Inber.
// Grey Scout (1924): Collects $50 in taxes in tundra (69,87) in Issche.
// Grey Scout (2757): Collects $50 in taxes in underforest
//   (43,43,underworld) in Aletiss.
// Lady Isola (18): Attempts to summon a dragon, but fails.
// Lord Eristan (1217): Summons an eagle.
// Prince Tirion (1777): Summons an eagle.
// Lord Loudeo (1099) uses earth lore [EART] in forest (6,80) in
//   Crerakroth, contains Ardvale [city].
// Unit (1218) uses earth lore [EART] in forest (6,80) in Crerakroth,
//   contains Ardvale [city].
// Workers (3137): Buys plainsman [PLAI] at $76 each.
// Workers (2941): Buys tribesman [TMAN] at $56 each.
// Workers (2080): Buys 7 vikings [VIKI] at $68 each.
// Knight (3444): Buys leader [LEAD] at $96 each.
// Grey Scout (3456): Buys sea elf [SELF] at $56 each.
// Workers (1686): Buys sea elf [SELF] at $60 each.
// Workers (3248): Buys 2 tribesmen [TMAN] at $64 each.
// Grey Scout (2267): Buys 4 horses [HORS] at $51 each.
// Workers (3014): Buys high elf [HELF] at $76 each.
// Workers (3436): Buys tribal elf [TELF] at $64 each.
// Workers (2531): Buys 3 tribesmen [TMAN] at $64 each.
// Grey Ambassador (2088): Buys horse [HORS] at $75 each.
// Grey Ambassador (2088): Buys sword [SWOR] at $150 each.
// Footmen (3457): Buys 10 vikings [VIKI] at $64 each.
// Workers (2493): Buys hill dwarf [HDWA] at $64 each.
// Grey Scout (3439): Buys 15 longbows [LBOW] at $120 each.
// Workers (2532): Buys 2 barbarians [BARB] at $56 each.
// Knight (3458): Buys leader [LEAD] at $104 each.
// Knight (3459): Buys leader [LEAD] at $104 each.
// Knight (3460): Buys leader [LEAD] at $104 each.
// Footmen (3144): Buys 2 barbarians [BARB] at $56 each.
// Knight (3464): Buys leader [LEAD] at $112 each.
// Knight (3465): Buys leader [LEAD] at $112 each.
// Workers (2090): Buys barbarian [BARB] at $64 each.
// Footmen (3469): Buys 10 orcs [ORC] at $56 each.
// Knight (3466): Buys leader [LEAD] at $112 each.
// Knight (3468): Buys leader [LEAD] at $112 each.
// Workers (2091): Buys 2 orcs [ORC] at $60 each.
// Footmen (3441): Buys ice dwarf [IDWA] at $44 each.
// Harpers (1710): Buys high elf [HELF] at $72 each.
// Workers (3470): Buys plainsman [PLAI] at $72 each.
// Footmen (2401): Enters Shaft [1].
// Grey Scout (2944): Walks from plain (64,22) in Satiasam to plain
//   (64,20) in Satiasam.
// Grey Scout (2943): Walks from swamp (63,23) in Skelid to plain (62,22)
//   in Satiasam.
// Grey Scout (2942): Walks from swamp (61,27) in Skelid to forest
//   (60,26) in Nugyru.
// Grey Scout (2945): Walks from jungle (73,27) in Donndinon to jungle
//   (73,29) in Donndinon.
// Grey Scout (3435): Rides from mountain (93,29) in Lingen to mountain
//   (92,30) in Lingen.
// Grey Ambassador (1977): Rides from mountain (93,29) in Lingen to
//   mountain (93,27) in Lingen.
// Grey Scout (2266): Rides from forest (89,31) in Kawapo to forest
//   (88,30) in Kawapo.
// Grey Scout (1676): Rides from forest (90,32) in Kawapo to forest
//   (91,31) in Kawapo.
// Grey Scout (3456): Rides from forest (90,32) in Kawapo to forest
//   (89,31) in Kawapo.
// Grey Scout (2084): Walks from swamp (1,41) in Brandor to swamp (2,40)
//   in Brandor.
// Footmen (2401): Walks from swamp (0,44) in Brandor to cavern
//   (0,22,underworld) in Ashwaz.
// Grey Scout (2085): Walks from plain (3,51) in Killorglin to plain
//   (3,53) in Killorglin.
// Grey Scout (2267): Rides from plain (3,53) in Killorglin to plain
//   (3,51) in Killorglin.
// Grey Scout (2319): Walks from desert (93,59) in Setihe to desert
//   (94,58) in Binhai.
// Grey Scout (2238): Walks from jungle (70,64) in Belver to desert
//   (70,62) in Beaubur.
// Grey Scout (1923): Walks from plain (65,67) in Ranaw to plain (65,65)
//   in Ranaw.
// Grey Scout (3439): Rides from mountain (68,80) in Inber to forest
//   (67,79) in Monfor.
// Grey Scout (1689): Rides from mountain (68,82) in Inber to mountain
//   (68,80) in Inber.
// Grey Scout (3249): Rides from mountain (67,83) in Baibur to mountain
//   (66,82) in Baibur.
// Grey Scout (1926): Rides from mountain (68,84) in Inber to mountain
//   (67,83) in Baibur.
// Grey Scout (2757): Walks from underforest (43,43,underworld) in
//   Aletiss to underforest (42,44,underworld) in Aletiss.
// Grey Scout (2944): Walks from plain (64,20) in Satiasam to plain
//   (64,18) in Satiasam.
// Grey Scout (2943): Is forbidden entry to plain (61,21) in Satiasam by
//   Unit (3332), Warlords Inc (19).
// Grey Scout (2267): Rides from plain (3,51) in Killorglin to plain
//   (3,49) in Killorglin.
// Grey Scout (2319): Walks from desert (94,58) in Binhai to desert
//   (95,59) in Binhai.
// Footmen (2401): Walks from cavern (0,22,underworld) in Ashwaz to
//   cavern (0,20,underworld) in Ashwaz.
// Grey Scout (3435): Rides from mountain (92,30) in Lingen to forest
//   (91,31) in Kawapo.
// Grey Scout (3456): Rides from forest (89,31) in Kawapo to forest
//   (88,30) in Kawapo.
// Grey Scout (2267): Rides from plain (3,49) in Killorglin to jungle
//   (4,48) in Zogghul.
// Knight (2643): Teaches combat to Knight (3222).
// Knight (2643): Teaches combat to Knight (3267).
// Knight (2643): Teaches combat to Knight (3301).
// Knight (2643): Teaches riding to Seneschal (2318).
// Master Archer (3370): Teaches longbow to Archers (3373).
// Master Archer (3371): Teaches longbow to Archers (3372).
// Grey Ambassador (2088): Teaches combat to Footmen (3457).
// Knight (3375): Teaches riding to Knight (3032).
// Knight (3375): Teaches riding to Knight (3374).
// Knight (3375): Teaches riding to Knight (3376).
// Knight (3375): Teaches riding to Knight (3377).
// Knight (3375): Teaches riding to Knight (3378).
// Knight (3375): Teaches riding to Knight (3379).
// Knight (3375): Teaches riding to Knight (3380).
// Knight (3375): Teaches riding to Knight (3381).
// Knight (3375): Teaches riding to Knight (3382).
// Knight (2320): Teaches riding to Knight (2311).
// Knight (2320): Teaches riding to Knight (2336).
// Knight (2320): Teaches riding to Knight (2377).
// Knight (2320): Teaches riding to Knight (2392).
// Knight (2953): Teaches combat to Footmen (3144).
// Knight (2321): Teaches combat to Footmen (1706).
// Knight (2237): Teaches combat to Footmen (3469).
// Knight (2952): Teaches combat to Knight (2422).
// Knight (2952): Teaches combat to Knight (2441).
// Knight (2952): Teaches combat to Knight (2617).
// Knight (2952): Teaches combat to Knight (2663).
// Knight (2952): Teaches combat to Knight (2464).
// Grey Scout (2490): Earns 14 silver working in swamp (90,16) in
//   Methven.
// Workers (3013): Earns 32 silver working in swamp (92,16) in Kekeloh.
// Workers (3137): Earns 38 silver working in plain (2,18) in Dezhou.
// Workers (2941): Earns 28 silver working in swamp (92,18) in Kekeloh.
// Workers (3247): Earns 18 silver working in plain (3,19) in Dezhou.
// Workers (2527): Earns 28 silver working in swamp (93,19) in Kekeloh.
// Grey Scout (2081): Earns 19 silver working in plain (4,20) in Dezhou.
// Workers (3142): Earns 15 silver working in swamp (65,23) in Skelid.
// Grey Ambassador (1840): Studies observation.
// Workers (2080): Earns 2160 silver working in mountain (68,26) in
//   Phidyntia.
// Harpers (1863): Earns 171 silver entertaining in mountain (68,26) in
//   Phidyntia.
// Grey Scout (2082): Earns 18 silver working in plain (84,26) in
//   Reilnon.
// Harpers (1607): Studies entertainment.
// Workers (2167): Earns 312 silver working in mountain (92,26) in
//   Lingen.
// Knight (2317): Studies riding.
// Knight (2639): Studies combat.
// Knight (3222): Studies combat.
// Knight (3267): Studies combat.
// Knight (3301): Studies combat.
// Lady Isola (18): Studies dragon lore.
// Seneschal (2318): Studies riding.
// Knight Commander (2843): Studies tactics.
// Footmen (2399): Earns 130 silver working in mountain (93,27) in
//   Lingen.
// Elven Stonemelders (2491): Earns 65 silver working in mountain (93,27)
//   in Lingen.
// Knight (2638): Earns 13 silver working in mountain (93,27) in Lingen.
// Knight (2640): Earns 13 silver working in mountain (93,27) in Lingen.
// Knight (2641): Earns 13 silver working in mountain (93,27) in Lingen.
// Knight (2642): Earns 13 silver working in mountain (93,27) in Lingen.
// Elven Builders (2528): Earns 65 silver working in mountain (93,27) in
//   Lingen.
// Footmen (1630): Earns 130 silver working in mountain (93,27) in
//   Lingen.
// Footmen (1642): Earns 130 silver working in mountain (93,27) in
//   Lingen.
// Harpers (2946): Earns 58 silver entertaining in mountain (93,27) in
//   Lingen.
// Workers (3161): Earns 16 silver working in forest (87,29) in Kawapo.
// Harpers (2261): Studies entertainment.
// Master Archer (2948): Studies longbow.
// Workers (2169): Earns 960 silver working in mountain (93,29) in
//   Lingen.
// Grey Scout (3209): Earns 16 silver working in mountain (93,29) in
//   Lingen.
// Footmen (2844): Earns 160 silver working in mountain (93,29) in
//   Lingen.
// Footmen (2845): Earns 160 silver working in mountain (93,29) in
//   Lingen.
// Archers (2947): Earns 160 silver working in mountain (93,29) in
//   Lingen.
// Archers (3362): Earns 160 silver working in mountain (93,29) in
//   Lingen.
// Footmen (1614): Earns 160 silver working in mountain (93,29) in
//   Lingen.
// Footmen (1616): Earns 160 silver working in mountain (93,29) in
//   Lingen.
// Footmen (1657): Earns 160 silver working in mountain (93,29) in
//   Lingen.
// Master Harper (3237): Earns 40 silver entertaining in mountain (93,29)
//   in Lingen.
// Harpers (3302): Earns 400 silver entertaining in mountain (93,29) in
//   Lingen.
// Harpers (3307): Earns 400 silver entertaining in mountain (93,29) in
//   Lingen.
// Workers (2231): Earns 180 silver working in forest (88,30) in Kawapo.
// Footmen (2265): Studies combat.
// Footmen (2168): Earns 130 silver working in forest (89,31) in Kawapo.
// Knight (3444): Studies combat.
// Footmen (3094): Earns 60 silver working in forest (91,31) in Kawapo.
// Footmen (3363): Earns 60 silver working in forest (91,31) in Kawapo.
// Footmen (3265): Earns 70 silver working in forest (90,32) in Kawapo.
// Footmen (1677): Earns 70 silver working in forest (90,32) in Kawapo.
// Workers (1686): Earns 30 silver working in jungle (3,43) in Zogghul.
// Workers (3248): Earns 112 silver working in jungle (4,48) in Zogghul.
// Workers (2949): Earns 136 silver working in plain (1,51) in
//   Killorglin.
// Workers (3014): Earns 76 silver working in plain (3,53) in Killorglin.
// Workers (2644): Earns 105 silver working in desert (2,56) in Binhai.
// Workers (2400): Earns 96 silver working in desert (2,58) in Binhai.
// Grey Ambassador (2057): Earns 40 silver entertaining in desert (2,58)
//   in Binhai.
// Workers (2232): Earns 136 silver working in plain (93,63) in Nosen.
// Workers (2306): Earns 16 silver working in jungle (70,64) in Belver.
// Workers (2645): Earns 240 silver working in desert (5,65) in Sayqua.
// Workers (2846): Earns 90 silver working in plain (92,66) in Nosen.
// Workers (3436): Earns 80 silver working in jungle (71,67) in Belver.
// Workers (2760): Earns 255 silver working in plain (89,69) in Negar.
// Workers (2170): Earns 60 silver working in forest (3,71) in U'osad.
// Workers (2530): Earns 26 silver working in forest (8,72) in Snyaldshy.
// Workers (2492): Earns 204 silver working in forest (7,73) in
//   Snyaldshy.
// Workers (3316): Earns 80 silver working in forest (0,74) in U'osad.
// Workers (2531): Earns 416 silver working in swamp (67,75) in
//   Tourlanque.
// Grey Scout (1778): Earns 13 silver working in forest (14,76) in Cadel.
// Workers (2950): Earns 160 silver working in plain (71,77) in
//   Hullevala.
// Workers (3031): Earns 36 silver working in plain (73,77) in Hullevala.
// Workers (3364): Earns 84 silver working in swamp (95,77) in Rayting.
// Master Harper (2233): Studies observation.
// Workers (2646): Earns 637 silver working in forest (5,79) in
//   Crerakroth.
// Footmen (3317): Earns 319 silver working in forest (5,79) in
//   Crerakroth.
// Footmen (3437): Earns 319 silver working in forest (5,79) in
//   Crerakroth.
// Harpers (2058): Earns 457 silver entertaining in forest (5,79) in
//   Crerakroth.
// Harpers (2234): Earns 457 silver entertaining in forest (5,79) in
//   Crerakroth.
// Harpers (3143): Earns 457 silver entertaining in forest (5,79) in
//   Crerakroth.
// Master Archer (3367): Studies longbow.
// Archers (3372): Studies longbow.
// Archers (3373): Studies longbow.
// Knight (3438): Studies combat.
// Footmen (2533): Earns 120 silver working in forest (67,79) in Monfor.
// Footmen (3366): Earns 120 silver working in forest (67,79) in Monfor.
// Master Archer (3368): Earns 12 silver working in forest (67,79) in
//   Monfor.
// Master Archer (3369): Earns 12 silver working in forest (67,79) in
//   Monfor.
// Grey Scout (2218): Studies tactics.
// Footmen (3457): Studies combat.
// Lord Eristan (1217): Studies farsight.
// Prince Tirion (1777): Studies enchant swords.
// Workers (1841): Earns 680 silver working in forest (6,80) in
//   Crerakroth.
// Harpers (1864): Earns 300 silver entertaining in forest (6,80) in
//   Crerakroth.
// Harpers (3162): Earns 300 silver entertaining in forest (6,80) in
//   Crerakroth.
// Workers (2493): Earns 96 silver working in mountain (66,80) in Baibur.
// Workers (2089): Earns 192 silver working in mountain (68,80) in Inber.
// Workers (2647): Earns 30 silver working in mountain (65,81) in Baibur.
// Footmen (2309): Studies combat.
// Workers (2235): Earns 379 silver working in plain (6,82) in Condorund.
// Footmen (3365): Earns 380 silver working in plain (6,82) in Condorund.
// Workers (2951): Earns 30 silver working in mountain (64,82) in Baibur.
// Workers (2532): Earns 196 silver working in mountain (66,82) in
//   Baibur.
// Knight (3032): Studies riding.
// Knight (3374): Studies riding.
// Knight (3376): Studies riding.
// Knight (3377): Studies riding.
// Knight (3378): Studies riding.
// Knight (3379): Studies riding.
// Knight (3380): Studies riding.
// Knight (3381): Studies riding.
// Knight (3382): Studies riding.
// Master Archer (3383): Studies longbow.
// Footmen (3095): Earns 130 silver working in mountain (68,82) in Inber.
// Footmen (3286): Earns 130 silver working in mountain (68,82) in Inber.
// Footmen (3287): Earns 130 silver working in mountain (68,82) in Inber.
// Master Archer (3384): Earns 13 silver working in mountain (68,82) in
//   Inber.
// Master Archer (3385): Earns 13 silver working in mountain (68,82) in
//   Inber.
// Master Archer (3386): Earns 13 silver working in mountain (68,82) in
//   Inber.
// Grey Scout (1927): Earns 15 silver working in mountain (63,83) in
//   Baibur.
// Knight (2311): Studies riding.
// Knight (2336): Studies riding.
// Knight (2377): Studies riding.
// Knight (2392): Studies riding.
// Knight (3458): Studies combat.
// Knight (3459): Studies combat.
// Knight (3460): Studies combat.
// Footmen (2761): Earns 130 silver working in mountain (67,83) in
//   Baibur.
// Footmen (1704): Earns 130 silver working in mountain (67,83) in
//   Baibur.
// Footmen (1705): Earns 130 silver working in mountain (67,83) in
//   Baibur.
// Footmen (3144): Studies combat.
// Footmen (3163): Earns 140 silver working in mountain (69,83) in Inber.
// Footmen (3387): Studies combat.
// Knight (3464): Studies combat.
// Knight (3465): Studies combat.
// Grey Scout (1925): Earns 14 silver working in mountain (66,84) in
//   Baibur.
// Footmen (3033): Earns 140 silver working in mountain (66,84) in
//   Baibur.
// Grey Ambassador (1865): Studies riding.
// Knight Commander (2847): Studies riding.
// Master Archer (3388): Studies longbow.
// Master Archer (3389): Studies longbow.
// Footmen (1706): Studies combat.
// Footmen (2236): Earns 120 silver working in mountain (68,84) in Inber.
// Grey Scout (1922): Earns 12 silver working in forest (59,85) in
//   Soratuen.
// Workers (2090): Earns 208 silver working in mountain (67,85) in
//   Baibur.
// Knight (3466): Studies combat.
// Knight (3468): Studies combat.
// Footmen (3469): Studies combat.
// Footmen (3034): Earns 140 silver working in mountain (69,85) in Inber.
// Footmen (3440): Earns 140 silver working in mountain (69,85) in Inber.
// Footmen (1707): Earns 140 silver working in mountain (69,85) in Inber.
// Knight (2422): Studies combat.
// Knight (2441): Studies combat.
// Knight (2464): Studies combat.
// Knight (2617): Studies combat.
// Knight (2663): Studies combat.
// Footmen (3096): Earns 120 silver working in mountain (68,86) in Inber.
// Footmen (3390): Earns 120 silver working in mountain (68,86) in Inber.
// Footmen (1709): Earns 120 silver working in mountain (68,86) in Inber.
// Workers (2091): Earns 390 silver working in mountain (70,86) in Inber.
// Grey Scout (1924): Earns 11 silver working in tundra (69,87) in
//   Issche.
// Footmen (3441): Earns 55 silver working in tundra (69,87) in Issche.
// Workers (2219): Earns 231 silver working in plain (5,91) in Thordor.
// Workers (2534): Earns 108 silver working in tundra (2,92) in Etdshy.
// Workers (3250): Earns 34 silver working in plain (10,92) in Thordor.
// Workers (3035): Earns 22 silver working in plain (14,92) in Abersoch.
// Workers (3251): Earns 34 silver working in plain (16,92) in Abersoch.
// Workers (2648): Earns 180 silver working in plain (66,92) in
//   Carrigaline.
// Harpers (1710): Earns 54 silver working in plain (66,92) in
//   Carrigaline.
// Master Harper (3442): Earns 40 silver entertaining in plain (66,92) in
//   Carrigaline.
// Workers (3391): Earns 38 silver working in plain (13,93) in Abersoch.
// Workers (2848): Earns 13 silver working in plain (12,94) in Abersoch.
// Worker (1711): Earns 17 silver working in plain (16,94) in Abersoch.
// Workers (2649): Earns 226 silver working in plain (9,95) in Thordor.
// Grey Scout (1781): Earns 18 silver working in plain (15,95) in
//   Abersoch.
// Workers (3470): Earns 18 silver working in plain (15,95) in Abersoch.
// Grey Scout (1780): Earns 19 silver working in plain (17,95) in
//   Abersoch.
// Grey Scout (2758): Earns 16 silver working in cavern (1,21,underworld)
//   in Ashwaz.
// Harpers (1712): Earns 80 silver entertaining in underforest
//   (43,39,underworld) in Aletiss.

// Skill reports:

// enchant swords [ESWO] 1: A mage with the Enchant Swords skill may
//   magically create mithril swords. A mage may create 5 times his skill
//   level mithril swords per turn. The mage should issue the order CAST
//   Enchant_Swords to cast this spell. A unit with this skill may create
//   mithril swords via magic. This skill requires artifact lore [ARTI] 1
//   to begin to study. This skill costs 100 silver per month of study.

// Item reports:

// mithril sword [MSWO], weight 1. This is a  slashing weapon. No skill
//   is needed to wield this weapon. This weapon grants a bonus of 4 on
//   attack and defense. Wielders of this weapon, if mounted, get their
//   riding skill bonus on combat attack and defense. There is a 50%
//   chance that the wielder of this weapon gets a chance to attack in
//   any given round. This weapon attacks versus the target's defense
//   against melee attacks. This weapon allows 1 attack  per round. Units
//   with weaponsmith [WEAP] 3 may PRODUCE this item from 1 mithril at a
//   rate of 1 per man-month. Units with enchant swords [ESWO] of at
//   least level 1 may attempt to create this item via magic at a cost of
//   1 swords.

// Declared Attitudes (default Neutral):
// Hostile : none.
// Unfriendly : none.
// Neutral : none.
// Friendly : SkyRaiders (14).
// Ally : none.

// Unclaimed silver: 70.

// swamp (90,16) in Methven, contains Larusk [city], 3961 peasants
//   (tribesmen), $15844.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $14 (Max: $11090).
//   Wanted: 144 grain [GRAI] at $27, 174 livestock [LIVE] at $24, 65
//     furs [FUR] at $60, 158 fish [FISH] at $18, 57 swords [SWOR] at
//     $113, 90 longbows [LBOW] at $96, 61 plate armor [PARM] at $539, 47
//     ivory [IVOR] at $134, 76 truffles [TRUF] at $135.
//   For Sale: 80 wood [WOOD] at $45, 78 jewelry [JEWE] at $73, 43 cotton
//     [COTT] at $82, 792 tribesmen [TMAN] at $56, 158 leaders [LEAD] at
//     $112.
//   Entertainment available: $792.
//   Products: 17 grain [GRAI], 10 wood [WOOD], 14 herbs [HERB].

// Exits:
//   North : ocean (90,14) in Atlantis Ocean.
//   Northeast : swamp (91,15) in Methven.
//   Southeast : swamp (91,17) in Kekeloh.
//   South : swamp (90,18) in Methven.
//   Southwest : swamp (89,17) in Methven.
//   Northwest : swamp (89,15) in Methven.

// - City Guard (24), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// * Grey Scout (2490), Grey Wind (17), avoiding, behind, revealing
//   faction, tribal elf [TELF], 34 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: none.

// swamp (92,16) in Kekeloh, contains Volburg [city], 4555 peasants
//   (vikings), $27330.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $16 (Max: $14576).
//   Wanted: 180 grain [GRAI] at $20, 166 livestock [LIVE] at $18, 192
//     fish [FISH] at $24, 61 swords [SWOR] at $122, 74 chain armor
//     [CARM] at $105, 52 wagons [WAGO] at $195, 59 figurines [FIGU] at
//     $135, 86 chocolate [CHOC] at $171.
//   For Sale: 97 herbs [HERB] at $46, 85 mink [MINK] at $86, 95 cashmere
//     [CASH] at $78, 911 vikings [VIKI] at $64, 182 leaders [LEAD] at
//     $128.
//   Entertainment available: $1366.
//   Products: 14 livestock [LIVE], 13 wood [WOOD], 15 herbs [HERB].

// Exits:
//   North : ocean (92,14) in Atlantis Ocean.
//   Northeast : swamp (93,15) in Kekeloh.
//   Southeast : swamp (93,17) in Kekeloh.
//   South : swamp (92,18) in Kekeloh, contains Hatria [city].
//   Southwest : swamp (91,17) in Kekeloh.
//   Northwest : swamp (91,15) in Methven.

// - City Guard (25), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// * Workers (3013), Grey Wind (17), avoiding, behind, revealing faction,
//   2 vikings [VIKI], 38 silver [SILV]. Weight: 20. Capacity: 0/0/30/0.
//   Skills: none.

// plain (2,18) in Dezhou, contains Waidgrad [city], 4889 peasants
//   (plainsmen), $44001.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $19 (Max: $18578).
//   Wanted: 190 grain [GRAI] at $27, 128 livestock [LIVE] at $20, 85
//     furs [FUR] at $62, 196 fish [FISH] at $29, 66 herbs [HERB] at $45,
//     83 swords [SWOR] at $86, 91 wagons [WAGO] at $174, 81 ivory [IVOR]
//     at $149, 95 wool [WOOL] at $158.
//   For Sale: 90 wine [WINE] at $84, 83 perfume [PERF] at $64, 977
//     plainsmen [PLAI] at $76, 195 leaders [LEAD] at $152.
//   Entertainment available: $2200.
//   Products: 64 grain [GRAI], 31 horses [HORS].

// Exits:
//   North : plain (2,16) in Dezhou.
//   Northeast : ocean (3,17) in Atlantis Ocean.
//   Southeast : plain (3,19) in Dezhou, contains Seetouburg [town].
//   South : plain (2,20) in Dezhou.
//   Southwest : plain (1,19) in Dezhou.
//   Northwest : plain (1,17) in Dezhou.

// - City Guard (28), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// * Workers (3137), Grey Wind (17), avoiding, behind, revealing faction,
//   2 plainsmen [PLAI], 23 silver [SILV]. Weight: 20. Capacity:
//   0/0/30/0. Skills: none.

// plain (64,18) in Satiasam, 696 peasants (vikings), $3480.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $15 (Max: $2088).
//   Wanted: none.
//   For Sale: 139 vikings [VIKI] at $60, 27 leaders [LEAD] at $120.
//   Entertainment available: $174.
//   Products: 41 grain [GRAI], 31 horses [HORS].

// Exits:
//   North : ocean (64,16) in Atlantis Ocean.
//   Northeast : ocean (65,17) in Atlantis Ocean.
//   Southeast : ocean (65,19) in Atlantis Ocean.
//   South : plain (64,20) in Satiasam.
//   Southwest : plain (63,19) in Satiasam, contains Dun-krag [city].
//   Northwest : ocean (63,17) in Atlantis Ocean.

// - Unit (1530), Gragblod (7), 10 nomads [NOMA].
// - Unit (2721), Gragblod (7), nomad [NOMA].
// - Unit (1285), Gragblod (7), 139 vikings [VIKI].
// * Grey Scout (2944), Grey Wind (17), avoiding, behind, revealing
//   faction, taxing, viking [VIKI], 80 silver [SILV]. Weight: 10.
//   Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).

// swamp (92,18) in Kekeloh, contains Hatria [city], 4941 peasants
//   (tribesmen), $19764.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $14 (Max: $13834).
//   Wanted: 188 grain [GRAI] at $23, 156 livestock [LIVE] at $18, 84
//     stone [STON] at $50, 75 swords [SWOR] at $116, 78 wagons [WAGO] at
//     $195, 83 pearls [PEAR] at $159, 93 velvet [VELV] at $173.
//   For Sale: 53 wood [WOOD] at $46, 76 herbs [HERB] at $54, 53 chain
//     armor [CARM] at $114, 77 plate armor [PARM] at $455, 96 silk
//     [SILK] at $88, 99 wool [WOOL] at $78, 988 tribesmen [TMAN] at $56,
//     197 leaders [LEAD] at $112.
//   Entertainment available: $988.
//   Products: 17 grain [GRAI], 12 wood [WOOD], 11 herbs [HERB].

// Exits:
//   North : swamp (92,16) in Kekeloh, contains Volburg [city].
//   Northeast : swamp (93,17) in Kekeloh.
//   Southeast : swamp (93,19) in Kekeloh, contains Inaid [city].
//   South : swamp (92,20) in Kekeloh.
//   Southwest : swamp (91,19) in Methven.
//   Northwest : swamp (91,17) in Kekeloh.

// - City Guard (30), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// * Workers (2941), Grey Wind (17), avoiding, behind, revealing faction,
//   2 tribesmen [TMAN], 8 silver [SILV]. Weight: 20. Capacity: 0/0/30/0.
//   Skills: none.

// plain (3,19) in Dezhou, contains Seetouburg [town], 1612 peasants (sea
//   elves), $12896.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $18 (Max: $5803).
//   Wanted: 106 grain [GRAI] at $18, 89 livestock [LIVE] at $24, 12
//     stone [STON] at $60, 137 fish [FISH] at $23.
//   For Sale: 2 horses [HORS] at $50, 322 sea elves [SELF] at $72, 64
//     leaders [LEAD] at $144.
//   Entertainment available: $644.
//   Products: 79 livestock [LIVE], 33 horses [HORS].

// Exits:
//   North : ocean (3,17) in Atlantis Ocean.
//   Northeast : ocean (4,18) in Atlantis Ocean.
//   Southeast : plain (4,20) in Dezhou, contains Lothsorost [city].
//   South : plain (3,21) in Dezhou.
//   Southwest : plain (2,20) in Dezhou.
//   Northwest : plain (2,18) in Dezhou, contains Waidgrad [city].

// - City Guard (31), on guard, 80 leaders [LEAD], 80 swords [SWOR].
// * Workers (3247), Grey Wind (17), avoiding, behind, revealing faction,
//   sea elf [SELF], 72 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
//   Skills: none.

// swamp (93,19) in Kekeloh, contains Inaid [city], 5333 peasants (tribal
//   elves), $21332.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $14 (Max: $14932).
//   Wanted: 196 grain [GRAI] at $26, 134 livestock [LIVE] at $21, 70
//     crossbows [XBOW] at $104, 89 perfume [PERF] at $158, 90 wool
//     [WOOL] at $135.
//   For Sale: 73 longbows [LBOW] at $99, 67 figurines [FIGU] at $85, 70
//     roses [ROSE] at $79, 1066 tribal elves [TELF] at $56, 213 leaders
//     [LEAD] at $112.
//   Entertainment available: $1066.
//   Products: 18 livestock [LIVE], 13 wood [WOOD], 12 herbs [HERB].

// Exits:
//   North : swamp (93,17) in Kekeloh.
//   Northeast : swamp (94,18) in Kekeloh.
//   Southeast : swamp (94,20) in Kekeloh.
//   South : swamp (93,21) in Kekeloh.
//   Southwest : swamp (92,20) in Kekeloh.
//   Northwest : swamp (92,18) in Kekeloh, contains Hatria [city].

// - City Guard (35), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// * Workers (2527), Grey Wind (17), avoiding, behind, revealing faction,
//   2 tribal elves [TELF], 56 silver [SILV]. Weight: 20. Capacity:
//   0/0/30/0. Skills: none.

// plain (4,20) in Dezhou, contains Lothsorost [city], 3248 peasants
//   (vikings), $29232.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $19 (Max: $12342).
//   Wanted: 140 grain [GRAI] at $29, 144 livestock [LIVE] at $18, 194
//     fish [FISH] at $27, 38 swords [SWOR] at $87, 28 plate armor [PARM]
//     at $501, 17 caviar [CAVI] at $162, 11 vodka [VODK] at $162.
//   For Sale: 31 horses [HORS] at $58, 25 ivory [IVOR] at $84, 649
//     vikings [VIKI] at $76, 129 leaders [LEAD] at $152.
//   Entertainment available: $1461.
//   Products: 52 livestock [LIVE], 22 horses [HORS].

// Exits:
//   North : ocean (4,18) in Atlantis Ocean.
//   Northeast : ocean (5,19) in Atlantis Ocean.
//   Southeast : plain (5,21) in Quainai.
//   South : plain (4,22) in Quainai, contains Neubruk [city].
//   Southwest : plain (3,21) in Dezhou.
//   Northwest : plain (3,19) in Dezhou, contains Seetouburg [town].

// - City Guard (37), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// * Grey Scout (2081), Grey Wind (17), avoiding, behind, revealing
//   faction, sea elf [SELF], 54 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: combat [COMB] 1 (30).

// plain (62,22) in Satiasam, 718 peasants (high elves), $4308.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $16 (Max: $2297).
//   Wanted: none.
//   For Sale: 143 high elves [HELF] at $64, 28 leaders [LEAD] at $128.
//   Entertainment available: $215.
//   Products: 59 grain [GRAI], 30 horses [HORS].

// Exits:
//   North : plain (62,20) in Satiasam, contains Oufodale [city].
//   Northeast : plain (63,21) in Satiasam.
//   Southeast : swamp (63,23) in Skelid.
//   South : plain (62,24) in Satiasam.
//   Southwest : plain (61,23) in Satiasam, contains Sul'em'uq [village].
//   Northwest : plain (61,21) in Satiasam.

// - Unit (1821), Gragblod (7), 10 sea elves [SELF], sword [SWOR].
// - Unit (2204), on guard, Gragblod (7), 100 high elves [HELF].
// - Unit (1943), Gragblod (7), 10 high elves [HELF].
// * Grey Scout (2943), Grey Wind (17), avoiding, behind, revealing
//   faction, viking [VIKI], 206 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: combat [COMB] 1 (30).

// swamp (65,23) in Skelid, contains W'tiaenth [city], 3884 peasants
//   (tribesmen), $19420.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $15 (Max: $11652).
//   Wanted: 110 grain [GRAI] at $27, 190 livestock [LIVE] at $18, 170
//     fish [FISH] at $29, 83 swords [SWOR] at $123, 55 chain armor
//     [CARM] at $92, 76 wagons [WAGO] at $204, 76 figurines [FIGU] at
//     $165, 56 chocolate [CHOC] at $141.
//   For Sale: 61 wood [WOOD] at $54, 64 herbs [HERB] at $59, 79 velvet
//     [VELV] at $66, 75 mink [MINK] at $70, 776 tribesmen [TMAN] at $60,
//     155 leaders [LEAD] at $120.
//   Entertainment available: $971.
//   Products: 11 grain [GRAI], 18 wood [WOOD], 16 herbs [HERB].

// Exits:
//   North : ocean (65,21) in Atlantis Ocean.
//   Northeast : ocean (66,22) in Atlantis Ocean.
//   Southeast : jungle (66,24) in Sefitat.
//   South : swamp (65,25) in Skelid.
//   Southwest : swamp (64,24) in Skelid.
//   Northwest : plain (64,22) in Satiasam.

// - Izluks (1374), tribesman [TMAN].
// - Trupsilius (584), Gragblod (7), 8 tribesmen [TMAN].
// - Unit (299), Gragblod (7), 5 tribesmen [TMAN], 5 dye [DYE], 12
//   livestock [LIVE], wagon [WAGO], 5 wood [WOOD], 3 figurines [FIGU],
//   stone [STON], tarot cards [TARO].
// - Unit (925), on guard, Gragblod (7), 100 leaders [LEAD], 4 floater
//   hides [FLOA], sword [SWOR].
// - Unit (972), on guard, Gragblod (7), 100 tribesmen [TMAN], sword
//   [SWOR].
// - Unit (976), on guard, Gragblod (7), 100 tribesmen [TMAN], 4 floater
//   hides [FLOA].
// - Unit (1982), Gragblod (7), 100 tribesmen [TMAN], 2 floater hides
//   [FLOA].
// - Unit (2263), Gragblod (7), leader [LEAD].
// - Unit (1993), Gragblod (7), leader [LEAD].
// * Workers (3142), Grey Wind (17), avoiding, behind, revealing faction,
//   tribesman [TMAN], 25 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
//   Skills: none.
// - Unit (3171), Warlords Inc (19), 3 horses [HORS], 2 nomads [NOMA].

// forest (60,26) in Nugyru, 293 peasants (wood elves), $586.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $12 (Max: $703).
//   Wanted: none.
//   For Sale: 58 wood elves [WELF] at $48, 11 leaders [LEAD] at $96.
//   Entertainment available: $29.
//   Products: 35 livestock [LIVE], 26 wood [WOOD], 17 furs [FUR], 19
//     herbs [HERB].

// Exits:
//   North : plain (60,24) in Satiasam, contains Mikedale [town].
//   Northeast : swamp (61,25) in Skelid.
//   Southeast : swamp (61,27) in Skelid.
//   South : plain (60,28) in Erisort.
//   Southwest : forest (59,27) in Nugyru.
//   Northwest : forest (59,25) in Nugyru.

// - Unit (1989), on guard, Gragblod (7), behind, 43 vikings [VIKI].
// * Grey Scout (2942), Grey Wind (17), avoiding, behind, revealing
//   faction, viking [VIKI], 323 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: combat [COMB] 1 (30).

// mountain (68,26) in Phidyntia, contains Oroldu [city], 5208 peasants
//   (vikings), $41664.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $18 (Max: $93744).
//   Wanted: none.
//   For Sale: unlimited iron [IRON] at $75, unlimited wood [WOOD] at
//     $75, unlimited stone [STON] at $75, unlimited furs [FUR] at $75,
//     unlimited herbs [HERB] at $75, unlimited horses [HORS] at $75,
//     unlimited swords [SWOR] at $150, unlimited crossbows [XBOW] at
//     $150, unlimited longbows [LBOW] at $150, unlimited chain armor
//     [CARM] at $150, unlimited plate armor [PARM] at $625, unlimited
//     wagons [WAGO] at $250, unlimited vikings [VIKI] at $68, unlimited
//     leaders [LEAD] at $136.
//   Entertainment available: $2083.
//   Products: 40 grain [GRAI], 31 iron [IRON], 14 stone [STON].

// Exits:
//   North : ocean (68,24) in Atlantis Ocean.
//   Northeast : ocean (69,25) in Atlantis Ocean.
//   Southeast : mountain (69,27) in Phidyntia.
//   South : jungle (68,28) in Sefitat.
//   Southwest : jungle (67,27) in Sefitat.
//   Northwest : jungle (67,25) in Sefitat.

// - City Guard (52), on guard, The Guardsmen (1), 120 leaders [LEAD],
//   120 swords [SWOR].
// - Sitenius (1038), Gragblod (7), behind, 112 vikings [VIKI].
// - Jartinnus (1041), Gragblod (7), avoiding, behind, leader [LEAD],
//   horse [HORS].
// - Oroldu stradnieks (1188), Multiple Bite Wounds (10), 81 vikings
//   [VIKI].
// - Gralus (1671), Gragblod (7), behind, 18 tribal elves [TELF], 18
//   longbows [LBOW], 18 horses [HORS].
// * Grey Ambassador (1840), Grey Wind (17), avoiding, behind, revealing
//   faction, leader [LEAD], 116 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: entertainment [ENTE] 2 (90), combat [COMB] 1 (60),
//   observation [OBSE] 4 (360).
// - Thor (1861), New Horizons (16), avoiding, behind, 9 leaders [LEAD].
// * Harpers (1863), Grey Wind (17), avoiding, behind, revealing faction,
//   5 vikings [VIKI], 121 silver [SILV]. Weight: 50. Capacity: 0/0/75/0.
//   Skills: entertainment [ENTE] 2 (90).
// * Workers (2080), Grey Wind (17), avoiding, behind, revealing faction,
//   120 vikings [VIKI], 1447 silver [SILV]. Weight: 1200. Capacity:
//   0/0/1800/0. Skills: none.
// - Scout (2223), Sol Invictus (20), avoiding, behind, 6 vikings [VIKI].
// - Thor (2217), New Horizons (16), avoiding, behind, leader [LEAD].
// - Armo Guy (2526), New Horizons (16), avoiding, behind, leader [LEAD].
// - Unit (661), Gragblod (7), behind, 30 vikings [VIKI], 30 crossbows
//   [XBOW], 30 horses [HORS].
// - Unit (871), Gragblod (7), behind, 30 tribal elves [TELF], 30
//   longbows [LBOW], 30 horses [HORS].
// - Unit (2960), Gragblod (7), 20 vikings [VIKI], 20 horses [HORS], 20
//   swords [SWOR].
// - Frulvius (1299), Gragblod (7), avoiding, behind, leader [LEAD],
//   sword [SWOR], horse [HORS].
// - Unit (3019), Gragblod (7), behind, 17 sea elves [SELF], 17 longbows
//   [LBOW], 17 horses [HORS].
// - Armo (3246), New Horizons (16), avoiding, behind, 3 leaders [LEAD].
// - Unit (3111), Warlords Inc (19), behind, viking [VIKI].
// - Unit (1105), Gragblod (7), behind, 400 nomads [NOMA], 400 crossbows
//   [XBOW], 400 horses [HORS].
// - Asmore (3311), New Horizons (16), avoiding, behind, 2 leaders
//   [LEAD].
// - Unit (2782), Gragblod (7), avoiding, behind, nomad [NOMA], horse
//   [HORS].
// - Armo (3432), New Horizons (16), avoiding, behind, leader [LEAD].
// - Armo (3433), New Horizons (16), avoiding, behind, leader [LEAD].
// - Armo (3434), New Horizons (16), avoiding, behind, leader [LEAD].
// - Unit (232), Gragblod (7), 5 horses [HORS], nomad [NOMA].
// - Unit (1803), Gragblod (7), tribesman [TMAN].
// - Unit (1983), Gragblod (7), viking [VIKI], horse [HORS].
// - Unit (263), Gragblod (7), avoiding, behind, 42 horses [HORS], nomad
//   [NOMA], sword [SWOR].

// + Gragblod Tower [1] : Tower.
//   - Fuspilius (1368), Gragblod (7), 10 vikings [VIKI], 2 iron [IRON],
//     ivory [IVOR], 3 mithril [MITH], 2 rootstone [ROOT].
//   - Acus (1239), Gragblod (7), behind, 7 tribal elves [TELF], 7
//     longbows [LBOW], 7 horses [HORS].
//   - Bear (592), New Horizons (16), leader [LEAD].
//   - Unit (54), Warlords Inc (19), behind, leader [LEAD].
//   - Unit (1928), Warlords Inc (19), behind, leader [LEAD].
//   - Unit (1929), Warlords Inc (19), behind, leader [LEAD].
//   - Cougar (2489), New Horizons (16), behind, leader [LEAD].
//   - Water Buffalo (2488), New Horizons (16), behind, leader [LEAD].
//   - Tirelius (1039), Gragblod (7), behind, leader [LEAD], horse
//     [HORS], balrog [BALR].
//   - Caspus (1040), Gragblod (7), behind, leader [LEAD], horse [HORS].

// plain (84,26) in Reilnon, contains Iaia [city], 2840 peasants (high
//   elves), $22720.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $18 (Max: $10224).
//   Wanted: 120 grain [GRAI] at $18, 126 livestock [LIVE] at $20, 26
//     wood [WOOD] at $57, 170 fish [FISH] at $27, 18 swords [SWOR] at
//     $128, 15 wagons [WAGO] at $191, 11 truffles [TRUF] at $164.
//   For Sale: 26 horses [HORS] at $52, 16 chain armor [CARM] at $96, 14
//     wine [WINE] at $84, 568 high elves [HELF] at $72, 113 leaders
//     [LEAD] at $144.
//   Entertainment available: $1136.
//   Products: 40 grain [GRAI], 29 horses [HORS].

// Exits:
//   North : plain (84,24) in Reilnon.
//   Northeast : plain (85,25) in Reilnon.
//   Southeast : plain (85,27) in Reilnon.
//   South : plain (84,28) in Reilnon.
//   Southwest : plain (83,27) in Reilnon, contains Sordorost [city].
//   Northwest : ocean (83,25) in Atlantis Ocean.

// * Grey Scout (2082), Grey Wind (17), avoiding, behind, revealing
//   faction, sea elf [SELF], 68 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: combat [COMB] 1 (30).
// - City Guard (1749), on guard, 36 leaders [LEAD], 36 swords [SWOR].

// + Building [1] : Tower.

// mountain (92,26) in Lingen, contains Delgnal [village], 1162 peasants
//   (hill dwarves), $3486.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $13 (Max: $3021).
//   Wanted: 107 grain [GRAI] at $18, 87 livestock [LIVE] at $24, 96 fish
//     [FISH] at $26, 9 chain armor [CARM] at $95.
//   For Sale: 232 hill dwarves [HDWA] at $52, 46 leaders [LEAD] at $104.
//   Entertainment available: $174.
//   Products: 35 livestock [LIVE], 26 iron [IRON], 11 stone [STON].

// Exits:
//   North : swamp (92,24) in Kekeloh.
//   Northeast : ocean (93,25) in Atlantis Ocean.
//   Southeast : mountain (93,27) in Lingen.
//   South : mountain (92,28) in Lingen.
//   Southwest : ocean (91,27) in Atlantis Ocean.
//   Northwest : ocean (91,25) in Atlantis Ocean.

// - City Guard (56), on guard, 40 leaders [LEAD], 40 swords [SWOR].
// * Workers (2167), Grey Wind (17), avoiding, behind, revealing faction,
//   24 hill dwarves [HDWA], 23 silver [SILV]. Weight: 240. Capacity:
//   0/0/360/0. Skills: none.
// * Harpers (1607), Grey Wind (17), avoiding, behind, revealing faction,
//   5 hill dwarves [HDWA]. Weight: 50. Capacity: 0/0/75/0. Skills:
//   entertainment [ENTE] 2 (90).

// mountain (93,27) in Lingen, 389 peasants (sea elves), $1167.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $13 (Max: $1011).
//   Wanted: none.
//   For Sale: 77 sea elves [SELF] at $52, 15 leaders [LEAD] at $104.
//   Entertainment available: $58.
//   Products: 22 livestock [LIVE], 31 iron [IRON], 19 stone [STON].

// Exits:
//   North : ocean (93,25) in Atlantis Ocean.
//   Northeast : mountain (94,26) in Lingen.
//   Southeast : mountain (94,28) in Lingen.
//   South : mountain (93,29) in Lingen, contains Sorfindon [city].
//   Southwest : mountain (92,28) in Lingen.
//   Northwest : mountain (92,26) in Lingen, contains Delgnal [village].

// There is a Gate here (Gate 18 of 82).

// * Knight (2317), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], 4 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
//   Skills: combat [COMB] 4 (300), riding [RIDI] 4 (360).
// * Footmen (2399), on guard, Grey Wind (17), revealing faction, taxing,
//   10 sea elves [SELF], 602 silver [SILV]. Weight: 100. Capacity:
//   0/0/150/0. Skills: combat [COMB] 2 (90).
// * Elven Stonemelders (2491), Grey Wind (17), avoiding, behind,
//   revealing faction, 5 sea elves [SELF], 5 stone [STON], 105 silver
//   [SILV]. Weight: 300. Capacity: 0/0/75/0. Skills: quarrying [QUAR] 1
//   (30).
// * Knight (2638), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], 99 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
//   Skills: combat [COMB] 4 (300), riding [RIDI] 4 (300).
// * Knight (2639), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], 135 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
//   Skills: combat [COMB] 4 (360), riding [RIDI] 4 (300).
// * Knight (2640), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], 127 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
//   Skills: combat [COMB] 4 (300), riding [RIDI] 4 (300).
// * Knight (2641), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], 200 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
//   Skills: combat [COMB] 4 (330), riding [RIDI] 4 (300).
// * Knight (2642), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], 178 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
//   Skills: combat [COMB] 4 (330), riding [RIDI] 4 (300).
// * Knight (2643), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], 15 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
//   Skills: combat [COMB] 4 (330), riding [RIDI] 4 (300).
// * Harpers (2946), Grey Wind (17), avoiding, behind, revealing faction,
//   2 sea elves [SELF], 114 silver [SILV]. Weight: 20. Capacity:
//   0/0/30/0. Skills: entertainment [ENTE] 2 (90).
// * Elven Builders (2528), Grey Wind (17), avoiding, behind, revealing
//   faction, 5 sea elves [SELF], 105 silver [SILV]. Weight: 50.
//   Capacity: 0/0/75/0. Skills: building [BUIL] 1 (30).
// * Knight (3222), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], 53 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
//   Skills: combat [COMB] 4 (300), riding [RIDI] 1 (60).
// * Knight (3267), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], 53 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
//   Skills: combat [COMB] 4 (300), riding [RIDI] 1 (60).
// * Knight (3301), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], 53 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
//   Skills: combat [COMB] 4 (300), riding [RIDI] 1 (60).
// * Footmen (1630), on guard, Grey Wind (17), revealing faction, taxing,
//   10 sea elves [SELF], 302 silver [SILV]. Weight: 100. Capacity:
//   0/0/150/0. Skills: combat [COMB] 1 (30).
// * Footmen (1642), on guard, Grey Wind (17), revealing faction, taxing,
//   10 sea elves [SELF], 554 silver [SILV]. Weight: 100. Capacity:
//   0/0/150/0. Skills: combat [COMB] 1 (30).
// * Grey Ambassador (1977), Grey Wind (17), avoiding, behind, revealing
//   faction, leader [LEAD], 9 horses [HORS], 5 swords [SWOR], 8 silver
//   [SILV]. Weight: 465. Capacity: 0/630/645/0. Skills: combat [COMB] 2
//   (90), entertainment [ENTE] 2 (120).

// + Tower of the North Wind [1] : Tower.
//   * Lady Isola (18), Grey Wind (17), behind, revealing faction,
//     holding, taxing, leader [LEAD], sword [SWOR], chain armor [CARM],
//     132 silver [SILV]. Weight: 12. Capacity: 0/0/15/0. Skills: pattern
//     [PATT] 3 (180), spirit [SPIR] 2 (90), gate lore [GATE] 2 (90),
//     combat [COMB] 1 (30), earth lore [EART] 3 (180), force [FORC] 2
//     (90), bird lore [BIRD] 3 (180), fire [FIRE] 1 (30), farsight
//     [FARS] 1 (60), dragon lore [DRAG] 1 (60). Combat spell: fire
//     [FIRE]. Can Study: fire [FIRE], earthquake [EQUA], force shield
//     [FSHI], energy shield [ESHI], spirit shield [SSHI], magical
//     healing [MHEA], farsight [FARS], mind reading [MIND], weather lore
//     [WEAT], wolf lore [WOLF], dragon lore [DRAG], necromancy [NECR],
//     demon lore [DEMO], illusion [ILLU], artifact lore [ARTI].
//   * Seneschal (2318), Grey Wind (17), behind, revealing faction,
//     holding, taxing, leader [LEAD], 102 silver [SILV]. Weight: 10.
//     Capacity: 0/0/15/0. Skills: observation [OBSE] 5 (450), combat
//     [COMB] 2 (120), riding [RIDI] 2 (120).
//   * Knight Commander (2843), Grey Wind (17), behind, revealing
//     faction, holding, taxing, leader [LEAD], 60 silver [SILV]. Weight:
//     10. Capacity: 0/0/15/0. Skills: tactics [TACT] 4 (420), combat
//     [COMB] 1 (30).

// jungle (73,29) in Donndinon, contains Alabrin-lum [city], 3337
//   peasants (tribesmen), $13348.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $14 (Max: $9343).
//   Wanted: 194 grain [GRAI] at $26, 112 livestock [LIVE] at $23, 164
//     fish [FISH] at $26, 52 plate armor [PARM] at $423, 59 pearls
//     [PEAR] at $164, 51 figurines [FIGU] at $168.
//   For Sale: 40 herbs [HERB] at $53, 51 chain armor [CARM] at $100, 53
//     jewelry [JEWE] at $84, 28 mink [MINK] at $86, 667 tribesmen [TMAN]
//     at $56, 133 leaders [LEAD] at $112.
//   Entertainment available: $667.
//   Products: 25 livestock [LIVE], 11 wood [WOOD], 21 herbs [HERB].

// Exits:
//   North : jungle (73,27) in Donndinon.
//   Northeast : jungle (74,28) in Donndinon.
//   Southeast : jungle (74,30) in Donndinon.
//   South : mountain (73,31) in Gededyki.
//   Southwest : ocean (72,30) in Atlantis Ocean.
//   Northwest : jungle (72,28) in Donndinon.

// - City Guard (63), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// - Izluks (1824), Multiple Bite Wounds (10), avoiding, tribesman
//   [TMAN].
// - Unit (1053), Gragblod (7), 3 tribesmen [TMAN].
// * Grey Scout (2945), Grey Wind (17), avoiding, behind, revealing
//   faction, taxing, viking [VIKI], 93 silver [SILV]. Weight: 10.
//   Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).

// forest (87,29) in Kawapo, contains Athbroduen [city], 2495 peasants
//   (wood elves), $14970.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $16 (Max: $7984).
//   Wanted: 118 grain [GRAI] at $18, 152 livestock [LIVE] at $20, 24
//     swords [SWOR] at $98, 31 longbows [LBOW] at $113, 26 chain armor
//     [CARM] at $101, 15 plate armor [PARM] at $396, 14 vodka [VODK] at
//     $132.
//   For Sale: 19 furs [FUR] at $58, 19 crossbows [XBOW] at $111, 9 wine
//     [WINE] at $86, 499 wood elves [WELF] at $64, 99 leaders [LEAD] at
//     $128.
//   Entertainment available: $748.
//   Products: 25 livestock [LIVE], 22 wood [WOOD], 14 furs [FUR], 16
//     herbs [HERB].

// Exits:
//   North : forest (87,27) in Kawapo.
//   Northeast : desert (88,28) in Morrun.
//   Southeast : forest (88,30) in Kawapo, contains Jervbygd [city].
//   South : forest (87,31) in Kawapo.
//   Southwest : forest (86,30) in Kawapo.
//   Northwest : forest (86,28) in Kawapo.

// * Workers (3161), Grey Wind (17), avoiding, behind, revealing faction,
//   wood elf [WELF], 70 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
//   Skills: none.
// - City Guard (2759), on guard, 24 leaders [LEAD], 24 swords [SWOR].

// mountain (93,29) in Lingen, contains Sorfindon [city], 3619 peasants
//   (vikings), $21714.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $16 (Max: $11580).
//   Wanted: 160 grain [GRAI] at $21, 126 livestock [LIVE] at $18, 47
//     wood [WOOD] at $50, 106 fish [FISH] at $26, 62 swords [SWOR] at
//     $95, 45 crossbows [XBOW] at $87, 41 wine [WINE] at $167, 48 roses
//     [ROSE] at $168.
//   For Sale: 61 stone [STON] at $51, 54 tarot cards [TARO] at $77, 27
//     mink [MINK] at $85, 723 vikings [VIKI] at $64, 144 leaders [LEAD]
//     at $128.
//   Entertainment available: $1085.
//   Products: 25 livestock [LIVE], 25 iron [IRON], 13 stone [STON].

// Exits:
//   North : mountain (93,27) in Lingen.
//   Northeast : mountain (94,28) in Lingen.
//   Southeast : ocean (94,30) in Atlantis Ocean.
//   South : ocean (93,31) in Atlantis Ocean.
//   Southwest : mountain (92,30) in Lingen.
//   Northwest : mountain (92,28) in Lingen.

// - City Guard (65), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// * Workers (2169), Grey Wind (17), avoiding, behind, revealing faction,
//   60 vikings [VIKI], 240 silver [SILV]. Weight: 600. Capacity:
//   0/0/900/0. Skills: none.
// - Scout (2252), sea elf [SELF].
// * Master Harper (3237), Grey Wind (17), avoiding, behind, revealing
//   faction, leader [LEAD], 20 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: entertainment [ENTE] 2 (90).
// * Grey Scout (3209), Grey Wind (17), avoiding, behind, revealing
//   faction, sea elf [SELF], 30 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: combat [COMB] 1 (30).
// * Harpers (3302), Grey Wind (17), avoiding, behind, revealing faction,
//   10 vikings [VIKI], 300 silver [SILV]. Weight: 100. Capacity:
//   0/0/150/0. Skills: entertainment [ENTE] 2 (90).
// * Harpers (3307), Grey Wind (17), avoiding, behind, revealing faction,
//   10 vikings [VIKI], 300 silver [SILV]. Weight: 100. Capacity:
//   0/0/150/0. Skills: entertainment [ENTE] 2 (90).
// * Footmen (2844), Grey Wind (17), revealing faction, 10 sea elves
//   [SELF], 60 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
//   combat [COMB] 2 (90).
// * Footmen (2845), Grey Wind (17), revealing faction, 10 sea elves
//   [SELF], 60 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
//   combat [COMB] 2 (90).
// * Harpers (2261), Grey Wind (17), avoiding, behind, revealing faction,
//   10 vikings [VIKI]. Weight: 100. Capacity: 0/0/150/0. Skills:
//   entertainment [ENTE] 2 (90).
// * Archers (2947), Grey Wind (17), behind, revealing faction, 10 sea
//   elves [SELF], 4 longbows [LBOW], 60 silver [SILV]. Weight: 104.
//   Capacity: 0/0/150/0. Skills: longbow [LBOW] 3 (180).
// * Master Archer (2948), Grey Wind (17), behind, revealing faction,
//   leader [LEAD], longbow [LBOW]. Weight: 11. Capacity: 0/0/15/0.
//   Skills: longbow [LBOW] 3 (210).
// * Archers (3362), Grey Wind (17), behind, revealing faction, 10 sea
//   elves [SELF], 4 longbows [LBOW], 60 silver [SILV]. Weight: 104.
//   Capacity: 0/0/150/0. Skills: longbow [LBOW] 3 (180).
// * Footmen (1614), Grey Wind (17), revealing faction, 10 sea elves
//   [SELF], 60 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
//   combat [COMB] 1 (30).
// * Footmen (1616), Grey Wind (17), revealing faction, 10 sea elves
//   [SELF], 60 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
//   combat [COMB] 1 (30).
// * Footmen (1657), Grey Wind (17), revealing faction, 10 sea elves
//   [SELF], 60 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
//   combat [COMB] 1 (30).

// forest (88,30) in Kawapo, contains Jervbygd [city], 5326 peasants (sea
//   elves), $26630.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $15 (Max: $79890).
//   Wanted: none.
//   For Sale: unlimited iron [IRON] at $75, unlimited wood [WOOD] at
//     $75, unlimited stone [STON] at $75, unlimited furs [FUR] at $75,
//     unlimited herbs [HERB] at $75, unlimited horses [HORS] at $75,
//     unlimited swords [SWOR] at $150, unlimited crossbows [XBOW] at
//     $150, unlimited longbows [LBOW] at $150, unlimited chain armor
//     [CARM] at $150, unlimited plate armor [PARM] at $625, unlimited
//     wagons [WAGO] at $250, unlimited sea elves [SELF] at $60,
//     unlimited leaders [LEAD] at $120.
//   Entertainment available: $1331.
//   Products: 27 livestock [LIVE], 24 wood [WOOD], 19 furs [FUR], 17
//     herbs [HERB].

// Exits:
//   North : desert (88,28) in Morrun.
//   Northeast : ocean (89,29) in Atlantis Ocean.
//   Southeast : forest (89,31) in Kawapo.
//   South : forest (88,32) in Kawapo.
//   Southwest : forest (87,31) in Kawapo.
//   Northwest : forest (87,29) in Kawapo, contains Athbroduen [city].

// - City Guard (67), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// * Workers (2231), Grey Wind (17), avoiding, behind, revealing faction,
//   12 sea elves [SELF], 120 silver [SILV]. Weight: 120. Capacity:
//   0/0/180/0. Skills: none.
// - Unit (2505), 2 sea elves [SELF].
// * Grey Scout (2266), Grey Wind (17), avoiding, behind, revealing
//   faction, 1917 silver [SILV], horse [HORS], sea elf [SELF]. Weight:
//   60. Capacity: 0/70/85/0. Skills: none.
// * Grey Scout (3456), Grey Wind (17), avoiding, behind, revealing
//   faction, 797 silver [SILV], horse [HORS], sea elf [SELF]. Weight:
//   60. Capacity: 0/70/85/0. Skills: none.

// forest (89,31) in Kawapo, 269 peasants (vikings), $807.
// ------------------------------------------------------------
//   The weather was clear last month; it will be monsoon season next
//     month.
//   Wages: $13 (Max: $699).
//   Wanted: none.
//   For Sale: 53 vikings [VIKI] at $52, 10 leaders [LEAD] at $104.
//   Entertainment available: $40.
//   Products: 20 livestock [LIVE], 29 wood [WOOD], 15 furs [FUR], 15
//     herbs [HERB].

// Exits:
//   North : ocean (89,29) in Atlantis Ocean.
//   Northeast : ocean (90,30) in Atlantis Ocean.
//   Southeast : forest (90,32) in Kawapo.
//   South : ocean (89,33) in Atlantis Ocean.
//   Southwest : forest (88,32) in Kawapo.
//   Northwest : forest (88,30) in Kawapo, contains Jervbygd [city].

// * Footmen (2168), on guard, Grey Wind (17), revealing faction, taxing,
//   10 sea elves [SELF], 430 silver [SILV]. Weight: 100. Capacity:
//   0/0/150/0. Skills: combat [COMB] 2 (90).
// * Footmen (2265), Grey Wind (17), revealing faction, 10 vikings
//   [VIKI]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1
//   (30).

// forest (91,31) in Kawapo, 262 peasants (sea elves), $524.
// ------------------------------------------------------------
//   The weather was clear last month; it will be monsoon season next
//     month.
//   Wages: $12 (Max: $628).
//   Wanted: none.
//   For Sale: 52 sea elves [SELF] at $48, 10 leaders [LEAD] at $96.
//   Entertainment available: $26.
//   Products: 33 livestock [LIVE], 26 wood [WOOD], 12 furs [FUR], 12
//     herbs [HERB].

// Exits:
//   North : ocean (91,29) in Atlantis Ocean.
//   Northeast : mountain (92,30) in Lingen.
//   Southeast : ocean (92,32) in Atlantis Ocean.
//   South : ocean (91,33) in Atlantis Ocean.
//   Southwest : forest (90,32) in Kawapo.
//   Northwest : ocean (90,30) in Atlantis Ocean.

// * Footmen (3094), on guard, Grey Wind (17), revealing faction, taxing,
//   5 hill dwarves [HDWA], 382 silver [SILV]. Weight: 50. Capacity:
//   0/0/75/0. Skills: combat [COMB] 3 (180).
// * Footmen (3363), on guard, Grey Wind (17), revealing faction, taxing,
//   5 sea elves [SELF], 508 silver [SILV]. Weight: 50. Capacity:
//   0/0/75/0. Skills: combat [COMB] 1 (30).
// * Knight (3444), Grey Wind (17), revealing faction, leader [LEAD].
//   Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
// * Grey Scout (1676), Grey Wind (17), avoiding, behind, revealing
//   faction, viking [VIKI], 2 horses [HORS], 5 longbows [LBOW]. Weight:
//   115. Capacity: 0/140/155/0. Skills: none.
// * Grey Scout (3435), Grey Wind (17), avoiding, behind, leader [LEAD],
//   2211 silver [SILV], horse [HORS]. Weight: 60. Capacity: 0/70/85/0.
//   Skills: stealth [STEA] 2 (90).

// forest (90,32) in Kawapo, 269 peasants (sea elves), $1076.
// ------------------------------------------------------------
//   The weather was clear last month; it will be monsoon season next
//     month.
//   Wages: $14 (Max: $753).
//   Wanted: none.
//   For Sale: 53 sea elves [SELF] at $56, 10 leaders [LEAD] at $112.
//   Entertainment available: $53.
//   Products: 37 grain [GRAI], 32 wood [WOOD], 17 furs [FUR], 18 herbs
//     [HERB].

// Exits:
//   North : ocean (90,30) in Atlantis Ocean.
//   Northeast : forest (91,31) in Kawapo.
//   Southeast : ocean (91,33) in Atlantis Ocean.
//   South : ocean (90,34) in Atlantis Ocean.
//   Southwest : ocean (89,33) in Atlantis Ocean.
//   Northwest : forest (89,31) in Kawapo.

// * Footmen (3265), on guard, Grey Wind (17), revealing faction, taxing,
//   5 sea elves [SELF], 270 silver [SILV]. Weight: 50. Capacity:
//   0/0/75/0. Skills: combat [COMB] 1 (36).
// * Footmen (1677), on guard, Grey Wind (17), revealing faction, taxing,
//   5 sea elves [SELF], 270 silver [SILV]. Weight: 50. Capacity:
//   0/0/75/0. Skills: combat [COMB] 1 (30).

// swamp (2,40) in Brandor, 177 peasants (tribal elves), $354.
// ------------------------------------------------------------
//   The weather was clear last month; it will be monsoon season next
//     month.
//   Wages: $12 (Max: $424).
//   Wanted: none.
//   For Sale: 35 tribal elves [TELF] at $48, 7 leaders [LEAD] at $96.
//   Entertainment available: $17.
//   Products: 16 grain [GRAI], 13 wood [WOOD], 17 herbs [HERB].

// Exits:
//   North : ocean (2,38) in Atlantis Ocean.
//   Northeast : ocean (3,39) in Atlantis Ocean.
//   Southeast : swamp (3,41) in Brandor.
//   South : swamp (2,42) in Brandor.
//   Southwest : swamp (1,41) in Brandor.
//   Northwest : ocean (1,39) in Atlantis Ocean.

// * Grey Scout (2084), Grey Wind (17), avoiding, behind, revealing
//   faction, taxing, tribal elf [TELF], 80 silver [SILV]. Weight: 10.
//   Capacity: 0/0/15/0. Skills: combat [COMB] 1 (60).

// jungle (3,43) in Zogghul, contains Munddotn [city], 3644 peasants (sea
//   elves), $18220.
// ------------------------------------------------------------
//   The weather was clear last month; it will be monsoon season next
//     month.
//   Wages: $15 (Max: $10932).
//   Wanted: 110 grain [GRAI] at $20, 190 livestock [LIVE] at $27, 144
//     fish [FISH] at $18, 60 swords [SWOR] at $90, 57 wagons [WAGO] at
//     $161, 48 ivory [IVOR] at $147, 52 caviar [CAVI] at $144.
//   For Sale: 54 wood [WOOD] at $46, 74 herbs [HERB] at $46, 53 chain
//     armor [CARM] at $94, 29 plate armor [PARM] at $475, 69 wine [WINE]
//     at $68, 30 cotton [COTT] at $72, 728 sea elves [SELF] at $60, 145
//     leaders [LEAD] at $120.
//   Entertainment available: $911.
//   Products: 25 livestock [LIVE], 18 wood [WOOD], 39 herbs [HERB].

// Exits:
//   North : swamp (3,41) in Brandor.
//   Northeast : ocean (4,42) in Atlantis Ocean.
//   Southeast : jungle (4,44) in Zogghul.
//   South : ocean (3,45) in Atlantis Ocean.
//   Southwest : swamp (2,44) in Brandor.
//   Northwest : swamp (2,42) in Brandor.

// - City Guard (106), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// - Clown (2028), SkyRaiders (14), avoiding, behind, winged horse
//   [WING], nomad [NOMA].
// * Workers (1686), Grey Wind (17), avoiding, behind, revealing faction,
//   16 silver [SILV], 2 sea elves [SELF]. Weight: 20. Capacity:
//   0/0/30/0. Skills: none.

// jungle (4,48) in Zogghul, contains Kinccer [city], 3506 peasants
//   (tribesmen), $21036.
// ------------------------------------------------------------
//   The weather was clear last month; it will be monsoon season next
//     month.
//   Wages: $16 (Max: $11219).
//   Wanted: 140 grain [GRAI] at $27, 178 livestock [LIVE] at $18, 146
//     fish [FISH] at $23, 41 plate armor [PARM] at $419, 41 wagons
//     [WAGO] at $150, 43 jewelry [JEWE] at $167, 31 caviar [CAVI] at
//     $159.
//   For Sale: 37 mink [MINK] at $85, 48 dye [DYE] at $66, 701 tribesmen
//     [TMAN] at $64, 140 leaders [LEAD] at $128.
//   Entertainment available: $1051.
//   Products: 25 grain [GRAI], 15 wood [WOOD], 27 herbs [HERB].

// Exits:
//   North : jungle (4,46) in Zogghul.
//   Northeast : ocean (5,47) in Atlantis Ocean.
//   Southeast : ocean (5,49) in Atlantis Ocean.
//   South : plain (4,50) in Killorglin.
//   Southwest : plain (3,49) in Killorglin.
//   Northwest : ocean (3,47) in Atlantis Ocean.

// - City Guard (122), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// - Clown (2893), SkyRaiders (14), avoiding, behind, sea elf [SELF].
// * Workers (3248), Grey Wind (17), avoiding, behind, revealing faction,
//   47 silver [SILV], 7 tribesmen [TMAN]. Weight: 70. Capacity:
//   0/0/105/0. Skills: none.
// * Grey Scout (2267), Grey Wind (17), avoiding, behind, revealing
//   faction, 64 silver [SILV], high elf [HELF], 4 horses [HORS]. Weight:
//   210. Capacity: 0/280/295/0. Skills: none.

// plain (1,51) in Killorglin, contains Eyldaton [village], 1449 peasants
//   (high elves), $10143.
// ------------------------------------------------------------
//   The weather was clear last month; it will be monsoon season next
//     month.
//   Wages: $17 (Max: $4926).
//   Wanted: 102 grain [GRAI] at $29, 74 livestock [LIVE] at $24, 12 wood
//     [WOOD] at $59, 126 fish [FISH] at $18.
//   For Sale: 289 high elves [HELF] at $68, 57 leaders [LEAD] at $136.
//   Entertainment available: $507.
//   Products: 53 grain [GRAI], 24 horses [HORS].

// Exits:
//   North : plain (1,49) in Killorglin.
//   Northeast : plain (2,50) in Killorglin.
//   Southeast : plain (2,52) in Killorglin.
//   South : plain (1,53) in Killorglin.
//   Southwest : ocean (0,52) in Atlantis Ocean.
//   Northwest : plain (0,50) in Killorglin.

// - City Guard (128), on guard, 40 leaders [LEAD], 40 swords [SWOR].
// - Clown (2767), SkyRaiders (14), avoiding, behind, viking [VIKI].
// * Workers (2949), Grey Wind (17), avoiding, behind, revealing faction,
//   8 high elves [HELF], 112 silver [SILV]. Weight: 80. Capacity:
//   0/0/120/0. Skills: none.

// plain (3,53) in Killorglin, contains Riecvoltan [city], 5089 peasants
//   (high elves), $45801.
// ------------------------------------------------------------
//   The weather was clear last month; it will be monsoon season next
//     month.
//   Wages: $19 (Max: $19338).
//   Wanted: 140 grain [GRAI] at $23, 180 livestock [LIVE] at $20, 122
//     fish [FISH] at $23, 93 swords [SWOR] at $104, 61 wagons [WAGO] at
//     $189, 89 tarot cards [TARO] at $152, 92 cotton [COTT] at $165.
//   For Sale: 72 horses [HORS] at $51, 87 longbows [LBOW] at $105, 80
//     roses [ROSE] at $88, 65 silk [SILK] at $79, 1017 high elves [HELF]
//     at $76, 203 leaders [LEAD] at $152.
//   Entertainment available: $2290.
//   Products: 55 livestock [LIVE], 39 horses [HORS].

// Exits:
//   North : plain (3,51) in Killorglin.
//   Northeast : ocean (4,52) in Atlantis Ocean.
//   Southeast : ocean (4,54) in Atlantis Ocean.
//   South : ocean (3,55) in Atlantis Ocean.
//   Southwest : ocean (2,54) in Atlantis Ocean.
//   Northwest : plain (2,52) in Killorglin.

// - City Guard (131), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// * Workers (3014), Grey Wind (17), avoiding, behind, revealing faction,
//   160 silver [SILV], 4 high elves [HELF]. Weight: 40. Capacity:
//   0/0/60/0. Skills: none.
// - Clown (1673), SkyRaiders (14), avoiding, behind, sea elf [SELF].
// * Grey Scout (2085), Grey Wind (17), avoiding, behind, revealing
//   faction, tribal elf [TELF], 146 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: combat [COMB] 2 (90).

// desert (2,56) in Binhai, contains Inuen [city], 6261 peasants
//   (vikings), $31305.
// ------------------------------------------------------------
//   The weather was clear last month; it will be monsoon season next
//     month.
//   Wages: $15 (Max: $18783).
//   Wanted: 166 grain [GRAI] at $24, 146 livestock [LIVE] at $23, 120
//     fish [FISH] at $24, 68 crossbows [XBOW] at $119, 83 longbows
//     [LBOW] at $120, 89 chain armor [CARM] at $92, 75 spices [SPIC] at
//     $150, 80 cotton [COTT] at $171.
//   For Sale: 84 iron [IRON] at $51, 74 stone [STON] at $48, 70 perfume
//     [PERF] at $64, 53 velvet [VELV] at $73, 1252 vikings [VIKI] at
//     $60, 250 leaders [LEAD] at $120.
//   Entertainment available: $1565.
//   Products: 17 livestock [LIVE], 10 iron [IRON], 12 stone [STON].

// Exits:
//   North : ocean (2,54) in Atlantis Ocean.
//   Northeast : ocean (3,55) in Atlantis Ocean.
//   Southeast : ocean (3,57) in Atlantis Ocean.
//   South : desert (2,58) in Binhai, contains Tral [city].
//   Southwest : desert (1,57) in Binhai.
//   Northwest : plain (1,55) in Killorglin.

// - City Guard (135), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// * Workers (2644), Grey Wind (17), avoiding, behind, revealing faction,
//   7 vikings [VIKI], 360 silver [SILV]. Weight: 70. Capacity:
//   0/0/105/0. Skills: none.
// - Clown (2769), SkyRaiders (14), avoiding, behind, viking [VIKI].

// desert (2,58) in Binhai, contains Tral [city], 5446 peasants
//   (vikings), $32676.
// ------------------------------------------------------------
//   The weather was clear last month; it will be monsoon season next
//     month.
//   Wages: $16 (Max: $17427).
//   Wanted: 102 grain [GRAI] at $24, 170 livestock [LIVE] at $18, 190
//     fish [FISH] at $23, 51 swords [SWOR] at $104, 62 longbows [LBOW]
//     at $123, 59 chain armor [CARM] at $93, 76 plate armor [PARM] at
//     $524, 83 jewelry [JEWE] at $168, 91 tarot cards [TARO] at $155.
//   For Sale: 90 iron [IRON] at $53, 58 wine [WINE] at $77, 79 truffles
//     [TRUF] at $89, 1089 vikings [VIKI] at $64, 217 leaders [LEAD] at
//     $128.
//   Entertainment available: $1633.
//   Products: 15 livestock [LIVE], 13 iron [IRON], 11 stone [STON].

// Exits:
//   North : desert (2,56) in Binhai, contains Inuen [city].
//   Northeast : ocean (3,57) in Atlantis Ocean.
//   Southeast : ocean (3,59) in Atlantis Ocean.
//   South : ocean (2,60) in Atlantis Ocean.
//   Southwest : desert (1,59) in Binhai.
//   Northwest : desert (1,57) in Binhai.

// - City Guard (137), on guard, The Guardsmen (1), 120 leaders [LEAD],
//   120 swords [SWOR].
// * Workers (2400), Grey Wind (17), avoiding, behind, revealing faction,
//   6 vikings [VIKI], 393 silver [SILV]. Weight: 60. Capacity: 0/0/90/0.
//   Skills: none.
// * Grey Ambassador (2057), Grey Wind (17), avoiding, behind, revealing
//   faction, leader [LEAD], 200 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: combat [COMB] 3 (180), observation [OBSE] 1 (30),
//   entertainment [ENTE] 2 (90).
// - Clown (2676), SkyRaiders (14), avoiding, behind, viking [VIKI].

// desert (95,59) in Binhai, 177 peasants (vikings), $177.
// ------------------------------------------------------------
//   The weather was clear last month; it will be monsoon season next
//     month.
//   Wages: $11 (Max: $389).
//   Wanted: none.
//   For Sale: 35 vikings [VIKI] at $44, 7 leaders [LEAD] at $88.
//   Entertainment available: $8.
//   Products: 13 grain [GRAI], 13 iron [IRON], 18 stone [STON].

// Exits:
//   North : ocean (95,57) in Atlantis Ocean.
//   Northeast : desert (0,58) in Binhai.
//   Southeast : desert (0,60) in Binhai.
//   South : jungle (95,61) in Lorima.
//   Southwest : desert (94,60) in Setihe.
//   Northwest : desert (94,58) in Binhai.

// - eye (2578), SkyRaiders (14), avoiding, behind, viking [VIKI].
// * Grey Scout (2319), Grey Wind (17), avoiding, behind, revealing
//   faction, taxing, tribal elf [TELF], 200 silver [SILV]. Weight: 10.
//   Capacity: 0/0/15/0. Skills: combat [COMB] 2 (90).

// desert (70,62) in Beaubur, 162 peasants (nomads), $486.
// ------------------------------------------------------------
//   The weather was clear last month; it will be monsoon season next
//     month.
//   Wages: $13 (Max: $421).
//   Wanted: none.
//   For Sale: 32 nomads [NOMA] at $52, 6 leaders [LEAD] at $104.
//   Entertainment available: $24.
//   Products: 14 livestock [LIVE], 11 iron [IRON], 14 stone [STON].

// Exits:
//   North : desert (70,60) in Beaubur.
//   Northeast : mountain (71,61) in Seress'a.
//   Southeast : mountain (71,63) in Seress'a.
//   South : jungle (70,64) in Belver, contains Yriaberg [city].
//   Southwest : jungle (69,63) in Belver.
//   Northwest : desert (69,61) in Beaubur.

// - Unit (2955), Gragblod (7), avoiding, nomad [NOMA].
// * Grey Scout (2238), Grey Wind (17), avoiding, behind, revealing
//   faction, hill dwarf [HDWA]. Weight: 10. Capacity: 0/0/15/0. Skills:
//   combat [COMB] 1 (60).

// plain (93,63) in Nosen, contains Kar-mun [town], 1995 peasants
//   (plainsmen), $13965.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $17 (Max: $6783).
//   Wanted: 135 grain [GRAI] at $18, 86 livestock [LIVE] at $24, 15
//     stone [STON] at $41, 121 fish [FISH] at $20, 16 plate armor [PARM]
//     at $521.
//   For Sale: 399 plainsmen [PLAI] at $68, 79 leaders [LEAD] at $136.
//   Entertainment available: $698.
//   Products: 41 grain [GRAI], 38 horses [HORS].

// Exits:
//   North : desert (93,61) in Setihe.
//   Northeast : ocean (94,62) in Atlantis Ocean.
//   Southeast : plain (94,64) in Nosen.
//   South : plain (93,65) in Nosen.
//   Southwest : desert (92,64) in Setihe.
//   Northwest : desert (92,62) in Setihe.

// - City Guard (151), on guard, 80 leaders [LEAD], 80 swords [SWOR].
// * Workers (2232), Grey Wind (17), avoiding, behind, revealing faction,
//   286 silver [SILV], 8 plainsmen [PLAI]. Weight: 80. Capacity:
//   0/0/120/0. Skills: none.
// - Clown (2350), SkyRaiders (14), avoiding, behind, viking [VIKI].
// - eye (3158), SkyRaiders (14), avoiding, behind, plainsman [PLAI].

// jungle (70,64) in Belver, contains Yriaberg [city], 5894 peasants
//   (tribal elves), $35364.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $16 (Max: $18860).
//   Wanted: 112 grain [GRAI] at $24, 124 livestock [LIVE] at $20, 85
//     figurines [FIGU] at $150, 52 wine [WINE] at $141.
//   For Sale: 58 crossbows [XBOW] at $97, 80 jewelry [JEWE] at $79, 86
//     mink [MINK] at $70, 1178 tribal elves [TELF] at $64, 235 leaders
//     [LEAD] at $128.
//   Entertainment available: $1768.
//   Products: 30 livestock [LIVE], 18 wood [WOOD], 27 herbs [HERB].

// Exits:
//   North : desert (70,62) in Beaubur.
//   Northeast : mountain (71,63) in Seress'a.
//   Southeast : jungle (71,65) in Belver.
//   South : jungle (70,66) in Belver.
//   Southwest : jungle (69,65) in Belver.
//   Northwest : jungle (69,63) in Belver.

// - City Guard (152), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// - Izluks (1489), sea elf [SELF].
// * Workers (2306), Grey Wind (17), avoiding, behind, revealing faction,
//   tribal elf [TELF], 12 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
//   Skills: none.

// desert (5,65) in Sayqua, contains Dwor-ungol [city], 7003 peasants
//   (desert dwarves), $35015.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $15 (Max: $21009).
//   Wanted: 136 grain [GRAI] at $29, 190 livestock [LIVE] at $20, 82
//     furs [FUR] at $50, 80 horses [HORS] at $57, 73 crossbows [XBOW] at
//     $119, 51 plate armor [PARM] at $464, 87 caviar [CAVI] at $146, 75
//     wool [WOOL] at $140.
//   For Sale: 75 stone [STON] at $56, 53 swords [SWOR] at $97, 69
//     truffles [TRUF] at $63, 83 perfume [PERF] at $72, 1400 desert
//     dwarves [DDWA] at $60, 280 leaders [LEAD] at $120.
//   Entertainment available: $1750.
//   Products: 18 livestock [LIVE], 13 iron [IRON], 19 stone [STON].

// Exits:
//   North : desert (5,63) in Sayqua.
//   Northeast : desert (6,64) in Sayqua.
//   Southeast : desert (6,66) in Sayqua.
//   South : desert (5,67) in Sayqua.
//   Southwest : desert (4,66) in Sayqua.
//   Northwest : desert (4,64) in Sayqua.

// - Clown (1383), SkyRaiders (14), avoiding, behind, wood elf [WELF], 2
//   mithril swords [MSWO], 2 floater hides [FLOA], spices [SPIC], 4
//   tarot cards [TARO], mithril armor [MARM], silk [SILK], 3 cotton
//   [COTT], 4 wagons [WAGO], 4 jewelry [JEWE], 4 iron [IRON], 2 mink
//   [MINK], dye [DYE], chain armor [CARM], truffles [TRUF], cashmere
//   [CASH], pearls [PEAR], velvet [VELV], 2 perfume [PERF], 2 wood
//   [WOOD], longbow [LBOW].
// * Workers (2645), Grey Wind (17), avoiding, behind, revealing faction,
//   189 silver [SILV], 20 desert dwarves [DDWA]. Weight: 200. Capacity:
//   0/0/300/0. Skills: none.
// - Guard (2789), on guard, SkyRaiders (14), 1725 desert dwarves [DDWA],
//   55 swords [SWOR].
// - Unit (3202), SkyRaiders (14), behind, leader [LEAD].
// - Unit (3203), SkyRaiders (14), avoiding, behind, leader [LEAD].
// - Unit (3211), SkyRaiders (14), avoiding, behind, leader [LEAD].

// plain (65,65) in Ranaw, contains Turfold [city], 5805 peasants
//   (plainsmen), $40635.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $17 (Max: $19737).
//   Wanted: 182 grain [GRAI] at $24, 178 livestock [LIVE] at $23, 63
//     furs [FUR] at $53, 72 swords [SWOR] at $104, 74 longbows [LBOW] at
//     $89, 89 roses [ROSE] at $164, 57 mink [MINK] at $149.
//   For Sale: 59 horses [HORS] at $45, 99 tarot cards [TARO] at $82, 97
//     truffles [TRUF] at $82, 1161 plainsmen [PLAI] at $68, 232 leaders
//     [LEAD] at $136.
//   Entertainment available: $2031.
//   Products: 68 grain [GRAI], 39 horses [HORS].

// Exits:
//   North : plain (65,63) in Ranaw, contains Trabddel [city].
//   Northeast : plain (66,64) in Ranaw.
//   Southeast : jungle (66,66) in Belver, contains Throzmunt [city].
//   South : plain (65,67) in Ranaw.
//   Southwest : plain (64,66) in Ranaw.
//   Northwest : plain (64,64) in Ranaw.

// - City Guard (155), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// - Unit (1896), Gragblod (7), avoiding, high elf [HELF].
// * Grey Scout (1923), Grey Wind (17), avoiding, behind, revealing
//   faction, barbarian [BARB], 220 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: combat [COMB] 2 (90).

// plain (92,66) in Nosen, contains Breuneuburg [city], 6218 peasants
//   (high elves), $49744.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $18 (Max: $22384).
//   Wanted: 136 grain [GRAI] at $18, 176 livestock [LIVE] at $27, 72
//     herbs [HERB] at $60, 76 longbows [LBOW] at $114, 53 plate armor
//     [PARM] at $449, 51 pearls [PEAR] at $135, 75 cashmere [CASH] at
//     $158.
//   For Sale: 81 horses [HORS] at $48, 99 figurines [FIGU] at $73, 69
//     cotton [COTT] at $79, 1243 high elves [HELF] at $72, 248 leaders
//     [LEAD] at $144.
//   Entertainment available: $2487.
//   Products: 69 livestock [LIVE], 36 horses [HORS].

// Exits:
//   North : desert (92,64) in Setihe.
//   Northeast : plain (93,65) in Nosen.
//   Southeast : plain (93,67) in Nosen.
//   South : plain (92,68) in Nosen.
//   Southwest : plain (91,67) in Nosen.
//   Northwest : plain (91,65) in Negar.

// - City Guard (158), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// - Clown (2271), SkyRaiders (14), avoiding, behind, high elf [HELF].
// * Workers (2846), Grey Wind (17), avoiding, behind, revealing faction,
//   5 high elves [HELF], 260 silver [SILV]. Weight: 50. Capacity:
//   0/0/75/0. Skills: none.

// jungle (71,67) in Belver, contains Ingard'w [city], 4551 peasants
//   (tribal elves), $27306.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $16 (Max: $14563).
//   Wanted: 140 grain [GRAI] at $20, 142 livestock [LIVE] at $27, 89
//     swords [SWOR] at $92, 55 chain armor [CARM] at $92, 82 wine [WINE]
//     at $152, 84 wool [WOOL] at $137.
//   For Sale: 56 herbs [HERB] at $55, 56 truffles [TRUF] at $62, 74
//     velvet [VELV] at $85, 910 tribal elves [TELF] at $64, 182 leaders
//     [LEAD] at $128.
//   Entertainment available: $1365.
//   Products: 36 livestock [LIVE], 14 wood [WOOD], 31 herbs [HERB].

// Exits:
//   North : jungle (71,65) in Belver.
//   Northeast : mountain (72,66) in Rodair'n.
//   Southeast : mountain (72,68) in Rodair'n.
//   South : jungle (71,69) in Belver.
//   Southwest : jungle (70,68) in Belver.
//   Northwest : jungle (70,66) in Belver.

// - City Guard (159), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// * Workers (3436), Grey Wind (17), avoiding, behind, revealing faction,
//   5 tribal elves [TELF], 38 silver [SILV]. Weight: 50. Capacity:
//   0/0/75/0. Skills: none.

// plain (89,69) in Negar, contains Rirdieberg [city], 5016 peasants
//   (nomads), $35112.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $17 (Max: $17054).
//   Wanted: 112 grain [GRAI] at $23, 186 livestock [LIVE] at $26, 198
//     fish [FISH] at $24, 64 chain armor [CARM] at $114, 95 plate armor
//     [PARM] at $501, 65 mink [MINK] at $165, 65 dye [DYE] at $171.
//   For Sale: 72 horses [HORS] at $54, 85 roses [ROSE] at $72, 73 cotton
//     [COTT] at $64, 1003 nomads [NOMA] at $68, 200 leaders [LEAD] at
//     $136.
//   Entertainment available: $1755.
//   Products: 62 livestock [LIVE], 39 horses [HORS].

// Exits:
//   North : ocean (89,67) in Atlantis Ocean.
//   Northeast : plain (90,68) in Negar.
//   Southeast : ocean (90,70) in Atlantis Ocean.
//   South : ocean (89,71) in Atlantis Ocean.
//   Southwest : ocean (88,70) in Atlantis Ocean.
//   Northwest : plain (88,68) in Negar.

// - City Guard (164), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// - Clown (2020), SkyRaiders (14), avoiding, behind, plainsman [PLAI].
// * Workers (2760), Grey Wind (17), avoiding, behind, revealing faction,
//   15 nomads [NOMA], 543 silver [SILV]. Weight: 150. Capacity:
//   0/0/225/0. Skills: none.

// desert (6,70) in Sayqua, 124 peasants (vikings), $124.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $11 (Max: $272).
//   Wanted: none.
//   For Sale: 24 vikings [VIKI] at $44, 4 leaders [LEAD] at $88.
//   Entertainment available: $6.
//   Products: 15 livestock [LIVE], 13 iron [IRON], 18 stone [STON].

// Exits:
//   North : desert (6,68) in Sayqua.
//   Northeast : ocean (7,69) in Atlantis Ocean.
//   Southeast : forest (7,71) in Snyaldshy.
//   South : forest (6,72) in Snyaldshy.
//   Southwest : desert (5,71) in Sayqua.
//   Northwest : desert (5,69) in Sayqua.

// - eye (1897), SkyRaiders (14), avoiding, behind, desert dwarf [DDWA].
// * Grey Scout (1779), Grey Wind (17), avoiding, behind, revealing
//   faction, taxing, viking [VIKI], 91 silver [SILV]. Weight: 10.
//   Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).

// forest (3,71) in U'osad, contains Mun-kai [city], 5604 peasants (wood
//   elves), $28020.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $15 (Max: $16812).
//   Wanted: 136 grain [GRAI] at $18, 148 livestock [LIVE] at $23, 94
//     horses [HORS] at $62, 76 crossbows [XBOW] at $119, 68 plate armor
//     [PARM] at $513, 88 chocolate [CHOC] at $152, 60 cashmere [CASH] at
//     $162.
//   For Sale: 73 roses [ROSE] at $62, 62 mink [MINK] at $69, 1120 wood
//     elves [WELF] at $60, 224 leaders [LEAD] at $120.
//   Entertainment available: $1401.
//   Products: 34 livestock [LIVE], 28 wood [WOOD], 17 furs [FUR], 14
//     herbs [HERB].

// Exits:
//   North : forest (3,69) in U'osad.
//   Northeast : desert (4,70) in Sayqua.
//   Southeast : forest (4,72) in Crerakroth.
//   South : forest (3,73) in U'osad.
//   Southwest : forest (2,72) in U'osad.
//   Northwest : forest (2,70) in U'osad.

// - City Guard (167), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// - Clown (1392), SkyRaiders (14), avoiding, behind, wood elf [WELF].
// * Workers (2170), Grey Wind (17), avoiding, behind, revealing faction,
//   4 wood elves [WELF], 335 silver [SILV]. Weight: 40. Capacity:
//   0/0/60/0. Skills: none.
// - eye (2589), SkyRaiders (14), avoiding, behind, wood elf [WELF].

// forest (8,72) in Snyaldshy, contains Mundvoltan [village], 1158
//   peasants (wood elves), $3474.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $13 (Max: $3010).
//   Wanted: 117 grain [GRAI] at $27, 100 livestock [LIVE] at $21, 14
//     stone [STON] at $59.
//   For Sale: 231 wood elves [WELF] at $52, 46 leaders [LEAD] at $104.
//   Entertainment available: $173.
//   Products: 26 livestock [LIVE], 33 wood [WOOD], 11 furs [FUR], 11
//     herbs [HERB].

// Exits:
//   North : forest (8,70) in Snyaldshy.
//   Northeast : forest (9,71) in Snyaldshy.
//   Southeast : forest (9,73) in Snyaldshy.
//   South : forest (8,74) in Snyaldshy.
//   Southwest : forest (7,73) in Snyaldshy, contains Asend [city].
//   Northwest : forest (7,71) in Snyaldshy.

// - Clowns (1282), SkyRaiders (14), avoiding, behind, 5 wood elves
//   [WELF], 12 swords [SWOR], 8 horses [HORS].
// - eye (2114), SkyRaiders (14), avoiding, behind, wood elf [WELF], 8
//   swords [SWOR].
// * Workers (2530), Grey Wind (17), avoiding, behind, revealing faction,
//   24 silver [SILV], 2 wood elves [WELF]. Weight: 20. Capacity:
//   0/0/30/0. Skills: none.
// - guard (2685), on guard, SkyRaiders (14), behind, wood elf [WELF].
// - Unit (2694), SkyRaiders (14), avoiding, behind, nomad [NOMA], 16
//   horses [HORS].

// forest (3,73) in U'osad, 311 peasants (wood elves), $933.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $13 (Max: $808).
//   Wanted: none.
//   For Sale: 62 wood elves [WELF] at $52, 12 leaders [LEAD] at $104.
//   Entertainment available: $46.
//   Products: 26 grain [GRAI], 34 wood [WOOD], 13 furs [FUR], 19 herbs
//     [HERB].

// Exits:
//   North : forest (3,71) in U'osad, contains Mun-kai [city].
//   Northeast : forest (4,72) in Crerakroth.
//   Southeast : forest (4,74) in Crerakroth.
//   South : swamp (3,75) in Baibrun.
//   Southwest : forest (2,74) in U'osad.
//   Northwest : forest (2,72) in U'osad.

// - Clown (1807), SkyRaiders (14), avoiding, behind, wood elf [WELF].
// - Unit (2370), SkyRaiders (14), avoiding, behind, 2 wood elves [WELF],
//   71 ironwood [IRWD].
// - Workers (2434), SkyRaiders (14), avoiding, behind, 57 wood elves
//   [WELF].
// - Unit (2367), SkyRaiders (14), avoiding, behind, 16 wood elves
//   [WELF], 544 wood [WOOD].
// * Grey Scout (2529), Grey Wind (17), avoiding, behind, revealing
//   faction, taxing, plainsman [PLAI], 169 silver [SILV]. Weight: 10.
//   Capacity: 0/0/15/0. Skills: combat [COMB] 1 (60).

// forest (7,73) in Snyaldshy, contains Asend [city], 6781 peasants (wood
//   elves), $47467.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $17 (Max: $23055).
//   Wanted: 118 grain [GRAI] at $21, 100 livestock [LIVE] at $27, 108
//     fish [FISH] at $23, 93 horses [HORS] at $59, 97 wagons [WAGO] at
//     $191, 83 ivory [IVOR] at $140, 99 cashmere [CASH] at $140.
//   For Sale: 64 herbs [HERB] at $51, 87 tarot cards [TARO] at $87, 61
//     wine [WINE] at $69, 1356 wood elves [WELF] at $68, 271 leaders
//     [LEAD] at $136.
//   Entertainment available: $2373.
//   Products: 37 grain [GRAI], 29 wood [WOOD], 11 furs [FUR], 19 herbs
//     [HERB].

// Exits:
//   North : forest (7,71) in Snyaldshy.
//   Northeast : forest (8,72) in Snyaldshy, contains Mundvoltan
//     [village].
//   Southeast : forest (8,74) in Snyaldshy.
//   South : ocean (7,75) in Atlantis Ocean.
//   Southwest : forest (6,74) in Crerakroth.
//   Northwest : forest (6,72) in Snyaldshy.

// - Clown (1694), SkyRaiders (14), avoiding, behind, 26 wood elves
//   [WELF], 8 yew [YEW], 10 floater hides [FLOA], 9 ironwood [IRWD], 4
//   mithril [MITH].
// - eye (2435), SkyRaiders (14), avoiding, behind, wood elf [WELF].
// * Workers (2492), Grey Wind (17), avoiding, behind, revealing faction,
//   12 wood elves [WELF], 179 silver [SILV]. Weight: 120. Capacity:
//   0/0/180/0. Skills: none.
// - City Guards (2594), on guard, SkyRaiders (14), behind, 919 wood
//   elves [WELF], 60 swords [SWOR], 2 mithril swords [MSWO].
// - Unit (2680), SkyRaiders (14), avoiding, behind, 60 wood elves
//   [WELF].

// forest (0,74) in U'osad, contains Kae-yik [city], 3030 peasants (wood
//   elves), $18180.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $16 (Max: $9696).
//   Wanted: 108 grain [GRAI] at $29, 182 livestock [LIVE] at $24, 38
//     wagons [WAGO] at $219, 29 ivory [IVOR] at $170, 19 vodka [VODK] at
//     $149.
//   For Sale: 53 wood [WOOD] at $59, 38 chain armor [CARM] at $105, 23
//     silk [SILK] at $88, 9 cotton [COTT] at $84, 606 wood elves [WELF]
//     at $64, 121 leaders [LEAD] at $128.
//   Entertainment available: $909.
//   Products: 31 livestock [LIVE], 42 wood [WOOD], 12 furs [FUR], 10
//     herbs [HERB].

// Exits:
//   North : forest (0,72) in U'osad.
//   Northeast : forest (1,73) in U'osad.
//   Southeast : forest (1,75) in U'osad.
//   South : forest (0,76) in U'osad.
//   Southwest : forest (95,75) in U'osad.
//   Northwest : forest (95,73) in U'osad.

// - Clowns (1494), SkyRaiders (14), avoiding, behind, sea elf [SELF], 16
//   wood elves [WELF].
// - Unit (2281), 2 leaders [LEAD], 131 yew [YEW].
// - Guard (2591), on guard, SkyRaiders (14), behind, wood elf [WELF],
//   sword [SWOR].
// - Workers (2799), 383 wood elves [WELF], 76 swords [SWOR].
// - =Wood (2896), SkyRaiders (14), avoiding, behind, 14 wood elves
//   [WELF], 548 wood [WOOD].
// - =Live (2254), 15 wood elves [WELF], 30 livestock [LIVE].
// - =Herbs (2385), 5 wood elves [WELF].
// - =Furs (2512), 6 wood elves [WELF], 120 furs [FUR].
// * Workers (3316), Grey Wind (17), avoiding, behind, revealing faction,
//   5 wood elves [WELF], 180 silver [SILV]. Weight: 50. Capacity:
//   0/0/75/0. Skills: none.

// + Building [1] : Timber Yard.

// + Building [2] : Ranch.

// + Building [3] : Timber Yard.

// + Building [4] : Ranch.

// + Building [5] : Timber Yard.

// + Building [6] : Ranch.
//   - Unit (1588), 2 leaders [LEAD], 50 horses [HORS], 2 rootstone
//     [ROOT], 9 floater hides [FLOA], 4 caviar [CAVI], 3 mithril [MITH],
//     ironwood [IRWD], 3 iron [IRON], 32 yew [YEW].

// swamp (67,75) in Tourlanque, contains Forbrin-dum [city], 3741
//   peasants (tribesmen), $22446.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $16 (Max: $11971).
//   Wanted: 196 grain [GRAI] at $24, 190 livestock [LIVE] at $23, 53
//     iron [IRON] at $56, 55 stone [STON] at $59, 64 furs [FUR] at $62,
//     60 horses [HORS] at $47, 62 wagons [WAGO] at $182, 42 figurines
//     [FIGU] at $168, 63 vodka [VODK] at $170.
//   For Sale: 44 longbows [LBOW] at $119, 41 cotton [COTT] at $67, 58
//     wool [WOOL] at $74, 748 tribesmen [TMAN] at $64, 149 leaders
//     [LEAD] at $128.
//   Entertainment available: $1122.
//   Products: 13 livestock [LIVE], 10 wood [WOOD], 11 herbs [HERB].

// Exits:
//   North : swamp (67,73) in Tourlanque.
//   Northeast : swamp (68,74) in Tourlanque.
//   Southeast : forest (68,76) in Monfor.
//   South : forest (67,77) in Monfor.
//   Southwest : forest (66,76) in Monfor.
//   Northwest : forest (66,74) in Monfor.

// - City Guard (181), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// * Workers (2531), Grey Wind (17), avoiding, behind, revealing faction,
//   26 tribesmen [TMAN], 162 silver [SILV]. Weight: 260. Capacity:
//   0/0/390/0. Skills: none.
// - Izluks (1232), barbarian [BARB].

// + Shaft [1] : Shaft, contains an inner location.
//   - Scout (2094), barbarian [BARB].

// forest (14,76) in Cadel, 297 peasants (vikings), $891.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $13 (Max: $772).
//   Wanted: none.
//   For Sale: 59 vikings [VIKI] at $52, 11 leaders [LEAD] at $104.
//   Entertainment available: $44.
//   Products: 33 grain [GRAI], 35 wood [WOOD], 10 furs [FUR], 16 herbs
//     [HERB].

// Exits:
//   North : forest (14,74) in Ypoluemo.
//   Northeast : ocean (15,75) in Atlantis Ocean.
//   Southeast : mountain (15,77) in Altnaharra.
//   South : mountain (14,78) in Altnaharra.
//   Southwest : forest (13,77) in Cadel.
//   Northwest : ocean (13,75) in Atlantis Ocean.

// - Clown (2189), SkyRaiders (14), avoiding, behind, viking [VIKI].
// * Grey Scout (1778), Grey Wind (17), avoiding, behind, revealing
//   faction, viking [VIKI], 289 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: combat [COMB] 2 (90).

// forest (11,77) in Cadel, 238 peasants (sea elves), $714.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $13 (Max: $618).
//   Wanted: none.
//   For Sale: 47 sea elves [SELF] at $52, 9 leaders [LEAD] at $104.
//   Entertainment available: $35.
//   Products: 30 livestock [LIVE], 32 wood [WOOD], 13 furs [FUR], 17
//     herbs [HERB].

// Exits:
//   North : forest (11,75) in Cadel.
//   Northeast : forest (12,76) in Cadel.
//   Southeast : forest (12,78) in Cadel.
//   South : mountain (11,79) in Altnaharra, contains Ney-brer [city].
//   Southwest : ocean (10,78) in Atlantis Ocean.
//   Northwest : forest (10,76) in Snyaldshy.

// - eye (2023), SkyRaiders (14), avoiding, behind, sea elf [SELF].
// * Grey Scout (2087), Grey Wind (17), avoiding, behind, revealing
//   faction, taxing, tribal elf [TELF], 120 silver [SILV]. Weight: 10.
//   Capacity: 0/0/15/0. Skills: combat [COMB] 2 (90).

// plain (71,77) in Hullevala, contains Ollo-krag [village], 1405
//   peasants (nomads), $8430.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $16 (Max: $4496).
//   Wanted: 129 grain [GRAI] at $20, 95 livestock [LIVE] at $18.
//   For Sale: 281 nomads [NOMA] at $64, 56 leaders [LEAD] at $128.
//   Entertainment available: $421.
//   Products: 70 grain [GRAI], 37 horses [HORS].

// Exits:
//   North : plain (71,75) in Hullevala.
//   Northeast : plain (72,76) in Hullevala.
//   Southeast : plain (72,78) in Hullevala.
//   South : plain (71,79) in Hullevala.
//   Southwest : mountain (70,78) in Inber.
//   Northwest : swamp (70,76) in Tourlanque.

// - City Guard (183), on guard, 40 leaders [LEAD], 40 swords [SWOR].
// * Workers (2950), Grey Wind (17), avoiding, behind, revealing faction,
//   10 nomads [NOMA], 172 silver [SILV]. Weight: 100. Capacity:
//   0/0/150/0. Skills: none.

// plain (73,77) in Hullevala, contains Lothmarund [town], 1917 peasants
//   (sea elves), $15336.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $18 (Max: $6901).
//   Wanted: 138 grain [GRAI] at $26, 85 livestock [LIVE] at $24, 18 wood
//     [WOOD] at $56, 9 furs [FUR] at $56, 160 fish [FISH] at $27, 10
//     herbs [HERB] at $45.
//   For Sale: 7 horses [HORS] at $45, 383 sea elves [SELF] at $72, 76
//     leaders [LEAD] at $144.
//   Entertainment available: $766.
//   Products: 73 grain [GRAI], 26 horses [HORS].

// Exits:
//   North : plain (73,75) in Hullevala.
//   Northeast : ocean (74,76) in Atlantis Ocean.
//   Southeast : ocean (74,78) in Atlantis Ocean.
//   South : ocean (73,79) in Atlantis Ocean.
//   Southwest : plain (72,78) in Hullevala.
//   Northwest : plain (72,76) in Hullevala.

// - City Guard (184), on guard, 80 leaders [LEAD], 80 swords [SWOR].
// * Workers (3031), Grey Wind (17), avoiding, behind, revealing faction,
//   2 sea elves [SELF], 54 silver [SILV]. Weight: 20. Capacity:
//   0/0/30/0. Skills: none.

// swamp (95,77) in Rayting, contains Sei-yuss [village], 874 peasants
//   (tribesmen), $3496.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $14 (Max: $2447).
//   Wanted: 117 grain [GRAI] at $24, 128 livestock [LIVE] at $18.
//   For Sale: 174 tribesmen [TMAN] at $56, 34 leaders [LEAD] at $112.
//   Entertainment available: $174.
//   Products: 10 grain [GRAI], 19 wood [WOOD], 12 herbs [HERB].

// Exits:
//   North : forest (95,75) in U'osad.
//   Northeast : forest (0,76) in U'osad.
//   Southeast : swamp (0,78) in Baibrun.
//   South : swamp (95,79) in Rayting.
//   Southwest : swamp (94,78) in Rayting.
//   Northwest : swamp (94,76) in Rayting.

// - Clown (1582), SkyRaiders (14), avoiding, behind, tribal elf [TELF],
//   sword [SWOR].
// - eye (2438), SkyRaiders (14), avoiding, behind, tribesman [TMAN].
// - Unit (2563), SkyRaiders (14), avoiding, behind, tribesman [TMAN].
// - City Guard (3021), on guard, 40 leaders [LEAD], 40 swords [SWOR].
// * Workers (3364), Grey Wind (17), avoiding, behind, revealing faction,
//   6 tribesmen [TMAN], 120 silver [SILV]. Weight: 60. Capacity:
//   0/0/90/0. Skills: none.

// forest (5,79) in Crerakroth, contains Doedbygd [city], 5756 peasants
//   (wood elves), $40292.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $17 (Max: $19570).
//   Wanted: 198 grain [GRAI] at $26, 130 livestock [LIVE] at $23, 80
//     swords [SWOR] at $86, 52 crossbows [XBOW] at $120, 62 plate armor
//     [PARM] at $539, 86 tarot cards [TARO] at $153, 51 mink [MINK] at
//     $137.
//   For Sale: 58 herbs [HERB] at $55, 67 caviar [CAVI] at $86, 95 spices
//     [SPIC] at $74, 1151 wood elves [WELF] at $68, 230 leaders [LEAD]
//     at $136.
//   Entertainment available: $2955.
//   Products: 28 grain [GRAI], 41 wood [WOOD], 15 furs [FUR], 14 herbs
//     [HERB].

// Exits:
//   North : forest (5,77) in Crerakroth.
//   Northeast : forest (6,78) in Crerakroth.
//   Southeast : forest (6,80) in Crerakroth, contains Ardvale [city].
//   South : plain (5,81) in Condorund.
//   Southwest : swamp (4,80) in Baibrun.
//   Northwest : swamp (4,78) in Baibrun.

// - Clowns (1215), SkyRaiders (14), avoiding, behind, 29 wood elves
//   [WELF], 3 high elves [HELF], 14 nomads [NOMA], 3 plainsmen [PLAI], 3
//   vikings [VIKI].
// - City Guards (1536), SkyRaiders (14), 863 wood elves [WELF], high elf
//   [HELF], wood [WOOD], 968 horses [HORS], 2 nomads [NOMA], 83 swords
//   [SWOR], 3 chain armor [CARM].
// - Unit (1405), SkyRaiders (14), avoiding, behind, 14 wood elves
//   [WELF], 1081 wood [WOOD].
// - Workers (1761), SkyRaiders (14), 4 furs [FUR], wagon [WAGO], wood
//   [WOOD], silk [SILK], 3 jewelry [JEWE], 6 longbows [LBOW], ivory
//   [IVOR], 3 fish [FISH], wool [WOOL], velvet [VELV], perfume [PERF], 2
//   stone [STON], 283 wood elves [WELF], 20 swords [SWOR].
// - Unit (1814), SkyRaiders (14), behind, horse [HORS], leader [LEAD].
// - =Grain (1815), SkyRaiders (14), avoiding, behind, 14 wood elves
//   [WELF], 28 grain [GRAI].
// - Unit (1812), 2 leaders [LEAD], 9 yew [YEW].
// - Unit (1877), SkyRaiders (14), avoiding, behind, 10 leaders [LEAD].
// - Unit (1879), SkyRaiders (14), avoiding, behind, leader [LEAD].
// - Unit (1954), SkyRaiders (14), behind, 2 leaders [LEAD].
// - Unit (2024), SkyRaiders (14), avoiding, behind, 8 wood elves [WELF],
//   360 furs [FUR].
// - Unit (2025), SkyRaiders (14), avoiding, behind, 7 wood elves [WELF].
// * Harpers (2058), Grey Wind (17), avoiding, behind, revealing faction,
//   10 wood elves [WELF], 1380 silver [SILV]. Weight: 100. Capacity:
//   0/0/150/0. Skills: entertainment [ENTE] 3 (180).
// * Master Harper (2233), Grey Wind (17), avoiding, behind, revealing
//   faction, taxing, leader [LEAD], 46 silver [SILV]. Weight: 10.
//   Capacity: 0/0/15/0. Skills: entertainment [ENTE] 3 (210), combat
//   [COMB] 1 (30), observation [OBSE] 1 (60).
// * Harpers (2234), Grey Wind (17), avoiding, behind, revealing faction,
//   10 wood elves [WELF], 1239 silver [SILV]. Weight: 100. Capacity:
//   0/0/150/0. Skills: entertainment [ENTE] 3 (180).
// - Unit (2373), SkyRaiders (14), avoiding, behind, 10 leaders [LEAD].
// - Unit (1886), SkyRaiders (14), avoiding, behind, 11 leaders [LEAD].
// * Workers (2646), Grey Wind (17), avoiding, behind, revealing faction,
//   40 wood elves [WELF], 754 silver [SILV]. Weight: 400. Capacity:
//   0/0/600/0. Skills: none.
// - Unit (1881), SkyRaiders (14), avoiding, behind, leader [LEAD], 70
//   crossbows [XBOW].
// - Unit (2285), SkyRaiders (14), avoiding, behind, 10 leaders [LEAD].
// - Unit (2619), SkyRaiders (14), avoiding, behind, 6 wood [WOOD], wine
//   [WINE], vodka [VODK], velvet [VELV], 2 truffles [TRUF], 4 tarot
//   cards [TARO], spices [SPIC], 2 silk [SILK], roses [ROSE], pearls
//   [PEAR], horse [HORS], 2 plate armor [PARM], 14 mithril swords
//   [MSWO], mithril armor [MARM], 7 longbows [LBOW], 7 double bows
//   [DBOW], 2 crossbows [XBOW], 2 floater hides [FLOA], tribal elf
//   [TELF].
// * Harpers (3143), Grey Wind (17), avoiding, behind, revealing faction,
//   10 wood elves [WELF], 398 silver [SILV]. Weight: 100. Capacity:
//   0/0/150/0. Skills: entertainment [ENTE] 3 (180).
// - Unit (2808), SkyRaiders (14), avoiding, behind, 94 horses [HORS],
//   wood elf [WELF].
// * Footmen (3317), on guard, Grey Wind (17), revealing faction, taxing,
//   20 wood elves [WELF], 4035 silver [SILV]. Weight: 200. Capacity:
//   0/0/300/0. Skills: combat [COMB] 1 (60).
// * Footmen (3437), on guard, Grey Wind (17), revealing faction, taxing,
//   20 wood elves [WELF], 3024 silver [SILV]. Weight: 200. Capacity:
//   0/0/300/0. Skills: combat [COMB] 1 (30).
// - Unit (2194), SkyRaiders (14), avoiding, behind, 39 yew [YEW], 29
//   ironwood [IRWD], 28 horses [HORS], wood elf [WELF], 2 grain [GRAI].
// - Unit (1438), SkyRaiders (14), avoiding, behind, high elf [HELF], 30
//   horses [HORS], 66 grain [GRAI].
// - Unit (2805), wood elf [WELF], 5 winged horses [WING], 8 yew [YEW].
// - Unit (2135), SkyRaiders (14), avoiding, behind, high elf [HELF], 5
//   winged horses [WING], 18 yew [YEW].

// + Building [1] : Timber Yard.

// + Building [2] : Timber Yard.

// + Building [3] : Timber Yard.

// + Building [4] : Farm.

// + Building [5] : Farm.

// + Building [6] : Farm.

// + Building [7] : Inn.

// + Building [8] : Inn.

// + Building [9] : Inn.

// + Building [10] : Inn.
//   - Unit (1592), 2 leaders [LEAD].

// forest (67,79) in Monfor, 319 peasants (wood elves), $638.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $12 (Max: $765).
//   Wanted: none.
//   For Sale: 63 wood elves [WELF] at $48, 12 leaders [LEAD] at $96.
//   Entertainment available: $31.
//   Products: 37 grain [GRAI], 35 wood [WOOD], 13 furs [FUR], 12 herbs
//     [HERB].

// Exits:
//   North : forest (67,77) in Monfor.
//   Northeast : forest (68,78) in Monfor.
//   Southeast : mountain (68,80) in Inber, contains Nyon [city].
//   South : mountain (67,81) in Inber.
//   Southwest : mountain (66,80) in Baibur, contains Porthcawl [city].
//   Northwest : forest (66,78) in Monfor.

// * Footmen (2533), on guard, Grey Wind (17), revealing faction, taxing,
//   10 barbarians [BARB], 192 silver [SILV]. Weight: 100. Capacity:
//   0/0/150/0. Skills: combat [COMB] 3 (180).
// * Footmen (3366), on guard, Grey Wind (17), revealing faction, taxing,
//   10 wood elves [WELF], 316 silver [SILV]. Weight: 100. Capacity:
//   0/0/150/0. Skills: combat [COMB] 1 (30).
// * Master Archer (3367), Grey Wind (17), behind, revealing faction,
//   taxing, leader [LEAD], longbow [LBOW]. Weight: 11. Capacity:
//   0/0/15/0. Skills: longbow [LBOW] 2 (120).
// * Master Archer (3368), Grey Wind (17), behind, revealing faction,
//   taxing, leader [LEAD], longbow [LBOW], 5 silver [SILV]. Weight: 11.
//   Capacity: 0/0/15/0. Skills: longbow [LBOW] 2 (90).
// * Master Archer (3369), Grey Wind (17), behind, revealing faction,
//   taxing, leader [LEAD], longbow [LBOW], 6 silver [SILV]. Weight: 11.
//   Capacity: 0/0/15/0. Skills: longbow [LBOW] 2 (90).
// * Master Archer (3370), Grey Wind (17), behind, revealing faction,
//   taxing, leader [LEAD], longbow [LBOW]. Weight: 11. Capacity:
//   0/0/15/0. Skills: longbow [LBOW] 2 (90).
// * Master Archer (3371), Grey Wind (17), behind, revealing faction,
//   taxing, leader [LEAD], longbow [LBOW]. Weight: 11. Capacity:
//   0/0/15/0. Skills: longbow [LBOW] 2 (90).
// * Archers (3372), Grey Wind (17), behind, revealing faction, taxing,
//   10 wood elves [WELF], 10 longbows [LBOW], 100 silver [SILV]. Weight:
//   110. Capacity: 0/0/150/0. Skills: longbow [LBOW] 2 (120).
// * Archers (3373), Grey Wind (17), behind, revealing faction, taxing,
//   10 wood elves [WELF], 10 longbows [LBOW], 100 silver [SILV]. Weight:
//   110. Capacity: 0/0/150/0. Skills: longbow [LBOW] 2 (120).
// * Knight (3438), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
//   2 (90), riding [RIDI] 1 (30).
// * Grey Scout (3439), Grey Wind (17), avoiding, behind, revealing
//   faction, 4 horses [HORS], barbarian [BARB], 5 silver [SILV], 15
//   longbows [LBOW]. Weight: 225. Capacity: 0/280/295/0. Skills: none.

// forest (6,80) in Crerakroth, contains Ardvale [city], 5308 peasants
//   (vikings), $37156.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $17 (Max: $90236).
//   Wanted: none.
//   For Sale: unlimited iron [IRON] at $75, unlimited wood [WOOD] at
//     $75, unlimited stone [STON] at $75, unlimited furs [FUR] at $75,
//     unlimited herbs [HERB] at $75, unlimited horses [HORS] at $75,
//     unlimited swords [SWOR] at $150, unlimited crossbows [XBOW] at
//     $150, unlimited longbows [LBOW] at $150, unlimited chain armor
//     [CARM] at $150, unlimited plate armor [PARM] at $625, unlimited
//     wagons [WAGO] at $250, unlimited vikings [VIKI] at $64, unlimited
//     leaders [LEAD] at $128.
//   Entertainment available: $1857.
//   Products: 26 grain [GRAI], 36 wood [WOOD], 10 furs [FUR], 15 herbs
//     [HERB].

// Exits:
//   North : forest (6,78) in Crerakroth.
//   Northeast : ocean (7,79) in Atlantis Ocean.
//   Southeast : ocean (7,81) in Atlantis Ocean.
//   South : plain (6,82) in Condorund, contains Gon-killuk [city].
//   Southwest : plain (5,81) in Condorund.
//   Northwest : forest (5,79) in Crerakroth, contains Doedbygd [city].

// - City Guard (190), on guard, The Guardsmen (1), 120 leaders [LEAD],
//   120 swords [SWOR].
// - Clowns (1146), SkyRaiders (14), avoiding, behind, 10 vikings [VIKI].
// - Workers (1147), SkyRaiders (14), avoiding, behind, 2274 vikings
//   [VIKI], high elf [HELF], 2 nomads [NOMA].
// - Unit (1238), SkyRaiders (14), avoiding, behind, 2 vikings [VIKI].
// * Workers (1841), Grey Wind (17), avoiding, behind, revealing faction,
//   40 vikings [VIKI], 530 silver [SILV]. Weight: 400. Capacity:
//   0/0/600/0. Skills: none.
// * Harpers (1864), Grey Wind (17), avoiding, behind, revealing faction,
//   5 wood elves [WELF], 250 silver [SILV]. Weight: 50. Capacity:
//   0/0/75/0. Skills: entertainment [ENTE] 3 (180).
// - Unit (1759), SkyRaiders (14), avoiding, behind, 5 wood elves [WELF],
//   15 wood [WOOD].
// - Unit (1953), SkyRaiders (14), avoiding, behind, 3 wood elves [WELF],
//   189 ironwood [IRWD].
// * Grey Ambassador (2088), Grey Wind (17), avoiding, behind, revealing
//   faction, leader [LEAD], 35 silver [SILV], horse [HORS], sword
//   [SWOR]. Weight: 61. Capacity: 0/70/85/0. Skills: entertainment
//   [ENTE] 3 (180), combat [COMB] 3 (180), riding [RIDI] 2 (90).
// * Grey Scout (2218), Grey Wind (17), behind, revealing faction, leader
//   [LEAD], horse [HORS], sword [SWOR], 50 silver [SILV]. Weight: 61.
//   Capacity: 0/70/85/0. Skills: observation [OBSE] 5 (450), combat
//   [COMB] 2 (120), riding [RIDI] 2 (90), tactics [TACT] 1 (30).
// - Unit (2612), SkyRaiders (14), avoiding, behind, horse [HORS], leader
//   [LEAD].
// - Sailors (2825), SkyRaiders (14), avoiding, behind, 2 vikings [VIKI].
// - Unit (1610), SkyRaiders (14), avoiding, behind, viking [VIKI], 173
//   horses [HORS].
// - Unit (3277), Sol Invictus (20), avoiding, behind, viking [VIKI].
// * Harpers (3162), Grey Wind (17), avoiding, behind, revealing faction,
//   5 wood elves [WELF], 250 silver [SILV]. Weight: 50. Capacity:
//   0/0/75/0. Skills: entertainment [ENTE] 3 (180).
// * Footmen (3457), Grey Wind (17), avoiding, behind, revealing faction,
//   20 vikings [VIKI]. Weight: 200. Capacity: 0/0/300/0. Skills: combat
//   [COMB] 1 (45).
// - Unit (1660), SkyRaiders (14), avoiding, behind, 10 leaders [LEAD],
//   60 wood [WOOD].
// - Unit (2810), SkyRaiders (14), avoiding, behind, 20 horses [HORS],
//   viking [VIKI].

// + Tower of Storms [1] : Tower.
//   * Lord Eristan (1217), Grey Wind (17), behind, revealing faction,
//     flying battle spoils, leader [LEAD], 3 dragons [DRAG], 81 silver
//     [SILV], sword [SWOR], chain armor [CARM], eagle [EAGL]. Weight:
//     772. Capacity: 915/915/930/0. Skills: pattern [PATT] 4 (300),
//     earth lore [EART] 3 (270), bird lore [BIRD] 3 (180), force [FORC]
//     3 (180), fire [FIRE] 2 (90), dragon lore [DRAG] 3 (180), spirit
//     [SPIR] 1 (30), observation [OBSE] 1 (30), farsight [FARS] 1 (30).
//     Combat spell: fire [FIRE]. Can Study: fire [FIRE], earthquake
//     [EQUA], force shield [FSHI], energy shield [ESHI], spirit shield
//     [SSHI], magical healing [MHEA], gate lore [GATE], mind reading
//     [MIND], weather lore [WEAT], earth lore [EART], wolf lore [WOLF],
//     necromancy [NECR], demon lore [DEMO], illusion [ILLU], artifact
//     lore [ARTI].
//   * Prince Tirion (1777), Grey Wind (17), behind, revealing faction,
//     leader [LEAD], 3 dragons [DRAG], sword [SWOR], chain armor [CARM],
//     87 silver [SILV], eagle [EAGL]. Weight: 772. Capacity:
//     915/915/930/0. Skills: pattern [PATT] 4 (300), earth lore [EART] 3
//     (180), bird lore [BIRD] 3 (180), dragon lore [DRAG] 3 (180), force
//     [FORC] 2 (120), fire [FIRE] 1 (60), spirit [SPIR] 1 (60), artifact
//     lore [ARTI] 1 (30), enchant swords [ESWO] 1 (30). Combat spell:
//     fire [FIRE]. Can Study: fire [FIRE], earthquake [EQUA], force
//     shield [FSHI], energy shield [ESHI], spirit shield [SSHI], magical
//     healing [MHEA], gate lore [GATE], farsight [FARS], mind reading
//     [MIND], weather lore [WEAT], earth lore [EART], wolf lore [WOLF],
//     necromancy [NECR], demon lore [DEMO], illusion [ILLU], enchant
//     armor [EARM].
//   - Unit (1950), SkyRaiders (14), avoiding, behind, 2 leaders [LEAD],
//     28 yew [YEW].
//   - Lord Loudeo (1099), SkyRaiders (14), behind, leader [LEAD], 3
//     dragons [DRAG], 13 winged horses [WING].
//   - Unit (1218), SkyRaiders (14), behind, leader [LEAD], 3 dragons
//     [DRAG], 26 winged horses [WING], 2 double bows [DBOW], ironwood
//     [IRWD], horse [HORS], mink [MINK].

// + Ship [115] : Longboat.
//   - Sailors (2839), SkyRaiders (14), avoiding, behind, 2 vikings
//     [VIKI].

// + Ship [116] : Longboat.

// + Ship [117] : Longboat.

// + Ship [118] : Longboat, needs 6.

// + Ship [119] : Longboat, needs 10.

// + Ship [120] : Longboat, needs 10.

// mountain (66,80) in Baibur, contains Porthcawl [city], 3168 peasants
//   (hill dwarves), $19008.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $16 (Max: $10137).
//   Wanted: 118 grain [GRAI] at $24, 182 livestock [LIVE] at $21, 39
//     herbs [HERB] at $50, 36 wine [WINE] at $164, 17 silk [SILK] at
//     $132.
//   For Sale: 49 iron [IRON] at $48, 43 stone [STON] at $49, 24 swords
//     [SWOR] at $103, 26 caviar [CAVI] at $72, 12 roses [ROSE] at $64,
//     633 hill dwarves [HDWA] at $64, 126 leaders [LEAD] at $128.
//   Entertainment available: $950.
//   Products: 39 grain [GRAI], 26 iron [IRON], 19 stone [STON].

// Exits:
//   North : forest (66,78) in Monfor.
//   Northeast : forest (67,79) in Monfor.
//   Southeast : mountain (67,81) in Inber.
//   South : mountain (66,82) in Baibur, contains Bihat [town].
//   Southwest : mountain (65,81) in Baibur, contains Navenby [city].
//   Northwest : mountain (65,79) in Baibur.

// - City Guard (194), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// * Workers (2493), Grey Wind (17), avoiding, behind, revealing faction,
//   6 hill dwarves [HDWA], 54 silver [SILV], horse [HORS]. Weight: 110.
//   Capacity: 0/70/160/0. Skills: none.

// mountain (68,80) in Inber, contains Nyon [city], 4663 peasants (hill
//   dwarves), $27978.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $16 (Max: $14921).
//   Wanted: 100 grain [GRAI] at $23, 122 livestock [LIVE] at $20, 98
//     wood [WOOD] at $54, 51 herbs [HERB] at $56, 93 spices [SPIC] at
//     $138, 68 silk [SILK] at $173.
//   For Sale: 55 longbows [LBOW] at $122, 46 plate armor [PARM] at $465,
//     66 wine [WINE] at $61, 66 cashmere [CASH] at $73, 932 hill dwarves
//     [HDWA] at $64, 186 leaders [LEAD] at $128.
//   Entertainment available: $1398.
//   Products: 23 grain [GRAI], 29 iron [IRON], 16 stone [STON].

// Exits:
//   North : forest (68,78) in Monfor.
//   Northeast : mountain (69,79) in Inber.
//   Southeast : mountain (69,81) in Inber.
//   South : mountain (68,82) in Inber.
//   Southwest : mountain (67,81) in Inber.
//   Northwest : forest (67,79) in Monfor.

// - City Guard (195), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// * Workers (2089), Grey Wind (17), avoiding, behind, revealing faction,
//   12 hill dwarves [HDWA], 72 silver [SILV]. Weight: 120. Capacity:
//   0/0/180/0. Skills: none.
// * Grey Scout (1689), Grey Wind (17), avoiding, behind, revealing
//   faction, horse [HORS], barbarian [BARB], 853 silver [SILV]. Weight:
//   60. Capacity: 0/70/85/0. Skills: none.

// swamp (3,81) in Baibrun, 114 peasants (tribal elves), $228.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $12 (Max: $273).
//   Wanted: none.
//   For Sale: 22 tribal elves [TELF] at $48, 4 leaders [LEAD] at $96.
//   Entertainment available: $11.
//   Products: 12 grain [GRAI], 15 wood [WOOD], 19 herbs [HERB].

// Exits:
//   North : swamp (3,79) in Baibrun.
//   Northeast : swamp (4,80) in Baibrun.
//   Southeast : swamp (4,82) in Baibrun.
//   South : ocean (3,83) in Atlantis Ocean.
//   Southwest : swamp (2,82) in Baibrun.
//   Northwest : swamp (2,80) in Baibrun.

// - eye (1539), SkyRaiders (14), avoiding, behind, high elf [HELF].
// * Grey Scout (2086), Grey Wind (17), avoiding, behind, revealing
//   faction, tribal elf [TELF], 3 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: combat [COMB] 2 (90).

// mountain (65,81) in Baibur, contains Navenby [city], 3296 peasants
//   (hill dwarves), $16480.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $15 (Max: $9888).
//   Wanted: 158 grain [GRAI] at $18, 138 livestock [LIVE] at $24, 40
//     furs [FUR] at $53, 134 fish [FISH] at $18, 42 caviar [CAVI] at
//     $135, 29 perfume [PERF] at $158.
//   For Sale: 42 iron [IRON] at $58, 59 stone [STON] at $52, 36 swords
//     [SWOR] at $109, 24 crossbows [XBOW] at $114, 14 plate armor [PARM]
//     at $407, 31 chocolate [CHOC] at $80, 21 cashmere [CASH] at $74,
//     659 hill dwarves [HDWA] at $60, 131 leaders [LEAD] at $120.
//   Entertainment available: $824.
//   Products: 24 grain [GRAI], 31 iron [IRON], 18 stone [STON].

// Exits:
//   North : mountain (65,79) in Baibur.
//   Northeast : mountain (66,80) in Baibur, contains Porthcawl [city].
//   Southeast : mountain (66,82) in Baibur, contains Bihat [town].
//   South : ocean (65,83) in Atlantis Ocean.
//   Southwest : mountain (64,82) in Baibur, contains Belport [city].
//   Northwest : mountain (64,80) in Baibur.

// - City Guard (197), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// * Workers (2647), Grey Wind (17), avoiding, behind, revealing faction,
//   2 hill dwarves [HDWA], 60 silver [SILV]. Weight: 20. Capacity:
//   0/0/30/0. Skills: none.

// plain (6,82) in Condorund, contains Gon-killuk [city], 6973 peasants
//   (nomads), $62757.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $19 (Max: $26497).
//   Wanted: 170 grain [GRAI] at $27, 164 livestock [LIVE] at $26, 150
//     fish [FISH] at $26, 75 crossbows [XBOW] at $98, 96 silk [SILK] at
//     $146, 75 mink [MINK] at $165.
//   For Sale: 74 horses [HORS] at $66, 86 figurines [FIGU] at $72, 81
//     dye [DYE] at $87, 1394 nomads [NOMA] at $76, 278 leaders [LEAD] at
//     $152.
//   Entertainment available: $4509.
//   Products: 69 livestock [LIVE], 37 horses [HORS].

// Exits:
//   North : forest (6,80) in Crerakroth, contains Ardvale [city].
//   Northeast : ocean (7,81) in Atlantis Ocean.
//   Southeast : plain (7,83) in Condorund.
//   South : plain (6,84) in Condorund.
//   Southwest : plain (5,83) in Condorund.
//   Northwest : plain (5,81) in Condorund.

// - Clowns (1219), SkyRaiders (14), avoiding, behind, 77 nomads [NOMA],
//   4 yew [YEW], 6 pearls [PEAR], 8 jewelry [JEWE], vodka [VODK], 10
//   horses [HORS].
// - City Guards (1506), SkyRaiders (14), 1340 nomads [NOMA], plainsman
//   [PLAI], 1184 horses [HORS], 5 mithril swords [MSWO], mithril armor
//   [MARM], 110 swords [SWOR].
// - =Live (1736), SkyRaiders (14), avoiding, behind, 35 nomads [NOMA],
//   69 livestock [LIVE].
// - =Horses (1737), SkyRaiders (14), avoiding, behind, 19 nomads [NOMA],
//   865 horses [HORS].
// - Unit (1823), SkyRaiders (14), avoiding, behind, 10 leaders [LEAD].
// - Unit (1393), SkyRaiders (14), behind, leader [LEAD], horse [HORS].
// - Unit (1893), SkyRaiders (14), avoiding, behind, 70 leaders [LEAD].
// - Unit (1894), SkyRaiders (14), avoiding, behind, 110 leaders [LEAD],
//   8 crossbows [XBOW].
// - Unit (1895), SkyRaiders (14), avoiding, behind, 63 leaders [LEAD].
// - Unit (1458), SkyRaiders (14), avoiding, behind, 2 leaders [LEAD].
// - Unit (1456), SkyRaiders (14), avoiding, behind, leader [LEAD], horse
//   [HORS].
// - Unit (1957), SkyRaiders (14), avoiding, behind, 30 leaders [LEAD].
// * Grey Ambassador (1978), on guard, Grey Wind (17), revealing faction,
//   taxing, leader [LEAD], 25 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: combat [COMB] 2 (90), entertainment [ENTE] 2 (90),
//   observation [OBSE] 3 (180).
// - Unit (1497), SkyRaiders (14), avoiding, behind, 3 leaders [LEAD].
// - Unit (2138), SkyRaiders (14), avoiding, behind, 10 leaders [LEAD].
// - Unit (2139), SkyRaiders (14), avoiding, behind, 90 leaders [LEAD].
// - Unit (1578), SkyRaiders (14), avoiding, behind, 4 leaders [LEAD].
// - Unit (1581), SkyRaiders (14), avoiding, behind, 9 leaders [LEAD].
// - Unit (1584), SkyRaiders (14), avoiding, behind, 7 leaders [LEAD].
// - Unit (2193), SkyRaiders (14), avoiding, behind, 100 leaders [LEAD].
// - Unit (2195), SkyRaiders (14), avoiding, behind, 10 leaders [LEAD].
// - Unit (1602), SkyRaiders (14), avoiding, behind, 10 leaders [LEAD].
// * Workers (2235), Grey Wind (17), avoiding, behind, revealing faction,
//   20 nomads [NOMA], 354 silver [SILV]. Weight: 200. Capacity:
//   0/0/300/0. Skills: none.
// - Unit (2288), SkyRaiders (14), avoiding, behind, 30 leaders [LEAD].
// - Unit (2289), SkyRaiders (14), avoiding, behind, 20 leaders [LEAD].
// - Unit (1655), SkyRaiders (14), avoiding, behind, 15 leaders [LEAD].
// - Unit (2374), SkyRaiders (14), avoiding, behind, 20 leaders [LEAD].
// - Unit (2452), SkyRaiders (14), avoiding, behind, 30 leaders [LEAD].
// - Unit (2453), SkyRaiders (14), avoiding, behind, 10 leaders [LEAD].
// - Unit (2606), SkyRaiders (14), behind, 250 leaders [LEAD], 3 swords
//   [SWOR], 250 crossbows [XBOW].
// - Unit (2690), SkyRaiders (14), avoiding, behind, 170 leaders [LEAD].
// - Unit (2691), SkyRaiders (14), avoiding, behind, 90 leaders [LEAD].
// - Unit (2899), SkyRaiders (14), avoiding, behind, 250 leaders [LEAD].
// - Unit (2900), 10 leaders [LEAD].
// - Unit (1525), SkyRaiders (14), avoiding, behind, nomad [NOMA], 74
//   horses [HORS].
// - Unit (2861), SkyRaiders (14), avoiding, behind, 100 leaders [LEAD].
// - Unit (2969), SkyRaiders (14), avoiding, behind, 170 leaders [LEAD].
// - Unit (1598), SkyRaiders (14), avoiding, behind, nomad [NOMA], 15
//   horses [HORS].
// - Unit (3064), SkyRaiders (14), avoiding, behind, 50 leaders [LEAD].
// - Unit (3017), SkyRaiders (14), avoiding, behind, 90 leaders [LEAD].
// * Footmen (3365), on guard, Grey Wind (17), revealing faction, taxing,
//   20 wood elves [WELF], 2190 silver [SILV]. Weight: 200. Capacity:
//   0/0/300/0. Skills: combat [COMB] 1 (30).
// * Footmen (2309), on guard, Grey Wind (17), revealing faction, taxing,
//   20 nomads [NOMA], 509 silver [SILV]. Weight: 200. Capacity:
//   0/0/300/0. Skills: combat [COMB] 1 (60).
// - Unit (1601), SkyRaiders (14), avoiding, behind, nomad [NOMA], horse
//   [HORS], 56 livestock [LIVE].

// + Building [1] : Ranch.
//   - Unit (2700), SkyRaiders (14), behind, 3 horses [HORS], 10
//     crossbows [XBOW], 15 high elves [HELF], 6 chain armor [CARM],
//     sword [SWOR], plate armor [PARM].
//   - Unit (1611), SkyRaiders (14), avoiding, behind, viking [VIKI], 16
//     horses [HORS].

// + Building [2] : Ranch.

// + Building [3] : Ranch.

// + Building [4] : Inn.
//   - Unit (2378), 2 leaders [LEAD].

// + Building [5] : Inn.
//   - Unit (2379), 2 leaders [LEAD].

// + Building [6] : Inn.
//   - Unit (2380), 2 leaders [LEAD].

// mountain (64,82) in Baibur, contains Belport [city], 5211 peasants
//   (barbarians), $26055.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $15 (Max: $78165).
//   Wanted: none.
//   For Sale: unlimited iron [IRON] at $75, unlimited wood [WOOD] at
//     $75, unlimited stone [STON] at $75, unlimited furs [FUR] at $75,
//     unlimited herbs [HERB] at $75, unlimited horses [HORS] at $75,
//     unlimited swords [SWOR] at $150, unlimited crossbows [XBOW] at
//     $150, unlimited longbows [LBOW] at $150, unlimited chain armor
//     [CARM] at $150, unlimited plate armor [PARM] at $625, unlimited
//     wagons [WAGO] at $250, unlimited barbarians [BARB] at $60,
//     unlimited leaders [LEAD] at $120.
//   Entertainment available: $1302.
//   Products: 22 grain [GRAI], 32 iron [IRON], 18 stone [STON].

// Exits:
//   North : mountain (64,80) in Baibur.
//   Northeast : mountain (65,81) in Baibur, contains Navenby [city].
//   Southeast : ocean (65,83) in Atlantis Ocean.
//   South : ocean (64,84) in Atlantis Ocean.
//   Southwest : mountain (63,83) in Baibur, contains Dunfanaghy [city].
//   Northwest : mountain (63,81) in Baibur.

// - City Guard (203), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// - Workers (2093), 33 barbarians [BARB].
// * Workers (2951), Grey Wind (17), avoiding, behind, revealing faction,
//   2 barbarians [BARB], 50 silver [SILV]. Weight: 20. Capacity:
//   0/0/30/0. Skills: none.
// - Mistress Ariala (14), The Testress Slaves (21), leader [LEAD].
// - Slaves (3478), The Testress Slaves (21), 30 barbarians [BARB].
// - Slaves class B (3479), The Testress Slaves (21), 30 swords [SWOR],
//   16 barbarians [BARB].

// mountain (66,82) in Baibur, contains Bihat [town], 2009 peasants
//   (barbarians), $8036.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $14 (Max: $5625).
//   Wanted: 102 grain [GRAI] at $26, 174 livestock [LIVE] at $27, 135
//     fish [FISH] at $23, 17 swords [SWOR] at $116, 11 plate armor
//     [PARM] at $393.
//   For Sale: 14 iron [IRON] at $48, 9 stone [STON] at $57, 401
//     barbarians [BARB] at $56, 80 leaders [LEAD] at $112.
//   Entertainment available: $401.
//   Products: 26 livestock [LIVE], 39 iron [IRON], 10 stone [STON].

// Exits:
//   North : mountain (66,80) in Baibur, contains Porthcawl [city].
//   Northeast : mountain (67,81) in Inber.
//   Southeast : mountain (67,83) in Baibur.
//   South : mountain (66,84) in Baibur.
//   Southwest : ocean (65,83) in Atlantis Ocean.
//   Northwest : mountain (65,81) in Baibur, contains Navenby [city].

// - City Guard (204), on guard, 80 leaders [LEAD], 80 swords [SWOR].
// * Workers (2532), Grey Wind (17), avoiding, behind, revealing faction,
//   14 barbarians [BARB], 92 silver [SILV]. Weight: 140. Capacity:
//   0/0/210/0. Skills: none.
// * Grey Scout (3249), Grey Wind (17), avoiding, behind, revealing
//   faction, orc [ORC], horse [HORS], 1039 silver [SILV]. Weight: 60.
//   Capacity: 0/70/85/0. Skills: none.

// mountain (68,82) in Inber, 334 peasants (barbarians), $1002.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $13 (Max: $868).
//   Wanted: none.
//   For Sale: 66 barbarians [BARB] at $52, 13 leaders [LEAD] at $104.
//   Entertainment available: $50.
//   Products: 26 livestock [LIVE], 31 iron [IRON], 18 stone [STON].

// Exits:
//   North : mountain (68,80) in Inber, contains Nyon [city].
//   Northeast : mountain (69,81) in Inber.
//   Southeast : mountain (69,83) in Inber.
//   South : mountain (68,84) in Inber.
//   Southwest : mountain (67,83) in Baibur.
//   Northwest : mountain (67,81) in Inber.

// * Knight (3032), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], horse [HORS], sword [SWOR]. Weight: 61. Capacity:
//   0/70/85/0. Skills: combat [COMB] 2 (150), riding [RIDI] 2 (120).
// * Footmen (3095), on guard, Grey Wind (17), revealing faction, taxing,
//   10 barbarians [BARB], 185 silver [SILV]. Weight: 100. Capacity:
//   0/0/150/0. Skills: combat [COMB] 1 (60).
// * Footmen (3286), on guard, Grey Wind (17), revealing faction, taxing,
//   10 barbarians [BARB], 258 silver [SILV]. Weight: 100. Capacity:
//   0/0/150/0. Skills: combat [COMB] 1 (60).
// * Footmen (3287), on guard, Grey Wind (17), revealing faction, taxing,
//   10 barbarians [BARB], 258 silver [SILV]. Weight: 100. Capacity:
//   0/0/150/0. Skills: combat [COMB] 1 (60).
// * Knight (3374), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], horse [HORS], sword [SWOR]. Weight: 61. Capacity:
//   0/70/85/0. Skills: combat [COMB] 2 (90), riding [RIDI] 2 (90).
// * Knight (3375), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], horse [HORS], sword [SWOR], 2 silver [SILV]. Weight:
//   61. Capacity: 0/70/85/0. Skills: combat [COMB] 2 (120), riding
//   [RIDI] 2 (90).
// * Knight (3376), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], horse [HORS], sword [SWOR]. Weight: 61. Capacity:
//   0/70/85/0. Skills: combat [COMB] 2 (120), riding [RIDI] 2 (120).
// * Knight (3377), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], horse [HORS], sword [SWOR]. Weight: 61. Capacity:
//   0/70/85/0. Skills: combat [COMB] 2 (120), riding [RIDI] 2 (120).
// * Knight (3378), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], horse [HORS], sword [SWOR]. Weight: 61. Capacity:
//   0/70/85/0. Skills: combat [COMB] 2 (120), riding [RIDI] 2 (120).
// * Knight (3379), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], horse [HORS], sword [SWOR]. Weight: 61. Capacity:
//   0/70/85/0. Skills: combat [COMB] 2 (120), riding [RIDI] 2 (120).
// * Knight (3380), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], horse [HORS], sword [SWOR]. Weight: 61. Capacity:
//   0/70/85/0. Skills: combat [COMB] 2 (120), riding [RIDI] 2 (120).
// * Knight (3381), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], horse [HORS], sword [SWOR]. Weight: 61. Capacity:
//   0/70/85/0. Skills: combat [COMB] 2 (120), riding [RIDI] 2 (120).
// * Knight (3382), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], horse [HORS], sword [SWOR]. Weight: 61. Capacity:
//   0/70/85/0. Skills: combat [COMB] 2 (120), riding [RIDI] 2 (120).
// * Master Archer (3383), on guard, Grey Wind (17), behind, revealing
//   faction, taxing, leader [LEAD], longbow [LBOW]. Weight: 11.
//   Capacity: 0/0/15/0. Skills: longbow [LBOW] 2 (120).
// * Master Archer (3384), on guard, Grey Wind (17), behind, revealing
//   faction, taxing, leader [LEAD], longbow [LBOW], 16 silver [SILV].
//   Weight: 11. Capacity: 0/0/15/0. Skills: longbow [LBOW] 2 (90).
// * Master Archer (3385), on guard, Grey Wind (17), behind, revealing
//   faction, taxing, leader [LEAD], longbow [LBOW], 16 silver [SILV].
//   Weight: 11. Capacity: 0/0/15/0. Skills: longbow [LBOW] 2 (90).
// * Master Archer (3386), on guard, Grey Wind (17), behind, revealing
//   faction, taxing, leader [LEAD], longbow [LBOW], 16 silver [SILV].
//   Weight: 11. Capacity: 0/0/15/0. Skills: longbow [LBOW] 2 (90).

// mountain (63,83) in Baibur, contains Dunfanaghy [city], 4172 peasants
//   (hill dwarves), $20860.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $15 (Max: $12516).
//   Wanted: 144 grain [GRAI] at $26, 100 livestock [LIVE] at $20, 110
//     fish [FISH] at $26, 71 herbs [HERB] at $41, 76 swords [SWOR] at
//     $101, 81 longbows [LBOW] at $113, 82 plate armor [PARM] at $416,
//     67 caviar [CAVI] at $149, 72 roses [ROSE] at $147.
//   For Sale: 48 stone [STON] at $57, 55 wagons [WAGO] at $177, 75 vodka
//     [VODK] at $82, 51 perfume [PERF] at $83, 834 hill dwarves [HDWA]
//     at $60, 166 leaders [LEAD] at $120.
//   Entertainment available: $1043.
//   Products: 37 grain [GRAI], 34 iron [IRON], 11 stone [STON].

// Exits:
//   North : mountain (63,81) in Baibur.
//   Northeast : mountain (64,82) in Baibur, contains Belport [city].
//   Southeast : ocean (64,84) in Atlantis Ocean.
//   South : forest (63,85) in Baechahoela.
//   Southwest : forest (62,84) in Baechahoela.
//   Northwest : forest (62,82) in Baechahoela.

// - City Guard (206), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// * Grey Scout (1927), Grey Wind (17), avoiding, behind, revealing
//   faction, barbarian [BARB], 55 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: combat [COMB] 1 (60).
// - novice (2269), The Moon Brotherhood (12), avoiding, behind, viking
//   [VIKI].

// mountain (67,83) in Baibur, 315 peasants (orcs), $945.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $13 (Max: $819).
//   Wanted: none.
//   For Sale: 63 orcs [ORC] at $52, 12 leaders [LEAD] at $104.
//   Entertainment available: $47.
//   Products: 23 grain [GRAI], 33 iron [IRON], 14 stone [STON].

// Exits:
//   North : mountain (67,81) in Inber.
//   Northeast : mountain (68,82) in Inber.
//   Southeast : mountain (68,84) in Inber.
//   South : mountain (67,85) in Baibur, contains Gon-tor [city].
//   Southwest : mountain (66,84) in Baibur.
//   Northwest : mountain (66,82) in Baibur, contains Bihat [town].

// * Knight (2320), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], horse [HORS]. Weight: 60. Capacity: 0/70/85/0.
//   Skills: combat [COMB] 4 (330), riding [RIDI] 2 (90), observation
//   [OBSE] 1 (30).
// * Footmen (2761), on guard, Grey Wind (17), revealing faction, taxing,
//   10 barbarians [BARB], 10 swords [SWOR], 295 silver [SILV]. Weight:
//   110. Capacity: 0/0/150/0. Skills: combat [COMB] 2 (120).
// * Footmen (1704), on guard, Grey Wind (17), revealing faction, taxing,
//   10 orcs [ORC], 3 swords [SWOR], 300 silver [SILV]. Weight: 103.
//   Capacity: 0/0/150/0. Skills: combat [COMB] 1 (30).
// * Footmen (1705), on guard, Grey Wind (17), revealing faction, taxing,
//   10 orcs [ORC], 3 swords [SWOR], 300 silver [SILV]. Weight: 103.
//   Capacity: 0/0/150/0. Skills: combat [COMB] 1 (30).
// * Knight (2311), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], horse [HORS], sword [SWOR]. Weight: 61. Capacity:
//   0/70/85/0. Skills: combat [COMB] 1 (60), riding [RIDI] 1 (60).
// * Knight (2336), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], horse [HORS], sword [SWOR]. Weight: 61. Capacity:
//   0/70/85/0. Skills: combat [COMB] 1 (60), riding [RIDI] 1 (60).
// * Knight (2377), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], horse [HORS], sword [SWOR]. Weight: 61. Capacity:
//   0/70/85/0. Skills: combat [COMB] 1 (60), riding [RIDI] 1 (60).
// * Knight (2392), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], horse [HORS], sword [SWOR]. Weight: 61. Capacity:
//   0/70/85/0. Skills: combat [COMB] 1 (60), riding [RIDI] 1 (60).
// * Knight (3458), Grey Wind (17), avoiding, behind, revealing faction,
//   sword [SWOR], horse [HORS], leader [LEAD]. Weight: 61. Capacity:
//   0/70/85/0. Skills: combat [COMB] 1 (30).
// * Knight (3459), Grey Wind (17), avoiding, behind, revealing faction,
//   sword [SWOR], horse [HORS], leader [LEAD]. Weight: 61. Capacity:
//   0/70/85/0. Skills: combat [COMB] 1 (30).
// * Knight (3460), Grey Wind (17), avoiding, behind, revealing faction,
//   sword [SWOR], horse [HORS], leader [LEAD]. Weight: 61. Capacity:
//   0/70/85/0. Skills: combat [COMB] 1 (30).
// * Grey Scout (1926), Grey Wind (17), avoiding, behind, revealing
//   faction, barbarian [BARB], horse [HORS], 1327 silver [SILV]. Weight:
//   60. Capacity: 0/70/85/0. Skills: combat [COMB] 2 (120).

// mountain (69,83) in Inber, 268 peasants (barbarians), $1072.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $14 (Max: $750).
//   Wanted: none.
//   For Sale: 53 barbarians [BARB] at $56, 10 leaders [LEAD] at $112.
//   Entertainment available: $53.
//   Products: 31 livestock [LIVE], 26 iron [IRON], 19 stone [STON].

// Exits:
//   North : mountain (69,81) in Inber.
//   Northeast : mountain (70,82) in Inber.
//   Southeast : mountain (70,84) in Inber.
//   South : mountain (69,85) in Inber.
//   Southwest : mountain (68,84) in Inber.
//   Northwest : mountain (68,82) in Inber.

// * Knight (2953), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], 50 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
//   Skills: combat [COMB] 4 (360), riding [RIDI] 1 (30).
// * Footmen (3144), Grey Wind (17), revealing faction, 10 barbarians
//   [BARB], 261 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
//   combat [COMB] 1 (60).
// * Footmen (3163), on guard, Grey Wind (17), revealing faction, taxing,
//   10 barbarians [BARB], 540 silver [SILV]. Weight: 100. Capacity:
//   0/0/150/0. Skills: combat [COMB] 3 (180).
// - Grizzly Bears (881), 2 grizzly bears [GRIZ].

// mountain (66,84) in Baibur, 272 peasants (hill dwarves), $1088.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $14 (Max: $761).
//   Wanted: none.
//   For Sale: 54 hill dwarves [HDWA] at $56, 10 leaders [LEAD] at $112.
//   Entertainment available: $54.
//   Products: 20 grain [GRAI], 37 iron [IRON], 16 stone [STON].

// Exits:
//   North : mountain (66,82) in Baibur, contains Bihat [town].
//   Northeast : mountain (67,83) in Baibur.
//   Southeast : mountain (67,85) in Baibur, contains Gon-tor [city].
//   South : mountain (66,86) in Baibur.
//   Southwest : ocean (65,85) in Atlantis Ocean.
//   Northwest : ocean (65,83) in Atlantis Ocean.

// * Grey Scout (1925), on guard, Grey Wind (17), revealing faction,
//   taxing, barbarian [BARB], 108 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: combat [COMB] 2 (90).
// * Footmen (3387), Grey Wind (17), revealing faction, 10 hill dwarves
//   [HDWA], 146 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
//   combat [COMB] 1 (30).
// * Footmen (3033), on guard, Grey Wind (17), revealing faction, taxing,
//   10 orcs [ORC], 540 silver [SILV]. Weight: 100. Capacity: 0/0/150/0.
//   Skills: combat [COMB] 1 (60).
// * Knight (3464), Grey Wind (17), revealing faction, leader [LEAD].
//   Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
// * Knight (3465), Grey Wind (17), revealing faction, leader [LEAD].
//   Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).

// mountain (68,84) in Inber, 371 peasants (barbarians), $742.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $12 (Max: $890).
//   Wanted: none.
//   For Sale: 74 barbarians [BARB] at $48, 14 leaders [LEAD] at $96.
//   Entertainment available: $37.
//   Products: 25 livestock [LIVE], 25 iron [IRON], 13 stone [STON].

// Exits:
//   North : mountain (68,82) in Inber.
//   Northeast : mountain (69,83) in Inber.
//   Southeast : mountain (69,85) in Inber.
//   South : mountain (68,86) in Inber.
//   Southwest : mountain (67,85) in Baibur, contains Gon-tor [city].
//   Northwest : mountain (67,83) in Baibur.

// * Grey Ambassador (1865), on guard, Grey Wind (17), behind, revealing
//   faction, taxing, leader [LEAD], 12 silver [SILV], horse [HORS],
//   sword [SWOR]. Weight: 61. Capacity: 0/70/85/0. Skills: combat [COMB]
//   3 (180), observation [OBSE] 4 (420), riding [RIDI] 1 (30).
// * Footmen (2236), on guard, Grey Wind (17), revealing faction, taxing,
//   10 barbarians [BARB], sword [SWOR], 342 silver [SILV]. Weight: 101.
//   Capacity: 0/0/150/0. Skills: combat [COMB] 3 (180).
// * Knight (2321), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], 21 silver [SILV], sword [SWOR], horse [HORS]. Weight:
//   61. Capacity: 0/70/85/0. Skills: combat [COMB] 4 (330), riding
//   [RIDI] 2 (150).
// * Knight Commander (2847), on guard, Grey Wind (17), behind, revealing
//   faction, taxing, leader [LEAD], 197 silver [SILV], horse [HORS],
//   sword [SWOR]. Weight: 61. Capacity: 0/70/85/0. Skills: tactics
//   [TACT] 4 (330), combat [COMB] 3 (210), riding [RIDI] 1 (30).
// * Master Archer (3388), Grey Wind (17), behind, revealing faction,
//   leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: longbow
//   [LBOW] 2 (150).
// * Master Archer (3389), Grey Wind (17), behind, revealing faction,
//   leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: longbow
//   [LBOW] 2 (150).
// * Footmen (1706), on guard, Grey Wind (17), revealing faction, taxing,
//   10 barbarians [BARB], 10 swords [SWOR], 124 silver [SILV]. Weight:
//   110. Capacity: 0/0/150/0. Skills: combat [COMB] 2 (120).

// forest (59,85) in Soratuen, 293 peasants (vikings), $586.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $12 (Max: $703).
//   Wanted: none.
//   For Sale: 58 vikings [VIKI] at $48, 11 leaders [LEAD] at $96.
//   Entertainment available: $29.
//   Products: 28 grain [GRAI], 20 wood [WOOD], 11 furs [FUR], 17 herbs
//     [HERB].

// Exits:
//   North : ocean (59,83) in Atlantis Ocean.
//   Northeast : forest (60,84) in Baechahoela.
//   Southeast : forest (60,86) in Soratuen.
//   South : forest (59,87) in Soratuen.
//   Southwest : ocean (58,86) in Atlantis Ocean.
//   Northwest : forest (58,84) in Soratuen.

// * Grey Scout (1922), Grey Wind (17), avoiding, behind, revealing
//   faction, barbarian [BARB], 280 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: combat [COMB] 1 (60).

// mountain (67,85) in Baibur, contains Gon-tor [city], 6126 peasants
//   (barbarians), $36756.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $16 (Max: $19603).
//   Wanted: 138 grain [GRAI] at $27, 130 livestock [LIVE] at $21, 70
//     wood [WOOD] at $50, 50 swords [SWOR] at $95, 77 longbows [LBOW] at
//     $96, 98 wagons [WAGO] at $192, 85 ivory [IVOR] at $141, 85 spices
//     [SPIC] at $134.
//   For Sale: 79 iron [IRON] at $46, 52 figurines [FIGU] at $61, 72
//     caviar [CAVI] at $80, 1225 barbarians [BARB] at $64, 245 leaders
//     [LEAD] at $128.
//   Entertainment available: $1837.
//   Products: 24 grain [GRAI], 20 iron [IRON], 16 stone [STON].

// Exits:
//   North : mountain (67,83) in Baibur.
//   Northeast : mountain (68,84) in Inber.
//   Southeast : mountain (68,86) in Inber.
//   South : tundra (67,87) in Issche.
//   Southwest : mountain (66,86) in Baibur.
//   Northwest : mountain (66,84) in Baibur.

// - City Guard (212), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// * Workers (2090), Grey Wind (17), avoiding, behind, revealing faction,
//   13 barbarians [BARB], 114 silver [SILV]. Weight: 130. Capacity:
//   0/0/195/0. Skills: none.

// mountain (69,85) in Inber, 390 peasants (orcs), $1560.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $14 (Max: $1092).
//   Wanted: none.
//   For Sale: 78 orcs [ORC] at $56, 15 leaders [LEAD] at $112.
//   Entertainment available: $78.
//   Products: 34 grain [GRAI], 31 iron [IRON], 16 stone [STON].

// Exits:
//   North : mountain (69,83) in Inber.
//   Northeast : mountain (70,84) in Inber.
//   Southeast : mountain (70,86) in Inber, contains Einmund [city].
//   South : tundra (69,87) in Issche.
//   Southwest : mountain (68,86) in Inber.
//   Northwest : mountain (68,84) in Inber.

// * Knight (2237), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], 78 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
//   Skills: combat [COMB] 3 (270), riding [RIDI] 2 (90), observation
//   [OBSE] 1 (30).
// * Footmen (3034), on guard, Grey Wind (17), revealing faction, taxing,
//   10 orcs [ORC], 796 silver [SILV]. Weight: 100. Capacity: 0/0/150/0.
//   Skills: combat [COMB] 1 (60).
// * Footmen (3440), on guard, Grey Wind (17), revealing faction, taxing,
//   10 orcs [ORC], 860 silver [SILV]. Weight: 100. Capacity: 0/0/150/0.
//   Skills: combat [COMB] 1 (60).
// * Footmen (1707), on guard, Grey Wind (17), revealing faction, taxing,
//   10 orcs [ORC], 800 silver [SILV]. Weight: 100. Capacity: 0/0/150/0.
//   Skills: combat [COMB] 1 (60).
// * Knight (3466), Grey Wind (17), revealing faction, leader [LEAD].
//   Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
// * Knight (3468), Grey Wind (17), revealing faction, leader [LEAD].
//   Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1 (30).
// * Footmen (3469), Grey Wind (17), revealing faction, 10 orcs [ORC].
//   Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1 (60).

// mountain (68,86) in Inber, 352 peasants (hill dwarves), $704.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $12 (Max: $844).
//   Wanted: none.
//   For Sale: 70 hill dwarves [HDWA] at $48, 14 leaders [LEAD] at $96.
//   Entertainment available: $35.
//   Products: 25 livestock [LIVE], 22 iron [IRON], 14 stone [STON].

// Exits:
//   North : mountain (68,84) in Inber.
//   Northeast : mountain (69,85) in Inber.
//   Southeast : tundra (69,87) in Issche.
//   South : tundra (68,88) in Issche.
//   Southwest : tundra (67,87) in Issche.
//   Northwest : mountain (67,85) in Baibur, contains Gon-tor [city].

// * Knight (2952), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD], 197 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
//   Skills: combat [COMB] 3 (210), riding [RIDI] 1 (30), observation
//   [OBSE] 1 (30).
// * Footmen (3096), on guard, Grey Wind (17), revealing faction, taxing,
//   10 hill dwarves [HDWA], 891 silver [SILV]. Weight: 100. Capacity:
//   0/0/150/0. Skills: combat [COMB] 1 (60).
// * Footmen (3390), on guard, Grey Wind (17), revealing faction, taxing,
//   10 hill dwarves [HDWA], 463 silver [SILV]. Weight: 100. Capacity:
//   0/0/150/0. Skills: combat [COMB] 2 (120).
// * Footmen (1709), on guard, Grey Wind (17), revealing faction, taxing,
//   10 hill dwarves [HDWA], 216 silver [SILV]. Weight: 100. Capacity:
//   0/0/150/0. Skills: combat [COMB] 1 (30).
// * Knight (2422), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
//   2 (120).
// * Knight (2441), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
//   2 (120).
// * Knight (2464), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
//   2 (120).
// * Knight (2617), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
//   2 (120).
// * Knight (2663), on guard, Grey Wind (17), revealing faction, taxing,
//   leader [LEAD]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
//   2 (120).

// mountain (70,86) in Inber, contains Einmund [city], 3383 peasants
//   (orcs), $16915.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $15 (Max: $10149).
//   Wanted: 188 grain [GRAI] at $18, 154 livestock [LIVE] at $23, 63
//     wood [WOOD] at $41, 102 fish [FISH] at $27, 49 silk [SILK] at
//     $173, 27 velvet [VELV] at $153.
//   For Sale: 62 iron [IRON] at $50, 40 longbows [LBOW] at $102, 38 wine
//     [WINE] at $83, 21 wool [WOOL] at $67, 676 orcs [ORC] at $60, 135
//     leaders [LEAD] at $120.
//   Entertainment available: $845.
//   Products: 22 grain [GRAI], 38 iron [IRON], 10 stone [STON].

// Exits:
//   North : mountain (70,84) in Inber.
//   Northeast : mountain (71,85) in Inber.
//   Southeast : ocean (71,87) in Atlantis Ocean.
//   South : ocean (70,88) in Atlantis Ocean.
//   Southwest : tundra (69,87) in Issche.
//   Northwest : mountain (69,85) in Inber.

// - City Guard (214), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// * Workers (2091), Grey Wind (17), avoiding, behind, revealing faction,
//   26 orcs [ORC], 152 silver [SILV]. Weight: 260. Capacity: 0/0/390/0.
//   Skills: none.

// tundra (69,87) in Issche, 170 peasants (ice dwarves), $170.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $11 (Max: $374).
//   Wanted: none.
//   For Sale: 34 ice dwarves [IDWA] at $44, 6 leaders [LEAD] at $88.
//   Entertainment available: $8.
//   Products: 15 livestock [LIVE], 10 furs [FUR], 16 herbs [HERB].

// Exits:
//   North : mountain (69,85) in Inber.
//   Northeast : mountain (70,86) in Inber, contains Einmund [city].
//   Southeast : ocean (70,88) in Atlantis Ocean.
//   South : tundra (69,89) in Issche.
//   Southwest : tundra (68,88) in Issche.
//   Northwest : mountain (68,86) in Inber.

// * Grey Scout (1924), on guard, Grey Wind (17), revealing faction,
//   taxing, barbarian [BARB], 51 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: combat [COMB] 2 (90).
// * Footmen (3441), Grey Wind (17), revealing faction, 5 ice dwarves
//   [IDWA], 38 silver [SILV]. Weight: 50. Capacity: 0/0/75/0. Skills:
//   none.

// plain (5,91) in Thordor, contains Mun-tor [city], 3850 peasants (high
//   elves), $34650.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $19 (Max: $14630).
//   Wanted: 104 grain [GRAI] at $18, 184 livestock [LIVE] at $21, 79
//     iron [IRON] at $51, 74 furs [FUR] at $53, 61 herbs [HERB] at $60,
//     49 chain armor [CARM] at $101, 39 plate armor [PARM] at $416, 36
//     truffles [TRUF] at $152, 49 velvet [VELV] at $153.
//   For Sale: 56 longbows [LBOW] at $170, 43 wagons [WAGO] at $171, 57
//     roses [ROSE] at $65, 48 mink [MINK] at $86, 770 high elves [HELF]
//     at $76, 154 leaders [LEAD] at $152.
//   Entertainment available: $2570.
//   Products: 56 livestock [LIVE], 34 horses [HORS].

// Exits:
//   North : plain (5,89) in Condorund.
//   Northeast : plain (6,90) in Condorund.
//   Southeast : plain (6,92) in Thordor.
//   South : plain (5,93) in Thordor.
//   Southwest : tundra (4,92) in Etdshy.
//   Northwest : plain (4,90) in Condorund.

// - Clowns (1461), SkyRaiders (14), avoiding, behind, ice dwarf [IDWA],
//   3 vikings [VIKI], 80 high elves [HELF], 1660 livestock [LIVE], 11
//   horses [HORS].
// - City Guards (1742), SkyRaiders (14), 424 high elves [HELF], 164
//   nomads [NOMA], 74 horses [HORS], figurines [FIGU], wool [WOOL], 6
//   stone [STON], 2 dye [DYE], 122 vikings [VIKI], 3 perfume [PERF],
//   roses [ROSE], 542 longbows [LBOW], 5 furs [FUR], 10 grain [GRAI], 4
//   double bows [DBOW], 4 floater hides [FLOA], 4 mithril [MITH], 100
//   swords [SWOR], 2 plate armor [PARM].
// - Unit (1959), SkyRaiders (14), behind, horse [HORS], leader [LEAD].
// - Unit (1960), SkyRaiders (14), avoiding, behind, 2 horses [HORS], 2
//   leaders [LEAD].
// - Unit (2038), SkyRaiders (14), avoiding, behind, 10 leaders [LEAD],
//   10 horses [HORS].
// - Unit (2039), SkyRaiders (14), 10 leaders [LEAD], perfume [PERF],
//   sword [SWOR].
// - Unit (2040), SkyRaiders (14), avoiding, behind, 10 leaders [LEAD].
// - Workers (2149), SkyRaiders (14), avoiding, behind, 60 high elves
//   [HELF].
// * Workers (2219), Grey Wind (17), avoiding, behind, revealing faction,
//   13 high elves [HELF], 258 silver [SILV]. Weight: 130. Capacity:
//   0/0/195/0. Skills: none.
// - Unit (1613), SkyRaiders (14), avoiding, behind, 46 leaders [LEAD],
//   46 longbows [LBOW], 11 horses [HORS].
// - Unit (2714), SkyRaiders (14), behind, 100 leaders [LEAD], 100
//   longbows [LBOW].
// - Unit (2613), SkyRaiders (14), avoiding, behind, horse [HORS], leader
//   [LEAD].
// - Unit (2823), SkyRaiders (14), behind, 100 leaders [LEAD], 55 horses
//   [HORS], 100 longbows [LBOW].
// - Unit (2913), SkyRaiders (14), behind, 40 high elves [HELF], 22
//   horses [HORS], 40 longbows [LBOW].
// - Unit (2988), SkyRaiders (14), behind, 40 leaders [LEAD], sword
//   [SWOR], mithril [MITH], 40 longbows [LBOW].
// - Unit (2696), SkyRaiders (14), avoiding, behind, figurines [FIGU], 2
//   jewelry [JEWE], vodka [VODK], 2 chocolate [CHOC], perfume [PERF],
//   wool [WOOL], ironwood [IRWD], 3 mithril swords [MSWO], longbow
//   [LBOW], 100 horses [HORS], plainsman [PLAI].
// - Unit (3025), SkyRaiders (14), 100 leaders [LEAD], fur [FUR], 4
//   floater hides [FLOA], 2 mithril [MITH], sword [SWOR].
// - Unit (3046), SkyRaiders (14), behind, 50 leaders [LEAD], 2 swords
//   [SWOR], fur [FUR], floater hide [FLOA], mithril [MITH], 50 longbows
//   [LBOW], double bow [DBOW].
// - Unit (3220), SkyRaiders (14), avoiding, behind, 100 leaders [LEAD].
// - Unit (3221), SkyRaiders (14), behind, 50 leaders [LEAD], stone
//   [STON], 3 swords [SWOR], 50 longbows [LBOW].
// - Unit (3344), SkyRaiders (14), avoiding, behind, 150 leaders [LEAD].

// + Building [1] : Inn.

// + Building [2] : Inn.

// + Building [3] : Inn.

// + Building [4] : Inn.

// + Building [5] : Inn.
//   - Unit (2381), 2 leaders [LEAD].

// tundra (2,92) in Etdshy, contains Nolaville [village], 1155 peasants
//   (eskimos), $2310.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $12 (Max: $2772).
//   Wanted: 86 grain [GRAI] at $24, 137 livestock [LIVE] at $21, 11 iron
//     [IRON] at $44, 143 fish [FISH] at $18.
//   For Sale: 231 eskimos [ESKI] at $48, 46 leaders [LEAD] at $96.
//   Entertainment available: $115.
//   Products: 11 grain [GRAI], 14 furs [FUR], 10 herbs [HERB].

// Exits:
//   North : tundra (2,90) in Etdshy.
//   Northeast : tundra (3,91) in Etdshy.
//   Southeast : tundra (3,93) in Etdshy.
//   South : tundra (2,94) in Etdshy.
//   Southwest : ocean (1,93) in Atlantis Ocean.
//   Northwest : ocean (1,91) in Atlantis Ocean.

// - Clown (1426), 2 eskimos [ESKI], 20 swords [SWOR].
// - Guard (1969), on guard, eskimo [ESKI].
// - Workers (2042), SkyRaiders (14), avoiding, behind, horse [HORS],
//   high elf [HELF], 117 eskimos [ESKI].
// * Workers (2534), Grey Wind (17), avoiding, behind, revealing faction,
//   60 silver [SILV], 9 eskimos [ESKI]. Weight: 90. Capacity: 0/0/135/0.
//   Skills: none.

// plain (10,92) in Thordor, contains Karaz-tor [town], 2489 peasants
//   (nomads), $17423.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $17 (Max: $8462).
//   Wanted: 135 grain [GRAI] at $18, 98 livestock [LIVE] at $23.
//   For Sale: 497 nomads [NOMA] at $68, 99 leaders [LEAD] at $136.
//   Entertainment available: $871.
//   Products: 46 grain [GRAI], 39 horses [HORS].

// Exits:
//   North : tundra (10,90) in Conator.
//   Northeast : tundra (11,91) in Conator.
//   Southeast : tundra (11,93) in Conator.
//   South : plain (10,94) in Thordor.
//   Southwest : plain (9,93) in Thordor.
//   Northwest : tundra (9,91) in Conator.

// - Clown (1462), SkyRaiders (14), behind, eskimo [ESKI], 7 mithril
//   [MITH].
// - Guard (2043), on guard, SkyRaiders (14), behind, nomad [NOMA], 20
//   swords [SWOR].
// - Workers (2153), SkyRaiders (14), avoiding, behind, 20 swords [SWOR],
//   259 nomads [NOMA], 5 ice dwarves [IDWA], 5 double bows [DBOW],
//   mithril armor [MARM], 3 mithril swords [MSWO], 6 eskimos [ESKI].
// * Workers (3250), Grey Wind (17), avoiding, behind, revealing faction,
//   2 nomads [NOMA], 28 silver [SILV]. Weight: 20. Capacity: 0/0/30/0.
//   Skills: none.

// plain (14,92) in Abersoch, contains Denhver [city], 3640 peasants
//   (high elves), $25480.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $17 (Max: $12376).
//   Wanted: 126 grain [GRAI] at $21, 168 livestock [LIVE] at $21, 50
//     wood [WOOD] at $48, 49 chain armor [CARM] at $98, 32 wagons [WAGO]
//     at $159, 41 figurines [FIGU] at $149, 24 silk [SILK] at $132.
//   For Sale: 50 horses [HORS] at $57, 46 crossbows [XBOW] at $99, 29
//     mink [MINK] at $67, 19 dye [DYE] at $72, 728 high elves [HELF] at
//     $68, 145 leaders [LEAD] at $136.
//   Entertainment available: $1274.
//   Products: 98 grain [GRAI], 39 horses [HORS].

// Exits:
//   North : plain (14,90) in Abersoch.
//   Northeast : plain (15,91) in Abersoch.
//   Southeast : plain (15,93) in Abersoch.
//   South : plain (14,94) in Abersoch.
//   Southwest : plain (13,93) in Abersoch, contains Kim'eng [city].
//   Northwest : plain (13,91) in Abersoch.

// - Clown (1743), SkyRaiders (14), avoiding, behind, plainsman [PLAI].
// - Unit (2154), on guard, SkyRaiders (14), behind, 60 swords [SWOR], 6
//   high elves [HELF].
// - Workers (2301), SkyRaiders (14), avoiding, behind, 1070 high elves
//   [HELF].
// - Unit (2692), SkyRaiders (14), avoiding, behind, winged horse [WING],
//   leader [LEAD], mithril [MITH].
// - Unit (1891), SkyRaiders (14), avoiding, behind, 64 horses [HORS],
//   nomad [NOMA], 4 wood [WOOD], winged horse [WING].
// - Workers (1564), SkyRaiders (14), 88 vikings [VIKI], 100 horses
//   [HORS], 3 spices [SPIC], cashmere [CASH], 3 chain armor [CARM],
//   longbow [LBOW].
// - =Grain (1594), SkyRaiders (14), avoiding, behind, 29 vikings [VIKI],
//   30 horses [HORS], 20 high elves [HELF], 98 grain [GRAI].
// - =Horses (1595), SkyRaiders (14), avoiding, behind, 16 vikings
//   [VIKI], 493 horses [HORS], 4 nomads [NOMA].
// - Unit (2923), SkyRaiders (14), avoiding, behind, horse [HORS], nomad
//   [NOMA].
// * Workers (3035), Grey Wind (17), avoiding, behind, revealing faction,
//   2 high elves [HELF], 60 silver [SILV]. Weight: 20. Capacity:
//   0/0/30/0. Skills: none.

// + Building [1] : Farm.

// + Building [2] : Farm.

// + Building [3] : Farm.

// plain (16,92) in Abersoch, contains Gon-a-grim [city], 4220 peasants
//   (plainsmen), $29540.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $17 (Max: $14348).
//   Wanted: 190 grain [GRAI] at $18, 116 livestock [LIVE] at $21, 57
//     chain armor [CARM] at $99, 63 plate armor [PARM] at $386, 69
//     caviar [CAVI] at $144, 69 silk [SILK] at $162.
//   For Sale: 83 spices [SPIC] at $88, 45 cotton [COTT] at $70, 844
//     plainsmen [PLAI] at $68, 168 leaders [LEAD] at $136.
//   Entertainment available: $1477.
//   Products: 65 livestock [LIVE], 34 horses [HORS].

// Exits:
//   North : plain (16,90) in Untvory.
//   Northeast : plain (17,91) in Untvory.
//   Southeast : plain (17,93) in Untvory.
//   South : plain (16,94) in Abersoch, contains Helarchen [city].
//   Southwest : plain (15,93) in Abersoch.
//   Northwest : plain (15,91) in Abersoch.

// - Clown (2158), SkyRaiders (14), avoiding, behind, nomad [NOMA], 60
//   swords [SWOR], 7 plainsmen [PLAI].
// - Guard (2302), on guard, SkyRaiders (14), behind, plainsman [PLAI].
// * Workers (3251), Grey Wind (17), avoiding, behind, revealing faction,
//   2 plainsmen [PLAI], 28 silver [SILV]. Weight: 20. Capacity:
//   0/0/30/0. Skills: none.

// plain (66,92) in Carrigaline, contains Lothenlun [city], 5029 peasants
//   (high elves), $40232.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $18 (Max: $18104).
//   Wanted: 122 grain [GRAI] at $21, 176 livestock [LIVE] at $27, 87
//     wood [WOOD] at $44, 184 fish [FISH] at $18, 62 crossbows [XBOW] at
//     $113, 99 longbows [LBOW] at $96, 82 wagons [WAGO] at $174, 86
//     figurines [FIGU] at $159, 70 wool [WOOL] at $134.
//   For Sale: 87 wine [WINE] at $82, 78 perfume [PERF] at $70, 1005 high
//     elves [HELF] at $72, 201 leaders [LEAD] at $144.
//   Entertainment available: $2011.
//   Products: 78 livestock [LIVE], 39 horses [HORS].

// Exits:
//   North : tundra (66,90) in Issche.
//   Northeast : tundra (67,91) in Issche.
//   Southeast : tundra (67,93) in Issche.
//   South : plain (66,94) in Carrigaline.
//   Southwest : ocean (65,93) in Atlantis Ocean.
//   Northwest : ocean (65,91) in Atlantis Ocean.

// - City Guard (234), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// * Workers (2648), Grey Wind (17), avoiding, behind, revealing faction,
//   10 high elves [HELF], 80 silver [SILV]. Weight: 100. Capacity:
//   0/0/150/0. Skills: none.
// * Master Harper (3442), Grey Wind (17), avoiding, behind, revealing
//   faction, leader [LEAD], 20 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: entertainment [ENTE] 2 (90).
// * Harpers (1710), Grey Wind (17), avoiding, behind, revealing faction,
//   3 high elves [HELF], 32 silver [SILV]. Weight: 30. Capacity:
//   0/0/45/0. Skills: none.

// plain (13,93) in Abersoch, contains Kim'eng [city], 5142 peasants
//   (plainsmen), $46278.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $19 (Max: $19539).
//   Wanted: 174 grain [GRAI] at $21, 182 livestock [LIVE] at $24, 53
//     stone [STON] at $56, 93 longbows [LBOW] at $116, 89 vodka [VODK]
//     at $159, 84 roses [ROSE] at $159.
//   For Sale: 76 swords [SWOR] at $98, 61 wine [WINE] at $87, 91 wool
//     [WOOL] at $67, 1028 plainsmen [PLAI] at $76, 205 leaders [LEAD] at
//     $152.
//   Entertainment available: $2313.
//   Products: 68 grain [GRAI], 33 horses [HORS].

// Exits:
//   North : plain (13,91) in Abersoch.
//   Northeast : plain (14,92) in Abersoch, contains Denhver [city].
//   Southeast : plain (14,94) in Abersoch.
//   South : plain (13,95) in Abersoch.
//   Southwest : plain (12,94) in Abersoch, contains Marport [town].
//   Northwest : plain (12,92) in Abersoch.

// - Clown (1425), SkyRaiders (14), avoiding, behind, 2 plainsmen [PLAI].
// - City Gurds (2156), 66 swords [SWOR], 968 plainsmen [PLAI].
// - Unit (2693), SkyRaiders (14), avoiding, behind, winged horse [WING],
//   leader [LEAD].
// - Unit (2866), leader [LEAD].
// - Unit (3138), SkyRaiders (14), avoiding, behind, 20 leaders [LEAD].
// - Unit (3139), SkyRaiders (14), avoiding, behind, 20 leaders [LEAD].
// - Unit (3140), SkyRaiders (14), avoiding, behind, 100 leaders [LEAD].
// - Unit (3141), SkyRaiders (14), avoiding, behind, 40 leaders [LEAD].
// * Workers (3391), Grey Wind (17), avoiding, behind, revealing faction,
//   2 plainsmen [PLAI], 90 silver [SILV]. Weight: 20. Capacity:
//   0/0/30/0. Skills: none.

// plain (12,94) in Abersoch, contains Marport [town], 2734 peasants
//   (high elves), $19138.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $17 (Max: $9295).
//   Wanted: 175 grain [GRAI] at $20, 140 livestock [LIVE] at $20, 25
//     furs [FUR] at $51, 23 crossbows [XBOW] at $95, 10 longbows [LBOW]
//     at $110, 13 chain armor [CARM] at $126, 4 jewelry [JEWE] at $144.
//   For Sale: 24 horses [HORS] at $45, 546 high elves [HELF] at $68, 109
//     leaders [LEAD] at $136.
//   Entertainment available: $956.
//   Products: 75 livestock [LIVE], 22 horses [HORS].

// Exits:
//   North : plain (12,92) in Abersoch.
//   Northeast : plain (13,93) in Abersoch, contains Kim'eng [city].
//   Southeast : plain (13,95) in Abersoch.
//   Southwest : plain (11,95) in Thordor.
//   Northwest : tundra (11,93) in Conator.

// - Clown (1967), SkyRaiders (14), behind, eskimo [ESKI], 40 swords
//   [SWOR].
// - Guards (2161), on guard, SkyRaiders (14), behind, 4 high elves
//   [HELF].
// - Workers (2205), SkyRaiders (14), avoiding, behind, 732 high elves
//   [HELF].
// * Workers (2848), Grey Wind (17), avoiding, behind, revealing faction,
//   high elf [HELF], 62 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
//   Skills: none.

// plain (16,94) in Abersoch, contains Helarchen [city], 4272 peasants
//   (high elves), $29904.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $17 (Max: $14524).
//   Wanted: 192 grain [GRAI] at $23, 144 livestock [LIVE] at $23, 77
//     swords [SWOR] at $95, 60 longbows [LBOW] at $113, 76 plate armor
//     [PARM] at $539, 77 caviar [CAVI] at $135, 70 spices [SPIC] at
//     $140.
//   For Sale: 68 horses [HORS] at $59, 68 truffles [TRUF] at $83, 52
//     cotton [COTT] at $63, 854 high elves [HELF] at $68, 170 leaders
//     [LEAD] at $136.
//   Entertainment available: $1495.
//   Products: 72 grain [GRAI], 32 horses [HORS].

// Exits:
//   North : plain (16,92) in Abersoch, contains Gon-a-grim [city].
//   Northeast : plain (17,93) in Untvory.
//   Southeast : plain (17,95) in Abersoch, contains Niavauton [city].
//   Southwest : plain (15,95) in Abersoch, contains Mun-a-karak [city].
//   Northwest : plain (15,93) in Abersoch.

// - Clown (2159), SkyRaiders (14), avoiding, behind, nomad [NOMA].
// - Guards (2206), on guard, SkyRaiders (14), behind, 31 high elves
//   [HELF].
// - Workers (2305), SkyRaiders (14), avoiding, behind, 779 high elves
//   [HELF].
// - Workers (2723), SkyRaiders (14), avoiding, behind, plainsman [PLAI].
// - Unit (2894), winged horse [WING], leader [LEAD].
// * Worker (1711), Grey Wind (17), avoiding, behind, revealing faction,
//   39 silver [SILV], high elf [HELF]. Weight: 10. Capacity: 0/0/15/0.
//   Skills: none.
// - Unit (3230), SkyRaiders (14), avoiding, behind, high elf [HELF], 58
//   livestock [LIVE].

// plain (9,95) in Thordor, contains Onaberg [city], 4655 peasants
//   (nomads), $41895.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $19 (Max: $17689).
//   Wanted: 174 grain [GRAI] at $23, 146 livestock [LIVE] at $20, 50
//     furs [FUR] at $50, 77 herbs [HERB] at $57, 70 crossbows [XBOW] at
//     $128, 53 longbows [LBOW] at $96, 87 chain armor [CARM] at $125, 73
//     plate armor [PARM] at $498, 86 spices [SPIC] at $141, 56 silk
//     [SILK] at $171.
//   For Sale: 84 wagons [WAGO] at $191, 92 wine [WINE] at $85, 81
//     cashmere [CASH] at $68, 931 nomads [NOMA] at $76, 186 leaders
//     [LEAD] at $152.
//   Entertainment available: $2094.
//   Products: 58 livestock [LIVE], 39 horses [HORS].

// Exits:
//   North : plain (9,93) in Thordor.
//   Northeast : plain (10,94) in Thordor.
//   Northwest : plain (8,94) in Thordor.

// - Clown (1772), SkyRaiders (14), avoiding, behind, 52 nomads [NOMA], 6
//   pearls [PEAR], roses [ROSE], 4 cotton [COTT], 3 dye [DYE], figurines
//   [FIGU], 3 velvet [VELV], tarot cards [TARO], 2 ivory [IVOR], wagon
//   [WAGO], 4 cashmere [CASH], perfume [PERF], 3 truffles [TRUF], wool
//   [WOOL], 2 fish [FISH], 2 stone [STON], 7 mithril [MITH], 2 iron
//   [IRON], 9 yew [YEW], 6 ironwood [IRWD], 3 wood [WOOD], 2 horses
//   [HORS].
// - City Guards (1858), SkyRaiders (14), 931 nomads [NOMA], 5 wagons
//   [WAGO], iron [IRON], 9 mithril [MITH], 6 horses [HORS], 5 chocolate
//   [CHOC], 16 livestock [LIVE], 3 roses [ROSE], jewelry [JEWE], 9 furs
//   [FUR], 11 stone [STON], 5 velvet [VELV], 4 vodka [VODK], 9 fish
//   [FISH], 5 wood [WOOD], spices [SPIC], mink [MINK], wool [WOOL], 2
//   dye [DYE], pearls [PEAR], 5 truffles [TRUF], 14 yew [YEW], 6 winged
//   horses [WING], rootstone [ROOT], cashmere [CASH], 2 ivory [IVOR], 2
//   figurines [FIGU], 2 cotton [COTT], 4 tarot cards [TARO], 2 wine
//   [WINE], 2 caviar [CAVI], 63 swords [SWOR], 4 chain armor [CARM], 3
//   mithril swords [MSWO], 2 mithril armor [MARM], plate armor [PARM].
// - Unit (2620), SkyRaiders (14), behind, 3 leaders [LEAD].
// - Unit (2622), SkyRaiders (14), avoiding, behind, 3 leaders [LEAD].
// - Unit (2623), SkyRaiders (14), behind, 10 leaders [LEAD].
// - Unit (2624), SkyRaiders (14), behind, 7 leaders [LEAD], rootstone
//   [ROOT].
// - Unit (2625), SkyRaiders (14), behind, 10 leaders [LEAD], yew [YEW],
//   figurines [FIGU], 3 double bows [DBOW].
// - Unit (2626), SkyRaiders (14), behind, 10 leaders [LEAD], winged
//   horse [WING], 5 crossbows [XBOW].
// * Workers (2649), Grey Wind (17), avoiding, behind, revealing faction,
//   12 nomads [NOMA], 213 silver [SILV]. Weight: 120. Capacity:
//   0/0/180/0. Skills: none.
// - Unit (3408), SkyRaiders (14), behind, 100 leaders [LEAD].
// - Unit (3410), SkyRaiders (14), 70 leaders [LEAD].
// - City Guard (3482), on guard, 12 leaders [LEAD], 12 swords [SWOR].

// plain (15,95) in Abersoch, contains Mun-a-karak [city], 3730 peasants
//   (plainsmen), $29840.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $18 (Max: $13428).
//   Wanted: 106 grain [GRAI] at $27, 164 livestock [LIVE] at $20, 38
//     stone [STON] at $45, 50 crossbows [XBOW] at $95, 26 velvet [VELV]
//     at $140, 26 mink [MINK] at $158.
//   For Sale: 56 horses [HORS] at $51, 24 pearls [PEAR] at $73, 17 wine
//     [WINE] at $69, 746 plainsmen [PLAI] at $72, 149 leaders [LEAD] at
//     $144.
//   Entertainment available: $1492.
//   Products: 66 livestock [LIVE], 39 horses [HORS].

// Exits:
//   North : plain (15,93) in Abersoch.
//   Northeast : plain (16,94) in Abersoch, contains Helarchen [city].
//   Northwest : plain (14,94) in Abersoch.

// - Clown (1855), SkyRaiders (14), avoiding, behind, 18 plainsmen
//   [PLAI], 60 swords [SWOR].
// - City Guard (2258), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// * Grey Scout (1781), Grey Wind (17), avoiding, behind, revealing
//   faction, viking [VIKI], 14 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: combat [COMB] 1 (30).
// * Workers (3470), Grey Wind (17), avoiding, behind, revealing faction,
//   plainsman [PLAI], 8 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
//   Skills: none.

// plain (17,95) in Abersoch, contains Niavauton [city], 7213 peasants
//   (nomads), $64917.
// ------------------------------------------------------------
//   It was winter last month; it will be winter next month.
//   Wages: $19 (Max: $27409).
//   Wanted: 158 grain [GRAI] at $24, 142 livestock [LIVE] at $21, 68
//     crossbows [XBOW] at $108, 67 chain armor [CARM] at $107, 69 spices
//     [SPIC] at $150, 89 wool [WOOL] at $138.
//   For Sale: 97 horses [HORS] at $45, 93 ivory [IVOR] at $82, 50 mink
//     [MINK] at $80, 1442 nomads [NOMA] at $76, 288 leaders [LEAD] at
//     $152.
//   Entertainment available: $3245.
//   Products: 58 livestock [LIVE], 32 horses [HORS].

// Exits:
//   North : plain (17,93) in Untvory.
//   Northeast : plain (18,94) in Untvory.
//   Northwest : plain (16,94) in Abersoch, contains Helarchen [city].

// - Guard (2207), SkyRaiders (14), high elf [HELF], horse [HORS], 1462
//   nomads [NOMA], 3 winged horses [WING], 66 swords [SWOR].
// - Clowns (2307), SkyRaiders (14), behind, 6 nomads [NOMA].
// - Unit (2911), leader [LEAD], winged horse [WING].
// - Unit (2954), leader [LEAD].
// * Grey Scout (1780), Grey Wind (17), avoiding, behind, revealing
//   faction, viking [VIKI], 58 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: combat [COMB] 2 (90).

// cavern (0,20,underworld) in Ashwaz, 76 peasants (under dwarves), $152.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $12 (Max: $182).
//   Wanted: none.
//   For Sale: 15 under dwarves [UDWA] at $48, 3 leaders [LEAD] at $96.
//   Entertainment available: $7.
//   Products: 10 grain [GRAI], 33 iron [IRON], 35 stone [STON].

// Exits:
//   North : cavern (0,18,underworld) in Ashwaz.
//   Northeast : cavern (1,19,underworld) in Ashwaz.
//   South : cavern (0,22,underworld) in Ashwaz.

// - eye (3415), orc [ORC].
// * Footmen (2401), Grey Wind (17), avoiding, behind, revealing faction,
//   taxing, tribal elf [TELF], 206 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: combat [COMB] 2 (90).

// cavern (1,21,underworld) in Ashwaz, contains Tha-seurr [city], 4913
//   peasants (under dwarves), $29478.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $16 (Max: $15721).
//   Wanted: 132 grain [GRAI] at $18, 198 livestock [LIVE] at $24, 72
//     horses [HORS] at $53, 63 plate armor [PARM] at $461, 72 wagons
//     [WAGO] at $165, 81 ivory [IVOR] at $155, 94 wine [WINE] at $162.
//   For Sale: 73 iron [IRON] at $57, 63 chain armor [CARM] at $112, 82
//     pearls [PEAR] at $62, 69 chocolate [CHOC] at $62, 982 under
//     dwarves [UDWA] at $64, 196 leaders [LEAD] at $128.
//   Entertainment available: $1473.
//   Products: 12 livestock [LIVE], 20 iron [IRON], 32 stone [STON].

// Exits:
//   North : cavern (1,19,underworld) in Ashwaz.
//   Northeast : cavern (2,20,underworld) in Ashwaz.
//   South : cavern (1,23,underworld) in Ashwaz.
//   Southwest : cavern (0,22,underworld) in Ashwaz.

// - City Guard (258), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// - eye (3236), under dwarf [UDWA].
// * Grey Scout (2758), Grey Wind (17), avoiding, behind, revealing
//   faction, tribal elf [TELF], 64 silver [SILV]. Weight: 10. Capacity:
//   0/0/15/0. Skills: combat [COMB] 2 (90).

// underforest (43,39,underworld) in Aletiss, contains Dorbroddor [city],
//   4288 peasants (darkmen), $21440.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $15 (Max: $12864).
//   Wanted: 146 grain [GRAI] at $23, 100 livestock [LIVE] at $26, 89
//     swords [SWOR] at $108, 95 perfume [PERF] at $158, 81 silk [SILK]
//     at $171.
//   For Sale: 96 iron [IRON] at $56, 96 wood [WOOD] at $56, 68 plate
//     armor [PARM] at $420, 53 dye [DYE] at $84, 57 wool [WOOL] at $70,
//     857 darkmen [DMAN] at $60, 171 leaders [LEAD] at $120.
//   Entertainment available: $1072.
//   Products: 10 grain [GRAI], 16 wood [WOOD], 15 stone [STON], 17 iron
//     [IRON].

// Exits:
//   Northeast : tunnels (44,38,underworld) in Lorathlun.
//   South : underforest (43,41,underworld) in Aletiss.
//   Southwest : underforest (42,40,underworld) in Aletiss.
//   Northwest : underforest (42,38,underworld) in Aletiss.

// - City Guard (275), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// - Clown (1744), SkyRaiders (14), avoiding, behind, under dwarf [UDWA].
// - eye (2995), SkyRaiders (14), avoiding, behind, darkman [DMAN].
// * Harpers (1712), Grey Wind (17), avoiding, behind, revealing faction,
//   4 darkmen [DMAN], 80 silver [SILV]. Weight: 40. Capacity: 0/0/60/0.
//   Skills: entertainment [ENTE] 1 (30).

// underforest (42,44,underworld) in Aletiss, contains Schodild [city],
//   5067 peasants (orcs), $30402.
// ------------------------------------------------------------
//   The weather was clear last month; it will be clear next month.
//   Wages: $16 (Max: $16214).
//   Wanted: 162 grain [GRAI] at $26, 186 livestock [LIVE] at $24, 88
//     swords [SWOR] at $108, 64 crossbows [XBOW] at $126, 59 wagons
//     [WAGO] at $164, 62 jewelry [JEWE] at $165, 76 tarot cards [TARO]
//     at $146.
//   For Sale: 94 wood [WOOD] at $57, 86 stone [STON] at $58, 93 plate
//     armor [PARM] at $402, 64 ivory [IVOR] at $77, 74 silk [SILK] at
//     $70, 1013 orcs [ORC] at $64, 202 leaders [LEAD] at $128.
//   Entertainment available: $1520.
//   Products: 17 grain [GRAI], 14 wood [WOOD], 11 stone [STON], 10 iron
//     [IRON].

// Exits:
//   Northeast : underforest (43,43,underworld) in Aletiss.
//   Southeast : underforest (43,45,underworld) in Aletiss.
//   South : tunnels (42,46,underworld) in Draerusk.
//   Southwest : tunnels (41,45,underworld) in Draerusk.

// - City Guard (277), on guard, 120 leaders [LEAD], 120 swords [SWOR].
// - Clown (1620), SkyRaiders (14), avoiding, behind, horse [HORS], nomad
//   [NOMA].
// - eye (2996), SkyRaiders (14), avoiding, behind, orc [ORC].
// * Grey Scout (2757), Grey Wind (17), avoiding, behind, revealing
//   faction, taxing, tribal elf [TELF], 80 silver [SILV]. Weight: 10.
//   Capacity: 0/0/15/0. Skills: combat [COMB] 2 (90).

// Orders Template (Long Format):

// #atlantis 17 "travellerawaits"

// ;*** swamp (90,16) in Methven, contains Larusk [city] ***

// unit 2490
// ;Grey Scout (2490), avoiding, behind, revealing faction, tribal elf
// ;  [TELF], 34 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  none.
// @work

// ;*** swamp (92,16) in Kekeloh, contains Volburg [city] ***

// unit 3013
// ;Workers (3013), avoiding, behind, revealing faction, 2 vikings [VIKI],
// ;  38 silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills: none.
// @work

// ;*** plain (2,18) in Dezhou, contains Waidgrad [city] ***

// unit 3137
// ;Workers (3137), avoiding, behind, revealing faction, 2 plainsmen
// ;  [PLAI], 23 silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills:
// ;  none.
// @work

// ;*** plain (64,18) in Satiasam ***

// unit 2944
// ;Grey Scout (2944), avoiding, behind, revealing faction, taxing, viking
// ;  [VIKI], 80 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  combat [COMB] 1 (30).

// ;*** swamp (92,18) in Kekeloh, contains Hatria [city] ***

// unit 2941
// ;Workers (2941), avoiding, behind, revealing faction, 2 tribesmen
// ;  [TMAN], 8 silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills:
// ;  none.
// @work

// ;*** plain (3,19) in Dezhou, contains Seetouburg [town] ***

// unit 3247
// ;Workers (3247), avoiding, behind, revealing faction, sea elf [SELF],
// ;  72 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: none.
// @work

// ;*** swamp (93,19) in Kekeloh, contains Inaid [city] ***

// unit 2527
// ;Workers (2527), avoiding, behind, revealing faction, 2 tribal elves
// ;  [TELF], 56 silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills:
// ;  none.
// @work

// ;*** plain (4,20) in Dezhou, contains Lothsorost [city] ***

// unit 2081
// ;Grey Scout (2081), avoiding, behind, revealing faction, sea elf
// ;  [SELF], 54 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  combat [COMB] 1 (30).
// @work

// ;*** plain (62,22) in Satiasam ***

// unit 2943
// ;Grey Scout (2943), avoiding, behind, revealing faction, viking [VIKI],
// ;  206 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
// ;  [COMB] 1 (30).

// ;*** swamp (65,23) in Skelid, contains W'tiaenth [city] ***

// unit 3142
// ;Workers (3142), avoiding, behind, revealing faction, tribesman [TMAN],
// ;  25 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: none.
// @work

// ;*** forest (60,26) in Nugyru ***

// unit 2942
// ;Grey Scout (2942), avoiding, behind, revealing faction, viking [VIKI],
// ;  323 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
// ;  [COMB] 1 (30).

// ;*** mountain (68,26) in Phidyntia, contains Oroldu [city] ***

// unit 1840
// ;Grey Ambassador (1840), avoiding, behind, revealing faction, leader
// ;  [LEAD], 116 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  entertainment [ENTE] 2 (90), combat [COMB] 1 (60), observation
// ;  [OBSE] 4 (360).
// @study "observation"

// unit 1863
// ;Harpers (1863), avoiding, behind, revealing faction, 5 vikings [VIKI],
// ;  121 silver [SILV]. Weight: 50. Capacity: 0/0/75/0. Skills:
// ;  entertainment [ENTE] 2 (90).
// @entertain

// unit 2080
// ;Workers (2080), avoiding, behind, revealing faction, 120 vikings
// ;  [VIKI], 1447 silver [SILV]. Weight: 1200. Capacity: 0/0/1800/0.
// ;  Skills: none.
// @work

// ;*** plain (84,26) in Reilnon, contains Iaia [city] ***

// unit 2082
// ;Grey Scout (2082), avoiding, behind, revealing faction, sea elf
// ;  [SELF], 68 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  combat [COMB] 1 (30).
// @work

// ;*** mountain (92,26) in Lingen, contains Delgnal [village] ***

// unit 2167
// ;Workers (2167), avoiding, behind, revealing faction, 24 hill dwarves
// ;  [HDWA], 23 silver [SILV]. Weight: 240. Capacity: 0/0/360/0. Skills:
// ;  none.
// @work

// unit 1607
// ;Harpers (1607), avoiding, behind, revealing faction, 5 hill dwarves
// ;  [HDWA]. Weight: 50. Capacity: 0/0/75/0. Skills: entertainment [ENTE]
// ;  2 (90).

// ;*** mountain (93,27) in Lingen ***

// unit 2317
// ;Knight (2317), on guard, revealing faction, taxing, leader [LEAD], 4
// ;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
// ;  4 (300), riding [RIDI] 4 (360).

// unit 2399
// ;Footmen (2399), on guard, revealing faction, taxing, 10 sea elves
// ;  [SELF], 602 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
// ;  combat [COMB] 2 (90).
// @work

// unit 2491
// ;Elven Stonemelders (2491), avoiding, behind, revealing faction, 5 sea
// ;  elves [SELF], 5 stone [STON], 105 silver [SILV]. Weight: 300.
// ;  Capacity: 0/0/75/0. Skills: quarrying [QUAR] 1 (30).
// @work

// unit 2638
// ;Knight (2638), on guard, revealing faction, taxing, leader [LEAD], 99
// ;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
// ;  4 (300), riding [RIDI] 4 (300).

// unit 2639
// ;Knight (2639), on guard, revealing faction, taxing, leader [LEAD], 135
// ;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
// ;  4 (360), riding [RIDI] 4 (300).

// unit 2640
// ;Knight (2640), on guard, revealing faction, taxing, leader [LEAD], 127
// ;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
// ;  4 (300), riding [RIDI] 4 (300).

// unit 2641
// ;Knight (2641), on guard, revealing faction, taxing, leader [LEAD], 200
// ;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
// ;  4 (330), riding [RIDI] 4 (300).

// unit 2642
// ;Knight (2642), on guard, revealing faction, taxing, leader [LEAD], 178
// ;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
// ;  4 (330), riding [RIDI] 4 (300).

// unit 2643
// ;Knight (2643), on guard, revealing faction, taxing, leader [LEAD], 15
// ;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
// ;  4 (330), riding [RIDI] 4 (300).

// unit 2946
// ;Harpers (2946), avoiding, behind, revealing faction, 2 sea elves
// ;  [SELF], 114 silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills:
// ;  entertainment [ENTE] 2 (90).
// @entertain

// unit 2528
// ;Elven Builders (2528), avoiding, behind, revealing faction, 5 sea
// ;  elves [SELF], 105 silver [SILV]. Weight: 50. Capacity: 0/0/75/0.
// ;  Skills: building [BUIL] 1 (30).
// @work

// unit 3222
// ;Knight (3222), on guard, revealing faction, taxing, leader [LEAD], 53
// ;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
// ;  4 (300), riding [RIDI] 1 (60).

// unit 3267
// ;Knight (3267), on guard, revealing faction, taxing, leader [LEAD], 53
// ;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
// ;  4 (300), riding [RIDI] 1 (60).

// unit 3301
// ;Knight (3301), on guard, revealing faction, taxing, leader [LEAD], 53
// ;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
// ;  4 (300), riding [RIDI] 1 (60).

// unit 1630
// ;Footmen (1630), on guard, revealing faction, taxing, 10 sea elves
// ;  [SELF], 302 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
// ;  combat [COMB] 1 (30).
// @work

// unit 1642
// ;Footmen (1642), on guard, revealing faction, taxing, 10 sea elves
// ;  [SELF], 554 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
// ;  combat [COMB] 1 (30).
// @work

// unit 1977
// ;Grey Ambassador (1977), avoiding, behind, revealing faction, leader
// ;  [LEAD], 9 horses [HORS], 5 swords [SWOR], 8 silver [SILV]. Weight:
// ;  465. Capacity: 0/630/645/0. Skills: combat [COMB] 2 (90),
// ;  entertainment [ENTE] 2 (120).

// unit 18
// ;Lady Isola (18), behind, revealing faction, holding, taxing, leader
// ;  [LEAD], sword [SWOR], chain armor [CARM], 132 silver [SILV]. Weight:
// ;  12. Capacity: 0/0/15/0. Skills: pattern [PATT] 3 (180), spirit
// ;  [SPIR] 2 (90), gate lore [GATE] 2 (90), combat [COMB] 1 (30), earth
// ;  lore [EART] 3 (180), force [FORC] 2 (90), bird lore [BIRD] 3 (180),
// ;  fire [FIRE] 1 (30), farsight [FARS] 1 (60), dragon lore [DRAG] 1
// ;  (60). Combat spell: fire [FIRE]. Can Study: fire [FIRE], earthquake
// ;  [EQUA], force shield [FSHI], energy shield [ESHI], spirit shield
// ;  [SSHI], magical healing [MHEA], farsight [FARS], mind reading
// ;  [MIND], weather lore [WEAT], wolf lore [WOLF], dragon lore [DRAG],
// ;  necromancy [NECR], demon lore [DEMO], illusion [ILLU], artifact lore
// ;  [ARTI].
// @study "dragon lore"
// @cast "dragon lore"

// unit 2318
// ;Seneschal (2318), behind, revealing faction, holding, taxing, leader
// ;  [LEAD], 102 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  observation [OBSE] 5 (450), combat [COMB] 2 (120), riding [RIDI] 2
// ;  (120).

// unit 2843
// ;Knight Commander (2843), behind, revealing faction, holding, taxing,
// ;  leader [LEAD], 60 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
// ;  Skills: tactics [TACT] 4 (420), combat [COMB] 1 (30).
// @study "tactics"

// ;*** jungle (73,29) in Donndinon, contains Alabrin-lum [city] ***

// unit 2945
// ;Grey Scout (2945), avoiding, behind, revealing faction, taxing, viking
// ;  [VIKI], 93 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  combat [COMB] 1 (30).

// ;*** forest (87,29) in Kawapo, contains Athbroduen [city] ***

// unit 3161
// ;Workers (3161), avoiding, behind, revealing faction, wood elf [WELF],
// ;  70 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: none.
// @work

// ;*** mountain (93,29) in Lingen, contains Sorfindon [city] ***

// unit 2169
// ;Workers (2169), avoiding, behind, revealing faction, 60 vikings
// ;  [VIKI], 240 silver [SILV]. Weight: 600. Capacity: 0/0/900/0. Skills:
// ;  none.
// @work

// unit 3237
// ;Master Harper (3237), avoiding, behind, revealing faction, leader
// ;  [LEAD], 20 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  entertainment [ENTE] 2 (90).
// @entertain

// unit 3209
// ;Grey Scout (3209), avoiding, behind, revealing faction, sea elf
// ;  [SELF], 30 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  combat [COMB] 1 (30).

// unit 3302
// ;Harpers (3302), avoiding, behind, revealing faction, 10 vikings
// ;  [VIKI], 300 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
// ;  entertainment [ENTE] 2 (90).
// @entertain

// unit 3307
// ;Harpers (3307), avoiding, behind, revealing faction, 10 vikings
// ;  [VIKI], 300 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
// ;  entertainment [ENTE] 2 (90).
// @entertain

// unit 2844
// ;Footmen (2844), revealing faction, 10 sea elves [SELF], 60 silver
// ;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 2
// ;  (90).
// @work

// unit 2845
// ;Footmen (2845), revealing faction, 10 sea elves [SELF], 60 silver
// ;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 2
// ;  (90).
// @work

// unit 2261
// ;Harpers (2261), avoiding, behind, revealing faction, 10 vikings
// ;  [VIKI]. Weight: 100. Capacity: 0/0/150/0. Skills: entertainment
// ;  [ENTE] 2 (90).

// unit 2947
// ;Archers (2947), behind, revealing faction, 10 sea elves [SELF], 4
// ;  longbows [LBOW], 60 silver [SILV]. Weight: 104. Capacity: 0/0/150/0.
// ;  Skills: longbow [LBOW] 3 (180).
// @work

// unit 2948
// ;Master Archer (2948), behind, revealing faction, leader [LEAD],
// ;  longbow [LBOW]. Weight: 11. Capacity: 0/0/15/0. Skills: longbow
// ;  [LBOW] 3 (210).
// @study "longbow"

// unit 3362
// ;Archers (3362), behind, revealing faction, 10 sea elves [SELF], 4
// ;  longbows [LBOW], 60 silver [SILV]. Weight: 104. Capacity: 0/0/150/0.
// ;  Skills: longbow [LBOW] 3 (180).
// @work

// unit 1614
// ;Footmen (1614), revealing faction, 10 sea elves [SELF], 60 silver
// ;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1
// ;  (30).

// unit 1616
// ;Footmen (1616), revealing faction, 10 sea elves [SELF], 60 silver
// ;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1
// ;  (30).

// unit 1657
// ;Footmen (1657), revealing faction, 10 sea elves [SELF], 60 silver
// ;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1
// ;  (30).

// ;*** forest (88,30) in Kawapo, contains Jervbygd [city] ***

// unit 2231
// ;Workers (2231), avoiding, behind, revealing faction, 12 sea elves
// ;  [SELF], 120 silver [SILV]. Weight: 120. Capacity: 0/0/180/0. Skills:
// ;  none.
// @work

// unit 2266
// ;Grey Scout (2266), avoiding, behind, revealing faction, 1917 silver
// ;  [SILV], horse [HORS], sea elf [SELF]. Weight: 60. Capacity:
// ;  0/70/85/0. Skills: none.

// unit 3456
// ;Grey Scout (3456), avoiding, behind, revealing faction, 797 silver
// ;  [SILV], horse [HORS], sea elf [SELF]. Weight: 60. Capacity:
// ;  0/70/85/0. Skills: none.

// ;*** forest (89,31) in Kawapo ***

// unit 2168
// ;Footmen (2168), on guard, revealing faction, taxing, 10 sea elves
// ;  [SELF], 430 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
// ;  combat [COMB] 2 (90).
// @work

// unit 2265
// ;Footmen (2265), revealing faction, 10 vikings [VIKI]. Weight: 100.
// ;  Capacity: 0/0/150/0. Skills: combat [COMB] 1 (30).

// ;*** forest (91,31) in Kawapo ***

// unit 3094
// ;Footmen (3094), on guard, revealing faction, taxing, 5 hill dwarves
// ;  [HDWA], 382 silver [SILV]. Weight: 50. Capacity: 0/0/75/0. Skills:
// ;  combat [COMB] 3 (180).
// @work

// unit 3363
// ;Footmen (3363), on guard, revealing faction, taxing, 5 sea elves
// ;  [SELF], 508 silver [SILV]. Weight: 50. Capacity: 0/0/75/0. Skills:
// ;  combat [COMB] 1 (30).
// @work

// unit 3444
// ;Knight (3444), revealing faction, leader [LEAD]. Weight: 10. Capacity:
// ;  0/0/15/0. Skills: combat [COMB] 1 (30).
// @study "combat"

// unit 1676
// ;Grey Scout (1676), avoiding, behind, revealing faction, viking [VIKI],
// ;  2 horses [HORS], 5 longbows [LBOW]. Weight: 115. Capacity:
// ;  0/140/155/0. Skills: none.

// unit 3435
// ;Grey Scout (3435), avoiding, behind, leader [LEAD], 2211 silver
// ;  [SILV], horse [HORS]. Weight: 60. Capacity: 0/70/85/0. Skills:
// ;  stealth [STEA] 2 (90).
// MOVE SW NW NW

// ;*** forest (90,32) in Kawapo ***

// unit 3265
// ;Footmen (3265), on guard, revealing faction, taxing, 5 sea elves
// ;  [SELF], 270 silver [SILV]. Weight: 50. Capacity: 0/0/75/0. Skills:
// ;  combat [COMB] 1 (36).
// @work

// unit 1677
// ;Footmen (1677), on guard, revealing faction, taxing, 5 sea elves
// ;  [SELF], 270 silver [SILV]. Weight: 50. Capacity: 0/0/75/0. Skills:
// ;  combat [COMB] 1 (30).
// @work

// ;*** swamp (2,40) in Brandor ***

// unit 2084
// ;Grey Scout (2084), avoiding, behind, revealing faction, taxing, tribal
// ;  elf [TELF], 80 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
// ;  Skills: combat [COMB] 1 (60).

// ;*** jungle (3,43) in Zogghul, contains Munddotn [city] ***

// unit 1686
// ;Workers (1686), avoiding, behind, revealing faction, 16 silver [SILV],
// ;  2 sea elves [SELF]. Weight: 20. Capacity: 0/0/30/0. Skills: none.
// @work

// ;*** jungle (4,48) in Zogghul, contains Kinccer [city] ***

// unit 3248
// ;Workers (3248), avoiding, behind, revealing faction, 47 silver [SILV],
// ;  7 tribesmen [TMAN]. Weight: 70. Capacity: 0/0/105/0. Skills: none.
// @work

// unit 2267
// ;Grey Scout (2267), avoiding, behind, revealing faction, 64 silver
// ;  [SILV], high elf [HELF], 4 horses [HORS]. Weight: 210. Capacity:
// ;  0/280/295/0. Skills: none.

// ;*** plain (1,51) in Killorglin, contains Eyldaton [village] ***

// unit 2949
// ;Workers (2949), avoiding, behind, revealing faction, 8 high elves
// ;  [HELF], 112 silver [SILV]. Weight: 80. Capacity: 0/0/120/0. Skills:
// ;  none.
// @work

// ;*** plain (3,53) in Killorglin, contains Riecvoltan [city] ***

// unit 3014
// ;Workers (3014), avoiding, behind, revealing faction, 160 silver
// ;  [SILV], 4 high elves [HELF]. Weight: 40. Capacity: 0/0/60/0. Skills:
// ;  none.
// @work

// unit 2085
// ;Grey Scout (2085), avoiding, behind, revealing faction, tribal elf
// ;  [TELF], 146 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  combat [COMB] 2 (90).

// ;*** desert (2,56) in Binhai, contains Inuen [city] ***

// unit 2644
// ;Workers (2644), avoiding, behind, revealing faction, 7 vikings [VIKI],
// ;  360 silver [SILV]. Weight: 70. Capacity: 0/0/105/0. Skills: none.
// @work

// ;*** desert (2,58) in Binhai, contains Tral [city] ***

// unit 2400
// ;Workers (2400), avoiding, behind, revealing faction, 6 vikings [VIKI],
// ;  393 silver [SILV]. Weight: 60. Capacity: 0/0/90/0. Skills: none.
// @work

// unit 2057
// ;Grey Ambassador (2057), avoiding, behind, revealing faction, leader
// ;  [LEAD], 200 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  combat [COMB] 3 (180), observation [OBSE] 1 (30), entertainment
// ;  [ENTE] 2 (90).
// @entertain

// ;*** desert (95,59) in Binhai ***

// unit 2319
// ;Grey Scout (2319), avoiding, behind, revealing faction, taxing, tribal
// ;  elf [TELF], 200 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
// ;  Skills: combat [COMB] 2 (90).
// MOVE NE NE N N NE SE

// ;*** desert (70,62) in Beaubur ***

// unit 2238
// ;Grey Scout (2238), avoiding, behind, revealing faction, hill dwarf
// ;  [HDWA]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 1
// ;  (60).

// ;*** plain (93,63) in Nosen, contains Kar-mun [town] ***

// unit 2232
// ;Workers (2232), avoiding, behind, revealing faction, 286 silver
// ;  [SILV], 8 plainsmen [PLAI]. Weight: 80. Capacity: 0/0/120/0. Skills:
// ;  none.
// @work

// ;*** jungle (70,64) in Belver, contains Yriaberg [city] ***

// unit 2306
// ;Workers (2306), avoiding, behind, revealing faction, tribal elf
// ;  [TELF], 12 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  none.
// @work

// ;*** desert (5,65) in Sayqua, contains Dwor-ungol [city] ***

// unit 2645
// ;Workers (2645), avoiding, behind, revealing faction, 189 silver
// ;  [SILV], 20 desert dwarves [DDWA]. Weight: 200. Capacity: 0/0/300/0.
// ;  Skills: none.
// @work

// ;*** plain (65,65) in Ranaw, contains Turfold [city] ***

// unit 1923
// ;Grey Scout (1923), avoiding, behind, revealing faction, barbarian
// ;  [BARB], 220 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  combat [COMB] 2 (90).

// ;*** plain (92,66) in Nosen, contains Breuneuburg [city] ***

// unit 2846
// ;Workers (2846), avoiding, behind, revealing faction, 5 high elves
// ;  [HELF], 260 silver [SILV]. Weight: 50. Capacity: 0/0/75/0. Skills:
// ;  none.
// @work

// ;*** jungle (71,67) in Belver, contains Ingard'w [city] ***

// unit 3436
// ;Workers (3436), avoiding, behind, revealing faction, 5 tribal elves
// ;  [TELF], 38 silver [SILV]. Weight: 50. Capacity: 0/0/75/0. Skills:
// ;  none.
// @work

// ;*** plain (89,69) in Negar, contains Rirdieberg [city] ***

// unit 2760
// ;Workers (2760), avoiding, behind, revealing faction, 15 nomads [NOMA],
// ;  543 silver [SILV]. Weight: 150. Capacity: 0/0/225/0. Skills: none.
// @work

// ;*** desert (6,70) in Sayqua ***

// unit 1779
// ;Grey Scout (1779), avoiding, behind, revealing faction, taxing, viking
// ;  [VIKI], 91 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  combat [COMB] 1 (30).
// MOVE SE SE SE S SE SE SE

// ;*** forest (3,71) in U'osad, contains Mun-kai [city] ***

// unit 2170
// ;Workers (2170), avoiding, behind, revealing faction, 4 wood elves
// ;  [WELF], 335 silver [SILV]. Weight: 40. Capacity: 0/0/60/0. Skills:
// ;  none.
// @work

// ;*** forest (8,72) in Snyaldshy, contains Mundvoltan [village] ***

// unit 2530
// ;Workers (2530), avoiding, behind, revealing faction, 24 silver [SILV],
// ;  2 wood elves [WELF]. Weight: 20. Capacity: 0/0/30/0. Skills: none.
// @work

// ;*** forest (3,73) in U'osad ***

// unit 2529
// ;Grey Scout (2529), avoiding, behind, revealing faction, taxing,
// ;  plainsman [PLAI], 169 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
// ;  Skills: combat [COMB] 1 (60).
// MOVE N

// ;*** forest (7,73) in Snyaldshy, contains Asend [city] ***

// unit 2492
// ;Workers (2492), avoiding, behind, revealing faction, 12 wood elves
// ;  [WELF], 179 silver [SILV]. Weight: 120. Capacity: 0/0/180/0. Skills:
// ;  none.
// @work

// ;*** forest (0,74) in U'osad, contains Kae-yik [city] ***

// unit 3316
// ;Workers (3316), avoiding, behind, revealing faction, 5 wood elves
// ;  [WELF], 180 silver [SILV]. Weight: 50. Capacity: 0/0/75/0. Skills:
// ;  none.
// @work

// ;*** swamp (67,75) in Tourlanque, contains Forbrin-dum [city] ***

// unit 2531
// ;Workers (2531), avoiding, behind, revealing faction, 26 tribesmen
// ;  [TMAN], 162 silver [SILV]. Weight: 260. Capacity: 0/0/390/0. Skills:
// ;  none.
// @work

// ;*** forest (14,76) in Cadel ***

// unit 1778
// ;Grey Scout (1778), avoiding, behind, revealing faction, viking [VIKI],
// ;  289 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
// ;  [COMB] 2 (90).

// ;*** forest (11,77) in Cadel ***

// unit 2087
// ;Grey Scout (2087), avoiding, behind, revealing faction, taxing, tribal
// ;  elf [TELF], 120 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
// ;  Skills: combat [COMB] 2 (90).
// MOVE S

// ;*** plain (71,77) in Hullevala, contains Ollo-krag [village] ***

// unit 2950
// ;Workers (2950), avoiding, behind, revealing faction, 10 nomads [NOMA],
// ;  172 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: none.
// @work

// ;*** plain (73,77) in Hullevala, contains Lothmarund [town] ***

// unit 3031
// ;Workers (3031), avoiding, behind, revealing faction, 2 sea elves
// ;  [SELF], 54 silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills:
// ;  none.
// @work

// ;*** swamp (95,77) in Rayting, contains Sei-yuss [village] ***

// unit 3364
// ;Workers (3364), avoiding, behind, revealing faction, 6 tribesmen
// ;  [TMAN], 120 silver [SILV]. Weight: 60. Capacity: 0/0/90/0. Skills:
// ;  none.
// @work

// ;*** forest (5,79) in Crerakroth, contains Doedbygd [city] ***

// unit 2058
// ;Harpers (2058), avoiding, behind, revealing faction, 10 wood elves
// ;  [WELF], 1380 silver [SILV]. Weight: 100. Capacity: 0/0/150/0.
// ;  Skills: entertainment [ENTE] 3 (180).
// @entertain

// unit 2233
// ;Master Harper (2233), avoiding, behind, revealing faction, taxing,
// ;  leader [LEAD], 46 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
// ;  Skills: entertainment [ENTE] 3 (210), combat [COMB] 1 (30),
// ;  observation [OBSE] 1 (60).
// @study "observation"

// unit 2234
// ;Harpers (2234), avoiding, behind, revealing faction, 10 wood elves
// ;  [WELF], 1239 silver [SILV]. Weight: 100. Capacity: 0/0/150/0.
// ;  Skills: entertainment [ENTE] 3 (180).
// @entertain

// unit 2646
// ;Workers (2646), avoiding, behind, revealing faction, 40 wood elves
// ;  [WELF], 754 silver [SILV]. Weight: 400. Capacity: 0/0/600/0. Skills:
// ;  none.
// @work

// unit 3143
// ;Harpers (3143), avoiding, behind, revealing faction, 10 wood elves
// ;  [WELF], 398 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
// ;  entertainment [ENTE] 3 (180).

// unit 3317
// ;Footmen (3317), on guard, revealing faction, taxing, 20 wood elves
// ;  [WELF], 4035 silver [SILV]. Weight: 200. Capacity: 0/0/300/0.
// ;  Skills: combat [COMB] 1 (60).
// @work

// unit 3437
// ;Footmen (3437), on guard, revealing faction, taxing, 20 wood elves
// ;  [WELF], 3024 silver [SILV]. Weight: 200. Capacity: 0/0/300/0.
// ;  Skills: combat [COMB] 1 (30).
// @work

// ;*** forest (67,79) in Monfor ***

// unit 2533
// ;Footmen (2533), on guard, revealing faction, taxing, 10 barbarians
// ;  [BARB], 192 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
// ;  combat [COMB] 3 (180).
// @work

// unit 3366
// ;Footmen (3366), on guard, revealing faction, taxing, 10 wood elves
// ;  [WELF], 316 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
// ;  combat [COMB] 1 (30).
// @work

// unit 3367
// ;Master Archer (3367), behind, revealing faction, taxing, leader
// ;  [LEAD], longbow [LBOW]. Weight: 11. Capacity: 0/0/15/0. Skills:
// ;  longbow [LBOW] 2 (120).
// @study "longbow"

// unit 3368
// ;Master Archer (3368), behind, revealing faction, taxing, leader
// ;  [LEAD], longbow [LBOW], 5 silver [SILV]. Weight: 11. Capacity:
// ;  0/0/15/0. Skills: longbow [LBOW] 2 (90).

// unit 3369
// ;Master Archer (3369), behind, revealing faction, taxing, leader
// ;  [LEAD], longbow [LBOW], 6 silver [SILV]. Weight: 11. Capacity:
// ;  0/0/15/0. Skills: longbow [LBOW] 2 (90).

// unit 3370
// ;Master Archer (3370), behind, revealing faction, taxing, leader
// ;  [LEAD], longbow [LBOW]. Weight: 11. Capacity: 0/0/15/0. Skills:
// ;  longbow [LBOW] 2 (90).

// unit 3371
// ;Master Archer (3371), behind, revealing faction, taxing, leader
// ;  [LEAD], longbow [LBOW]. Weight: 11. Capacity: 0/0/15/0. Skills:
// ;  longbow [LBOW] 2 (90).

// unit 3372
// ;Archers (3372), behind, revealing faction, taxing, 10 wood elves
// ;  [WELF], 10 longbows [LBOW], 100 silver [SILV]. Weight: 110.
// ;  Capacity: 0/0/150/0. Skills: longbow [LBOW] 2 (120).

// unit 3373
// ;Archers (3373), behind, revealing faction, taxing, 10 wood elves
// ;  [WELF], 10 longbows [LBOW], 100 silver [SILV]. Weight: 110.
// ;  Capacity: 0/0/150/0. Skills: longbow [LBOW] 2 (120).

// unit 3438
// ;Knight (3438), on guard, revealing faction, taxing, leader [LEAD].
// ;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 2 (90), riding
// ;  [RIDI] 1 (30).

// unit 3439
// ;Grey Scout (3439), avoiding, behind, revealing faction, 4 horses
// ;  [HORS], barbarian [BARB], 5 silver [SILV], 15 longbows [LBOW].
// ;  Weight: 225. Capacity: 0/280/295/0. Skills: none.

// ;*** forest (6,80) in Crerakroth, contains Ardvale [city] ***

// unit 1841
// ;Workers (1841), avoiding, behind, revealing faction, 40 vikings
// ;  [VIKI], 530 silver [SILV]. Weight: 400. Capacity: 0/0/600/0. Skills:
// ;  none.
// @work

// unit 1864
// ;Harpers (1864), avoiding, behind, revealing faction, 5 wood elves
// ;  [WELF], 250 silver [SILV]. Weight: 50. Capacity: 0/0/75/0. Skills:
// ;  entertainment [ENTE] 3 (180).
// @entertain

// unit 2088
// ;Grey Ambassador (2088), avoiding, behind, revealing faction, leader
// ;  [LEAD], 35 silver [SILV], horse [HORS], sword [SWOR]. Weight: 61.
// ;  Capacity: 0/70/85/0. Skills: entertainment [ENTE] 3 (180), combat
// ;  [COMB] 3 (180), riding [RIDI] 2 (90).

// unit 2218
// ;Grey Scout (2218), behind, revealing faction, leader [LEAD], horse
// ;  [HORS], sword [SWOR], 50 silver [SILV]. Weight: 61. Capacity:
// ;  0/70/85/0. Skills: observation [OBSE] 5 (450), combat [COMB] 2
// ;  (120), riding [RIDI] 2 (90), tactics [TACT] 1 (30).
// @study "tactics"

// unit 3162
// ;Harpers (3162), avoiding, behind, revealing faction, 5 wood elves
// ;  [WELF], 250 silver [SILV]. Weight: 50. Capacity: 0/0/75/0. Skills:
// ;  entertainment [ENTE] 3 (180).
// @entertain

// unit 3457
// ;Footmen (3457), avoiding, behind, revealing faction, 20 vikings
// ;  [VIKI]. Weight: 200. Capacity: 0/0/300/0. Skills: combat [COMB] 1
// ;  (45).
// @study "combat"

// unit 1217
// ;Lord Eristan (1217), behind, revealing faction, flying battle spoils,
// ;  leader [LEAD], 3 dragons [DRAG], 81 silver [SILV], sword [SWOR],
// ;  chain armor [CARM], eagle [EAGL]. Weight: 772. Capacity:
// ;  915/915/930/0. Skills: pattern [PATT] 4 (300), earth lore [EART] 3
// ;  (270), bird lore [BIRD] 3 (180), force [FORC] 3 (180), fire [FIRE] 2
// ;  (90), dragon lore [DRAG] 3 (180), spirit [SPIR] 1 (30), observation
// ;  [OBSE] 1 (30), farsight [FARS] 1 (30). Combat spell: fire [FIRE].
// ;  Can Study: fire [FIRE], earthquake [EQUA], force shield [FSHI],
// ;  energy shield [ESHI], spirit shield [SSHI], magical healing [MHEA],
// ;  gate lore [GATE], mind reading [MIND], weather lore [WEAT], earth
// ;  lore [EART], wolf lore [WOLF], necromancy [NECR], demon lore [DEMO],
// ;  illusion [ILLU], artifact lore [ARTI].

// unit 1777
// ;Prince Tirion (1777), behind, revealing faction, leader [LEAD], 3
// ;  dragons [DRAG], sword [SWOR], chain armor [CARM], 87 silver [SILV],
// ;  eagle [EAGL]. Weight: 772. Capacity: 915/915/930/0. Skills: pattern
// ;  [PATT] 4 (300), earth lore [EART] 3 (180), bird lore [BIRD] 3 (180),
// ;  dragon lore [DRAG] 3 (180), force [FORC] 2 (120), fire [FIRE] 1
// ;  (60), spirit [SPIR] 1 (60), artifact lore [ARTI] 1 (30), enchant
// ;  swords [ESWO] 1 (30). Combat spell: fire [FIRE]. Can Study: fire
// ;  [FIRE], earthquake [EQUA], force shield [FSHI], energy shield
// ;  [ESHI], spirit shield [SSHI], magical healing [MHEA], gate lore
// ;  [GATE], farsight [FARS], mind reading [MIND], weather lore [WEAT],
// ;  earth lore [EART], wolf lore [WOLF], necromancy [NECR], demon lore
// ;  [DEMO], illusion [ILLU], enchant armor [EARM].

// ;*** mountain (66,80) in Baibur, contains Porthcawl [city] ***

// unit 2493
// ;Workers (2493), avoiding, behind, revealing faction, 6 hill dwarves
// ;  [HDWA], 54 silver [SILV], horse [HORS]. Weight: 110. Capacity:
// ;  0/70/160/0. Skills: none.
// @work

// ;*** mountain (68,80) in Inber, contains Nyon [city] ***

// unit 2089
// ;Workers (2089), avoiding, behind, revealing faction, 12 hill dwarves
// ;  [HDWA], 72 silver [SILV]. Weight: 120. Capacity: 0/0/180/0. Skills:
// ;  none.
// @work

// unit 1689
// ;Grey Scout (1689), avoiding, behind, revealing faction, horse [HORS],
// ;  barbarian [BARB], 853 silver [SILV]. Weight: 60. Capacity:
// ;  0/70/85/0. Skills: none.

// ;*** swamp (3,81) in Baibrun ***

// unit 2086
// ;Grey Scout (2086), avoiding, behind, revealing faction, tribal elf
// ;  [TELF], 3 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  combat [COMB] 2 (90).
// MOVE SE

// ;*** mountain (65,81) in Baibur, contains Navenby [city] ***

// unit 2647
// ;Workers (2647), avoiding, behind, revealing faction, 2 hill dwarves
// ;  [HDWA], 60 silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills:
// ;  none.
// @work

// ;*** plain (6,82) in Condorund, contains Gon-killuk [city] ***

// unit 1978
// ;Grey Ambassador (1978), on guard, revealing faction, taxing, leader
// ;  [LEAD], 25 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  combat [COMB] 2 (90), entertainment [ENTE] 2 (90), observation
// ;  [OBSE] 3 (180).
// @study "observation"

// unit 2235
// ;Workers (2235), avoiding, behind, revealing faction, 20 nomads [NOMA],
// ;  354 silver [SILV]. Weight: 200. Capacity: 0/0/300/0. Skills: none.
// @work

// unit 3365
// ;Footmen (3365), on guard, revealing faction, taxing, 20 wood elves
// ;  [WELF], 2190 silver [SILV]. Weight: 200. Capacity: 0/0/300/0.
// ;  Skills: combat [COMB] 1 (30).
// @work

// unit 2309
// ;Footmen (2309), on guard, revealing faction, taxing, 20 nomads [NOMA],
// ;  509 silver [SILV]. Weight: 200. Capacity: 0/0/300/0. Skills: combat
// ;  [COMB] 1 (60).
// @study "combat"

// ;*** mountain (64,82) in Baibur, contains Belport [city] ***

// unit 2951
// ;Workers (2951), avoiding, behind, revealing faction, 2 barbarians
// ;  [BARB], 50 silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills:
// ;  none.
// @work

// ;*** mountain (66,82) in Baibur, contains Bihat [town] ***

// unit 2532
// ;Workers (2532), avoiding, behind, revealing faction, 14 barbarians
// ;  [BARB], 92 silver [SILV]. Weight: 140. Capacity: 0/0/210/0. Skills:
// ;  none.
// @work

// unit 3249
// ;Grey Scout (3249), avoiding, behind, revealing faction, orc [ORC],
// ;  horse [HORS], 1039 silver [SILV]. Weight: 60. Capacity: 0/70/85/0.
// ;  Skills: none.

// ;*** mountain (68,82) in Inber ***

// unit 3032
// ;Knight (3032), on guard, revealing faction, taxing, leader [LEAD],
// ;  horse [HORS], sword [SWOR]. Weight: 61. Capacity: 0/70/85/0. Skills:
// ;  combat [COMB] 2 (150), riding [RIDI] 2 (120).

// unit 3095
// ;Footmen (3095), on guard, revealing faction, taxing, 10 barbarians
// ;  [BARB], 185 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
// ;  combat [COMB] 1 (60).
// @work

// unit 3286
// ;Footmen (3286), on guard, revealing faction, taxing, 10 barbarians
// ;  [BARB], 258 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
// ;  combat [COMB] 1 (60).
// @work

// unit 3287
// ;Footmen (3287), on guard, revealing faction, taxing, 10 barbarians
// ;  [BARB], 258 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
// ;  combat [COMB] 1 (60).
// @work

// unit 3374
// ;Knight (3374), on guard, revealing faction, taxing, leader [LEAD],
// ;  horse [HORS], sword [SWOR]. Weight: 61. Capacity: 0/70/85/0. Skills:
// ;  combat [COMB] 2 (90), riding [RIDI] 2 (90).

// unit 3375
// ;Knight (3375), on guard, revealing faction, taxing, leader [LEAD],
// ;  horse [HORS], sword [SWOR], 2 silver [SILV]. Weight: 61. Capacity:
// ;  0/70/85/0. Skills: combat [COMB] 2 (120), riding [RIDI] 2 (90).

// unit 3376
// ;Knight (3376), on guard, revealing faction, taxing, leader [LEAD],
// ;  horse [HORS], sword [SWOR]. Weight: 61. Capacity: 0/70/85/0. Skills:
// ;  combat [COMB] 2 (120), riding [RIDI] 2 (120).

// unit 3377
// ;Knight (3377), on guard, revealing faction, taxing, leader [LEAD],
// ;  horse [HORS], sword [SWOR]. Weight: 61. Capacity: 0/70/85/0. Skills:
// ;  combat [COMB] 2 (120), riding [RIDI] 2 (120).

// unit 3378
// ;Knight (3378), on guard, revealing faction, taxing, leader [LEAD],
// ;  horse [HORS], sword [SWOR]. Weight: 61. Capacity: 0/70/85/0. Skills:
// ;  combat [COMB] 2 (120), riding [RIDI] 2 (120).

// unit 3379
// ;Knight (3379), on guard, revealing faction, taxing, leader [LEAD],
// ;  horse [HORS], sword [SWOR]. Weight: 61. Capacity: 0/70/85/0. Skills:
// ;  combat [COMB] 2 (120), riding [RIDI] 2 (120).

// unit 3380
// ;Knight (3380), on guard, revealing faction, taxing, leader [LEAD],
// ;  horse [HORS], sword [SWOR]. Weight: 61. Capacity: 0/70/85/0. Skills:
// ;  combat [COMB] 2 (120), riding [RIDI] 2 (120).

// unit 3381
// ;Knight (3381), on guard, revealing faction, taxing, leader [LEAD],
// ;  horse [HORS], sword [SWOR]. Weight: 61. Capacity: 0/70/85/0. Skills:
// ;  combat [COMB] 2 (120), riding [RIDI] 2 (120).

// unit 3382
// ;Knight (3382), on guard, revealing faction, taxing, leader [LEAD],
// ;  horse [HORS], sword [SWOR]. Weight: 61. Capacity: 0/70/85/0. Skills:
// ;  combat [COMB] 2 (120), riding [RIDI] 2 (120).

// unit 3383
// ;Master Archer (3383), on guard, behind, revealing faction, taxing,
// ;  leader [LEAD], longbow [LBOW]. Weight: 11. Capacity: 0/0/15/0.
// ;  Skills: longbow [LBOW] 2 (120).
// @study "longbow"

// unit 3384
// ;Master Archer (3384), on guard, behind, revealing faction, taxing,
// ;  leader [LEAD], longbow [LBOW], 16 silver [SILV]. Weight: 11.
// ;  Capacity: 0/0/15/0. Skills: longbow [LBOW] 2 (90).

// unit 3385
// ;Master Archer (3385), on guard, behind, revealing faction, taxing,
// ;  leader [LEAD], longbow [LBOW], 16 silver [SILV]. Weight: 11.
// ;  Capacity: 0/0/15/0. Skills: longbow [LBOW] 2 (90).

// unit 3386
// ;Master Archer (3386), on guard, behind, revealing faction, taxing,
// ;  leader [LEAD], longbow [LBOW], 16 silver [SILV]. Weight: 11.
// ;  Capacity: 0/0/15/0. Skills: longbow [LBOW] 2 (90).

// ;*** mountain (63,83) in Baibur, contains Dunfanaghy [city] ***

// unit 1927
// ;Grey Scout (1927), avoiding, behind, revealing faction, barbarian
// ;  [BARB], 55 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  combat [COMB] 1 (60).

// ;*** mountain (67,83) in Baibur ***

// unit 2320
// ;Knight (2320), on guard, revealing faction, taxing, leader [LEAD],
// ;  horse [HORS]. Weight: 60. Capacity: 0/70/85/0. Skills: combat [COMB]
// ;  4 (330), riding [RIDI] 2 (90), observation [OBSE] 1 (30).

// unit 2761
// ;Footmen (2761), on guard, revealing faction, taxing, 10 barbarians
// ;  [BARB], 10 swords [SWOR], 295 silver [SILV]. Weight: 110. Capacity:
// ;  0/0/150/0. Skills: combat [COMB] 2 (120).
// @work

// unit 1704
// ;Footmen (1704), on guard, revealing faction, taxing, 10 orcs [ORC], 3
// ;  swords [SWOR], 300 silver [SILV]. Weight: 103. Capacity: 0/0/150/0.
// ;  Skills: combat [COMB] 1 (30).
// @work

// unit 1705
// ;Footmen (1705), on guard, revealing faction, taxing, 10 orcs [ORC], 3
// ;  swords [SWOR], 300 silver [SILV]. Weight: 103. Capacity: 0/0/150/0.
// ;  Skills: combat [COMB] 1 (30).
// @work

// unit 2311
// ;Knight (2311), on guard, revealing faction, taxing, leader [LEAD],
// ;  horse [HORS], sword [SWOR]. Weight: 61. Capacity: 0/70/85/0. Skills:
// ;  combat [COMB] 1 (60), riding [RIDI] 1 (60).

// unit 2336
// ;Knight (2336), on guard, revealing faction, taxing, leader [LEAD],
// ;  horse [HORS], sword [SWOR]. Weight: 61. Capacity: 0/70/85/0. Skills:
// ;  combat [COMB] 1 (60), riding [RIDI] 1 (60).

// unit 2377
// ;Knight (2377), on guard, revealing faction, taxing, leader [LEAD],
// ;  horse [HORS], sword [SWOR]. Weight: 61. Capacity: 0/70/85/0. Skills:
// ;  combat [COMB] 1 (60), riding [RIDI] 1 (60).

// unit 2392
// ;Knight (2392), on guard, revealing faction, taxing, leader [LEAD],
// ;  horse [HORS], sword [SWOR]. Weight: 61. Capacity: 0/70/85/0. Skills:
// ;  combat [COMB] 1 (60), riding [RIDI] 1 (60).

// unit 3458
// ;Knight (3458), avoiding, behind, revealing faction, sword [SWOR],
// ;  horse [HORS], leader [LEAD]. Weight: 61. Capacity: 0/70/85/0.
// ;  Skills: combat [COMB] 1 (30).
// @study "combat"

// unit 3459
// ;Knight (3459), avoiding, behind, revealing faction, sword [SWOR],
// ;  horse [HORS], leader [LEAD]. Weight: 61. Capacity: 0/70/85/0.
// ;  Skills: combat [COMB] 1 (30).
// @study "combat"

// unit 3460
// ;Knight (3460), avoiding, behind, revealing faction, sword [SWOR],
// ;  horse [HORS], leader [LEAD]. Weight: 61. Capacity: 0/70/85/0.
// ;  Skills: combat [COMB] 1 (30).
// @study "combat"

// unit 1926
// ;Grey Scout (1926), avoiding, behind, revealing faction, barbarian
// ;  [BARB], horse [HORS], 1327 silver [SILV]. Weight: 60. Capacity:
// ;  0/70/85/0. Skills: combat [COMB] 2 (120).

// ;*** mountain (69,83) in Inber ***

// unit 2953
// ;Knight (2953), on guard, revealing faction, taxing, leader [LEAD], 50
// ;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
// ;  4 (360), riding [RIDI] 1 (30).

// unit 3144
// ;Footmen (3144), revealing faction, 10 barbarians [BARB], 261 silver
// ;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1
// ;  (60).

// unit 3163
// ;Footmen (3163), on guard, revealing faction, taxing, 10 barbarians
// ;  [BARB], 540 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
// ;  combat [COMB] 3 (180).
// @work

// ;*** mountain (66,84) in Baibur ***

// unit 1925
// ;Grey Scout (1925), on guard, revealing faction, taxing, barbarian
// ;  [BARB], 108 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  combat [COMB] 2 (90).
// @work

// unit 3387
// ;Footmen (3387), revealing faction, 10 hill dwarves [HDWA], 146 silver
// ;  [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat [COMB] 1
// ;  (30).

// unit 3033
// ;Footmen (3033), on guard, revealing faction, taxing, 10 orcs [ORC],
// ;  540 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
// ;  [COMB] 1 (60).
// @work

// unit 3464
// ;Knight (3464), revealing faction, leader [LEAD]. Weight: 10. Capacity:
// ;  0/0/15/0. Skills: combat [COMB] 1 (30).
// @study "combat"

// unit 3465
// ;Knight (3465), revealing faction, leader [LEAD]. Weight: 10. Capacity:
// ;  0/0/15/0. Skills: combat [COMB] 1 (30).
// @study "combat"

// ;*** mountain (68,84) in Inber ***

// unit 1865
// ;Grey Ambassador (1865), on guard, behind, revealing faction, taxing,
// ;  leader [LEAD], 12 silver [SILV], horse [HORS], sword [SWOR]. Weight:
// ;  61. Capacity: 0/70/85/0. Skills: combat [COMB] 3 (180), observation
// ;  [OBSE] 4 (420), riding [RIDI] 1 (30).

// unit 2236
// ;Footmen (2236), on guard, revealing faction, taxing, 10 barbarians
// ;  [BARB], sword [SWOR], 342 silver [SILV]. Weight: 101. Capacity:
// ;  0/0/150/0. Skills: combat [COMB] 3 (180).
// @work

// unit 2321
// ;Knight (2321), on guard, revealing faction, taxing, leader [LEAD], 21
// ;  silver [SILV], sword [SWOR], horse [HORS]. Weight: 61. Capacity:
// ;  0/70/85/0. Skills: combat [COMB] 4 (330), riding [RIDI] 2 (150).

// unit 2847
// ;Knight Commander (2847), on guard, behind, revealing faction, taxing,
// ;  leader [LEAD], 197 silver [SILV], horse [HORS], sword [SWOR].
// ;  Weight: 61. Capacity: 0/70/85/0. Skills: tactics [TACT] 4 (330),
// ;  combat [COMB] 3 (210), riding [RIDI] 1 (30).

// unit 3388
// ;Master Archer (3388), behind, revealing faction, leader [LEAD].
// ;  Weight: 10. Capacity: 0/0/15/0. Skills: longbow [LBOW] 2 (150).
// @study "longbow"

// unit 3389
// ;Master Archer (3389), behind, revealing faction, leader [LEAD].
// ;  Weight: 10. Capacity: 0/0/15/0. Skills: longbow [LBOW] 2 (150).
// @study "longbow"

// unit 1706
// ;Footmen (1706), on guard, revealing faction, taxing, 10 barbarians
// ;  [BARB], 10 swords [SWOR], 124 silver [SILV]. Weight: 110. Capacity:
// ;  0/0/150/0. Skills: combat [COMB] 2 (120).
// @study "combat"

// ;*** forest (59,85) in Soratuen ***

// unit 1922
// ;Grey Scout (1922), avoiding, behind, revealing faction, barbarian
// ;  [BARB], 280 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  combat [COMB] 1 (60).

// ;*** mountain (67,85) in Baibur, contains Gon-tor [city] ***

// unit 2090
// ;Workers (2090), avoiding, behind, revealing faction, 13 barbarians
// ;  [BARB], 114 silver [SILV]. Weight: 130. Capacity: 0/0/195/0. Skills:
// ;  none.
// @work

// ;*** mountain (69,85) in Inber ***

// unit 2237
// ;Knight (2237), on guard, revealing faction, taxing, leader [LEAD], 78
// ;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
// ;  3 (270), riding [RIDI] 2 (90), observation [OBSE] 1 (30).

// unit 3034
// ;Footmen (3034), on guard, revealing faction, taxing, 10 orcs [ORC],
// ;  796 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
// ;  [COMB] 1 (60).
// @work

// unit 3440
// ;Footmen (3440), on guard, revealing faction, taxing, 10 orcs [ORC],
// ;  860 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
// ;  [COMB] 1 (60).
// @work

// unit 1707
// ;Footmen (1707), on guard, revealing faction, taxing, 10 orcs [ORC],
// ;  800 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills: combat
// ;  [COMB] 1 (60).
// @work

// unit 3466
// ;Knight (3466), revealing faction, leader [LEAD]. Weight: 10. Capacity:
// ;  0/0/15/0. Skills: combat [COMB] 1 (30).
// @study "combat"

// unit 3468
// ;Knight (3468), revealing faction, leader [LEAD]. Weight: 10. Capacity:
// ;  0/0/15/0. Skills: combat [COMB] 1 (30).
// @study "combat"

// unit 3469
// ;Footmen (3469), revealing faction, 10 orcs [ORC]. Weight: 100.
// ;  Capacity: 0/0/150/0. Skills: combat [COMB] 1 (60).
// @study "combat"

// ;*** mountain (68,86) in Inber ***

// unit 2952
// ;Knight (2952), on guard, revealing faction, taxing, leader [LEAD], 197
// ;  silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB]
// ;  3 (210), riding [RIDI] 1 (30), observation [OBSE] 1 (30).

// unit 3096
// ;Footmen (3096), on guard, revealing faction, taxing, 10 hill dwarves
// ;  [HDWA], 891 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
// ;  combat [COMB] 1 (60).
// @work

// unit 3390
// ;Footmen (3390), on guard, revealing faction, taxing, 10 hill dwarves
// ;  [HDWA], 463 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
// ;  combat [COMB] 2 (120).
// @work

// unit 1709
// ;Footmen (1709), on guard, revealing faction, taxing, 10 hill dwarves
// ;  [HDWA], 216 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
// ;  combat [COMB] 1 (30).
// @work

// unit 2422
// ;Knight (2422), on guard, revealing faction, taxing, leader [LEAD].
// ;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 2 (120).
// @study "combat"

// unit 2441
// ;Knight (2441), on guard, revealing faction, taxing, leader [LEAD].
// ;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 2 (120).
// @study "combat"

// unit 2464
// ;Knight (2464), on guard, revealing faction, taxing, leader [LEAD].
// ;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 2 (120).
// @study "combat"

// unit 2617
// ;Knight (2617), on guard, revealing faction, taxing, leader [LEAD].
// ;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 2 (120).
// @study "combat"

// unit 2663
// ;Knight (2663), on guard, revealing faction, taxing, leader [LEAD].
// ;  Weight: 10. Capacity: 0/0/15/0. Skills: combat [COMB] 2 (120).
// @study "combat"

// ;*** mountain (70,86) in Inber, contains Einmund [city] ***

// unit 2091
// ;Workers (2091), avoiding, behind, revealing faction, 26 orcs [ORC],
// ;  152 silver [SILV]. Weight: 260. Capacity: 0/0/390/0. Skills: none.
// @work

// ;*** tundra (69,87) in Issche ***

// unit 1924
// ;Grey Scout (1924), on guard, revealing faction, taxing, barbarian
// ;  [BARB], 51 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  combat [COMB] 2 (90).

// unit 3441
// ;Footmen (3441), revealing faction, 5 ice dwarves [IDWA], 38 silver
// ;  [SILV]. Weight: 50. Capacity: 0/0/75/0. Skills: none.
// @work

// ;*** plain (5,91) in Thordor, contains Mun-tor [city] ***

// unit 2219
// ;Workers (2219), avoiding, behind, revealing faction, 13 high elves
// ;  [HELF], 258 silver [SILV]. Weight: 130. Capacity: 0/0/195/0. Skills:
// ;  none.
// @work

// ;*** tundra (2,92) in Etdshy, contains Nolaville [village] ***

// unit 2534
// ;Workers (2534), avoiding, behind, revealing faction, 60 silver [SILV],
// ;  9 eskimos [ESKI]. Weight: 90. Capacity: 0/0/135/0. Skills: none.
// @work

// ;*** plain (10,92) in Thordor, contains Karaz-tor [town] ***

// unit 3250
// ;Workers (3250), avoiding, behind, revealing faction, 2 nomads [NOMA],
// ;  28 silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills: none.
// @work

// ;*** plain (14,92) in Abersoch, contains Denhver [city] ***

// unit 3035
// ;Workers (3035), avoiding, behind, revealing faction, 2 high elves
// ;  [HELF], 60 silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills:
// ;  none.
// @work

// ;*** plain (16,92) in Abersoch, contains Gon-a-grim [city] ***

// unit 3251
// ;Workers (3251), avoiding, behind, revealing faction, 2 plainsmen
// ;  [PLAI], 28 silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills:
// ;  none.
// @work

// ;*** plain (66,92) in Carrigaline, contains Lothenlun [city] ***

// unit 2648
// ;Workers (2648), avoiding, behind, revealing faction, 10 high elves
// ;  [HELF], 80 silver [SILV]. Weight: 100. Capacity: 0/0/150/0. Skills:
// ;  none.
// @work

// unit 3442
// ;Master Harper (3442), avoiding, behind, revealing faction, leader
// ;  [LEAD], 20 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  entertainment [ENTE] 2 (90).
// @entertain

// unit 1710
// ;Harpers (1710), avoiding, behind, revealing faction, 3 high elves
// ;  [HELF], 32 silver [SILV]. Weight: 30. Capacity: 0/0/45/0. Skills:
// ;  none.

// ;*** plain (13,93) in Abersoch, contains Kim'eng [city] ***

// unit 3391
// ;Workers (3391), avoiding, behind, revealing faction, 2 plainsmen
// ;  [PLAI], 90 silver [SILV]. Weight: 20. Capacity: 0/0/30/0. Skills:
// ;  none.
// @work

// ;*** plain (12,94) in Abersoch, contains Marport [town] ***

// unit 2848
// ;Workers (2848), avoiding, behind, revealing faction, high elf [HELF],
// ;  62 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: none.
// @work

// ;*** plain (16,94) in Abersoch, contains Helarchen [city] ***

// unit 1711
// ;Worker (1711), avoiding, behind, revealing faction, 39 silver [SILV],
// ;  high elf [HELF]. Weight: 10. Capacity: 0/0/15/0. Skills: none.
// @work

// ;*** plain (9,95) in Thordor, contains Onaberg [city] ***

// unit 2649
// ;Workers (2649), avoiding, behind, revealing faction, 12 nomads [NOMA],
// ;  213 silver [SILV]. Weight: 120. Capacity: 0/0/180/0. Skills: none.
// @work

// ;*** plain (15,95) in Abersoch, contains Mun-a-karak [city] ***

// unit 1781
// ;Grey Scout (1781), avoiding, behind, revealing faction, viking [VIKI],
// ;  14 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
// ;  [COMB] 1 (30).

// unit 3470
// ;Workers (3470), avoiding, behind, revealing faction, plainsman [PLAI],
// ;  8 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: none.
// @work

// ;*** plain (17,95) in Abersoch, contains Niavauton [city] ***

// unit 1780
// ;Grey Scout (1780), avoiding, behind, revealing faction, viking [VIKI],
// ;  58 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills: combat
// ;  [COMB] 2 (90).

// ;*** cavern (0,20,underworld) in Ashwaz ***

// unit 2401
// ;Footmen (2401), avoiding, behind, revealing faction, taxing, tribal
// ;  elf [TELF], 206 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
// ;  Skills: combat [COMB] 2 (90).

// ;*** cavern (1,21,underworld) in Ashwaz, contains Tha-seurr [city] ***

// unit 2758
// ;Grey Scout (2758), avoiding, behind, revealing faction, tribal elf
// ;  [TELF], 64 silver [SILV]. Weight: 10. Capacity: 0/0/15/0. Skills:
// ;  combat [COMB] 2 (90).

// ;*** underforest (43,39,underworld) in Aletiss, contains Dorbroddor
// ;  [city] ***

// unit 1712
// ;Harpers (1712), avoiding, behind, revealing faction, 4 darkmen [DMAN],
// ;  80 silver [SILV]. Weight: 40. Capacity: 0/0/60/0. Skills:
// ;  entertainment [ENTE] 1 (30).
// @entertain

// ;*** underforest (42,44,underworld) in Aletiss, contains Schodild
// ;  [city] ***

// unit 2757
// ;Grey Scout (2757), avoiding, behind, revealing faction, taxing, tribal
// ;  elf [TELF], 80 silver [SILV]. Weight: 10. Capacity: 0/0/15/0.
// ;  Skills: combat [COMB] 2 (90).

// #end

// `);

// if (parser.results.length > 1) {
//   console.log("DIFF:", diff(parser.results[0], parser.results[1]));
// }

// console.log(parser.results);

export const getParser = () => {
  return new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
};
