import { FieldValues } from "react-hook-form";
import React, { forwardRef, useCallback } from "react";
import PhoneInput, { FeatureProps } from "react-phone-number-input/input";

import { Input, InputProps } from "@mui/material";

import FormControlBase, {
  AugmentFormControlBaseProps,
  ExtendedInputProps,
} from "./FormControlBase";

type InputPropsWithoutValueAndOnChange = Omit<
  InputProps,
  "value" | "onChange" | "inputComponent"
>;

type OmitKey = "inputComponent" | "onChange" | "value";

type FormControlForPhoneNumberProps<T extends FieldValues> =
  AugmentFormControlBaseProps<T> & {
    InputProps?: FeatureProps<Omit<InputProps, OmitKey>>;
  };

const FormControlForPhoneNumber = <T extends FieldValues>(
  props: FormControlForPhoneNumberProps<T>
) => {
  const { InputProps, ...restProps } = props;

  const InputComponent = useCallback((props: ExtendedInputProps) => {
    return (
      <PhoneInput
        country="US"
        {...props}
        inputComponent={
          InputWithRef as (
            props: InputPropsWithoutValueAndOnChange
          ) => JSX.Element
        }
      />
    );
  }, []);

  return (
    <FormControlBase
      {...restProps}
      InputProps={InputProps as InputProps}
      InputComponent={InputComponent}
    />
  );
};

const InputWithRef = forwardRef(function InputWithRef(
  props: InputProps,
  ref?: any
) {
  return (
    <Input
      {...props}
      inputRef={(instance) => {
        const inputRef = props.inputRef as any;
        ref?.(instance);
        inputRef?.(instance);
      }}
    />
  );
});

export default FormControlForPhoneNumber;
