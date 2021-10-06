import Logo from "components/Logo";
import MenuIcon from "components/MenuIcon";
import * as S from "./styles";

const Header = () => (
  <S.ContentBody>
    <S.Wrapper>
      <Logo />
      <MenuIcon check={false} />
    </S.Wrapper>
  </S.ContentBody>
);

export default Header;
