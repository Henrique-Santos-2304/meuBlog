/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Container from "components/globalComponents/Container";
import { LogoPage } from "graphql/typesQueries/types";
import Image from "next/image";
import * as S from "./styles";
type propsHeader = { dataHeader: LogoPage };

const Header = ({ dataHeader }: propsHeader) => {
  return (
    <Container asHeight="small">
      <S.WrapperHeader>
        <S.ContentLogo aria-label={dataHeader.alt}>
          <S.LogoImage>
            <Image
              src={dataHeader.imageLogo.url}
              alt={dataHeader.alt}
              layout="fill"
              priority
            />
          </S.LogoImage>
          <S.Logo>
            {dataHeader.preText}
            <span>{dataHeader.proText}</span>
          </S.Logo>
        </S.ContentLogo>
      </S.WrapperHeader>
    </Container>
  );
};

export default Header;
