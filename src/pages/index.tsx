import { Container, Flex } from "@chakra-ui/react";
import Head from "next/head";
import BoxMain from "components/BoxMain";
import ImageUserMain from "components/ImageUserMain";

export default function Home() {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/hero-illustration.svg" />
        <link rel="apple-touch-icon" href="/img/hero-illustration.svg" />
        <link rel="manifest" href="/manifest.json" />
        <title>Portfólio de Henrique dos Santos</title>
        <meta
          name="description"
          content="Uma Págins de descrição sobre um desenvovledor FrontEnd,
          com contato e imagem de apresentação"
        />
      </Head>
      <Container
        as="section"
        maxW="full"
        bgGradient="linear(to-l,#00bf72 ,#008793 ,#004d7a , #051937)"
      >
        <Container maxW="container.lg" px="1rem" h="80vh">
          <Flex
            align="center"
            justify={["center", null, "space-around"]}
            w="100%"
            h="100%"
            direction={["column", null, "row"]}
            aria-label="Página Inicial com apresentação de um desenvolvedor Web"
          >
            <BoxMain />
            <ImageUserMain />
          </Flex>
        </Container>
      </Container>
    </>
  );
}
