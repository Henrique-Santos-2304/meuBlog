import SlideSkilss from "components/SlideSkilss";
import Head from "next/head";
import { Container, Flex } from "@chakra-ui/react";
import Headings from "components/Headings";

const Skilss = () => (
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
        <Container maxW={["container.sm", "container.md"]} h="100%">
          <Headings
            msg={"Habilidades"}
            color={"orange"}
            margins="-1rem auto 2rem"
            fontSize="2.4rem"
            padding="1.2rem"
          />
          <SlideSkilss />
        </Container>
      </Flex>
    </Container>
  </>
);

export default Skilss;
