import { Box, Grid, styled, Avatar } from "@mui/material";

import Fundrasing from "./components/Fundrasing";
import SearchInput from "./components/SearchInput";
import { ButtonSecondary, Image } from "@/components";

export default function Header() {
  return (
    <StyledGridWrapper container columnSpacing="2.5rem">
      <Grid item xs={1}>
        <StyledWrapperImg>
          <Image
            alt="logo"
            width={52}
            height={52}
            src="/images/Logo.png"
            style={{ objectFit: "contain" }}
          />
        </StyledWrapperImg>
      </Grid>

      <Grid item xs={11}>
        <Grid container columnSpacing="3rem">
          <Grid item xs={5}>
            <SearchInput />
          </Grid>

          <Grid item xs={7}>
            <HeaderRight />
          </Grid>
        </Grid>
      </Grid>
    </StyledGridWrapper>
  );
}

const HeaderRight = () => {
  return (
    <StyledHeaderRight>
      <Fundrasing />

      <ButtonSecondary title="Start a campaign" />

      <StyledWrapperAvatar>
        <Avatar alt="Cat" src="/images/cat.avif" />
      </StyledWrapperAvatar>
    </StyledHeaderRight>
  );
};

// ---------------- Styled ---------------------

const StyledWrapperImg = styled(Box)(() => {
  return {
    width: "52px",
    margin: "0 auto",
  };
});

const StyledWrapperAvatar = styled(Box)(() => {
  return {
    cursor: "pointer",
  };
});

const StyledHeaderRight = styled(Box)(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "24px",
  };
});

const StyledGridWrapper = styled(Grid)(() => {
  return {
    paddingTop: "1.1rem",
    alignItems: "center",
  };
});
