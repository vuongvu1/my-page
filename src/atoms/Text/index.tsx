import { FC } from "react";
import SC from "./styles";

export type TextType = "h1" | "h2" | "h3" | "body";

type Props = {
  type?: TextType;
  color?: string;
};

const Text: FC<Props> = ({ type, color, children }) => {
  return (
    <SC.Text as={type === "body" ? "p" : type} type={type} color={color}>
      {children}
    </SC.Text>
  );
};

export default Text;
