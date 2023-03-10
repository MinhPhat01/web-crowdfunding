import { IconSearch } from "@/components";
import { BOX_SHADOW_COMMON } from "@/constant";
import { Button, InputBase, styled } from "@mui/material";

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
      <IconSearch sx={{ fill: "none" }} />
    </StyledButtonSearch>
  );
};

const StyledSearchInput = styled(InputBase)(({ theme }) => {
  const white = theme.palette.common.white;
  const { neutral2 } = theme.palette.neutral;
  const darkLight = theme.palette.darkColor.light;

  return {
    width: "100%",
    padding: "4px 6px 4px 20px",
    borderRadius: "6.25rem",
    boxShadow: BOX_SHADOW_COMMON,
    ...theme.typography.paragraphText,
    fontWeight: 400,
    backgroundColor: theme.palette.mode === "dark" ? darkLight : white,
    color: theme.palette.mode === "dark" ? neutral2 : "",
  };
});

const StyledButtonSearch = styled(Button)(({ theme }) => {
  return {
    borderRadius: "2.4rem",
    padding: "0.75rem 1.75rem",
    backgroundColor: theme.palette.primary.main,
  };
});
