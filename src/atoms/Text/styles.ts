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

const getStyles = ({ theme, type, color = "unset" }: getFontSizeType) => {
  switch (type) {
    case "h1":
      return css`
        color: ${color};
        font-size: ${theme.fontSize.lg};
        font-family: "UbuntuMonoBold";
        ${mediaQueries("md")`
          font-size: ${theme.fontSize.xlg};
        `}
      `;
    case "h2":
      return css`
        color: ${color};
        font-size: ${theme.fontSize.md};
        font-family: "UbuntuMonoBold";
        ${mediaQueries("md")`
          font-size: ${theme.fontSize.lg};
        `}
      `;
    default:
      return css`
        color: ${color};
        font-size: ${theme.fontSize.sm};
        font-family: "UbuntuMonoRegular";
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
