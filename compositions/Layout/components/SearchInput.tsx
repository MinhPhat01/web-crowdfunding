import React from "react";

import { Button, InputBase, styled } from "@mui/material";

import { IconSearch } from "@/components";

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
    padding: "6px 12px",
    borderRadius: "6.25rem",
    boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    ...theme.typography.paragraphText,
    fontWeight: 400,
  };
});

const StyledButtonSearch = styled(Button)(() => {
  return {
    borderRadius: "2.4rem",
    padding: "0.75rem 1.75rem",
    backgroundColor: "#4ACD8D",
  };
});
