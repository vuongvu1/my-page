import { FC, ReactNode } from "react";
import SC from "./styles";

type Props = {
  children: ReactNode;
  bgColor?: string;
  bgImage?: string;
};

const Section: FC<Props> = ({ children, bgColor, bgImage }) => {
  return (
    <SC.Wrapper bgImage={bgImage} bgColor={bgColor}>
      <SC.Content>{children}</SC.Content>
    </SC.Wrapper>
  );
};

export default Section;
