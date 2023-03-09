import { SvgIconProps } from "@mui/material";

export default function IconUp(props: SvgIconProps) {
  return (
    <svg width={20} height={12} fill="none" {...props}>
      <path
        d="M16 2.293l-4.293 4.293-4-4L0 10.293l1.414 1.414 6.293-6.293 4 4 5.707-5.707L19.707 6V0h-6L16 2.293z"
        fill="#A2A2A8"
      />
    </svg>
  );
}
