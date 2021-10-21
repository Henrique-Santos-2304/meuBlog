/* eslint-disable @next/next/link-passhref */
import * as S from "./styles";
import { HStack, Link as ChakraLink, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";

import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdEmail } from "react-icons/md";

import {
  queryHome_home_boxMain_email,
  queryHome_home_boxMain_linksSocials,
} from "graphql/typesFinal/queryHome";

import ModalForm from "components/ModalForm";

type propsContacts = {
  contacts: {
    email: queryHome_home_boxMain_email;
    linksSocials: queryHome_home_boxMain_linksSocials[];
  };
};
const IconsContact = ({ contacts }: propsContacts) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack spacing="0.8rem" mb="1rem">
        {contacts.linksSocials.map((icons) => (
          <S.Li key={icons.name}>
            <Link href={icons.url} passHref>
              <ChakraLink
                isExternal
                aria-label={icons.ariaLabel}
                _focus={{ border: "0" }}
              >
                {icons.name === "github" && (
                  <FaGithub id={icons.name} title={icons.title} />
                )}
                {icons.name === "linkedin" && (
                  <TiSocialLinkedinCircular
                    id={icons.name}
                    title={icons.title}
                  />
                )}
                {icons.name === "whatsapp" && (
                  <FaWhatsapp id={icons.name} title={icons.title} />
                )}
              </ChakraLink>
            </Link>
          </S.Li>
        ))}

        <S.Li>
          <MdEmail
            id={contacts.email.title}
            title={contacts.email.email}
            aria-label={contacts.email.ariaLabel}
            onClick={onOpen}
          />
        </S.Li>
      </HStack>
      <ModalForm onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default IconsContact;
