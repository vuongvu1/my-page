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
      justify-content: space-around;
      align-items: center;

      ${mediaQueries("sm")`
        max-width: ${theme.breakpoint.lg};
      `}
    `
  ),
  Item: styled.li(
    ({ theme }) => css`
      padding-left: ${theme.spacing.md};

      a {
        text-decoration: none;
        color: ${theme.palette.common.light};
        font-weight: ${theme.fontWeight.md};
      }
    `
  ),
};

export default SC;
