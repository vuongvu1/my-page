import styled, { css, DefaultTheme } from "styled-components";
import { mediaQueries } from "globalStyles";
import { TextType } from "./index";

type WrapperProps = {
  type?: TextType;
  color?: string;
  bold?: boolean;
};

type getFontSizeType = WrapperProps & {
  theme: DefaultTheme;
};

const getStyles = ({ theme, type, color, bold }: getFontSizeType) => {
  let common = css`
    a {
      color: ${theme.palette.common.link};

      &:link,
      &:visited {
        text-decoration: none;
      }

      &:hover,
      &:active {
        text-decoration: underline;
      }
    }
  `;

  if (bold) {
    common = css`
      ${common};
      font-family: "LatoBold";
    `;
  }

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
        ${common};
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
        ${common};
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
        ${common};
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
        ${common};
      `;
  }
};

const SC = {
  Text: styled.span<WrapperProps>(getStyles),
};

export default SC;
