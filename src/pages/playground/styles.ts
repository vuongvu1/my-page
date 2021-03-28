import styled, { css } from "styled-components";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      background-color: ${theme.palette.common.white};
      height: 85vh;
      display: grid;
      place-items: center;
      position: relative;
    `
  ),
  Title: styled.div(
    ({ theme }) => css`
      position: absolute;
      top: ${theme.spacing.lg};
      left: ${theme.spacing.lg};
      font-size: ${theme.fontSize.lg};
      font-weight: ${theme.fontSize.lg};
    `
  ),
};

export default SC;
