import { Fragment, useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import { Box, Button, Grid, Stack, Typography, styled } from "@mui/material";

import { Spacing } from "@/components";
import ButtonEdit from "./ButtonEdit";
import {
  DatePickerInput,
  FormControl,
  FormControlForPhoneNumber,
} from "@/compositions";
import { useMedia } from "@/hooks/useMedia";

export default function PersonalInformation() {
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
        <StyledTitle>Personal Information</StyledTitle>

        <ButtonEdit onClick={handleEditForm} />
      </Stack>

      <Spacing spacing={4.375} />

      <Box>
        <Grid container spacing="40px">
          <Grid item xs={12} md={6}>
            <FormControl
              name="firstName"
              label="First Name"
              control={control}
              placeholder="Please enter your first name"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl
              name="lastName"
              label="Last Name"
              control={control}
              placeholder="Please enter your last name"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <DatePickerInput
              name="date"
              label="Date of birth"
              control={control}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControlForPhoneNumber
              name="phoneNumber"
              control={control}
              label="Mobile Number"
              placeholder="Please enter your phone number"
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
