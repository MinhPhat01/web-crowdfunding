import React from "react";

import { Box, Container, Grid, Stack } from "@mui/material";

import Header from "./Header";
import { Spacing } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Stack>
        <Header />

        <Spacing spacing={3.75} />

        <Grid container columnSpacing="2.5rem">
          <Grid item xs={1}>
            <Box height="500px" bgcolor="yellowgreen"></Box>
          </Grid>
          <Grid item xs={11}>
            <Box height="500px" bgcolor="red">
              {children}
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
