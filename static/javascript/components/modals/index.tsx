import React from "react";
import { connect } from "react-redux";
import LoadReport from "./load-report";

const Modals = props => {
  switch (props.activeModalName) {
    case "LOAD_REPORT":
      return <LoadReport />;
    default:
      return null;
  }
};

const mapStateToProps = state => {
  return {
    activeModalName: state.navigations.activeModalName
  };
};

export default connect(mapStateToProps)(React.memo(Modals));
