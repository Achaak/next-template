import { createStyled } from "@stitches/react";
import { Colors } from "./colors";

export const { styled, css } = createStyled({
  prefix: "",
  tokens: {
    colors: Colors,
    fonts: {
      $roboto: "Roboto"
    }
  },
  breakpoints: {
    sm: (rule) => `@media (min-width: 640px) { ${rule} }`,
    md: (rule) => `@media (min-width: 768px) { ${rule} }`,
    lg: (rule) => `@media (min-width: 1024px) { ${rule} }`,
    xl: (rule) => `@media (min-width: 1280px) { ${rule} }`,
  },
  utils: {
    m: value => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value
    }),
    mt: value => ({
      marginTop: value
    }),
    mr: value => ({
      marginRight: value
    }),
    mb: value => ({
      marginBottom: value
    }),
    ml: value => ({
      marginLeft: value
    }),
    mx: value => ({
      marginLeft: value,
      marginRight: value
    }),
    my: value => ({
      marginTop: value,
      marginBottom: value
    }),
    linearGradient: value => ({
      backgroundImage: `linear-gradient(${value})`
    }),

    gridCols: value => ({
      display: "grid",
      gridTemplateColumns: `repeat(${value}, minmax(0, 1fr))`,
      width: "100%",
      height: "auto",
    }),
    col: value => {
      if(!value) return {}
      
      const split = value.toString().split(' ')

      return {
        gridColumn: `${split[1] || "auto"} / span ${split[0]}`
      }
    },
  }
});

export const globalStyles = css.global({
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
