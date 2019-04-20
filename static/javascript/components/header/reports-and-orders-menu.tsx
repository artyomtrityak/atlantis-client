import cn from "classnames";
import React from "react";

interface IProps {
  showLoadReport: () => void;
  downloadOrders: () => void;
  onOpen: () => void;
  isOpen: boolean;
}

export default function ReportsAndOrdersMenuItem(props: IProps) {
  const { isOpen, showLoadReport, downloadOrders, onOpen } = props;
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle header__link" href="#" role="button" onClick={() => onOpen()}>
        Reports & Orders
      </a>
      <div className={cn("dropdown-menu", { show: isOpen })}>
        <a className="dropdown-item" href="#" onClick={() => showLoadReport()}>
          Load Turn Report
        </a>
        <a className="dropdown-item" href="#" onClick={() => downloadOrders()}>
          Download Turn Orders
        </a>
        <a className="dropdown-item" href="#">
          Load Turn Orders
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
