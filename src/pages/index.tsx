import * as S from "styles/home";
import Head from "next/head";

import { initializeApollo } from "utils/apollo";
import { GET_HOME } from "graphql/queries/Home";

import BoxMain from "components/PageHome/BoxMain";
import ImageUserMain from "components/PageHome/ImageUserMain";
import Container from "components/globalComponents/Container";
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
      <Container asHeight="full">
        <S.Wrapper aria-label="Página Inicial com apresentação de um desenvolvedor Web">
          <BoxMain data={boxMain} />
          <ImageUserMain data={imageUser} links={boxMain} />
        </S.Wrapper>
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
