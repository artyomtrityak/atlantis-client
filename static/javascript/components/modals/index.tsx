import React from "react";
import { connect } from "react-redux";
import { ICombinedReducersState } from "../../reducers";
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

const mapStateToProps = (state: ICombinedReducersState) => {
  return {
    activeModalName: state.navigations.activeModalName
  };
};

export default connect(mapStateToProps)(React.memo(Modals));
