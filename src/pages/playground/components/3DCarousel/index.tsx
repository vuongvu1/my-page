import { useState } from "react";
import "./styles.css";

// TODO: Refactor to use styled-component
const Carousel = () => {
  const [deg, setDeg] = useState(0);

  const goNext = () => rotate("next");
  const goPrev = () => rotate("prev");

  const rotate = (dir: "next" | "prev") => {
    const newDeg = dir === "next" ? deg - 60 : deg + 60;
    setDeg(newDeg);
    const carouselElement = document.getElementsByClassName(
      "carousel"
    )[0] as HTMLDivElement;
    carouselElement.style.transform = `rotateY(${newDeg}deg)`;
  };

  return (
    <>
      <div className="container">
        <div className="carousel">
          <div className="item a">A</div>
          <div className="item b">B</div>
          <div className="item c">C</div>
          <div className="item d">D</div>
          <div className="item e">E</div>
          <div className="item f">F</div>
        </div>
      </div>
      <div className="next" onClick={goNext}>
        Next
      </div>
      <div className="prev" onClick={goPrev}>
        Prev
      </div>
    </>
  );
};

export default Carousel;
