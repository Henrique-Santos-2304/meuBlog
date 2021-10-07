import * as S from "./styles";
export type MenuIsOpen = {
  isOpen?: boolean;
};
const MenuLink = ({ isOpen = false }: MenuIsOpen) => (
  <S.Wrapper aria-hidden={!isOpen} data-testid="menuLinks" isOpen={isOpen}>
    <S.MenuLink href="#">Inicio</S.MenuLink>
    <S.MenuLink href="#project">Projetos</S.MenuLink>
    <S.MenuLink href="#skills">Habilidades</S.MenuLink>
    <S.MenuLink href="#about">Sobre</S.MenuLink>
  </S.Wrapper>
);

export default MenuLink;
