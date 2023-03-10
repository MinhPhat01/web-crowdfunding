import React from "react";
import { SvgIconProps } from "@mui/material";
import SVGIconBase from "./SVGIconBase";

export default function IconEyeOn(props: SvgIconProps) {
  return <SVGIconBase {...props}>
    <path
        d="M3 12s3.273-7 9-7 9 7 9 7-3.273 7-9 7-9-7-9-7z"
        stroke="#A2A2A8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14a2 2 0 100-4 2 2 0 000 4z"
        stroke="#A2A2A8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
  </SVGIconBase>;
}
