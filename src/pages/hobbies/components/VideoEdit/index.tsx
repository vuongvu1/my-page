import { Accordion } from "components";
import { YTIframe } from "atoms";
import SC from "./styles";

const songList = [
  {
    title: "A Slice of Life",
    url: "https://www.youtube.com/embed/GWYt9w3n1Co",
  },
];

const VideoEdit = () => {
  const data = songList.map((props) => ({
    title: props.title,
    content: <YTIframe key={props.title} {...props} />,
  }));

  return (
    <SC.Wrapper>
      <Accordion data={data} />
    </SC.Wrapper>
  );
};

export default VideoEdit;
