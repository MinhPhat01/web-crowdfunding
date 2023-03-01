import { Box, styled, BoxProps } from "@mui/material";

interface ExtendedBoxProps extends BoxProps {
  spacing: number;
}

const Spacing = ({ spacing }: { spacing?: number }) => {
  spacing = spacing ?? 1;

  return <StyledBox spacing={spacing} />;
};

const StyledBox = styled(Box, {
  shouldForwardProp: (propName) => {
    return propName !== "spacing";
  },
})<ExtendedBoxProps>(({ theme, spacing }) => {
  return {
    paddingBottom: theme.spacing(spacing),
  };
});

export default Spacing;
