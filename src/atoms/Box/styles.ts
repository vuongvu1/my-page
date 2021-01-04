import styled, { css } from "styled-components";
import { mediaQueries } from "globalStyles";

type WrapperProps = {};

const SC = {
  Wrapper: styled.div<WrapperProps>(
    ({ theme }) => css`
      border: 2px solid ${theme.palette.common.dark};
      background-color: ${theme.palette.common.light};
      border-radius: ${theme.borderRadius};
      transition: transform ${theme.transitionTime};
      padding: ${theme.spacing.sm} ${theme.spacing.md};
      box-shadow: ${theme.palette.common.boxShadowColor};
      text-align: center;

      &:hover {
        transform: rotate(-2deg);
      }
    `
  ),
  Body: styled.div(
    () => css`
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;

      ${mediaQueries("sm")`
        flex-direction: row;
      `}
    `
  ),
  Item: styled.div(
    ({ theme }) => css`
      margin: ${theme.spacing.sm};
      img {
        width: 100px;
      }
    `
  ),
};

export default SC;
