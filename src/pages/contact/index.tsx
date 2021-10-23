import * as S from "./styles";
import { FaWhatsapp } from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";
import { Container, Flex, Link as ChakraLink } from "@chakra-ui/react";
import FormEmail from "components/FormsComponents/FormEmail";
import Headings from "components/globalComponents/Headings";

const SectionContact = () => (
  <>
    <Head>
      <title>Entre em Contato </title>
      <link rel="shortcut icon" href="/img/hero-illustration.svg" />
      <link rel="apple-touch-icon" href="/img/hero-illustration.svg" />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="description"
        content="Entre em contato comigo a fim de realizar um
        orçamento ou efetuar uma propsta de trabalho de Desenvolvimento de
         Sites, Aplicativos, etc... "
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
      maxW="full"
      minH="81vh"
      bgGradient="linear(to-l,#00bf72 ,#008793 ,#004d7a , #051937)"
    >
      <Container maxW="container.md" centerContent>
        <Headings msg="Contato" margins="-2rem 0 3rem" />
        <Flex
          align="center"
          justify="center"
          w="100%"
          maxW="36rem"
          mt="-1rem"
          bg="blackAlpha.500"
          borderRadius="2rem"
          position="relative"
        >
          <FormEmail />
          <S.Flex>
            <Link
              href="https://api.whatsapp.com/send?1=pt_br&phone=5511966365190"
              passHref
            >
              <ChakraLink
                isExternal
                aria-label="Envio de mensagem no Whatsapp"
                borderRadius="50%"
                _focus={{ border: "0" }}
              >
                <FaWhatsapp title="11-96636.5190" />
              </ChakraLink>
            </Link>
          </S.Flex>
        </Flex>
      </Container>
    </Container>
  </>
);

export default SectionContact;
