import styled, { css } from "styled-components";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      height: 90vh;
      color: ${theme.palette.primary.contrastText};
      display: flex;
      justify-content: center;
      align-items: center;
    `
  ),
};

export default SC;
