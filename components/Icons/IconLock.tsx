import React from "react";
import { SvgIconProps } from "@mui/material";
import SVGIconBase from "./SVGIconBase";

export default function IconLock(props: SvgIconProps) {
  return (
    <SVGIconBase {...props}>
      <path
        d="M19.778 11H4.222C2.995 11 2 11.977 2 13.182v7.636C2 22.023 2.995 23 4.222 23h15.556C21.005 23 22 22.023 22 20.818v-7.636C22 11.977 21.005 11 19.778 11zM6 11V6.556c0-1.474.632-2.887 1.757-3.929C8.883 1.585 10.41 1 12 1c1.591 0 3.117.585 4.243 1.627C17.368 3.67 18 5.082 18 6.556V11"
        stroke="#A2A2A8"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIconBase>
  );
}
