/* eslint-disable @next/next/link-passhref */
import * as S from "./styles";
import { useDisclosure } from "@chakra-ui/react";
import Link from "next/link";

import {
  queryHome_home_boxMain_email,
  queryHome_home_boxMain_linksSocials,
} from "graphql/typesFinal/queryHome";

import ModalForm from "components/FormsComponents/ModalForm";
import ICon from "../ICon";

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
      <S.WrapperIcons>
        {contacts.linksSocials.map((icons) => (
          <S.Li key={icons.name}>
            <Link href={icons.url} passHref>
              <S.Ancorage aria-label={icons.ariaLabel}>
                <ICon name={icons.name} title={icons.title} />
              </S.Ancorage>
            </Link>
          </S.Li>
        ))}

        <S.Li>
          <S.EmailIcon
            id={contacts.email.title}
            title={contacts.email.email}
            aria-label={contacts.email.ariaLabel}
            onClick={onOpen}
          />
        </S.Li>
      </S.WrapperIcons>
      <ModalForm onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default IconsContact;
