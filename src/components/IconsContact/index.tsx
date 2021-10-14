/* eslint-disable @next/next/link-passhref */
import {
  HStack,
  Link as ChakraLink,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import * as S from "./styles";
import ModalForm from "components/ModalForm";

const IconsContact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <S.Wrapper>
      <HStack mt={["3rem", null, "2rem"]} spacing="1.8rem" mb="1rem">
        <Link href="https://github.com/Henrique-Santos-2304" passHref>
          <ChakraLink isExternal aria-label="Link Para meu Github">
            <FaGithub id="github" title="/Henrique-Santos-2304" />
          </ChakraLink>
        </Link>
        <Link href="https://www.linkedin.com/in/henriquewebdeveloper/" passHref>
          <ChakraLink isExternal aria-label="Link Para meu Linkedin">
            <TiSocialLinkedinCircular
              id="linkedin"
              title="in/henriquewebdeveloper/"
            />
          </ChakraLink>
        </Link>
        <Link
          href="https://api.whatsapp.com/send?1=pt_br&phone=5511966365190"
          passHref
        >
          <ChakraLink isExternal aria-label="Envio de mensagem no Whatsapp">
            <FaWhatsapp id="whatsapp" title="11-96636.5190" />
          </ChakraLink>
        </Link>
        <MdEmail
          id="email"
          title="henrique.multitech@gmail.com"
          aria-label="Envio de email via site"
          onClick={onOpen}
        />
      </HStack>
      {isOpen && (
        <Flex>
          <ModalForm onClose={onClose} isOpen={isOpen} />
        </Flex>
      )}
    </S.Wrapper>
  );
};

export default IconsContact;
