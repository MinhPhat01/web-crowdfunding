import { useMeasure } from "react-use";

import { Box, Grid, Stack, styled, Typography, useTheme } from "@mui/material";

import { IconFolder, Image, NumberFormatForUSD } from "@/components";
import { CARD_ROW_IMG_RATIO } from "@/constant";

type CampaignCardRow = {
  img: string;
  category: string;
  title: string;
  description: string;
  amount: number;
  backers: number;
  date: number;
};

export default function CampaignCardRow(props: CampaignCardRow) {
  const { img, amount, backers, category, date, description, title } = props;
  const [ref, { width }] = useMeasure();
  const theme = useTheme();

  return (
    <Grid container>
      <Grid item xs={10}>
        <Grid container columnSpacing="1.875rem">
          <Grid item xs={6}>
            <Box ref={ref}>
              <Image
                src={img}
                alt={title}
                width={width}
                height={width / CARD_ROW_IMG_RATIO}
                style={{ objectFit: "cover", borderRadius: "1.5rem" }}
              />
            </Box>
          </Grid>

          <Grid item xs={6}>
            <StyledWrapper>
              <Stack
                flexDirection="column"
                justifyContent="center"
                rowGap="12px"
              >
                <Stack flexDirection="row" alignItems="center" columnGap="8px">
                  <IconFolder sx={{ fill: theme.palette.neutral.neutral3 }} />
                  <Typography
                    variant="paragraphText"
                    color={theme.palette.neutral.neutral3}
                  >
                    {category}
                  </Typography>
                </Stack>

                <Typography variant="h3">{title}</Typography>

                <Typography
                  variant="paragraphText"
                  lineHeight="14px"
                  fontWeight={400}
                  color={theme.palette.neutral.neutral3}
                >
                  {`${description}`}
                </Typography>

                <StyledWrapperProgressbar>
                  <StyledProgressbar />
                </StyledWrapperProgressbar>

                <Grid container>
                  <Grid item xs={4}>
                    <StyledNumber variant="h3">
                      <NumberFormatForUSD value={amount} />
                    </StyledNumber>
                  </Grid>

                  <Grid item xs={4}>
                    <StyledNumber variant="h3">{backers}</StyledNumber>
                  </Grid>

                  <Grid item xs={4}>
                    <StyledNumber variant="h3">{date}</StyledNumber>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={4}>
                    <StyledSubText variant="bodyText2">
                      Raised of $2,500
                    </StyledSubText>
                  </Grid>

                  <Grid item xs={4}>
                    <StyledSubText variant="bodyText2">
                      Total backers
                    </StyledSubText>
                  </Grid>

                  <Grid item xs={4}>
                    <StyledSubText variant="bodyText2">Days left</StyledSubText>
                  </Grid>
                </Grid>
              </Stack>
            </StyledWrapper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const StyledNumber = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.neutral.neutral2,
  };
});

const StyledSubText = styled(Typography)(({ theme }) => {
  return {
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
