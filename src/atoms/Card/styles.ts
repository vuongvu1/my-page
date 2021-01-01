import styled, { css } from "styled-components";

type WrapperProps = {
  bgColor?: string;
};

const SC = {
  Wrapper: styled.div<WrapperProps>(
    ({ theme, bgColor }) => css`
      background-color: ${bgColor || theme.palette.common.light};
      border-radius: ${theme.borderRadius};
      transition: transform ${theme.transitionTime};

      > img {
        border-radius: ${theme.borderRadius} ${theme.borderRadius} 0 0;
        width: 100%;
      }

      &:hover {
        transform: rotate(2deg);
      }
    `
  ),
  Content: styled.div(
    ({ theme }) => css`
      padding: ${theme.spacing.sm} ${theme.spacing.md};
    `
  ),
};

export default SC;
