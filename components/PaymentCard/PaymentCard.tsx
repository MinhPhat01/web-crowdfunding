import { useCallback, useState } from "react";

import { Box, ButtonProps, styled, Typography, useTheme } from "@mui/material";

import Image from "../Image";
import Spacing from "../Spacing";
import ButtonSecondary from "../Button/ButtonSecondary";

import { PSEUDO_STATE } from "@/configuration";

interface StyledButtonProps extends ButtonProps {
  isConnected: boolean;
}

type PaymentCardProps = {
  logoSrc: string;
  name: string;
  desc: string;
};

export default function PaymentCard(props: PaymentCardProps) {
  const { logoSrc, name, desc } = props;

  const theme = useTheme();
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const handleConnect = useCallback(() => {
    setIsConnected((prevState) => {
      return !prevState;
    });
  }, []);

  return (
    <StyledWrapper>
      <StyledWrapperImg>
        <Image
          src={logoSrc}
          alt={name}
          width={80}
          height={80}
          style={{ objectFit: "contain" }}
        />
      </StyledWrapperImg>

      <Spacing spacing={5} />

      <Typography
        fontWeight={400}
        variant="paragraphText"
        color={theme.palette.neutral.neutral3}
      >
        {desc}
      </Typography>

      <Spacing spacing={3.125} />

      <StyledButton
        title={isConnected ? "Connected" : "Connect"}
        onClick={handleConnect}
        isConnected={isConnected}
      />
    </StyledWrapper>
  );
}

const StyledWrapper = styled(Box)(({ theme }) => {
  return {
    textAlign: "center",
    padding: "1.563rem",
    borderRadius: "1.25rem",
    backgroundColor: theme.palette.common.white,
  };
});

const StyledWrapperImg = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});

const StyledButton = styled(ButtonSecondary, {
  shouldForwardProp: (propName) => propName !== "isConnected",
})<StyledButtonProps>(({ isConnected, theme }) => {
  if (isConnected === true) {
    return {
      width: "100%",
      color: theme.palette.common.white,
      backgroundColor: theme.palette.secondary.main,
      boxShadow: "none",
    };
  } else {
    return {
      width: "100%",
      color: "#6F49FD",
      backgroundColor: "#EEEAFD",
      boxShadow: "none",
      [PSEUDO_STATE.hover]: {
        backgroundColor: "#EEEAFD",
        boxShadow: "none",
      },
    };
  }
});
