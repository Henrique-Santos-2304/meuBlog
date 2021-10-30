/* eslint-disable @next/next/no-img-element */
import Container from "components/globalComponents/Container";
import MenuMobile from "components/globalComponents/MenuNav/MenuMobile";
import * as S from "./styles";
import Image from "next/image";

const Header = () => (
  <Container asHeight="small">
    <MenuMobile />

    <S.WrapperHeader>
      <S.ContentLogo aria-label="Logo do Portfólio">
        <S.LogoImage>
          <Image
            src="https://res.cloudinary.com/defnibbpl/image/upload/v1635273619/a61237_orkfde.png"
            layout="fill"
          />
        </S.LogoImage>
        <S.Logo>
          Web<span>Dev</span>
        </S.Logo>
      </S.ContentLogo>
    </S.WrapperHeader>
  </Container>
);

export default Header;
