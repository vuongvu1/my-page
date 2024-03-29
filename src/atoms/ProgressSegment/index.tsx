import { FC, PropsWithChildren, ReactNode } from "react";
import { useTheme } from "styled-components";
import { Text } from "atoms";
import SC from "./styles";

type Props = {
  title: string;
  description: ReactNode;
  index: number;
  isFirst?: boolean;
  isLast?: boolean;
};

const ProgressSegment: FC<PropsWithChildren<Props>> = ({
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
