import styled, { css } from "styled-components";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      background-color: ${theme.palette.common.white};
      height: calc(100vh - 135px);
      display: grid;
      place-items: center;
    `,
  ),
};

export default SC;
