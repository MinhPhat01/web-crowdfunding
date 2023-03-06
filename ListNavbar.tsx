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
    icon: <IconDashboard sx={{ stroke: "#A2A2A8", fill: "none" }} />,
    iconActive: <IconDashboard sx={{ stroke: "#1DC071", fill: "none" }} />,
    src: "/",
  },
  {
    id: 2,
    name: "Campaign",
    icon: <IconCampaign sx={{ stroke: "#A2A2A8", fill: "none" }} />,
    iconActive: <IconCampaign sx={{ stroke: "#1DC071", fill: "none" }} />,
    src: "/campaign",
  },
  {
    id: 3,
    name: "Payment",
    icon: <IconPayment sx={{ stroke: "#A2A2A8", fill: "none" }} />,
    iconActive: <IconPayment sx={{ stroke: "#1DC071", fill: "none" }} />,
    src: "/payment",
  },
  {
    id: 4,
    name: "Withdraw",
    icon: <IconWithdraw sx={{ stroke: "#A2A2A8", fill: "none" }} />,
    iconActive: <IconWithdraw sx={{ stroke: "#1DC071", fill: "none" }} />,
    src: "/withdraw",
  },
  {
    id: 5,
    name: "Profile",
    icon: <IconProfile sx={{ stroke: "#A2A2A8", fill: "none" }} />,
    iconActive: (
      <IconProfile
        sx={{
          stroke: "#1DC071",
          fill: "none",
        }}
      />
    ),
    src: "/profile",
  },
  {
    id: 6,
    name: "Logout",
    icon: <IconLogout sx={{ stroke: "#A2A2A8", fill: "none" }} />,
    iconActive: <IconLogout sx={{ stroke: "#1DC071", fill: "none" }} />,
    src: "/logout",
  },
];

export default function ListNavbar() {
  return <div>listNavbar</div>;
}
