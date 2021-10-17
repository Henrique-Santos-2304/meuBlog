import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import FormEmail from "components/FormEmail";

const Contact = () => {
  return (
    <Container
      maxW="full"
      h="80vh"
      bgGradient="linear(to-l,#00bf72 ,#008793 ,#004d7a , #051937)"
    >
      <Container maxW="container.md" centerContent>
        <Flex
          align="center"
          justify="center"
          w="100%"
          maxW="40rem"
          mt="-1rem"
          bg="blackAlpha.500"
          borderRadius="2rem"
        >
          <FormEmail />
        </Flex>
      </Container>
    </Container>
  );
};
export default Contact;
