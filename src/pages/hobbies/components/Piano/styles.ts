import styled, { css } from "styled-components";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      display: flex;
      justify-content: center;
      align-items: top;
      flex-direction: column;
    `
  ),
  SongWrapper: styled.div(
    ({ theme }) => css`
      display: grid;
      place-items: center;
      margin-bottom: ${theme.spacing.lg};
    `
  ),
  SongTitle: styled.h2(
    ({ theme }) => css`
      font-size: ${theme.fontSize.md};
      font-weight: ${theme.fontSize.lg};
    `
  ),
  IFrameWrapper: styled.div(
    ({ theme }) => css`
      width: 60vw;
      max-width: 865px;
      padding-top: 56.25%;
      position: relative;
    `
  ),
  IFrame: styled.iframe(
    ({ theme }) => css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `
  ),
};

export default SC;
