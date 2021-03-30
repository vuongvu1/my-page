import styled, { css } from "styled-components";
import { mediaQueries } from "globalStyles";

type BorderType = {
  type?: 1 | 2;
};

const Wrapper = styled.div(
  ({ theme }) => css`
    padding: ${theme.spacing.lg};
    display: grid;
    place-items: center;

    ${mediaQueries("md")`
      &:hover {
        ${Border} {
          transform: unset;
          border-width: 0;
          > img {
            transform: unset;
          }
        }
      }
    `}
  `
);

const Border = styled.div<BorderType>(
  ({ theme, type }) => css`
    max-width: 340px;
    border-radius: ${theme.borderRadius};
    transition: transform ${theme.transitionTime},
      border-width ${theme.transitionTime};
    > img {
      width: 100%;
      border-radius: ${theme.borderRadius};
      transition: transform ${theme.transitionTime};
    }

    ${mediaQueries("md")`
      border: 4px solid ${theme.palette.common.light};
      transform: translate(${theme.spacing.sm}, ${theme.spacing.sm});
      > img {
        transform: translate(-${theme.spacing.lg}, -${theme.spacing.lg});
      }
    `}

    ${type === 2 &&
    css`
      ${mediaQueries("md")`
        border-color: ${theme.palette.primary.main};
        transform: translate(-${theme.spacing.sm}, ${theme.spacing.sm});
        > img {
          transform: translate(${theme.spacing.lg}, -${theme.spacing.lg});
        }
      `}
    `}
  `
);

const SC = {
  Wrapper,
  Border,
};

export default SC;
