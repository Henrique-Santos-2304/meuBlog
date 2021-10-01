import Logo from "./Logo";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Wrapper>
      <S.MenuContainer>
        <Logo />
      </S.MenuContainer>
    </S.Wrapper>
  );
};

export default Header;
