import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { ICombinedReducersState } from "../../reducers";
import UnitActionsDropdown from "./unit-actions-dropdown";
import "./styles/index.scss";

const UnitActions = () => {
  const [dropdownShown, showDropdown, buttonRef, dropdownRef] = useDropdown();

  return (
    <React.Fragment>
      <div className="btn-group dropleft unit-actions-menu" ref={buttonRef}>
        <button onClick={() => showDropdown(!dropdownShown)} type="button" className="btn btn-secondary btn-sm dropdown-toggle">
          Actions
        </button>
      </div>
      {dropdownShown ? <UnitActionsDropdown ref={dropdownRef} buttonRef={buttonRef} /> : null}
    </React.Fragment>
  );
};

type IUseDropdown = [boolean, (e: boolean) => void, React.RefObject<HTMLDivElement>, React.RefObject<any>];
const useDropdown = (): IUseDropdown => {
  const [dropdownShown, showDropdown] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onGlobalClick = (e: Event) => {
      if (!dropdownRef.current || !buttonRef.current || !(e.target instanceof Element)) {
        return;
      }
      if (dropdownRef.current.contains(e.target) || buttonRef.current.contains(e.target)) {
        return;
      }
      showDropdown(false);
    };

    window.addEventListener("click", onGlobalClick);
    return () => window.removeEventListener("click", onGlobalClick);
  }, []);

  return [dropdownShown, showDropdown, buttonRef, dropdownRef];
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

const mapStateToProps = (state: ICombinedReducersState) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnitActions);
