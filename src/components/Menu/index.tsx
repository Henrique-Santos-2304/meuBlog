import {
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";

import MenuLinks from "./MenuLink";

type menuIsOpeCloseProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Menu = ({ isOpen, onClose }: menuIsOpeCloseProps) => {
  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} size="lg">
        <DrawerOverlay />
        <DrawerContent
          transition="all .4s linear"
          aria-label="menu de navegação aberto ou fechado"
          color="gray.100"
          bg="blackAlpha.800"
          border="0.3rem solid orange"
          borderRight="0"
          borderTopLeftRadius="2rem"
          borderBottomLeftRadius="2rem"
          my="10vh"
        >
          <DrawerCloseButton
            size="lg"
            p="1rem"
            title="Feche o Menu"
            aria-label="Botão para fechar um menu"
            color="red"
            rounded="full"
            m="1.2rem"
            _focus={{ border: "none" }}
          />

          <DrawerBody as="nav">
            <MenuLinks onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Menu;
