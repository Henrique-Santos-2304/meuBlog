/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Container from "components/globalComponents/Container";
import * as S from "./styles";
import Image from "next/image";
import { LogoPage } from "graphql/typesQueries/types";
type propsHeader = { dataHeader: LogoPage };

const Header = ({ dataHeader }: propsHeader) => {
  console.log(dataHeader);
  return (
    <Container asHeight="small">
      <S.WrapperHeader>
        <S.ContentLogo aria-label={dataHeader.alt}>
          <S.LogoImage>
            <Image
              src={dataHeader.imageLogo.url}
              alt={dataHeader.alt}
              layout="fill"
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
