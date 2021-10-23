import * as S from "./styles";
import { VStack } from "@chakra-ui/react";
import Link from "next/link";

type ButtonProps = { onClose?: () => void };

const MenuLinks = ({ onClose }: ButtonProps) => (
  <S.Navigation onClick={onClose}>
    <VStack spacing="6rem">
      <S.WrapperLink>
        <Link href="/">Inicio</Link>
      </S.WrapperLink>
      <S.WrapperLink>
        <Link href="/projects">Projetos</Link>
      </S.WrapperLink>
      <S.WrapperLink>
        <Link href="/skilss">Habilidades</Link>
      </S.WrapperLink>
      <S.WrapperLink>
        <Link href="/contact">Contato</Link>
      </S.WrapperLink>
    </VStack>
  </S.Navigation>
);

export default MenuLinks;