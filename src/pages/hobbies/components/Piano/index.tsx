import SC from "./styles";
import Song from "./Song";

const songList = [
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
