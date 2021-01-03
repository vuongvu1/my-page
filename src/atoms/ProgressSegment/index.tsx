import { FC } from "react";
import { Text } from "atoms";
import SC from "./styles";

type Props = {
  title: string;
  description: string;
  index: number;
  isFirst?: boolean;
  isLast?: boolean;
};

const ProgressSegment: FC<Props> = ({
  title,
  description,
  index,
  isFirst,
  isLast,
}) => {
  return (
    <SC.Wrapper index={index} isFirst={isFirst} isLast={isLast}>
      <SC.Index>{index}</SC.Index>
      <Text type="h3">{title}</Text>
      <Text type="body">{description}</Text>
    </SC.Wrapper>
  );
};

export default ProgressSegment;
