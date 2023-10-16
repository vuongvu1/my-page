import styled, { css } from "styled-components";

const SC = {
  VideoWrapper: styled.div(
    ({ theme }) => css`
      display: grid;
      place-items: center;
      margin-bottom: ${theme.spacing.lg};
    `,
  ),
  IFrameWrapper: styled.div(
    ({ theme }) => css`
      width: 60vw;
      max-width: 865px;
      padding-top: 56.25%;
      position: relative;
    `,
  ),
  VideoTitle: styled.h2(
    ({ theme }) => css`
      font-size: ${theme.fontSize.md};
      font-weight: ${theme.fontSize.lg};
    `,
  ),
  IFrame: styled.iframe(
    ({ theme }) => css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `,
  ),
};

export default SC;
