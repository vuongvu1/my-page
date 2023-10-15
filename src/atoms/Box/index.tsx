import { FC, PropsWithChildren } from "react";
import { Text } from "atoms";
import SC from "./styles";

type Props = {
  title: string;
  items: Array<{ logo: string; name: string }>;
};

const Box: FC<PropsWithChildren<Props>> = ({ title, items }) => {
  return (
    <SC.Wrapper>
      <Text type="h3">{title}</Text>
      <SC.Body>
        {items.map(({ logo, name }) => (
          <SC.Item key={name}>
            <img loading="lazy" src={logo} alt={name} />
            <Text type="body">{name}</Text>
          </SC.Item>
        ))}
      </SC.Body>
    </SC.Wrapper>
  );
};

export default Box;
