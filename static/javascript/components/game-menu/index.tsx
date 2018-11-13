import React from "react";
import { connect } from "react-redux";
import menuIcon from "../../../assets/svg/menu.svg";
import { Icon } from "../utils";

const GameMenu = () => {
  // left: "160px",
  return <Icon {...menuIcon} style={{ position: "absolute", top: "60px", width: "38px", left: "4px", zIndex: 2 }} />;
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
)(React.memo(GameMenu));
