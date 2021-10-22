import {
  Button,
  Flex,
  Link,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { modalProps } from "./modalTypes";

export const ModalCardBox = ({
  onClose,
  isOpen,
  subDescription,
  title,
  url,
}: modalProps) => {
  return (
    <Modal onClose={onClose} size="2xl" isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent bg="blackAlpha.700" p="3rem" borderRadius="2rem">
        <ModalHeader color="gray.100" fontSize="2.4rem" textAlign="center">
          {title}
        </ModalHeader>
        <ModalCloseButton color="red.500" _focus={{ border: "0" }} m="1rem" />
        <ModalBody color="gray.100" fontSize="2.2rem">
          {subDescription}
        </ModalBody>
        <ModalFooter>
          <Link href={url} isExternal>
            <Button color="blackAlpha.800">
              <Flex align="center" justify="center">
                <FaGithub />
                <Text ml="0.9rem" color="gray.800">
                  Ver Código
                </Text>
              </Flex>
            </Button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
