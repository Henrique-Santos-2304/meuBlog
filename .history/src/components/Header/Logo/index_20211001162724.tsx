import * as S from "./styles";
import Henrique from "../../../../public/img/hero-illustration.svg";
import Image from "next/image";

const Logo = () => (
  <S.Wrapper>
    <S.Image>
      <Image src={Henrique} height="120%" width="120%"></Image>
    </S.Image>
    <S.TextWrapper>
      <S.Tittle>
        Web <S.Title2>Dev</S.Title2>
      </S.Tittle>
      <S.Name> Henrique dos Santos </S.Name>
    </S.TextWrapper>
  </S.Wrapper>
);

export default Logo;
