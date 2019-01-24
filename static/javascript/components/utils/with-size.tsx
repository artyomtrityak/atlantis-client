import React from "react";
import _ from "lodash";
import { Subtract } from "utility-types";

interface IState {
  width?: number;
  height?: number;
}

interface InjectedProps {
  width: number;
  height: number;
}

export default <WrappedProps extends InjectedProps>(WrappedComponent: React.ComponentType<WrappedProps>) => {
  type HocProps = Subtract<WrappedProps, InjectedProps>;

  return class WithSize extends React.PureComponent<HocProps, IState> {
    containerRef = React.createRef<HTMLDivElement>();

    constructor(props: HocProps) {
      super(props);
      this.state = {
        width: undefined,
        height: undefined
      };
      this.onResize = _.debounce(this.onResize.bind(this), 500);
    }

    componentDidMount() {
      if (this.containerRef.current && this.containerRef.current) {
        this.setState({
          width: this.containerRef.current.clientWidth,
          height: this.containerRef.current.clientHeight
        });
      }
      window.addEventListener("resize", this.onResize);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.onResize);
    }

    onResize() {
      if (this.containerRef.current && this.containerRef.current) {
        this.setState({
          width: this.containerRef.current.clientWidth,
          height: this.containerRef.current.clientHeight
        });
      }
    }

    render() {
      const { width, height } = this.state;
      const { ...restProps } = this.props as WrappedProps; // typescript bug, tmp solution
      return (
        <div style={{ height: "100%", width: "100%" }} ref={this.containerRef}>
          {width && height ? <WrappedComponent {...restProps} width={width} height={height} /> : null}
        </div>
      );
    }
  };
};
