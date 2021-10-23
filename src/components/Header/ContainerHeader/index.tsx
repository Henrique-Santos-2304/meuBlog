import * as S from "./styles";
import { useDisclosure } from "@chakra-ui/react";

import Menu from "components/globalComponents/Menu";
import Container from "components/globalComponents/Container";

const ContainerHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container asHeight="medium">
      <S.Wrapper>
        <S.Logo aria-label="logo do site webdev">
          <S.PreText>
            Web<span>Dev</span>
          </S.PreText>
        </S.Logo>

        <S.ButtonMenu
          onClick={onOpen}
          aria-label="Botão para abrir um menu de opções"
          title="Abra o Menu"
        >
          <S.IconMenu />
        </S.ButtonMenu>

        <Menu onClose={onClose} isOpen={isOpen} />
      </S.Wrapper>
    </Container>
  );
};
export default ContainerHeader;
