import React from "react";
import cn from "classnames";
import { calculateHexPosition, regionWidth, regionHeight } from "./utils";
import { IHexProps } from "./map.d";

class Hex extends React.PureComponent<IHexProps> {
  elRef = React.createRef<SVGPolygonElement>();

  constructor(props: IHexProps) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidUpdate(prevProps: IHexProps) {
    // Detach / attach element to DOM because of svg no z-index and last renders on top
    if (this.props.isSelected && !prevProps.isSelected && this.elRef.current && this.elRef.current.parentNode) {
      const parent = this.elRef.current.parentNode;
      parent.removeChild(this.elRef.current);
      parent.appendChild(this.elRef.current);
    }
  }

  onSelect() {
    this.props.onSelect(this.props.region.id);
  }

  render() {
    const { y, x, zoom, isSelected, region } = this.props;
    const points = [
      { x: 0, y: 0.5 * regionHeight },
      { x: 0.25 * regionWidth, y: 0 },
      { x: 0.75 * regionWidth, y: 0 },
      { x: 1 * regionWidth, y: 0.5 * regionHeight },
      { x: 0.75 * regionWidth, y: 1 * regionHeight },
      { x: 0.25 * regionWidth, y: 1 * regionHeight }
    ];

    const pointsPath = points.map(d => `${zoom * d.x},${zoom * d.y}`).join(" ");
    const position = calculateHexPosition({ x, y, zoom });

    return (
      <polygon
        ref={this.elRef}
        transform={`translate(${position.x}, ${position.y})`}
        points={pointsPath}
        className={cn("hex", `hex--type-${region.type}`, {
          "hex--selected": isSelected
        })}
        onClick={this.onSelect}
      />
    );
  }
}

export default Hex;
