import styled, { css } from "styled-components";

export const Menu = styled.div(
  ({ theme }) => css`
    transition: padding-right 0.3s;
    display: flex;
    justify-content: flex-end;
    padding-right: 0;
    font-weight: bold;
  `,
);

const SC = {
  Wrapper: styled.aside(
    ({ theme }) => css`
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(-78%, -50%);
      min-width: 240px;
      z-index: 1;
      transition: transform 0.3s;

      &:hover {
        transform: translate(-26%, -50%);

        ${Menu} {
          padding-right: 80px;
        }
      }
    `,
  ),
  Item: styled.div<{ isActive: boolean }>(
    ({ theme, isActive }) => css`
      padding: ${theme.spacing.sm} ${theme.spacing.lg};
      padding-left: 80px;
      transition:
        transform 0.3s,
        background-color 0.3s;
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
    `,
  ),
};

export default SC;
