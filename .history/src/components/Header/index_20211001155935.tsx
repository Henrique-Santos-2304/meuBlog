import * as S from "./styles";
import Henrique from "../../../public/img/hero-illustration.svg";
import Image from "next/image";

const Header = () => {
  return (
    <S.Wrapper>
      <Image src={Henrique}></Image>
    </S.Wrapper>
  );
};

export default Header;
