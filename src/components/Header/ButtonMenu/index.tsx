import { Button } from "@chakra-ui/react";
import { DragHandleIcon } from "@chakra-ui/icons";

type ButtonProps = { onOpen?: () => void };

const ButtonMenu = ({ onOpen }: ButtonProps) => (
  <Button
    aria-label="Botão para abrir um menu de opções"
    title="Abra o Menu"
    onClick={onOpen}
    padding="2.1rem 1rem"
    mr="10px"
    bg="transparent"
    _hover={{ color: "white.300" }}
    _focus={{ border: "none" }}
    rounded="full"
  >
    <DragHandleIcon
      transition="all .5s linear"
      color="gray.100"
      width="22px"
      height="22px"
      _hover={{ color: "blackAlpha.800" }}
    />
  </Button>
);

export default ButtonMenu;
