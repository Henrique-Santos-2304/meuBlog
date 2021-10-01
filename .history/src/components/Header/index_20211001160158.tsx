import * as S from "./styles";
import Henrique from "../../../public/img/hero-illustration.svg";
import Image from "next/image";

const Header = () => {
  return (
    <S.Wrapper>
      <Image src={Henrique} width="80" height="100"></Image>
      <S.Tittle>
        {" "}
        Tech <S.Title2>Web</S.Title2>
      </S.Tittle>
    </S.Wrapper>
  );
};

export default Header;
