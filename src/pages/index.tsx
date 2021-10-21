import { Container, Flex } from "@chakra-ui/react";
import Head from "next/head";

import { initializeApollo } from "utils/apollo";
import { GET_HOME } from "graphql/queries/Home";

import BoxMain from "components/BoxMain";
import ImageUserMain from "components/ImageUserMain";
import { GetStaticProps } from "next";

import {
  queryHome,
  queryHome_home_userImage,
  queryHome_home_boxMain,
  queryHome_home_metaTagsIcons,
} from "graphql/generated/queryHome";

type props = {
  boxMain: queryHome_home_boxMain;
  imageUser: queryHome_home_userImage;
  metaTagsIcons: queryHome_home_metaTagsIcons;
};

const Home = ({ boxMain, imageUser, metaTagsIcons }: props) => {
  return (
    <>
      <Head>
        <title>{metaTagsIcons.titlePage}</title>
        <link rel="shortcut icon" href={metaTagsIcons.iconPage[0].url} />
        <link rel="apple-touch-icon" href={metaTagsIcons.iconPage[0].url} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content={metaTagsIcons.titlePage} />
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
            <BoxMain data={boxMain} />
            <ImageUserMain data={imageUser} links={boxMain} />
          </Flex>
        </Container>
      </Container>
    </>
  );
};

export default Home;
export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<queryHome>({
    query: GET_HOME,
  });
  return {
    props: {
      metaTagsIcons: data.home.metaTagsIcons,
      boxMain: data.home.boxMain,
      imageUser: data.home.userImage,
      initialApolloState: apolloClient.cache.extract(),
      revalidate: 60,
    },
  };
};
