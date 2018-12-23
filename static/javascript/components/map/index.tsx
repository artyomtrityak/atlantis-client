import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { withSize } from "../utils";
import Hex from "./hex";
import Draggable from "gsap/Draggable";

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
    const svgWidth = maxX * 50; // TODO: add zoom support
    const svgHeight = maxY * 45;
    const regionsCount = maxX * maxY;

    // TODO calculate max map size based on wrap flags: isWrap, isTopEdge, isBottomEdge
    // If no flags - max regions + buffer right / left for blanks, + buffer top / bottom for blanks
    // If isWrap - no buffer left and right
    // If isTopEdge - no buffer top
    // If isBottomEdge - no buffer bottom
    return (
      <div ref={this.containerRef} style={{ width: this.props.width, height: this.props.height, overflow: "hidden" }}>
        {/* TODO: if there is edge in report which goes from 0,x to 100,x render copy */}
        <svg ref={this.mapSvgRef} style={{ width: svgWidth, height: svgHeight }}>
          {_.range(regionsCount).map(this.renderHex)}
        </svg>
        {/* TODO: if there is edge in report which goes from 100,x to 0,x render copy */}
      </div>
    );
  }

  renderHex(d, i) {
    const { maxX, maxY, minY } = this.props;
    // TODO: move calc position here?
    return <Hex index={i} key={d} maxY={maxY} />;
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
      isWrap: false
    };
  }
  return {
    regions: currentLevelData.regions,
    maxX: currentLevelData.maxX,
    maxY: currentLevelData.maxY,
    isWrap: currentLevelData.isWrap
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onClick: () => dispatch("")
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSize(Map));
