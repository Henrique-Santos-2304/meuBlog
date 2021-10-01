import * as S from "./styles";
import Henrique from "../../../public/img/hero-illustration.svg";
import Image from "next/image";

const Header = () => {
  return (
    <S.Wrapper>
      <S.Image>
        <Image src={Henrique}></Image>
      </S.Image>
      <S.Tittle>
        Tech <S.Title2>Web</S.Title2>
      </S.Tittle>
    </S.Wrapper>
  );
};

export default Header;
