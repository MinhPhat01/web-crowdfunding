import { Box, Grid, Stack, styled, Typography, useTheme } from "@mui/material";

import { ButtonSecondary, IconPlus } from "@/components";

import { useMedia } from "@/hooks/useMedia";
import { PALETTE_COLOR, PSEUDO_STATE } from "@/configuration";

export default function CreateCampaign() {
  const theme = useTheme();
  const { black, white } = theme.palette.common;
  const { isSmDown } = useMedia();

  return (
    <StyledWrapper>
      <Grid container alignItems="center">
        <Grid item xs={12} sm={6}>
          <Stack flexDirection="row" alignItems="center" gap="1.5rem">
            <StyledWrapperIcon>
              <IconPlus />
            </StyledWrapperIcon>

            <Stack flexDirection="column">
              <Typography
                variant="h3"
                color={theme.palette.mode === "dark" ? white : black}
              >
                Create Your Campaign
              </Typography>

              <Typography
                fontWeight={400}
                variant="paragraphText"
                color={theme.palette.neutral.neutral3}
              >
                Jump right into our editor and create your first Virtue
                campaign!
              </Typography>

              <Typography
                fontWeight={400}
                variant="paragraphText"
                color={theme.palette.primary.main}
              >
                Need any help? Learn More...
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          textAlign={isSmDown ? "center" : "right"}
          paddingTop={isSmDown ? "1rem" : "0"}
        >
          <ButtonSecondary title="Create campaign" />
        </Grid>
      </Grid>
    </StyledWrapper>
  );
}

const StyledWrapper = styled(Box)(({ theme }) => {
  const white = theme.palette.common.white;
  const darkLight = theme.palette.darkColor.light;

  return {
    borderRadius: "1.25rem",
    padding: "1.875rem 2rem",
    backgroundColor: theme.palette.mode === "dark" ? darkLight : white,
  };
});

const StyledWrapperIcon = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    backgroundColor: theme.palette.secondary.main,
    cursor: "pointer",
    borderRadius: "6.25rem",
    transition: "all ease 0.4s",
    [PSEUDO_STATE.hover]: {
      backgroundColor: PALETTE_COLOR.secondaryHovered,
    },
  };
});
