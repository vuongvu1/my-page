import {
  Parallax,
  ParallaxLayerDeep,
  ParallaxLayerBack,
  ParallaxLayerBase,
  CenterBlue,
  CenterRed,
  CenterGreen,
} from "./styles";

// ref: https://keithclark.co.uk/articles/pure-css-parallax-websites/demo3/

export default function App() {
  return (
    <Parallax>
      <ParallaxLayerDeep>
        <CenterBlue>This is the deep</CenterBlue>
      </ParallaxLayerDeep>
      <ParallaxLayerBack>
        <CenterRed>This is the background</CenterRed>
      </ParallaxLayerBack>
      <ParallaxLayerBase>
        <CenterGreen>This is the foreground</CenterGreen>
      </ParallaxLayerBase>
    </Parallax>
  );
}
