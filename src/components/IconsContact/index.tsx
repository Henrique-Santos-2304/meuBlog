/* eslint-disable @next/next/link-passhref */
import { HStack, Link as ChakraLink, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import * as S from "./styles";
import ModalForm from "components/ModalForm";

const IconsContact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack as="ul" mt={["3rem", null, "2rem"]} spacing="1.8rem" mb="1rem">
        <S.Li>
          <Link href="https://github.com/Henrique-Santos-2304" passHref>
            <ChakraLink isExternal aria-label="Link Para meu Github">
              <FaGithub id="github" title="/Henrique-Santos-2304" />
            </ChakraLink>
          </Link>
        </S.Li>
        <S.Li>
          <Link
            href="https://www.linkedin.com/in/henriquewebdeveloper/"
            passHref
          >
            <ChakraLink isExternal aria-label="Link Para meu Linkedin">
              <TiSocialLinkedinCircular
                id="linkedin"
                title="in/henriquewebdeveloper/"
              />
            </ChakraLink>
          </Link>
        </S.Li>
        <S.Li>
          <Link
            href="https://api.whatsapp.com/send?1=pt_br&phone=5511966365190"
            passHref
          >
            <ChakraLink isExternal aria-label="Envio de mensagem no Whatsapp">
              <FaWhatsapp id="whatsapp" title="11-96636.5190" />
            </ChakraLink>
          </Link>
        </S.Li>
        <S.Li>
          <MdEmail
            id="email"
            title="henrique.multitech@gmail.com"
            aria-label="Envio de email via site"
            onClick={onOpen}
          />
        </S.Li>
      </HStack>

      <ModalForm onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default IconsContact;
