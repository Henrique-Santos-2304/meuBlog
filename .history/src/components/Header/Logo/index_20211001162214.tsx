import * as S from "./styles";
import Henrique from "../../../public/img/hero-illustration.svg";
import Image from "next/image";

const Logo = () => (
  <S.Wrapper>
    <S.Image>
      <Image src={Henrique} height="100%" width="100%"></Image>
    </S.Image>
    <S.TextWrapper>
      <S.Tittle>
        Tech <S.Title2>Web</S.Title2>
      </S.Tittle>
      <S.Name> Henrique dos Santos </S.Name>
    </S.TextWrapper>
  </S.Wrapper>
);

export default Logo;
