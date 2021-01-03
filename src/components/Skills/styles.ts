import styled, { css } from "styled-components";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      display: grid;
      place-items: start center;
      grid-template-rows: 120px auto;
      padding: ${theme.spacing.lg};
    `
  ),
  Body: styled.div(
    ({ theme }) => css`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      > * {
        margin: ${theme.spacing.sm};
      }
    `
  ),
};

export default SC;
