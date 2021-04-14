import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 420px;
  height: 420px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
`;

export const Box = styled.div<{ isActive: boolean }>(
  ({ theme, isActive }) => css`
    width: 35px;
    height: 35px;
    border: 1px solid grey;
    margin: 2px;
    background-color: white;
    transition: all 0.3s;

    ${isActive &&
    css`
      background-color: ${theme.palette.primary.main};
    `}
  `
);
