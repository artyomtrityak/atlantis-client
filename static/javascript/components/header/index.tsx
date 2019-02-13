import React, { useState, useRef, useEffect, RefObject } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { showLoadReportModal } from "../../actions/navigation-actions";
import { ICombinedReducersState } from "../../reducers";
import ReportsAndOrdersMenu from "./reports-and-orders-menu";
import UserMenu from "./user-menu";
import ReportBugMenu from "./report-bug-menu";
import TurnMenu from "./turn-menu";
import { IHeaderProps } from "./header.d";
import "./header-styles.scss";

type IDropdown = "REPORT" | "USER";
type IDropdownsNullable = IDropdown | null;
type IUseDropdown = [RefObject<HTMLDivElement>, IDropdownsNullable, React.Dispatch<React.SetStateAction<IDropdownsNullable>>];

const useDropdowns = (): IUseDropdown => {
  const headerRef = useRef<HTMLDivElement>(null);
  const openDropdownVarRef = useRef<IDropdownsNullable>(null);
  const [openDropdownName, setOpenDropdownName] = useState<IDropdownsNullable>(null);

  useEffect(() => {
    openDropdownVarRef.current = openDropdownName;
  });

  useEffect(() => {
    function onGlobalClick(e: MouseEvent) {
      if (!openDropdownVarRef.current) {
        return;
      }
      if (!(e.target instanceof Element)) {
        return;
      }
      if (!headerRef.current || headerRef.current.contains(e.target)) {
        return;
      }
      setOpenDropdownName(null);
    }

    window.addEventListener("click", onGlobalClick);
    return () => {
      return window.removeEventListener("click", onGlobalClick);
    };
  }, []);

  return [headerRef, openDropdownName, setOpenDropdownName];
};

function Header(props: IHeaderProps) {
  const [headerRef, openDropdownName, setOpenDropdownName] = useDropdowns();

  return (
    <nav className="navbar navbar-expand-lg header" ref={headerRef}>
      <a className="navbar-brand">Atlantis Client</a>
      <ul className="navbar-nav">
        <ReportsAndOrdersMenu
          onOpen={() => setOpenDropdownName("REPORT")}
          isOpen={openDropdownName === "REPORT"}
          showLoadReport={() => {
            setOpenDropdownName(null);
            props.showLoadReport();
          }}
        />

        <li className="nav-item">
          <a href="#" className="nav-link header__link">
            Atlantis Times
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link header__link">
            Rules
          </a>
        </li>
      </ul>

      <ul className="navbar-nav flex-row ml-auto d-flex">
        <ReportBugMenu />

        <TurnMenu />

        <UserMenu onOpen={() => setOpenDropdownName("USER")} isOpen={openDropdownName === "USER"} />
      </ul>
    </nav>
  );
}

const mapStateToProps = (state: ICombinedReducersState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    showLoadReport: () => dispatch(showLoadReportModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Header));
