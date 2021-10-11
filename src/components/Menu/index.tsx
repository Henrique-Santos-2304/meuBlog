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
      <Drawer onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay />
        <DrawerContent
          transition="all .2s linear"
          aria-label="menu de navegação aberto ou fechado"
        >
          <DrawerCloseButton
            all="reset"
            title="Feche o Menu"
            aria-label="Botão para fechar um menu"
            transition="all .4s ease-in-out"
            color="red"
            rounded="full"
            mt="0.4rem"
            _focus={{ border: "none" }}
            _hover={{ fontSize: "1.6rem" }}
          />

          <DrawerBody>
            <MenuLinks />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Menu;
