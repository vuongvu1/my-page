import { FC } from "react";
import SC from "./styles";

type Props = {
  href: string;
  color?: string;
  target?: string;
};

const Link: FC<Props> = ({ href, color, target, children }) => {
  return (
    <SC.Link href={href} color={color} target={target}>
      {children}
    </SC.Link>
  );
};

export default Link;
