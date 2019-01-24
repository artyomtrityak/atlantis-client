import React from "react";
import cn from "classnames";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import menuIcon from "../../../assets/svg/menu.svg";
import { openGameMenu, closeGameMenu } from "../../actions/navigation-actions";
import { ICombinedReducersState } from "../../reducers";
import { Icon } from "../utils";
import "./game-menu-styles.scss";
import GameMenu from "./game-menu";
import { IGameMenuIconProps } from "./game-menu.d";

class GameMenuIcon extends React.PureComponent<IGameMenuIconProps> {
  private elRef = React.createRef<HTMLDivElement>();

  constructor(props: IGameMenuIconProps) {
    super(props);
    this.onGlobalClick = this.onGlobalClick.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("click", this.onGlobalClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.onGlobalClick);
  }

  onGlobalClick(e: MouseEvent) {
    if (!this.props.isOpen) {
      return;
    }

    if (!(e.target instanceof Element)) {
      return;
    }

    if (!this.elRef.current || this.elRef.current.contains(e.target)) {
      return;
    }
    this.props.close();
  }

  onClick() {
    const { isOpen, close, open } = this.props;
    if (isOpen) {
      close();
    } else {
      open();
    }
  }

  render() {
    const { isOpen } = this.props;
    return (
      <div ref={this.elRef}>
        <Icon {...menuIcon} className={cn("game-menu-icon", { "game-menu-icon--expanded": isOpen })} onClick={this.onClick} />
        <GameMenu isOpen={isOpen} />
      </div>
    );
  }
}

const mapStateToProps = (state: ICombinedReducersState) => {
  return {
    isOpen: state.navigations.isGameMenuOpen
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    open: () => dispatch(openGameMenu()),
    close: () => dispatch(closeGameMenu())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(GameMenuIcon));
