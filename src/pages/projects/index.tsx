import { Container, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Slides from "components/Slides";
import Headings from "components/Headings";

const SectionProject = () => {
  return (
    <>
      <Head>
        <title>Projetos Henrique dos Santos</title>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Container
        minH="82vh"
        maxW="full"
        bgGradient="linear(to-l,#00bf72 ,#008793 ,#004d7a , #051937)"
      >
        <Flex centerContent>
          <Container maxW="container.lg" h="100%">
            <Headings
              msg={"Meus projetos"}
              color={"orange"}
              margins="-2rem auto 4rem"
              fontSize="3.2rem"
              padding="1.2rem"
            />
            <Slides />
          </Container>
        </Flex>
      </Container>
    </>
  );
};

export default SectionProject;
