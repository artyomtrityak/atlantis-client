import React from "react";

export default (props: any) => {
  return (
    <svg viewBox={props.viewBox} style={props.style} className={props.className} onClick={props.onClick}>
      <use xlinkHref={`#${props.id}`} />
    </svg>
  );
};
