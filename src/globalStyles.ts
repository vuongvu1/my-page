import { createGlobalStyle, DefaultTheme } from "styled-components";

export type ThemeType = { [key: string]: { [key: string]: string | number } };

export const theme: DefaultTheme = {
  palette: {
    common: {
      black: "#222831",
      white: "#ffffff",
      dark: "#707070",
      light: "#EFEFEF",
      boxShadowColor: "2px 2px 5px #707070",
      hover: "#F64C72",
    },
    primary: {
      main: "#1B242E",
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
    md: "1.4rem",
    lg: "1.8rem",
    xlg: "2.4rem",
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
  body {
    margin: 0;
    background-color: ${theme.palette.primary.main};
    font-family: 'UbuntuMonoRegular', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyle;
