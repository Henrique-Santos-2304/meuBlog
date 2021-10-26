import AboutDescription from "components/AboutDescription";
import Head from "next/head";
import SectionHome from "components/Home";
import SectionProject from "components/SectionProject/MainProject";

import { about } from "utils/descriptionAbout/about";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio de Henrique</title>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/defnibbpl/image/upload/v1635273619/a61237_orkfde.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://res.cloudinary.com/defnibbpl/image/upload/v1635273619/a61237_orkfde.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Porfólio de Desenvolvedor Web, com amostra de projetos, skill, conhecimentos, descrição sobre o Desenvolvedor"
        />
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

      <SectionHome />
      <AboutDescription {...about.aboutPersonal} mt="-7rem" />
      <SectionProject />
      <AboutDescription {...about.aboutProjects} mt="2rem" />
    </>
  );
}
