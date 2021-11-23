import { createGlobalStyle, DefaultTheme } from "styled-components";

export type ThemeType = { [key: string]: { [key: string]: string | number } };

export const theme: DefaultTheme = {
  palette: {
    common: {
      black: "#222831",
      white: "#ffffff",
      dark: "#707070",
      light: "#EFEFEF",
      boxShadowColor: "4px 4px 10px #F64C72",
      hover: "#F64C72",
      success: "#007E33",
      warning: "#FF8800",
      error: "#CC0000",
      info: "#0099CC",
    },
    primary: {
      main: "#014421",
      contrastText: "#EFEFEF",
    },
    secondary: {
      main: "#475E78",
      contrastText: "#EFEFEF",
    },
  },
  breakpoint: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "24px",
  },
  fontSize: {
    sm: "1rem",
    md: "1.2rem",
    lg: "1.4rem",
    xlg: "1.8rem",
  },
  fontWeight: {
    sm: 400,
    md: 700,
    lg: 900,
  },
  borderRadius: "8px",
  transitionTime: "300ms",
};

export const mediaQueries = (key: "sm" | "md" | "lg") => {
  return (style: TemplateStringsArray, ...values: string[]) => {
    const styles = style
      .map((str, index) => `${str}${values[index] || ""}`)
      .join("");
    return `@media (min-width: ${theme.breakpoint[key]}) { ${styles} }`;
  };
};

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background-color: ${theme.palette.primary.main};
    font-family: 'LatoRegular', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    * {
      box-sizing: border-box;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyle;
