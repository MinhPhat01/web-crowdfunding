import {
  FormHelperTextProps as MuiFormHelperTextProps,
  FormHelperText as MuiFormHelperText,
} from "@mui/material";

interface FormHelperTextProps {
  FormHelperTextProps?: MuiFormHelperTextProps;
  helperText?: string;
}

const FormHelperText = (props: FormHelperTextProps) => {
  const { FormHelperTextProps, helperText } = props;

  if (FormHelperTextProps == undefined) {
    return <MuiFormHelperText>{helperText}</MuiFormHelperText>;
  }

  return <MuiFormHelperText {...FormHelperTextProps} />;
};

export default FormHelperText;
