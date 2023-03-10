import { useMemo, useState } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

import { EpilogueFont } from "@/utils/font";
import { ColorModeContext } from "./ColorModeContext";
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

const colors = {
  darkColor: {
    main: "#3A3A43",
    light: "#1C1C24",
  },
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
  colorIcon: {
    colorIcon: PALETTE_COLOR.colorIcon,
  },
};

const styleTypography = {
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
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          // Theme
          mode,
          ...(mode === "light"
            ? {
                background: {
                  default: "#f5f5f5",
                },
              }
            : {
                background: {
                  default: "#13131A",
                },
              }),

          ...colors,
        },
        ...styleTypography,

        //   fontFamily: EpilogueFont.style.fontFamily,
        //   h1: createTypographyProperties({
        //     fontWeight: 700,
        //     fontSize: 40,
        //     lineHeight: "60px",
        //   }),
        //   h2: createTypographyProperties({
        //     fontWeight: 700,
        //     fontSize: 25,
        //     lineHeight: "38px",
        //   }),
        //   h3: createTypographyProperties({
        //     fontWeight: 600,
        //     fontSize: 22,
        //     lineHeight: "32px",
        //   }),
        //   h4: createTypographyProperties({
        //     fontWeight: 700,
        //     fontSize: 20,
        //     lineHeight: "30px",
        //   }),
        //   bodyText: createTypographyProperties({
        //     fontWeight: 700,
        //     fontSize: 18,
        //     lineHeight: "30px",
        //   }),
        //   bodyText2: createTypographyProperties({
        //     fontWeight: 700,
        //     fontSize: 16,
        //     lineHeight: "24px",
        //   }),
        //   paragraphText: createTypographyProperties({
        //     fontWeight: 700,
        //     fontSize: 14,
        //     lineHeight: "22px",
        //   }),
        //   paragraphText2: createTypographyProperties({
        //     fontWeight: 600,
        //     fontSize: 12,
        //     lineHeight: "18px",
        //   }),
        //   buttonPrimary: createTypographyProperties({
        //     fontWeight: 600,
        //     fontSize: 16,
        //     lineHeight: "26px",
        //   }),
        //   buttonSecondary: createTypographyProperties({
        //     fontWeight: 600,
        //     fontSize: 16,
        //     lineHeight: "26px",
        //   }),
        // },

        //Setting Components
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
                ...styleTypography.typography.buttonPrimary,
                textTransform: "capitalize",
                whiteSpace: "nowrap",
                padding: "13px",
                borderRadius: "10px",
                color: colors.common.white,
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
                  color: colors.common.white,
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
                  color: colors.primary.main,
                },
                [COMPONENT_STATE.active]: {
                  color: colors.primary.main,
                },
              },
            },
          },

          MuiInput: {
            styleOverrides: {
              root: {
                color:
                  mode === "dark" ? colors.common.white : colors.common.black,
                fontSize: "14px",
                lineHeight: "22px",
                fontWeight: 500,
                marginTop: "0 !important",
                border: "1px solid",
                borderRadius: "10px",
                padding: "15px 25px",
                borderColor:
                  mode === "dark" ? colors.darkColor.main : colors.common.black,

                [COMPONENT_STATE.active]: {
                  borderColor: colors.primary.main,
                },
                [COMPONENT_STATE.focused]: {
                  border: `1px solid ${colors.primary.main}`,
                },
                [COMPONENT_STATE.error]: {
                  borderColor: colors.error.main,
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
                ...styleTypography.typography.paragraphText,
                color: colors.error.main,
                marginTop: 0,
              },
            },
          },
          MuiContainer: {
            styleOverrides: {
              root: {
                maxWidth: "1400px !important",
              },
            },
            defaultProps: {},
          },
          MuiSvgIcon: {
            styleOverrides: {
              root: {
                stroke: colors.common.white,
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeProvider;
