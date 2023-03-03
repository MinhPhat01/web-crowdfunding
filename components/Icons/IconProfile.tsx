import { SvgIconProps } from "@mui/material";
import React from "react";
import SVGIconBase from "./SVGIconBase";

export default function IconProfile(props: SvgIconProps) {
  return (
    <SVGIconBase {...props}>
      <circle cx={12} cy={9} r={3} strokeWidth={2} strokeLinecap="round" />
      <circle cx={12} cy={12} r={11} strokeWidth={2} />
      <path
        d="M19 20C18.5871 18.8525 17.6773 17.8384 16.4117 17.1152C15.146 16.392 13.5953 16 12 16C10.4047 16 8.85398 16.392 7.58835 17.1152C6.32271 17.8384 5.41289 18.8525 5 20"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </SVGIconBase>
  );
}