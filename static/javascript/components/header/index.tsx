import cn from "classnames";
import React from "react";
import { connect } from "react-redux";
import { showLoadReportModal } from "../../actions/navigation-actions";
import "./header-styles.scss";

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      reportsDropdownOpen: false,
      userDropdownOpen: false
    };
    this.elRef = React.createRef();
    this.onGlobalClick = this.onGlobalClick.bind(this);
    this.onReportsDropdownToggle = this.onReportsDropdownToggle.bind(this);
    this.onUserDropdownToggle = this.onUserDropdownToggle.bind(this);
    this.closeDropdowns = this.closeDropdowns.bind(this);
    this.showLoadReport = this.showLoadReport.bind(this);
  }

  componentDidMount() {
    window.addEventListener("click", this.onGlobalClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.onGlobalClick);
  }

  onGlobalClick(e) {
    if (!this.state.reportsDropdownOpen && !this.state.userDropdownOpen) {
      return;
    }
    if (this.elRef.current.contains(e.target)) {
      return;
    }
    this.setState({
      reportsDropdownOpen: false,
      userDropdownOpen: false
    });
  }

  onReportsDropdownToggle() {
    this.setState({
      reportsDropdownOpen: !this.state.reportsDropdownOpen,
      userDropdownOpen: false
    });
  }

  onUserDropdownToggle() {
    this.setState({
      userDropdownOpen: !this.state.userDropdownOpen,
      reportsDropdownOpen: false
    });
  }

  closeDropdowns() {
    // switch
    this.setState({
      userDropdownOpen: false,
      reportsDropdownOpen: false
    });
  }

  showLoadReport() {
    this.closeDropdowns();
    this.props.showLoadReport();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg header" ref={this.elRef}>
        <a className="navbar-brand">Atlantis Client</a>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle header__link" href="#" role="button" onClick={this.onReportsDropdownToggle}>
              Reports & Orders
            </a>
            <div className={cn("dropdown-menu", { show: this.state.reportsDropdownOpen })}>
              <a className="dropdown-item" href="#" onClick={this.showLoadReport}>
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
          <form className="form-inline">
            <a
              href="https://github.com/artyomtrityak/atlantis-client/issues/new"
              target="_blank"
              className="btn btn-sm btn-info mr-5"
              role="button"
              style={{ lineHeight: "1rem" }}
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
            <a className="nav-item nav-link dropdown-toggle mr-2 header__link" href="#" onClick={this.onUserDropdownToggle}>
              Artem Trytiak
            </a>
            <div className={cn("dropdown-menu", "dropdown-menu-right", { show: this.state.userDropdownOpen })}>
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
  }
}

// const Header = () => {

// };

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    showLoadReport: () => {
      console.log("SHOW");
      dispatch(showLoadReportModal());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Header));
