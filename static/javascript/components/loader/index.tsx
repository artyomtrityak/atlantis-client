import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { ICombinedReducersState } from "../../reducers";
import "./loader-styles.scss";

interface IProps {
  loading: boolean;
}

class Loading extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    if (!this.props.loading) {
      return null;
    }
    return <div className="atl-loader" />;
  }
}

const mapStateToProps = (state: ICombinedReducersState) => {
  return {
    loading: state.navigations.loading
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Loading));
