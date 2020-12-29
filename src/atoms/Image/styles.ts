import styled, { css } from "styled-components";
import { mediaQueries } from "globalStyles";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      padding: ${theme.spacing.lg};
      display: grid;
      place-items: center;
    `
  ),
  Border: styled.div(
    ({ theme }) => css`
      max-width: 340px;
      border-radius: ${theme.borderRadius};

      ${mediaQueries("md")`
        border: 2px solid ${theme.palette.common.hover};
        transform: translate(${theme.spacing.sm}, ${theme.spacing.sm});
      `}
    `
  ),
  Image: styled.img(
    ({ theme }) => css`
      width: 100%;
      max-width: 340px;
      border-radius: ${theme.borderRadius};

      ${mediaQueries("md")`
        transform: translate(-${theme.spacing.lg}, -${theme.spacing.lg});
      `}
    `
  ),
};

export default SC;
