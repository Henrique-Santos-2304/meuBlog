import { Container, Flex, useDisclosure } from "@chakra-ui/react";
import ButtonMenu from "../ButtonMenu";
import Menu from "components/Menu";
import Logo from "../Logo";

const ContainerHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container
      position="fixed"
      top="0"
      left="0"
      maxW="full"
      p="0"
      bgGradient="linear(to-l,#a8eb12 ,#00bf72 ,#008793 ,#004d7a 45%, #051937)"
    >
      <Container
        p="0"
        maxW="container.md"
        direction="row"
        centerContent
        height="8rem"
      >
        <Flex
          w="100%"
          h="100%"
          alignItems="center"
          px="2rem"
          justifyContent="space-between"
        >
          <Logo />
          <ButtonMenu onOpen={onOpen} />

          <Menu onClose={onClose} isOpen={isOpen} />
        </Flex>
      </Container>
    </Container>
  );
};
export default ContainerHeader;
