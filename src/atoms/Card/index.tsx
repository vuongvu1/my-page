import { FC } from "react";
import { useTheme } from "styled-components";
import { Text, Link } from "atoms";
import SC from "./styles";

type Props = {
  imgSrc: string;
  alt?: string;
  bgColor?: string;
  title: string;
  url?: string;
};

const Image: FC<Props> = ({ imgSrc, alt, bgColor, title, url, children }) => {
  const { palette } = useTheme();

  return (
    <SC.Wrapper bgColor={bgColor}>
      <img src={imgSrc} alt={alt || "image"} />
      <SC.Content>
        <Text type="h3">
          <Link href={url || "#"} target="_blank" color={palette.primary.main}>
            {title}
          </Link>
        </Text>
        <Text type="body">{children}</Text>
      </SC.Content>
    </SC.Wrapper>
  );
};

export default Image;
