import { PaletteMode } from "@mui/material";

declare module "@mui/material/styles/createTypography" {
  interface Typography {
    bodyText?: TypographyStyle;
    bodyText2?: TypographyStyle;
    paragraphText?: TypographyStyle;
    paragraphText2?: TypographyStyle;
    buttonPrimary?: TypographyStyle;
    buttonSecondary?: TypographyStyle;
  }

  interface TypographyOptions {
    bodyText?: TypographyStyle;
    bodyText2?: TypographyStyle;
    paragraphText?: TypographyStyle;
    paragraphText2?: TypographyStyle;
    buttonPrimary?: TypographyStyle;
    buttonSecondary?: TypographyStyle;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bodyText: true;
    bodyText2: true;
    paragraphText: true;
    paragraphText2: true;
    buttonPrimary: true;
    buttonSecondary: true;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    neutral: {
      neutral1: string;
      neutral2: string;
      neutral3: string;
      neutral4: string;
      neutral5: string;
    };
    darkColor: {
      main: string;
      light: string;
    };

    colorIcon: string;
  }

  interface PaletteOptions {
    neutral: {
      neutral1: string;
      neutral2: string;
      neutral3: string;
      neutral4: string;
      neutral5: string;
    };
    darkColor: {
      main: string;
      light: string;
    };

    colorIcon: string;
  }
}

export {};
