import { useMedia } from "@/hooks/useMedia";

import { Box, Container, Grid, Stack, styled, useTheme } from "@mui/material";

import Header from "./Header";
import { Spacing } from "@/components";
import Navbar from "./components/Navbar";
import HeaderMobile from "./HeaderMobile";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isMdDown, isMdUp } = useMedia();
  const theme = useTheme();
  console.log("🚀 ~ file: Layout.tsx:13 ~ Layout ~ theme:", theme.palette.mode);

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

const StyledWrapperLayout = styled(Box)(({ theme }) => {
  return {
    height: "100vh",
    overflow: "hidden",
    backgroundColor: theme.palette.mode === "dark" ? "#13131A" : "#f5f5f5",
  };
});
