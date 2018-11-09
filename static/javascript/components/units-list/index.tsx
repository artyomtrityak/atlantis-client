import React from "react";
import { connect } from "react-redux";

const UnitsList = () => {
  return <div>UnitsList</div>;
};

const mapStateToProps = (state: any) => {
  return {
    a: 2
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onClick: () => dispatch("")
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnitsList);
