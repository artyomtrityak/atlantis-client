import React from "react";
import cn from "classnames";
import "./icon-styles.scss";

interface IProps {
  viewBox: string;
  id: string;
  className: string;
  width: number;
  height: number;
  disabled: boolean;
  onClick: () => void;
  style?: {};
}

export default (props: IProps) => {
  const styles = { width: props.width, height: props.height, ...props.style };
  console.log(props);

  return (
    <svg
      viewBox={props.viewBox}
      style={styles}
      className={cn("atl-icon", props.className, {
        "atl-icon--disabled": props.disabled
      })}
      onClick={props.disabled ? undefined : props.onClick}
    >
      <use xlinkHref={`#${props.id}`} />
    </svg>
  );
};
