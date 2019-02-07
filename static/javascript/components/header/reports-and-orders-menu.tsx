import cn from "classnames";
import React from "react";

interface IProps {
  showLoadReport: () => void;
  onOpen: () => void;
  isOpen: boolean;
}

export default function ReportsAndOrdersMenu(props: IProps) {
  const { isOpen, showLoadReport, onOpen } = props;
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle header__link" href="#" role="button" onClick={() => onOpen()}>
        Reports & Orders
      </a>
      <div className={cn("dropdown-menu", { show: isOpen })}>
        <a className="dropdown-item" href="#" onClick={() => showLoadReport()}>
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
  );
}
