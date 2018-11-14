import React from "react";

export default (props: any) => {
  const styles = Object.assign({ width: props.width, height: props.height }, props.style);
  return (
    <svg viewBox={props.viewBox} style={styles} className={props.className} onClick={props.onClick}>
      <use xlinkHref={`#${props.id}`} />
    </svg>
  );
};
