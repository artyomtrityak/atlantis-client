import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { withSize } from "../utils";
import Hex from "./hex";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderHex = this.renderHex.bind(this);
  }

  render() {
    return <svg style={{ width: this.props.width, height: this.props.height }}>{_.range(860).map(this.renderHex)}</svg>;
  }

  renderHex(d, i) {
    return <Hex index={i} key={d} />;
  }
}

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
)(withSize(Map));
