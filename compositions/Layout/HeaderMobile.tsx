import React, { Fragment, useCallback, useState } from "react";
import Hamburger from "hamburger-react";

import { Avatar, Box, Fade, styled } from "@mui/material";

import Menubar from "./components/Menubar";
import SearchInput from "./components/SearchInput";

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <StyledWrapperHeaderMobile>
      <Hamburger toggled={isOpen} toggle={openMenu} />
      {isOpen && <Menubar isOpen={isOpen} closeMenu={closeMenu} />}

      <Box width="60%">
        <SearchInput />
      </Box>
      <Avatar src="/images/cat.avif" />
    </StyledWrapperHeaderMobile>
  );
}

const StyledWrapperHeaderMobile = styled(Box)(() => {
  return {
    paddingTop: "20px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
});
