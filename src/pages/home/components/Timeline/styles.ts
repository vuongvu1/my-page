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
    `,
  ),
  Body: styled.div(
    ({ theme }) => css`
      display: grid;
      place-items: center;
      padding: ${theme.spacing.lg};

      ${mediaQueries("sm")`
        width: 60%;
        padding: 0;
      `}
    `,
  ),
};

export default SC;
