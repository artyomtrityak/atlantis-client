// TODO: import regions type
export interface IRegion {
  id: string;
  type: string;
}

// TODO: import regions type
export interface IRegions {
  [key: string]: IRegion;
}

export interface IMapProps {
  maxX: number;
  maxY: number;
  zoom: number;
  width: number;
  height: number;
  selectedRegion?: string; // TODO: get selectedRegion type from reducer
  onSelect: (regionId: string) => void;
  regions: IRegions;
}

export interface IHexProps {
  isSelected: boolean;
  zoom: number;
  x: number;
  y: number;
  onSelect: (regionId: string) => void;
  region: IRegion;
}

export interface IPoint {
  x: number;
  y: number;
}

export interface IControlProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onCenter: () => void;
  onLevelUp: () => void;
  onLevelDown: () => void;
}
