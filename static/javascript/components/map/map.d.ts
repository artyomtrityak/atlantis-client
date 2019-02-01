import { IRegion, IRegions } from "../../reducers/regions";

export interface IMapProps {
  maxX: number;
  maxY: number;
  zoom: number;
  width: number;
  height: number;
  level: number;
  selectedRegion?: string;
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
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onCenter: () => void;
  onLevelUp: () => void;
  onLevelDown: () => void;
}

export interface IHexPosition {
  x: number;
  y: number;
  zoom: number;
}
