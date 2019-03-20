import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ICombinedReducersState } from "../../reducers";
import Region from "../region-details";
import Unit from "../unit-details";
import { withSize } from "../utils";
import { IDetailsProps } from "./details.d";
import "./styles/index.scss";

const DetailsComponent = (props: IDetailsProps) => {
  return (
    <div className="card details-block" style={{ height: props.height }}>
      <Region />
      <Unit />
    </div>
  );
};

const mapStateToProps = (state: ICombinedReducersState) => {
  return {};
};

export default connect(mapStateToProps)(withSize(DetailsComponent));
