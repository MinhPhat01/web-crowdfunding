import React from "react";
import { SvgIconProps } from "@mui/material";

export default function IconArrowDown(props: SvgIconProps) {
  return (
    <svg width={12} height={8} fill="none" {...props}>
      <path d="M1 1l5 5 5-5" stroke="#A2A2A8" strokeWidth={2} />
    </svg>
  );
}
