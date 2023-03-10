import { Fragment, useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";

import { Spacing } from "@/components";
import ButtonEdit from "./ButtonEdit";
import { FormControlForEmail, FormControlForPassword } from "@/compositions";

export default function Credential() {
  const theme = useTheme();
  const { black, white } = theme.palette.common;

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { control, handleSubmit } = useForm();

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
        <Typography
          variant="h3"
          color={theme.palette.mode === "dark" ? white : black}
        >
          Credential
        </Typography>

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
            sx={{ padding: "0.75rem 4rem" }}
            onClick={handleSubmit(onUpdateForm)}
          >
            Update
          </Button>
        )}
      </Box>
    </Fragment>
  );
}
