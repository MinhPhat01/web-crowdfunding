import Link from "next/link";
import { useRouter } from "next/router";
import { Box, BoxProps, Stack, styled } from "@mui/material";

import {
  IconCampaign,
  IconDashboard,
  IconLight,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from "@/components";

export const listNavbar = [
  {
    id: 1,
    icon: <IconDashboard sx={{ stroke: "#A2A2A8" }} />,
    iconActive: <IconDashboard sx={{ stroke: "#1DC071" }} />,
    src: "/",
  },
  {
    id: 2,
    icon: <IconCampaign sx={{ stroke: "#A2A2A8" }} />,
    iconActive: <IconCampaign sx={{ fill: "#1DC071" }} />,
    src: "/campaign",
  },
  {
    id: 3,
    icon: <IconPayment sx={{ stroke: "#A2A2A8" }} />,
    iconActive: <IconPayment sx={{ stroke: "#1DC071" }} />,
    src: "/payment",
  },
  {
    id: 4,
    icon: <IconWithdraw sx={{ stroke: "#A2A2A8" }} />,
    iconActive: <IconWithdraw sx={{ stroke: "#1DC071" }} />,
    src: "/withdraw",
  },
  {
    id: 5,
    icon: <IconProfile sx={{ stroke: "#A2A2A8" }} />,
    iconActive: (
      <IconProfile
        sx={{
          stroke: "#1DC071",
        }}
      />
    ),
    src: "/profile",
  },
  {
    id: 6,
    icon: <IconLogout sx={{ stroke: "#A2A2A8" }} />,
    iconActive: <IconLogout sx={{ stroke: "#1DC071" }} />,
    src: "/logout",
  },
];

interface BoxWrapperIconProps extends BoxProps {
  currentRouter?: string;
  link?: string;
}

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <StyledWrapperNavbar>
      <Stack alignItems="center" rowGap="11rem">
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

        <IconLight
          sx={{
            fill: "#A2A2A8",
            cursor: "pointer",
          }}
        />
      </Stack>
    </StyledWrapperNavbar>
  );
}

const StyledWrapperNavbar = styled(Box)(({ theme }) => {
  return {
    boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    backgroundColor: theme.palette.common.white,
    padding: "2rem",
    borderRadius: "1.25rem",
  };
});

const StyledWrapperIcon = styled(Box, {
  shouldForwardProp: (propName) =>
    propName !== "currentRouter" && propName !== "link",
})<BoxWrapperIconProps>(({ currentRouter, link }) => {
  if (currentRouter === link) {
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "8px",
      background: "#F1FBF7",
      borderRadius: "10px",
    };
  } else {
    return;
  }
});
