import React, { useCallback, useState } from "react";
import { Control, Path, FieldValues, useController } from "react-hook-form";

import {
  FormLabel,
  InputProps,
  FormControl,
  FormLabelProps,
  FormControlProps,
  FormHelperTextProps,
  FormHelperText as MuiFormHelperText,
  Input,
  styled,
  Box,
} from "@mui/material";
import FormHelperText from "./FormHelperText";
import { IconEyeOff, IconEyeOn, IconLock } from "@/components";

export type AugmentFormControlBaseProps<T extends FieldValues> = {
  label?: string;
  helperText?: string;
  placeholder?: string;
  InputProps?: InputProps;
  FormLabelProps?: FormLabelProps;
  FormControlProps?: FormControlProps;
  FormHelperTextProps?: FormHelperTextProps;
  control: Control<T, string>;
  name: Path<T>;
};

const FormControlForPassword = <T extends FieldValues>(
  props: AugmentFormControlBaseProps<T>
) => {
  const {
    name,
    label,
    control,
    helperText,
    InputProps,
    placeholder,
    FormLabelProps,
    FormControlProps,
    FormHelperTextProps,
  } = props;

  const {
    field: { value, onChange, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const [show, setShow] = useState<boolean>(false);

  const handleShowPassword = useCallback(() => {
    setShow((prevState) => !prevState);
  }, []);

  return (
    <FormControl {...FormControlProps} error={!!error}>
      <FormLabel {...FormLabelProps}>{label}</FormLabel>

      <StyledInput
        placeholder={placeholder}
        {...InputProps}
        value={value}
        inputRef={ref}
        onChange={onChange}
        error={!!error}
        startAdornment={<IconLock sx={{ fill: "none" }} />}
        endAdornment={
          <StyledWrapperBtn onClick={handleShowPassword}>
            {show ? (
              <IconEyeOn sx={{ fill: "none" }} />
            ) : (
              <IconEyeOff sx={{ fill: "none" }} />
            )}
          </StyledWrapperBtn>
        }
        type={show ? "text" : "password"}
      />

      <FormHelperText
        helperText={helperText}
        FormHelperTextProps={FormHelperTextProps}
      />

      {error && <MuiFormHelperText>{error.message}</MuiFormHelperText>}
    </FormControl>
  );
};

export default FormControlForPassword;

const StyledInput = styled(Input)(() => {
  return {
    padding: "16.5px 25px",

    [".MuiInputBase-input"]: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingBottom: "0",
    },
  };
});

const StyledWrapperBtn = styled(Box)(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };
});
