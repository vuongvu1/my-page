import styled, { css } from "styled-components";

export const DigitalClockStyles = {
  Clock: styled.div(
    ({ theme }) => css`
      display: flex;
      justify-content: center;
      align-items: top;
      transform: translate(0, 35%);
    `
  ),
  NumberWrapper: styled.div<{ num: number; isMonth?: boolean }>(
    ({ num, isMonth }) => css`
      width: ${isMonth ? 60 : 30}px;
      transform: translate(0, -${num * 30}px);
      transition: transform 0.3s;
    `
  ),
  Number: styled.div<{ isShow: boolean }>(
    ({ isShow, theme }) => css`
      background-color: ${theme.palette.common.light};
      height: 30px;
      display: grid;
      place-items: center;
      transition: background-color 0.3s, color 0.3s;
      filter: blur(2px);

      ${isShow &&
      css`
        background-color: ${theme.palette.primary.main};
        color: ${theme.palette.common.light};
        filter: unset;
      `}
    `
  ),
  Seperator: styled.span`
    margin-top: 8px;
  `,
};

export const SideBarStyles = {
  Wrapper: styled.aside(
    ({ theme }) => css`
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(-90%, -50%);
      min-width: 240px;
      z-index: 1;
      transition: transform 0.3s;

      &:hover {
        transform: translate(-26%, -50%);
      }
    `
  ),
  Item: styled.div<{ isActive: boolean }>(
    ({ theme, isActive }) => css`
      padding: ${theme.spacing.sm} ${theme.spacing.lg};
      padding-left: 80px;
      transition: transform 0.3s, background-color 0.3s;
      border: 1px solid ${theme.palette.primary.main};
      border-left: none;
      background-color: ${theme.palette.common.white};
      cursor: pointer;
      font-weight: bold;

      ${isActive &&
      css`
        background-color: ${theme.palette.primary.main};
        color: ${theme.palette.primary.contrastText};
      `}

      &:hover {
        transform: translate(15%, 0);
      }
    `
  ),
};
