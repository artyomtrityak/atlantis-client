import React from "react";
import { connect } from "react-redux";
import cn from "classnames";
import { Icon } from "../utils";

function getItems(items) {
  return items.map(item => item.text).join(", ");
}

const UnitDetailsItems = props => {
  return (
    <React.Fragment>
      <div className="dropdown-divider unit-details-divider" />
      <div className="card-text">
        <b>Items</b>: {getItems(props.items)}.
      </div>
    </React.Fragment>
  );
};

export default UnitDetailsItems;
