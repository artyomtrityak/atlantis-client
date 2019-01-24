import React from "react";

interface IProps {
  viewBox: string;
  id: string;
  className: string;
  width: number;
  height: number;
  onClick: () => void;
  style?: {};
}

export default (props: IProps) => {
  const styles = { width: props.width, height: props.height, ...props.style };
  return (
    <svg viewBox={props.viewBox} style={styles} className={props.className} onClick={props.onClick}>
      <use xlinkHref={`#${props.id}`} />
    </svg>
  );
};
