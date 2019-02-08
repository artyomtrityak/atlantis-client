import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { ICombinedReducersState } from "../../reducers";
import "./loader-styles.scss";

interface IProps {
  loading: boolean;
}

const Loading = (props: IProps) => {
  if (!props.loading) {
    return null;
  }
  return (
    <div className="atl-loader">
      <div className="atl-loader__backdrop" />
      <img className="atl-loader__loader" src="/static/assets/images/loader.gif" />
    </div>
  );
};

const mapStateToProps = (state: ICombinedReducersState) => {
  return {
    loading: state.navigations.loading
  };
};

export default connect(mapStateToProps)(React.memo(Loading));
