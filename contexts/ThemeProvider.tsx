import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

import { EpilogueFont } from "@/utils/font";
import { PALETTE_COLOR } from "@/configuration";

type OmitProperties =
  | "fontSize"
  | "fontWeight"
  | "lineHeight"
  | "letterSpacing";

const createTypographyProperties = (
  props: {
    fontSize: number;
    fontWeight: string | number;
    lineHeight: string | number;
    letterSpacing?: string | number;
    color?: string;
  } & Omit<React.CSSProperties, OmitProperties>
) => {
  const {
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    color = PALETTE_COLOR.neutral1,
    ...restProps
  } = props;
  return {
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    color,
    ...restProps,
  };
};

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: PALETTE_COLOR.primary,
      light: PALETTE_COLOR.primaryLight,
    },
    secondary: {
      main: PALETTE_COLOR.secondary,
      light: PALETTE_COLOR.secondaryLight,
    },
    common: {
      white: PALETTE_COLOR.white,
      black: PALETTE_COLOR.black,
    },
    error: {
      main: PALETTE_COLOR.error,
    },
    neutral: {
      neutral1: PALETTE_COLOR.neutral1,
      neutral2: PALETTE_COLOR.neutral2,
      neutral3: PALETTE_COLOR.neutral3,
      neutral4: PALETTE_COLOR.neutral4,
      neutral5: PALETTE_COLOR.neutral5,
    },
  },
  typography: {
    fontFamily: EpilogueFont.style.fontFamily,
    h1: createTypographyProperties({
      fontWeight: 700,
      fontSize: 40,
      lineHeight: "60px",
    }),
    h2: createTypographyProperties({
      fontWeight: 700,
      fontSize: 25,
      lineHeight: "38px",
    }),
    h3: createTypographyProperties({
      fontWeight: 600,
      fontSize: 22,
      lineHeight: "32px",
    }),
    h4: createTypographyProperties({
      fontWeight: 700,
      fontSize: 20,
      lineHeight: "30px",
    }),
    bodyText: {
      fontWeight: 700,
      fontSize: 18,
      lineHeight: "30px",
    },
    bodyText2: {
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "24px",
    },
    paragraphText: {
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "22px",
    },
    paragraphText2: {
      fontWeight: 600,
      fontSize: 12,
      lineHeight: "18px",
    },
  },
});

const theme = createTheme({
  ...defaultTheme,
  components: {
    MuiTypography: {
      defaultProps: {
        variant: "bodyText2",
      },
    },
  },
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
