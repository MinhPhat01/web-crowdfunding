import React from "react";
import {
  IconCampaign,
  IconDashboard,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from "@/components";

export const listNavbar = [
  {
    id: 1,
    name: "Dashboard",
    icon: <IconDashboard sx={{ stroke: "#A2A2A8" }} />,
    iconActive: <IconDashboard sx={{ stroke: "#1DC071" }} />,
    src: "/",
  },
  {
    id: 2,
    name: "Campaign",
    icon: <IconCampaign sx={{ stroke: "#A2A2A8" }} />,
    iconActive: <IconCampaign sx={{ fill: "#1DC071" }} />,
    src: "/campaign",
  },
  {
    id: 3,
    name: "Payment",
    icon: <IconPayment sx={{ stroke: "#A2A2A8" }} />,
    iconActive: <IconPayment sx={{ stroke: "#1DC071" }} />,
    src: "/payment",
  },
  {
    id: 4,
    name: "Withdraw",
    icon: <IconWithdraw sx={{ stroke: "#A2A2A8" }} />,
    iconActive: <IconWithdraw sx={{ stroke: "#1DC071" }} />,
    src: "/withdraw",
  },
  {
    id: 5,
    name: "Profile",
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
    name: "Logout",
    icon: <IconLogout sx={{ stroke: "#A2A2A8" }} />,
    iconActive: <IconLogout sx={{ stroke: "#1DC071" }} />,
    src: "/logout",
  },
];

export default function ListNavbar() {
  return <div>listNavbar</div>;
}
