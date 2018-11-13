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
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" style={{ color: "#e2dfdf" }} href="#" role="button">
            Faction
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="#">
              Faction Points ((war icon)4, (trade icon)3, (magic icon)0)
            </a>
            <a className="dropdown-item" href="#">
              Another Factions & Relationships
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{ color: "#e2dfdf" }}>
            Atlantis Times
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{ color: "#e2dfdf" }}>
            Rules
          </a>
        </li>
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
