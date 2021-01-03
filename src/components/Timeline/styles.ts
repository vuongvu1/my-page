import styled, { css } from "styled-components";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      min-height: 90vh;
      display: grid;
      place-items: start center;
      grid-template-rows: 120px auto;
      padding: ${theme.spacing.lg};
    `
  ),
  Body: styled.div(
    ({ theme }) => css`
      display: grid;
      place-items: center;
      width: 60%;
    `
  ),
};

export default SC;
