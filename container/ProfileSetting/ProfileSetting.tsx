import { Typography, useTheme } from "@mui/material";

import { Spacing, WrapperSection } from "@/components";
import PersonalInformation from "./components/PersonalInformation";
import Credential from "./components/Credential";

export default function ProfileSetting() {
  const theme = useTheme();
  const black = theme.palette.common.black;

  return (
    <WrapperSection>
      <Typography variant="h2" color={black}>
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
