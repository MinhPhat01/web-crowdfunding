import React, { useCallback } from "react";
import { FieldValues } from "react-hook-form";
import { FormGroup, FormGroupProps } from "@mui/material";

import FormControlBase, {
  ExtendedInputProps,
  AugmentFormControlBaseProps,
} from "./FormControlBase";

const FormControlForCheckbox = <T extends FieldValues>(
  props: AugmentFormControlBaseProps<T> & {
    FormGroupProps?: FormGroupProps;
    children: (
      value: any,
      onChange: (...event: any[]) => void
    ) => React.ReactNode;
  }
) => {
  const { FormGroupProps, children, ...restProps } = props;

  const InputComponent = useCallback((props: ExtendedInputProps) => {
    const { onChange, value, inputRef } = props;

    return (
      <FormGroup {...FormGroupProps} ref={inputRef}>
        {children(value, onChange)}
      </FormGroup>
    );
  }, []);

  return <FormControlBase {...restProps} InputComponent={InputComponent} />;
};

export default FormControlForCheckbox;
