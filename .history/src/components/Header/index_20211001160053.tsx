import * as S from "./styles";
import Henrique from "../../../public/img/hero-illustration.svg";
import Image from "next/image";

const Header = () => {
  return (
    <S.Wrapper>
      <Image src={Henrique} width="80px" height="100%"></Image>
    </S.Wrapper>
  );
};

export default Header;
