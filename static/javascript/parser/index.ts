import nearley from "nearley";
import { diff } from "deep-diff";
import grammarBasic from "./grammar-base-compiled";
import grammarUnit from "./grammar-unit-compiled";

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

        // Apply specifics parsers to each row
        report.forEach(item => {
          switch (item.type) {
            case "REGIONS":
              parseUnits(item);
              break;
            // TODO: for orders template
            // TODO: for events to add them to each unit
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
    region.unitsAndObjectsParsed = region.unitsAndObjects.map(unitOrObject => {
      const parser = new nearley.Parser(grammarUnitCompiled);
      parser.feed(unitOrObject);
      // console.log("DEBUG: INPUT UNIT:" unitOrObject);
      // console.log("DEBUG: OUTPUT UNIT::", parser.results);
      // if (parser.results && parser.results.length > 1) {
      //   console.log("DIFF:", diff(parser.results[0], parser.results[1]));
      // }
      return parser.results[0];
    });
  });
};

export default parseReport;
