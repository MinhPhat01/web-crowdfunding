import { Control, FieldValues, Path, useController } from "react-hook-form";

import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import {
  FormControl,
  FormControlProps,
  FormLabel,
  FormLabelProps,
  styled,
} from "@mui/material";
import { COMPONENT_STATE } from "@/configuration";

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

  return (
    <FormControl {...FormControlProps}>
      <FormLabel {...FormLabelProps} id={name}>
        {label}
      </FormLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledDatePicker
          {...DatePickerProps}
          format="DD-MM-YYYY"
          ref={ref}
          value={value}
          onChange={onChange}
        />
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
