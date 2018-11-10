import React from "react";
import { connect } from "react-redux";

import Header from "./components/header";
import Map from "./components/map";
import Details from "./components/details";
import UnitsList from "./components/units-list";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid" style={{ height: "calc(100vh - 60px)" }}>
        <div className="row" style={{ height: "60%" }}>
          <div className="col-5">
            <Map />
          </div>
          <div className="col-7" style={{ height: "100%" }}>
            <Details />
          </div>
        </div>
        <div className="row" style={{ height: "40%", overflow: "auto" }}>
          <div className="col-12">
            <UnitsList />
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
)(App);
