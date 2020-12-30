import { FC } from "react";
import SC from "./styles";

type Props = {
  src: string;
  alt?: string;
  type?: 1 | 2;
};

const Image: FC<Props> = ({ src, alt, type = 1 }) => {
  return (
    <SC.Wrapper>
      <SC.Border type={type}>
        <img src={src} alt={alt || "image"} />
      </SC.Border>
    </SC.Wrapper>
  );
};

export default Image;
