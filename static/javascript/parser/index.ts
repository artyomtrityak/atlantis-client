import nearley from "nearley";
import grammar from "./grammar";

console.log("AAAA");

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

// Parse something!
parser.feed("Atlantis Report For:\nHorde (17)\nNovember, Year 1");

// parser.results is an array of possible parsings.
console.log(parser.results); // [[[[ "foo" ],"\n" ]]]

export default parser;
