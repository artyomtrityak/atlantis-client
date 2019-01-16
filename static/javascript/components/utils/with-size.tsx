import React from "react";
import _ from "lodash";

export default Child => {
  return class WithSize extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        width: undefined,
        height: undefined
      };
      this.containerRef = React.createRef();
      this.onResize = _.debounce(this.onResize.bind(this), 500);
    }

    componentDidMount() {
      this.setState({
        width: this.containerRef.current.clientWidth,
        height: this.containerRef.current.clientHeight
      });
      window.addEventListener("resize", this.onResize);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.onResize);
    }

    onResize() {
      this.setState({
        width: this.containerRef.current.clientWidth,
        height: this.containerRef.current.clientHeight
      });
    }

    render() {
      const { width, height } = this.state;
      return (
        <div style={{ height: "100%", width: "100%" }} ref={this.containerRef}>
          {width && height ? <Child {...this.props} width={width} height={height} /> : null}
        </div>
      );
    }
  };
};
