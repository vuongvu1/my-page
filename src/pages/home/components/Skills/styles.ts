import styled, { css } from "styled-components";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      display: grid;
      place-items: start center;
      grid-template-rows: 120px auto;
      padding: ${theme.spacing.lg};
    `,
  ),
  Title: styled.div(
    ({ theme }) => css`
      text-shadow: 2px 2px ${theme.palette.primary.main};
    `,
  ),
  Body: styled.div(
    ({ theme }) => css`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      > * {
        margin: ${theme.spacing.sm};
      }
    `,
  ),
};

export default SC;
