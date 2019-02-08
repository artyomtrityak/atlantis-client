import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import centerIcon from "../../../assets/svg/center.svg";
import zoomInIcon from "../../../assets/svg/zoom-in.svg";
import zoomOutIcon from "../../../assets/svg/zoom-out.svg";
import downLevelIcon from "../../../assets/svg/down-level.svg";
import upLevelIcon from "../../../assets/svg/up-level.svg";
import { ICombinedReducersState } from "../../reducers";
import { Icon } from "../utils";
import { zoomIn, zoomOut, levelDown, levelUp } from "../../actions/regions-actions";
import { IControlProps } from "./map.d";

const MapControls = (props: IControlProps) => {
  const { zoom, onZoomIn, onZoomOut, onCenter, onLevelUp, onLevelDown, levelsLen, mapLevel } = props;
  return (
    <div className="map-controls">
      <Icon {...zoomInIcon} onClick={onZoomIn} className="map-controls__icon" disabled={zoom >= 1} title="Zoom In" />
      <Icon {...zoomOutIcon} onClick={onZoomOut} className="map-controls__icon mt-1" title="Zoom Out" disabled={zoom <= 0.1} />
      <Icon {...centerIcon} onClick={onCenter} className="map-controls__icon mt-1" title="Center Map" />
      <Icon {...upLevelIcon} onClick={onLevelUp} className="map-controls__icon mt-3" disabled={mapLevel === 0} title="Level Up" />
      <Icon
        {...downLevelIcon}
        onClick={onLevelDown}
        className="map-controls__icon mt-1"
        disabled={levelsLen === mapLevel + 1}
        title="Level Down"
      />
    </div>
  );
};

const mapStateToProps = (state: ICombinedReducersState) => {
  return {
    zoom: state.regions.zoom,
    levelsLen: state.regions.levels.length,
    mapLevel: state.regions.mapLevel
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onZoomIn: () => dispatch(zoomIn()),
    onZoomOut: () => dispatch(zoomOut()),
    onLevelUp: () => dispatch(levelUp()),
    onLevelDown: () => dispatch(levelDown())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(MapControls));
