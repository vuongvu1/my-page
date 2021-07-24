import { FC } from "react";
import SC from "./styles";

type Props = {
  title: string;
  url: string;
};

const Song: FC<Props> = ({ title, url }) => {
  return (
    <SC.SongWrapper>
      <SC.IFrameWrapper>
        <SC.IFrame
          max-width="1280"
          height="720"
          src={url}
          title="YouTube video player"
          frameBorder="0"
        />
      </SC.IFrameWrapper>
      <SC.SongTitle>{title}</SC.SongTitle>
    </SC.SongWrapper>
  );
};

export default Song;
