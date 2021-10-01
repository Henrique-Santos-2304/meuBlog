import * as S from "./styles";
import ActiveLink from "../ActiveLink";

const Menu = () => (
  <S.Wrapper>
    <ActiveLink activeClassName={S.active} href="/">
      <a>Home</a>
    </ActiveLink>
    <ActiveLink activeClassName={S.active} href={"#"}>
      <a>Projetos</a>
    </ActiveLink>
    <ActiveLink activeClassName={S.active} href={`#`}>
      <a>Projetos</a>
    </ActiveLink>
  </S.Wrapper>
);

export default Menu;
