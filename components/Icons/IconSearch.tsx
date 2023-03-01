import React from "react";
import { SvgIconProps } from "@mui/material";
import SVGIconBase from "./SVGIconBase";

export default function IconSearch(props: SvgIconProps) {
  return (
    <SVGIconBase {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 22L17 17M19.5 10.75C19.5 11.8991 19.2737 13.0369 18.8339 14.0985C18.3942 15.1601 17.7497 16.1247 16.9372 16.9372C16.1247 17.7497 15.1601 18.3942 14.0985 18.8339C13.0369 19.2737 11.8991 19.5 10.75 19.5C9.60093 19.5 8.46312 19.2737 7.40152 18.8339C6.33992 18.3942 5.37533 17.7497 4.56282 16.9372C3.7503 16.1247 3.10578 15.1601 2.66605 14.0985C2.22633 13.0369 2 11.8991 2 10.75C2 8.42936 2.92187 6.20376 4.56282 4.56282C6.20376 2.92187 8.42936 2 10.75 2C13.0706 2 15.2962 2.92187 16.9372 4.56282C18.5781 6.20376 19.5 8.42936 19.5 10.75Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIconBase>
  );
}
