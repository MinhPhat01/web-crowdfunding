import React, { useMemo } from "react";

import { Box, Grid, styled, Typography, useTheme } from "@mui/material";

import { PaymentCard, Spacing, WrapperSection } from "@/components";

import { listPayment } from "@/constant";
import { useMedia } from "@/hooks/useMedia";

export default function Payment() {
  const { isSmDown } = useMedia();

  const renderListPayment = useMemo(() => {
    return listPayment.map((item) => {
      return (
        <Grid item xs={12} md={12} lg={6} key={item.id}>
          <PaymentCard
            desc={item.desc}
            logoSrc={item.logoSrc}
            name={item.name}
          />
        </Grid>
      );
    });
  }, []);

  return (
    <WrapperSection>
      <Spacing spacing={isSmDown ? 5 : 8.25} />

      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={10} sm={10} md={8} textAlign="center">
          <Box>
            <Typography variant="h2">Connect Your Payment Processor</Typography>

            <StyledDesc>
              To Start Processing credit card payments and donations, you will
              need to select either Paypal or Payoneer
            </StyledDesc>

            <Spacing spacing={7.5} />

            <Grid container spacing="2.5rem">
              {renderListPayment}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </WrapperSection>
  );
}

const StyledDesc = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.bodyText,
    color: theme.palette.neutral.neutral3,
    fontWeight: 400,
  };
});
