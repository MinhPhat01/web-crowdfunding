import { Typography, useTheme } from "@mui/material";

import Credential from "./components/Credential";
import { Spacing, WrapperSection } from "@/components";
import PersonalInformation from "./components/PersonalInformation";

export default function ProfileSetting() {
  const theme = useTheme();
  const { black, white } = theme.palette.common;

  return (
    <WrapperSection>
      <Typography
        variant="h2"
        color={theme.palette.mode === "dark" ? white : black}
      >
        Account Information
      </Typography>

      <Typography
        variant="paragraphText"
        fontWeight={400}
        color={theme.palette.neutral.neutral3}
      >
        Update your account information
      </Typography>

      <Spacing spacing={6.875} />

      <PersonalInformation />

      <Spacing spacing={6.875} />

      <Credential />
    </WrapperSection>
  );
}
