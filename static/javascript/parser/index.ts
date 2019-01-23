import nearley from "nearley";
import { diff } from "deep-diff";
import grammar from "./grammar-compiled";

import { IReport, IReportItemRegions } from "./parser.d";
export { IReport, IReportItemRegions };

const parseReport = (reportData: string): IReport | undefined => {
  try {
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    parser.feed(reportData);
    if (parser.results && parser.results.length > 1) {
      console.log(diff(parser.results[0], parser.results[1]));
    }
    console.log("RESULTS:", parser.results);

    // TODO: check results is an array
    return parser.results[0];
  } catch (err) {
    console.log("Can not parse report:", err);
  }
};

export default parseReport;
