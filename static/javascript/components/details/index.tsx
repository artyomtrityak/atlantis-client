import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ICombinedReducersState } from "../../reducers";
import { TABS, ITabs } from "../../reducers/details";
import { activateTab } from "../../actions/details-actions";
import "./styles/index.scss";
import Region from "../details-region";
import Unit from "../details-unit";
import Events from "./events";
import Battles from "./battles";
import { IDetailsProps } from "./details.d";

class DetailsComponent extends React.Component<IDetailsProps> {
  constructor(props: IDetailsProps) {
    super(props);
    this.renderMenuItem = this.renderMenuItem.bind(this);
  }

  render() {
    const { activeTab } = this.props;
    const items = [
      { text: "Region", tabName: TABS.region },
      { text: "Unut", tabName: TABS.unit },
      { text: "Events", tabName: TABS.events },
      { text: "Battles", tabName: TABS.battles }
    ];

    return (
      <div className="details-block">
        <div className="row">
          <div className="col-12">
            <ul className="nav nav-tabs">{items.map(this.renderMenuItem)}</ul>
          </div>
        </div>
        <div className="row details-block__details">
          <div className="col-12 h-100per">
            <div className="card details-block__details-subcontainer">{this.renderDetails(activeTab)}</div>
          </div>
        </div>
      </div>
    );
  }

  renderMenuItem({ tabName, text }: { tabName: ITabs; text: string }) {
    const { onActivateTab, activeTab } = this.props;

    return (
      <li className="nav-item" key={tabName}>
        <a
          className={cn("nav-link", "details-block__link", { active: activeTab === tabName })}
          onClick={() => onActivateTab(tabName)}
          href="#"
        >
          {text}
        </a>
      </li>
    );
  }

  renderDetails(activeTab: ITabs) {
    switch (activeTab) {
      case TABS.region:
        return <Region />;
      case TABS.unit:
        return <Unit />;
      case TABS.events:
        return <Events />;
      case TABS.battles:
        return <Battles />;
    }
  }
}

const mapStateToProps = (state: ICombinedReducersState) => {
  return {
    activeTab: state.details.activeTab
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onActivateTab: (tabName: ITabs) => dispatch(activateTab(tabName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsComponent);
