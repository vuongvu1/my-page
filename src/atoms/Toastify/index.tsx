import React from "react";

type Props = {
  children: React.ReactNode;
  delay?: string;
  style?: React.CSSProperties;
};

function Toasty({ children, delay = "0", ...restProps }: Props) {
  const [isShown, setIsShown] = React.useState(false);

  const addObserve = React.useCallback((node: HTMLDivElement) => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsShown(entry.isIntersecting);
    });
    observer.observe(node);
  }, []);

  return (
    <div ref={addObserve} {...restProps}>
      <div
        style={{
          opacity: isShown ? 1 : 0,
          transition: "opacity 800ms",
          transitionDelay: delay,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Toasty;
