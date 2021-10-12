import { Text, Container } from "@chakra-ui/react";

const Footer = () => (
  <Container
    maxW="full"
    height="4vh"
    bgGradient="linear(to-l,#00bf72 ,#008793 ,#004d7a , #051937)"
  >
    <Container>
      <Text
        color="gray.100"
        isTruncated
        textAlign="end"
        fontSize="2xl"
        maxW="container.md"
      >
        Criado por <b style={{ color: "yellow" }}>Henrique dos Santos</b>
      </Text>
    </Container>
  </Container>
);

export default Footer;
