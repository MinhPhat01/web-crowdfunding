import React from "react";
import { Button, ButtonProps, styled } from "@mui/material";
import { PALETTE_COLOR, PSEUDO_STATE } from "@/configuration";

interface ButtonSecondaryProps extends ButtonProps {
  title: string;
}

export default function ButtonSecondary({
  title,
  ...restProps
}: ButtonSecondaryProps) {
  return (
    <StyledButtonSecondary {...restProps} color="secondary">
      {title}
    </StyledButtonSecondary>
  );
}

const StyledButtonSecondary = styled(Button)(() => {
  return {
    textTransform: "none",
    paddingLeft: "26px",
    paddingRight: "26px",
    transition: "all  0.3s",
    [PSEUDO_STATE.hover]: {
      backgroundColor: PALETTE_COLOR.secondaryHovered,
    },
  };
});
