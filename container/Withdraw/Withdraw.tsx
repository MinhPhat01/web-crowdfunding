import React, { useMemo } from "react";

import { Box, Grid, Stack, styled, Typography } from "@mui/material";

import { Spacing, WrapperSection } from "@/components";
import WithdrawItem from "./components/WithdrawItem";
import { listWithdraw } from "@/constant";

export default function Withdraw() {
  const renderListItem = useMemo(() => {
    return listWithdraw.map((item) => {
      return (
        <WithdrawItem
          key={item.id}
          title={item.title}
          date={item.date}
          category={item.category}
          amount={item.amount}
          rating={item.rating}
          author={item.author}
          img={item.img}
        />
      );
    });
  }, []);

  return (
    <WrapperSection>
      <Grid container spacing="2.5rem">
        <Grid item xs={12}>
          <Box padding="0 30px">
            <Grid container spacing="15px">
              <Grid item xs={4.5}>
                <StyledTitle>Campaign</StyledTitle>
              </Grid>

              <Grid item xs={2.5}>
                <StyledTitle>Category</StyledTitle>
              </Grid>

              <Grid item xs={2.5}>
                <StyledTitle>Amount</StyledTitle>
              </Grid>

              <Grid item xs={2.5}>
                <StyledTitle>Backer</StyledTitle>
              </Grid>
            </Grid>
          </Box>

          <Spacing spacing={2} />

          <StyledWrapperItem>
            <Stack gap="30px">{renderListItem}</Stack>
          </StyledWrapperItem>
        </Grid>

        {/* <Grid item xs={3}></Grid> */}
      </Grid>
    </WrapperSection>
  );
}

const StyledTitle = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paragraphText,
    fontWeight: 600,
    color:
      theme.palette.mode === "dark"
        ? theme.palette.common.white
        : theme.palette.common.black,
  };
});

const StyledWrapperItem = styled(Box)(({ theme }) => {
  return {
    backgroundColor:
      theme.palette.mode === "dark" ? "#1C1C24" : theme.palette.common.white,
    padding: "1rem 1.875rem",
    overflow: "auto",
  };
});
