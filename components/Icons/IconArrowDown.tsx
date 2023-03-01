import React from "react";
import { SvgIconProps } from "@mui/material";
import SVGIconBase from "./SVGIconBase";

export default function IconArrowDown(props: SvgIconProps) {
  return (
    <SVGIconBase {...props} viewBox="-5 -5 24 24">
      <path d="M1 1L6 6L11 1" />
    </SVGIconBase>
  );
}
