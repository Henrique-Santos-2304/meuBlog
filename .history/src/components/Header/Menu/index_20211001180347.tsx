import * as S from "./styles";
import ActiveLink from "../ActiveLink";

const Menu = () => (
  <S.Wrapper>
    <ActiveLink href="/">
      <S.LinkFor>Home</S.LinkFor>
    </ActiveLink>
    <ActiveLink href={"/project"}>
      <S.LinkFor>Projetos</S.LinkFor>
    </ActiveLink>
    <ActiveLink href={`/about`}>
      <S.LinkFor>Sobre</S.LinkFor>
    </ActiveLink>
    <ActiveLink href={`/contact`}>
      <S.LinkFor>Contato</S.LinkFor>
    </ActiveLink>
  </S.Wrapper>
);

export default Menu;
