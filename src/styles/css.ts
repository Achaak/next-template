import { createCss } from "@stitches/react";
import { Colors } from "./colors";

export const { styled, css, getCssString, global, theme } = createCss({
  prefix: "",
  theme: {
    colors: Colors,
    fonts: {
      roboto: "Roboto"
    }
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
  },
  utils: {
    m: (_config) => (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value
    }),
    mt: (_config) => (value) => ({
      marginTop: value
    }),
    mr: (_config) => (value) => ({
      marginRight: value
    }),
    mb: (_config) => (value) => ({
      marginBottom: value
    }),
    ml: (_config) => (value) => ({
      marginLeft: value
    }),
    mx: (_config) => (value) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (_config) => (value) => ({
      marginTop: value,
      marginBottom: value
    }),
    linearGradient: (_config) => (value) => ({
      backgroundImage: `linear-gradient(${value})`
    }),

    gridCols: (_config) => (value) => ({
      display: "grid",
      gridTemplateColumns: `repeat(${value}, minmax(0, 1fr))`,
      width: "100%",
      height: "auto",
    }),
    col: (_config) => (value: number | string) => {
      if(!value) return {}
      
      const split = value.toString().split(' ')

      return {
        gridColumn: `${split[1] || "auto"} / span ${split[0]}`
      }
    },
  }
});

export const globalStyles = global({
  h1: { margin: 0 },
  "html, body, #__next": {
    color: "text",
    fontFamily: "$roboto",
    minWidth: 300
  },
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  "li": {
    listStyle: "none"
  },
  "a": {
    textDecoration: "none"
  },
});
