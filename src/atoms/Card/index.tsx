import { FC, PropsWithChildren, useState } from "react";
import { useTheme } from "styled-components";
import { Text, Link, Modal, Slider } from "atoms";
import { Github } from "assets/icons";
import SC from "./styles";

type Props = {
  imgSrc: string;
  alt?: string;
  bgColor?: string;
  title: string;
  url?: string;
  modalContent?: string[];
  techStack: string[];
  githubUrl?: string;
};

const Image: FC<PropsWithChildren<Props>> = ({
  imgSrc,
  alt,
  bgColor,
  title,
  url,
  modalContent,
  techStack,
  githubUrl,
  children,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { palette } = useTheme();

  const openModal = (e: MouseEvent) => {
    e.preventDefault();
    setModalVisible(true);
  };
  const closeModal = () => setModalVisible(false);

  return (
    <SC.Wrapper bgColor={bgColor}>
      <img loading="lazy" src={imgSrc} alt={alt || title} />
      <SC.Content>
        <Text type="h3">
          <Link
            onClick={!url ? openModal : undefined}
            href={url || ""}
            target="_blank"
            color={palette.primary.main}
          >
            {title}
          </Link>
        </Text>
        {techStack.join(", ")}
        {githubUrl && (
          <>
            {" "}
            <Link href={githubUrl} target="_blank">
              <Github />
            </Link>
          </>
        )}
        <div>___</div>
        <Text type="body">{children}</Text>
      </SC.Content>
      {modalContent && (
        <Modal visible={modalVisible} onClose={closeModal}>
          <Slider content={modalContent} />
        </Modal>
      )}
    </SC.Wrapper>
  );
};

export default Image;
