import styled, { css } from "styled-components";
import { mediaQueries } from "globalStyles";

type WrapperProps = {
  bgColor?: string;
  bgImage?: string;
};

const SC = {
  Wrapper: styled.section<WrapperProps>(
    ({ theme, bgColor, bgImage }) => css`
      background-color: ${bgColor || theme.palette.primary.main};
      padding: ${theme.spacing.lg};
      display: flex;
      justify-content: center;

      ${bgImage &&
      css`
        background-image: url("${bgImage}");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        ${mediaQueries("sm")`
          background-attachment: fixed;
        `}
      `}
    `
  ),
  Content: styled.div(
    ({ theme }) => css`
      width: 100%;
      max-width: ${theme.breakpoint.lg};
    `
  ),
};

export default SC;
