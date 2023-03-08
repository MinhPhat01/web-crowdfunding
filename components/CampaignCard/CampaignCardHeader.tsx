import { Fragment } from "react";
import { useMeasure } from "react-use";

import { Box, Grid, Stack, styled, Typography, useTheme } from "@mui/material";

import { IconFolder, Image, NumberFormatForUSD } from "@/components";

type CampaignCardRowProps = {
  img: string;
  category: string;
  title: string;
  description: string;
  amount: number;
  backers: number;
  date: number;
  raised: number;
};

export default function CampaignCardHeader(props: CampaignCardRowProps) {
  const { img, amount, backers, category, date, description, title, raised } =
    props;
  const theme = useTheme();

  const [ref, { width }] = useMeasure<HTMLDivElement>();
  const [ref2, { height: height2 }] = useMeasure<HTMLDivElement>();

  return (
    <Fragment>
      <Grid container spacing="1.875rem">
        <Grid item xs={12} sm={6}>
          <Box ref={ref} height="100%">
            <Image
              src={img}
              alt={title}
              width={width}
              height={height2}
              style={{
                objectFit: "cover",
                borderRadius: "1.5rem",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} ref={ref2}>
          <StyledWrapper>
            <Stack flexDirection="column" justifyContent="center" rowGap="12px">
              <Stack flexDirection="row" alignItems="center" columnGap="8px">
                <IconFolder sx={{ fill: theme.palette.neutral.neutral3 }} />
                <Typography
                  variant="paragraphText"
                  color={theme.palette.neutral.neutral3}
                >
                  {category}
                </Typography>
              </Stack>

              <Typography
                variant="h3"
                color={
                  theme.palette.mode === "dark"
                    ? theme.palette.common.white
                    : theme.palette.common.black
                }
              >
                {title}
              </Typography>

              <StyledDesc>{`${description}`}</StyledDesc>

              <StyledWrapperProgressbar>
                <StyledProgressbar />
              </StyledWrapperProgressbar>

              <Grid container>
                <Grid item xs={4}>
                  <StyledNumber>
                    <NumberFormatForUSD value={amount} />
                  </StyledNumber>
                </Grid>

                <Grid item xs={4}>
                  <StyledNumber>{backers}</StyledNumber>
                </Grid>

                <Grid item xs={4}>
                  <StyledNumber>{date}</StyledNumber>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs={4}>
                  <StyledSubText>
                    Raised of <NumberFormatForUSD value={raised} />
                  </StyledSubText>
                </Grid>

                <Grid item xs={4}>
                  <StyledSubText>Total backers</StyledSubText>
                </Grid>

                <Grid item xs={4}>
                  <StyledSubText>Days left</StyledSubText>
                </Grid>
              </Grid>
            </Stack>
          </StyledWrapper>
        </Grid>
      </Grid>
    </Fragment>
  );
}

// -----Styled-------

const StyledDesc = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paragraphText,
    color: theme.palette.neutral.neutral3,
    fontWeight: 400,
  };
});

const StyledNumber = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.h3,
    color: theme.palette.neutral.neutral2,
  };
});

const StyledSubText = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.bodyText2,
    lineHeight: "26px",
    color: theme.palette.neutral.neutral4,
    fontWeight: 400,
  };
});

const StyledWrapper = styled(Box)(() => {
  return {
    display: "flex",
    alignItems: "center",
    height: "100%",
  };
});

const StyledWrapperProgressbar = styled(Box)(() => {
  return {
    position: "relative",
    height: "5px",
    width: "100%",
    borderRadius: "5px",
    backgroundColor: "#EFEFEF",
  };
});

const StyledProgressbar = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    height: "5px",
    width: "60%",
    borderRadius: "5px",
    backgroundColor: theme.palette.primary.main,
  };
});
