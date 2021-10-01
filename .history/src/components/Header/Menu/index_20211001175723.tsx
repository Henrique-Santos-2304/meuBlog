import * as S from "./styles";
import ActiveLink from "../ActiveLink";

const Menu = () => (
  <S.Wrapper>
    <ActiveLink activeClassName={S.active} href="/">
      <a>Home</a>
    </ActiveLink>
    <ActiveLink activeClassName={S.active} href={"/projetos"}>
      <a>Projetos</a>
    </ActiveLink>
    <ActiveLink activeClassName={S.active} href={`/sobre`}>
      <a>Sobre</a>
    </ActiveLink>
    <ActiveLink activeClassName={S.active} href={`/contato`}>
      <a>Contato</a>
    </ActiveLink>
  </S.Wrapper>
);

export default Menu;
