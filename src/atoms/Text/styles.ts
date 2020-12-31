import styled, { css, DefaultTheme } from "styled-components";
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
        color: ${color || theme.palette.primary.contrastText};
        font-size: ${theme.fontSize.lg};
        font-family: "UbuntuMonoBold";
      `;
    case "h2":
      return css`
        color: ${color || theme.palette.primary.contrastText};
        font-size: ${theme.fontSize.md};
        font-family: "UbuntuMonoBold";
      `;
    default:
      return css`
        color: ${color || theme.palette.primary.contrastText};
        font-size: ${theme.fontSize.sm};
        font-family: "UbuntuMonoRegular";
      `;
  }
};

const SC = {
  Text: styled.span<WrapperProps>(getStyles),
};

export default SC;
