import React from "react";
import { connect } from "react-redux";

const Map = () => {
  return <div>Map</div>;
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
)(Map);
