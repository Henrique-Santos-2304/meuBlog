/* eslint-disable @next/next/no-img-element */
import { Container, Flex } from "@chakra-ui/react";
import BoxMain from "components/BoxMain";
import IconsContact from "components/IconsContact";
import ImageUserMain from "components/ImageUserMain";

const Main = () => {
  return (
    <Container
      minH="82vh"
      maxW="full"
      bgGradient="linear(to-l,#00bf72 ,#008793 ,#004d7a , #051937)"
    >
      <Container maxW="container.lg" px={["1rem", null, "5rem"]} h="82vh">
        <Flex
          align="center"
          justify={["center", null, "space-between"]}
          w="100%"
          h="100%"
          direction={["column", null, "row"]}
        >
          <BoxMain />
          <ImageUserMain />
          <IconsContact />
        </Flex>
      </Container>
    </Container>
  );
};

export default Main;
