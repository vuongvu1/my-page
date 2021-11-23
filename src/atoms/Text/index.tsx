import { FC } from "react";
import SC from "./styles";

export type TextType = "h1" | "h2" | "h3" | "body";

type Props = {
  type?: TextType;
  color?: string;
  bold?: boolean;
};

const Text: FC<Props> = ({ type, color, bold, children }) => {
  return (
    <SC.Text
      as={type === "body" ? "p" : type}
      type={type}
      color={color}
      bold={bold}
    >
      {children}
    </SC.Text>
  );
};

export default Text;
