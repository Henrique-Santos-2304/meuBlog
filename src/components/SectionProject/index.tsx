import { Container, Text } from "@chakra-ui/react";

const SectionProject = () => (
  <Container
    id="project"
    height="90vh"
    maxW="full"
    bgGradient="linear(to-l,#a8eb12 ,#00bf72 ,#008793 ,#004d7a 45%, #051937)"
  >
    <Text color="whiteAlpha.900" textAlign="center" fontSize="6rem">
      {" "}
      Seção de Projetos{" "}
    </Text>
  </Container>
);

export default SectionProject;
