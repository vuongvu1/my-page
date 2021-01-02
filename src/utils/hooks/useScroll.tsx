import { useState, useEffect } from "react";

type StateType = {
  lastScrollTop: number;
  bodyOffset: DOMRect;
  scrollY: number;
  scrollX: number;
  scrollDirection: "down" | "up" | "";
};

export const useScroll = () => {
  const [state, setState] = useState<StateType>({
    lastScrollTop: 0,
    bodyOffset: document.body.getBoundingClientRect(),
    scrollY: document.body.getBoundingClientRect().top,
    scrollX: document.body.getBoundingClientRect().left,
    scrollDirection: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setState((prevState) => {
        const prevLastScrollTop = prevState.lastScrollTop;
        const bodyOffset = document.body.getBoundingClientRect();

        return {
          bodyOffset,
          scrollY: -bodyOffset.top,
          scrollX: bodyOffset.left,
          scrollDirection: prevLastScrollTop > -bodyOffset.top ? "up" : "down",
          lastScrollTop: -bodyOffset.top,
        };
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    scrollY: state.scrollY,
    scrollX: state.scrollX,
    scrollDirection: state.scrollDirection,
  };
};

export default useScroll;
