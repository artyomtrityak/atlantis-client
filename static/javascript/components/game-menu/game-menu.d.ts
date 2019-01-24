export interface IGameMenuProps {
  isOpen: boolean;
}

export interface IGameMenuIconProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}
