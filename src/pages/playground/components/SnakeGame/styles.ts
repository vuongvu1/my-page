import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 420px;
  height: 420px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
`;

export const Box = styled.div<{ isActive: boolean; isFood: boolean }>(
  ({ theme, isActive, isFood }) => css`
    width: 35px;
    height: 35px;
    border: 1px solid grey;
    margin: 2px;
    background-color: white;
    transition: all 0.3s;

    ${isFood &&
    css`
      background-color: ${theme.palette.common.hover};
    `}

    ${isActive &&
    css`
      background-color: ${theme.palette.primary.main};
    `}
  `,
);

export const Score = styled.div`
  position: absolute;
  bottom: -8%;
  left: 50%;
  transform: translate(-50%, 0);
`;
