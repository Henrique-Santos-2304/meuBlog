import Logo from "./Logo";
import Menu from "./Menu";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Wrapper>
      <S.MenuContainer>
        <Logo />
        <Menu />
      </S.MenuContainer>
    </S.Wrapper>
  );
};

export default Header;
