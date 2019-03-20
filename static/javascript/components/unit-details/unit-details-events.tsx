"use strict";

import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { ICombinedReducersState } from "../../reducers";
import { IDetailsEventsNativeProps, IDetailsEventsProps } from "./details-unit.d";

const Events = (props: IDetailsEventsNativeProps & IDetailsEventsProps) => {
  return (
    <React.Fragment>
      <div className="dropdown-divider unit-details-divider" />
      <div className="card-text">
        <b>Events</b>:
        {props.unitEvents.map((event, i) => (
          <React.Fragment key={i}>
            <div className="card-text">{event}</div>
            <div className="dropdown-divider unit-details-divider" />
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state: ICombinedReducersState, ownProps: IDetailsEventsNativeProps) => {
  const unitEvents = state.events.unitEvents.filter(e => e.unit.unitId === ownProps.unit.id).map(e => e.eventText);
  return {
    unitEvents
  };
};

export default connect(mapStateToProps)(React.memo(Events));
