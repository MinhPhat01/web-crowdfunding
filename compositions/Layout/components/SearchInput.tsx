import React from "react";

import { Button, InputBase, styled } from "@mui/material";

import { IconSearch } from "@/components";
import { BOX_SHADOW_COMMON } from "@/constant";

export default function SearchInput() {
  return (
    <StyledSearchInput
      placeholder="Do fundrise now"
      endAdornment={<ButtonSearch />}
    />
  );
}

const ButtonSearch = () => {
  return (
    <StyledButtonSearch>
      <IconSearch />
    </StyledButtonSearch>
  );
};

const StyledSearchInput = styled(InputBase)(({ theme }) => {
  return {
    width: "100%",
    padding: "6px 8px 6px 12px",
    borderRadius: "6.25rem",
    boxShadow: BOX_SHADOW_COMMON,
    ...theme.typography.paragraphText,
    fontWeight: 400,
    backgroundColor: theme.palette.common.white,
  };
});

const StyledButtonSearch = styled(Button)(() => {
  return {
    borderRadius: "2.4rem",
    padding: "0.75rem 1.75rem",
    backgroundColor: "#4ACD8D",
  };
});
