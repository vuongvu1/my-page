import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  0% {  scale: 1.5; background-color: white }
  100% {  scale: 1; background-color: ${(p) => p.theme.palette.primary.main}; }
`;

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
      animation: ${fadeIn} 0.5s;
    `,
  ),
  Loading: styled.div(
    ({ theme }) => css`
      border: 16px solid ${theme.palette.common.white};
      border-radius: 50%;
      border-top: 16px solid ${theme.palette.common.dark};
      width: 120px;
      height: 120px;
      animation: ${rotate} 0.8s linear infinite;
    `,
  ),
};

export default SC;
