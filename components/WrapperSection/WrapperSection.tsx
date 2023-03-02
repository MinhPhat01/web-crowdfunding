import React from "react";
import { Box, styled } from "@mui/material";
import Spacing from "../Spacing";

export default function WrapperSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledWrapperSection>
      {children}
      <Spacing spacing={20} />
    </StyledWrapperSection>
  );
}

const StyledWrapperSection = styled(Box)(() => {
  return {
    height: "100vh",
    overflow: "hidden",
    overflowY: "auto",
  };
});
