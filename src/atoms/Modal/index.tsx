import { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import { Close as CloseIcon } from "assets/icons";
import { useScreen } from "utils/hooks";
import SC from "./styles";

const modalRoot = document.getElementById("modal");
const bodyElement = document.getElementsByTagName("body")[0];

type Props = {
  visible: boolean;
  close: () => void;
};

const Modal: FC<Props> = ({ visible, close, children }) => {
  const { isLarge } = useScreen();

  useEffect(() => {
    if (visible) {
      bodyElement.style.overflow = "hidden";
      bodyElement.style.paddingRight = isLarge ? "16px" : "0";
    } else {
      bodyElement.style.overflow = "auto";
      bodyElement.style.paddingRight = "0";
    }
  }, [visible, isLarge]);

  if (!visible || !modalRoot) return null;

  return createPortal(
    <SC.Background>
      <SC.Wrapper>
        <SC.CloseWrapper onClick={close}>
          <CloseIcon fill="white" />
        </SC.CloseWrapper>
        {children}
      </SC.Wrapper>
    </SC.Background>,
    modalRoot
  );
};

export default Modal;
