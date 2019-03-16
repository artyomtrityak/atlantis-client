import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ICombinedReducersState } from "../../reducers";
import Region from "../region-details";
import Unit from "../unit-details";
import { IDetailsProps } from "./details.d";
import "./styles/index.scss";

const DetailsComponent = (props: IDetailsProps) => {
  return (
    <div className="card details-block">
      <Region />
      <Unit />
    </div>
  );
};

const mapStateToProps = (state: ICombinedReducersState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsComponent);
