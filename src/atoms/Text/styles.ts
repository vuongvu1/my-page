import styled, { css, DefaultTheme } from "styled-components";
import { mediaQueries } from "globalStyles";
import { TextType } from "./index";

type WrapperProps = {
  type?: TextType;
  color?: string;
};

type getFontSizeType = WrapperProps & {
  theme: DefaultTheme;
};

const getStyles = ({ theme, type, color }: getFontSizeType) => {
  switch (type) {
    case "h1":
      return css`
        color: ${color || theme.palette.primary.main};
        font-size: ${theme.fontSize.lg};
        font-family: "LatoBold";
        margin: ${theme.spacing.md} 0;
        ${mediaQueries("md")`
          font-size: ${theme.fontSize.xlg};
        `}
      `;
    case "h2":
      return css`
        color: ${color || theme.palette.primary.main};
        font-size: ${theme.fontSize.md};
        font-family: "LatoBold";
        margin: ${theme.spacing.md} 0;
        ${mediaQueries("md")`
          font-size: ${theme.fontSize.lg};
        `}
      `;
    case "h3":
      return css`
        color: ${color || theme.palette.primary.main};
        font-size: ${theme.fontSize.sm};
        font-family: "LatoBold";
        margin: ${theme.spacing.sm} 0;
        ${mediaQueries("md")`
          font-size: ${theme.fontSize.md};
        `}
      `;
    default:
      return css`
        color: ${color || theme.palette.primary.main};
        font-size: ${theme.fontSize.sm};
        font-family: "LatoRegular";
        margin: ${theme.spacing.sm} 0;
        ${mediaQueries("md")`
          font-size: ${theme.fontSize.md};
        `}
      `;
  }
};

const SC = {
  Text: styled.span<WrapperProps>(getStyles),
};

export default SC;
