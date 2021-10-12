import * as S from "./styles";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";

type ButtonProps = { onClose?: () => void };

const MenuLinks = ({ onClose }: ButtonProps) => (
  <S.Navigation onClick={onClose}>
    <Flex align="center" direction="column" mt="5rem">
      <S.WrapperLink>
        <Link href="/">Inicio</Link>
      </S.WrapperLink>
      <S.WrapperLink>
        <Link href="/projects">Projetos</Link>
      </S.WrapperLink>
      <S.WrapperLink>
        <Link href="/about">Sobre</Link>
      </S.WrapperLink>
      <S.WrapperLink>
        <Link href="/contact">Contato</Link>
      </S.WrapperLink>
    </Flex>
  </S.Navigation>
);

export default MenuLinks;
