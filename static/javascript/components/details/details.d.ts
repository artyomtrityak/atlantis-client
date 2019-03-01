import { ITabs } from "../../reducers/details";

interface IDetailsProps {
  readonly onActivateTab: (tabName: ITabs) => void;
  readonly activeTab: ITabs;
}
