import styled, { css } from "styled-components";
import { mediaQueries } from "globalStyles";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      min-height: 90vh;
      color: ${theme.palette.primary.main};
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
  Info: styled.div(
    ({ theme }) => css`
      text-align: center;

      ${mediaQueries("md")`
        text-align: left;
      `}

      img {
        transition: transform 0.3s;

        &:hover {
          transform: scale(1.05);
        }
      }
    `
  ),
};

export default SC;
