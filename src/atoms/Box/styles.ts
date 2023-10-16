import styled, { css } from "styled-components";
import { mediaQueries } from "globalStyles";

type WrapperProps = {};

const SC = {
  Wrapper: styled.div<WrapperProps>(
    ({ theme }) => css`
      border: 2px solid ${theme.palette.common.dark};
      background-color: ${theme.palette.common.light};
      border-radius: ${theme.borderRadius};
      transition:
        transform ${theme.transitionTime},
        box-shadow ${theme.transitionTime};
      padding: ${theme.spacing.sm} ${theme.spacing.md};
      text-align: center;

      &:hover {
        box-shadow: ${theme.palette.common.boxShadowColor};
        transform: scale(1.02);
      }
    `,
  ),
  Body: styled.div(
    () => css`
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;

      ${mediaQueries("sm")`
        flex-direction: row;
      `}
    `,
  ),
  Item: styled.div(
    ({ theme }) => css`
      margin: ${theme.spacing.sm};
      img {
        width: 100px;
        height: 100px;
      }
    `,
  ),
};

export default SC;
