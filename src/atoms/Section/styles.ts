import styled, { css } from "styled-components";

type WrapperProps = {
  bgColor?: string;
};

const SC = {
  Wrapper: styled.section<WrapperProps>(
    ({ theme, bgColor }) => css`
      background-color: ${bgColor || theme.palette.primary.main};
      padding: ${theme.spacing.lg};
      display: flex;
      justify-content: center;
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
