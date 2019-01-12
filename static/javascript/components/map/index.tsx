import Draggable from "gsap/Draggable";
import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { selectRegion } from "../../actions/regions-actions";
import { withSize } from "../utils";
import Hex from "./hex";
import Controls from "./controls";
import { calculateMapPositions } from "./utils";

import "./styles/index.scss";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderHex = this.renderHex.bind(this);
    this.containerRef = React.createRef();
    this.mapSvgRef = React.createRef();
  }

  componentDidMount() {
    this.draggableIns = Draggable.create(this.mapSvgRef.current, {
      dragClickables: true,
      type: "x,y",
      bounds: this.containerRef.current,
      overshootTolerance: 0
    });
  }

  componentWillUnmont() {
    this.draggableIns.kill();
  }

  render() {
    const { maxX, maxY, zoom } = this.props;
    const { svgWidth, svgHeight } = calculateMapPositions({ x: maxX, y: maxY, zoom });

    // TODO calculate max map size based on wrap flags: isWrap, isTopEdge, isBottomEdge
    // If no flags - max regions + buffer right / left for blanks, + buffer top / bottom for blanks
    // If isWrap - no buffer left and right
    // If isTopEdge - no buffer top
    // If isBottomEdge - no buffer bottom
    return (
      <div ref={this.containerRef} className="map" style={{ width: this.props.width - 30, height: this.props.height }}>
        <Controls />
        {/* TODO: if there is edge in report which goes from 0,x to 100,x render copy */}
        <svg ref={this.mapSvgRef} style={{ width: svgWidth * 3, height: svgHeight }}>
          <g transform={`translate(0, 0)`}>{this.renderMap()}</g>
          <g transform={`translate(${svgWidth}, 0)`}>{this.renderMap()}</g>
          <g transform={`translate(${svgWidth * 2}, 0)`}>{this.renderMap()}</g>
        </svg>
        {/* TODO: if there is edge in report which goes from 100,x to 0,x render copy */}
      </div>
    );
  }

  renderMap() {
    const { maxX, maxY } = this.props;
    const regionsHexes = [];
    for (let y = 0; y <= maxY; y++) {
      for (let x = 0; x <= maxX; x++) {
        regionsHexes.push(this.renderHex({ x, y }));
      }
    }
    return regionsHexes;
  }

  renderHex({ x, y }) {
    const { regions, zoom, selectedRegion } = this.props;
    const regionKey = `${y}_${x}`;
    const region = regions[regionKey];

    if (!region) {
      return null;
    }

    return (
      <Hex
        key={regionKey}
        x={x}
        y={y}
        region={region}
        onSelect={this.props.onSelect}
        isSelected={region.id === selectedRegion}
        zoom={zoom}
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
      selectedRegion: state.regions.selectedRegion,
      zoom: state.regions.zoom
    };
  }
  return {
    regions: currentLevelData.regions,
    maxX: currentLevelData.maxX,
    maxY: currentLevelData.maxY,
    isWrap: currentLevelData.isWrap,
    selectedRegion: state.regions.selectedRegion,
    zoom: state.regions.zoom
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSelect: regionId => dispatch(selectRegion(regionId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSize(Map));
