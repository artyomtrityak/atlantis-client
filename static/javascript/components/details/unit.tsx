import React from "react";
import { connect } from "react-redux";

const Unit = props => {
  return (
    <div className="card-body" style={{ fontSize: "12px" }}>
      <h5 className="card-title" style={{ fontSize: "16px", marginBottom: "0" }}>
        Unit xxx
      </h5>
      <div className="dropdown-divider" />
      <div className="card-text">Wages: $6 (Max: $105).</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(React.memo(Unit));
