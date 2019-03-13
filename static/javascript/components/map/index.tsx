import Draggable from "gsap/Draggable";
import TweenLite from "gsap/TweenLite";
import React, { useRef, useEffect, useLayoutEffect, RefObject } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import _ from "lodash";
import { ICombinedReducersState } from "../../reducers";
import { selectRegion } from "../../actions/regions-actions";
import { withSize } from "../utils";
import Hex from "./hex";
import Controls from "./controls";
import { calculateMapPositions, calculateHexPosition } from "./utils";
import { IMapProps } from "./map.d";

import "./styles/index.scss";

function onCenter(props: IMapProps, mapSvgRef: RefObject<SVGSVGElement>) {
  const { maxX, maxY, zoom, regions, width, height } = props;
  if (Object.keys(regions).length === 0) {
    return;
  }
  let { selectedRegion } = props;
  let { svgWidth } = calculateMapPositions({ x: maxX, y: maxY, zoom });
  svgWidth = props.width > svgWidth ? props.width : svgWidth;

  if (!selectedRegion) {
    selectedRegion = Object.keys(regions)[0];
  }

  const {
    coordinates: { x, y }
  } = regions[selectedRegion];
  const position = calculateHexPosition({ x, y, zoom });

  // TODO: limit x,y offset if zoom is minimum
  TweenLite.set(mapSvgRef.current, {
    x: -1 * svgWidth - position.x + width / 2,
    y: -1 * position.y + height / 2
  });
}

const Map = (props: IMapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapSvgRef = useRef<SVGSVGElement>(null);
  const { maxX, maxY, zoom } = props;

  useEffect(() => {
    const draggableIns = Draggable.create(mapSvgRef.current, {
      dragClickables: true,
      type: "x,y",
      bounds: containerRef.current,
      overshootTolerance: 0
    });
    return () => draggableIns.kill();
  }, []);

  useLayoutEffect(
    () => {
      onCenter(props, mapSvgRef);
    },
    [props.zoom, props.level]
  );

  const { svgWidth, svgHeight } = calculateMapPositions({ x: maxX, y: maxY, zoom });
  const svgHeightFit = props.height > svgHeight ? props.height : svgHeight;

  return (
    <div ref={containerRef} className="map" style={{ width: props.width, height: props.height }}>
      <Controls onCenter={() => onCenter(props, mapSvgRef)} />
      <svg ref={mapSvgRef} style={{ width: svgWidth * 3, height: svgHeightFit }}>
        <rect width="100%" height="100%" fill="lightgray" />
        {_.range(3).map((i: number) => (
          <g key={`map_${i}`} transform={`translate(${svgWidth * i} , 0)`}>
            {renderMap(props)}
          </g>
        ))}
        {/* TODO: Create 3 region selectors to put them on top of svg regions */}
      </svg>
    </div>
  );
};

function renderMap(props: IMapProps) {
  const { maxX, maxY, regions, zoom, selectedRegion, level } = props;
  const regionsHexes = [];

  for (let x = 0; x <= maxX; x++) {
    for (let y = 0; y <= maxY; y++) {
      const regionKey = `${x}_${y}_${level}`;
      const region = regions[regionKey];
      if (!region) {
        continue;
      }
      regionsHexes.push(
        <Hex key={regionKey} x={x} y={y} region={region} onSelect={props.onSelect} isSelected={region.id === selectedRegion} zoom={zoom} />
      );
    }
  }
  return regionsHexes;
}

const mapStateToProps = (state: ICombinedReducersState) => {
  // TODO: do another solution about mapLevel, make it same as real level?
  const currentLevelData = state.regions.levels[state.regions.mapLevel];
  if (!currentLevelData) {
    return {
      regions: {},
      maxX: 0,
      maxY: 0,
      isWrap: false,
      selectedRegion: undefined,
      zoom: state.regions.zoom,
      level: 0
    };
  }
  return {
    regions: currentLevelData.regions,
    maxX: currentLevelData.maxX,
    maxY: currentLevelData.maxY,
    isWrap: currentLevelData.isWrap,
    selectedRegion: currentLevelData.selectedRegion,
    zoom: state.regions.zoom,
    level: currentLevelData.level
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
