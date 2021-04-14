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
  const [color, setColor] = useState(Colors.GREEN);
  const canvasRef = useRef();
  const isDrawing = useRef<boolean>();

  const draw = useCallback(
    (canvas, event) => {
      if (isDrawing.current) {
        const rect = canvas.getBoundingClientRect();
        var ctx = canvas.getContext("2d");

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        ctx.fillStyle = color;
        ctx.fillRect(x, y, 4, 4);
      }
    },
    [color]
  );

  const assignRef = useCallback(
    (node) => {
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
      <SC.Canvas ref={assignRef} width="600" height="600" />
      <SC.ButtonWrapper>
        <button onClick={clear}>clear</button>
        {Object.values(Colors).map((clr) => (
          <SC.Button
            key={clr}
            backgroundColor={clr}
            onClick={() => setColor(clr)}
          />
        ))}
      </SC.ButtonWrapper>
    </div>
  );
}
