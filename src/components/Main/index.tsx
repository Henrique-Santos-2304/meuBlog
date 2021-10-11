/* eslint-disable @next/next/no-img-element */
import { Container, Text } from "@chakra-ui/react";

const Main = () => {
  return (
    <Container
      height="90vh"
      maxW="full"
      bgGradient="linear(to-l,#a8eb12 ,#00bf72 ,#008793 ,#004d7a 45%, #051937)"
    >
      <Text textAlign="center" color="whiteAlpha.800" fontSize="6rem">
        Seção main
      </Text>
    </Container>
  );
};

export default Main;
