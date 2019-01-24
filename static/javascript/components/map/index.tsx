import Draggable from "gsap/Draggable";
import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import _ from "lodash";
import { ICombinedReducersState } from "../../reducers";
import { selectRegion } from "../../actions/regions-actions";
import { withSize } from "../utils";
import Hex from "./hex";
import Controls from "./controls";
import { calculateMapPositions } from "./utils";
import { IMapProps } from "./map.d";

import "./styles/index.scss";

class Map extends React.PureComponent<IMapProps> {
  private containerRef = React.createRef<HTMLDivElement>();
  private mapSvgRef = React.createRef<SVGSVGElement>();
  private draggableIns: any;

  constructor(props: IMapProps) {
    super(props);
    this.renderHex = this.renderHex.bind(this);
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

  onCenter() {
    console.log("CENTER");
  }

  render() {
    const { maxX, maxY, zoom } = this.props;
    let { svgWidth, svgHeight } = calculateMapPositions({ x: maxX, y: maxY, zoom });
    svgWidth = this.props.width > svgWidth ? this.props.width : svgWidth;
    svgHeight = this.props.height > svgHeight ? this.props.height : svgHeight;

    return (
      <div ref={this.containerRef} className="map" style={{ width: this.props.width - 30, height: this.props.height - 10 }}>
        <Controls onCenter={this.onCenter} />
        <svg ref={this.mapSvgRef} style={{ width: svgWidth * 3, height: svgHeight }}>
          <rect width="100%" height="100%" fill="lightgray" />
          {_.range(3).map((i: number) => (
            <g key={`map_${i}`} transform={`translate(${svgWidth * i - i * 50 * zoom} , 0)`}>
              {this.renderMap()}
            </g>
          ))}
        </svg>
      </div>
    );
  }

  renderMap() {
    const { maxX, maxY } = this.props;

    console.log("MAX:", maxX, maxY);

    const regionsHexes = [];
    for (let y = 0; y <= maxY; y++) {
      for (let x = 0; x <= maxX; x++) {
        regionsHexes.push(this.renderHex(x, y));
      }
    }
    return regionsHexes;
  }

  renderHex(x: number, y: number) {
    const { regions, zoom, selectedRegion } = this.props;
    const regionKey: string = `${y}_${x}`;
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

const mapStateToProps = (state: ICombinedReducersState) => {
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

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onSelect: (regionId: string) => dispatch(selectRegion(regionId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSize(Map));
