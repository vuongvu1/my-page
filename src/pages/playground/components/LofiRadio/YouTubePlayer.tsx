import { FC, useRef, useEffect } from "react";

type Props = {
  videoId: string;
  isPlaying: boolean;
  setIsPlaying: (state: boolean) => void;
};

export const YouTubePlayer: FC<Props> = ({
  videoId,
  isPlaying,
  setIsPlaying,
}) => {
  const playerRef = useRef<YT.Player | null>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // only accept "space" key
      if (e.key !== " ") {
        return;
      }

      if (isPlaying) {
        playerRef.current?.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current?.playVideo();
        setIsPlaying(true);
      }
    };
    document.body.addEventListener("keydown", handleKeyPress);

    return () => {
      document.body.removeEventListener("keydown", handleKeyPress);
    };
  }, [isPlaying, setIsPlaying]);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";

    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    const initializePlayer = () => {
      playerRef.current = new window.YT.Player("player", {
        height: "auto",
        width: "100%",
        videoId,
      });
    };

    // @ts-expect-error -- global type doesn't work
    window.onYouTubeIframeAPIReady = initializePlayer;

    return () => {
      // @ts-expect-error -- global type doesn't work
      window.onYouTubeIframeAPIReady = null;
      playerRef.current = null;
      firstScriptTag.parentNode?.removeChild(tag);
    };
  }, [videoId]);

  return (
    <div
      id="player"
      // style={{ display: "none" }}
    />
  );
};
