import { ReactChild } from "hoist-non-react-statics/node_modules/@types/react";
import { useState, FC } from "react";
import SC from "./styles";

type Props = {
  data: Array<{ title: string; content: ReactChild }>;
};

const Accordion: FC<Props> = ({ data }) => {
  const [active, setActive] = useState<number>(-1);

  const handleOnClick = (index: number) => {
    if (active === index) setActive(-1);
    else setActive(index);
  };

  return (
    <SC.Wrapper>
      {data.map(({ title, content }, index) => (
        <SC.Item key={title}>
          <SC.Title onClick={() => handleOnClick(index)}>{title}</SC.Title>
          {active === index && <SC.Content>{content}</SC.Content>}
        </SC.Item>
      ))}
    </SC.Wrapper>
  );
};

export default Accordion;
