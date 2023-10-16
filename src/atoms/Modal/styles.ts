import styled, { css } from "styled-components";

type WrapperProps = {};

const SC = {
  Background: styled.div(
    ({ theme }) => css`
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99;
    `,
  ),
  Wrapper: styled.div<WrapperProps>(
    ({ theme }) => css`
      position: relative;
      max-width: 80vw;
      min-width: 200px;
      min-height: 200px;
      background-color: transparent;
    `,
  ),
  CloseWrapper: styled.div`
    position: absolute;
    top: -20px;
    right: -20px;
    cursor: pointer;
  `,
};

export default SC;
