import {
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
} from "@chakra-ui/react";
import FormEmail from "components/FormsComponents/FormEmail";
type ModalType = {
  onClose: () => void;
  isOpen: boolean;
};
const ModalForm = ({ onClose, isOpen }: ModalType) => {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      size="2xl"
      isCentered
      motionPreset="slideInRight"
    >
      <ModalOverlay />
      <ModalContent
        bgGradient="linear(to-l,#00bf72 ,#008793 ,#004d7a , #051937)"
        borderRadius="2rem"
        boxShadow="0 0 20px gray"
        transform="perspective(-40px)"
      >
        <ModalCloseButton m="2rem" size="lg" color="orange" />
        <ModalBody>
          <FormEmail />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalForm;
