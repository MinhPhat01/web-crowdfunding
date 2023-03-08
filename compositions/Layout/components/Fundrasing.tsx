import { Stack, Typography, useTheme } from "@mui/material";

import { IconArrowDown, IconUp } from "@/components";

export default function Fundrasing() {
  const theme = useTheme();
  const iconColor = theme.palette?.colorIcon?.colorIcon;

  return (
    <Stack
      alignItems="center"
      flexDirection="row"
      columnGap="10px"
      sx={{ cursor: "pointer" }}
    >
      <IconUp
        sx={{
          fill: iconColor,
          stroke: iconColor,
        }}
      />
      <Typography variant="bodyText" color={theme.palette.neutral?.neutral2}>
        Fundrising for
      </Typography>

      <IconArrowDown
        sx={{
          fill: iconColor,
          stroke: iconColor,
        }}
      />
    </Stack>
  );
}
