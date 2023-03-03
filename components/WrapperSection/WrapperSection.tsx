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
      <Spacing spacing={25} />
    </StyledWrapperSection>
  );
}

const StyledWrapperSection = styled(Box)(() => {
  return {
    height: "100vh",
    overflow: "hidden",
    overflowY: "auto",
    ["::-webkit-scrollbar"]: {
      display: "none",
    },
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    scrollBehavior: "smooth",
  };
});
