import React from "react";

import { Container, Grid, Stack } from "@mui/material";

import Header from "./Header";
import { Spacing } from "@/components";
import Navbar from "./components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Stack>
        <Header />

        <Spacing spacing={3.75} />

        <Grid container columnSpacing="2.5rem">
          <Grid item xs={1}>
            <Navbar />
          </Grid>
          <Grid item xs={11}>
            {children}
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
