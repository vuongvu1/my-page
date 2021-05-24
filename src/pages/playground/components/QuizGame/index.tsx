import { FC, useState } from "react";
import { Text } from "atoms";
import SC from "./styles";
import { getReward } from "./utils";

const answers = [
  {
    letter: "A",
    content: "This is the answer 1",
    isCorrect: false,
  },
  {
    letter: "B",
    content: "This is the answer 2",
    isCorrect: false,
  },
  {
    letter: "C",
    content: "This is the answer 3",
    isCorrect: true,
  },
  {
    letter: "D",
    content: "This is the answer 4",
    isCorrect: false,
  },
];

const quizes = [
  {
    no: 1,
    title: "question 1 question 1 question 1 question 1 question 1 ",
    answers,
  },
  {
    no: 2,
    title: "question 2 question 2 question 2 question 2 question 2 ",
    answers,
  },
];

const Title: FC = ({ children }) => {
  return (
    <SC.Title>
      <div></div>
      <div>{children}</div>
      <div></div>
    </SC.Title>
  );
};

// enum States {
//   UNSELECT,
//   SELECTED,
//   CORRECT,
//   INCORRECT,
// }

export default function QuizGame() {
  const [selected, setSelected] = useState<string>("");
  const [isShowResult, setShowResult] = useState(false);
  const [loadding, setLoading] = useState(false);

  const num = 0;
  const currentQuiz = quizes[num];

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setShowResult(true);
      setLoading(false);
    }, 3000);
  };

  const reset = () => {
    setShowResult(false);
    setSelected("");
  };

  return (
    <SC.Wrapper>
      <SC.InfoBoard>
        <div>
          <strong>Reward:</strong> {getReward(num)}
        </div>
        <div>
          <strong>Question:</strong> {num + 1}/15
        </div>
        <div>
          <strong>Updated:</strong> {new Date().toUTCString()}
        </div>
      </SC.InfoBoard>
      <Text>Quiz {currentQuiz.no}:</Text>
      <Title>{currentQuiz.title}</Title>
      {currentQuiz.answers.map(({ content, letter, isCorrect }, index) => (
        <SC.Answer
          isShowResult={isCorrect && isShowResult}
          isCorrect={selected === letter && isCorrect}
          isSelected={selected === letter}
          key={letter}
          onClick={() => setSelected(letter)}
        >
          <div />
          <div>
            <SC.AnswerLetter>{letter}:</SC.AnswerLetter> {content}
          </div>
          <div />
        </SC.Answer>
      ))}
      <SC.ConfirmWrapper isDisabled={!selected || loadding}>
        <button onClick={handleConfirm} disabled={!selected || loadding}>
          Confirm
        </button>
      </SC.ConfirmWrapper>
      <button onClick={reset}>Reset</button>
    </SC.Wrapper>
  );
}
