import cn from "classnames";
import React from "react";

interface IProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function UserMenu(props: IProps) {
  const { isOpen, onOpen } = props;
  return (
    <li className="nav-item dropdown">
      <a className="nav-item nav-link dropdown-toggle mr-2 header__link" href="#" onClick={() => onOpen}>
        Artem Trytiak
      </a>
      <div className={cn("dropdown-menu", "dropdown-menu-right", { show: isOpen })}>
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
  );
}
