import React from "react";
import { connect } from "react-redux";
import { ICombinedReducersState } from "../../reducers";
import { IDetailsEventsProps } from "./details-unit.d";

const Events = (props: IDetailsEventsProps) => {
  return (
    <div className="card-body">
      <h5 className="card-title region-events__header">Magic Rider (502), School of Witchcraft and Wizardry (17)</h5>
      <div className="dropdown-divider" />
      <div className="card-text">Magic Wood (425): Gives 3 wood [WOOD] to Magic Weaponry (419).</div>
      <div className="dropdown-divider" />
      <div className="card-text">Magic Wood (425): Produces 8 wood [WOOD] in swamp (3,23) in Conator.</div>
      <div className="dropdown-divider" />
      <div className="card-text">Magic Wood (425): Gets practice in lumberjack (+5).</div>
    </div>
  );
};

const mapStateToProps = (state: ICombinedReducersState) => {
  // TODO: get events for user from find state.events
  return {};
};

export default connect(mapStateToProps)(React.memo(Events));
