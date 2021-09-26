import SC from "./styles";
import Song from "./Song";

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
  return (
    <SC.Wrapper>
      {songList.map((props) => (
        <Song key={props.title} {...props} />
      ))}
    </SC.Wrapper>
  );
};

export default Piano;
