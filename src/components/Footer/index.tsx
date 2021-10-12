import { Text, Container } from "@chakra-ui/react";

const Footer = () => (
  <Container
    maxW={["full", null, "container.md"]}
    height="4vh"
    bgGradient="linear(to-l,#00bf72 ,#008793 ,#004d7a , #051937)"
  >
    <Text color="gray.100" isTruncated textAlign="end" fontSize="2xl">
      Criado por Henrique dos Santos
    </Text>
  </Container>
);

export default Footer;
