import { createGlobalStyle } from "styled-components";

type ThemeType = { [key: string]: { [key: string]: string | number } };

export const theme: ThemeType = {
  color: {
    primary: "#1B242E",
    secondary: "#92C1F7",
    neutral: "#475E78",
    light: "#EFEFEF",
    dark: "#707070",
    boxShadowColor: "rgba(165, 165, 168, 0.2)",
  },
  breakpoints: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
  },
  spacing: {
    sm: "6px",
    md: "12px",
    lg: "18px",
  },
  fontSize: {
    sm: "14px",
    md: "16px",
    lg: "32px",
  },
  fontWeight: {
    sm: 400,
    md: 700,
    lg: 900,
  },
};

export const mediaQueries = (key: "sm" | "md" | "lg") => {
  return (style: TemplateStringsArray, ...values: string[]) => {
    const styles = style
      .map((str, index) => `${str}${values[index] || ""}`)
      .join("");
    return `@media (min-width: ${theme.breakpoints[key]}) { ${styles} }`;
  };
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
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
