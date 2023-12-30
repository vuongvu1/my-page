import { MusicNotesWrapper } from "./styles";

type Props = {
  isPlaying: boolean;
};

export const MusicNotes = ({ isPlaying }: Props) => {
  if (!isPlaying) {
    return null;
  }

  return (
    <MusicNotesWrapper>
      <div className="music-notes-wrapper">
        <div className="note-1">&#9835; &#127926;</div>
        <div className="note-2">&#128251;</div>
        <div className="note-3">&#9839; &#9834;</div>
        <div className="note-4">&#127932;</div>
      </div>
    </MusicNotesWrapper>
  );
};
