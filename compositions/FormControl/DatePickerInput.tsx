import { useToggle } from "react-use";
import { useCallback } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";

import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import {
  Box,
  FormControl,
  FormControlProps,
  FormLabel,
  FormLabelProps,
  styled,
  useTheme,
} from "@mui/material";

type DatePickerControlProps<T extends FieldValues> = {
  label?: string;
  FormLabelProps?: FormLabelProps;
  FormControlProps?: FormControlProps;
  DatePickerProps?: DatePickerProps<any>;
  control: Control<T, string>;
  name: Path<T>;
};

const DatePickerInput = <T extends FieldValues>(
  props: DatePickerControlProps<T>
) => {
  const {
    name,
    label,
    control,
    DatePickerProps,
    FormControlProps,
    FormLabelProps,
  } = props;

  const {
    field: { value, onChange, ref },
  } = useController({
    name,
    control,
  });

  const theme = useTheme();
  const { white } = theme.palette.common;
  const { main } = theme.palette.darkColor;

  const [isFocus, toggleIsFocus] = useToggle(false);

  const onFocusHandler = useCallback(() => {
    toggleIsFocus(true);
  }, []);

  const onBlurHandler = useCallback(() => {
    toggleIsFocus(false);
  }, []);

  return (
    <FormControl {...FormControlProps}>
      <FormLabel
        sx={{
          color: isFocus ? theme.palette.primary.main : "",
        }}
        {...FormLabelProps}
      >
        {label}
      </FormLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box onFocus={onFocusHandler} onBlur={onBlurHandler}>
          <StyledDatePicker
            {...DatePickerProps}
            format="DD-MM-YYYY"
            ref={ref}
            value={value}
            onChange={onChange}
            sx={{
              width: "100%",
              [".MuiInputBase-root"]: {
                color: theme.palette.mode === "dark" ? white : "",
              },
              [".MuiOutlinedInput-notchedOutline"]: {
                borderColor: theme.palette.mode === "dark" ? main : "",
              },
            }}
          />
        </Box>
      </LocalizationProvider>
    </FormControl>
  );
};

export default DatePickerInput;

const StyledDatePicker = styled(DesktopDatePicker)(({ theme }) => {
  return {
    [".MuiInputBase-root"]: {
      borderRadius: "10px",
      padding: "4px 20px",
      color: theme.palette.common.black,
    },
    [".MuiOutlinedInput-notchedOutline"]: {
      border: "1px solid black",
    },
    [".Mui-focused .MuiOutlinedInput-notchedOutline"]: {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  };
});
