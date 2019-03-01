export interface IGameMenuProps {
  readonly isOpen: boolean;
}

export interface IGameMenuIconProps {
  readonly isOpen: boolean;
  readonly open: () => void;
  readonly close: () => void;
}
