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
      padding: ${theme.spacing.sm};

      ${mediaQueries("md")`
        padding: ${theme.spacing.lg};
      `}
    `
  ),
  Info: styled.div(
    ({ theme }) => css`
      padding: ${theme.spacing.md};
      background: rgba(76, 175, 80, 0.6);
      text-shadow: 2px 2px ${theme.palette.primary.main};
      border-radius: 50%;
      min-width: 220px;

      ${mediaQueries("md")`
        margin-left: ${theme.spacing.lg};
        padding-left: 40px;
        min-width: 340px;
      `}
    `
  ),
  Link: styled.a(
    ({ theme }) => css`
      color: ${theme.palette.primary.contrastText};
      transition: color 0.3s;

      &:hover {
        color: ${theme.palette.common.hover};
      }
    `
  ),
};

export default SC;
