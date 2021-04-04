import styled, { css } from "styled-components";
import { mediaQueries } from "globalStyles";

type WrapperProps = {
  hide?: boolean;
};

const SC = {
  Wrapper: styled.nav<WrapperProps>(
    ({ theme, hide }) => css`
      background-color: ${theme.palette.primary.main};
      padding: ${theme.spacing.sm};
      z-index: 2;
      position: sticky;
      top: 0;
      transition: top ${theme.transitionTime};
      ${hide &&
      css`
        top: -80px;
      `}
    `
  ),
  Items: styled.ul(
    ({ theme }) => css`
      margin: ${theme.spacing.sm} auto;
      padding: 0;
      list-style-type: none;
      display: flex;
      align-items: left;

      ${mediaQueries("sm")`
        max-width: ${theme.breakpoint.md};
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

        &:hover {
          * {
            transition: color ${theme.transitionTime};
            color: ${theme.palette.common.hover};
          }
        }
      }
    `
  ),
  MobileWrapper: styled.div(
    ({ theme }) => css`
      background-color: ${theme.palette.primary.main};
      padding: ${theme.spacing.sm};
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      li {
        margin-bottom: 10px;
      }
    `
  ),
};

export default SC;
