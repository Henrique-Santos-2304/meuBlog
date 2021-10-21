/* eslint-disable @next/next/link-passhref */
import { HStack, Link as ChakraLink, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import * as S from "./styles";
import ModalForm from "components/ModalForm";
import {
  queryHome_home_boxMain_email,
  queryHome_home_boxMain_linksSocials,
} from "graphql/typesFinal/queryHome";

type propsContacts = {
  contacts: {
    email: queryHome_home_boxMain_email;
    linksSocials: queryHome_home_boxMain_linksSocials[];
  };
};
const IconsContact = ({ contacts }: propsContacts) => {
  console.log(contacts);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const iconReturn = (id: string, title: string) => {
    if (id === "github") return <FaGithub id={id} title={title} />;
    if (id === "linkedin")
      return <TiSocialLinkedinCircular id={id} title={title} />;
    if (id === "whatsapp") return <FaWhatsapp id={id} title={title} />;
  };
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
                {iconReturn(icons.name, icons.title)}
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
