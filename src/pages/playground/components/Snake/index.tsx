import { useState, useCallback, useEffect } from "react";
import { Container, Box } from "./styles";

enum Direction {
  UP,
  RIGHT,
  DOWN,
  LEFT,
}

const cordToIndex = ({ x, y }: { x: number; y: number }) =>
  (y - 1) * 10 + (x - 1);

export default function App() {
  const [snake, setSnake] = useState([
    { x: 1, y: 5 },
    { x: 2, y: 5 },
    { x: 3, y: 5 },
  ]);
  const [dir, setDir] = useState<Direction>(Direction.RIGHT);

  const run = useCallback(() => {
    setSnake((currentSnake) => {
      const head = currentSnake[currentSnake.length - 1];
      let newHead = head;

      switch (dir) {
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

      const [, ...newSnake] = currentSnake;
      newSnake.push(newHead);
      return newSnake;
    });
  }, [dir]);

  useEffect(() => {
    const intervalRef = setInterval(() => run(), 300);
    return () => clearInterval(intervalRef);
  }, [run]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      setDir((dir) => {
        let newDir = Direction.RIGHT;
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
            newDir = Direction.RIGHT;
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
        <Box key={index} isActive={snake.map(cordToIndex).includes(index)} />
      ))}
    </Container>
  );
}
