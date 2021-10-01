import * as S from "./styles";
import ActiveLink from "../ActiveLink";

const Menu = () => (
  <S.Wrapper>
    <ActiveLink href="/">
      <a>Home</a>
    </ActiveLink>
    <ActiveLink href={"/project"}>
      <a>Projetos</a>
    </ActiveLink>
    <ActiveLink href={`/about`}>
      <a>Sobre</a>
    </ActiveLink>
    <ActiveLink href={`/contact`}>
      <a>Contato</a>
    </ActiveLink>
  </S.Wrapper>
);

export default Menu;
