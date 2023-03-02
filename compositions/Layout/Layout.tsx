import React, { Fragment } from "react";

import { Box, Container, Grid, Stack } from "@mui/material";

import Header from "./Header";
import { Spacing } from "@/components";
import Navbar from "./components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Container>
        <Stack flexDirection="column">
          <Header />

          <Spacing spacing={3.75} />

          <Grid container columnSpacing="2.5rem">
            <Grid item xs={1}>
              <Navbar />
            </Grid>
            <Grid item xs={11} sx={{ overflow: "hidden", height: "80vh" }}>
              {children}
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
