import React from "react";
import { connect } from "react-redux";
import centerIcon from "../../../assets/svg/center.svg";
import zoomInIcon from "../../../assets/svg/zoom-in.svg";
import zoomOutIcon from "../../../assets/svg/zoom-out.svg";
import downLevelIcon from "../../../assets/svg/down-level.svg";
import upLevelIcon from "../../../assets/svg/up-level.svg";
import { Icon } from "../utils";

const MapControls = props => {
  return (
    <div className="map-controls">
      <Icon {...zoomInIcon} onClick={props.onZoomIn} className="map-controls__icon" title="Zoom In" />
      <Icon {...zoomOutIcon} onClick={props.onZoomOut} className="map-controls__icon mt-1" title="Zoom Out" />
      <Icon {...centerIcon} onClick={props.onCenter} className="map-controls__icon mt-1" title="Center Map" />
      <Icon {...upLevelIcon} onClick={props.onLevelUp} className="map-controls__icon mt-3" title="Level Up" />
      <Icon {...downLevelIcon} onClick={props.onLevelDown} className="map-controls__icon mt-1" title="Level Down" />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onZoomIn: () => dispatch(""), // TODO: zoom in event
    onZoomOut: () => dispatch(""), // TODO: zoom out event
    onCenter: () => dispatch(""), // TODO: default zoom and center event
    onLevelUp: () => dispatch(""), // TODO: level up
    onLevelDown: () => dispatch("") // TODO: level down
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(MapControls));
