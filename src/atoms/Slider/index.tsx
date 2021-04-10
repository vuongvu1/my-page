import { FC, useState } from "react";
import SC from "./styles";

type Props = {
  content: string[];
};

const Slider: FC<Props> = ({ content }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const increase = () =>
    imgIndex === content.length - 1
      ? setImgIndex(0)
      : setImgIndex(imgIndex + 1);

  const decrease = () =>
    imgIndex === 0
      ? setImgIndex(content.length - 1)
      : setImgIndex(imgIndex - 1);

  return (
    <SC.Wrapper>
      {content.map((img, index) => (
        <SC.Image
          key={index}
          src={img}
          alt="project"
          visible={index === imgIndex}
        />
      ))}
      <SC.Button left onClick={decrease}>
        &laquo;
      </SC.Button>
      <SC.Button right onClick={increase}>
        &raquo;
      </SC.Button>
    </SC.Wrapper>
  );
};

export default Slider;
