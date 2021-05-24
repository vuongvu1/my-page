import styled, { css } from "styled-components";

const BACKGROUND_COLOR = "#000325";
const SELECTED_COLOR = "#EFA600";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      width: 80%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      position: relative;
    `
  ),
  Title: styled.div(
    ({ theme }) => css`
      width: 100%;
      font-size: ${theme.fontSize.md};
      margin-bottom: ${theme.spacing.sm};
      display: flex;
      height: 62px;

      > div {
        &:first-child {
          border-top: 30px solid transparent;
          border-bottom: 30px solid transparent;
          border-right: 22px solid ${BACKGROUND_COLOR};
        }
        &:nth-child(2) {
          padding: ${theme.spacing.sm};
          flex: 1;
          color: white;
          background-color: ${BACKGROUND_COLOR};
          display: flex;
          justify-content: center;
          align-items: center;
        }
        &:last-child {
          border-top: 30px solid transparent;
          border-bottom: 30px solid transparent;
          border-left: 22px solid ${BACKGROUND_COLOR};
        }
      }
    `
  ),
  Answer: styled.div<{
    isSelected: boolean;
    isCorrect: boolean;
    isShowResult: boolean;
  }>(
    ({ theme, isSelected, isCorrect, isShowResult }) => css`
      width: 50%;
      margin-bottom: ${theme.spacing.sm};
      display: flex;
      font-size: ${theme.fontSize.md};
      cursor: pointer;

      > div {
        transition: all 0.3s;

        &:first-child {
          border-top: 22px solid transparent;
          border-bottom: 22px solid transparent;
          border-right: 22px solid ${BACKGROUND_COLOR};

          ${isSelected &&
          css`
            border-right-color: ${SELECTED_COLOR};
          `}
        }
        &:nth-child(2) {
          padding: ${theme.spacing.sm};
          flex: 1;
          color: white;
          background-color: ${BACKGROUND_COLOR};

          ${isSelected &&
          css`
            background-color: ${SELECTED_COLOR};
          `}
        }
        &:last-child {
          border-top: 22px solid transparent;
          border-bottom: 22px solid transparent;
          border-left: 22px solid ${BACKGROUND_COLOR};

          ${isSelected &&
          css`
            border-left-color: ${SELECTED_COLOR};
          `}
        }
      }

      &:hover {
        > div {
          &:first-child {
            border-right: 22px solid ${SELECTED_COLOR};
          }
          &:nth-child(2) {
            background-color: ${SELECTED_COLOR};
          }
          &:last-child {
            border-left: 22px solid ${SELECTED_COLOR};
          }
        }
      }

      ${isShowResult &&
      css`
        > div {
          &:first-child {
            border-right: 22px solid ${theme.palette.common.error};

            ${isCorrect &&
            css`
              border-right-color: ${theme.palette.common.success};
            `}
          }
          &:nth-child(2) {
            background-color: ${theme.palette.common.error};

            ${isCorrect &&
            css`
              background-color: ${theme.palette.common.success};
            `}
          }
          &:last-child {
            border-left: 22px solid ${theme.palette.common.error};

            ${isCorrect &&
            css`
              border-left-color: ${theme.palette.common.success};
            `}
          }
        }
      `}
    `
  ),
  AnswerLetter: styled.span(
    ({ theme }) => css`
      color: ${theme.palette.common.hover};
    `
  ),
  ConfirmWrapper: styled.div<{ isDisabled: boolean }>(
    ({ theme, isDisabled }) => css`
      width: 100%;
      text-align: center;

      > button {
        cursor: pointer;
        margin-top: ${theme.spacing.lg};
        padding: ${theme.spacing.sm} ${theme.spacing.lg};
        font-size: ${theme.fontSize.md};
        background-color: ${theme.palette.common.success};
        color: ${theme.palette.common.white};
        border-radius: ${theme.borderRadius};
        font-weight: bold;
        border: none;

        &:hover {
          opacity: 0.8;
        }

        ${isDisabled &&
        css`
          cursor: not-allowed;
          background-color: ${theme.palette.common.dark};
        `}
      }
    `
  ),
  InfoBoard: styled.div(
    ({ theme }) => css`
      position: absolute;
      top: -40%;
      left: 0;
      padding: ${theme.spacing.sm} ${theme.spacing.md};
      border: 0 solid ${theme.palette.common.success};
      border-left-width: 4px;
    `
  ),
};

export default SC;
