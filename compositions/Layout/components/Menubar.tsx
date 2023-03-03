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
import { ButtonSecondary, IconLight, Image, Link, Spacing } from "@/components";
import { listNavbar } from "@/ListNavbar";

type MenubarProps = {
  isOpen: boolean;
  closeMenu: () => void;
};

interface StyledNavbarItemProps extends BoxProps {
  link: string;
  currentPathname: string;
}

export default function Menubar({ isOpen, closeMenu }: MenubarProps) {
  const router = useRouter();
  const { pathname } = router;
  const theme = useTheme();

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
          <StyledChangeTheme>
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

const StyledWrapperMenubar = styled(Container)(() => {
  return {
    position: "fixed",
    inset: 0,
    zIndex: 99,
    width: "100%",
    height: "100vh",
    paddingTop: "20px",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  };
});

const StyledNavbar = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.common.white,
  };
});

const StyledNavbarItem = styled(Box, {
  shouldForwardProp: (propName) =>
    propName !== "currentPathname" && propName !== "link",
})<StyledNavbarItemProps>(({ currentPathname, link }) => {
  return {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "14px 20px",
    backgroundColor: currentPathname === link ? "#F1FBF7" : "#fff",
  };
});

const StyledChangeTheme = styled(Box)(() => {
  return {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "14px 20px",
  };
});
