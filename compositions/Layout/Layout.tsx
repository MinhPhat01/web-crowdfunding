import React from "react";

import { Box, Container, Grid, Stack, styled } from "@mui/material";

import Header from "./Header";
import { Spacing } from "@/components";
import Navbar from "./components/Navbar";
import { useMedia } from "@/hooks/useMedia";
import HeaderMobile from "./HeaderMobile";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isMdDown, isMdUp } = useMedia();
  return (
    <StyledWrapperLayout>
      <Container>
        <Stack flexDirection="column">
          {isMdDown ? <HeaderMobile /> : <Header />}

          <Spacing spacing={3.75} />

          <Grid container spacing="2.5rem">
            {isMdUp && (
              <Grid item xs={1}>
                <Navbar />
              </Grid>
            )}

            <Grid
              item
              xs={12}
              sm={12}
              md={11}
              sx={{ overflow: "hidden", height: "80vh" }}
            >
              {children}
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </StyledWrapperLayout>
  );
}

const StyledWrapperLayout = styled(Box)(() => {
  return {
    backgroundColor: "#f5f5f5",
    height: "100vh",
    overflow: "hidden",
  };
});
