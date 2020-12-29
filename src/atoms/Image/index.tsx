import { FC } from "react";
import SC from "./styles";

type Props = {
  src: string;
  alt?: string;
};

const Image: FC<Props> = ({ src, alt }) => {
  return (
    <SC.Wrapper>
      <SC.Border>
        <SC.Image src={src} alt={alt || "image"} />
      </SC.Border>
    </SC.Wrapper>
  );
};

export default Image;
