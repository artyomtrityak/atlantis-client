import React from "react";
import { connect } from "react-redux";

const Map = () => {
  return (
    <div>
      <div className="row" style={{ marginTop: "5px" }}>
        <div className="col-12">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" style={{ fontSize: "14px" }} href="#">
                Region
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ fontSize: "14px" }} href="#">
                Unit
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ fontSize: "14px" }} href="#">
                Battles
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ fontSize: "14px" }} href="#">
                Advanced
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row" style={{ height: "calc(100% - 50px)" }}>
        <div className="col-12" style={{ height: "100%" }}>
          <div className="card" style={{ borderTop: 0, height: "100%", overflow: "auto" }}>
            <div className="card-body" style={{ fontSize: "12px" }}>
              <h5 className="card-title" style={{ fontSize: "16px", marginBottom: "0" }}>
                wasteland (3,21) in Stilye, 88 peasants (orcs), $88.
              </h5>
              <div className="dropdown-divider" />
              <div className="card-text">Wages: $6 (Max: $105).</div>
              <div className="card-text">Wanted: none.</div>
              <div className="card-text">For Sale: 17 orcs [ORC] at $48.</div>
              <div className="card-text">Entertainment available: $4.</div>
              <div className="card-text">Products: 14 iron [IRON], 14 livestock [LIVE].</div>
              <div className="dropdown-divider" />
              <div className="card-text">There is a Gate here (Gate 4 of 21).</div>
              <div className="dropdown-divider" />
              <div className="card-text">Exits:</div>
              <div className="card-text" style={{ marginLeft: "20px" }}>
                North: wasteland (3,19) in Stilye.
              </div>
              <div className="card-text" style={{ marginLeft: "20px" }}>
                Northeast: wasteland (4,20) in Stilye.
              </div>
              <div className="card-text" style={{ marginLeft: "20px" }}>
                Southeast: swamp (4,22) in Conator.
              </div>
              <div className="card-text" style={{ marginLeft: "20px" }}>
                South: swamp (3,23) in Conator.
              </div>
              <div className="card-text" style={{ marginLeft: "20px" }}>
                Southwest: wasteland (2,22) in Stilye.
              </div>
              <div className="card-text" style={{ marginLeft: "20px" }}>
                Northwest: ocean (2,20) in Cykranosh Ocean.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
