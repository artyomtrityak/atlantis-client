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

class MapControls extends React.Component<IControlProps> {
  render() {
    const props = this.props;
    console.log(props.zoom, props.zoom >= 1);

    return (
      <div className="map-controls">
        <Icon {...zoomInIcon} onClick={props.onZoomIn} className="map-controls__icon" disabled={props.zoom >= 1} title="Zoom In" />
        <Icon
          {...zoomOutIcon}
          onClick={props.onZoomOut}
          className="map-controls__icon mt-1"
          title="Zoom Out"
          disabled={props.zoom <= 0.1}
        />
        <Icon {...centerIcon} onClick={props.onCenter} className="map-controls__icon mt-1" title="Center Map" />
        <Icon {...upLevelIcon} onClick={props.onLevelUp} className="map-controls__icon mt-3" title="Level Up" />
        <Icon {...downLevelIcon} onClick={props.onLevelDown} className="map-controls__icon mt-1" title="Level Down" />
      </div>
    );
  }
}

const mapStateToProps = (state: ICombinedReducersState) => {
  return {
    zoom: state.regions.zoom
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
