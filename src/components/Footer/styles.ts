import styled, { css } from "styled-components";
import { mediaQueries } from "globalStyles";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      background-color: ${theme.palette.primary.main};
      padding: ${theme.spacing.sm};
      color: ${theme.palette.common.light};
      width: 100%;
      text-align: center;
      font-size: 0.8rem;

      ${mediaQueries("sm")`
        width: auto;
        text-align: right;
        float: right;
      `}
    `
  ),
};

export default SC;
