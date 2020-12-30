import { FC } from "react";
import SC from "./styles";

export type TextType = "h1" | "h2" | "h3" | "body";

type Props = {
  type?: TextType;
};

const Text: FC<Props> = ({ type, children }) => {
  return (
    <SC.Text as={type === "body" ? "p" : type} type={type}>
      {children}
    </SC.Text>
  );
};

export default Text;
