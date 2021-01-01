import { FC } from "react";
import { Text } from "atoms";
import SC from "./styles";

type Props = {
  imgSrc: string;
  alt?: string;
  bgColor?: string;
  title: string;
  description: string;
};

const Image: FC<Props> = ({ imgSrc, alt, bgColor, title, description }) => {
  return (
    <SC.Wrapper bgColor={bgColor}>
      <img src={imgSrc} alt={alt || "image"} />
      <SC.Content>
        <Text type="h3">{title}</Text>
        <Text type="body">{description}</Text>
      </SC.Content>
    </SC.Wrapper>
  );
};

export default Image;
