import React from "react";
import { connect } from "react-redux";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#25476a" }}>
      <a className="navbar-brand" href="#" style={{ color: "#e2dfdf" }}>
        Atlantis Client
      </a>
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" style={{ color: "#e2dfdf" }} href="#" role="button">
            Reports & Orders
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="#">
              Load Turn Report
            </a>
            <a className="dropdown-item" href="#">
              Download Turn Orders
            </a>
            <a className="dropdown-item" href="#">
              Reset Turn Orders
            </a>
            <a className="dropdown-item" href="#">
              Game Reports & Orders
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" style={{ color: "#e2dfdf" }}>
            Atlantis Times
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" style={{ color: "#e2dfdf" }}>
            Rules
          </a>
        </li>
        {/* <svg  x="0px" y="0px" style={{"enableBackground": "new 0 0 512.43 512.43;", width: 100, height: 100, pointerEvents: "visible"}}>
          <polygon onClick={() => console.log("AAAA")} id="SvgjsPolygon1008" points="51.96152422706631,15,51.96152422706631,45 25.980762113533157,60,0,45 0,15,25.980762113533157,0" fill="none" stroke="#999999" strokeWidth="1" transform="matrix(1,0,0,1,0,0)"></polygon>
          <polygon onClick={() => console.log("VVVV")} id="SvgjsPolygon1009" points="51.96152422706631,15,51.96152422706631,45 25.980762113533157,60,0,45 0,15,25.980762113533157,0" fill="none" stroke="#999999" strokeWidth="1" transform="matrix(1,0,0,1,51.96152422706631,0)"></polygon>
        </svg> */}
      </ul>

      <ul className="navbar-nav flex-row ml-auto d-flex">
        <form className="form-inline">
          <a
            href="https://github.com/artyomtrityak/atlantis-client/issues/new"
            target="_blank"
            className="btn btn-sm btn-info"
            role="button"
            style={{ marginRight: 30 }}
          >
            Report a bug
          </a>
        </form>
        <li className="nav-item">
          <a className="nav-link">
            <span className="badge badge-light">Turn 14</span>
          </a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-item nav-link dropdown-toggle mr-md-2" style={{ color: "#e2dfdf" }} href="#">
            Artem Trytiak
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="bd-versions">
            <a className="dropdown-item" href="#">
              Account Settings
            </a>
            <a className="dropdown-item" href="#">
              Game Settings ([Game Name])
            </a>
            <a className="dropdown-item disabled" href="#">
              Messages
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              Log Out
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Header));
