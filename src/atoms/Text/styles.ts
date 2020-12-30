import styled, { css, DefaultTheme } from "styled-components";
import { TextType } from "./index";

type WrapperProps = {
  type?: TextType;
};

type getFontSizeType = {
  theme: DefaultTheme;
  type?: TextType;
};

const getStyles = ({ theme, type }: getFontSizeType) => {
  switch (type) {
    case "h1":
      return css`
        font-size: ${theme.fontSize.lg};
        font-family: "UbuntuMonoBold";
      `;
    case "h2":
      return css`
        font-size: ${theme.fontSize.md};
        font-family: "UbuntuMonoBold";
      `;
    default:
      return css`
        font-size: ${theme.fontSize.sm};
        font-family: "UbuntuMonoRegular";
      `;
  }
};

const SC = {
  Text: styled.span<WrapperProps>(getStyles),
};

export default SC;
