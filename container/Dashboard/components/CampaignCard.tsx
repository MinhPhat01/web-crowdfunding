import React from "react";
import { useMeasure } from "react-use";

import {
  Avatar,
  Box,
  Grid,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";

import { IconFolder, Image, NumberFormatForUSD } from "@/components";
import { BOX_SHADOW_COMMON, CARD_IMG_RATIO } from "@/constant";

type CampaignCardProps = {
  img: string;
  category: string;
  title: string;
  description: string;
  amount: number;
  backers: number;
  raised: number;
  avatar: string;
  author: string;
};

const CampaignCard = (props: CampaignCardProps) => {
  const {
    img,
    amount,
    backers,
    category,
    description,
    title,
    raised,
    avatar,
    author,
  } = props;
  const [ref, { width }] = useMeasure();
  const theme = useTheme();

  return (
    <StyledWrapperCard>
      <Box ref={ref}>
        <Image
          src={img}
          alt={title}
          width={width}
          height={width / CARD_IMG_RATIO}
          style={{
            objectFit: "contain",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
          }}
        />
      </Box>

      <StyledWrapperContent>
        <Stack flexDirection="row" alignItems="center" columnGap="8px">
          <IconFolder sx={{ fill: theme.palette.neutral.neutral3 }} />
          <Typography
            variant="paragraphText"
            color={theme.palette.neutral.neutral3}
          >
            {category}
          </Typography>
        </Stack>

        <StyledTitle>{title}</StyledTitle>

        <StyledDesc>{`${description}`}</StyledDesc>

        <Grid container>
          <Grid item xs={6}>
            <StyledNumber>
              <NumberFormatForUSD value={amount} />
            </StyledNumber>
          </Grid>

          <Grid item xs={6}>
            <StyledNumber>{backers}</StyledNumber>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={6}>
            <StyledSubText>
              Raised of <NumberFormatForUSD value={raised} />
            </StyledSubText>
          </Grid>

          <Grid item xs={6}>
            <StyledSubText>Total backers</StyledSubText>
          </Grid>
        </Grid>

        <Stack flexDirection="row" alignItems="center" columnGap="4px">
          <Avatar alt="Cat" src={avatar} />
          <StyledSubText>by</StyledSubText>
          <StyledAuthor>{author}</StyledAuthor>
        </Stack>
      </StyledWrapperContent>
    </StyledWrapperCard>
  );
};

export default CampaignCard;

const StyledWrapperCard = styled(Box)(({ theme }) => {
  return {
    borderRadius: "15px",
    backgroundColor: theme.palette.common.white,
    boxShadow: BOX_SHADOW_COMMON,
  };
});

const StyledWrapperContent = styled(Box)(() => {
  return {
    padding: "1rem 1.1rem",
    display: "flex",
    rowGap: "10px",
    flexDirection: "column",
  };
});

const StyledTitle = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.h3,
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    minHeight: 32 * 2,
  };
});

const StyledDesc = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paragraphText,
    color: theme.palette.neutral.neutral3,
    fontWeight: 400,
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    minHeight: 22 * 2,
  };
});

const StyledNumber = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paragraphText,
    color: theme.palette.neutral.neutral2,
    fontWeight: 600,
  };
});

const StyledSubText = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paragraphText2,
    color: theme.palette.neutral.neutral4,
    fontWeight: 400,
  };
});

const StyledAuthor = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paragraphText2,
    color: theme.palette.neutral.neutral2,
  };
});
