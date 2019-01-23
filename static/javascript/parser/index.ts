import nearley from "nearley";
import { diff } from "deep-diff";
import grammar from "./grammar-compiled";

import { IReport, IReportItemRegions } from "./parser.d";
export { IReport, IReportItemRegions };

const parseReport = async (reportData: string): Promise<IReport | undefined> => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
        parser.feed(reportData);

        // debug only
        if (parser.results && parser.results.length > 1) {
          console.log(diff(parser.results[0], parser.results[1]));
        }
        console.log("RESULTS:", parser.results);
        // ----

        resolve(parser.results[0]);
      }, 100);
    } catch (err) {
      console.log("Can not parse report:", err);
      reject(err);
    }
  });
};

export default parseReport;
