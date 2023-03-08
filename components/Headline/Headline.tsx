import React from "react";
import { Stack, Typography, useTheme } from "@mui/material";

type HeadlineProps = {
  title: string;
  quantity?: number;
};

export default function Headline({ title, quantity }: HeadlineProps) {
  const theme = useTheme();
  return (
    <Stack flexDirection="row" alignItems="center" columnGap="8px">
      <Typography
        variant="bodyText"
        color={
          theme.palette.mode === "dark"
            ? theme.palette.common.white
            : theme.palette.common.black
        }
      >
        {title}
      </Typography>
      {quantity && (
        <Typography
          variant="bodyText"
          color={
            theme.palette.mode === "dark"
              ? theme.palette.common.white
              : theme.palette.secondary.main
          }
        >
          ({quantity})
        </Typography>
      )}
    </Stack>
  );
}
