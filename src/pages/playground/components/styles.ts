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
  Clock: styled.div(
    ({ theme }) => css`
      display: flex;
      justify-content: center;
      align-items: top;
      transform: translate(0, 25%);
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
        background-color: ${theme.palette.secondary.main};
        color: ${theme.palette.common.light};
        filter: unset;
      `}
    `
  ),
  Seperator: styled.span`
    margin-top: 8px;
  `,
};

export default SC;
