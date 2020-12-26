import { createGlobalStyle } from "styled-components";

export const theme = {
  color: {
    primary: "#1B242E",
    secondary: "#92C1F7",
    neutral: "#475E78",
    neutralColor: "#EFEFEF",
    neutralDarkColor: "#707070",
    boxShadowColor: "rgba(165, 165, 168, 0.2)",
  },
  screenWidth: {
    small: "480px",
    medium: "768px",
    large: "1024px",
  },
  spacing: {
    small: "6px",
    normal: "12px",
    large: "18px",
  },
  fontSize: {
    small: "14px",
    medium: "16px",
    large: "32px",
  },
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
