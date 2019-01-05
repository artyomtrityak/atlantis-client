import React from "react";
import cn from "classnames";

class Hex extends React.PureComponent {
  elRef = React.createRef();

  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Detach / attach element to DOM because of svg no z-index and last renders on top
    if (this.props.isSelected && !prevProps.isSelected) {
      const parent = this.elRef.current.parentNode;
      parent.removeChild(this.elRef.current);
      parent.appendChild(this.elRef.current);
    }
  }

  onSelect() {
    this.props.onSelect(this.props.region.id);
  }

  render() {
    const props = this.props;
    const width = 100;
    const height = 90;

    const points = [
      { x: 0, y: 0.5 * height },
      { x: 0.25 * width, y: 0 },
      { x: 0.75 * width, y: 0 },
      { x: 1 * width, y: 0.5 * height },
      { x: 0.75 * width, y: 1 * height },
      { x: 0.25 * width, y: 1 * height }
    ];
    // TODO: pass zoom from reducer
    const zoom = 0.5;
    const pointsPath = points.map(d => `${zoom * d.x},${zoom * d.y}`).join(" ");

    let offsetX = 0;
    if (props.col !== 0) {
      offsetX = (-52 * props.col) / 2;
    }
    if (props.col % 2 === 1) {
      offsetX = -26 * props.col;
    }

    const moveY = (height / 2) * props.row * zoom;
    const moveX = width * props.col * zoom + offsetX * zoom;

    return (
      <polygon
        ref={this.elRef}
        transform={`translate(${moveX}, ${moveY})`}
        points={pointsPath}
        className={cn("hex", `hex--type-${props.region.type}`, {
          "hex--selected": this.props.isSelected
        })}
        title={`${props.col},${props.row}`}
        onClick={this.onSelect}
      />
    );
  }
}

export default Hex;
