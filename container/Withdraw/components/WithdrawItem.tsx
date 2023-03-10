import {
  Avatar,
  Grid,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import { Image, NumberFormatForUSD } from "@/components";

type WithdrawItemProps = {
  title: string;
  date: string;
  category: string;
  amount: number;
  rating: number;
  author: string;
  img: string;
};

export default function WithdrawItem(props: WithdrawItemProps) {
  const { title, date, category, amount, rating, author, img } = props;
  const theme = useTheme();

  return (
    <Grid container alignItems="center" spacing="15px">
      <Grid item xs={4.5}>
        <Stack alignItems="center" flexDirection="row" gap="15px">
          <Image
            src={img}
            alt={title}
            width={66}
            height={50}
            style={{ objectFit: "cover" }}
          />

          <Stack>
            <Typography
              variant="paragraphText2"
              color={
                theme.palette.mode === "dark"
                  ? theme.palette.common.white
                  : theme.palette.common.black
              }
            >
              {title}
            </Typography>
            <Typography
              variant="paragraphText"
              color={theme.palette.neutral.neutral3}
              fontWeight={500}
            >
              {`Date: ${date}`}
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid item xs={2.5}>
        <Typography
          variant="paragraphText"
          color={theme.palette.neutral.neutral3}
          fontWeight={500}
        >
          {category}
        </Typography>
      </Grid>

      <Grid item xs={2.5}>
        <Typography
          variant="paragraphText2"
          fontWeight={600}
          color={
            theme.palette.mode === "dark"
              ? theme.palette.common.white
              : theme.palette.common.black
          }
        >
          <NumberFormatForUSD value={amount} />
        </Typography>
      </Grid>

      <Grid item xs={2.5}>
        <Stack alignItems="center" flexDirection="row" gap="15px">
          <Avatar src="/images/cat.avif" />
          <Stack>
            <Typography
              variant="paragraphText"
              color={theme.palette.neutral.neutral3}
              fontWeight={500}
            >
              {author}
            </Typography>

            <Rating name="read-only" value={rating} readOnly />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}
