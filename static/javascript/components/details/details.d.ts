import { ITabs } from "../../reducers/details";

interface IDetailsProps {
  onActivateTab: (tabName: ITabs) => void;
  activeTab: ITabs;
}
