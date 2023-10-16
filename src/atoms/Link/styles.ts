import styled, { css } from "styled-components";

const SC = {
  Link: styled.a(
    ({ theme, color }) => css`
      color: ${color || theme.palette.primary.contrastText};
      transition: color 0.3s;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: ${theme.palette.common.hover};
      }
    `,
  ),
};

export default SC;
