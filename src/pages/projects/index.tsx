/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { initializeApollo } from "utils/apollo";
import { GET_PROJECTS } from "graphql/queries/Projects";

import Slides from "components/Slides";
import Headings from "components/Headings";
import {
  cardSlidesProps,
  metaDescriptionProps,
  queryProjectsPage,
} from "graphql/typesFinal/queryProjects";

type props = {
  title: string;
  cardsSlides: cardSlidesProps[];
  metaDescription: metaDescriptionProps;
};

export default function SectionProject({
  title,
  cardsSlides,
  metaDescription,
}: props) {
  return (
    <>
      <Head>
        <title>{metaDescription.titlePage}</title>
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
            maxW="container.lg"
            h="100%"
            p={[" 0 0.4rem", null, "0.4rem", "0 6rem"]}
          >
            <Headings
              msg={title}
              color={"orange"}
              margins={[
                "-1rem auto 2rem",
                "-1rem auto 2rem",
                "-2rem auto 2rem",
              ]}
              fontSize="2.6rem"
              padding="1.2rem"
            />
            <Slides cardsSlides={cardsSlides} />
          </Container>
        </Flex>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const {
    data: { projectsPreview },
  } = await apolloClient.query<queryProjectsPage>({
    query: GET_PROJECTS,
  });
  return {
    props: {
      title: projectsPreview.sectionProjectPreview.title,
      cardsSlides: projectsPreview.cardSlides,
      metaDescription: projectsPreview.metaDescription,
      initialApolloState: apolloClient.cache.extract(),
      revalidate: 60,
    },
  };
};
