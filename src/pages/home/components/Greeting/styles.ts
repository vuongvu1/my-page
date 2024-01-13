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
    `,
  ),
  Column: styled.div(
    ({ theme }) => css`
      display: grid;
      place-items: center;
      padding: ${theme.spacing.sm};

      ${mediaQueries("md")`
        padding: ${theme.spacing.lg};
      `}
    `,
  ),
  Info: styled.div(
    ({ theme }) => css`
      padding: ${theme.spacing.md};
      padding-top: 0;
      background: rgba(1, 68, 33, 0.8);
      text-shadow: 2px 2px ${theme.palette.primary.main};
      border-radius: ${theme.borderRadius};
    `,
  ),
  NoWrap: styled.div`
    white-space: nowrap;
  `,
};

export default SC;
