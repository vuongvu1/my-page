import { FC, PropsWithChildren } from "react";
import SC from "./styles";

const Body: FC<PropsWithChildren> = ({ children }) => {
  return <SC.Wrapper>{children}</SC.Wrapper>;
};

export default Body;
