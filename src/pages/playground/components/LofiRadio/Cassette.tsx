import { useEffect, useRef } from "react";
import { RadioWrapper } from "./styles";

type Props = {
  isPlaying: boolean;
};

export const Cassette = ({ isPlaying }: Props) => {
  const circleRef = useRef<number>();

  useEffect(() => {
    const circle = document.querySelectorAll(
      ".circle",
    ) as NodeListOf<HTMLElement>;

    let deg = circleRef.current || 0;
    const playRadio = () => {
      if (deg < 360 && circle.length >= 2) {
        deg += 1;
        circle[0].style.transform = `rotate(${deg}deg)`;
        circle[1].style.transform = `rotate(${deg}deg)`;
      } else {
        deg = 0;
      }
      circleRef.current = deg;
    };

    let interval: NodeJS.Timeout | undefined;
    if (isPlaying) {
      interval = setInterval(playRadio, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  return (
    <RadioWrapper>
      <div className="wrapper">
        <div className="cassette__block">
          <div className="bolt bolt1">
            <div className="small__bolt"></div>
          </div>
          <div className="bolt bolt2">
            <div className="small__bolt"></div>
          </div>
          <div className="bolt bolt3">
            <div className="small__bolt"></div>
          </div>
          <div className="bolt bolt4">
            <div className="small__bolt"></div>
          </div>
          <div className="cassette__block_paper">
            <div className="title__cassette">Stereo</div>
            <div className="title__a">A</div>
            <div className="cassette__block_black-line"></div>
            <div className="cassette__block_lines">
              <div className="line1 line"></div>
              <div className="line2 line"></div>
              <div className="line3 line"></div>
              <div className="line4 line"></div>
              <div className="line5 line"></div>
            </div>
            <div className="cassette__block_central">
              <div className="left circle">
                <div className="small__circle">
                  <div className="block1 block__cass"></div>
                  <div className="block2 block__cass"></div>
                  <div className="block3 block__cass"></div>
                  <div className="block4 block__cass"></div>
                  <div className="block5 block__cass"></div>
                  <div className="block6 block__cass"></div>
                </div>
              </div>
              <div className="central__block">
                <div className="big__circle tape1"></div>
                <div className="big__circle tape2"></div>
                <div className="big__circle tape3"></div>
                <div className="big__circle tape4"></div>
                <div className="big__circle tape5"></div>
                <div className="big__circle tape6"></div>
                <div className="big__circle tape7"></div>
                <div className="big__circle tape8"></div>
                <div className="big__circle tape9"></div>
                <div className="big__circle tape10"></div>
              </div>
              <div className="right circle">
                <div className="small__circle">
                  <div className="block1 block__cass"></div>
                  <div className="block2 block__cass"></div>
                  <div className="block3 block__cass"></div>
                  <div className="block4 block__cass"></div>
                  <div className="block5 block__cass"></div>
                  <div className="block6 block__cass"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom__block"></div>
          <div className="hole__block">
            <div className="hole hole1"></div>
            <div className="hole hole2"></div>
            <div className="hole hole3"></div>
            <div className="hole hole4"></div>
          </div>
        </div>
      </div>
    </RadioWrapper>
  );
};
