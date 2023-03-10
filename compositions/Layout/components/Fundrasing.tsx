import { Box, Typography, styled } from "@mui/material";
import { IconArrowDown, IconUp } from "@/components";

export default function Fundrasing() {
  return (
    <StyledWrapper>
      <IconUp />

      <StyledText>Fundrising for</StyledText>

      <StyledIcon />
    </StyledWrapper>
  );
}

const StyledWrapper = styled(Box)(() => {
  return {
    gap: "10px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };
});

const StyledText = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.bodyText,
    color: theme.palette.neutral.neutral2,
  };
});

const StyledIcon = styled(IconArrowDown)(({ theme }) => {
  const iconColor = theme.palette.colorIcon;
  return {
    fill: iconColor,
    stroke: iconColor,
  };
});
