import styled, { css } from "styled-components";
import { mediaQueries } from "globalStyles";

const SC = {
  Wrapper: styled.nav(
    ({ theme }) => css`
      background-color: ${theme.palette.primary.main};
      padding: ${theme.spacing.sm};
    `
  ),
  Items: styled.ul(
    ({ theme }) => css`
      margin: ${theme.spacing.md} auto;
      padding: 0;
      list-style-type: none;
      display: flex;
      align-items: left;

      ${mediaQueries("sm")`
        max-width: ${theme.breakpoint.lg};
        align-items: center;
        justify-content: space-around;
      `}
    `
  ),
  Item: styled.li(
    ({ theme }) => css`
      padding-left: ${theme.spacing.md};
      cursor: pointer;

      a {
        text-decoration: none;
        color: ${theme.palette.primary.contrastText};
        font-weight: ${theme.fontWeight.md};
        transition: color 0.3s;

        &:hover {
          color: ${theme.palette.common.hover};
        }
      }
    `
  ),
};

export default SC;
