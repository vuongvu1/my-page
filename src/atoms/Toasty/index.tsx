import React from "react";

type Props = {
  children: React.ReactNode;
  delay?: string;
  style?: React.CSSProperties;
};

function Toasty({ children, delay = "0", ...restProps }: Props) {
  const [isShown, setIsShown] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsShown(entry.isIntersecting);
    });
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return (
    <div ref={ref} {...restProps}>
      <div
        style={{
          opacity: isShown ? 1 : 0,
          transition: "opacity 800ms",
          transitionDelay: delay,
          height: "inherit",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Toasty;
