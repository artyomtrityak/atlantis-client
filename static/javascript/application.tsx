"use strict";

import React from "react";
import { connect } from "react-redux";
import Header from "./components/header";
import Map from "./components/map";
import Details from "./components/details";
import UnitsList from "./components/units-list";
import GameMenu from "./components/game-menu";
import Loader from "./components/loader";

// Modal dialogs
import Modals from "./components/modals";

const App = () => {
  return (
    <div>
      <Loader />
      <Header />
      <GameMenu />
      <div className="container-fluid application" style={{ height: "calc(100vh - 42px)" }}>
        <div className="row" style={{ height: "70%" }}>
          <div className="col-6">
            <Map />
          </div>
          <div className="col-6" style={{ height: "100%" }}>
            <Details />
          </div>
        </div>
        <div className="row" style={{ height: "30%", overflow: "auto" }}>
          <div className="col-12">
            <UnitsList />
          </div>
        </div>
      </div>

      <Modals />
    </div>
  );
};

export default App;
