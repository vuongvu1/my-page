import styled, { css } from "styled-components";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      background-color: ${theme.palette.common.white};
      min-height: calc(100vh - 135px);
      padding: 80px ${theme.spacing.lg};
      position: relative;
      overflow: hidden;
    `
  ),
  Title: styled.h1(
    ({ theme }) => css`
      position: absolute;
      margin: 0;
      top: ${theme.spacing.lg};
      left: ${theme.spacing.lg};
      font-size: ${theme.fontSize.lg};
      font-weight: ${theme.fontSize.lg};
    `
  ),
};

export default SC;
