import React from "react";
import { SvgIconProps } from "@mui/material";
import SVGIconBase from "./SVGIconBase";

export default function IconEyeOff(props: SvgIconProps) {
  return (
    <SVGIconBase {...props}>
      <path
        d="M13.735 13.855a2.465 2.465 0 01-.797.608 2.321 2.321 0 01-1.918.036 2.449 2.449 0 01-.817-.577 2.646 2.646 0 01-.54-.873 2.787 2.787 0 01.034-2.052c.134-.322.327-.612.569-.852m6.594 7.053A7.904 7.904 0 0112 19c-5.727 0-9-7-9-7a15.91 15.91 0 014.14-5.197l9.72 10.395zM10.282 5.21A7 7 0 0112 5c5.727 0 9 7 9 7a16.296 16.296 0 01-1.767 2.791L10.282 5.21zM3 2.5L21 21"
        stroke="#A2A2A8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIconBase>
  );
}
