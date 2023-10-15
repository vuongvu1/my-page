import { useState, useRef, useCallback } from "react";
import SC from "./styles";

const Colors = {
  RED: "red",
  BLUE: "blue",
  GREEN: "green",
  YELLOW: "yellow",
  PINK: "pink",
};

export default function DrawBoard() {
  const [selectedColor, setColor] = useState(Colors.GREEN);
  const canvasRef = useRef<HTMLCanvasElement>();
  const isDrawing = useRef<boolean>();

  const draw = useCallback(
    (canvas: HTMLCanvasElement, event: MouseEvent) => {
      if (isDrawing.current) {
        const rect = canvas.getBoundingClientRect();
        const ctx = canvas.getContext("2d");

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (ctx) {
          ctx.fillStyle = selectedColor;
          ctx.fillRect(x, y, 4, 4);
        }
      }
    },
    [selectedColor]
  );

  const assignRef = useCallback(
    (node: HTMLCanvasElement) => {
      if (node) {
        node.addEventListener("mousedown", () => {
          isDrawing.current = true;
        });
        node.addEventListener("mousemove", (event: MouseEvent) =>
          draw(node, event)
        );
        node.addEventListener("mouseup", () => {
          isDrawing.current = false;
        });
        canvasRef.current = node;
      }
    },
    [draw]
  );

  const clear = () => {
    const canvas = canvasRef?.current;
    if (canvas) {
      // @ts-ignore
      const context = canvas.getContext("2d");
      // @ts-ignore
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div>
      <SC.Canvas ref={assignRef} width="400" height="400" />
      <SC.ButtonWrapper>
        <button onClick={clear}>clear</button>
        {Object.values(Colors).map((color) => (
          <SC.Button
            isActive={color === selectedColor}
            key={color}
            backgroundColor={color}
            onClick={() => setColor(color)}
          />
        ))}
      </SC.ButtonWrapper>
    </div>
  );
}
