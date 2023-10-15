import { FC, PropsWithChildren, ReactNode } from "react";
import SC from "./styles";

type Props = {
  id?: string;
  children: ReactNode;
  bgColor?: string;
  bgImage?: string;
};

const Section: FC<PropsWithChildren<Props>> = ({
  children,
  bgColor,
  bgImage,
  id,
}) => {
  return (
    <SC.Wrapper id={id} bgImage={bgImage} bgColor={bgColor}>
      <SC.Content>{children}</SC.Content>
    </SC.Wrapper>
  );
};

export default Section;
