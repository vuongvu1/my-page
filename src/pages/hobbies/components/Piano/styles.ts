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
};

export default SC;
