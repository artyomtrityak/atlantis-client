import nearley from "nearley";
import { diff } from "deep-diff";
import grammarBasic from "./grammar-base-compiled";
import grammarUnit from "./grammar-unit-compiled";
import grammarEvent from "./grammar-unit-event-compiled";

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
            case "EVENTS":
              parseEvents(item);
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
    if (!region.unitsAndObjectsRaw) {
      return;
    }
    region.unitsAndObjects = region.unitsAndObjectsRaw.map(unitOrObjectRaw => {
      const parser = new nearley.Parser(grammarUnitCompiled);
      parser.feed(unitOrObjectRaw);
      // console.log("DEBUG: INPUT UNIT:", unitOrObject);
      // console.log("DEBUG: OUTPUT UNIT:", parser.results);
      // if (parser.results && parser.results.length > 1) {
      //   console.log("DIFF:", diff(parser.results[0], parser.results[1]));
      // }
      return parser.results[0];
    });
  });
};

const parseEvents = async (item: IReportItemEvents) => {
  const grammarEventCompiled = nearley.Grammar.fromCompiled(grammarEvent);
  const globalEvents: IReportItemGlobalEvent[] = [];
  const unitsEvents: IReportItemUnitEvent[] = [];
  item.events.forEach(eventRaw => {
    const parser = new nearley.Parser(grammarEventCompiled);
    try {
      parser.feed(eventRaw);
      if (parser.results[0]) {
        unitsEvents.push(parser.results[0]);
        return;
      }
    } catch (err) {
      console.log("PARSE EVENT ERROR:", err, eventRaw);
    }
    globalEvents.push(eventRaw);
  });
  item.globalEvents = globalEvents;
  item.unitsEvents = unitsEvents;
};

export default parseReport;
