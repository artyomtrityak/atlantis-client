import nearley from "nearley";
import grammar from "./grammar";

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

// Parse something!
parser.feed(`Atlantis Report For:
Ho rd e (17) (War 2, Magic 3)
November, Year 1

Atlantis Engine Version: 4.1.0
Standard Atlantis, Version: 4.1.0

Faction Status:
Tax Regions: 23 (24)
Trade Regions: 0 (0)
Mages: 3 (3)
Apprentices: 0 (3)`);

// parser.results is an array of possible parsings.
console.log(parser.results); // [[[[ "foo" ],"\n" ]]]

export default parser;
