import { YTIframe } from "atoms";
import { Accordion } from "components";
import SC from "./styles";
// import Song from "./Song";

const songList = [
  {
    title: "Katawaredoki - Your Name/ Kimi no Na wa",
    url: "https://www.youtube.com/embed/_6HN8Q4Dfbc",
  },
  {
    title: "Sky Clearing Up - Tenki no Ko/ Weathering With You",
    url: "https://www.youtube.com/embed/y51EtHI2ctw",
  },
  {
    title: "Always With Me - Spirited Away",
    url: "https://www.youtube.com/embed/ZsRg9NgKR40",
  },
];

const Piano = () => {
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

export default Piano;
