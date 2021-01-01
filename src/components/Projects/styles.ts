import styled, { css } from "styled-components";
import { mediaQueries } from "globalStyles";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      min-height: 90vh;
      display: grid;
      place-items: start center;
      grid-template-rows: 120px auto;
      padding: ${theme.spacing.lg};
    `
  ),
  Body: styled.div(
    ({ theme }) => css`
      display: grid;
      grid-gap: ${theme.spacing.md};
      place-items: center;
      width: 100%;

      > * {
        height: 100%;
      }

      ${mediaQueries("sm")`
        grid-template-columns: repeat(2, 1fr);
      `}

      ${mediaQueries("md")`
        grid-template-columns: repeat(3, 1fr);
        grid-gap: ${theme.spacing.lg};
      `}
    `
  ),
};

export default SC;
