import styled, { css } from "styled-components";
import { mediaQueries } from "globalStyles";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      position: relative;
    `
  ),
  Image: styled.img<{ visible: boolean }>(
    ({ theme, visible }) => css`
      opacity: 0;
      transition: all 0.3s;
      position: absolute;
      pointer-events: none;
      max-width: 100%;

      ${visible &&
      css`
        position: relative;
        opacity: 1;
      `}
    `
  ),
  Button: styled.button<{ left?: boolean; right?: boolean }>(
    ({ theme, left, right }) => css`
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      font-size: 40px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: transparent;
      color: ${theme.palette.common.white};
      cursor: pointer;
      transition: all 0.3s;
      border-color: transparent;
      border-width: 0;

      &:hover {
        border-color: ${theme.palette.common.white};
      }

      ${left &&
      css`
        left: -40px;
        border-left-width: 2px;

        ${mediaQueries("md")`
          left: -60px;
        `}
      `}
      ${right &&
      css`
        right: -40px;
        border-right-width: 2px;

        ${mediaQueries("md")`
          right: -60px;
        `}
      `}
    `
  ),
};

export default SC;
