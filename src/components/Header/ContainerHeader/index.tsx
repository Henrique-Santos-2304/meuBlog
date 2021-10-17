import { Container, Flex, useDisclosure } from "@chakra-ui/react";
import ButtonMenu from "../ButtonMenu";
import Menu from "components/Menu";
import Logo from "../Logo";

const ContainerHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container
      maxW="full"
      height="14vh"
      zIndex="10"
      p="0"
      bgGradient="linear(to-l,#00bf72 ,#008793 ,#004d7a , #051937)"
    >
      <Container p="0" maxW="container.md" direction="row">
        <Flex
          w="100%"
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
