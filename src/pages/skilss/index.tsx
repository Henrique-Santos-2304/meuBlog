import SlideSkilss from "components/PageSkills/SlideSkilss";
import Head from "next/head";
import { Container, Flex } from "@chakra-ui/react";
import Headings from "components/globalComponents/Headings";
import { initializeApollo } from "utils/apollo";
import { GET_FOOTER } from "graphql/queries/Footer";

const Skilss = () => (
  <>
    <Head>
      <title>Minha Habilidade, Portfólion Henrique</title>
      <link rel="shortcut icon" href="/img/hero-illustration.svg" />
      <link rel="apple-touch-icon" href="/img/hero-illustration.svg" />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="description"
        content="Página destinada a destacar minhas habilidades e
        conhecimentos sobre Desenvolvimento e Programação"
      />
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
      minH="81vh"
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
      <Container
        minH="5vh"
        maxW="full"
        bgGradient="linear(to-l,#00bf72 ,#008793 ,#004d7a , #051937)"
      ></Container>
    </Container>
  </>
);

export default Skilss;

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GET_FOOTER,
  });

  return {
    props: {
      data,
      revalidate: 60,
    },
  };
};
