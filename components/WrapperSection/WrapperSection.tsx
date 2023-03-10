import Spacing from "../Spacing";
import { useMedia } from "@/hooks/useMedia";
import { Box, styled } from "@mui/material";

export default function WrapperSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isSmDown } = useMedia();
  return (
    <StyledWrapperSection>
      {children}
      <Spacing spacing={isSmDown ? 22 : 24} />
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
