import styled, { css } from "styled-components";
import { mediaQueries } from "globalStyles";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      min-height: 90vh;
      color: ${theme.palette.primary.contrastText};
      display: grid;

      ${mediaQueries("md")`
        grid-template-columns: 1fr 1fr;
      `}
    `
  ),
  Column: styled.div(
    ({ theme }) => css`
      display: grid;
      place-items: center;
      padding: ${theme.spacing.lg};
    `
  ),
};

export default SC;
