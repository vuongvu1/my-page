import { FC, PropsWithChildren } from "react";
import SC from "./styles";

type Props = {
  title: string;
  url: string;
};

const YTIframe: FC<PropsWithChildren<Props>> = ({ title, url }) => {
  return (
    <SC.VideoWrapper>
      <SC.IFrameWrapper>
        <SC.IFrame
          max-width="1280"
          height="720"
          src={url}
          title="YouTube video player"
          frameBorder="0"
        />
      </SC.IFrameWrapper>
      <SC.VideoTitle>{title}</SC.VideoTitle>
    </SC.VideoWrapper>
  );
};

export default YTIframe;
