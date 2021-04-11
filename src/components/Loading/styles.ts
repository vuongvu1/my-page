import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: ${theme.palette.primary.contrastText};
      display: grid;
      place-items: center;
    `
  ),
  Loading: styled.div(
    ({ theme }) => css`
      width: 100px;
      height: 10px;
      background-color: ${theme.palette.primary.main};
      animation-name: ${rotate};
      animation-duration: 1000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    `
  ),
};

export default SC;
