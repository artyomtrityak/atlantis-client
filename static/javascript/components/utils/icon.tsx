import React from "react";

export default (props: any) => {
  return (
    <svg viewBox={props.viewBox}>
      <use xlinkHref={props.id} />
    </svg>
  );
};
