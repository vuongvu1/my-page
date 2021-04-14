import { useRef, useCallback } from "react";

export default function DrawBoard() {
  const canvasRef = useRef();
  const isDrawing = useRef<boolean>();

  const draw = useCallback((canvas, event) => {
    if (isDrawing.current) {
      const rect = canvas.getBoundingClientRect();
      var ctx = canvas.getContext("2d");

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      ctx.fillRect(x, y, 4, 4);
    }
  }, []);

  const assignRef = useCallback(
    (node) => {
      if (node) {
        node.addEventListener("mousedown", () => {
          isDrawing.current = true;
        });
        node.addEventListener("mousemove", (event: MouseEvent) =>
          draw(node, event)
        );
        node.addEventListener("mouseup", (event: MouseEvent) => {
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
      <canvas
        ref={assignRef}
        width="600"
        height="600"
        style={{ border: "1px solid black" }}
      />
      <br />
      <button onClick={clear}>clear</button>
    </div>
  );
}
