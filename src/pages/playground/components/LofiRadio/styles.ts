import styled from "styled-components";

export const Container = styled.div``;

export const RadioWrapper = styled.div`
  .cassette__block {
    padding: 27px 0 0 0;
    width: 450px;
    height: 271px;
    background-color: black;
    border-radius: 15px;
    position: relative;
    z-index: 0;
    perspective: 500px;
  }

  .cassette__block_paper {
    position: relative;
    padding: 42px 0 0 0;
    margin: 0 auto;
    background-color: white;
    width: 400px;
    height: 164px;
    clip-path: polygon(5% 0%, 95% 0%, 100% 12%, 100% 100%, 0 100%, 0% 12%);
  }

  .cassette__block_lines {
    width: 1000px;
    height: 100px;
  }
  .line {
    width: 1000px;
    height: 18px;
  }

  .line1 {
    background-color: #643794;
  }

  .line2 {
    background-color: #a33c95;
  }

  .line3 {
    background-color: #f05924;
  }

  .line4 {
    background-color: #f5a01f;
  }

  .line5 {
    background-color: #faf29f;
  }

  .cassette__block_black-line {
    margin: 0 auto;
    width: 370px;
    height: 3px;
    background-color: black;
    position: relative;
    top: -21px;
  }

  .cassette__block_central {
    margin: 0 auto;
    width: 260px;
    height: 76px;
    background-color: black;
    border-radius: 6px;
    position: relative;
    top: -95px;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    padding: 12px;
  }

  .circle {
    width: 52px;
    height: 52px;
    background-color: #643794;
    border-radius: 50%;
    padding: 3px;
  }

  .central__block {
    width: 90px;
    height: 50px;
    background: rgb(145, 145, 145);
    background: linear-gradient(
      180deg,
      rgba(145, 145, 145, 1) 0%,
      rgba(255, 255, 255, 1) 45%,
      rgba(145, 145, 145, 1) 100%
    );
    overflow: hidden;
    position: relative;
  }

  .small__circle {
    margin: 0 auto;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
  }

  .block__cass {
    width: 5px;
    height: 5px;
    background-color: #643794;
    position: relative;
  }

  .block1 {
    left: 21px;
  }

  .block2 {
    transform: rotate(50deg);
    left: 38px;
    top: 3px;
  }

  .block3 {
    transform: rotate(30deg);
    left: 39px;
    top: 20px;
  }

  .block4 {
    left: 21px;
    top: 27px;
  }

  .block5 {
    left: 3px;
    top: -12px;
    transform: rotate(40deg);
  }

  .block6 {
    left: 3px;
    top: 7px;
    transform: rotate(50deg);
  }

  .big__circle {
    position: absolute;
    border: 3px solid rgb(0, 0, 0);
    border-radius: 50%;
    width: 160px;
    height: 160px;
    top: -55px;
  }

  .tape1 {
    left: 44px;
  }

  .tape2 {
    left: 48px;
  }

  .tape3 {
    left: 52px;
  }

  .tape4 {
    left: 56px;
  }

  .tape5 {
    left: 60px;
  }

  .tape6 {
    left: 64px;
  }

  .tape7 {
    left: 68px;
  }

  .tape8 {
    left: 72px;
  }

  .tape9 {
    left: 76px;
  }

  .tape10 {
    left: 80px;
  }

  .title__cassette {
    position: absolute;
    font-family: "Diplomata SC", cursive;
    font-size: 30px;
    color: gray;
    top: 133px;
    right: 10px;
  }

  .title__a {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 21px;
    background: black;
    color: white;
    top: 140px;
    left: 10px;
  }

  .bottom__block {
    margin: 8px auto;
    transform: rotateX(45deg);
    background: rgb(0, 0, 0);
    border-right: 2px solid white;
    border-top: 2px solid white;
    border-left: 2px solid white;
    width: 270px;
    height: 80px;
    border-radius: 3px;
  }

  .bolt {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: white;
    position: absolute;
  }

  .bolt1 {
    top: 9px;
    left: 9px;
  }

  .bolt2 {
    top: 9px;
    right: 9px;
  }

  .bolt3 {
    bottom: 9px;
    right: 9px;
  }

  .bolt4 {
    bottom: 9px;
    left: 9px;
  }

  .small__bolt {
    width: 14px;
    height: 14px;
    background: black;
    border-radius: 50%;
    position: relative;
    top: -3px;
    left: -2px;
  }

  .hole {
    position: absolute;
    width: 8px;
    height: 8px;
    background: rgb(173, 173, 173);
    border-radius: 50%;
  }

  .hole1 {
    bottom: 10px;
    left: 300px;
  }

  .hole2 {
    bottom: 10px;
    left: 130px;
  }

  .hole3 {
    bottom: 30px;
    left: 270px;
  }

  .hole4 {
    bottom: 30px;
    left: 160px;
  }
`;
