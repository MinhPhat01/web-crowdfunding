import { Box, Stack, Grid, styled } from "@mui/material";

import { Image } from "@/components";
import SearchInput from "./components/SearchInput";

export default function Header() {
  return (
    <Grid container paddingTop="2.5rem">
      <Grid item xs={6}>
        <Grid container columnSpacing="2.5rem">
          <Grid item xs={2}>
            <StyledWrapperImg>
              <Image
                src="/images/Logo.png"
                alt="logo"
                width={52}
                height={52}
                style={{ objectFit: "contain" }}
              />
            </StyledWrapperImg>
          </Grid>

          <Grid item xs={10}>
            <SearchInput />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={6}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
        ></Stack>
      </Grid>
    </Grid>
  );
}

const StyledWrapperImg = styled(Box)(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});
