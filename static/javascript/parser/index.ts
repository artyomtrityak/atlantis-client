import nearley from "nearley";
import { diff } from "deep-diff";
import grammarBasic from "./grammar-compiled";
import grammarUnit from "./grammar-unit-compiled";

import { IReport, IReportItemRegions } from "./parser.d";
export { IReport, IReportItemRegions };

const parseReport = async (reportData: string): Promise<IReport | undefined> => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammarBasic));
        parser.feed(reportData);
        const report: IReport = parser.results[0];

        // debug only
        if (parser.results && parser.results.length > 1) {
          console.log(diff(parser.results[0], parser.results[1]));
        }
        console.log("RESULTS:", parser.results);
        // ----

        // Apply specifics parsers to each row
        report.forEach(item => {
          switch (item.type) {
            case "REGIONS":
              parseUnits(item);
              break;
          }
        });
        resolve(parser.results[0]);
      }, 100);
    } catch (err) {
      console.log("Can not parse report:", err);
      reject(err);
    }
  });
};

const parseUnits = async (item: IReportItemRegions) => {
  const grammarUnitCompiled = nearley.Grammar.fromCompiled(grammarUnit);
  item.regions.forEach(region => {
    if (!region.unitsAndObjects) {
      return;
    }
    region.unitsAndObjects.forEach(unitOrObject => {
      const parser = new nearley.Parser(grammarUnitCompiled);
      console.log(unitOrObject);
      parser.feed(unitOrObject);
      console.log("RESULTS111:", parser.results);
    });
  });
};

export default parseReport;
