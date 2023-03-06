import React from "react";
import SVGIconBase from "./SVGIconBase";
import { SvgIconProps } from "@mui/material";

export default function IconPlus(props: SvgIconProps) {
  return (
    <SVGIconBase {...props}>
      <path
        d="M12 5v14M5 12h14"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIconBase>
  );
}
