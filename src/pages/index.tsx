import Head from "next/head";
import Header from "components/Header";
import MenuMobile from "components/globalComponents/MenuNav/MenuMobile";
import SectionHome from "components/Home";
import SectionProject from "components/SectionProject/MainProject";
import SectionSkilss from "components/SectionSkilss/MainSkilss";
import SectionContact from "components/SectionContact/MainContact";
import AboutDescription from "components/globalComponents/AboutDescription";
import GoToTop from "components/globalComponents/GoToTop";

import { GetStaticProps } from "next";
import { initializeApollo } from "utils/apollo";
import { Query_PAGE } from "graphql/queries/page";

import { dataPageProps, pageProps } from "graphql/typesQueries/types";

export default function Home({ data }: dataPageProps) {
  return (
    <>
      <Head>
        <title>{data.metas.title}</title>
        <link rel="shortcut icon" href={String(data.metas.iconImagePage)} />
        <link rel="apple-touch-icon" href={String(data.metas.iconImagePage)} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content={data.metas.metaDescription} />
        {/* Css React Slick */}
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

      <Header dataHeader={data.logoPage} />
      <MenuMobile menuNav={data.menuNav} />
      <SectionHome dataHome={data.home} />
      <AboutDescription {...data.descriptionHome} mt="-7rem" />
      <SectionProject />
      <AboutDescription {...data.descriptionProject} mt="2rem" />
      <SectionSkilss />
      <AboutDescription {...data.descriptionSkills} mt="3rem" />
      <SectionContact />
      <GoToTop />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<pageProps>({
    query: Query_PAGE,
  });
  console.log(data.portfolioWeb);
  return {
    props: {
      data: {
        metas: {
          metaDescription: data.portfolioWeb.metaDescription,
          title: data.portfolioWeb.title,
          iconImagePage: data.portfolioWeb.iconImagePage.url,
          iconPage: data.portfolioWeb.iconPage,
        },
        logoPage: data.portfolioWeb.logoPage,
        menuNav: data.portfolioWeb.menuNav,
        home: data.portfolioWeb.Home,
        descriptionHome: data.portfolioWeb.descriptionSection,
        descriptionProject: data.portfolioWeb.descriptionProject,
        descriptionSkills: data.portfolioWeb.descriptionSkill,
        projects: data.portfolioWeb.sectionProject,
        skilss: data.portfolioWeb.sectionSkills,
      },

      initialApolloState: apolloClient.cache.extract(),
    },
    // revalidate: 60*60*24
  };
};
