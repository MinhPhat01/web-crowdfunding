import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

import { EpilogueFont } from "@/utils/font";
import { COMPONENT_STATE, PALETTE_COLOR, PSEUDO_STATE } from "@/configuration";

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
    bodyText: createTypographyProperties({
      fontWeight: 700,
      fontSize: 18,
      lineHeight: "30px",
    }),
    bodyText2: createTypographyProperties({
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "24px",
    }),
    paragraphText: createTypographyProperties({
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "22px",
    }),
    paragraphText2: createTypographyProperties({
      fontWeight: 600,
      fontSize: 12,
      lineHeight: "18px",
    }),
    buttonPrimary: createTypographyProperties({
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "26px",
    }),
    buttonSecondary: createTypographyProperties({
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "26px",
    }),
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
    MuiButton: {
      defaultProps: {
        color: "primary",
        variant: "contained",
      },
      styleOverrides: {
        root: {
          ...defaultTheme.typography.buttonPrimary,
          textTransform: "capitalize",
          whiteSpace: "nowrap",
          padding: "13px",
          borderRadius: "10px",
          [PSEUDO_STATE.hover]: {
            backgroundColor: PALETTE_COLOR.primaryHovered,
          },
          [COMPONENT_STATE.disabled]: {
            backgroundColor: PALETTE_COLOR.primaryHovered,
          },
        },
        outlined: {
          [COMPONENT_STATE.disabled]: {
            backgroundColor: "transparent",
            borderColor: PALETTE_COLOR.primary,
          },
          [PSEUDO_STATE.hover]: {
            color: defaultTheme.palette.common.white,
          },
        },
      },
    },

    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          ["& .MuiFormLabel-root"]: {
            marginBottom: 12,
          },
          ["& .MuiFormHelperText-root"]: {
            marginTop: 8,
          },
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          lineHeight: "22px",
          fontWeight: 500,
          color: "#4B5264",
          textTransform: "uppercase",
          [COMPONENT_STATE.focused]: {
            color: defaultTheme.palette.primary.main,
          },
          [COMPONENT_STATE.active]: {
            color: defaultTheme.palette.primary.main,
          },
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          color: "#B2B3BD",
          fontSize: "14px",
          lineHeight: "22px",
          fontWeight: 500,
          marginTop: "0 !important",
          border: "1px solid #F1F1F3",
          borderRadius: "10px",
          padding: "15px 25px",
          borderColor: defaultTheme.palette.common.black,

          [COMPONENT_STATE.active]: {
            borderColor: defaultTheme.palette.primary.main,
          },
          [COMPONENT_STATE.focused]: {
            borderColor: defaultTheme.palette.primary.main,
          },
          [COMPONENT_STATE.error]: {
            borderColor: defaultTheme.palette.error.main,
          },
        },
      },
      defaultProps: {
        disableUnderline: true,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          ["& .MuiInputBase-root"]: {
            paddingLeft: 8,
            paddingRight: 16,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          ...defaultTheme.typography.paragraphText,
          color: defaultTheme.palette.error.main,
          marginTop: 0,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {},
      },
      defaultProps: {
        maxWidth: "lg",
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
