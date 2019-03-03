export interface IMapProps {
  readonly maxX: number;
  readonly maxY: number;
  readonly zoom: number;
  readonly width: number;
  readonly height: number;
  readonly level: number;
  readonly selectedRegion?: string;
  readonly onSelect: (regionId: string) => void;
  readonly regions: IRegions;
}

export interface IHexProps {
  readonly isSelected: boolean;
  readonly zoom: number;
  readonly x: number;
  readonly y: number;
  readonly onSelect: (regionId: string) => void;
  readonly region: IRegion;
}

export interface IPoint {
  readonly x: number;
  readonly y: number;
}

export interface IControlProps {
  readonly zoom: number;
  readonly levelsLen: number;
  readonly mapLevel: number;
  readonly onZoomIn: () => void;
  readonly onZoomOut: () => void;
  readonly onCenter: () => void;
  readonly onLevelUp: () => void;
  readonly onLevelDown: () => void;
}

export interface IHexPosition {
  x: number;
  y: number;
  zoom: number;
}
