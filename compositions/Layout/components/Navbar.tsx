import Link from "next/link";
import { useRouter } from "next/router";

import { Box, BoxProps, Stack, styled } from "@mui/material";

import { IconLight } from "@/components";

import { listNavbar } from "@/ListNavbar";

import { BOX_SHADOW_COMMON } from "@/constant";
import { useColorMode } from "@/contexts/ColorModeContext";

interface BoxWrapperIconProps extends BoxProps {
  currentRouter?: string;
  link?: string;
}

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;
  const { toggleColorMode } = useColorMode();

  return (
    <StyledWrapperNavbar>
      <Stack alignItems="center" rowGap="7rem">
        <Stack rowGap="1.875rem" alignItems="center">
          {listNavbar &&
            listNavbar.map((item) => {
              return (
                <Link href={item.src} key={item.id}>
                  <StyledWrapperIcon currentRouter={pathname} link={item.src}>
                    {pathname === item.src ? item.iconActive : item.icon}
                  </StyledWrapperIcon>
                </Link>
              );
            })}
        </Stack>

        <Box sx={{ cursor: "pointer" }} onClick={toggleColorMode}>
          <IconLight
            sx={{
              fill: "#A2A2A8",
            }}
          />
        </Box>
      </Stack>
    </StyledWrapperNavbar>
  );
}

const StyledWrapperNavbar = styled(Box)(({ theme }) => {
  return {
    boxShadow: BOX_SHADOW_COMMON,
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.darkColor.light
        : theme.palette.common.white,
    padding: "2rem",
    borderRadius: "1.25rem",
  };
});

const StyledWrapperIcon = styled(Box, {
  shouldForwardProp: (propName) =>
    propName !== "currentRouter" && propName !== "link",
})<BoxWrapperIconProps>(({ currentRouter, link, theme }) => {
  if (currentRouter === link) {
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "8px",
      background:
        theme.palette.mode === "dark"
          ? theme.palette.darkColor.main
          : "#F1FBF7",
      borderRadius: "10px",
    };
  } else {
    return;
  }
});
