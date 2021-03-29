import styled, { css } from "styled-components";
import { isEven, isOdd } from "utils/numbers";

type WrapperProps = {
  index: number;
  isFirst?: boolean;
  isLast?: boolean;
};

const Wrapper = styled.div<WrapperProps>(
  ({ theme, index, isFirst, isLast }) => css`
    position: relative;
    width: 100%;
    padding: ${theme.spacing.lg};
    color: ${theme.palette.common.light};
    border-radius: 1rem;
    border: 2px dashed ${theme.palette.common.hover};
    border-bottom: none;

    ${isOdd(index) &&
    css`
      margin-right: ${theme.spacing.md};
      border-right: none;
      border-top-right-radius: 0;
      padding-right: ${theme.spacing.sm};

      ${Index} {
        left: 0;
        transform: translate(-50%, -50%);
      }

      ${isLast &&
      css`
        border-top: none;
        border-top-left-radius: 0;
      `}
    `}

    ${isEven(index) &&
    css`
      margin-left: ${theme.spacing.md};
      border-left: none;
      border-top-left-radius: 0;
      padding-left: ${theme.spacing.sm};

      ${Index} {
        right: 0;
        transform: translate(50%, -50%);
      }

      ${isLast &&
      css`
        border-top: none;
        border-top-right-radius: 0;
      `}
    `}

    ${isFirst &&
    css`
      border-bottom-left-radius: 0;
    `}
  `
);

const Index = styled.div(
  ({ theme }) => css`
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: ${theme.palette.common.hover};
    color: ${theme.palette.primary.contrastText};
    width: 30px;
    height: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  `
);

const SC = {
  Wrapper,
  Index,
};

export default SC;
