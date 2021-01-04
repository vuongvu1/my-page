import { FC } from "react";
import { useTheme } from "styled-components";
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
  const { palette } = useTheme();
  return (
    <SC.Wrapper index={index} isFirst={isFirst} isLast={isLast}>
      <SC.Index>{index}</SC.Index>
      <Text type="h3" color={palette.primary.contrastText}>
        {title}
      </Text>
      <Text type="body" color={palette.primary.contrastText}>
        {description}
      </Text>
    </SC.Wrapper>
  );
};

export default ProgressSegment;
