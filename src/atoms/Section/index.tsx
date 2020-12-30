import { FC, ReactNode } from "react";
import SC from "./styles";

type Props = {
  children: ReactNode;
  bgColor?: string;
};

const Section: FC<Props> = ({ children, bgColor }) => {
  return (
    <SC.Wrapper bgColor={bgColor}>
      <SC.Content>{children}</SC.Content>
    </SC.Wrapper>
  );
};

export default Section;
