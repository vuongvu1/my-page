import styled from "styled-components";

export const Parallax = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  perspective: 1px;
  overflow-x: auto;
  overflow-y: auto;
`;

const ParallaxLayer = styled.div`
  padding: 50vh 50vw;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ParallaxLayerDeep = styled(ParallaxLayer)`
  transform: translateZ(-2px);
`;

export const ParallaxLayerBack = styled(ParallaxLayer)`
  transform: translateZ(-1px);
`;

export const ParallaxLayerBase = styled(ParallaxLayer)`
  transform: translateZ(0);
`;

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 5em;

  border: 2px solid black;
  padding: 0.5em 1em;
  opacity: 0.7;
`;

export const CenterBlue = styled(Center)`
  background: blue;
  color: white;
`;

export const CenterRed = styled(Center)`
  background: red;
  color: white;
`;

export const CenterGreen = styled(Center)`
  background: green;
  color: white;
`;
