import Draggable from "gsap/Draggable";
import TweenLite from "gsap/TweenLite";
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
    this.onCenter = this.onCenter.bind(this);
    this.onCenterHex = this.onCenterHex.bind(this);
  }

  componentDidMount() {
    this.draggableIns = Draggable.create(this.mapSvgRef.current, {
      dragClickables: true,
      type: "x,y",
      bounds: this.containerRef.current,
      overshootTolerance: 0,
      onDragEnd: () => {
        // console.log(this, arguments);
        // console.log(this.draggableIns.endX, this.draggableIns.endY);
      }
    });
  }

  componentDidUpdate(prevProps: IMapProps) {
    if (prevProps.zoom !== this.props.zoom) {
      this.onCenter();
    }
  }

  componentWillUnmont() {
    this.draggableIns.kill();
  }

  onCenter() {
    // console.log("CENTER");
    // const { maxX, maxY, zoom } = this.props;
    // let { svgWidth } = calculateMapPositions({ x: maxX, y: maxY, zoom });
    // svgWidth = this.props.width > svgWidth ? this.props.width : svgWidth;

    // TweenLite.set(this.mapSvgRef.current, {x: -1 * svgWidth * zoom, y: 0});

    // this.onCenterHex();
    console.log("CENTER");
  }

  onCenterHex() {
    // const { regions, zoom, selectedRegion } = this.props;
    // if (!selectedRegion) {
    //   return;
    // }

    // const region = regions[selectedRegion];
    // console.log("SELECTED: region", region, selectedRegion);
    console.log("CENTER HEX");
  }

  render() {
    const { maxX, maxY, zoom } = this.props;
    const { svgWidth, svgHeight } = calculateMapPositions({ x: maxX, y: maxY, zoom });
    const svgHeightFit = this.props.height > svgHeight ? this.props.height : svgHeight;

    return (
      <div ref={this.containerRef} className="map" style={{ width: this.props.width - 30, height: this.props.height - 10 }}>
        <Controls onCenter={this.onCenter} />
        <svg ref={this.mapSvgRef} style={{ width: svgWidth * 3, height: svgHeightFit }}>
          <rect width="100%" height="100%" fill="lightgray" />
          {_.range(3).map((i: number) => (
            <g key={`map_${i}`} transform={`translate(${svgWidth * i} , 0)`}>
              {this.renderMap()}
            </g>
          ))}
        </svg>
      </div>
    );
  }

  renderMap() {
    const { maxX, maxY } = this.props;

    const regionsHexes = [];
    for (let x = 0; x <= maxX; x++) {
      for (let y = 0; y <= maxY; y++) {
        regionsHexes.push(this.renderHex(x, y));
      }
    }
    return regionsHexes;
  }

  renderHex(x: number, y: number) {
    const { regions, zoom, selectedRegion, level } = this.props;
    const regionKey = `${x}_${y}_${level}`;
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
  const currentLevelData = state.regions.levels.find(r => r.level === state.regions.currentLevel);
  if (!currentLevelData) {
    return {
      regions: {},
      maxX: 0,
      maxY: 0,
      isWrap: false,
      selectedRegion: state.regions.selectedRegion,
      zoom: state.regions.zoom,
      level: 0
    };
  }
  return {
    regions: currentLevelData.regions,
    maxX: currentLevelData.maxX,
    maxY: currentLevelData.maxY,
    isWrap: currentLevelData.isWrap,
    selectedRegion: state.regions.selectedRegion,
    zoom: state.regions.zoom,
    level: state.regions.currentLevel
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
