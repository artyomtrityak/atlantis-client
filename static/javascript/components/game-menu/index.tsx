import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import menuIcon from "../../../assets/svg/menu.svg";
import { Icon } from "../utils";
import { openGameMenu, closeGameMenu } from "../../actions/navigation-actions";

import "./game-menu-styles.scss";
import GameMenu from "./game-menu";

const GameMenuIcon = props => {
  const { open, close, isOpen } = props;
  return (
    <React.Fragment>
      <Icon
        {...menuIcon}
        className={cn("game-menu-icon", { "game-menu-icon--expanded": isOpen })}
        onClick={() => (isOpen ? close() : open())}
      />
      <GameMenu isOpen={isOpen} />
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isOpen: state.navigations.isGameMenuOpen
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    open: () => dispatch(openGameMenu()),
    close: () => dispatch(closeGameMenu())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(GameMenuIcon));
