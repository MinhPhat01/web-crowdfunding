import { Fragment, useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import { Box, Button, Grid, Stack, styled, Typography } from "@mui/material";

import { Spacing } from "@/components";
import ButtonEdit from "./ButtonEdit";
import { FormControlForEmail, FormControlForPassword } from "@/compositions";
import { useMedia } from "@/hooks/useMedia";

export default function Credential() {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { control, handleSubmit } = useForm();
  const { isMdDown } = useMedia();

  const onUpdateForm = useCallback((values: any) => {
    setIsEdit(false);
  }, []);

  const handleEditForm = useCallback(() => {
    setIsEdit((prevState) => !prevState);
  }, []);

  return (
    <Fragment>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <StyledTitle>Credential</StyledTitle>

        <ButtonEdit onClick={handleEditForm} />
      </Stack>

      <Spacing spacing={4.375} />

      <Box>
        <Grid container spacing="40px">
          <Grid item xs={12}>
            <FormControlForEmail name="email" label="Email" control={control} />
          </Grid>

          <Grid item xs={6}>
            <FormControlForPassword
              name="newPassword"
              control={control}
              label="New Password"
            />
          </Grid>

          <Grid item xs={6}>
            <FormControlForPassword
              name="confirmPassword"
              control={control}
              label="Confirm Password"
            />
          </Grid>
        </Grid>

        <Spacing spacing={3.75} />

        {isEdit && (
          <Button
            type="submit"
            sx={{ padding: "0.75rem 4rem", width: isMdDown ? "100%" : "" }}
            onClick={handleSubmit(onUpdateForm)}
          >
            Update
          </Button>
        )}
      </Box>
    </Fragment>
  );
}

const StyledTitle = styled(Typography)(({ theme }) => {
  const { black, white } = theme.palette.common;

  return {
    ...theme.typography.h3,
    color: theme.palette.mode === "dark" ? white : black,
  };
});
