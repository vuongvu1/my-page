import styled, { css } from "styled-components";

type WrapperProps = {
  bgColor?: string;
};

const SC = {
  Wrapper: styled.div<WrapperProps>(
    ({ theme, bgColor }) => css`
      background-color: ${bgColor || theme.palette.common.light};
      border-radius: ${theme.borderRadius};
      height: inherit;
      transition:
        transform ${theme.transitionTime},
        box-shadow ${theme.transitionTime};

      > img {
        border-radius: ${theme.borderRadius} ${theme.borderRadius} 0 0;
        width: 100%;
      }

      &:hover {
        box-shadow: ${theme.palette.common.boxShadowColor};
        transform: scale(1.04);
      }
    `,
  ),
  Content: styled.div(
    ({ theme }) => css`
      padding: ${theme.spacing.sm} ${theme.spacing.md};
    `,
  ),
};

export default SC;
