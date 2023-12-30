import { FC, useRef, useEffect } from "react";
import lofiSrc from "./lofi.mp3";

type Props = {
  setIsPlaying: (state: boolean) => void;
};

export const MP3Player: FC<Props> = ({ setIsPlaying }) => {
  const playerRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent): void => {
      // Check if the pressed key is the space bar
      if (event.key === " ") {
        if (playerRef.current?.paused) {
          playerRef.current?.play();
          setIsPlaying(true);
        } else {
          playerRef.current?.pause();
          setIsPlaying(false);
        }
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [setIsPlaying]);

  return (
    <audio controls loop ref={playerRef} style={{ display: "none" }}>
      <source src={lofiSrc} type="audio/mp3" />
      Your browser does not support the audio tag.
    </audio>
  );
};
