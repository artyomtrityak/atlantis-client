import cn from "classnames";
import React from "react";
import ReactDOM from "react-dom";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { ICombinedReducersState } from "../../reducers";
import { FAST_ACTIONS, TURN_ACTIONS, OTHER_FAST_ACTIONS } from "./actions-data";
import UnitAction from "./unit-actions-dropdown-action";

interface IProps {
  buttonRef: React.Ref<HTMLDivElement>;
}

const UnitActionsDropdown = (props: IProps, ref?: React.Ref<HTMLDivElement>) => {
  const buttonRef = props.buttonRef as any; // :(
  if (!buttonRef.current) {
    return null;
  }
  const position = buttonRef.current.getBoundingClientRect() as DOMRect;
  return ReactDOM.createPortal(
    <div
      ref={ref}
      style={{ top: position.y - 100 }}
      className={cn("dropdown-menu", "unit-actions-menu__menu", "show", "unit-actions-menu__menu--extended")}
    >
      <div className="row">
        <div className="col-4">
          <span className="dropdown-item-text">Fast Actions</span>
          <div className="dropdown-divider" />
          {OTHER_FAST_ACTIONS.map(d => (
            <UnitAction key={`action_${d.name}`} action={d} />
          ))}
        </div>
        <div className="col-4">
          <span className="dropdown-item-text">Fast Actions</span>
          <div className="dropdown-divider" />
          {FAST_ACTIONS.map(d => (
            <UnitAction key={`action_${d.name}`} action={d} />
          ))}
        </div>
        <div className="col-4">
          <span className="dropdown-item-text">Month Actions</span>
          <div className="dropdown-divider" />
          {TURN_ACTIONS.map(d => (
            <UnitAction key={`action_${d.name}`} action={d} />
          ))}
        </div>
      </div>
    </div>,
    document.getElementById("dropdowns") as any
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

const mapStateToProps = (state: ICombinedReducersState) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  undefined as any,
  { forwardRef: true } as any
)(React.forwardRef(UnitActionsDropdown));
