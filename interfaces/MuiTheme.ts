declare module "@mui/material/styles/createTypography" {
  interface Typography {
    bodyText?: TypographyStyle;
    bodyText2?: TypographyStyle;
    paragraphText?: TypographyStyle;
    paragraphText2?: TypographyStyle;
  }

  interface TypographyOptions {
    bodyText?: TypographyStyle;
    bodyText2?: TypographyStyle;
    paragraphText?: TypographyStyle;
    paragraphText2?: TypographyStyle;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bodyText: true;
    bodyText2: true;
    paragraphText: true;
    paragraphText2: true;
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
  }

  interface PaletteOptions {
    neutral: {
      neutral1: string;
      neutral2: string;
      neutral3: string;
      neutral4: string;
      neutral5: string;
    };
  }
}

export {};
