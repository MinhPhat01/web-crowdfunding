import { useCallback } from "react";
import { Input, InputProps } from "@mui/material";
import { NumericFormatProps, NumericFormat } from "react-number-format";

export type ExtendedNumberFormatProps = InputProps & NumericFormatProps;

const NumberFormat = (props: ExtendedNumberFormatProps) => {
  const { onChange, ...restProps } = props;

  const renderCustomInput = useCallback((props: any) => {
    return <Input {...props} />;
  }, []);

  return (
    <NumericFormat
      thousandSeparator
      {...restProps}
      customInput={renderCustomInput}
    />
  );
};

export default NumberFormat;
