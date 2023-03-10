import { Stack, Typography, useTheme } from "@mui/material";

type HeadlineProps = {
  title: string;
  quantity?: number;
};

export default function Headline({ title, quantity }: HeadlineProps) {
  const theme = useTheme();
  const { white, black } = theme.palette.common;
  const secondary = theme.palette.secondary.main;

  return (
    <Stack flexDirection="row" alignItems="center" columnGap="8px">
      <Typography
        variant="bodyText"
        color={theme.palette.mode === "dark" ? white : black}
      >
        {title}
      </Typography>
      {quantity && (
        <Typography
          variant="bodyText"
          color={theme.palette.mode === "dark" ? white : secondary}
        >
          ({quantity})
        </Typography>
      )}
    </Stack>
  );
}
