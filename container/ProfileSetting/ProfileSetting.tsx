import { styled, Typography } from "@mui/material";

import Credential from "./components/Credential";
import { Spacing, WrapperSection } from "@/components";
import PersonalInformation from "./components/PersonalInformation";

export default function ProfileSetting() {
  return (
    <WrapperSection>
      <StyledTitle>Account Information</StyledTitle>

      <StyledDesc>Update your account information</StyledDesc>

      <Spacing spacing={6.875} />

      <PersonalInformation />

      <Spacing spacing={6.875} />

      <Credential />
    </WrapperSection>
  );
}

const StyledTitle = styled(Typography)(({ theme }) => {
  const { black, white } = theme.palette.common;

  return {
    ...theme.typography.h2,
    color: theme.palette.mode === "dark" ? white : black,
    display: "block",
  };
});

const StyledDesc = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paragraphText,
    fontWeight: 400,
    color: theme.palette.neutral.neutral3,
  };
});
