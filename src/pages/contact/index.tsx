import * as S from "./styles";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Container, Flex, Link as ChakraLink } from "@chakra-ui/react";
import FormEmail from "components/FormEmail";
import Headings from "components/Headings";

const SectionContact = () => (
  <>
    <Container
      maxW="full"
      h="80vh"
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
