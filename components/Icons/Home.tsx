import React, { SFC } from "react";
import SVGIconProps from "./SVGIconProps";

const Home: SFC<SVGIconProps> = ({
  width = 32,
  height = 32,
  strokeWidth = "6.25%",
  strokeLinejoin = "round",
  strokeLinecap = "round",
  color = "currentcolor"
}) => (
  <svg
    id="i-home"
    viewBox="0 0 32 32"
    width={width}
    height={height}
    fill="none"
    stroke={color}
    strokeLinecap={strokeLinecap}
    strokeLinejoin={strokeLinejoin}
    strokeWidth={strokeWidth}
  >
    <path d="M12 20 L12 30 4 30 4 12 16 2 28 12 28 30 20 30 20 20 Z" />
  </svg>
);

export default Home;
