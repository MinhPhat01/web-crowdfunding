import React from "react";
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
} from "@mui/material";
import FormHelperText from "./FormHelperText";
import { IconEmail } from "@/components";

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

const FormControlForEmail = <T extends FieldValues>(
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
        startAdornment={<IconEmail sx={{ fill: "none" }} />}
      />

      <FormHelperText
        helperText={helperText}
        FormHelperTextProps={FormHelperTextProps}
      />

      {error && <MuiFormHelperText>{error.message}</MuiFormHelperText>}
    </FormControl>
  );
};

export default FormControlForEmail;

const StyledInput = styled(Input)(() => {
  return {
    padding: "16.5px 25px",

    [".MuiInputBase-input"]: {
      paddingLeft: "20px",
      paddingBottom: "0",
    },
  };
});
