import { Input } from "@mui/material";
import { FieldValues } from "react-hook-form";

import FormControlBase, {
  AugmentFormControlBaseProps,
} from "./FormControlBase";

const FormControl = <T extends FieldValues>(
  props: AugmentFormControlBaseProps<T>
) => {
  return <FormControlBase {...props} InputComponent={Input} />;
};

export default FormControl;
