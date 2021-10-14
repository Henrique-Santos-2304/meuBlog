import { Container, Flex } from "@chakra-ui/react";
import FormEmail from "components/FormEmail";

const SectionProject = () => (
  <Container
    id="project"
    minH="82vh"
    maxW="full"
    bgGradient="linear(to-l,#00bf72 ,#008793 ,#004d7a , #051937)"
  >
    <Flex align="center" justify="center">
      <FormEmail />
    </Flex>
  </Container>
);

export default SectionProject;
