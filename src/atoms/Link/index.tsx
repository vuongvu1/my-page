import { FC } from "react";
import SC from "./styles";

type Props = {
  href: string;
  color?: string;
};

const Link: FC<Props> = ({ href, color, children }) => {
  return (
    <SC.Link href={href} color={color}>
      {children}
    </SC.Link>
  );
};

export default Link;
