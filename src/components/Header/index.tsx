/* eslint-disable @next/next/no-img-element */
import Container from "components/globalComponents/Container";
import MenuNav from "components/MenuNav/MenuMobile";
import * as S from "./styles";

const Header = () => (
  <Container asHeight="small">
    <MenuNav />
    <S.WrapperHeader>
      <S.ContentLogo aria-label="Logo do Portfólio">
        <S.Logo>
          Web<span>Dev</span>
        </S.Logo>
      </S.ContentLogo>
    </S.WrapperHeader>
  </Container>
);

export default Header;
