import React, { useState, useEffect, useRef, RefObject } from "react";
import cn from "classnames";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import menuIcon from "../../../assets/svg/menu.svg";
import { ICombinedReducersState } from "../../reducers";
import { Icon } from "../utils";
import "./game-menu-styles.scss";
import GameMenu from "./game-menu";
import { IGameMenuIconProps } from "./game-menu.d";

type IUseGlobalClick = [RefObject<HTMLDivElement>, boolean, React.Dispatch<React.SetStateAction<boolean>>];

const useGlobalClick = (): IUseGlobalClick => {
  const elRef = useRef<HTMLDivElement>(null);
  const isOpenRef = useRef(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    isOpenRef.current = isOpen;
  });

  useEffect(() => {
    function onGlobalClick(e: MouseEvent) {
      if (!isOpenRef.current) {
        return;
      }

      if (!(e.target instanceof Element)) {
        return;
      }

      if (!elRef.current || elRef.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    }

    window.addEventListener("click", onGlobalClick);
    return () => window.removeEventListener("click", onGlobalClick);
  }, []);

  return [elRef, isOpen, setOpen];
};

const GameMenuIcon = () => {
  const [elRef, isOpen, setOpen] = useGlobalClick();

  return (
    <div ref={elRef}>
      <Icon
        {...menuIcon}
        className={cn("game-menu-icon", {
          "game-menu-icon--expanded": isOpen
        })}
        onClick={() => setOpen(!isOpen)}
      />
      <GameMenu isOpen={isOpen} />
    </div>
  );
};

const mapStateToProps = (state: ICombinedReducersState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(GameMenuIcon));
