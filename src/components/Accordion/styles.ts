import styled, { css } from "styled-components";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      width: 100%;
    `,
  ),
  Item: styled.div(
    ({ theme }) => css`
      border-top: 1px solid ${theme.palette.common.light};
      border-bottom: 1px solid ${theme.palette.common.light};
    `,
  ),
  Title: styled.button(
    ({ theme }) => css`
      font-size: ${theme.fontSize.sm};
      font-weight: ${theme.fontWeight.md};
      padding: ${theme.spacing.md};
      cursor: pointer;
      width: 100%;
      text-align: start;
      background-color: ${theme.palette.common.white};
      transition: all 0.3s;
      border: none;

      &:hover {
        background-color: ${theme.palette.common.light};
      }
    `,
  ),
  Content: styled.div(
    ({ theme }) => css`
      width: 100%;
      padding: ${theme.spacing.md};
    `,
  ),
};

export default SC;
