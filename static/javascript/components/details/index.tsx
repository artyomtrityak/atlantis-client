import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ICombinedReducersState } from "../../reducers";
import { ITabs } from "../../reducers/details";
import { activateTab } from "../../actions/details-actions";
import Region from "../details-region";
import Unit from "../details-unit";
import Events from "./events";
import Battles from "./battles";
import { IDetailsProps } from "./details.d";
import "./styles/index.scss";

const DetailsComponent = (props: IDetailsProps) => {
  return (
    <div className="card details-block">
      <Region />
    </div>
  );
};

function renderDetails(activeTab: ITabs) {
  switch (activeTab) {
    case "REGION":
      return;
    case "UNIT":
      return <Unit />;
    case "EVENTS":
      return <Events />;
    case "BATTLES":
      return <Battles />;
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
