import Draggable from "gsap/Draggable";
import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { withSize } from "../utils";
import Hex from "./hex";
import Controls from "./controls";
import { selectRegion } from "../../actions/regions-actions";

import "./styles/index.scss";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderHex = this.renderHex.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDrag = this.onDrag.bind(this);

    this.containerRef = React.createRef();
    this.mapSvgRef = React.createRef();
  }

  componentDidMount() {
    this.draggableIns = Draggable.create(this.mapSvgRef.current, {
      type: "x,y",
      bounds: this.containerRef.current,
      overshootTolerance: 0
    });
  }

  componentWillUnmont() {
    this.draggableIns.kill();
  }

  onDragStart(e) {
    console.log("ON drag start");
  }

  onDragEnd(e) {
    console.log("ON drag end");
  }

  onDrag(e) {
    console.log("ON drag");
  }

  render() {
    const { maxX, maxY } = this.props;
    const horRegionsCount = maxX + 1; // include 0,y region
    const vertRegionsCount = maxY + 1; // include x,0 region
    const svgWidth = horRegionsCount * 50; // TODO: add zoom support
    const svgHeight = vertRegionsCount * 45;
    const regionsCount = vertRegionsCount * horRegionsCount;

    // TODO calculate max map size based on wrap flags: isWrap, isTopEdge, isBottomEdge
    // If no flags - max regions + buffer right / left for blanks, + buffer top / bottom for blanks
    // If isWrap - no buffer left and right
    // If isTopEdge - no buffer top
    // If isBottomEdge - no buffer bottom
    return (
      <div ref={this.containerRef} className="map" style={{ width: this.props.width, height: this.props.height }}>
        <Controls />
        {/* TODO: if there is edge in report which goes from 0,x to 100,x render copy */}
        <svg ref={this.mapSvgRef} style={{ width: svgWidth, height: svgHeight }}>
          {_.range(regionsCount).map(this.renderHex)}
        </svg>
        {/* TODO: if there is edge in report which goes from 100,x to 0,x render copy */}
      </div>
    );
  }

  renderHex(d, index) {
    const { regions, maxY } = this.props;
    const row = index % (maxY + 1);
    const col = parseInt(index / (maxY + 1), 10);
    const regionKey = `${col}_${row}`;
    const region = regions[regionKey];

    // TODO: add checks around to render empty hexes
    if (!region) {
      return null;
    }

    return (
      <Hex
        key={regionKey}
        row={row}
        col={col}
        region={region}
        onSelect={this.props.onSelect}
        isSelected={region.id === this.props.selectedRegion}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  console.log(state);
  const currentLevelData = state.regions.levels[state.regions.currentLevel];
  if (!currentLevelData) {
    return {
      regions: {},
      maxX: 0,
      maxY: 0,
      isWrap: false,
      selectedRegion: undefined
    };
  }
  return {
    regions: currentLevelData.regions,
    maxX: currentLevelData.maxX,
    maxY: currentLevelData.maxY,
    isWrap: currentLevelData.isWrap,
    selectedRegion: state.regions.selectedRegion
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSelect: regionId => dispatch(selectRegion(regionId)) // TODO: dispatch select
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSize(Map));
