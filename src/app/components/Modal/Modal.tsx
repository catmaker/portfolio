import {
  CSSProperties,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import Modal from "react-modal";

interface MyModalProps {
  trigger: ReactNode;
  content: (closeModal: Dispatch<SetStateAction<boolean>>) => ReactNode;
  modalStyle?: CSSProperties; // modalStyle을 props로 받습니다.
}

const MyModal = ({ trigger, content, modalStyle }: MyModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div onClick={openModal}>{trigger}</div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="My Modal"
        style={{ content: modalStyle }} // 받은 modalStyle을 적용합니다.
      >
        {content(closeModal)}
      </Modal>
    </div>
  );
};

export default MyModal;
