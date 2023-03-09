import React from "react";

import { Box, BoxProps, Stack, Typography, useTheme } from "@mui/material";

import { IconEdit } from "@/components";

interface ButtonEditProps extends BoxProps {}

export default function ButtonEdit({ ...props }: ButtonEditProps) {
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;

  return (
    <Box sx={{ cursor: "pointer" }} {...props}>
      <Stack alignItems="center" flexDirection="row" gap="8px">
        <IconEdit sx={{ stroke: secondary, fill: "none" }} />

        <Typography variant="h3" color={secondary} sx={{ userSelect: "none" }}>
          Edit
        </Typography>
      </Stack>
    </Box>
  );
}
