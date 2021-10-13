/* eslint-disable @next/next/link-passhref */
import { HStack, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import * as S from "./styles";

const IconsContact = () => (
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
      <MdEmail
        id="email"
        title="henrique.multitech@gmail.com"
        aria-label="Envio de email via site"
      />
    </HStack>
  </S.Wrapper>
);

export default IconsContact;
