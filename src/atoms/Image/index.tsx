import { FC, PropsWithChildren } from "react";
import SC from "./styles";

type Props = {
  src: string;
  alt?: string;
  type?: 1 | 2;
};

const Image: FC<PropsWithChildren<Props>> = ({ src, alt, type = 1 }) => {
  return (
    <SC.Wrapper>
      <SC.Border type={type}>
        <img loading="lazy" src={src} alt={alt || "image"} />
      </SC.Border>
    </SC.Wrapper>
  );
};

export default Image;
