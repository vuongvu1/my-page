import { FC, PropsWithChildren } from "react";
import SC from "./styles";

type Props = {
  href?: string;
  color?: string;
  target?: string;
  onClick?: () => void;
};

const Link: FC<PropsWithChildren<Props>> = ({
  href,
  color,
  onClick,
  target,
  children,
}) => {
  return (
    <SC.Link href={href} color={color} target={target} onClick={onClick}>
      {children}
    </SC.Link>
  );
};

export default Link;
