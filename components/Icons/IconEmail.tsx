import React from "react";
import { SvgIconProps } from "@mui/material";
import SVGIconBase from "./SVGIconBase";

export default function IconEmail(props: SvgIconProps) {
  return (
    <SVGIconBase {...props}>
      <path
        d="M20.8 4H3.2C1.985 4 1 4.955 1 6.133v11.734C1 19.045 1.985 20 3.2 20h17.6c1.215 0 2.2-.955 2.2-2.133V6.133C23 4.955 22.015 4 20.8 4z"
        stroke="#A2A2A8"
        strokeWidth={1.5}
      />
      <path
        d="M1.5 5l9.724 8.714c.44.381 1.112.381 1.551 0L22.5 5"
        stroke="#A2A2A8"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 19l6.921-7M22 19l-6.921-7L22 19z"
        stroke="#A2A2A8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIconBase>
  );
}
