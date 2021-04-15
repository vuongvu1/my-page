import { useState, useCallback, useEffect } from "react";
import { Container, Box, Score } from "./styles";

enum Direction {
  UP,
  RIGHT,
  DOWN,
  LEFT,
}

const cordToIndex = ({ x, y }: { x: number; y: number }) =>
  (y - 1) * 10 + (x - 1);

export default function App() {
  const [food, setFood] = useState({
    x: Math.floor(Math.random() * 10) + 1,
    y: Math.floor(Math.random() * 10) + 1,
  });
  const [snake, setSnake] = useState([
    { x: 1, y: 5 },
    { x: 2, y: 5 },
    { x: 3, y: 5 },
  ]);
  const [dir, setDir] = useState<Direction>(Direction.RIGHT);
  const [isLost, setIsLost] = useState(false);
  const [score, setScore] = useState(0);

  const run = useCallback((direction, foodPos) => {
    setSnake((currentSnake) => {
      const head = currentSnake[currentSnake.length - 1];
      let newHead = head;

      switch (direction) {
        case Direction.UP:
          newHead = { ...head, y: head.y === 1 ? 10 : head.y - 1 };
          break;
        case Direction.DOWN:
          newHead = { ...head, y: head.y === 10 ? 1 : head.y + 1 };
          break;
        case Direction.RIGHT:
          newHead = { ...head, x: head.x === 10 ? 1 : head.x + 1 };
          break;
        case Direction.LEFT:
          newHead = { ...head, x: head.x === 1 ? 10 : head.x - 1 };
          break;
        default:
          break;
      }

      if (cordToIndex(newHead) === cordToIndex(foodPos)) {
        const newX = Math.floor(Math.random() * 10) + 1;
        const newY = Math.floor(Math.random() * 10) + 1;
        setFood({ x: newX, y: newY });
        setScore((current) => current + 5);
        return currentSnake.concat(newHead);
      }

      const isEatingYourself = currentSnake.some(
        (part) => cordToIndex(part) === cordToIndex(newHead)
      );

      if (isEatingYourself) {
        setIsLost(true);
        return currentSnake;
      }

      const [, ...newSnake] = currentSnake;
      return newSnake.concat(newHead);
    });
  }, []);

  const reset = useCallback(() => {
    setFood({
      x: Math.floor(Math.random() * 10) + 1,
      y: Math.floor(Math.random() * 10) + 1,
    });
    setSnake([
      { x: 1, y: 5 },
      { x: 2, y: 5 },
      { x: 3, y: 5 },
    ]);
    setDir(Direction.RIGHT);
    setIsLost(false);
    setScore(0);
  }, []);

  useEffect(() => {
    const intervalRef = setInterval(() => run(dir, food), 300);
    if (isLost) clearInterval(intervalRef);
    return () => clearInterval(intervalRef);
  }, [run, dir, food, isLost]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      setDir((dir) => {
        let newDir = dir;
        switch (event.code) {
          case "ArrowRight":
            if (dir !== Direction.RIGHT && dir !== Direction.LEFT) {
              newDir = Direction.RIGHT;
            }
            break;
          case "ArrowLeft":
            if (dir !== Direction.RIGHT && dir !== Direction.LEFT) {
              newDir = Direction.LEFT;
            }
            break;
          case "ArrowUp":
            if (dir !== Direction.UP && dir !== Direction.DOWN) {
              newDir = Direction.UP;
            }
            break;
          case "ArrowDown":
            if (dir !== Direction.UP && dir !== Direction.DOWN) {
              newDir = Direction.DOWN;
            }
            break;
          default:
            break;
        }
        return newDir;
      });
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Container>
      {[...new Array(100)].map((_, index) => (
        <Box
          key={index}
          isActive={snake.map(cordToIndex).includes(index)}
          isFood={cordToIndex(food) === index}
        />
      ))}
      <Score>
        {isLost ? `YOU LOSE!(${score})` : `Score: ${score}`}{" "}
        {isLost && <button onClick={reset}>Play Again?</button>}
      </Score>
    </Container>
  );
}
