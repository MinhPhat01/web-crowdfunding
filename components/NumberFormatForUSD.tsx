import React from "react";
import NumberFormat from "./NumberFormat";

type NumberFormatForUSDProps = {
  value: number | string;
};

const NumberFormatForUSD = ({ value }: NumberFormatForUSDProps) => {
  return <NumberFormat value={value} displayType="text" prefix="$" />;
};

export default NumberFormatForUSD;
