import React, { useState, useRef, useEffect, RefObject } from "react";
import _ from "lodash";
import { Subtract } from "utility-types";

interface InjectedProps {
  readonly width: number;
  readonly height: number;
}
type ISizeState = Nullable<InjectedProps>;

const useResize = (containerRef: RefObject<HTMLDivElement>) => {
  const [state, setState] = useState<ISizeState>({ width: null, height: null });
  useEffect(() => {
    const onResize = () => {
      if (containerRef.current && containerRef.current) {
        setState({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };
    const onResizeDebounced = _.debounce(onResize, 500);
    onResize();
    window.addEventListener("resize", onResizeDebounced);
    return () => window.removeEventListener("resize", onResizeDebounced);
  }, []);
  return state;
};

export default <WrappedProps extends InjectedProps>(WrappedComponent: React.ComponentType<WrappedProps>) => {
  type HocProps = Subtract<WrappedProps, InjectedProps>;

  return function withSize(props: HocProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const state = useResize(containerRef);
    const { ...restProps } = props as WrappedProps; // typescript bug, tmp solution
    return (
      <div style={{ height: "100%", width: "100%" }} ref={containerRef}>
        {state.width && state.height ? <WrappedComponent {...restProps} width={state.width} height={state.height} /> : null}
      </div>
    );
  };
};
