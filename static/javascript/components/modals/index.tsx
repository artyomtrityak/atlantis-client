import React from "react";
import { connect } from "react-redux";
import LoadReport from "./load-report";

interface IProps {
  activeModalName?: string;
}

const Modals = (props: IProps) => {
  switch (props.activeModalName) {
    case "LOAD_REPORT":
      return <LoadReport />;
    default:
      return null;
  }
};

// TODO: state from redux
const mapStateToProps = state => {
  return {
    activeModalName: state.navigations.activeModalName
  };
};

export default connect(mapStateToProps)(React.memo(Modals));
