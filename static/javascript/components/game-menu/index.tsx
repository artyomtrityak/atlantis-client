import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import menuIcon from "../../../assets/svg/menu.svg";
import { openGameMenu, closeGameMenu } from "../../actions/navigation-actions";
import { Icon } from "../utils";
import "./game-menu-styles.scss";
import GameMenu from "./game-menu";

class GameMenuIcon extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onGlobalClick = this.onGlobalClick.bind(this);
    this.elRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("click", this.onGlobalClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.onGlobalClick);
  }

  onGlobalClick(e) {
    if (!this.props.isOpen || this.elRef.current.contains(e.target)) {
      return;
    }
    this.props.close();
  }

  render() {
    const { isOpen, close, open } = this.props;
    return (
      <div ref={this.elRef}>
        <Icon
          {...menuIcon}
          className={cn("game-menu-icon", { "game-menu-icon--expanded": isOpen })}
          onClick={() => (isOpen ? close() : open())}
        />
        <GameMenu isOpen={isOpen} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.navigations.isGameMenuOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    open: () => dispatch(openGameMenu()),
    close: () => dispatch(closeGameMenu())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(GameMenuIcon));
