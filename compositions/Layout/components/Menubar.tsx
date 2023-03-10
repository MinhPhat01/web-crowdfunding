import React, { useMemo } from "react";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";

import {
  Box,
  BoxProps,
  Container,
  Fade,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";

import { listNavbar } from "@/ListNavbar";
import { useColorMode } from "@/contexts/ColorModeContext";

import { ButtonSecondary, IconLight, Image, Link, Spacing } from "@/components";

type MenubarProps = {
  isOpen: boolean;
  closeMenu: () => void;
};

interface StyledNavbarItemProps extends BoxProps {
  link: string;
  currentPathname: string;
}

export default function Menubar({ isOpen, closeMenu }: MenubarProps) {
  const theme = useTheme();
  const router = useRouter();
  const { toggleColorMode } = useColorMode();

  const { pathname } = router;

  const renderListNavbar = useMemo(() => {
    return listNavbar.map((item) => {
      return (
        <Link href={item.src} key={item.id} sx={{ textDecoration: "none" }}>
          <StyledNavbarItem
            currentPathname={pathname}
            link={item.src}
            onClick={closeMenu}
          >
            {pathname === item.src ? item.iconActive : item.icon}
            <Typography
              variant="paragraphText"
              color={
                item.src === pathname
                  ? theme.palette.primary.main
                  : theme.palette.neutral.neutral3
              }
            >
              {item.name}
            </Typography>
          </StyledNavbarItem>
        </Link>
      );
    });
  }, [pathname]);

  return (
    <Fade in={isOpen} timeout={1000} unmountOnExit>
      <StyledWrapperMenubar>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Image
            alt="logo"
            width={52}
            height={52}
            src="/images/Logo.png"
            style={{ objectFit: "contain" }}
          />

          <ButtonSecondary title="Start a Campaign" />

          <Hamburger toggled={isOpen} toggle={closeMenu} />
        </Stack>

        <Spacing spacing={3.75} />

        <StyledNavbar>
          {renderListNavbar}
          <StyledChangeTheme onClick={toggleColorMode}>
            <IconLight
              sx={{
                fill: "#A2A2A8",
                cursor: "pointer",
              }}
            />
            <Typography
              variant="paragraphText"
              color={theme.palette.neutral.neutral3}
            >
              Light/Dark
            </Typography>
          </StyledChangeTheme>
        </StyledNavbar>

        <Spacing spacing={3.75} />
      </StyledWrapperMenubar>
    </Fade>
  );
}

const StyledWrapperMenubar = styled(Container)(({ theme }) => {
  return {
    position: "fixed",
    inset: 0,
    zIndex: 99,
    width: "100%",
    height: "100vh",
    paddingTop: "20px",
    overflow: "hidden",
    backgroundColor: theme.palette.mode === "dark" ? "#121218" : "#f5f5f5",
  };
});

const StyledNavbar = styled(Box)(({ theme }) => {
  const white = theme.palette.common.white;
  const darkLight = theme.palette.darkColor.light;
  return {
    backgroundColor: theme.palette.mode === "dark" ? darkLight : white,
  };
});

const StyledNavbarItem = styled(Box, {
  shouldForwardProp: (propName) =>
    propName !== "currentPathname" && propName !== "link",
})<StyledNavbarItemProps>(({ currentPathname, link, theme }) => {
  const dark =
    currentPathname === link
      ? theme.palette.darkColor.main
      : theme.palette.darkColor.light;
  const light = currentPathname === link ? "#F1FBF7" : "#fff";

  return {
    gap: "20px",
    display: "flex",
    alignItems: "center",
    padding: "14px 20px",
    backgroundColor: theme.palette.mode === "dark" ? dark : light,
  };
});

const StyledChangeTheme = styled(Box)(() => {
  return {
    gap: "20px",
    display: "flex",
    alignItems: "center",
    padding: "14px 20px",
  };
});
