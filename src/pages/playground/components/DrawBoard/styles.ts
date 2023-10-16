import styled, { css } from "styled-components";

const SC = {
  Canvas: styled.canvas(
    ({ theme }) => css`
      border: 1px solid black;
    `,
  ),
  ButtonWrapper: styled.div(
    ({ theme }) => css`
      padding: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      > * {
        margin-left: 10px;
      }
    `,
  ),
  Button: styled.button<{ backgroundColor: string; isActive: boolean }>(
    ({ isActive, backgroundColor }) => css`
      background-color: ${backgroundColor};
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border-color: ${isActive ? "red" : "white"};
    `,
  ),
};

export default SC;
