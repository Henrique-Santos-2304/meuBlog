import * as S from "./styles";
import { Flex } from "@chakra-ui/react";

const MenuLinks = () => (
  <S.Navigation>
    <Flex align="center" direction="column" mt="5rem">
      <S.WrapperLink>
        <S.Link href="#">Inicio</S.Link>
      </S.WrapperLink>
      <S.WrapperLink>
        <S.Link href="#project">Projetos</S.Link>
      </S.WrapperLink>
      <S.WrapperLink>
        <S.Link href="#about">Sobre</S.Link>
      </S.WrapperLink>
      <S.WrapperLink>
        <S.Link href="#contact">Contato</S.Link>
      </S.WrapperLink>
    </Flex>
  </S.Navigation>
);

export default MenuLinks;
