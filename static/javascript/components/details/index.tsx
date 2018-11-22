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
    <div className="details-block" style={{ marginTop: "5px", height: "100%" }}>
      <div className="row">
        <div className="col-12">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className={cn("nav-link", { active: activeTab === "region" })}
                onClick={onActivateTab.bind(null, "region")}
                style={{ fontSize: "14px" }}
                href="#"
              >
                Region
              </a>
            </li>
            <li className="nav-item">
              <a
                className={cn("nav-link", { active: activeTab === "unit" })}
                onClick={onActivateTab.bind(null, "unit")}
                style={{ fontSize: "14px" }}
                href="#"
              >
                Unit
              </a>
            </li>
            <li className="nav-item">
              <a
                className={cn("nav-link", { active: activeTab === "events" })}
                onClick={onActivateTab.bind(null, "events")}
                style={{ fontSize: "14px" }}
                href="#"
              >
                Events
              </a>
            </li>
            <li className="nav-item">
              <a
                className={cn("nav-link", { active: activeTab === "battles" })}
                onClick={onActivateTab.bind(null, "battles")}
                style={{ fontSize: "14px" }}
                href="#"
              >
                Battles
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row" style={{ height: "calc(100% - 50px)" }}>
        <div className="col-12" style={{ height: "100%" }}>
          <div className="card" style={{ borderTop: 0, height: "100%", overflow: "auto" }}>
            {renderDetails(activeTab)}
          </div>
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
