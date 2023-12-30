import { useEffect, useState, useRef } from "react";
import { Text } from "atoms";
import { Cassette } from "./Cassette";
import { MP3Player } from "./MP3Player";
import { MusicNotes } from "./MusicNotes";
import { Container } from "./styles";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
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
    <Container>
      <Text type="body">Press [Space] to Play/Pause</Text>
      <MP3Player setIsPlaying={setIsPlaying} />
      <Cassette isPlaying={isPlaying} />
      <MusicNotes isPlaying={isPlaying} />
    </Container>
  );
}
