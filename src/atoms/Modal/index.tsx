import { FC, PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import { Close as CloseIcon } from "assets/icons";
import SC from "./styles";

const modalRoot = document.getElementById("modal");
const bodyElement = document.getElementsByTagName("body")[0];

type Props = {
  visible: boolean;
  onClose: () => void;
};

const Modal: FC<PropsWithChildren<Props>> = ({
  visible,
  onClose,
  children,
}) => {
  useEffect(() => {
    if (visible) {
      bodyElement.style.overflow = "hidden";
    } else {
      bodyElement.style.overflow = "auto";
    }
  }, [visible]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [onClose]);

  if (!visible || !modalRoot) return null;

  return createPortal(
    <SC.Background>
      <SC.Wrapper>
        <SC.CloseIconWrapper onClick={onClose}>
          <CloseIcon fill="white" />
        </SC.CloseIconWrapper>
        {children}
      </SC.Wrapper>
    </SC.Background>,
    modalRoot,
  );
};

export default Modal;
