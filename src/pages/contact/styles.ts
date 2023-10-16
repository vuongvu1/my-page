import styled, { css } from "styled-components";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      background-color: ${theme.palette.common.white};
      height: calc(100vh - 135px);
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
  ),
  Info: styled.div(
    ({ theme }) => css`
      padding: ${theme.spacing.sm} ${theme.spacing.lg};
      border-radius: ${theme.borderRadius};
      border: 2px dashed ${theme.palette.primary.main};
      display: grid;
      place-items: center;
    `,
  ),
};

export default SC;
