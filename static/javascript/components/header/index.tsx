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

enum DROPDOWNS {
  REPORT = "REPORT",
  USER = "USER"
}

type IDropdowns = keyof typeof DROPDOWNS | null;

type IUseDropdown = [RefObject<HTMLInputElement>, IDropdowns, React.Dispatch<React.SetStateAction<IDropdowns>>];

const useDropdowns = (): IUseDropdown => {
  const headerRef = useRef<HTMLInputElement>(null);
  const openDropdownVarRef = useRef<IDropdowns>(null);
  const [openDropdownName, setOpenDropdownName] = useState<IDropdowns>(null);

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
          isOpen={openDropdownName === DROPDOWNS.REPORT}
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

        <UserMenu onOpen={() => setOpenDropdownName(DROPDOWNS.USER)} isOpen={openDropdownName === DROPDOWNS.USER} />
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
