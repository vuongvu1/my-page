import { FC, useState } from "react";
import { useTheme } from "styled-components";
import { Text, Link, Modal } from "atoms";
import SC from "./styles";

type Props = {
  imgSrc: string;
  alt?: string;
  bgColor?: string;
  title: string;
  url?: string;
  modalContent?: string[];
};

const Image: FC<Props> = ({
  imgSrc,
  alt,
  bgColor,
  title,
  url,
  modalContent,
  children,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { palette } = useTheme();

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <SC.Wrapper bgColor={bgColor}>
      <img src={imgSrc} alt={alt || title} />
      <SC.Content>
        <Text type="h3">
          <Link
            onClick={!url ? openModal : undefined}
            href={url}
            target="_blank"
            color={palette.primary.main}
          >
            {title}
          </Link>
        </Text>
        <Text type="body">{children}</Text>
      </SC.Content>
      {modalContent && (
        <Modal visible={modalVisible} close={closeModal}>
          some content
          {/* {modalContent.map((src) => (
            <img src={src} alt={alt || title} />
          ))} */}
        </Modal>
      )}
    </SC.Wrapper>
  );
};

export default Image;
