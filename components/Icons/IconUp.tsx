import { SvgIconProps } from "@mui/material";
import SVGIconBase from "./SVGIconBase";

export default function IconUp(props: SvgIconProps) {
  return (
    <SVGIconBase {...props} viewBox="-5 -5 24 24">
      <path d="M16 2.293L11.707 6.586L7.707 2.586L0 10.293L1.414 11.707L7.707 5.414L11.707 9.414L17.414 3.707L19.707 6V0H13.707L16 2.293Z"></path>
    </SVGIconBase>
  );
}
