/* eslint-disable @next/next/no-img-element */
import Container from "components/globalComponents/Container";
import * as S from "./styles";

const Header = () => (
  <Container asHeight="small">
    <S.WrapperHeader>
      <S.ContentLogo aria-label="Logo do Portfólio">
        <S.Logo>
          Web<span>Dev</span>
        </S.Logo>
      </S.ContentLogo>

      <S.Icon role="button" aria-label="Botão Para abrir o Menu"></S.Icon>
    </S.WrapperHeader>
  </Container>
);

export default Header;
