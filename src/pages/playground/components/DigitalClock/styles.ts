import styled, { css } from "styled-components";

const SC = {
  Clock: styled.div(
    ({ theme }) => css`
      display: flex;
      justify-content: center;
      align-items: top;
      transform: translate(0, 35%);
    `,
  ),
  NumberWrapper: styled.div<{ num: number; isMonth?: boolean }>(
    ({ num, isMonth }) => css`
      width: ${isMonth ? 60 : 30}px;
      transform: translate(0, -${num * 30}px);
      transition: transform 0.3s;
    `,
  ),
  Number: styled.div<{ isShow: boolean }>(
    ({ isShow, theme }) => css`
      background-color: ${theme.palette.common.light};
      height: 30px;
      display: grid;
      place-items: center;
      transition:
        background-color 0.3s,
        color 0.3s;
      filter: blur(2px);

      ${isShow &&
      css`
        background-color: ${theme.palette.primary.main};
        color: ${theme.palette.common.light};
        filter: unset;
      `}
    `,
  ),
  Seperator: styled.span`
    margin-top: 8px;
  `,
};

export default SC;
