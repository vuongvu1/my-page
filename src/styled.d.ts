import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
        dark: string;
        light: string;
        boxShadowColor: string;
      };
      primary: {
        main: string;
        contrastText: string;
      };
      secondary: {
        main: string;
        contrastText: string;
      };
    };
    breakpoint: {
      sm: string;
      md: string;
      lg: string;
    };
    spacing: {
      sm: string;
      md: string;
      lg: string;
    };
    fontSize: {
      sm: string;
      md: string;
      lg: string;
    };
    fontWeight: {
      sm: number;
      md: number;
      lg: number;
    };
  }
}
