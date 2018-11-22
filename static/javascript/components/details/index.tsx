import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { activateTab } from "../../actions/details-actions";
import "./styles/index.scss";
import Region from "./region";
import Unit from "./unit";
import Events from "./events";
import Battles from "./battles";

const renderDetails = activeTab => {
  switch (activeTab) {
    case "region":
      return <Region />;
    case "unit":
      return <Unit />;
    case "events":
      return <Events />;
    case "battles":
      return <Battles />;
  }
};

const Map = props => {
  const { onActivateTab, activeTab } = props;

  return (
    <div className="details-block">
      <div className="row">
        <div className="col-12">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className={cn("nav-link", "details-block__link", { active: activeTab === "region" })}
                onClick={onActivateTab.bind(null, "region")}
                href="#"
              >
                Region
              </a>
            </li>
            <li className="nav-item">
              <a
                className={cn("nav-link", "details-block__link", { active: activeTab === "unit" })}
                onClick={onActivateTab.bind(null, "unit")}
                href="#"
              >
                Unit
              </a>
            </li>
            <li className="nav-item">
              <a
                className={cn("nav-link", "details-block__link", { active: activeTab === "events" })}
                onClick={onActivateTab.bind(null, "events")}
                href="#"
              >
                Events
              </a>
            </li>
            <li className="nav-item">
              <a
                className={cn("nav-link", "details-block__link", { active: activeTab === "battles" })}
                onClick={onActivateTab.bind(null, "battles")}
                href="#"
              >
                Battles
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row details-block__details">
        <div className="col-12 h-100per">
          <div className="card details-block__details-subcontainer">{renderDetails(activeTab)}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activeTab: state.details.activeTab
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onActivateTab: tabName => dispatch(activateTab(tabName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Map));
