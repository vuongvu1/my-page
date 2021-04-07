import { FC } from "react";
import SC from "./styles";

type Props = {
  href?: string;
  color?: string;
  target?: string;
  onClick?: () => void;
};

const Link: FC<Props> = ({ href, color, onClick, target, children }) => {
  return (
    <SC.Link href={href} color={color} target={target} onClick={onClick}>
      {children}
    </SC.Link>
  );
};

export default Link;
