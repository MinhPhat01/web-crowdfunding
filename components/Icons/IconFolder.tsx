import { SvgIconProps } from "@mui/material";
import SVGIconBase from "./SVGIconBase";

export default function IconFolder(props: SvgIconProps) {
  return (
    <SVGIconBase {...props}>
      <path
        d="M7.17 2l2 2H18v10H2V2h5.17zM8 0H2C.9 0 .01.9.01 2L0 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-8L8 0z"
        fill="#808191"
      />
    </SVGIconBase>
  );
}
