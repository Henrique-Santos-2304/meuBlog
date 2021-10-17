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
        h="80vh"
        maxW="full"
        bgGradient="linear(to-l,#00bf72 ,#008793 ,#004d7a , #051937)"
      >
        <Flex centerContent>
          <Container
            maxW="container.md"
            h="100%"
            p={[" 0 0.4rem", null, "0.4rem", "0 6rem"]}
          >
            <Headings
              msg={"Meus projetos"}
              color={"orange"}
              margins="0 auto 3rem"
              fontSize="2.6rem"
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
